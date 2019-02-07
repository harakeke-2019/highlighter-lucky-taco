import request from 'superagent'

const url = 'https://corporatebs-generator.sameerkumar.website/'

export function getQuote () {
  return request.get(url)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('You don\'t need a quote')
    })
}
