export const goToLogin = (history) => {
  history.push('/login')
}

export const goToSignUp = (history) => {
  history.push('/signup')
}

export const goToPhotosFeed = (history) => {
  history.push('/photos')
}

export const goToAddPhoto = (history) => {
  history.push('/addphoto')
}

export const goToUsers = (history) => {
  history.push('/users')
}

export const goToPhotoDetail = (history, id) => {
  history.push(`/photo/${id}`)
}

export const goToCollectionsFeed = (history) => {
  history.push('/collections')
}

export const goToFriendsFeed = (history) => {
  history.push('/friends')
}
export const goToCollectionDetail = (history, collection) => {
  history.push(`/collections/${collection}`)
}

export const goToAddCollection = (history) => {
  history.push('/addcollection')
}