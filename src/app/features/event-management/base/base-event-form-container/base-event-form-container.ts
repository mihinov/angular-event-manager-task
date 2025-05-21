import { Directive, EventEmitter, Input, Output } from "@angular/core";
import { AnyEvent } from "../../models/event.model";
import { FormGroup } from "@angular/forms";

@Directive()
export abstract class BaseEventFormContainer<T extends AnyEvent> {
	private _event!: AnyEvent;
	@Output() submitEvent = new EventEmitter<T>();
  @Input({ required: true }) mode!: 'create' | 'edit';
  abstract form: FormGroup;

  abstract patchForm(event: T): void;

  @Input() set event(event: T) {
    if (event) {
			this._event = event;
      this.patchForm(event);
    }
  }

  protected _save(type: T['type']): void {
		const savedEvent = {
      ...this.form.value,
      type,
    }

		if (this.mode === 'edit') {
			savedEvent.id = this._event.id;
		}

    this.submitEvent.emit(savedEvent);

		if (this.mode === 'create') {
			this.form.reset();
		}
  }
}
