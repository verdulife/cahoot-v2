import { type Writable, writable } from 'svelte/store';
import { WindowStates } from '@/lib/types';

export const WindowState: Writable<WindowStates> = writable(WindowStates.TASK);