import User from './user';

export default interface Login {
  jwt: string;
  user: User;
}