// import { ApiAuth, ApiProfile } from "../../../api/ApiConfig";
// import axiosClient from "../../../api/AxiosClients";
// import { BaseResponse } from "../../../api/BaseResponse";
// import { UserCache } from "../../../storages/Storages";

// export const postCreateUserGoalsApi = async (): Promise<BaseResponse<any>> => {
//     try {
//         const userId = UserCache.getInstance.getUserCache().id;
//         const token = UserCache.getInstance.getAccessToken();
//         const url = ApiProfile.API_CREATE_USER_GOALS(userId);
//         const response: BaseResponse<BaseResponse<any>> = await axiosClient.post(url,
//             {
//                 // token: idToken,
//             },
//             {
//                 headers: {
//                     Authorization: token,
//                 },
//             },
//         );
//         return response.data;
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// };