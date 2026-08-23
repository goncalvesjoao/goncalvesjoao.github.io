webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	// Configuring your module
	// window.appConfig is being populated on public/index.html
	// that in turn is being populated by spa/config/spa.js#appConfig entry.

	var _src = __webpack_require__(54);

	// Bootstraping your single page app

	var _routes = __webpack_require__(443);

	var _routes2 = _interopRequireDefault(_routes);

	var _reactDom = __webpack_require__(16);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRouter = __webpack_require__(72);

	var _history = __webpack_require__(306);

	window.React = _react2['default'];
	(0, _src.setConfig)(window.appConfig);

	var history = (0, _history.useBasename)(_history.createHistory)({
	  basename: document.baseURI.substring(window.location.origin.length, document.baseURI.length - 1)
	});

	_reactDom2['default'].render(_react2['default'].createElement(_reactRouter.Router, { routes: _routes2['default'], history: history }), document.getElementById('spa'));

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.setConfig = setConfig;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _config = __webpack_require__(212);

	var _config2 = _interopRequireDefault(_config);

	var _componentsDroids = __webpack_require__(445);

	var _componentsDroids2 = _interopRequireDefault(_componentsDroids);

	function setConfig(newConfig) {
	  Object.assign(_config2['default'], newConfig);
	}

	exports.config = _config2['default'];
	exports['default'] = _componentsDroids2['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var Prism = (function (_React$Component) {
	  _inherits(Prism, _React$Component);

	  function Prism() {
	    _classCallCheck(this, Prism);

	    _get(Object.getPrototypeOf(Prism.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Prism, [{
	    key: 'hightlight',
	    value: function hightlight() {
	      window.Prism.highlightElement(this.refs.code);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.hightlight();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.hightlight();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var preClassName = 'line-numbers';

	      if (this.props.noShadow) {
	        preClassName += ' no-shadow';
	      }

	      return _react2['default'].createElement(
	        'pre',
	        { className: preClassName, 'data-bash-mode': this.props.bashMode },
	        _react2['default'].createElement(
	          'code',
	          { ref: 'code', className: this.props.className },
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return Prism;
	})(_react2['default'].Component);

	exports['default'] = Prism;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Prism.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 141:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"mainContainer":"style__mainContainer___2XNxH","github_icon":"style__github_icon___1nu_u"};

/***/ },

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(15);

	var _warning2 = _interopRequireDefault(_warning);

	var _ExecutionEnvironment = __webpack_require__(51);

	var _DOMUtils = __webpack_require__(63);

	var _deprecate = __webpack_require__(64);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function startBeforeUnloadListener(getBeforeUnloadPromptMessage) {
	  function listener(event) {
	    var message = getBeforeUnloadPromptMessage();

	    if (typeof message === 'string') {
	      (event || window.event).returnValue = message;
	      return message;
	    }
	  }

	  _DOMUtils.addEventListener(window, 'beforeunload', listener);

	  return function () {
	    _DOMUtils.removeEventListener(window, 'beforeunload', listener);
	  };
	}

	/**
	 * Returns a new createHistory function that can be used to create
	 * history objects that know how to use the beforeunload event in web
	 * browsers to cancel navigation.
	 */
	function useBeforeUnload(createHistory) {
	  return function (options) {
	    var history = createHistory(options);

	    var stopBeforeUnloadListener = undefined;
	    var beforeUnloadHooks = [];

	    function getBeforeUnloadPromptMessage() {
	      var message = undefined;

	      for (var i = 0, len = beforeUnloadHooks.length; message == null && i < len; ++i) {
	        message = beforeUnloadHooks[i].call();
	      }return message;
	    }

	    function listenBeforeUnload(hook) {
	      beforeUnloadHooks.push(hook);

	      if (beforeUnloadHooks.length === 1) {
	        if (_ExecutionEnvironment.canUseDOM) {
	          stopBeforeUnloadListener = startBeforeUnloadListener(getBeforeUnloadPromptMessage);
	        } else {
	          process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'listenBeforeUnload only works in DOM environments') : undefined;
	        }
	      }

	      return function () {
	        beforeUnloadHooks = beforeUnloadHooks.filter(function (item) {
	          return item !== hook;
	        });

	        if (beforeUnloadHooks.length === 0 && stopBeforeUnloadListener) {
	          stopBeforeUnloadListener();
	          stopBeforeUnloadListener = null;
	        }
	      };
	    }

	    // deprecated
	    function registerBeforeUnloadHook(hook) {
	      if (_ExecutionEnvironment.canUseDOM && beforeUnloadHooks.indexOf(hook) === -1) {
	        beforeUnloadHooks.push(hook);

	        if (beforeUnloadHooks.length === 1) stopBeforeUnloadListener = startBeforeUnloadListener(getBeforeUnloadPromptMessage);
	      }
	    }

	    // deprecated
	    function unregisterBeforeUnloadHook(hook) {
	      if (beforeUnloadHooks.length > 0) {
	        beforeUnloadHooks = beforeUnloadHooks.filter(function (item) {
	          return item !== hook;
	        });

	        if (beforeUnloadHooks.length === 0) stopBeforeUnloadListener();
	      }
	    }

	    return _extends({}, history, {
	      listenBeforeUnload: listenBeforeUnload,

	      registerBeforeUnloadHook: _deprecate2['default'](registerBeforeUnloadHook, 'registerBeforeUnloadHook is deprecated; use listenBeforeUnload instead'),
	      unregisterBeforeUnloadHook: _deprecate2['default'](unregisterBeforeUnloadHook, 'unregisterBeforeUnloadHook is deprecated; use the callback returned from listenBeforeUnload instead')
	    });
	  };
	}

	exports['default'] = useBeforeUnload;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(72);

	var LiLink = _react2['default'].createClass({
	  displayName: 'LiLink',

	  mixins: [_reactRouter.History],

	  render: function render() {
	    var isActive = this.history.isActive(this.props.to, this.props.query, this.props.index);

	    return _react2['default'].createElement('li', { className: isActive ? 'active' : '' }, _react2['default'].createElement(this.props.index ? _reactRouter.IndexLink : _reactRouter.Link, _extends({ activeClassName: 'active' }, this.props)));
	  }

	});

	exports['default'] = LiLink;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "LiLink.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  url: 'https://raw.githubusercontent.com/goncalvesjoao/react-to-commonjs/master/readme/starwars/'
	};
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "config.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 287:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"avatar":"style__avatar___2DvjO"};

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(18);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(37);

	var _ExecutionEnvironment = __webpack_require__(51);

	var _DOMUtils = __webpack_require__(63);

	var _DOMStateStorage = __webpack_require__(148);

	var _createDOMHistory = __webpack_require__(149);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve URLs.
	 */
	function createBrowserHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

	  var forceRefresh = options.forceRefresh;

	  var isSupported = _DOMUtils.supportsHistory();
	  var useRefresh = !isSupported || forceRefresh;

	  function getCurrentLocation(historyState) {
	    historyState = historyState || window.history.state || {};

	    var path = _DOMUtils.getWindowPath();
	    var _historyState = historyState;
	    var key = _historyState.key;

	    var state = undefined;
	    if (key) {
	      state = _DOMStateStorage.readState(key);
	    } else {
	      state = null;
	      key = history.createKey();

	      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
	    }

	    return history.createLocation(path, state, undefined, key);
	  }

	  function startPopStateListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function popStateListener(event) {
	      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

	      transitionTo(getCurrentLocation(event.state));
	    }

	    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
	    };
	  }

	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    _DOMStateStorage.saveState(key, state);

	    var path = (basename || '') + pathname + search + hash;
	    var historyState = {
	      key: key
	    };

	    if (action === _Actions.PUSH) {
	      if (useRefresh) {
	        window.location.href = path;
	        return false; // Prevent location update.
	      } else {
	          window.history.pushState(historyState, null, path);
	        }
	    } else {
	      // REPLACE
	      if (useRefresh) {
	        window.location.replace(path);
	        return false; // Prevent location update.
	      } else {
	          window.history.replaceState(historyState, null, path);
	        }
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopPopStateListener = undefined;

	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listenBefore(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  function listen(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    history.registerTransitionHook(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);

	    if (--listenerCount === 0) stopPopStateListener();
	  }

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    registerTransitionHook: registerTransitionHook,
	    unregisterTransitionHook: unregisterTransitionHook
	  });
	}

	exports['default'] = createBrowserHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deprecate = __webpack_require__(64);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var _useBeforeUnload = __webpack_require__(156);

	var _useBeforeUnload2 = _interopRequireDefault(_useBeforeUnload);

	exports['default'] = _deprecate2['default'](_useBeforeUnload2['default'], 'enableBeforeUnload is deprecated, use useBeforeUnload instead');
	module.exports = exports['default'];

