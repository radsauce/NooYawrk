const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

const PORT = process.env.PORT || 3000;
app.listen(PORT, _ => {
  console.log(`Hosting on port: ${PORT}`)
})
