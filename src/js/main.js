import styles from '../scss/style.scss';

$('#getData').click(doMagic);
$('#getDataBatman').click(doMagicBatman);

function doMagic() {
  $.ajax({
    url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&date=19990101&json',
    type:'GET',
    crossDomain: true,
    dataType: 'jsonp',
    headers: {"X-My-Custom-Header": "some value"},
    success: function(response) {
      console.log('Load was performed.');
      console.log(response);
    },
    error: function(response) {
      console.log('Load error.');
      console.log(response);
    },
  });

 
  function mycallback(data) {
    console.log('data');
    console.log(data);
  }
}

function doMagicBatman() {
   $.ajax({
    url: 'https://www.omdbapi.com/?i=tt0944947&Season2&plot=full&r=json&apikey=c2087786',
    crossDomain: true,
    type:"GET",
    contentType: "application/json",
    async: false,
    dataType: "jsonp",  
    success: function(response){
      console.log('Load was performed.');
      console.log(response);
    },
    error: function(response){
      console.log('Load error.');
      console.log(response);
    },
  });
}
