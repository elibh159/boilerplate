
export interface LoginType {
    username: string;
    password: string;
}

export interface RegisterType extends LoginType {
    first_name: string;
    last_name: string;
}