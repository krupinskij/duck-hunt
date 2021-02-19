import { Subject } from "rxjs";
import { Message, MessageAction } from "../shared/models/message";

export abstract class Communicator {
  constructor(protected _subject: Subject<Message>) {}

  get messanger(): Subject<Message> {
    return this._subject;
  }

  abstract handleMessanger(_messageHandler: (message: Message) => void);

  protected abstract send(action: MessageAction, state: unknown)
}