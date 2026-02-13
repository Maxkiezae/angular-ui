import { BaseResponseInterface } from "../base-response.interface";

export class LoginResponseInterface extends BaseResponseInterface {
    data: LoginData = { token: '' };
}
export interface LoginData {
    token: string;
}