export const goToLogin = (history) => {
  history.push('/login')
}

export const goToSignUp = (history) => {
  history.push('/signup')
}

export const goToPhotosFeed = (history) => {
  history.push('/photos')
}

export const goToAddRecipe = (history) => {
  history.push('/adicionarReceita')
}

export const goToRecipeDetail = (history, id) => {
  history.push(`/receitas/${id}`)
}
