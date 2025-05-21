export type EventType = 'sport' | 'music';

export interface BaseEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  type: EventType;
}

export interface SportEvent extends BaseEvent {
  type: 'sport';
  participants: number;
}

export interface MusicEvent extends BaseEvent {
  type: 'music';
  genre: string;
}

export type AnyEvent = SportEvent | MusicEvent;

type NewSportEvent = Omit<SportEvent, 'id'>;
type NewMusicEvent = Omit<MusicEvent, 'id'>;
export type NewAnyEvent = NewSportEvent | NewMusicEvent;
