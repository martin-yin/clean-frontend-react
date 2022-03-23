import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AdminModel } from '../domain/user/model/admin.model'

const initialState = {
  menuKeys: {
    selectKeys: [],
    openKeys: []
  },
  projectList: [],
  monitorId: '',
  userInfo: {
    nickName: ''
  }
}

const appStore = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenuKeys(state, action: PayloadAction<any>) {
      state.menuKeys = action.payload
    },
    setMonitorId(state, action: PayloadAction<any>) {
      localStorage.setItem('monitorId', action.payload)
      state.monitorId = action.payload
    },
    setMonitorIdAndProject(state, action: PayloadAction<any>) {
      localStorage.setItem('monitorId', action.payload.monitorId)
      state.monitorId = action.payload.monitorId
      state.projectList = action.payload.projectList
    },
    setProjectList(state, action: PayloadAction<any>) {
      state.projectList = action.payload
    },
    setUserInfo(state, action: PayloadAction<AdminModel>) {
      localStorage.setItem('token', action.payload.token)
      state.userInfo = action.payload
    }
  }
})

export const { setMenuKeys, setMonitorIdAndProject, setMonitorId, setProjectList, setUserInfo } = appStore.actions

export default appStore.reducer
