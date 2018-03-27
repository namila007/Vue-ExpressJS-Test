import Api from '@/services/Api'
// h
export default {
   register (credentials) {
    return  Api().post('register', credentials)
  }

}

