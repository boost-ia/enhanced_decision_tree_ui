import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChatNode, Discussion, DiscussionStep } from '../models/models';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class DiscussionManagerService {
  private readonly apiUrl = environment.apiUrl;

  private _nodes: ChatNode[] = [];
  private _discussion: Discussion = [];

  get nodes(): ChatNode[] {
    return this._nodes;
  }

  get discussion(): Discussion {
    return this._discussion;
  }

  scrollToBottom$ = new Subject<void>();

  constructor(private http: HttpClient, private loading: LoadingService) {
    this.loadInitialNodes();
  }

  private loadInitialNodes(): void {
    this.http.get<ChatNode[]>(`${this.apiUrl}/nodes`).subscribe((nodes) => {
      this._nodes = nodes;
      const initialDiscussionStep: DiscussionStep = {
        node: this._nodes[0],
      };
      this._discussion.push(initialDiscussionStep);
      console.log('Initial nodes loaded:', this._nodes);
      console.log('Initial discussion step added:', initialDiscussionStep);
    });
  }

  onResponseClick(nodeId: number, nextNodeId: number): void {
    if (nodeId !== this.discussion[this.discussion.length - 1].node.id) {
      //Delete from the end until we reach the clicked node.
      while (
        this._discussion.length > 1 &&
        this._discussion[this._discussion.length - 1].node.id !== nodeId
      ) {
        console.log('Removing last discussion step:', this._discussion.pop());
      }
    }

    //Update the selected response.
    this._discussion[this._discussion.length - 1].nextNodeId = nextNodeId;

    //Push the new node.
    const nextNode = this._nodes.find((node) => {
      return node.id === nextNodeId;
    });
    if (nextNode) {
      const newDiscussionStep: DiscussionStep = { node: nextNode };
      console.log('Adding new discussion step:', newDiscussionStep);
      this._discussion.push(newDiscussionStep);
      setTimeout(() => this.scrollToBottom$.next(), 100);
    }
  }

  restartDiscussion(): void {
    this._discussion = [];
    this.loadInitialNodes();
  }

  sendMessage(message: string): void {
    //Add the textual response to the last step in the discussion.
    if (this._discussion.length > 0) {
      this._discussion[this._discussion.length - 1].textualResponse = message;
    }

    this.loading.setLoadingState(true);
    setTimeout(() => this.scrollToBottom$.next(), 100);
    this.http
      .post<{ message: string; nextNodeId: number }>(
        `${this.apiUrl}/messages`,
        {
          discussion: this._discussion,
          message: message,
        }
      )
      .subscribe({
        next: (response) => {
          let nextNode = this._nodes.find(
            (node) => node.id === response.nextNodeId
          );
          if (nextNode) {
            nextNode.agentMessage = response.message;
            this.discussion.push({
              node: nextNode,
            });
            setTimeout(() => this.scrollToBottom$.next(), 100);
          }
          this.loading.setLoadingState(false);
        },
        error: (error) => {
          console.error('Error sending message:', error);
          this.loading.setLoadingState(false);
        },
      });
  }
}
