

export interface Task {
  id: number;
  title: string;
  completed: boolean;
  prospectId: number | null; // Null if not linked to a prospect
}

export interface Prospect {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: string;
  tasks: Task[]; // Add tasks to prospects
  [key: string]: any; // For custom columns
}

export interface Column {
  key: string;
  label: string;
  type: 'text' | 'checkbox' | 'date' | 'number';
}
