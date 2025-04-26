interface ApiClientOptions {
  baseUrl?: string;
  init?: RequestInit;
}

export class ApiClient {
  constructor(private options: ApiClientOptions) {
    if (!options.baseUrl) throw new Error("baseUrl is required");
  }

  async get<T>(endpoint: string) {
    const response = await fetch(
      `${this.options.baseUrl}${endpoint}`,
      this.options.init,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json() as Promise<T>;
  }
}

export const apiClient = new ApiClient({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
});
