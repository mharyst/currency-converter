const jsonfile = require('jsonfile')
const fs = require('fs');

const path = 'json'
const currencyFile = './currency.json'
const dayFrom = 0 // from today 
const dayTo = 6536 // to 01.01.1991 (if today 22.11.2016)

var getDateAgo = function (days) {
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

function getFile(path, date) {
  var result = jsonfile.readFileSync(currencyFile)
  var file = `./${path}/${date}.json`

  fileContent = jsonfile.readFileSync(file)

  result = [...result, fileContent]

  jsonfile.writeFileSync(currencyFile, result)
  console.log(`${date} added succesfully`)
}

function cleanCurrencyFile () {
  var cleanArr = '[]'
  fs.writeFileSync(currencyFile, cleanArr)
  console.log(`currency.json cleaned`)
}

cleanCurrencyFile()

for (var i = dayFrom; i < dayTo; i++) {
  (function(index) {
    setTimeout(function() {
      getFile(path, getDateAgo(index))
    }, (i - dayFrom) * 10)
  })(i)
}
