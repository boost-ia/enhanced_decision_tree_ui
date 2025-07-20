export type ChatResponse = {
  text: string;
  nodeId: number;
};

export type LinkContentBlock = {
  url: string;
  content: string;
};

export type MarkdownContentBlock = {
  content: string;
};

export type ChatContentBlock = {
  type: 'link' | 'markdown' | 'chat';
  data: LinkContentBlock | MarkdownContentBlock;
};

export type ChatNode = {
  id: number;
  content: ChatContentBlock[];
  parentId?: number;
  responses: ChatResponse[];
  keywords?: string[];
  agentMessage?: string;
};

export type DiscussionStep = {
  node: ChatNode;
  nextNodeId?: number;
  textualResponse?: string;
};

export type Discussion = DiscussionStep[];
