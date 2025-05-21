import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { AnyEvent } from '../../models/event.model';
import { CommonModule } from '@angular/common';
import { MusicEventFormComponent } from '../music-event-form/music-event-form.component';
import { SportEventFormComponent } from '../sport-event-form/sport-event-form.component';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-edit',
  imports: [CommonModule, SportEventFormComponent, MusicEventFormComponent],
  templateUrl: './event-edit.component.html',
  styleUrl: './event-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventEditComponent {
	private readonly _eventService = inject(EventService);
  @Input() event!: AnyEvent;
  @Output() submitEvent = new EventEmitter<AnyEvent>();
  @Output() cancel = new EventEmitter<void>();

  get formType(): 'sport' | 'music' {
    return this.event.type;
  }

	clickCancel(): void {
		this.cancel.emit();
	}

  save(event: AnyEvent): void {
		this.submitEvent.emit(event);
		this._eventService.update(event);
  }
}
