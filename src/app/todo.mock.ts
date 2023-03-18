export type CategoryType =
  | 'shopping'
  | 'health'
  | 'work'
  | 'bills'
  | 'cleaning'
  | 'other';

export interface ITodo {
  id: number;
  content: string;
  type: CategoryType;
  isUrgent: boolean;
  doneDate: Date | null;
}

export const ITODOS: ITodo[] = [
  {
    id: 1,
    content: '🛍️',
    type: 'shopping',
    isUrgent: false,
    doneDate: null,
  },
  {
    id: 2,
    content: '💊️',
    type: 'health',
    isUrgent: false,
    doneDate: null,
  },
  {
    id: 3,
    content: '💼',
    type: 'work',
    isUrgent: false,
    doneDate: null,
  },
  {
    id: 4,
    content: '💸',
    type: 'bills',
    isUrgent: false,
    doneDate: null,
  },
  {
    id: 5,
    content: '🧼 ',
    type: 'cleaning',
    isUrgent: false,
    doneDate: null,
  },
  {
    id: 6,
    content: '🤷‍♀️',
    type: 'other',
    isUrgent: false,
    doneDate: null,
  },
];
