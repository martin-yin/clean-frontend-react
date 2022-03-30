export interface AdminModel {
  email: string
  nickName: string
  userName: string
  token: string
}

export interface LoginParams {
  userName: string
  password: string
}

export interface RegisterParams extends LoginParams {
  nickName: string
}
