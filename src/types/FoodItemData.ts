class FoodItemResponse {
    id: number = 0;
    user_id: number | null = null; // Null nếu là admin food, có giá trị nếu là user food
    name: string = '';
    avatar: string = '';
    calories: number = 0;
    protein: number = 0;
    carbs: number = 0;
    fat: number = 0;
    food_type: number = 0; // "admin" hoặc "user" để phân biệt loại thức ăn
    created_at: Date = new Date();
    updated_at: Date = new Date();
  
    constructor(data?: Partial<FoodItemResponse>) {
      Object.assign(this, data);
    }
  }
  
  export default FoodItemResponse;