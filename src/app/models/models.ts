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
    message: message;
    chosenAnswerContent: string;
}

export type city = {
    name: string;
    isInEn: boolean;
    OIReferent?: string;
    OILink?: string;
}