export const getRandomCharacter = () => {
  const url = 'https://randomuser.me/api/?inc=gender,name,location,dob,nat'
  return fetch(url)
    .then(res => res.json())
}

export const getRandomWords = () => {
  return fetch('https://random-word-api.herokuapp.com/word?number=5')
    .then(res => res.json())
}

export const getRandomPrompt = () => {
  return fetch('https://ineedaprompt.com/dictionary/default/prompt')
    .then(res => res.json())
}

export const getPrompts = () => {
  return fetch('http://localhost:3001/api/v1/prompts')
    .then(res => res.json())
}

export const getStories = () => {
  return fetch('http://localhost:3001/api/v1/stories')
    .then(res => res.json())
}

export const postPrompt = (prompt) => {
  return fetch('http://localhost:3001/api/v1/prompts', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(prompt)
  })
    .then(res => console.log(res))
}

export const postStory = (story) => {
  return fetch('http://localhost:3001/api/v1/stories', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(story)
  })
    .then(res => console.log(res))
}