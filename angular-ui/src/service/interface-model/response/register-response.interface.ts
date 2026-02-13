import { BaseResponseInterface } from "../base-response.interface"

export interface RegisterResponseInterface extends BaseResponseInterface {
    data: RegisterData;
}
export interface RegisterData {
    token: string;
}
