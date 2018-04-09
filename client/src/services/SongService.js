import Api from '@/services/Api'

export default {
  index () {
    //api/songs
    return Api().get('songs') 
  },
  addSong (data) {
    return Api().post('songs', data)
  },
  getSongbyId (data) {
    return Api().get('songs/id/' + data)
  },
  putSong (data) {
    return Api().put(`songs/id/${data.id}`, data)
  },
  searchbyTitle(data) {
    return Api().get(`songs`, { 
      params: {
      search: data
      }
    })
  }
}