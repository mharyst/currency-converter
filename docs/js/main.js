/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _style = __webpack_require__(1);
	
	var _style2 = _interopRequireDefault(_style);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var CHF = [],
	    EUR = [],
	    USD = [];
	
	function getCurrency() {
	  fetch('./json/currency.json').then(function (response) {
	    if (response.status !== 200) {
	      console.log('Looks like there was a problem. Status Code:  \n          ' + response.status);
	    }
	    response.json().then(function (data) {
	      // console.log(data); 
	      createArr(data);
	    });
	  }).catch(function (err) {
	    console.log('Fetch Error :-S', err);
	  });
	}
	
	getCurrency();
	
	function createArr(data) {
	  data.map(function (arr) {
	    if (arr[0]) {
	      if (arr[0]['CHF']) {
	        CHF.push(arr[0]['CHF']);
	      } else if (arr[0]['USD']) {
	        USD.push(arr[0]['USD']);
	      } else if (arr[0]['EUR']) {
	        EUR.push(arr[0]['EUR']);
	      }
	    }
	    if (arr[1]) {
	      if (arr[1]['CHF']) {
	        CHF.push(arr[1]['CHF']);
	      } else if (arr[1]['USD']) {
	        USD.push(arr[1]['USD']);
	      } else if (arr[1]['EUR']) {
	        EUR.push(arr[1]['EUR']);
	      }
	    }
	    if (arr[2]) {
	      if (arr[2]['CHF']) {
	        CHF.push(arr[2]['CHF']);
	      } else if (arr[2]['USD']) {
	        USD.push(arr[2]['USD']);
	      } else if (arr[2]['EUR']) {
	        EUR.push(arr[2]['EUR']);
	      }
	    }
	  });
	  // console.log(EUR); 
	
	  var ratesCHF = CHF.map(function (date) {
	    return date.rate;
	  });
	
	  var ratesUSD = USD.map(function (date) {
	    return date.rate;
	  });
	
	  var ratesEUR = EUR.map(function (date) {
	    return date.rate;
	  });
	
	  var minRateCHF = Math.min.apply(Math, _toConsumableArray(ratesCHF));
	  var maxRateCHF = Math.max.apply(Math, _toConsumableArray(ratesCHF));
	
	  var minRateEUR = Math.min.apply(Math, _toConsumableArray(ratesEUR));
	  var maxRateEUR = Math.max.apply(Math, _toConsumableArray(ratesEUR));
	
	  var minRateUSD = Math.min.apply(Math, _toConsumableArray(ratesUSD));
	  var maxRateUSD = Math.max.apply(Math, _toConsumableArray(ratesUSD));
	
	  console.info('CHF:');
	  console.log(minRateCHF);
	  console.log(maxRateCHF);
	
	  console.info('EUR:');
	  console.log(minRateEUR);
	  console.log(maxRateEUR);
	
	  console.info('USD:');
	  console.log(minRateUSD);
	  console.log(maxRateUSD);
	
	  var average = function average(arr) {
	    return arr.reduce(function (p, c) {
	      return p + c;
	    }, 0) / arr.length;
	  };
	
	  var avUSD = average([].concat(_toConsumableArray(ratesUSD)));
	  var avEUR = average([].concat(_toConsumableArray(ratesEUR)));
	  var avCHF = average([].concat(_toConsumableArray(ratesCHF)));
	
	  console.info('Average USD:');
	  console.log(avUSD);
	
	  console.info('Average EUR:');
	  console.log(avEUR);
	
	  console.info('Average CHF:');
	  console.log(avCHF);
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2MzZWEyNzQzOTAxZDZkZDlhYWIiLCJ3ZWJwYWNrOi8vLy4uL0Q6L0Zyb250LWVuZCBDb3Vyc2VzL1Byb2plY3RzL2N1cnJlbmN5LWNvbnZlcnRlci9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL3N0eWxlLnNjc3MiXSwibmFtZXMiOlsiQ0hGIiwiRVVSIiwiVVNEIiwiZ2V0Q3VycmVuY3kiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwiZGF0YSIsImNyZWF0ZUFyciIsImNhdGNoIiwiZXJyIiwibWFwIiwiYXJyIiwicHVzaCIsInJhdGVzQ0hGIiwiZGF0ZSIsInJhdGUiLCJyYXRlc1VTRCIsInJhdGVzRVVSIiwibWluUmF0ZUNIRiIsIk1hdGgiLCJtaW4iLCJtYXhSYXRlQ0hGIiwibWF4IiwibWluUmF0ZUVVUiIsIm1heFJhdGVFVVIiLCJtaW5SYXRlVVNEIiwibWF4UmF0ZVVTRCIsImluZm8iLCJhdmVyYWdlIiwicmVkdWNlIiwicCIsImMiLCJsZW5ndGgiLCJhdlVTRCIsImF2RVVSIiwiYXZDSEYiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7Ozs7Ozs7O0FBRUEsS0FBSUEsTUFBTSxFQUFWO0FBQUEsS0FBY0MsTUFBTSxFQUFwQjtBQUFBLEtBQXdCQyxNQUFNLEVBQTlCOztBQUVBLFVBQVNDLFdBQVQsR0FBdUI7QUFDckJDLFNBQU0sc0JBQU4sRUFDQ0MsSUFERCxDQUVFLFVBQVNDLFFBQVQsRUFBbUI7QUFDakIsU0FBSUEsU0FBU0Ms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dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDNjM2VhMjc0MzkwMWQ2ZGQ5YWFiIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zY3NzL3N0eWxlLnNjc3MnO1xyXG5cclxubGV0IENIRiA9IFtdLCBFVVIgPSBbXSwgVVNEID0gW107XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW5jeSgpIHtcclxuICBmZXRjaCgnLi9qc29uL2N1cnJlbmN5Lmpzb24nKSAgXHJcbiAgLnRoZW4oXHJcbiAgICBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgTG9va3MgbGlrZSB0aGVyZSB3YXMgYSBwcm9ibGVtLiBTdGF0dXMgQ29kZTogIFxyXG4gICAgICAgICAgJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgIH1cclxuICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oXHJcbiAgICAgICAgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7IFxyXG4gICAgICAgICAgY3JlYXRlQXJyKGRhdGEpO1xyXG4gICAgICB9KTsgIFxyXG4gICAgfSAgXHJcbiAgKVxyXG4gIC5jYXRjaChmdW5jdGlvbihlcnIpIHsgIFxyXG4gICAgY29uc29sZS5sb2coJ0ZldGNoIEVycm9yIDotUycsIGVycik7ICBcclxuICB9KTtcclxufVxyXG5cclxuZ2V0Q3VycmVuY3koKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFyciAoZGF0YSkge1xyXG4gIGRhdGEubWFwKChhcnIpID0+IHtcclxuICAgIGlmIChhcnJbMF0pIHtcclxuICAgICAgaWYgKGFyclswXVsnQ0hGJ10pIHtcclxuICAgICAgICBDSEYucHVzaChhcnJbMF1bJ0NIRiddKVxyXG4gICAgICB9IGVsc2UgaWYgKGFyclswXVsnVVNEJ10pIHtcclxuICAgICAgICBVU0QucHVzaChhcnJbMF1bJ1VTRCddKVxyXG4gICAgICB9IGVsc2UgaWYgKGFyclswXVsnRVVSJ10pIHtcclxuICAgICAgICBFVVIucHVzaChhcnJbMF1bJ0VVUiddKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoYXJyWzFdKSB7XHJcbiAgICAgIGlmIChhcnJbMV1bJ0NIRiddKSB7XHJcbiAgICAgICAgQ0hGLnB1c2goYXJyWzFdWydDSEYnXSlcclxuICAgICAgfSBlbHNlIGlmIChhcnJbMV1bJ1VTRCddKSB7XHJcbiAgICAgICAgVVNELnB1c2goYXJyWzFdWydVU0QnXSlcclxuICAgICAgfSBlbHNlIGlmIChhcnJbMV1bJ0VVUiddKSB7XHJcbiAgICAgICAgRVVSLnB1c2goYXJyWzFdWydFVVInXSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGFyclsyXSkge1xyXG4gICAgICBpZiAoYXJyWzJdWydDSEYnXSkge1xyXG4gICAgICAgIENIRi5wdXNoKGFyclsyXVsnQ0hGJ10pXHJcbiAgICAgIH0gZWxzZSBpZiAoYXJyWzJdWydVU0QnXSkge1xyXG4gICAgICAgIFVTRC5wdXNoKGFyclsyXVsnVVNEJ10pXHJcbiAgICAgIH0gZWxzZSBpZiAoYXJyWzJdWydFVVInXSkge1xyXG4gICAgICAgIEVVUi5wdXNoKGFyclsyXVsnRVVSJ10pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG4gIC8vIGNvbnNvbGUubG9nKEVVUik7IFxyXG5cclxuICBsZXQgcmF0ZXNDSEYgPSBDSEYubWFwKChkYXRlKSA9PiB7XHJcbiAgICByZXR1cm4gZGF0ZS5yYXRlO1xyXG4gIH0pO1xyXG4gIFxyXG4gIGxldCByYXRlc1VTRCA9IFVTRC5tYXAoKGRhdGUpID0+IHtcclxuICAgIHJldHVybiBkYXRlLnJhdGU7XHJcbiAgfSk7XHJcblxyXG4gIGxldCByYXRlc0VVUiA9IEVVUi5tYXAoKGRhdGUpID0+IHtcclxuICAgIHJldHVybiBkYXRlLnJhdGU7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG1pblJhdGVDSEYgPSBNYXRoLm1pbiguLi5yYXRlc0NIRik7XHJcbiAgY29uc3QgbWF4UmF0ZUNIRiA9IE1hdGgubWF4KC4uLnJhdGVzQ0hGKTtcclxuXHJcbiAgY29uc3QgbWluUmF0ZUVVUiA9IE1hdGgubWluKC4uLnJhdGVzRVVSKTtcclxuICBjb25zdCBtYXhSYXRlRVVSID0gTWF0aC5tYXgoLi4ucmF0ZXNFVVIpO1xyXG5cclxuICBjb25zdCBtaW5SYXRlVVNEID0gTWF0aC5taW4oLi4ucmF0ZXNVU0QpO1xyXG4gIGNvbnN0IG1heFJhdGVVU0QgPSBNYXRoLm1heCguLi5yYXRlc1VTRCk7XHJcblxyXG4gIGNvbnNvbGUuaW5mbygnQ0hGOicpXHJcbiAgY29uc29sZS5sb2cobWluUmF0ZUNIRik7XHJcbiAgY29uc29sZS5sb2cobWF4UmF0ZUNIRik7XHJcbiAgXHJcbiAgY29uc29sZS5pbmZvKCdFVVI6JylcclxuICBjb25zb2xlLmxvZyhtaW5SYXRlRVVSKTtcclxuICBjb25zb2xlLmxvZyhtYXhSYXRlRVVSKTtcclxuXHJcbiAgY29uc29sZS5pbmZvKCdVU0Q6JylcclxuICBjb25zb2xlLmxvZyhtaW5SYXRlVVNEKTtcclxuICBjb25zb2xlLmxvZyhtYXhSYXRlVVNEKTtcclxuXHJcbiAgbGV0IGF2ZXJhZ2UgPSBhcnIgPT4gYXJyLnJlZHVjZSggKCBwLCBjICkgPT4gcCArIGMsIDAgKSAvIGFyci5sZW5ndGg7XHJcblxyXG4gIGxldCBhdlVTRCA9IGF2ZXJhZ2UoIFsuLi5yYXRlc1VTRF0gKTtcclxuICBsZXQgYXZFVVIgPSBhdmVyYWdlKCBbLi4ucmF0ZXNFVVJdICk7XHJcbiAgbGV0IGF2Q0hGID0gYXZlcmFnZSggWy4uLnJhdGVzQ0hGXSApO1xyXG5cclxuICBjb25zb2xlLmluZm8oJ0F2ZXJhZ2UgVVNEOicpXHJcbiAgY29uc29sZS5sb2coYXZVU0QpO1xyXG5cclxuICBjb25zb2xlLmluZm8oJ0F2ZXJhZ2UgRVVSOicpXHJcbiAgY29uc29sZS5sb2coYXZFVVIpO1xyXG5cclxuICBjb25zb2xlLmluZm8oJ0F2ZXJhZ2UgQ0hGOicpXHJcbiAgY29uc29sZS5sb2coYXZDSEYpO1xyXG59XHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL0Q6L0Zyb250LWVuZCBDb3Vyc2VzL1Byb2plY3RzL2N1cnJlbmN5LWNvbnZlcnRlci9zcmMvanMvbWFpbi5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zY3NzL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==