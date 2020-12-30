const dotenv = require('dotenv');
dotenv.config();

const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1'
const meaningCloudApi = {
    application_key: process.env.API_KEY
};

var path = require('path')
const express = require('express')

const app = express()

app.use(express.static('dist'))

const cors = require('cors')

app.use(cors())

const corsOptions = {
    origin: 'http://localhost',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
})

const fetch = require('node-fetch')
const utf8 = require('utf8')

const encodeStr = function(str) {
  const formattedStr = utf8.encode(str)
  return formattedStr
}

const sentimentAnalysis = async (key = '', lang = '', txt = '')=>{
  const formattedTxt = encodeStr(txt)
  const request = await fetch(`${baseUrl}?key=${key}&lang=${lang}&txt=${formattedTxt}`)

  try {
    let response = await request.json()
    return response
  } catch(error) {
    console.log('error', error)
  }
}

const getAnalysis = function (req, res) {
    sentimentAnalysis(key=meaningCloudApi.application_key, lang='en', txt=req.query.txt)
    .then(function(result) {
        res.send(result)
    })
}

app.post('/analysis', getAnalysis)