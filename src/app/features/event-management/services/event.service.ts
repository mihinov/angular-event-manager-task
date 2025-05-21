import { Injectable, signal } from '@angular/core';
import { AnyEvent, NewAnyEvent } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private _events = signal<AnyEvent[]>([]);

  getEvents = () => this._events.asReadonly();

  add(event: NewAnyEvent): void {
    const newEvent = { ...event, id: window.crypto.randomUUID() } as AnyEvent;
		this._events.update(e => [...e, newEvent]);
  }


  update(updated: AnyEvent): void {
    this._events.update(e => e.map(ev => ev.id === updated.id ? updated : ev));
  }

  remove(id: string): void {
    this._events.update(e => e.filter(ev => ev.id !== id));
  }
}
