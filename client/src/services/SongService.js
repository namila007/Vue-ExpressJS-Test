import Api from '@/services/Api'

export default {
  index () {
    //api/songs
    return Api().get('songs') 
  },
  addSong (data) {
    return Api().post('songs',data)
  }
}