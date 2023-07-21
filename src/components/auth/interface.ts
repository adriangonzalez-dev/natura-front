
export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  active: boolean;
  updatedAt: string;
  createdAt: string;
}

export interface IResponseLogin {
    user: IUser;
    token: string;
    msg: string;
}