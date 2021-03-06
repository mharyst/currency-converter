import styles from '../scss/style.scss';

let CHF = [], EUR = [], USD = [];

/* Get data */
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
          callback(data);
      });  
    }  
  )
  .catch(function(err) {  
    console.log('Fetch Error :-S', err);  
  });
}

getCurrency();

/* Сreating arrays with currencies */
function callback (data) {
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

  /* Creating arrays only with rates */
  let ratesCHF = CHF.map((date) => {
    return date.rate;
  });
  
  let ratesUSD = USD.map((date) => {
    return date.rate;
  });

  let ratesEUR = EUR.map((date) => {
    return date.rate;
  });

  /* Calc min/max for currencies */
  const minRateCHF = Math.min(...ratesCHF);
  const maxRateCHF = Math.max(...ratesCHF);

  const minRateEUR = Math.min(...ratesEUR);
  const maxRateEUR = Math.max(...ratesEUR);

  const minRateUSD = Math.min(...ratesUSD);
  const maxRateUSD = Math.max(...ratesUSD);

  /* Calc average */
  let average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;

  let avUSD = average( [...ratesUSD] );
  let avEUR = average( [...ratesEUR] );
  let avCHF = average( [...ratesCHF] );

  /* Find date */
  let findDayRate = (arr, rate) => {
    let result = []
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i]['rate'] === rate) result.push(arr[i]['exchangedate']);
    }
    return result;
  }

  let datesMinEUR = findDayRate(EUR, minRateEUR);
  let datesMinUSD = findDayRate(USD, minRateUSD);
  let datesMinCHF = findDayRate(CHF, minRateCHF);

  let datesMaxEUR = findDayRate(EUR, maxRateEUR);
  let datesMaxUSD = findDayRate(USD, maxRateUSD);
  let datesMaxCHF = findDayRate(CHF, maxRateCHF);

  /* Find dates when exchange rate was within 5% on the average exchange rate */
  let findDaysWithinAv5 = (arr, averageVal) => {
    const min = averageVal - (averageVal * 2.5 / 100);
    const max = averageVal + (averageVal * 2.5 / 100);
    let result = [];
    for (var i = 0; i < arr.length-1; i++) {
      let currentRate = arr[i]['rate'];
      if (max > currentRate && currentRate > min) result.push(arr[i]['exchangedate']);
    }
    return result.length;
  }

  let datesAvUSD = findDaysWithinAv5(USD, avUSD),
    datesAvEUR = findDaysWithinAv5(EUR, avEUR),
    datesAvCHF = findDaysWithinAv5(CHF, avCHF);

  /* Calc correlation from 1999-01-01 until today */

  let calcCorrelation = (arr1, arr2, averageVal1, averageVal2) => {
    let a = 0, b = 0, c = 0;
    let arrLength = arr1.length > arr2.length ? arr2.length - 1 : arr1.length - 1;
    for (let i = 0; i < arrLength; i++) {
      let rate1 = arr1[i]['rate'] - averageVal1;
      let rate2 = arr2[i]['rate'] - averageVal2;
      a += rate1 * rate2;
      b += Math.pow(rate1, 2);
      c += Math.pow(rate2, 2);
    }
    let correletion = a / Math.sqrt(b * c);
    return correletion;
  }

  /* Between USD/EUR */
  let corrUsdEur = (calcCorrelation(USD, EUR, avUSD, avEUR)).toFixed(6);

  /* Between CHF/EUR */
  let corrChfEur = (calcCorrelation(CHF, EUR, avCHF, avEUR)).toFixed(6);


  /**
  ***
  *** Display data
  ***
  **/

  /* min/max */
  document.querySelector('#min-chf').innerHTML = minRateCHF.toFixed(2);
  document.querySelector('#max-chf').innerHTML = maxRateCHF.toFixed(2);

  document.querySelector('#min-eur').innerHTML = minRateEUR.toFixed(2);
  document.querySelector('#max-eur').innerHTML = maxRateEUR.toFixed(2);

  document.querySelector('#min-usd').innerHTML = minRateUSD.toFixed(2);
  document.querySelector('#max-usd').innerHTML = maxRateUSD.toFixed(2);

  /*average*/
  document.querySelector('#average-usd').innerHTML = avUSD.toFixed(2);
  document.querySelector('#average-eur').innerHTML = avEUR.toFixed(2);
  document.querySelector('#average-chf').innerHTML = avCHF.toFixed(2);

  /* When dates occur */
  function showDates(arrDates, currency, value) {
    if (arrDates.length > 1) {
      let selectedField = document.querySelector(`#${value}-date-${currency}`);
      let elSelect = document.createElement('select');
      selectedField.appendChild(elSelect);
      for (let i = 0; i < arrDates.length; i++) {
        let elOption = document.createElement('option');
        elOption.innerHTML = arrDates[i];
        elSelect.appendChild(elOption);
      }
    } else {
      document.querySelector(`#${value}-date-${currency}`).innerHTML = arrDates;
    }
  }

  showDates(datesMinEUR, 'EUR', 'min');
  showDates(datesMinUSD, 'USD', 'min');
  showDates(datesMinCHF, 'CHF', 'min');

  showDates(datesMaxEUR, 'EUR', 'max');
  showDates(datesMaxUSD, 'USD', 'max');
  showDates(datesMaxCHF, 'CHF', 'max');

  /* Dates whithin average */
  document.querySelector('#dates-av-USD').innerHTML = datesAvUSD;
  document.querySelector('#dates-av-EUR').innerHTML = datesAvEUR;
  document.querySelector('#dates-av-CHF').innerHTML = datesAvCHF;

  /* Correlation */
  document.querySelector('#corr-usd-eur').innerHTML = corrUsdEur;
  document.querySelector('#corr-chf-eur').innerHTML = corrChfEur;
}


