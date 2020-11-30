export const goToLogin = (history) => {
  history.push('/login')
}

export const goToSignUp = (history) => {
  history.push('/cadastro')
}

export const goToRecipesFeed = (history) => {
  history.push('/receitas')
}

export const goToAddRecipe = (history) => {
  history.push('/adicionarReceita')
}

export const goToRecipeDetail = (history, id) => {
  history.push(`/receitas/${id}`)
}
