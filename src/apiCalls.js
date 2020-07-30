export const getRandomCharacter = () => {
  fetch('https://randomuser.me/api/?inc=gender,name,location,dob,nat')
    .then(res => res.json())
}

export const getRandomWords = () => {
  fetch('https://random-word-api.herokuapp.com//word?number=5')
    .then(res => res.json())
}

export const getRandomPrompt = () => {
  fetch('https://ineedaprompt.com/dictionary/default/prompt')
    .then(res => res.json())
}