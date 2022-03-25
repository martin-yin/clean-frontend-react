export interface IMessage {
  info(content: string, duration?: number | (() => void)): void
  success(content: string, duration?: number | (() => void)): void
  error(content: string, duration?: number | (() => void)): void
  warning(content: string, duration?: number | (() => void)): void
}
