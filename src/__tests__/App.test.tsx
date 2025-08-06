import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../App'

// Mock the home page
vi.mock('@/pages/home', () => ({
  HomePage: () => <div data-testid="home-page">Vignesh T.V Portfolio</div>,
}))

// Mock sonner toaster
vi.mock('sonner', () => ({
  Toaster: () => <div data-testid="toaster">Toaster</div>,
}))

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(document.body).toBeTruthy()
  })

  it('renders the portfolio home page by default', () => {
    render(<App />)
    expect(screen.getByTestId('home-page')).toBeInTheDocument()
  })

  it('renders the toaster component', () => {
    render(<App />)
    expect(screen.getByTestId('toaster')).toBeInTheDocument()
  })

  it('has the correct dark mode layout structure', () => {
    render(<App />)
    const mainContainer = document.querySelector('.min-h-screen.bg-gray-900.dark')
    expect(mainContainer).toBeInTheDocument()
  })
})