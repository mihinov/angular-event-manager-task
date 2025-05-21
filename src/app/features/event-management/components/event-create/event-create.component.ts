import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { EventType, NewAnyEvent } from '../../models/event.model';
import { FormsModule } from '@angular/forms';
import { SportEventFormComponent } from '../sport-event-form/sport-event-form.component';
import { MusicEventFormComponent } from '../music-event-form/music-event-form.component';

@Component({
  selector: 'app-event-create',
  imports: [FormsModule, SportEventFormComponent, MusicEventFormComponent],
  templateUrl: './event-create.component.html',
  styleUrl: './event-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventCreateComponent {
  formType: EventType = 'sport';
  @Output() submitEvent = new EventEmitter<NewAnyEvent>();

  save(event: NewAnyEvent): void {
    this.submitEvent.emit(event);
  }
}
