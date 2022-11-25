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

const GetSubhazardApi = async(params: any) => {
  try {
    const data = await BackendInstance.get('/genetics/risks-by-subhazard', {params})
    return data
  } catch (e) {
    return Promise.reject(e)
  }
}

const GetRiskyBySNPApi = async(params: any) => {
  try {
    const data = await BackendInstance.get('/genetics/risks-by-snp', {params})
    return data
  } catch (e) {
    return Promise.reject(e)
  }
}

export {
  GetRiskAllApi,
  GetSubhazardApi,
  GetRiskyBySNPApi
}