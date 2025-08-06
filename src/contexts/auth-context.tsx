import React, { useState, useEffect } from 'react'
import { authService } from '@/services/auth'
import { AuthContext } from '@/lib/auth-context'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ id: string; email: string; name: string } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('token')
      if (token) {
        const userData = await authService.getMe()
        setUser(userData)
      }
    } catch (error) {
      console.error('Auth check failed:', error)
      localStorage.removeItem('token')
    } finally {
      setLoading(false)
    }
  }

  const login = async (email: string, password: string) => {
    // Mock authentication for burdenoff.com emails
    if (email.endsWith('@burdenoff.com')) {
      const mockUser = {
        id: 'mock-' + Date.now(),
        email: email,
        name: email.split('@')[0],
      }
      const mockToken = 'mock-token-' + Date.now()
      localStorage.setItem('token', mockToken)
      setUser(mockUser)
      return
    }

    // Original authentication logic
    const { user, token } = await authService.login(email, password)
    localStorage.setItem('token', token)
    setUser(user)
  }

  const logout = async () => {
    await authService.logout()
    localStorage.removeItem('token')
    setUser(null)
  }

  const register = async (email: string, password: string, name: string) => {
    const { user, token } = await authService.register(email, password, name)
    localStorage.setItem('token', token)
    setUser(user)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}
