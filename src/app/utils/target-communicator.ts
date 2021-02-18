import { state } from "@angular/animations";
import { Observable, Subject } from "rxjs";
import { filter } from "rxjs/operators";
import { Message, MessageAction, MessageSender } from "../shared/models/message";
import { Communicator } from "./communicator";

export class TargetCommunicator extends Communicator {
  constructor(_subject: Subject<Message>, private _id: number) {
    super(_subject);
  }

  handleMessanger(_messageHandler: (message: Message) => void) {
    this._subject.pipe(
      filter(message => message.sender === MessageSender.Game),
      filter(message => message.payload.state.includes(this._id))
    ).subscribe(_messageHandler);
  }

  killMe(state: { points: number }) {
    this.send(MessageAction.KillDuck, state);
  }

  deleteMe(state: {}) {
    this.send(MessageAction.RemoveDuck, state);
  }

  loseMe(state: {}) {
    this.send(MessageAction.LoseDuck, state);
  }

  send(action: MessageAction, state: unknown) {
    this._subject.next({
      sender: MessageSender.Duck, 
      payload: { 
        action, state: Object.assign({}, { id: this._id }, state)
      }
    })
  }
}