import request from 'superagent'

const url = 'http://localhost:3000/api/v1'

export function getQuote () {
  return request.get(`${url}/quote`)
    .then(res => {
      return res.body
    })
    .catch(err => {
      if (err) throw Error('You don\'t need a quote')
    })
}
