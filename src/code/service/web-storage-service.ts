import { IStorage } from '../base/storage '

export const useWebStorage = (): IStorage => {
  return {
    getItem(name: string): string | null {
      return localStorage.getItem(name)
    },
    setItem(key: string, value: string): void {
      return localStorage.setItem(key, value)
    },
    removeItem(key: string): void {
      return localStorage.removeItem(key)
    },
    clear(): void {
      return localStorage.clear()
    }
  }
}