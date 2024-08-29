import { ApiAuth, ApiProfile } from "../../../api/ApiConfig";
import axiosClient from "../../../api/AxiosClients";
import { BaseResponse } from "../../../api/BaseResponse";
import { UserCache } from "../../../storages/Storages";
import UserResponse from "../../../types/User";

export const postLoginApi = async (idToken: string): Promise<BaseResponse<any>> => {
    try {
        const token = UserCache.getInstance.getAccessToken();
        const url = ApiAuth.API_GOOGLE_AUTH();
        const response: BaseResponse<BaseResponse<any>> = await axiosClient.post(url,
            {
                token: idToken,
            },
            {
                headers: {
                    Authorization: token,
                },
            },
        );
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getDetaiUserApi = async (): Promise<BaseResponse<UserResponse>> => {
    try {
        const token = UserCache.getInstance.getAccessToken();
        const url = ApiProfile.API_GET_USER;
        const response: BaseResponse<BaseResponse<UserResponse>> = await axiosClient.get(url,
            {
                headers: {
                    Authorization: token,
                },
            },
        );
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};