import { message } from 'antd'
import { IMessage } from '../base/message'

export const useWebMessageServicec = (): IMessage => {
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
