import { AxiosResponse } from 'axios'
import BackendInstance from './instance'

const GetRiskAllApi = async() => {
  try {
    const data = await BackendInstance.get('/genetics/risks-all')
    return data
  } catch (e) {
    return Promise.reject(e)
  }
}

export {
  GetRiskAllApi
}