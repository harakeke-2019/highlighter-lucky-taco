import request from 'superagent'

const url = 'https://dog.ceo/api/breeds/image/random'

export function getPuppy () {
  return request.get(url)
    .then(res => {
      return res.body
    })
    .catch(err => {
      if (err) throw Error('You don\'t need a puppy')
    })
}
