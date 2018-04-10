import Api from '@/services/Api'

export default {
  index (data) {
    //api/songs
    return Api().get('bookmarks', {
      params: {
          userId: data.userId,
          songId: data.songId
      }
    })
  },
  post (data) {
    return Api().post('bookmarks',data)
  },
  delete (id) {
    return Api().delete('bookmarks',{ data: { id: id } })
  }
}