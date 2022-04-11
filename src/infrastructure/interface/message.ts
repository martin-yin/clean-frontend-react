export abstract class MessageService {
  abstract info(content: string, duration?: number | (() => void)): void
  abstract success(content: string, duration?: number | (() => void)): void
  abstract error(content: string, duration?: number | (() => void)): void
  abstract warning(content: string, duration?: number | (() => void)): void
}
