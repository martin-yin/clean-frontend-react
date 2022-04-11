import { AxiosRequestConfig } from 'axios'
import { IResponse } from '../lib/request'

export abstract class HttpService {
  abstract get<S, T>(url: string, params?: S, config?: AxiosRequestConfig): Promise<IResponse<T>>
  abstract post<S, T>(url: string, body: S, config?: AxiosRequestConfig): Promise<IResponse<T>>
  abstract put<S, T>(url: string, params: S, config?: AxiosRequestConfig): Promise<IResponse<T>>
  abstract delete<T>(url: string, config?: AxiosRequestConfig): Promise<IResponse<T>>
}
