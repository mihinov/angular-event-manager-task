import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BaseEventFormComponent } from '../../base/base-event-form/base-event-form.component';
import { MusicEvent } from '../../models/event.model';
import { BaseEventFormContainer } from '../../base/base-event-form-container/base-event-form-container';

@Component({
  selector: 'app-music-event-form',
  imports: [ReactiveFormsModule, BaseEventFormComponent],
  templateUrl: './music-event-form.component.html',
  styleUrl: './music-event-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicEventFormComponent extends BaseEventFormContainer<MusicEvent> {
  form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    genre: new FormControl('', Validators.required),
  });


  override patchForm(event: MusicEvent): void {
    this.form.setValue({
      title: event.title,
      description: event.description,
      location: event.location,
      genre: event.genre,
    });
  }

	save(): void {
		this._save('music');
	}
}
