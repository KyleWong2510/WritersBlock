export const getRandomCharacter = () => {
  const url = 'https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?inc=gender,name,location,dob,nat'
  return fetch(url)
    .then(res => res.json())
}

export const getRandomWords = () => {
  return fetch('https://random-word-api.herokuapp.com//word?number=5')
    .then(res => res.json())
}

export const getRandomPrompt = () => {
  return fetch('https://ineedaprompt.com/dictionary/default/prompt')
    .then(res => res.json())
}