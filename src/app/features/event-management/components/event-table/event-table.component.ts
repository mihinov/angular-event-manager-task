import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { AnyEvent } from '../../models/event.model';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-table',
  imports: [],
  templateUrl: './event-table.component.html',
  styleUrl: './event-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventTableComponent {
	private readonly _eventService = inject(EventService);
  @Input() events: AnyEvent[] = [];
  @Output() edit = new EventEmitter<AnyEvent>();

  editEvent(event: AnyEvent): void { this.edit.emit(event); }
  deleteEvent(event: AnyEvent): void {
		this._eventService.remove(event.id);
	}
}
