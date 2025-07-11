export enum TaskState {
  BACKLOG = 'BACKLOG',
  THIS_WEEK = "THIS WEEK",
  TODAY = 'TODAY',
  DONE = 'DONE',
};

export enum WindowStates {
  TASK = 'TASK',
  DAY = 'DAY',
  FULL = 'FULL',
};

export interface SubtaskType {
  id: string;
  description: string;
  done: boolean;
}

export interface TaskType {
  id: string;
  client: string;
  description: string;
  subtasks: SubtaskType[];
  owner: {
    name: string;
    color: string;
  };
  state: TaskState;
  timeout: number;
  createdAt: string;
  updatedAt: string;
};