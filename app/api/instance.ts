import AsyncStorage from '@react-native-async-storage/async-storage';
import { server } from 'app/constants/system';
import Axios, { AxiosInstance } from 'axios'
import { setupInterceptorsTo } from './interceptors';

const BackendInstance: AxiosInstance = Axios.create({
  baseURL: server,
  timeout: 10000,
})

export default setupInterceptorsTo(BackendInstance);