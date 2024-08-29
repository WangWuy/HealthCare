import { MMKV } from 'react-native-mmkv';
import UserResponse from "../types/User";

const storage = new MMKV()

const KEY_CACHE = {
  USER: "KEY_USER_CACHE",
  CONFIG: "KEY_CONFIG_CACHE",
  RELOAD_LIST: "RELOAD_LIST",
}

export class UserCache {
  private static instance: UserCache;

  private constructor() { }

  static get getInstance(): UserCache {
    if (!this.instance) {
      this.instance = new UserCache()
    }

    return this.instance
  }

  saveUserCache(user: UserResponse) {
    storage.set(KEY_CACHE.USER, JSON.stringify(user));
  }

  saveAccessTokenCache(token: string | null) {
    console.log(token);
    
    if (token) {
      storage.set(KEY_CACHE.USER, token);
    } else {
      console.warn('No token provided to save');
    }
  }

  getUserCache(): UserResponse {
    try {
      return JSON.parse(storage.getString(KEY_CACHE.USER) as string);
    } catch (error) {
      return new UserResponse();
    }
  }

  deleteUserCache() {
    if (storage.contains(KEY_CACHE.USER)) {
      storage.delete(KEY_CACHE.USER)
    }
  }

  checkUserLogin() { return this.getUserCache().access_token != '' }

  getAccessToken(): string {
    try {
      const user = this.getUserCache()
      return `${user.token_type} ${user.access_token}`
    } catch (error) {
      console.log(error);
      return ""
    }
  }

}