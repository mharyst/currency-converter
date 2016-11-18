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
/***/ function(module, exports) {

	'use strict';
	
	$('#getData').click(doMagic);
	$('#getDataBatman').click(doMagicBatman);
	
	function doMagic() {
	  $.ajax({
	    url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&date=19990101&json',
	    crossDomain: true,
	    type: "GET",
	    contentType: "application/json",
	    async: false,
	    success: function success(response) {
	      console.log('Load was performed.');
	      console.log(response);
	    },
	    error: function error(reject) {
	      console.log('Load error.');
	      console.log(reject);
	    }
	  });
	}
	
	function doMagicBatman() {
	  $.when($.ajax({
	    url: "https://www.omdbapi.com/?i=tt0944947&Season2&plot=full&r=json&apikey=c2087786",
	    jsonp: "callback",
	    dataType: "jsonp"
	  })).done(function () {
	    console.log('done Batman');
	  });
	}

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTdkZmYwMzQxNmRiY2RjMDY0ZDYiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi5qcyJdLCJuYW1lcyI6WyIkIiwiY2xpY2siLCJkb01hZ2ljIiwiZG9NYWdpY0JhdG1hbiIsImFqYXgiLCJ1cmwiLCJjcm9zc0RvbWFpbiIsInR5cGUiLCJjb250ZW50VHlwZSIsImFzeW5jIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwicmVqZWN0Iiwid2hlbiIsImpzb25wIiwiZGF0YVR5cGUiLCJkb25lIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDdENBQSxHQUFFLFVBQUYsRUFBY0MsS0FBZCxDQUFvQkMsT0FBcEI7QUFDQUYsR0FBRSxnQkFBRixFQUFvQkMsS0FBcEIsQ0FBMEJFLGFBQTFCOztBQUVBLFVBQVNELE9BQVQsR0FBbUI7QUFDakJGLEtBQUVJLElBQUYsQ0FBTztBQUNMQyxVQUFLLDZGQURBO0FBRUxDLGtCQUFhLElBRlI7QUFHTEMsV0FBSyxLQUhBO0FBSUxDLGtCQUFhLGtCQUpSO0FBS0xDLFlBQU8sS0FMRjtBQU1MQyxjQUFTLGlCQUFTQyxRQUFULEVBQWtCO0FBQ3pCQyxlQUFRQyxHQUFSLENBQVkscUJBQVo7QUFDQUQsZUFBUUMsR0FBUixDQUFZRixRQUFaO0FBQ0QsTUFUSTtBQVVMRyxZQUFPLGVBQVNDLE1BQVQsRUFBZ0I7QUFDckJILGVBQVFDLEdBQVIsQ0FBWSxhQUFaO0FBQ0FELGVBQVFDLEdBQVIsQ0FBWUUsTUFBWjtBQUNEO0FBYkksSUFBUDtBQWVEOztBQUVELFVBQVNaLGFBQVQsR0FBeUI7QUFDdkJILEtBQUVnQixJQUFGLENBQ0VoQixFQUFFSSxJQUFGLENBQU87QUFDTEMsVUFBSywrRUFEQTtBQUVMWSxZQUFPLFVBRkY7QUFHTEMsZUFBVTtBQUhMLElBQVAsQ0FERixFQU1FQyxJQU5GLENBTU8sWUFBVztBQUNoQlAsYUFBUUMsR0FBUixDQUFZLGFBQVo7QUFDRCxJQVJEO0FBU0QsRSIsImZpbGUiOiJqcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU3ZGZmMDM0MTZkYmNkYzA2NGQ2IiwiJCgnI2dldERhdGEnKS5jbGljayhkb01hZ2ljKTtcclxuJCgnI2dldERhdGFCYXRtYW4nKS5jbGljayhkb01hZ2ljQmF0bWFuKTtcclxuXHJcbmZ1bmN0aW9uIGRvTWFnaWMoKSB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogJ2h0dHBzOi8vYmFuay5nb3YudWEvTkJVU3RhdFNlcnZpY2UvdjEvc3RhdGRpcmVjdG9yeS9leGNoYW5nZT92YWxjb2RlPUVVUiZkYXRlPTE5OTkwMTAxJmpzb24nLFxyXG4gICAgY3Jvc3NEb21haW46IHRydWUsXHJcbiAgICB0eXBlOlwiR0VUXCIsXHJcbiAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICBhc3luYzogZmFsc2UsXHJcbiAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSl7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdMb2FkIHdhcyBwZXJmb3JtZWQuJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIH0sXHJcbiAgICBlcnJvcjogZnVuY3Rpb24ocmVqZWN0KXtcclxuICAgICAgY29uc29sZS5sb2coJ0xvYWQgZXJyb3IuJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlamVjdCk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkb01hZ2ljQmF0bWFuKCkge1xyXG4gICQud2hlbiggXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly93d3cub21kYmFwaS5jb20vP2k9dHQwOTQ0OTQ3JlNlYXNvbjImcGxvdD1mdWxsJnI9anNvbiZhcGlrZXk9YzIwODc3ODZcIixcclxuICAgICAganNvbnA6IFwiY2FsbGJhY2tcIixcclxuICAgICAgZGF0YVR5cGU6IFwianNvbnBcIiAgICAgIFxyXG4gICAgfSlcclxuICApLmRvbmUoZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZygnZG9uZSBCYXRtYW4nKTtcclxuICB9KTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9tYWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==