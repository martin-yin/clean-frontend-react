import { message } from 'antd'
import { MessageService } from '../interface/message'

export const useWebMessageServicec = (): MessageService => {
  return {
    info(content: string, duration?: number | (() => void)): void {
      message.info(content, duration)
    },
    success(content: string, duration?: number | (() => void)): void {
      message.success(content, duration)
    },
    error(content: string, duration?: number | (() => void)): void {
      message.error(content, duration)
    },
    warning(content: string, duration?: number | (() => void)): void {
      message.warning(content, duration)
    }
  }
}

export class WebMessageService implements MessageService {
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
