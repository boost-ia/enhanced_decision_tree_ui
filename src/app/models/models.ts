export type ChatResponse = {
  text: string;
  nodeId: string;
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
  parentId?: string;
  responses: ChatResponse[];
  keywords?: string[];
};
