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
          // console.log(data); 
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
  data.map((arr) => {
    if (arr[0]) {
      if (arr[0]['CHF']) {
        CHF.push(arr[0]['CHF'])
      } else if (arr[0]['USD']) {
        USD.push(arr[0]['USD'])
      } else if (arr[0]['EUR']) {
        EUR.push(arr[0]['EUR'])
      }
    }
    if (arr[1]) {
      if (arr[1]['CHF']) {
        CHF.push(arr[1]['CHF'])
      } else if (arr[1]['USD']) {
        USD.push(arr[1]['USD'])
      } else if (arr[1]['EUR']) {
        EUR.push(arr[1]['EUR'])
      }
    }
    if (arr[2]) {
      if (arr[2]['CHF']) {
        CHF.push(arr[2]['CHF'])
      } else if (arr[2]['USD']) {
        USD.push(arr[2]['USD'])
      } else if (arr[2]['EUR']) {
        EUR.push(arr[2]['EUR'])
      }
    }
  })
  // console.log(EUR); 

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


