import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ChatContentBlock } from 'src/app/models/models';

@Component({
  selector: 'app-block-display',
  imports: [CommonModule],
  templateUrl: './block-display.component.html',
  styleUrl: './block-display.component.scss',
})
export class BlockDisplayComponent {
  @Input() block!: ChatContentBlock;

  ngOnInit(): void {
    console.log('Displaying block:', this.block);
  }

  get isMarkdown(): boolean {
    return this.block.type === 'markdown';
  }

  get isLink(): boolean {
    return this.block.type === 'link';
  }
}
