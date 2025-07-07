export enum TaskState {
  BACKLOG = 'BACKLOG',
  THIS_WEEK = "THIS WEEK",
  TODAY = 'TODAY',
  DONE = 'DONE',
};

export enum TaskPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
};

export interface TaskType {
  id: string;
  client: string;
  description: string;
  subtasks: string[];
  owner: string;
  state: TaskState;
  timeout: number;
  createdAt: string;
  updatedAt: string;
  priority: TaskPriority;
};