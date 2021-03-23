import { Subject } from "rxjs";
import { filter } from "rxjs/operators";
import { Message, MessageAction, MessageSender } from "../../../shared/models/message";
import { Communicator } from "../../../utils/communicator";

export class DogCommunicator extends Communicator {
  constructor(_subject: Subject<Message>, private _id: number) {
    super(_subject);
  }

  handleMessanger(_messageHandler: (message: Message) => void) {
    this._subscription = this._subject.pipe(
      filter(message => message.sender === MessageSender.Game),
      filter(message => message.payload.state.includes(this._id))
    ).subscribe(_messageHandler);
  }

  reload() {
    this.send(MessageAction.Reload)
  }

  protected send(action: MessageAction, state: unknown = {}) {
    this._subject.next({
      sender: MessageSender.Target, 
      payload: { 
        action, state: Object.assign({}, { id: this._id }, state)
      }
    })
  }
}