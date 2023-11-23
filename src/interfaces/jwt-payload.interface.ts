export interface UserInterface {
  activo: boolean;
  avatar: string;
  email: string;
  id: string;
  roles: string[];
  username: string;
}

export interface Roles {
  rol: string;
  description: string;
}

export interface JwtPayload {
  id: string;
}
