var jsonfile = require('jsonfile')

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

// var date = getDateAgo(3)
var result = []

function getFile(date) {
  var file = `./json/${date}.json`

  fileContent = jsonfile.readFileSync(file)

  currResult = fileContent.map((obj) => {
    return obj
  })

  result = [...result, currResult]
}
 
// console.dir(result)

for (var i = 0; i < 3; i++) {
  (function(index) {
    setTimeout(function() {
      getFile(getDateAgo(index))
      console.dir(result)
      console.dir('---------------')
    }, (i) * 200);
  })(i);
}