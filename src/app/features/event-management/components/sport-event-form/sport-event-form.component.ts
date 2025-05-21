import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseEventFormComponent } from '../../base/base-event-form/base-event-form.component';
import { SportEvent } from '../../models/event.model';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseEventFormContainer } from '../../base/base-event-form-container/base-event-form-container';

@Component({
  selector: 'app-sport-event-form',
  imports: [BaseEventFormComponent, ReactiveFormsModule],
  templateUrl: './sport-event-form.component.html',
  styleUrl: './sport-event-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SportEventFormComponent extends BaseEventFormContainer<SportEvent> {
 form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    participants: new FormControl(1, Validators.required),
  });

  override patchForm(event: SportEvent): void {
    this.form.setValue({
      title: event.title,
      description: event.description,
      location: event.location,
      participants: event.participants,
    });
  }

	save(): void {
		this._save('sport');
	}
}
