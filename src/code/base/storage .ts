export interface IStorage {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
  removeItem(name: string): void
  clear(): void
}

class WebStorage implements IStorage {
  getItem(name: string): string | null {
    return localStorage.getItem(name)
  }
  setItem(key: string, value: string): void {
    return localStorage.setItem(key, value)
  }
  removeItem(key: string): void {
    return localStorage.removeItem(key)
  }
  clear(): void {
    return localStorage.clear()
  }
}

export default WebStorage
