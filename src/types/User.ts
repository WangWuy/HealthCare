class UserResponse {
    id: number = 0
    phone: string = ""
    avatar: string = ""
    email: string = ""
    prefix: string = ""
    gender: number = 0
    birthday: string = ""
    normalize_name: string = ""
    first_name: string = ""
    last_name: string = ""
    status: number = 0
    access_token: string = ""
    jwt_token: string = ""
    refresh_token: string = ""
    token_type: string = ""
    
    constructor(data?: Partial<UserResponse>) {
        Object.assign(this, data)
    }
}

export default UserResponse