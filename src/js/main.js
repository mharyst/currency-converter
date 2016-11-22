import styles from '../scss/style.scss';

let CHF = [], EUR = [], USD = [];

function getCurrency() {
  fetch('./json/currency.json')  
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status Code:  
          ${response.status}`);
      }
      response.json().then(
        function(data) {
          console.log(data); 
          createArr(data);
      });  
    }  
  )
  .catch(function(err) {  
    console.log('Fetch Error :-S', err);  
  });
}

getCurrency();

function createArr (data) {
  for (var date in data) {
    CHF.push(data[date]['CHF']);
    EUR.push(data[date]['EUR']);
    USD.push(data[date]['USD']);
  }

  // console.log(CHF)
  // console.log(EUR)
  // console.log(USD)


  let ratesCHF = CHF.map((date) => {
    return date.rate;
  });
  
  let ratesUSD = USD.map((date) => {
    return date.rate;
  });

  let ratesEUR = EUR.map((date) => {
    return date.rate;
  });

  const minRateCHF = Math.min(...ratesCHF);
  const maxRateCHF = Math.max(...ratesCHF);

  const minRateEUR = Math.min(...ratesEUR);
  const maxRateEUR = Math.max(...ratesEUR);

  const minRateUSD = Math.min(...ratesUSD);
  const maxRateUSD = Math.max(...ratesUSD);

  console.info('CHF:')
  console.log(minRateCHF);
  console.log(maxRateCHF);
  
  console.info('EUR:')
  console.log(minRateEUR);
  console.log(maxRateEUR);

  console.info('USD:')
  console.log(minRateUSD);
  console.log(maxRateUSD);

  let average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;

  let avUSD = average( [...ratesUSD] );
  let avEUR = average( [...ratesEUR] );
  let avCHF = average( [...ratesCHF] );

  console.info('Average USD:')
  console.log(avUSD);

  console.info('Average EUR:')
  console.log(avEUR);

  console.info('Average CHF:')
  console.log(avCHF);
}


