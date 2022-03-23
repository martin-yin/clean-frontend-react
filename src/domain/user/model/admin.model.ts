export interface AdminModel {
  email: string
  nickName: string
  userName: string
  token: string
}

export interface LoginParam {
  userName: string
  password: string
}

export interface RegisterParam extends LoginParam {
  nickName: string
}
