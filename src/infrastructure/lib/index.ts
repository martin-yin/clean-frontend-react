import _ from 'lodash'

export const getTimeHHMM = (time: string) => {
  const datetime = new Date(parseInt(time))
  const hours = ('0' + datetime.getHours()).slice(-2),
    minutes = ('0' + datetime.getMinutes()).slice(-2)
  return ` ${hours}:${minutes}`
}

export const preLineStartEnd = originSource => {
  const { source, line } = originSource
  // 先获取源码有多少行
  const sourceLine = source.split('\n')
  const len = sourceLine.length - 1
  const start = line - 3 >= 0 ? line - 3 : 0
  const end = start + 5 >= len ? len : start + 5 // 最多展示6行
  return {
    start,
    end,
    sourceLine
  }
}

export const getTimeYYMMDD = () => {
  const datetime = new Date()
  const year = datetime.getFullYear(),
    month = ('0' + (datetime.getMonth() + 1)).slice(-2),
    date = ('0' + datetime.getDate()).slice(-2)
  return `${year}-${month}-${date}`
}

export const getTimeYYMMDDHM = (time: string) => {
  const datetime = new Date(parseInt(time))
  const year = datetime.getFullYear(),
    month = ('0' + (datetime.getMonth() + 1)).slice(-2),
    date = ('0' + datetime.getDate()).slice(-2),
    hours = ('0' + datetime.getHours()).slice(-2),
    minutes = ('0' + datetime.getMinutes()).slice(-2)
  return `${year}-${month}-${date} ${hours}:${minutes}`
}

export const encodeHTML = (str: string): string => {
  if (!str || str.length == 0) return ''
  return str.replace(/&/g, '&#38;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\'/g, '&#39;')
}

export const toLineData = (data: any) => {
  const lineData: any = {}
  for (const k of Object.keys(data)) {
    const lineK = k.replace(/([A-Z])/g, '_$1').toLowerCase()
    lineData[lineK] = data[k]
  }
  return lineData
}

export const toUpperCaseData = <T, S>(data: T): S => {
  const lineData: any = {}
  for (const k of Object.keys(data)) {
    const lineK = _.camelCase(k)
    lineData[lineK] = data[k]
  }
  return lineData
}
