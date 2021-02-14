export enum MessageSender {
  Duck,
  Game
}

export enum MessageContent {
  DeleteMe,
  KillMe,
  LoseMe
}

export interface Message {
  id?: number;
  sender: MessageSender,
  content: MessageContent
}