export class AdminRole{
    id: string;
    user_id: string;
    role: Roles;
}

export enum Roles{
    Admin = 1,
    Developer = 2,
    Player = 3,
}