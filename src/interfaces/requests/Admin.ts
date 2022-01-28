export interface IAdminLoginRequestBody {
  name: string;
  password: string;
}

export interface ICreateUserByAdminRequestBody {
  restaurant: string;
  name: string;
  password: string;
}
