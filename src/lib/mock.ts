import { type TaskType, TaskState } from '@/lib/types';

export const mockTasks: TaskType[] = [
  {
    id: '1',
    client: 'Cliente 1',
    description: 'Tarea 1',
    subtasks: [],
    owner: {
      name: "Verdu",
      color: "gold",
    },
    state: TaskState.THIS_WEEK,
    timeout: 3600,
    createdAt: '2023-01-01',
    updatedAt: '2023-01-01',
  },
  {
    id: '2',
    client: 'Cliente 2',
    description: 'Tarea 2',
    subtasks: [],
    owner: {
      name: 'Pablo',
      color: "green",
    },
    state: TaskState.THIS_WEEK,
    timeout: 60,
    createdAt: '2023-01-01',
    updatedAt: '2023-01-01',
  },
  {
    id: '3',
    client: 'Cliente 3',
    description: 'Tarea 3',
    subtasks: [
      {
        id: '1',
        description: 'Subtarea 1',
        done: true,
      },
      {
        id: '2',
        description: 'Subtarea 2',
        done: false,
      },
    ],
    owner: {
      name: 'Marcelo',
      color: "red",
    },
    state: TaskState.DONE,
    timeout: 60,
    createdAt: '2023-01-01',
    updatedAt: '2023-01-01',
  },
  {
    id: '4',
    client: 'Cliente 4',
    description: 'Tarea 4',
    subtasks: [
      {
        id: '1',
        description: 'Subtarea 1',
        done: true,
      },
      {
        id: '2',
        description: 'Subtarea 2',
        done: false,
      },
    ],
    owner: {
      name: "Alexandra",
      color: "blue",
    },
    state: TaskState.TODAY,
    timeout: 60,
    createdAt: '2023-01-01',
    updatedAt: '2023-01-01',
  },
  {
    id: '5',
    client: 'Cliente 5',
    description: 'Tarea 5',
    subtasks: [],
    owner: {
      name: "Verdu",
      color: "gold",
    },
    state: TaskState.BACKLOG,
    timeout: 60,
    createdAt: '2023-01-01',
    updatedAt: '2023-01-01',
  },
];