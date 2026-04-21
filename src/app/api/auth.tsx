import type { LoginCredentials, LoginResponse } from '../../types/apitypes';

export async function authLogin({
  username,
  password,
}: LoginCredentials): Promise<LoginResponse> {
  const BASE_URL: string = 'http://192.168.254.102:8000/api';

  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  let data: LoginResponse | null;
  try {
    data = (await response.json()) as LoginResponse;
  } catch {
    data = null;
  }

  if (response.ok) {
    console.log('Login success response:', data);
    return data ?? {};
  }

  const message =
    (data &&
      (data.errors?.password ||
        data.errors?.detail ||
        data.detail ||
        data.message)) ||
    'Login failed';

  throw new Error(String(message));
}

