import { message } from 'antd'

export interface IMessage {
  info(content: string, duration?: number | (() => void)): void
  success(content: string, duration?: number | (() => void)): void
  error(content: string, duration?: number | (() => void)): void
  warning(content: string, duration?: number | (() => void)): void
}

export class WebMessage implements IMessage {
  info(content: string, duration?: number | (() => void)): void {
    message.info(content, duration)
  }
  success(content: string, duration?: number | (() => void)): void {
    message.success(content, duration)
  }
  error(content: string, duration?: number | (() => void)): void {
    message.error(content, duration)
  }
  warning(content: string, duration?: number | (() => void)): void {
    message.warning(content, duration)
  }
}