/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deprecate = __webpack_require__(64);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var _useQueries = __webpack_require__(89);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	exports['default'] = _deprecate2['default'](_useQueries2['default'], 'enableQueries is deprecated, use useQueries instead');
	module.exports = exports['default'];

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createBrowserHistory = __webpack_require__(303);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	exports.createHistory = _createBrowserHistory2['default'];

	var _createHashHistory2 = __webpack_require__(150);

	var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);

	exports.createHashHistory = _createHashHistory3['default'];

	var _createMemoryHistory2 = __webpack_require__(153);

	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

	exports.createMemoryHistory = _createMemoryHistory3['default'];

	var _createLocation2 = __webpack_require__(152);

	var _createLocation3 = _interopRequireDefault(_createLocation2);

	exports.createLocation = _createLocation3['default'];

	var _useBasename2 = __webpack_require__(155);

	var _useBasename3 = _interopRequireDefault(_useBasename2);

	exports.useBasename = _useBasename3['default'];

	var _useBeforeUnload2 = __webpack_require__(156);

	var _useBeforeUnload3 = _interopRequireDefault(_useBeforeUnload2);

	exports.useBeforeUnload = _useBeforeUnload3['default'];

	var _useQueries2 = __webpack_require__(89);

	var _useQueries3 = _interopRequireDefault(_useQueries2);

	exports.useQueries = _useQueries3['default'];

	var _Actions2 = __webpack_require__(37);

	var _Actions3 = _interopRequireDefault(_Actions2);

	exports.Actions = _Actions3['default'];

	// deprecated

	var _enableBeforeUnload2 = __webpack_require__(304);

	var _enableBeforeUnload3 = _interopRequireDefault(_enableBeforeUnload2);

	exports.enableBeforeUnload = _enableBeforeUnload3['default'];

	var _enableQueries2 = __webpack_require__(305);

	var _enableQueries3 = _interopRequireDefault(_enableQueries2);

	exports.enableQueries = _enableQueries3['default'];

