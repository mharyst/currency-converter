var fs = require('fs')

function filterByDate(date, date2) {
  fs.readFile(`./json/${date}.json`, 'utf8', function readFileCallback(err, data) {
    if (err) {
      console.log(err);
    } else {
      pData = JSON.parse(data)
      // console.log(pData)
      var result2 = pData.filter(function(obj) {
        if (obj.USD) {
          var currObj = JSON.parse(obj.USD)
          // console.log(currObj.exchangedate)
          if (currObj.exchangedate == date2) return obj
        } else if (obj.EUR) {
          var currObj = JSON.parse(obj.EUR)
          // console.log(currObj.exchangedate)
          if (currObj.exchangedate == date2) return obj
        } else if (obj.CHF) { 
          var currObj = JSON.parse(obj.CHF)
          // console.log(currObj.exchangedate)
          if (currObj.exchangedate == date2) return obj
          // console.log(currObj.exchangedate == date2)
        }

        // console.log(result)
        console.log('--------')
        // return obj[exchangedate] == '21.11.2016'
      })
      var result = JSON.stringify(result2)
      console.log(result)
      fs.writeFile(`./json/${date}.json`, result, 'utf8'); // write it back
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

for (i=0; i < 500; i++) {
  filterByDate(getDateAgo(i), getDateAgoFormat2(i))
}

var date = '20161122'
var date2 = '22.11.2016'

filterByDate(date, date2)