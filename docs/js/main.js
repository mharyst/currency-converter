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
	
	$('#getData').click(doMagic);
	$('#getDataBatman').click(doMagicBatman);
	
	function doMagic() {
	  $.ajax({
	    url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&date=19990101&json',
	    type: 'GET',
	    crossDomain: true,
	    dataType: 'jsonp',
	    headers: { "X-My-Custom-Header": "some value" },
	    success: function success(response) {
	      console.log('Load was performed.');
	      console.log(response);
	    },
	    error: function error(response) {
	      console.log('Load error.');
	      console.log(response);
	    }
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
	    type: "GET",
	    contentType: "application/json",
	    async: false,
	    dataType: "jsonp",
	    success: function success(response) {
	      console.log('Load was performed.');
	      console.log(response);
	    },
	    error: function error(response) {
	      console.log('Load error.');
	      console.log(response);
	    }
	  });
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGRkOGQ2MDgzZmEwZWMxMjEwYWEiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL3N0eWxlLnNjc3MiXSwibmFtZXMiOlsiJCIsImNsaWNrIiwiZG9NYWdpYyIsImRvTWFnaWNCYXRtYW4iLCJhamF4IiwidXJsIiwidHlwZSIsImNyb3NzRG9tYWluIiwiZGF0YVR5cGUiLCJoZWFkZXJzIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibXljYWxsYmFjayIsImRhdGEiLCJjb250ZW50VHlwZSIsImFzeW5jIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBOzs7Ozs7QUFFQUEsR0FBRSxVQUFGLEVBQWNDLEtBQWQsQ0FBb0JDLE9BQXBCO0FBQ0FGLEdBQUUsZ0JBQUYsRUFBb0JDLEtBQXBCLENBQTBCRSxhQUExQjs7QUFFQSxVQUFTRCxPQUFULEdBQW1CO0FBQ2pCRixLQUFFSSxJQUFGLENBQU87QUFDTEMsVUFBSyw2RkFEQTtBQUVMQyxXQUFLLEtBRkE7QUFHTEMsa0JBQWEsSUFIUjtBQUlMQyxlQUFVLE9BSkw7QUFLTEMsY0FBUyxFQUFDLHNCQUFzQixZQUF2QixFQUxKO0FBTUxDLGNBQVMsaUJBQVNDLFFBQVQsRUFBbUI7QUFDMUJDLGVBQVFDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBRCxlQUFRQyxHQUFSLENBQVlGLFFBQVo7QUFDRCxNQVRJO0FBVUxHLFlBQU8sZUFBU0gsUUFBVCxFQUFtQjtBQUN4QkMsZUFBUUMsR0FBUixDQUFZLGFBQVo7QUFDQUQsZUFBUUMsR0FBUixDQUFZRixRQUFaO0FBQ0Q7QUFiSSxJQUFQOztBQWlCQSxZQUFTSSxVQUFULENBQW9CQyxJQUFwQixFQUEwQjtBQUN4QkosYUFBUUMsR0FBUixDQUFZLE1BQVo7QUFDQUQsYUFBUUMsR0FBUixDQUFZRyxJQUFaO0FBQ0Q7QUFDRjs7QUFFRCxVQUFTYixhQUFULEdBQXlCO0FBQ3RCSCxLQUFFSSxJQUFGLENBQU87QUFDTkMsVUFBSywrRUFEQztBQUVORSxrQkFBYSxJQUZQO0FBR05ELFdBQUssS0FIQztBQUlOVyxrQkFBYSxrQkFKUDtBQUtOQyxZQUFPLEtBTEQ7QUFNTlYsZUFBVSxPQU5KO0FBT05FLGNBQVMsaUJBQVNDLFFBQVQsRUFBa0I7QUFDekJDLGVBQVFDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBRCxlQUFRQyxHQUFSLENBQVlGLFFBQVo7QUFDRCxNQVZLO0FBV05HLFlBQU8sZUFBU0gsUUFBVCxFQUFrQjtBQUN2QkMsZUFBUUMsR0FBUixDQUFZLGFBQVo7QUFDQUQsZUFBUUMsR0FBUixDQUFZRixRQUFaO0FBQ0Q7QUFkSyxJQUFQO0FBZ0JGLEU7Ozs7OztBQzlDRCwwQyIsImZpbGUiOiJqcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDRkZDhkNjA4M2ZhMGVjMTIxMGFhIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zY3NzL3N0eWxlLnNjc3MnO1xyXG5cclxuJCgnI2dldERhdGEnKS5jbGljayhkb01hZ2ljKTtcclxuJCgnI2dldERhdGFCYXRtYW4nKS5jbGljayhkb01hZ2ljQmF0bWFuKTtcclxuXHJcbmZ1bmN0aW9uIGRvTWFnaWMoKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogJ2h0dHBzOi8vYmFuay5nb3YudWEvTkJVU3RhdFNlcnZpY2UvdjEvc3RhdGRpcmVjdG9yeS9leGNoYW5nZT92YWxjb2RlPUVVUiZkYXRlPTE5OTkwMTAxJmpzb24nLFxyXG4gICAgdHlwZTonR0VUJyxcclxuICAgIGNyb3NzRG9tYWluOiB0cnVlLFxyXG4gICAgZGF0YVR5cGU6ICdqc29ucCcsXHJcbiAgICBoZWFkZXJzOiB7XCJYLU15LUN1c3RvbS1IZWFkZXJcIjogXCJzb21lIHZhbHVlXCJ9LFxyXG4gICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgY29uc29sZS5sb2coJ0xvYWQgd2FzIHBlcmZvcm1lZC4nKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgfSxcclxuICAgIGVycm9yOiBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnTG9hZCBlcnJvci4nKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbsKgXHJcbiAgZnVuY3Rpb24gbXljYWxsYmFjayhkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZygnZGF0YScpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkb01hZ2ljQmF0bWFuKCkge1xyXG4gICAkLmFqYXgoe1xyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cub21kYmFwaS5jb20vP2k9dHQwOTQ0OTQ3JlNlYXNvbjImcGxvdD1mdWxsJnI9anNvbiZhcGlrZXk9YzIwODc3ODYnLFxyXG4gICAgY3Jvc3NEb21haW46IHRydWUsXHJcbiAgICB0eXBlOlwiR0VUXCIsXHJcbiAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICBhc3luYzogZmFsc2UsXHJcbiAgICBkYXRhVHlwZTogXCJqc29ucFwiLCAgXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdMb2FkIHdhcyBwZXJmb3JtZWQuJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIH0sXHJcbiAgICBlcnJvcjogZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gICAgICBjb25zb2xlLmxvZygnTG9hZCBlcnJvci4nKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9tYWluLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Njc3Mvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9