/***/ },

/***/ 436:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Prism = __webpack_require__(106);

	var _Prism2 = _interopRequireDefault(_Prism);

	var _reactBootstrap = __webpack_require__(104);

	var ConfigExample = (function (_React$Component) {
	  _inherits(ConfigExample, _React$Component);

	  function ConfigExample() {
	    _classCallCheck(this, ConfigExample);

	    _get(Object.getPrototypeOf(ConfigExample.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(ConfigExample, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          _Prism2['default'],
	          { className: 'language-jsx' },
	          'import { setConfig } from \'stardoroido\';'
	        ),
	        _react2['default'].createElement(
	          'p',
	          null,
	          ' '
	        ),
	        _react2['default'].createElement(
	          'p',
	          { className: 'lead' },
	          'Examples:'
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'panel panel-default' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-heading' },
	            _react2['default'].createElement(
	              'h3',
	              { className: 'panel-title' },
	              'Change Droids API endpoint'
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-body' },
	            _react2['default'].createElement(
	              'p',
	              null,
	              'Everytime ',
	              _react2['default'].createElement(
	                'b',
	                null,
	                'Droids#componentWillMount'
	              ),
	              ' executes it will make a remote request to ',
	              _react2['default'].createElement(
	                'b',
	                null,
	                '{ config.url }',
	                '/droids.json'
	              ),
	              ', to fetch the droids\' list.'
	            ),
	            _react2['default'].createElement(
	              'p',
	              null,
	              'You can alter it through the ',
	              _react2['default'].createElement(
	                'b',
	                null,
	                'setConfig'
	              ),
	              ' function.'
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-footer' },
	            _react2['default'].createElement(
	              _reactBootstrap.Label,
	              { bsSize: 'small' },
	              'Code:'
	            ),
	            _react2['default'].createElement(
	              _Prism2['default'],
	              { className: 'language-jsx' },
	              'setConfig({ url: \'http://starwars.fake.api.com/\' });'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return ConfigExample;
	})(_react2['default'].Component);

	exports['default'] = ConfigExample;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SetConfigExample.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 437:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Prism = __webpack_require__(106);

	var _Prism2 = _interopRequireDefault(_Prism);

	var _LiLink = __webpack_require__(211);

	var _LiLink2 = _interopRequireDefault(_LiLink);

	var _src = __webpack_require__(54);

	var _src2 = _interopRequireDefault(_src);

	var _reactBootstrap = __webpack_require__(104);

	var _reactRouter = __webpack_require__(72);

	var ApiDocs = (function (_React$Component) {
	  _inherits(ApiDocs, _React$Component);

	  function ApiDocs() {
	    _classCallCheck(this, ApiDocs);

	    _get(Object.getPrototypeOf(ApiDocs.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(ApiDocs, [{
	    key: 'renderHome',
	    value: function renderHome() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          _Prism2['default'],
	          { className: 'language-jsx' },
	          'import Droids from \'stardoroido\';'
	        ),
	        _react2['default'].createElement(
	          'p',
	          null,
	          ' '
	        ),
	        _react2['default'].createElement(
	          'p',
	          { className: 'lead' },
	          'Examples:'
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'panel panel-default' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-heading' },
	            _react2['default'].createElement(
	              'h3',
	              { className: 'panel-title' },
	              'Default mode'
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-body' },
	            _react2['default'].createElement(_src2['default'], null)
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-footer' },
	            _react2['default'].createElement(
	              _reactBootstrap.Label,
	              { bsSize: 'small' },
	              'Code:'
	            ),
	            _react2['default'].createElement(
	              _Prism2['default'],
	              { className: 'language-jsx' },
	              '<Droids />'
	            )
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'panel panel-default' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-heading' },
	            _react2['default'].createElement(
	              'h3',
	              { className: 'panel-title' },
	              'Disable display name'
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-body' },
	            _react2['default'].createElement(_src2['default'], { name: false })
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'panel-footer' },
	            _react2['default'].createElement(
	              _reactBootstrap.Label,
	              { bsSize: 'small' },
	              'Code:'
	            ),
	            _react2['default'].createElement(
	              _Prism2['default'],
	              { className: 'language-jsx' },
	              '<Droids name={ false } />'
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'renderSidebar',
	    value: function renderSidebar() {
	      return _react2['default'].createElement(
	        'ul',
	        { className: 'ascii fixed' },
	        _react2['default'].createElement(
	          'li',
	          null,
	          _react2['default'].createElement(
	            _reactRouter.IndexLink,
	            { activeClassName: 'active', to: '/api_docs' },
	            'Stardoroido'
	          ),
	          _react2['default'].createElement(
	            'ul',
	            null,
	            _react2['default'].createElement(
	              _LiLink2['default'],
	              { to: '/api_docs/set_config' },
	              'setConfig'
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { id: 'top' },
	        _react2['default'].createElement(
	          'p',
	          null,
	          ' '
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'container' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'row' },
	            _react2['default'].createElement(
	              'div',
	              { className: 'col-xs-3 ascii' },
	              this.renderSidebar()
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: 'col-md-9' },
	              this.props.children || this.renderHome()
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return ApiDocs;
	})(_react2['default'].Component);

	exports['default'] = ApiDocs;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 438:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Prism = __webpack_require__(106);

	var _Prism2 = _interopRequireDefault(_Prism);

	var _src = __webpack_require__(54);

	var Home = (function (_React$Component) {
	  _inherits(Home, _React$Component);

	  function Home() {
	    _classCallCheck(this, Home);

	    _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Home, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { className: 'jumbotron' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'container' },
	            _react2['default'].createElement(
	              'div',
	              { className: 'row' },
	              _react2['default'].createElement(
	                'div',
	                { className: 'col-md-7 text-center' },
	                _react2['default'].createElement(
	                  'h1',
	                  null,
	                  _src.config.name
	                ),
	                _react2['default'].createElement(
	                  'p',
	                  { className: 'lead' },
	                  _src.config.description
	                )
	              ),
	              _react2['default'].createElement(
	                'div',
	                { className: 'col-md-5 jumbotron-side text-center' },
	                _react2['default'].createElement(
	                  'p',
	                  null,
	                  ' '
	                ),
	                _react2['default'].createElement(
	                  'p',
	                  null,
	                  this.repositoryLink()
	                ),
	                _react2['default'].createElement(
	                  'p',
	                  null,
	                  _react2['default'].createElement(
	                    'strong',
	                    null,
	                    'Version'
	                  ),
	                  ' ',
	                  _src.config.version
	                )
	              )
	            )
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'container' },
	          _react2['default'].createElement(
	            'p',
	            { className: 'lead' },
	            'This React Module was built, tested and documented with the help of ',
	            _react2['default'].createElement(
	              'a',
	              { href: 'https://github.com/goncalvesjoao/react-to-commonjs', target: '_blank' },
	              'React-to-commonJS'
	            ),
	            '.',
	            _react2['default'].createElement('br', null),
	            'Check it out if you want to create a React Component without the pain of gathering all the necessary developing tools, building your own documentation page (like this one) and or mock servers for testing/developing purposes.'
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'container' },
	          _react2['default'].createElement(
	            'h2',
	            null,
	            'Getting started'
	          ),
	          _react2['default'].createElement(
	            _Prism2['default'],
	            { className: 'language-ruby', noShadow: true, bashMode: true },
	            'npm install git+https://git@github.com:',
	            _src.config.author || '<package.json:author>',
	            '/',
	            _src.config.name || '<package.json:name>',
	            '.git#master --save'
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            'You can now require ',
	            _react2['default'].createElement(
	              'b',
	              null,
	              'stardoroido'
	            ),
	            ' on your React project like a normal node module.'
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'container' },
	          _react2['default'].createElement(
	            'h2',
	            null,
	            'Usage'
	          ),
	          _react2['default'].createElement(
	            _Prism2['default'],
	            { className: 'language-jsx', noShadow: true },
	            'const React = require(\'react\');\nconst Stardoroido = require(\'stardoroido\');\nconst { Droids } = Stardoroido.components;\n\nclass App extends React.Component {\n  render() {\n    return (\n      <div>\n        <h1>Hello world!</h1>\n        <Droids />\n      </div>\n    );\n  }\n}'
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'container' },
	          _react2['default'].createElement(
	            'h2',
	            null,
	            'Notes'
	          ),
	          _react2['default'].createElement(
	            'ul',
	            null,
	            _react2['default'].createElement(
	              'li',
	              null,
	              _react2['default'].createElement(
	                'p',
	                null,
	                'In truth this React Module is actually the one that comes built-in with react-to-commonjs when it creates a new project.'
	              ),
	              _react2['default'].createElement(
	                'p',
	                null,
	                'Why does react-to-commonjs create a template project you ask? Because the documentation page would be blank and you wouldn\'t get to see how to connect your component to the documentation page.'
	              )
	            ),
	            _react2['default'].createElement(
	              'li',
	              null,
	              _react2['default'].createElement(
	                'p',
	                null,
	                'This simple project makes an ajax call to fetch the droids data and for that it makes use of mock servers. This way front-end development doesn\'t have to wait for back-end development.'
	              )
	            ),
	            _react2['default'].createElement(
	              'li',
	              null,
	              _react2['default'].createElement(
	                'p',
	                null,
	                'The existing test spec is both an example of how you can test your React Component and how you can setup your spec to prevent a remote ajax call.'
	              )
	            ),
	            _react2['default'].createElement(
	              'li',
	              null,
	              _react2['default'].createElement(
	                'p',
	                null,
	                'Also, this project was created using the --css_modules option:'
	              ),
	              _react2['default'].createElement(
	                _Prism2['default'],
	                { className: 'language-ruby', noShadow: true, bashMode: true },
	                'r2c2 new stardoroido --css_modules'
	              ),
	              _react2['default'].createElement(
	                'p',
	                null,
	                'which means that this project uses ',
	                _react2['default'].createElement(
	                  'a',
	                  { href: 'https://github.com/gajus/react-css-modules', target: '_blank' },
	                  'react-css-modules'
	                ),
	                ', the spec example is also prepared for this and mocks the react-css-modules lib, so that mocha doesn\'t launch an error while loading css files.'
	              )
	            )
	          ),
	          _react2['default'].createElement(
	            'p',
	            null,
	            ' '
	          )
	        )
	      );
	    }
	  }, {
	    key: 'repositoryLink',
	    value: function repositoryLink() {
	      var props = { href: '' };

	      if (_src.config.repository) {
	        props.href = _src.config.repository.url;
	      }

	      if (props.href) {
	        props.href += '/releases';
	        props.target = '_blank';
	      } else {
	        props.href = '#';
	        props.onClick = function (event) {
	          event.preventDefault();

	          /*eslint-disable */
	          alert('You might want to fill in the blanks of your repository details listed on the package.json');
	          /*eslint-enable */
	        };
	      }

	      return _react2['default'].createElement(
	        'a',
	        _extends({}, props, { className: 'btn btn-success btn-lg' }),
	        _react2['default'].createElement('i', { className: 'glyphicon glyphicon-download-alt' }),
	        ' Download'
	      );
	    }
	  }]);

	  return Home;
	})(_react2['default'].Component);

	exports['default'] = Home;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Home.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 439:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _src = __webpack_require__(54);

	var Footer = function Footer() {
	  return React.createElement(
	    'footer',
	    { className: 'container' },
	    React.createElement(
	      'center',
	      null,
	      'All copyrights reserved © ',
	      React.createElement(
	        'b',
	        null,
	        _src.config.author || '<package.json:author>'
	      ),
	      ' ',
	      new Date().getFullYear()
	    ),
	    React.createElement(
	      'p',
	      null,
	      ' '
	    )
	  );
	};

	exports['default'] = Footer;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Footer.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 440:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _LiLink = __webpack_require__(211);

	var _LiLink2 = _interopRequireDefault(_LiLink);

	var _stylesStyleCss = __webpack_require__(141);

	var _stylesStyleCss2 = _interopRequireDefault(_stylesStyleCss);

	var _reactCssModules = __webpack_require__(70);

	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

	var _src = __webpack_require__(54);

	var Header = (function (_React$Component) {
	  _inherits(Header, _React$Component);

	  function Header() {
	    _classCallCheck(this, _Header);

	    _get(Object.getPrototypeOf(_Header.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Header, [{
	    key: 'repositoryLink',
	    value: function repositoryLink() {
	      var props = { href: '' };

	      if (_src.config.repository) {
	        props.href = _src.config.repository.url;
	      }

	      if (props.href) {
	        props.target = '_blank';
	      } else {
	        props.href = '#';
	        props.onClick = function (event) {
	          event.preventDefault();

	          /*eslint-disable */
	          alert('You might want to fill in the blanks of your repository details listed on the package.json');
	          /*eslint-enable */
	        };
	      }

	      return _react2['default'].createElement(
	        'a',
	        props,
	        _react2['default'].createElement('img', { styleName: 'github_icon', src: 'imgs/github.png' }),
	        ' GitHub'
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'nav',
	        { className: 'navbar navbar-inverse navbar-fixed-top' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'container' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'navbar-header' },
	            _react2['default'].createElement(
	              'button',
	              { className: 'navbar-toggle collapsed', type: 'button', 'data-toggle': 'collapse', 'data-target': '.select2-navbar-collapse' },
	              _react2['default'].createElement(
	                'span',
	                { className: 'sr-only' },
	                'Toggle navigation'
	              ),
	              _react2['default'].createElement('span', { className: 'icon-bar' }),
	              _react2['default'].createElement('span', { className: 'icon-bar' }),
	              _react2['default'].createElement('span', { className: 'icon-bar' })
	            ),
	            _react2['default'].createElement(
	              'a',
	              { href: '', className: 'navbar-brand' },
	              'Stardoroido'
	            )
	          ),
	          _react2['default'].createElement(
	            'nav',
	            { className: 'collapse navbar-collapse select2-navbar-collapse', role: 'navigation' },
	            _react2['default'].createElement(
	              'ul',
	              { className: 'nav navbar-nav' },
	              _react2['default'].createElement(
	                _LiLink2['default'],
	                { index: true, to: '/' },
	                'Home'
	              ),
	              _react2['default'].createElement(
	                _LiLink2['default'],
	                { to: '/api_docs' },
	                'API DOCS'
	              )
	            ),
	            _react2['default'].createElement(
	              'ul',
	              { className: 'nav navbar-nav navbar-right' },
	              _react2['default'].createElement(
	                'li',
	                null,
	                this.repositoryLink()
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  var _Header = Header;
	  Header = (0, _reactCssModules2['default'])(_stylesStyleCss2['default'])(Header) || Header;
	  return Header;
	})(_react2['default'].Component);

	exports['default'] = Header;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Header.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 441:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Header = __webpack_require__(440);

	var _Header2 = _interopRequireDefault(_Header);

	var _Footer = __webpack_require__(439);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _stylesStyleCss = __webpack_require__(141);

	var _stylesStyleCss2 = _interopRequireDefault(_stylesStyleCss);

	var _reactCssModules = __webpack_require__(70);

	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

	var App = function App(_ref) {
	  var children = _ref.children;
	  return React.createElement(
	    'div',
	    null,
	    React.createElement(_Header2['default'], null),
	    React.createElement(
	      'div',
	      { styleName: 'mainContainer' },
	      children
	    ),
	    React.createElement(_Footer2['default'], null)
	  );
	};

	exports['default'] = (0, _reactCssModules2['default'])(_stylesStyleCss2['default'])(App);
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 442:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var NotFound = function NotFound() {
	  return React.createElement(
	    "div",
	    { className: "jumbotron container" },
	    React.createElement(
	      "h1",
	      null,
	      "404 Not Found"
	    )
	  );
	};

	exports["default"] = NotFound;
	module.exports = exports["default"];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "NotFound.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 443:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _componentsHome = __webpack_require__(438);

	var _componentsHome2 = _interopRequireDefault(_componentsHome);

	var _componentsLayout = __webpack_require__(441);

	var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

	var _componentsApiDocs = __webpack_require__(437);

	var _componentsApiDocs2 = _interopRequireDefault(_componentsApiDocs);

	var _componentsNotFound = __webpack_require__(442);

	var _componentsNotFound2 = _interopRequireDefault(_componentsNotFound);

	var _componentsApiDocsSetConfigExample = __webpack_require__(436);

	var _componentsApiDocsSetConfigExample2 = _interopRequireDefault(_componentsApiDocsSetConfigExample);

	var routes = {
	  component: _componentsLayout2['default'],
	  childRoutes: [{ path: '/', component: _componentsHome2['default'] }, { path: '/index.html', onEnter: function onEnter(nextState, replaceState) {
	      return replaceState(null, '/');
	    } }, {
	    path: '/api_docs',
	    component: _componentsApiDocs2['default'],
	    childRoutes: [{
	      path: 'set_config',
	      component: _componentsApiDocsSetConfigExample2['default']
	    }]
	  }, { path: '*', component: _componentsNotFound2['default'] }]
	};

	exports['default'] = routes;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "routes.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 444:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _stylesStyleCss = __webpack_require__(287);

	var _stylesStyleCss2 = _interopRequireDefault(_stylesStyleCss);

	var _reactCssModules = __webpack_require__(70);

	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

	var defaultProps = {
	  name: true
	};

	var Droid = (function (_React$Component) {
	  _inherits(Droid, _React$Component);

	  function Droid() {
	    _classCallCheck(this, _Droid);

	    _get(Object.getPrototypeOf(_Droid.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Droid, [{
	    key: 'renderName',
	    value: function renderName() {
	      if (!this.props.name) {
	        return null;
	      }

	      return _react2['default'].createElement(
	        'p',
	        { className: 'text-center' },
	        _react2['default'].createElement(
	          'span',
	          { name: 'droid-name', className: 'label label-info' },
	          this.props.droid.name
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'li',
	        null,
	        _react2['default'].createElement('img', {
	          className: 'img-circle',
	          styleName: 'avatar',
	          src: this.props.droid.avatar
	        }),
	        _react2['default'].createElement(
	          'span',
	          null,
	          this.renderName()
	        )
	      );
	    }
	  }]);

	  var _Droid = Droid;
	  Droid = (0, _reactCssModules2['default'])(_stylesStyleCss2['default'])(Droid) || Droid;
	  return Droid;
	})(_react2['default'].Component);

	Droid.defaultProps = defaultProps;

	exports['default'] = Droid;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Droid.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 445:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Droid = __webpack_require__(444);

	var _Droid2 = _interopRequireDefault(_Droid);

	var _jquery = __webpack_require__(158);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _config = __webpack_require__(212);

	var _config2 = _interopRequireDefault(_config);

	var Droids = (function (_React$Component) {
	  _inherits(Droids, _React$Component);

	  function Droids() {
	    _classCallCheck(this, Droids);

	    _get(Object.getPrototypeOf(Droids.prototype), 'constructor', this).call(this);
	    this.state = { droids: [] };
	  }

	  _createClass(Droids, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this = this;

	      _jquery2['default'].ajax({
	        url: _config2['default'].url + 'droids.json',
	        dataType: 'json',
	        success: function success(data) {
	          _this.setState({ droids: data });
	        }
	      });
	    }
	  }, {
	    key: 'renderDroids',
	    value: function renderDroids() {
	      var _this2 = this;

	      if (!this.state.droids.length) {
	        return _react2['default'].createElement(
	          'li',
	          null,
	          _react2['default'].createElement(
	            'h2',
	            null,
	            'These are not the droids you are looking for'
	          )
	        );
	      }

	      return this.state.droids.map(function (droid, index) {
	        return _react2['default'].createElement(_Droid2['default'], _extends({ key: index, droid: droid }, _this2.props));
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'ul',
	        { className: 'list-inline' },
	        this.renderDroids()
	      );
	    }
	  }]);

	  return Droids;
	})(_react2['default'].Component);

	exports['default'] = Droids;
	module.exports = exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }

});