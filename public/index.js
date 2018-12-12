const cheerio = require('cheerio')
const axios = require('axios')

  axios.get('https://www.nyt.com/')
  .then(r => {
    const $ = cheerio.load(r.data)
    $('div.css-6p6lnl').each((i, elem) => {
      // console.log("cool") 
      console.log(`Headlines: ${$(elem).children('a').children('div.css-1j836f9').text()}`)
    })
  })
  .catch(e => console.log(e))
