export type answer = {
    content: string;
    nextMessageId: number;
}

export type messageContentElement = {
    isLink: boolean;
    content: string;
    link?: string;
}

export type message = {
    id: number;
    content: messageContentElement[];
    answers: answer[];
}

export type historyMessage = {
    id: number;
    content: messageContentElement[];
    chosenAnswerContent: string;
}