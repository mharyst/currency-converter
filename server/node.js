const http = require('http')
const fs = require('fs')
const jsonfile = require('jsonfile')

const dayFrom = 0 // from today 
const dayTo = 6535 // to 01.01.1991 (if today 22.11.2016)

function getDateAgo (days) {
  // use current date
  var date = new Date()
  var dateCopy = new Date(date)

  // calc date
  dateCopy.setDate(date.getDate() - days)

  //format date to yyyymmdd
  var dd = dateCopy.getDate()
  dd < 10? dd = `0${dd}` : dd
 
  var mm = dateCopy.getMonth() + 1
  mm < 10? mm = `0${mm}` : mm

  var yy = dateCopy.getFullYear()

  return yy + '' + mm + '' + dd
}

var currencies = ['USD', 'EUR', 'CHF']
var date = getDateAgo(6534)

var getData = (currency, date) => {
  var options = {
    host: 'bank.gov.ua',
    path: `/NBUStatService/v1/statdirectory/exchange?valcode=${currency}&date=${date}&json`,
  }

  var req = http.get(options, (res) => {
    // initialize the container for our data
    var data = ''

    // this event fires many times, each time collecting another piece of the response
    res.on("data", function (chunk) {
      // append this chunk to our growing `data` var
      data += chunk
    })

    // this event fires *one* time, after all the `data` events/chunks have been gathered
    res.on("end", function () {
      // you can use res.send instead of console.log to output via express
      var pData = JSON.parse(data)
      return setCurrencyForOneDate(currency, date, pData[0])
    })

    res.on("error", function (e) {
      // error message
      console.log("Request error: " + e.message)
    })
  })

  return req
}

var arr = []
var setCurrencyForOneDate = (currCurrency, date, obj) => {
  var currObj = {}
  currObj[currCurrency] = obj

  arr.push(currObj)
  //create json file
  jsonfile.writeFileSync(`./json/${date}.json`, arr, {spaces: 2}, function(err) {
    console.error(err)
  })
  console.log(`File ${date}.json created`)
  return arr
}

var getCurrencyForOneDate = (date) => {
  currencies.forEach((currCurrency) => {
    return getData(currCurrency, date)
  })
}

for (var i = dayFrom; i < dayTo; i++) {
  (function(index) {
    setTimeout(function() {
      arr = []
      getCurrencyForOneDate(getDateAgo(index))
    }, (i - dayFrom) * 200);
  })(i);
}