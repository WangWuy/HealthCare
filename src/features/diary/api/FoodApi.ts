import { ApiFood } from "../../../api/ApiConfig";
import axiosClient from "../../../api/AxiosClients";
import { BaseResponse } from "../../../api/BaseResponse";
import { UserCache } from "../../../storages/Storages";
import FoodItemResponse from "../../../types/FoodItemData";

export const getFoodsDataApi = async (): Promise<BaseResponse<FoodItemResponse>> => {
    try {        
        const token = UserCache.getInstance.getAccessToken();
        const url = ApiFood.API_GET_FOOD;
        const response: BaseResponse<BaseResponse<FoodItemResponse>> = await axiosClient.get(url,
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