import * as SecureStore from "expo-secure-store";

interface User {
  email: string;
  password: string;
  name: string;
  phone: string;
}

export default class AuthService {
  public static async setUser(user: User) {
    return SecureStore.setItemAsync("user", JSON.stringify(user));
  }

  public static async getUser() {
    const user = await SecureStore.getItemAsync("user")
    return user ? JSON.parse(user) as User : {} as User;
  }

  public static async destroyUser() {
    await SecureStore.deleteItemAsync("user")
  }
}
