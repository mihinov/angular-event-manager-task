import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { EventTableComponent } from '../event-table/event-table.component';
import { AnyEvent, EventType, NewAnyEvent } from '../../models/event.model';
import { EventService } from '../../services/event.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventCreateComponent } from '../event-create/event-create.component';
import { EventEditComponent } from '../event-edit/event-edit.component';

@Component({
  selector: 'app-event-manager',
  imports: [
		EventTableComponent,
		CommonModule,
		FormsModule,
		EventCreateComponent,
		EventEditComponent
	],
  templateUrl: './event-manager.component.html',
  styleUrl: './event-manager.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventManagerComponent {
	private readonly eventService = inject(EventService);
	events = this.eventService.getEvents();
  formType: EventType = 'sport';
  editingEvent = signal<AnyEvent | null>(null);

 // Добавить новое событие
  addEvent(event: NewAnyEvent): void {
    this.eventService.add(event);
  }

  // Начать редактирование
  startEdit(event: AnyEvent): void {
    this.editingEvent.set(event);
  }

  // Завершить редактирование
  updateEvent(): void {
    this.editingEvent.set(null);
  }

  // Отмена редактирования
  cancelEdit(): void {
    this.editingEvent.set(null);
  }

  // Удалить мероприятие
  deleteEvent(id: string): void {
    this.eventService.remove(id);
		if (this.editingEvent()?.id === id) {
    	this.editingEvent.set(null);
  	}
  }

}
