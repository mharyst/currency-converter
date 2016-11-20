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
	      console.log(data);
	      createArr(data);
	    });
	  }).catch(function (err) {
	    console.log('Fetch Error :-S', err);
	  });
	}
	
	getCurrency();
	
	function createArr(data) {
	  for (var date in data) {
	    CHF.push(data[date]['CHF']);
	    EUR.push(data[date]['EUR']);
	    USD.push(data[date]['USD']);
	  }
	
	  // console.log(CHF)
	  // console.log(EUR)
	  // console.log(USD)
	
	
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
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzc4ODlkZDEzNmIwYWI0MDAyM2MiLCJ3ZWJwYWNrOi8vLy4uL0Q6L0Zyb250LWVuZCBDb3Vyc2VzL1Byb2plY3RzL2N1cnJlbmN5LWNvbnZlcnRlci9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL3N0eWxlLnNjc3MiXSwibmFtZXMiOlsiQ0hGIiwiRVVSIiwiVVNEIiwiZ2V0Q3VycmVuY3kiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwiZGF0YSIsImNyZWF0ZUFyciIsImNhdGNoIiwiZXJyIiwiZGF0ZSIsInB1c2giLCJyYXRlc0NIRiIsIm1hcCIsInJhdGUiLCJyYXRlc1VTRCIsInJhdGVzRVVSIiwibWluUmF0ZUNIRiIsIk1hdGgiLCJtaW4iLCJtYXhSYXRlQ0hGIiwibWF4IiwibWluUmF0ZUVVUiIsIm1heFJhdGVFVVIiLCJtaW5SYXRlVVNEIiwibWF4UmF0ZVVTRCIsImluZm8iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7Ozs7Ozs7O0FBRUEsS0FBSUEsTUFBTSxFQUFWO0FBQUEsS0FBY0MsTUFBTSxFQUFwQjtBQUFBLEtBQXdCQyxNQUFNLEVBQTlCOztBQUVBLFVBQVNDLFdBQVQsR0FBdUI7QUFDckJDLFNBQU0sc0JBQU4sRUFDQ0MsSUFERCxDQUVFLFVBQVNDLFFBQVQsRUFBbUI7QUFDakIsU0FBSUEsU0FBU0MsTUFBVCxLQUFvQixHQUF4QixFQUE2QjtBQUMzQkMsZUFBUUMsR0FBUixnRUFDSUgsU0FBU0MsTUFEYjtBQUVEO0FBQ0RELGNBQVNJLElBQVQsR0FBZ0JMLElBQWhCLENBQ0UsVUFBU00sSUFBVCxFQUFlO0FBQ2JILGVBQVFDLEdBQVIsQ0FBWUUsSUFBWjtBQUNBQyxpQkFBVUQsSUFBVjtBQUNILE1BSkQ7QUFLRCxJQVpILEVBY0NFLEtBZEQsQ0FjTyxVQUFTQyxHQUFULEVBQWM7QUFDbkJOLGFBQVFDLEdBQVIsQ0FBWSxpQkFBWixFQUErQkssR0FBL0I7QUFDRCxJQWhCRDtBQWlCRDs7QUFFRFg7O0FBRUEsVUFBU1MsU0FBVCxDQUFvQkQsSUFBcEIsRUFBMEI7QUFDeEIsUUFBSyxJQUFJSSxJQUFULElBQWlCSixJQUFqQixFQUF1QjtBQUNyQlgsU0FBSWdCLElBQUosQ0FBU0wsS0FBS0ksSUFBTCxFQUFXLEtBQVgsQ0FBVDtBQUNBZCxTQUFJZSxJQUFKLENBQVNMLEtBQUtJLElBQUwsRUFBVyxLQUFYLENBQVQ7QUFDQWIsU0FBSWMsSUFBSixDQUFTTCxLQUFLSSxJQUFMLEVBQVcsS0FBWCxDQUFUO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBOzs7QUFHQSxPQUFJRSxXQUFXakIsSUFBSWtCLEdBQUosQ0FBUSxVQUFTSCxJQUFULEVBQWU7QUFDcEMsWUFBT0EsS0FBS0ksSUFBWjtBQUNELElBRmMsQ0FBZjs7QUFJQSxPQUFJQyxXQUFXbEIsSUFBSWdCLEdBQUosQ0FBUSxVQUFTSCxJQUFULEVBQWU7QUFDcEMsWUFBT0EsS0FBS0ksSUFBWjtBQUNELElBRmMsQ0FBZjs7QUFJQSxPQUFJRSxXQUFXcEIsSUFBSWlCLEdBQUosQ0FBUSxVQUFTSCxJQUFULEVBQWU7QUFDcEMsWUFBT0EsS0FBS0ksSUFBWjtBQUNELElBRmMsQ0FBZjs7QUFJQSxPQUFNRyxhQUFhQyxLQUFLQyxHQUFMLGdDQUFZUCxRQUFaLEVBQW5CO0FBQ0EsT0FBTVEsYUFBYUYsS0FBS0csR0FBTCxnQ0FBWVQsUUFBWixFQUFuQjs7QUFFQSxPQUFNVSxhQUFhSixLQUFLQyxHQUFMLGdDQUFZSCxRQUFaLEVBQW5CO0FBQ0EsT0FBTU8sYUFBYUwsS0FBS0csR0FBTCxnQ0FBWUwsUUFBWixFQUFuQjs7QUFFQSxPQUFNUSxhQUFhTixLQUFLQyxHQUFMLGdDQUFZSixRQUFaLEVBQW5CO0FBQ0EsT0FBTVUsYUFBYVAsS0FBS0csR0FBTCxnQ0FBWU4sUUFBWixFQUFuQjs7QUFFQVosV0FBUXVCLElBQVIsQ0FBYSxNQUFiO0FBQ0F2QixXQUFRQyxHQUFSLENBQVlhLFVBQVo7QUFDQWQsV0FBUUMsR0FBUixDQUFZZ0IsVUFBWjs7QUFFQWpCLFdBQVF1QixJQUFSLENBQWEsTUFBYjtBQUNBdkIsV0FBUUMsR0FBUixDQUFZa0IsVUFBWjtBQUNBbkIsV0FBUUMsR0FBUixDQUFZbUIsVUFBWjs7QUFFQXBCLFdBQVF1QixJQUFSLENBQWEsTUFBYjtBQUNBdkIsV0FBUUMsR0FBUixDQUFZb0IsVUFBWjtBQUNBckIsV0FBUUMsR0FBUixDQUFZcUIsVUFBWjtBQUNELEU7Ozs7OztBQ3RFRCwwQyIsImZpbGUiOiJqcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDc3ODg5ZGQxMzZiMGFiNDAwMjNjIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zY3NzL3N0eWxlLnNjc3MnO1xyXG5cclxubGV0IENIRiA9IFtdLCBFVVIgPSBbXSwgVVNEID0gW107XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW5jeSgpIHtcclxuICBmZXRjaCgnLi9qc29uL2N1cnJlbmN5Lmpzb24nKSAgXHJcbiAgLnRoZW4oXHJcbiAgICBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgTG9va3MgbGlrZSB0aGVyZSB3YXMgYSBwcm9ibGVtLiBTdGF0dXMgQ29kZTogIFxyXG4gICAgICAgICAgJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgIH1cclxuICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oXHJcbiAgICAgICAgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7IFxyXG4gICAgICAgICAgY3JlYXRlQXJyKGRhdGEpO1xyXG4gICAgICB9KTsgIFxyXG4gICAgfSAgXHJcbiAgKVxyXG4gIC5jYXRjaChmdW5jdGlvbihlcnIpIHsgIFxyXG4gICAgY29uc29sZS5sb2coJ0ZldGNoIEVycm9yIDotUycsIGVycik7ICBcclxuICB9KTtcclxufVxyXG5cclxuZ2V0Q3VycmVuY3koKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFyciAoZGF0YSkge1xyXG4gIGZvciAodmFyIGRhdGUgaW4gZGF0YSkge1xyXG4gICAgQ0hGLnB1c2goZGF0YVtkYXRlXVsnQ0hGJ10pO1xyXG4gICAgRVVSLnB1c2goZGF0YVtkYXRlXVsnRVVSJ10pO1xyXG4gICAgVVNELnB1c2goZGF0YVtkYXRlXVsnVVNEJ10pO1xyXG4gIH1cclxuXHJcbiAgLy8gY29uc29sZS5sb2coQ0hGKVxyXG4gIC8vIGNvbnNvbGUubG9nKEVVUilcclxuICAvLyBjb25zb2xlLmxvZyhVU0QpXHJcblxyXG5cclxuICBsZXQgcmF0ZXNDSEYgPSBDSEYubWFwKGZ1bmN0aW9uKGRhdGUpIHtcclxuICAgIHJldHVybiBkYXRlLnJhdGU7XHJcbiAgfSk7XHJcbiAgXHJcbiAgbGV0IHJhdGVzVVNEID0gVVNELm1hcChmdW5jdGlvbihkYXRlKSB7XHJcbiAgICByZXR1cm4gZGF0ZS5yYXRlO1xyXG4gIH0pO1xyXG5cclxuICBsZXQgcmF0ZXNFVVIgPSBFVVIubWFwKGZ1bmN0aW9uKGRhdGUpIHtcclxuICAgIHJldHVybiBkYXRlLnJhdGU7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG1pblJhdGVDSEYgPSBNYXRoLm1pbiguLi5yYXRlc0NIRik7XHJcbiAgY29uc3QgbWF4UmF0ZUNIRiA9IE1hdGgubWF4KC4uLnJhdGVzQ0hGKTtcclxuXHJcbiAgY29uc3QgbWluUmF0ZUVVUiA9IE1hdGgubWluKC4uLnJhdGVzRVVSKTtcclxuICBjb25zdCBtYXhSYXRlRVVSID0gTWF0aC5tYXgoLi4ucmF0ZXNFVVIpO1xyXG5cclxuICBjb25zdCBtaW5SYXRlVVNEID0gTWF0aC5taW4oLi4ucmF0ZXNVU0QpO1xyXG4gIGNvbnN0IG1heFJhdGVVU0QgPSBNYXRoLm1heCguLi5yYXRlc1VTRCk7XHJcblxyXG4gIGNvbnNvbGUuaW5mbygnQ0hGOicpXHJcbiAgY29uc29sZS5sb2cobWluUmF0ZUNIRik7XHJcbiAgY29uc29sZS5sb2cobWF4UmF0ZUNIRik7XHJcbiAgXHJcbiAgY29uc29sZS5pbmZvKCdFVVI6JylcclxuICBjb25zb2xlLmxvZyhtaW5SYXRlRVVSKTtcclxuICBjb25zb2xlLmxvZyhtYXhSYXRlRVVSKTtcclxuXHJcbiAgY29uc29sZS5pbmZvKCdVU0Q6JylcclxuICBjb25zb2xlLmxvZyhtaW5SYXRlVVNEKTtcclxuICBjb25zb2xlLmxvZyhtYXhSYXRlVVNEKTtcclxufVxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9EOi9Gcm9udC1lbmQgQ291cnNlcy9Qcm9qZWN0cy9jdXJyZW5jeS1jb252ZXJ0ZXIvc3JjL2pzL21haW4uanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2Nzcy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=