export interface LoginCredentials {
  username: string;
  password: string;
}

/**
 * Your backend response shape isn’t fully specified in this repo yet.
 * We keep it flexible while still giving you typed access to common fields.
 */
export type LoginResponse = {
  // common success fields (varies by backend)
  token?: string;
  access_token?: string;
  user?: Record<string, unknown>;

  // common error fields (varies by backend)
  message?: string;
  detail?: string;
  errors?: {
    password?: string;
    detail?: string;
    login?: string[];
    [key: string]: unknown;
  };

  [key: string]: unknown;
};

