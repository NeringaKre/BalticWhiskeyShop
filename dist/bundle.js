/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);

	// require('.././')();
	// require('.././')();
	// require('.././')();

	(function ($) {
	  $(document).ready(function() {
	  	// adding padding bottom as much as footer contains height
	  	var mainContainer = $('.page-container');
	    var footerBlock = $('.page-footer');
	    mainContainer.css('padding-bottom', footerBlock.height() + parseInt(footerBlock.css('padding-top')) * 2 + 'px');

	    // header megamenu logics
	  	var secondaryMenu = $('.header-secondary-menu');
	    var firstLevelItem = $('.header-secondary-menu__item > a');
	    var secondLevelItems = $('.header-secondary-menu__item > ul');
	    var secondLevelSingleItem = $('.header-secondary-menu__item > ul > li > a');
	    var thirdLevelItems = $('.header-secondary-menu__item > ul > li > ul');
	    var firstHasChildren = $('.header-secondary-menu > ul > li > a');
	    var secondHasChildren = $('.header-secondary-menu > ul > li > ul > li > a');
	    
	    // add has children class to first level items
	    $.each(firstHasChildren, function( index, item ) {
	      if($(this).next().length === 0) {
	        return;
	      }

	      $(this).parent().addClass('has-children');
	    });

	    // add has children class to second level items
	    $.each(secondHasChildren, function( index, item ) {
	      if($(this).next().length === 0) {
	        return;
	      }

	      $(this).parent().addClass('has-children');
	    });

	    firstLevelItem.click(function(e) {
	      if ($(this).next().length === 0) {
	        return;
	      }

	      if (firstLevelItem.is(e.target)) {
	        e.preventDefault();
	      }

	      if ($(this).next().hasClass('expanded')) {
	        $(this).next().removeClass('expanded');
	        $(this).removeClass('active');
	      } else {
	      	firstLevelItem.removeClass('active');
	      	secondLevelItems.removeClass('expanded');
	        $(this).next().addClass('expanded');
	        $(this).addClass('active');
	      }
	    });

	    secondLevelSingleItem.click(function(e) {
	      if ($(this).next().length === 0) {
	        return;
	      }

	      if (secondLevelSingleItem.is(e.target)) {
	        e.preventDefault();
	      }

	      if ($(this).next().hasClass('expanded')) {
	        $(this).next().removeClass('expanded');
	        $(this).removeClass('active');
	      } else {
	        secondLevelSingleItem.removeClass('active');
	        thirdLevelItems.removeClass('expanded');
	        $(this).next().addClass('expanded');
	        $(this).addClass('active');
	      }
	    });

	    // mobile menu logics
	    $('.header-menu__burger').on('click', function() {
	      if($('.page-header').hasClass('menu-expanded')) {
	        $('.page-header').removeClass('menu-expanded');
	        return;
	      }

	      $('.page-header').addClass('menu-expanded');
	    });

	    // if clicked outside - close megamenu
	    $(document).mouseup(function(e) {
	      if (!secondaryMenu.is(e.target) && secondaryMenu.has(e.target).length === 0) {
	        secondLevelItems.removeClass('expanded');
	        secondLevelItems.prev().removeClass('active');
	      }
		  });
	  });
	})(jQuery);


/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);