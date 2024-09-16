class UserGoalsResponse {
    created_at: string = '';
    updated_at: string = '';
    id: number = 0;
    user_id: number = 0;
    goal_type: number = 0;
    gender: string = '';
    age: number = 0;
    start_date: string = '';
    end_date: string = '';
    weight: number = 0;
    target_weight: number = 0;
    rate: number = 0;
    activity_level: number = 0;
    height: number = 0;

    constructor(data?: Partial<UserGoalsResponse>) {
        Object.assign(this, data);
    }
}

export default UserGoalsResponse;