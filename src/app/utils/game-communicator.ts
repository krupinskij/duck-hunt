import { Subject } from "rxjs";
import { filter } from "rxjs/operators";
import { Message, MessageAction, MessageSender } from "../shared/models/message";
import { Communicator } from "./communicator";

export class GameCommunicator extends Communicator {
  constructor(_subject: Subject<Message>) {
    super(_subject)
  }

  handleMessanger(_messageHandler: (message: Message) => void) {
    this._subject.pipe(
      filter(message => message.sender === MessageSender.Duck)
    ).subscribe(_messageHandler);
  }

  killDuck(state: number[]) {
    this.send(MessageAction.KillDuck, state);
  }

  loseDuck(state: number[]) {
    this.send(MessageAction.LoseDuck, state);
  }

  protected send(action: MessageAction, state: unknown) {
    this._subject.next({
      sender: MessageSender.Game, 
      payload: { action, state }
    })
  }
}