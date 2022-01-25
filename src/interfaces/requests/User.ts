export interface ICreateUserRequestBody {
  restaurant: string;
  name: string;
  password: string;
  role: [string];
  salary: number;
}

export interface IUpdateUserRequestBody {
  id: string;
  name?: string;
  password?: string;
  role?: [string];
  salary?: number;
}
