import { api } from './api'

interface LoginResponse {
  user: {
    id: string
    email: string
    name: string
  }
  token: string
}

type RegisterResponse = LoginResponse

export const authService = {
  async login(email: string, password: string): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>('/auth/login', {
      email,
      password,
    })
    return response.data
  },

  async register(email: string, password: string, name: string): Promise<RegisterResponse> {
    const response = await api.post<RegisterResponse>('/auth/register', {
      email,
      password,
      name,
    })
    return response.data
  },

  async logout(): Promise<void> {
    await api.post('/auth/logout')
  },

  async getMe() {
    const response = await api.get('/auth/me')
    return response.data
  },
}
