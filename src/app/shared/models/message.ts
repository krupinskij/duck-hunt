export enum MessageSender {
  Target = "Sender_Target",
  Game = "Sender_Game"
}

export enum MessageAction {
  KillDuck = "Action_KillDuck",
  LoseDuck = "Action_LoseDuck",
  RemoveDuck = "Action_RemoveDuck",
  ForgetDuck = "Action_ForgetDuck",
  PickDuck = "Action_PickDuck",
  Laugh = "Action_Laugh",
  Reload = "Action_Reload"
}

interface MessagePayload {
  action: MessageAction,
  state: any
}

export interface Message {
  sender: MessageSender,
  payload: MessagePayload
}