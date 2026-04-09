import { User } from 'firebase/auth';
import { HistoryRecordProps } from './dashboard';

export interface UserData {
  uid: string;
  email: string | null;
  about?: string;
  socials?: {
    github: string;
    telegram: string;
  };
  displayName: string | null;
  currentExp: number;
  progress: number;
  registrationDate: Date;
  streak: {
    current: number;
    best: number;
  };
  history: HistoryRecordProps[];
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
