import request from 'superagent'

const url = 'http://localhost:3000/api/v1'

export function getStarSigns () {
  return request.get(`${url}/starSigns`)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get star sign')
    })
}
