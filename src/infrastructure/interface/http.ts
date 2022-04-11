import { AxiosRequestConfig } from 'axios'
import { IResponse } from '../lib/request'

export abstract class HttpService {
  abstract get<T, S>(url: string, params?: S, config?: AxiosRequestConfig): Promise<IResponse<T>>
  abstract post<T, S>(url: string, body: S, config?: AxiosRequestConfig): Promise<IResponse<T>>
  abstract put<T, S>(url: string, params: S, config?: AxiosRequestConfig): Promise<IResponse<T>>
  abstract delete<T>(url: string, config?: AxiosRequestConfig): Promise<IResponse<T>>
}
