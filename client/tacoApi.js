import request from 'superagent'

const url = 'http://localhost:3000/app/v1'

export function getTacoFillings () {
  return request.get(`${url}/tacoFillings`)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Cannot get taco fillings')
    })
}
