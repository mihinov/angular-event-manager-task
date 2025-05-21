import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BaseEvent } from '../../models/event.model';
import { BaseEventFormControls } from './base-event-form.model';


@Component({
  selector: 'app-base-event-form',
  imports: [ReactiveFormsModule],
  templateUrl: './base-event-form.component.html',
  styleUrl: './base-event-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseEventFormComponent<
  T extends BaseEventFormControls = BaseEventFormControls
> {
  @Input() form!: FormGroup<T>;

  getBaseData(): Omit<BaseEvent, 'type'> {
    return this.form.value as any;
  }

	get titleControl(): FormControl<string | null> {
		return this.form.controls.title as FormControl<string | null>;
	}

	get descriptionControl(): FormControl<string | null> {
		return this.form.controls.description as FormControl<string | null>;
	}

	get locationControl(): FormControl<string | null> {
		return this.form.controls.location as FormControl<string | null>;
	}
}
