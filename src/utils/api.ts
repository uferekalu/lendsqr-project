import { User } from "../types/User";
import usersData from '../../src/users.json'

export interface ApiError extends Error {
  status?: number;
  errors?: any;
}

export async function callAPI(): Promise<User[] | null> {
  try {
    const responseData: User[] = usersData;
    return responseData;
  } catch (error: any) {
    const apiError: ApiError = new Error(`Error loading users data`);
    apiError.status = 500;
    apiError.errors = [error.message];
    throw apiError;
  }
}

