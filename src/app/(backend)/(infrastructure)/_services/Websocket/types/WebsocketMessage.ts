export interface WebsocketMessage {
    messageType: string;
}

export interface WebsocketErrorMessage extends WebsocketMessage {
    message: string;
    code: string;
}
