import { ApiAuth, ApiProfile } from "../../../api/ApiConfig";
import axiosClient from "../../../api/AxiosClients";
import { BaseResponse } from "../../../api/BaseResponse";
import { UserCache } from "../../../storages/Storages";
import UserGoalsResponse from "../../../types/UserGoalData";

export interface CreateUserGoalsData {
    goal_type: number;
    gender: string;
    age: number;
    height: number;
    weight: number;
    target_weight: number;
    rate: number;
    activity_level: number;
}

export const postCreateUserGoalsApi = async (dataCreate: CreateUserGoalsData): Promise<BaseResponse<any>> => {
    try {
        const userId = UserCache.getInstance.getUserCache().id;
        const token = UserCache.getInstance.getAccessToken();
        const url = ApiProfile.API_CREATE_USER_GOALS(userId);        
        const response: BaseResponse<BaseResponse<any>> = await axiosClient.post(url,
            {
                goal_type: dataCreate.goal_type,
                gender: dataCreate.gender,
                age: dataCreate.age,
                height: dataCreate.height,
                weight: dataCreate.weight,
                target_weight: dataCreate.target_weight,
                rate: dataCreate.rate,
                activity_level: dataCreate.activity_level,
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

export const getUserGoalsDetailApi = async (): Promise<BaseResponse<any>> => {
    try {
        const userId = UserCache.getInstance.getUserCache().id;
        const token = UserCache.getInstance.getAccessToken();
        const url = ApiProfile.API_GET_USER_GOALS(userId);        
        const response: BaseResponse<BaseResponse<UserGoalsResponse>> = await axiosClient.get(url,
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