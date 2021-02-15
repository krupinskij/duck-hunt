export enum MessageSender {
  Duck = "Sender_Duck",
  Game = "Sender_Game"
}

export enum MessageAction {
  KillDuck = "Action_KillDuck",
  LoseDuck = "Action_LoseDuck",
  RemoveDuck = "Action_RemoveDuck",
  NoBullets = "Action_NoBullets"
}

interface MessagePayload {
  action: MessageAction,
  state: any
}

export interface Message {
  sender: MessageSender,
  payload: MessagePayload
}