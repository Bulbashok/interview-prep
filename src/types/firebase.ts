import { User } from 'firebase/auth';

export interface UserData {
  uid: string;
  email: string | null;
  displayName: string | null;
  currentExp: number;
  progress: number;
  registrationDate: Date;
  streak: {
    current: number;
    best: number;
  };
  history: [];
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface SignUpData {
  email: string;
  password: string;
  displayName?: string;
}

export interface SignInData {
  email: string;
  password: string;
}
