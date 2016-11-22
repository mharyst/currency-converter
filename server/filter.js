const fs = require('fs')
const jsonfile = require('jsonfile')

const path = 'json'
const dayFrom = 0 // from today 
const dayTo = 6536 // to 01.01.1991 (if today 22.11.2016)

function filterByDate(path, date, date2) {
  const url = `./${path}/${date}.json`
  
  jsonfile.readFile(url, function(err, obj) {
    if (err) {
      console.log('File not found')
    } else {
      fileContent = jsonfile.readFileSync(url)
      result = fileContent.filter((obj) => {
        if (obj.USD) {
          var currObj = obj.USD
          if (currObj.exchangedate == date2) return obj
        } else if (obj.EUR) {
          var currObj = obj.EUR
          if (currObj.exchangedate == date2) return obj
        } else if (obj.CHF) { 
          var currObj = obj.CHF
          if (currObj.exchangedate == date2) return obj
        }
      })
      jsonfile.writeFileSync(url, result, {spaces: 2}, function(err) {
        console.error(err)
      })
      console.log(`File ${date}.json was edited`)
    }
  })
}

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

var getDateAgoFormat2 = function (days) {
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

  return dd + '.' + mm + '.' + yy
}

for (var i = dayFrom; i < dayTo; i++) {
  (function(index) {
    setTimeout(function() {
      filterByDate(path, getDateAgo(index), getDateAgoFormat2(index))
    }, (i - dayFrom) * 10);
  })(i);
}