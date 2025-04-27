import { envVariables } from "../env";
import { ApiClientError } from "./api-client-error";

interface ApiClientOptions {
  baseUrl: string;
  init?: RequestInit;
}

export class ApiClient {
  constructor(private options: ApiClientOptions) {}

  async get<T>(endpoint: string) {
    try {
      const response = await fetch(
        `${this.options.baseUrl}${endpoint}`,
        this.options.init,
      );

      if (!response.ok) {
        throw new ApiClientError(
          response.status,
          `HTTP error! status: ${response.status} ${response.statusText}`,
        );
      }

      const data = await response.json();
      return data as T;
    } catch (error) {
      if (error instanceof ApiClientError) {
        throw error;
      }
      throw new ApiClientError(500, "Unknown error occurred");
    }
  }
}

export const apiClient = new ApiClient({
  baseUrl: envVariables.NEXT_PUBLIC_API_URL,
});
