

export interface Prospect {
  id: number;
  name: string;
  email: string;
  phone: string;
  status: string;
  [key: string]: any; // for custom columns
}

export interface Column {
  key: string;
  label: string;
  type: 'text' | 'checkbox' | 'date' | 'number';
}
