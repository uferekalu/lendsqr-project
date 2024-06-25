import { User } from "../types/User";

export interface ApiError extends Error {
  status?: number;
  errors?: any;
}

export async function callAPI(
  route: string,
  method: string = 'GET',
  data: any = null,
): Promise<User[] | null> {
  const baseURL = 'https://run.mocky.io/v3/';
  const url = baseURL + route;

  const options: RequestInit = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : null,
  };

  const response = await fetch(url, options);

  if (response.ok) {
    if (response.status === 204) {
      return null;
    }

    const responseData: User[] = await response.json();
    return responseData;
  } else {
    const errorData = await response.json();
    const error: ApiError = new Error(`HTTP error! status: ${response.status}`);
    error.status = response.status;
    error.errors = errorData.errors;
    throw error;
  }
}

