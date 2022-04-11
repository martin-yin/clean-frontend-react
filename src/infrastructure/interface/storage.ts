export abstract class IStorage {
  abstract getItem(key: string): string | null
  abstract setItem(key: string, value: string): void
  abstract removeItem(name: string): void
  abstract clear(): void
}
