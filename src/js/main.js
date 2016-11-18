$('#getData').click(doMagic);
$('#getDataBatman').click(doMagicBatman);

function doMagic() {
  $.ajax({
    url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&date=19990101&json',
    crossDomain: true,
    type:"GET",
    contentType: "application/json",
    async: false,
    success: function(response){
      console.log('Load was performed.');
      console.log(response);
    },
    error: function(reject){
      console.log('Load error.');
      console.log(reject);
    },
  });
}

function doMagicBatman() {
  $.when( 
    $.ajax({
      url: "https://www.omdbapi.com/?i=tt0944947&Season2&plot=full&r=json&apikey=c2087786",
      jsonp: "callback",
      dataType: "jsonp"      
    })
  ).done(function() {
    console.log('done Batman');
  });
}
