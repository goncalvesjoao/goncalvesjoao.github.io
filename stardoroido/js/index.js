webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	window.React = __webpack_require__(1);
	window.ReactRouter = __webpack_require__(213);
	window.Stardoroido = __webpack_require__(451);

	// Configuring Stardoroido
	// window.appConfig is being populated on public/index.html
	// that in turn is being populated by spa/config/spa.js#appConfig entry.
	Object.assign(window.Stardoroido.config, window.appConfig);

	// Bootstraping your single page app

	var _require = __webpack_require__(304);

	var createHistory = _require.createHistory;
	var useBasename = _require.useBasename;

	var history = useBasename(createHistory)({
	  basename: document.baseURI.substring(window.location.origin.length, document.baseURI.length - 1)
	});
	__webpack_require__(16).render(React.createElement(ReactRouter.Router, {
	  history: history,
	  routes: __webpack_require__(446).routes
	}), document.getElementById('spa'));

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 44:
/***/ function(module, exports) {

	/**
	 * Indicates that navigation was caused by a call to history.push.
	 */
	'use strict';

	exports.__esModule = true;
	var PUSH = 'PUSH';

	exports.PUSH = PUSH;
	/**
	 * Indicates that navigation was caused by a call to history.replace.
	 */
	var REPLACE = 'REPLACE';

	exports.REPLACE = REPLACE;
	/**
	 * Indicates that navigation was caused by some other action such
	 * as using a browser's back/forward buttons and/or manually manipulating
	 * the URL in a browser's location bar. This is the default.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	 * for more information.
	 */
	var POP = 'POP';

	exports.POP = POP;
	exports['default'] = {
	  PUSH: PUSH,
	  REPLACE: REPLACE,
	  POP: POP
	};

/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(12);

	var _warning2 = _interopRequireDefault(_warning);

	function deprecate(fn, message) {
	  return function () {
	    _warning2['default'](false, '[history] ' + message);
	    return fn.apply(this, arguments);
	  };
	}

	exports['default'] = deprecate;
	module.exports = exports['default'];

/***/ },

/***/ 63:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.addEventListener = addEventListener;
	exports.removeEventListener = removeEventListener;
	exports.getHashPath = getHashPath;
	exports.replaceHashPath = replaceHashPath;
	exports.getWindowPath = getWindowPath;
	exports.go = go;
	exports.getUserConfirmation = getUserConfirmation;
	exports.supportsHistory = supportsHistory;
	exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

	function addEventListener(node, event, listener) {
	  if (node.addEventListener) {
	    node.addEventListener(event, listener, false);
	  } else {
	    node.attachEvent('on' + event, listener);
	  }
	}

	function removeEventListener(node, event, listener) {
	  if (node.removeEventListener) {
	    node.removeEventListener(event, listener, false);
	  } else {
	    node.detachEvent('on' + event, listener);
	  }
	}

	function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  return window.location.href.split('#')[1] || '';
	}

	function replaceHashPath(path) {
	  window.location.replace(window.location.pathname + window.location.search + '#' + path);
	}

	function getWindowPath() {
	  return window.location.pathname + window.location.search + window.location.hash;
	}

	function go(n) {
	  if (n) window.history.go(n);
	}

	function getUserConfirmation(message, callback) {
	  callback(window.confirm(message));
	}

	/**
	 * Returns true if the HTML5 history API is supported. Taken from modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
	 */

	function supportsHistory() {
	  var ua = navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	    return false;
	  }
	  return window.history && 'pushState' in window.history;
	}

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */

	function supportsGoWithoutReloadUsingHash() {
	  var ua = navigator.userAgent;
	  return ua.indexOf('Firefox') === -1;
	}

/***/ },

/***/ 64:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	exports.canUseDOM = canUseDOM;

/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(12);

	var _warning2 = _interopRequireDefault(_warning);

	function runTransitionHook(hook, location, callback) {
	  var result = hook(location, callback);

	  if (hook.length < 2) {
	    // Assume the hook runs synchronously and automatically
	    // call the callback with the return value.
	    callback(result);
	  } else {
	    _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead');
	  }
	}

	exports['default'] = runTransitionHook;
	module.exports = exports['default'];

/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

	      return React.createElement(
	        'pre',
	        { className: preClassName, 'data-bash-mode': this.props.bashMode },
	        React.createElement(
	          'code',
	          { ref: 'code', className: this.props.className },
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return Prism;
	})(React.Component);

	module.exports = Prism;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Prism.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 138:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"mainContainer":"style__mainContainer___2yKl8","github_icon":"style__github_icon___3FD9Z"};

/***/ },

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

	/*eslint-disable no-empty */
	'use strict';

	exports.__esModule = true;
	exports.saveState = saveState;
	exports.readState = readState;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(12);

	var _warning2 = _interopRequireDefault(_warning);

	var KeyPrefix = '@@History/';
	var QuotaExceededError = 'QuotaExceededError';

	function createKey(key) {
	  return KeyPrefix + key;
	}

	function saveState(key, state) {
	  try {
	    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	  } catch (error) {
	    if (error.name === QuotaExceededError || window.sessionStorage.length === 0) {
	      // Probably in Safari "private mode" where sessionStorage quota is 0. #42
	      _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode');

	      return;
	    }

	    throw error;
	  }
	}

	function readState(key) {
	  var json = window.sessionStorage.getItem(createKey(key));

	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {
	      // Ignore invalid JSON.
	    }
	  }

	  return null;
	}

/***/ },

/***/ 146:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(17);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(64);

	var _DOMUtils = __webpack_require__(63);

	var _createHistory = __webpack_require__(147);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function createDOMHistory(options) {
	  var history = _createHistory2['default'](_extends({
	    getUserConfirmation: _DOMUtils.getUserConfirmation
	  }, options, {
	    go: _DOMUtils.go
	  }));

	  function listen(listener) {
	    _invariant2['default'](_ExecutionEnvironment.canUseDOM, 'DOM history needs a DOM');

	    return history.listen(listener);
	  }

	  return _extends({}, history, {
	    listen: listen
	  });
	}

	exports['default'] = createDOMHistory;
	module.exports = exports['default'];

/***/ },

/***/ 147:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(12);

	var _warning2 = _interopRequireDefault(_warning);

	var _deepEqual = __webpack_require__(306);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _AsyncUtils = __webpack_require__(297);

	var _Actions = __webpack_require__(44);

	var _runTransitionHook = __webpack_require__(87);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _deprecate = __webpack_require__(51);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function createRandomKey(length) {
	  return Math.random().toString(36).substr(2, length);
	}

	function extractPath(string) {
	  var match = string.match(/^https?:\/\/[^\/]*/);

	  if (match == null) return string;

	  _warning2['default'](false, 'Location path must be pathname + query string only, not a fully qualified URL like "%s"', string);

	  return string.substring(match[0].length);
	}

	function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search &&
	  //a.action === b.action && // Different action !== location change.
	  a.key === b.key && _deepEqual2['default'](a.state, b.state);
	}

	var DefaultKeyLength = 6;

	function createHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var getCurrentLocation = options.getCurrentLocation;
	  var finishTransition = options.finishTransition;
	  var saveState = options.saveState;
	  var go = options.go;
	  var keyLength = options.keyLength;
	  var getUserConfirmation = options.getUserConfirmation;

	  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

	  var transitionHooks = [];

	  function listenBefore(hook) {
	    transitionHooks.push(hook);

	    return function () {
	      transitionHooks = transitionHooks.filter(function (item) {
	        return item !== hook;
	      });
	    };
	  }

	  var allKeys = [];
	  var changeListeners = [];
	  var location = undefined;

	  function getCurrent() {
	    if (pendingLocation && pendingLocation.action === _Actions.POP) {
	      return allKeys.indexOf(pendingLocation.key);
	    } else if (location) {
	      return allKeys.indexOf(location.key);
	    } else {
	      return -1;
	    }
	  }

	  function updateLocation(newLocation) {
	    var current = getCurrent();

	    location = newLocation;

	    if (location.action === _Actions.PUSH) {
	      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
	    } else if (location.action === _Actions.REPLACE) {
	      allKeys[current] = location.key;
	    }

	    changeListeners.forEach(function (listener) {
	      listener(location);
	    });
	  }

	  function listen(listener) {
	    changeListeners.push(listener);

	    if (location) {
	      listener(location);
	    } else {
	      var _location = getCurrentLocation();
	      allKeys = [_location.key];
	      updateLocation(_location);
	    }

	    return function () {
	      changeListeners = changeListeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }

	  function confirmTransitionTo(location, callback) {
	    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
	      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
	        if (result != null) {
	          done(result);
	        } else {
	          next();
	        }
	      });
	    }, function (message) {
	      if (getUserConfirmation && typeof message === 'string') {
	        getUserConfirmation(message, function (ok) {
	          callback(ok !== false);
	        });
	      } else {
	        callback(message !== false);
	      }
	    });
	  }

	  var pendingLocation = undefined;

	  function transitionTo(nextLocation) {
	    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

	    pendingLocation = nextLocation;

	    confirmTransitionTo(nextLocation, function (ok) {
	      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

	      if (ok) {
	        finishTransition(nextLocation);
	        updateLocation(nextLocation);
	      } else if (location && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(location.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);

	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
	      }
	    });
	  }

	  function pushState(state, path) {
	    transitionTo(createLocation(path, state, _Actions.PUSH, createKey()));
	  }

	  function replaceState(state, path) {
	    transitionTo(createLocation(path, state, _Actions.REPLACE, createKey()));
	  }

	  function goBack() {
	    go(-1);
	  }

	  function goForward() {
	    go(1);
	  }

	  function createKey() {
	    return createRandomKey(keyLength);
	  }

	  function createPath(path) {
	    return path;
	  }

	  function createHref(path) {
	    return path;
	  }

	  function createLocation() {
	    var path = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	    var state = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	    var action = arguments.length <= 2 || arguments[2] === undefined ? _Actions.POP : arguments[2];
	    var key = arguments.length <= 3 || arguments[3] === undefined ? createKey() : arguments[3];

	    var pathname = extractPath(path);
	    var search = '';
	    var hash = '';

	    var hashIndex = pathname.indexOf('#');
	    if (hashIndex !== -1) {
	      hash = pathname.substring(hashIndex);
	      pathname = pathname.substring(0, hashIndex);
	    }

	    var searchIndex = pathname.indexOf('?');
	    if (searchIndex !== -1) {
	      search = pathname.substring(searchIndex);
	      pathname = pathname.substring(0, searchIndex);
	    }

	    if (pathname === '') pathname = '/';

	    return {
	      pathname: pathname,
	      search: search,
	      hash: hash,
	      state: state,
	      action: action,
	      key: key
	    };
	  }

	  // deprecated
	  function setState(state) {
	    if (location) {
	      updateLocationState(location, state);
	      updateLocation(location);
	    } else {
	      updateLocationState(getCurrentLocation(), state);
	    }
	  }

	  function updateLocationState(location, state) {
	    location.state = _extends({}, location.state, state);
	    saveState(location.key, location.state);
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    transitionHooks = transitionHooks.filter(function (item) {
	      return item !== hook;
	    });
	  }

	  return {
	    listenBefore: listenBefore,
	    listen: listen,
	    transitionTo: transitionTo,
	    pushState: pushState,
	    replaceState: replaceState,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    createKey: createKey,
	    createPath: createPath,
	    createHref: createHref,
	    createLocation: createLocation,

	    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
	    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
	    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead')
	  };
	}

	exports['default'] = createHistory;
	module.exports = exports['default'];

/***/ },

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(12);

	var _warning2 = _interopRequireDefault(_warning);

	var _ExecutionEnvironment = __webpack_require__(64);

	var _DOMUtils = __webpack_require__(63);

	var _deprecate = __webpack_require__(51);

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
	          _warning2['default'](false, 'listenBeforeUnload only works in DOM environments');
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

/***/ },

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _qs = __webpack_require__(309);

	var _qs2 = _interopRequireDefault(_qs);

	var _runTransitionHook = __webpack_require__(87);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	function defaultStringifyQuery(query) {
	  return _qs2['default'].stringify(query, { arrayFormat: 'brackets' });
	}

	function defaultParseQueryString(queryString) {
	  return _qs2['default'].parse(queryString);
	}

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know how to handle URL queries.
	 */
	function useQueries(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var stringifyQuery = options.stringifyQuery;
	    var parseQueryString = options.parseQueryString;

	    var historyOptions = _objectWithoutProperties(options, ['stringifyQuery', 'parseQueryString']);

	    var history = createHistory(historyOptions);

	    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

	    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

	    function addQuery(location) {
	      if (location.query == null) location.query = parseQueryString(location.search.substring(1));

	      return location;
	    }

	    function appendQuery(pathname, query) {
	      var queryString = undefined;
	      if (query && (queryString = stringifyQuery(query)) !== '') return pathname + (pathname.indexOf('?') === -1 ? '?' : '&') + queryString;

	      return pathname;
	    }

	    // Override all read methods with query-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addQuery(location), callback);
	      });
	    }

	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addQuery(location));
	      });
	    }

	    // Override all write methods with query-aware versions.
	    function pushState(state, pathname, query) {
	      return history.pushState(state, appendQuery(pathname, query));
	    }

	    function replaceState(state, pathname, query) {
	      return history.replaceState(state, appendQuery(pathname, query));
	    }

	    function createPath(pathname, query) {
	      return history.createPath(appendQuery(pathname, query));
	    }

	    function createHref(pathname, query) {
	      return history.createHref(appendQuery(pathname, query));
	    }

	    function createLocation() {
	      return addQuery(history.createLocation.apply(history, arguments));
	    }

	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      pushState: pushState,
	      replaceState: replaceState,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation
	    });
	  };
	}

	exports['default'] = useQueries;
	module.exports = exports['default'];

/***/ },

/***/ 150:
/***/ function(module, exports) {

	// Load modules


	// Declare internals

	var internals = {};
	internals.hexTable = new Array(256);
	for (var h = 0; h < 256; ++h) {
	    internals.hexTable[h] = '%' + ((h < 16 ? '0' : '') + h.toString(16)).toUpperCase();
	}


	exports.arrayToObject = function (source, options) {

	    var obj = options.plainObjects ? Object.create(null) : {};
	    for (var i = 0, il = source.length; i < il; ++i) {
	        if (typeof source[i] !== 'undefined') {

	            obj[i] = source[i];
	        }
	    }

	    return obj;
	};


	exports.merge = function (target, source, options) {

	    if (!source) {
	        return target;
	    }

	    if (typeof source !== 'object') {
	        if (Array.isArray(target)) {
	            target.push(source);
	        }
	        else if (typeof target === 'object') {
	            target[source] = true;
	        }
	        else {
	            target = [target, source];
	        }

	        return target;
	    }

	    if (typeof target !== 'object') {
	        target = [target].concat(source);
	        return target;
	    }

	    if (Array.isArray(target) &&
	        !Array.isArray(source)) {

	        target = exports.arrayToObject(target, options);
	    }

	    var keys = Object.keys(source);
	    for (var k = 0, kl = keys.length; k < kl; ++k) {
	        var key = keys[k];
	        var value = source[key];

	        if (!Object.prototype.hasOwnProperty.call(target, key)) {
	            target[key] = value;
	        }
	        else {
	            target[key] = exports.merge(target[key], value, options);
	        }
	    }

	    return target;
	};


	exports.decode = function (str) {

	    try {
	        return decodeURIComponent(str.replace(/\+/g, ' '));
	    } catch (e) {
	        return str;
	    }
	};

	exports.encode = function (str) {

	    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
	    // It has been adapted here for stricter adherence to RFC 3986
	    if (str.length === 0) {
	        return str;
	    }

	    if (typeof str !== 'string') {
	        str = '' + str;
	    }

	    var out = '';
	    for (var i = 0, il = str.length; i < il; ++i) {
	        var c = str.charCodeAt(i);

	        if (c === 0x2D || // -
	            c === 0x2E || // .
	            c === 0x5F || // _
	            c === 0x7E || // ~
	            (c >= 0x30 && c <= 0x39) || // 0-9
	            (c >= 0x41 && c <= 0x5A) || // a-z
	            (c >= 0x61 && c <= 0x7A)) { // A-Z

	            out += str[i];
	            continue;
	        }

	        if (c < 0x80) {
	            out += internals.hexTable[c];
	            continue;
	        }

	        if (c < 0x800) {
	            out += internals.hexTable[0xC0 | (c >> 6)] + internals.hexTable[0x80 | (c & 0x3F)];
	            continue;
	        }

	        if (c < 0xD800 || c >= 0xE000) {
	            out += internals.hexTable[0xE0 | (c >> 12)] + internals.hexTable[0x80 | ((c >> 6) & 0x3F)] + internals.hexTable[0x80 | (c & 0x3F)];
	            continue;
	        }

	        ++i;
	        c = 0x10000 + (((c & 0x3FF) << 10) | (str.charCodeAt(i) & 0x3FF));
	        out += internals.hexTable[0xF0 | (c >> 18)] + internals.hexTable[0x80 | ((c >> 12) & 0x3F)] + internals.hexTable[0x80 | ((c >> 6) & 0x3F)] + internals.hexTable[0x80 | (c & 0x3F)];
	    }

	    return out;
	};

	exports.compact = function (obj, refs) {

	    if (typeof obj !== 'object' ||
	        obj === null) {

	        return obj;
	    }

	    refs = refs || [];
	    var lookup = refs.indexOf(obj);
	    if (lookup !== -1) {
	        return refs[lookup];
	    }

	    refs.push(obj);

	    if (Array.isArray(obj)) {
	        var compacted = [];

	        for (var i = 0, il = obj.length; i < il; ++i) {
	            if (typeof obj[i] !== 'undefined') {
	                compacted.push(obj[i]);
	            }
	        }

	        return compacted;
	    }

	    var keys = Object.keys(obj);
	    for (i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        obj[key] = exports.compact(obj[key], refs);
	    }

	    return obj;
	};


	exports.isRegExp = function (obj) {

	    return Object.prototype.toString.call(obj) === '[object RegExp]';
	};


	exports.isBuffer = function (obj) {

	    if (obj === null ||
	        typeof obj === 'undefined') {

	        return false;
	    }

	    return !!(obj.constructor &&
	              obj.constructor.isBuffer &&
	              obj.constructor.isBuffer(obj));
	};


/***/ },

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _ReactRouter = ReactRouter;
	var Link = _ReactRouter.Link;
	var History = _ReactRouter.History;

	module.exports = React.createClass({
	  displayName: 'exports',

	  mixins: [History],

	  render: function render() {
	    var isActive = this.history.isActive(this.props.to, this.props.query);

	    return React.createElement(
	      'li',
	      { className: isActive ? 'active' : '' },
	      React.createElement(Link, _extends({}, this.props, { activeClassName: 'active' }))
	    );
	  }

	});

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "LiLink.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	module.exports = {
	  url: 'https://raw.githubusercontent.com/goncalvesjoao/react-to-commonjs/master/readme/starwars/'
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "config.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 282:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"avatar":"style__avatar___2DvjO"};

/***/ },

/***/ 297:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;

	function loopAsync(turns, work, callback) {
	  var currentTurn = 0;
	  var isDone = false;

	  function done() {
	    isDone = true;
	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) return;

	    if (currentTurn < turns) {
	      work.call(this, currentTurn++, next, done);
	    } else {
	      done.apply(this, arguments);
	    }
	  }

	  next();
	}

/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(17);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(44);

	var _ExecutionEnvironment = __webpack_require__(64);

	var _DOMUtils = __webpack_require__(63);

	var _DOMStateStorage = __webpack_require__(145);

	var _createDOMHistory = __webpack_require__(146);

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
	function createBrowserHistory(options) {
	  _invariant2['default'](_ExecutionEnvironment.canUseDOM, 'Browser history needs a DOM');

	  var isSupported = _DOMUtils.supportsHistory();

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
	      if (isSupported) {
	        window.history.pushState(historyState, null, path);
	      } else {
	        // Use a full-page reload to preserve the URL.
	        window.location.href = path;
	      }
	    } else {
	      // REPLACE
	      if (isSupported) {
	        window.history.replaceState(historyState, null, path);
	      } else {
	        // Use a full-page reload to preserve the URL.
	        window.location.replace(path);
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

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(12);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(17);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(44);

	var _ExecutionEnvironment = __webpack_require__(64);

	var _DOMUtils = __webpack_require__(63);

	var _DOMStateStorage = __webpack_require__(145);

	var _createDOMHistory = __webpack_require__(146);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	function isAbsolutePath(path) {
	  return typeof path === 'string' && path.charAt(0) === '/';
	}

	function ensureSlash() {
	  var path = _DOMUtils.getHashPath();

	  if (isAbsolutePath(path)) return true;

	  _DOMUtils.replaceHashPath('/' + path);

	  return false;
	}

	function addQueryStringValueToPath(path, key, value) {
	  return path + (path.indexOf('?') === -1 ? '?' : '&') + (key + '=' + value);
	}

	function stripQueryStringValueFromPath(path, key) {
	  return path.replace(new RegExp('[?&]?' + key + '=[a-zA-Z0-9]+'), '');
	}

	function getQueryStringValueFromPath(path, key) {
	  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
	  return match && match[1];
	}

	var DefaultQueryKey = '_k';

	function createHashHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  _invariant2['default'](_ExecutionEnvironment.canUseDOM, 'Hash history needs a DOM');

	  var queryKey = options.queryKey;

	  if (queryKey === undefined || !!queryKey) queryKey = typeof queryKey === 'string' ? queryKey : DefaultQueryKey;

	  function getCurrentLocation() {
	    var path = _DOMUtils.getHashPath();

	    var key = undefined,
	        state = undefined;
	    if (queryKey) {
	      key = getQueryStringValueFromPath(path, queryKey);
	      path = stripQueryStringValueFromPath(path, queryKey);

	      if (key) {
	        state = _DOMStateStorage.readState(key);
	      } else {
	        state = null;
	        key = history.createKey();
	        _DOMUtils.replaceHashPath(addQueryStringValueToPath(path, queryKey, key));
	      }
	    } else {
	      key = state = null;
	    }

	    return history.createLocation(path, state, undefined, key);
	  }

	  function startHashChangeListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function hashChangeListener() {
	      if (!ensureSlash()) return; // Always make sure hashes are preceeded with a /.

	      transitionTo(getCurrentLocation());
	    }

	    ensureSlash();
	    _DOMUtils.addEventListener(window, 'hashchange', hashChangeListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'hashchange', hashChangeListener);
	    };
	  }

	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    var path = (basename || '') + pathname + search;

	    if (queryKey) path = addQueryStringValueToPath(path, queryKey, key);

	    if (path === _DOMUtils.getHashPath()) {
	      _warning2['default'](false, 'You cannot %s the same path using hash history', action);
	    } else {
	      if (queryKey) {
	        _DOMStateStorage.saveState(key, state);
	      } else {
	        // Drop key and state.
	        location.key = location.state = null;
	      }

	      if (action === _Actions.PUSH) {
	        window.location.hash = path;
	      } else {
	        // REPLACE
	        _DOMUtils.replaceHashPath(path);
	      }
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopHashChangeListener = undefined;

	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    var unlisten = history.listenBefore(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }

	  function listen(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }

	  function pushState(state, path) {
	    _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped');

	    history.pushState(state, path);
	  }

	  function replaceState(state, path) {
	    _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped');

	    history.replaceState(state, path);
	  }

	  var goIsSupportedWithoutReload = _DOMUtils.supportsGoWithoutReloadUsingHash();

	  function go(n) {
	    _warning2['default'](goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

	    history.go(n);
	  }

	  function createHref(path) {
	    return '#' + history.createHref(path);
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    history.registerTransitionHook(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);

	    if (--listenerCount === 0) stopHashChangeListener();
	  }

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    pushState: pushState,
	    replaceState: replaceState,
	    go: go,
	    createHref: createHref,
	    registerTransitionHook: registerTransitionHook,
	    unregisterTransitionHook: unregisterTransitionHook
	  });
	}

	exports['default'] = createHashHistory;
	module.exports = exports['default'];

/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(12);

	var _warning2 = _interopRequireDefault(_warning);

	var _deprecate = __webpack_require__(51);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var _Actions = __webpack_require__(44);

	function extractPath(string) {
	  var match = string.match(/https?:\/\/[^\/]*/);

	  if (match == null) return string;

	  _warning2['default'](false, 'Location path must be pathname + query string only, not a fully qualified URL like "%s"', string);

	  return string.substring(match[0].length);
	}

	function createLocation() {
	  var path = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var state = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	  var action = arguments.length <= 2 || arguments[2] === undefined ? _Actions.POP : arguments[2];
	  var key = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

	  path = extractPath(path);

	  var pathname = path;
	  var search = '';
	  var hash = '';

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }

	  if (pathname === '') pathname = '/';

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	}

	exports['default'] = _deprecate2['default'](createLocation, 'Calling createLocation statically is deprecated; instead call the history.createLocation method - see docs/Location.md');
	module.exports = exports['default'];

/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(17);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(44);

	var _createHistory = __webpack_require__(147);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function createStateStorage(entries) {
	  return entries.filter(function (entry) {
	    return entry.state;
	  }).reduce(function (memo, entry) {
	    memo[entry.key] = entry.state;
	    return memo;
	  }, {});
	}

	function createMemoryHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  if (Array.isArray(options)) {
	    options = { entries: options };
	  } else if (typeof options === 'string') {
	    options = { entries: [options] };
	  }

	  var history = _createHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: saveState,
	    go: go
	  }));

	  var _options = options;
	  var entries = _options.entries;
	  var current = _options.current;

	  if (typeof entries === 'string') {
	    entries = [entries];
	  } else if (!Array.isArray(entries)) {
	    entries = ['/'];
	  }

	  entries = entries.map(function (entry) {
	    var key = history.createKey();

	    if (typeof entry === 'string') return { pathname: entry, key: key };

	    if (typeof entry === 'object' && entry) return _extends({}, entry, { key: key });

	    _invariant2['default'](false, 'Unable to create history entry from %s', entry);
	  });

	  if (current == null) {
	    current = entries.length - 1;
	  } else {
	    _invariant2['default'](current >= 0 && current < entries.length, 'Current index must be >= 0 and < %s, was %s', entries.length, current);
	  }

	  var storage = createStateStorage(entries);

	  function saveState(key, state) {
	    storage[key] = state;
	  }

	  function readState(key) {
	    return storage[key];
	  }

	  function getCurrentLocation() {
	    var entry = entries[current];
	    var key = entry.key;
	    var basename = entry.basename;
	    var pathname = entry.pathname;
	    var search = entry.search;

	    var path = (basename || '') + pathname + (search || '');

	    var state = undefined;
	    if (key) {
	      state = readState(key);
	    } else {
	      state = null;
	      key = history.createKey();
	      entry.key = key;
	    }

	    return history.createLocation(path, state, undefined, key);
	  }

	  function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  }

	  function go(n) {
	    if (n) {
	      _invariant2['default'](canGo(n), 'Cannot go(%s) there is not enough history', n);

	      current += n;

	      var currentLocation = getCurrentLocation();

	      // change action to POP
	      history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
	    }
	  }

	  function finishTransition(location) {
	    switch (location.action) {
	      case _Actions.PUSH:
	        current += 1;

	        // if we are not on the top of stack
	        // remove rest and push new
	        if (current < entries.length) entries.splice(current);

	        entries.push(location);
	        saveState(location.key, location.state);
	        break;
	      case _Actions.REPLACE:
	        entries[current] = location;
	        saveState(location.key, location.state);
	        break;
	    }
	  }

	  return history;
	}

	exports['default'] = createMemoryHistory;
	module.exports = exports['default'];

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deprecate = __webpack_require__(51);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var _useBeforeUnload = __webpack_require__(148);

	var _useBeforeUnload2 = _interopRequireDefault(_useBeforeUnload);

	exports['default'] = _deprecate2['default'](_useBeforeUnload2['default'], 'enableBeforeUnload is deprecated, use useBeforeUnload instead');
	module.exports = exports['default'];

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deprecate = __webpack_require__(51);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var _useQueries = __webpack_require__(149);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	exports['default'] = _deprecate2['default'](_useQueries2['default'], 'enableQueries is deprecated, use useQueries instead');
	module.exports = exports['default'];

/***/ },

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createBrowserHistory = __webpack_require__(298);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	exports.createHistory = _createBrowserHistory2['default'];

	var _createHashHistory2 = __webpack_require__(299);

	var _createHashHistory3 = _interopRequireDefault(_createHashHistory2);

	exports.createHashHistory = _createHashHistory3['default'];

	var _createMemoryHistory2 = __webpack_require__(301);

	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

	exports.createMemoryHistory = _createMemoryHistory3['default'];

	var _useBasename2 = __webpack_require__(305);

	var _useBasename3 = _interopRequireDefault(_useBasename2);

	exports.useBasename = _useBasename3['default'];

	var _useBeforeUnload2 = __webpack_require__(148);

	var _useBeforeUnload3 = _interopRequireDefault(_useBeforeUnload2);

	exports.useBeforeUnload = _useBeforeUnload3['default'];

	var _useQueries2 = __webpack_require__(149);

	var _useQueries3 = _interopRequireDefault(_useQueries2);

	exports.useQueries = _useQueries3['default'];

	var _Actions2 = __webpack_require__(44);

	var _Actions3 = _interopRequireDefault(_Actions2);

	exports.Actions = _Actions3['default'];

	// deprecated

	var _createLocation2 = __webpack_require__(300);

	var _createLocation3 = _interopRequireDefault(_createLocation2);

	exports.createLocation = _createLocation3['default'];

	var _enableBeforeUnload2 = __webpack_require__(302);

	var _enableBeforeUnload3 = _interopRequireDefault(_enableBeforeUnload2);

	exports.enableBeforeUnload = _enableBeforeUnload3['default'];

	var _enableQueries2 = __webpack_require__(303);

	var _enableQueries3 = _interopRequireDefault(_enableQueries2);

	exports.enableQueries = _enableQueries3['default'];

/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _runTransitionHook = __webpack_require__(87);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	function useBasename(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var basename = options.basename;

	    var historyOptions = _objectWithoutProperties(options, ['basename']);

	    var history = createHistory(historyOptions);

	    function addBasename(location) {
	      if (basename && location.basename == null) {
	        if (location.pathname.indexOf(basename) === 0) {
	          location.pathname = location.pathname.substring(basename.length);
	          location.basename = basename;

	          if (location.pathname === '') location.pathname = '/';
	        } else {
	          location.basename = '';
	        }
	      }

	      return location;
	    }

	    function prependBasename(path) {
	      return basename ? basename + path : path;
	    }

	    // Override all read methods with basename-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addBasename(location), callback);
	      });
	    }

	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addBasename(location));
	      });
	    }

	    // Override all write methods with basename-aware versions.
	    function pushState(state, path) {
	      history.pushState(state, prependBasename(path));
	    }

	    function replaceState(state, path) {
	      history.replaceState(state, prependBasename(path));
	    }

	    function createPath(path) {
	      return history.createPath(prependBasename(path));
	    }

	    function createHref(path) {
	      return history.createHref(prependBasename(path));
	    }

	    function createLocation() {
	      return addBasename(history.createLocation.apply(history, arguments));
	    }

	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      pushState: pushState,
	      replaceState: replaceState,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation
	    });
	  };
	}

	exports['default'] = useBasename;
	module.exports = exports['default'];

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(308);
	var isArguments = __webpack_require__(307);

	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;

	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();

	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;

	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}

	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}

	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}

	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ },

/***/ 307:
/***/ function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';

	exports = module.exports = supportsArgumentsClass ? supported : unsupported;

	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};

	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ },

/***/ 308:
/***/ function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;

	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Stringify = __webpack_require__(311);
	var Parse = __webpack_require__(310);


	// Declare internals

	var internals = {};


	module.exports = {
	    stringify: Stringify,
	    parse: Parse
	};


/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Utils = __webpack_require__(150);


	// Declare internals

	var internals = {
	    delimiter: '&',
	    depth: 5,
	    arrayLimit: 20,
	    parameterLimit: 1000,
	    strictNullHandling: false,
	    plainObjects: false,
	    allowPrototypes: false
	};


	internals.parseValues = function (str, options) {

	    var obj = {};
	    var parts = str.split(options.delimiter, options.parameterLimit === Infinity ? undefined : options.parameterLimit);

	    for (var i = 0, il = parts.length; i < il; ++i) {
	        var part = parts[i];
	        var pos = part.indexOf(']=') === -1 ? part.indexOf('=') : part.indexOf(']=') + 1;

	        if (pos === -1) {
	            obj[Utils.decode(part)] = '';

	            if (options.strictNullHandling) {
	                obj[Utils.decode(part)] = null;
	            }
	        }
	        else {
	            var key = Utils.decode(part.slice(0, pos));
	            var val = Utils.decode(part.slice(pos + 1));

	            if (!Object.prototype.hasOwnProperty.call(obj, key)) {
	                obj[key] = val;
	            }
	            else {
	                obj[key] = [].concat(obj[key]).concat(val);
	            }
	        }
	    }

	    return obj;
	};


	internals.parseObject = function (chain, val, options) {

	    if (!chain.length) {
	        return val;
	    }

	    var root = chain.shift();

	    var obj;
	    if (root === '[]') {
	        obj = [];
	        obj = obj.concat(internals.parseObject(chain, val, options));
	    }
	    else {
	        obj = options.plainObjects ? Object.create(null) : {};
	        var cleanRoot = root[0] === '[' && root[root.length - 1] === ']' ? root.slice(1, root.length - 1) : root;
	        var index = parseInt(cleanRoot, 10);
	        var indexString = '' + index;
	        if (!isNaN(index) &&
	            root !== cleanRoot &&
	            indexString === cleanRoot &&
	            index >= 0 &&
	            (options.parseArrays &&
	             index <= options.arrayLimit)) {

	            obj = [];
	            obj[index] = internals.parseObject(chain, val, options);
	        }
	        else {
	            obj[cleanRoot] = internals.parseObject(chain, val, options);
	        }
	    }

	    return obj;
	};


	internals.parseKeys = function (key, val, options) {

	    if (!key) {
	        return;
	    }

	    // Transform dot notation to bracket notation

	    if (options.allowDots) {
	        key = key.replace(/\.([^\.\[]+)/g, '[$1]');
	    }

	    // The regex chunks

	    var parent = /^([^\[\]]*)/;
	    var child = /(\[[^\[\]]*\])/g;

	    // Get the parent

	    var segment = parent.exec(key);

	    // Stash the parent if it exists

	    var keys = [];
	    if (segment[1]) {
	        // If we aren't using plain objects, optionally prefix keys
	        // that would overwrite object prototype properties
	        if (!options.plainObjects &&
	            Object.prototype.hasOwnProperty(segment[1])) {

	            if (!options.allowPrototypes) {
	                return;
	            }
	        }

	        keys.push(segment[1]);
	    }

	    // Loop through children appending to the array until we hit depth

	    var i = 0;
	    while ((segment = child.exec(key)) !== null && i < options.depth) {

	        ++i;
	        if (!options.plainObjects &&
	            Object.prototype.hasOwnProperty(segment[1].replace(/\[|\]/g, ''))) {

	            if (!options.allowPrototypes) {
	                continue;
	            }
	        }
	        keys.push(segment[1]);
	    }

	    // If there's a remainder, just add whatever is left

	    if (segment) {
	        keys.push('[' + key.slice(segment.index) + ']');
	    }

	    return internals.parseObject(keys, val, options);
	};


	module.exports = function (str, options) {

	    options = options || {};
	    options.delimiter = typeof options.delimiter === 'string' || Utils.isRegExp(options.delimiter) ? options.delimiter : internals.delimiter;
	    options.depth = typeof options.depth === 'number' ? options.depth : internals.depth;
	    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : internals.arrayLimit;
	    options.parseArrays = options.parseArrays !== false;
	    options.allowDots = options.allowDots !== false;
	    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : internals.plainObjects;
	    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : internals.allowPrototypes;
	    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : internals.parameterLimit;
	    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : internals.strictNullHandling;

	    if (str === '' ||
	        str === null ||
	        typeof str === 'undefined') {

	        return options.plainObjects ? Object.create(null) : {};
	    }

	    var tempObj = typeof str === 'string' ? internals.parseValues(str, options) : str;
	    var obj = options.plainObjects ? Object.create(null) : {};

	    // Iterate over the keys and setup the new object

	    var keys = Object.keys(tempObj);
	    for (var i = 0, il = keys.length; i < il; ++i) {
	        var key = keys[i];
	        var newObj = internals.parseKeys(key, tempObj[key], options);
	        obj = Utils.merge(obj, newObj, options);
	    }

	    return Utils.compact(obj);
	};


/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	// Load modules

	var Utils = __webpack_require__(150);


	// Declare internals

	var internals = {
	    delimiter: '&',
	    arrayPrefixGenerators: {
	        brackets: function (prefix, key) {

	            return prefix + '[]';
	        },
	        indices: function (prefix, key) {

	            return prefix + '[' + key + ']';
	        },
	        repeat: function (prefix, key) {

	            return prefix;
	        }
	    },
	    strictNullHandling: false
	};


	internals.stringify = function (obj, prefix, generateArrayPrefix, strictNullHandling, filter) {

	    if (typeof filter === 'function') {
	        obj = filter(prefix, obj);
	    }
	    else if (Utils.isBuffer(obj)) {
	        obj = obj.toString();
	    }
	    else if (obj instanceof Date) {
	        obj = obj.toISOString();
	    }
	    else if (obj === null) {
	        if (strictNullHandling) {
	            return Utils.encode(prefix);
	        }

	        obj = '';
	    }

	    if (typeof obj === 'string' ||
	        typeof obj === 'number' ||
	        typeof obj === 'boolean') {

	        return [Utils.encode(prefix) + '=' + Utils.encode(obj)];
	    }

	    var values = [];

	    if (typeof obj === 'undefined') {
	        return values;
	    }

	    var objKeys = Array.isArray(filter) ? filter : Object.keys(obj);
	    for (var i = 0, il = objKeys.length; i < il; ++i) {
	        var key = objKeys[i];

	        if (Array.isArray(obj)) {
	            values = values.concat(internals.stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix, strictNullHandling, filter));
	        }
	        else {
	            values = values.concat(internals.stringify(obj[key], prefix + '[' + key + ']', generateArrayPrefix, strictNullHandling, filter));
	        }
	    }

	    return values;
	};


	module.exports = function (obj, options) {

	    options = options || {};
	    var delimiter = typeof options.delimiter === 'undefined' ? internals.delimiter : options.delimiter;
	    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : internals.strictNullHandling;
	    var objKeys;
	    var filter;
	    if (typeof options.filter === 'function') {
	        filter = options.filter;
	        obj = filter('', obj);
	    }
	    else if (Array.isArray(options.filter)) {
	        objKeys = filter = options.filter;
	    }

	    var keys = [];

	    if (typeof obj !== 'object' ||
	        obj === null) {

	        return '';
	    }

	    var arrayFormat;
	    if (options.arrayFormat in internals.arrayPrefixGenerators) {
	        arrayFormat = options.arrayFormat;
	    }
	    else if ('indices' in options) {
	        arrayFormat = options.indices ? 'indices' : 'repeat';
	    }
	    else {
	        arrayFormat = 'indices';
	    }

	    var generateArrayPrefix = internals.arrayPrefixGenerators[arrayFormat];

	    if (!objKeys) {
	        objKeys = Object.keys(obj);
	    }
	    for (var i = 0, il = objKeys.length; i < il; ++i) {
	        var key = objKeys[i];
	        keys = keys.concat(internals.stringify(obj[key], key, generateArrayPrefix, strictNullHandling, filter));
	    }

	    return keys.join(delimiter);
	};


/***/ },

/***/ 438:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Droids = Stardoroido.components.Droids;

	var _require = __webpack_require__(69);

	var Label = _require.Label;

	var Prism = __webpack_require__(104);

	var DroidsExample = (function (_React$Component) {
	  _inherits(DroidsExample, _React$Component);

	  function DroidsExample() {
	    _classCallCheck(this, DroidsExample);

	    _get(Object.getPrototypeOf(DroidsExample.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(DroidsExample, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          Prism,
	          { className: 'language-jsx' },
	          'const Stardoroido = require(\'stardoroido\');\nconst { Droids } = Stardoroido.components;'
	        ),
	        React.createElement(
	          'p',
	          null,
	          ' '
	        ),
	        React.createElement(
	          'p',
	          { className: 'lead' },
	          'Examples:'
	        ),
	        React.createElement(
	          'div',
	          { className: 'panel panel-default' },
	          React.createElement(
	            'div',
	            { className: 'panel-heading' },
	            React.createElement(
	              'h3',
	              { className: 'panel-title' },
	              'Default mode'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'panel-body' },
	            React.createElement(Droids, null)
	          ),
	          React.createElement(
	            'div',
	            { className: 'panel-footer' },
	            React.createElement(
	              Label,
	              { bsSize: 'small' },
	              'Code:'
	            ),
	            React.createElement(
	              Prism,
	              { className: 'language-jsx' },
	              '<Droids />'
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'panel panel-default' },
	          React.createElement(
	            'div',
	            { className: 'panel-heading' },
	            React.createElement(
	              'h3',
	              { className: 'panel-title' },
	              'Disable display name'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'panel-body' },
	            React.createElement(Droids, { name: false })
	          ),
	          React.createElement(
	            'div',
	            { className: 'panel-footer' },
	            React.createElement(
	              Label,
	              { bsSize: 'small' },
	              'Code:'
	            ),
	            React.createElement(
	              Prism,
	              { className: 'language-jsx' },
	              '<Droids name={ false } />'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return DroidsExample;
	})(React.Component);

	module.exports = DroidsExample;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "DroidsExample.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 439:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _require = __webpack_require__(69);

	var Label = _require.Label;

	var Prism = __webpack_require__(104);

	var configExample = (function (_React$Component) {
	  _inherits(configExample, _React$Component);

	  function configExample() {
	    _classCallCheck(this, configExample);

	    _get(Object.getPrototypeOf(configExample.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(configExample, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          Prism,
	          { className: 'language-jsx' },
	          'const Stardoroido = require(\'stardoroido\');\nconst { config } = Stardoroido;'
	        ),
	        React.createElement(
	          'p',
	          null,
	          ' '
	        ),
	        React.createElement(
	          'p',
	          { className: 'lead' },
	          'Examples:'
	        ),
	        React.createElement(
	          'div',
	          { className: 'panel panel-default' },
	          React.createElement(
	            'div',
	            { className: 'panel-heading' },
	            React.createElement(
	              'h3',
	              { className: 'panel-title' },
	              'Change Droids API endpoint'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'panel-body' },
	            React.createElement(
	              'p',
	              null,
	              'Everytime ',
	              React.createElement(
	                'b',
	                null,
	                'Stardoroido.components.Droids#componentWillMount'
	              ),
	              ' executes it will make a remote request to ',
	              React.createElement(
	                'b',
	                null,
	                'http://starwars.fake.api.com/droids.json'
	              ),
	              ', to fetch the droids\' list.'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'panel-footer' },
	            React.createElement(
	              Label,
	              { bsSize: 'small' },
	              'Code:'
	            ),
	            React.createElement(
	              Prism,
	              { className: 'language-jsx' },
	              'config.url = \'http://starwars.fake.api.com/\';'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return configExample;
	})(React.Component);

	module.exports = configExample;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "configExample.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 440:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	var LiLink = __webpack_require__(203);
	var _ReactRouter = ReactRouter;
	var Link = _ReactRouter.Link;
	var History = _ReactRouter.History;

	var ApiDocs = React.createClass({
	  displayName: "ApiDocs",

	  mixins: [History],

	  render: function render() {
	    return React.createElement(
	      "div",
	      { id: "top" },
	      React.createElement(
	        "p",
	        null,
	        " "
	      ),
	      React.createElement(
	        "div",
	        { className: "container" },
	        React.createElement(
	          "div",
	          { className: "row" },
	          React.createElement(
	            "div",
	            { className: "col-xs-3 ascii" },
	            this.renderSidebar()
	          ),
	          React.createElement(
	            "div",
	            { className: "col-md-9" },
	            this.props.children || this.renderHome()
	          )
	        )
	      )
	    );
	  },

	  renderHome: function renderHome() {
	    return React.createElement(
	      "div",
	      { className: "jumbotron" },
	      React.createElement(
	        "h1",
	        null,
	        "Stardoroido API"
	      ),
	      React.createElement(
	        "h2",
	        { className: "lead" },
	        "This API documentation example page, ilustrates how you can take advantage of this Single Page App created for you to test your React Component and actually use it to document your work and publish it on the Web."
	      )
	    );
	  },

	  renderSidebar: function renderSidebar() {
	    return React.createElement(
	      "ul",
	      { className: "ascii fixed" },
	      React.createElement(
	        "li",
	        null,
	        React.createElement(
	          "span",
	          null,
	          "Stardoroido"
	        ),
	        React.createElement(
	          "ul",
	          null,
	          React.createElement(
	            LiLink,
	            { to: "/api_docs/config" },
	            "config"
	          ),
	          React.createElement(
	            "li",
	            { className: this.history.isActive('/api_docs/components') ? 'active' : '' },
	            React.createElement(
	              "span",
	              null,
	              "components"
	            ),
	            React.createElement(
	              "ul",
	              null,
	              React.createElement(
	                LiLink,
	                { to: "/api_docs/components/droids" },
	                "Droids"
	              )
	            )
	          )
	        )
	      )
	    );
	  }

	});

	module.exports = ApiDocs;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 441:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _Stardoroido = Stardoroido;
	var config = _Stardoroido.config;

	var _require = __webpack_require__(69);

	var Panel = _require.Panel;

	var Prism = __webpack_require__(104);

	var Home = (function (_React$Component) {
	  _inherits(Home, _React$Component);

	  function Home() {
	    _classCallCheck(this, Home);

	    _get(Object.getPrototypeOf(Home.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Home, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        null,
	        React.createElement(
	          'div',
	          { className: 'jumbotron' },
	          React.createElement(
	            'div',
	            { className: 'container' },
	            React.createElement(
	              'div',
	              { className: 'row' },
	              React.createElement(
	                'div',
	                { className: 'col-md-7 text-center' },
	                React.createElement(
	                  'h1',
	                  null,
	                  config.name
	                ),
	                React.createElement(
	                  'p',
	                  { className: 'lead' },
	                  config.description
	                )
	              ),
	              React.createElement(
	                'div',
	                { className: 'col-md-5 jumbotron-side text-center' },
	                React.createElement(
	                  'p',
	                  null,
	                  ' '
	                ),
	                React.createElement(
	                  'p',
	                  null,
	                  this.repositoryLink()
	                ),
	                React.createElement(
	                  'p',
	                  null,
	                  React.createElement(
	                    'strong',
	                    null,
	                    'Version'
	                  ),
	                  ' ',
	                  config.version
	                )
	              )
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'container' },
	          React.createElement(
	            'h2',
	            null,
	            'Getting started:'
	          ),
	          React.createElement(
	            Prism,
	            { className: 'language-ruby', noShadow: true, bashMode: true },
	            'npm install ',
	            config.name,
	            ' --save'
	          ),
	          React.createElement(
	            'p',
	            null,
	            'or'
	          ),
	          React.createElement(
	            Prism,
	            { className: 'language-ruby', noShadow: true, bashMode: true },
	            'npm install git+https://git@github.com:',
	            config.author || '<package.json:author>',
	            '/',
	            config.name || '<package.json:name>',
	            '.git#master --save'
	          )
	        )
	      );
	    }
	  }, {
	    key: 'repositoryLink',
	    value: function repositoryLink() {
	      var props = { href: '' };

	      if (config.repository) {
	        props.href = config.repository.url;
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

	      return React.createElement(
	        'a',
	        _extends({}, props, { className: 'btn btn-success btn-lg' }),
	        React.createElement('i', { className: 'glyphicon glyphicon-download-alt' }),
	        ' Download'
	      );
	    }
	  }]);

	  return Home;
	})(React.Component);

	module.exports = Home;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Home.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 442:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	var _Stardoroido = Stardoroido;
	var config = _Stardoroido.config;

	var author = '<package.json:author>';

	if (config.author) {
	  author = config.author;
	}

	var Footer = function Footer() {
	  return React.createElement(
	    "footer",
	    { className: "container" },
	    React.createElement(
	      "center",
	      null,
	      "All copyrights reserved © ",
	      React.createElement(
	        "b",
	        null,
	        author
	      ),
	      " ",
	      new Date().getFullYear()
	    ),
	    React.createElement(
	      "p",
	      null,
	      " "
	    )
	  );
	};

	module.exports = Footer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Footer.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 443:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LiLink = __webpack_require__(203);
	var _Stardoroido = Stardoroido;
	var config = _Stardoroido.config;

	var CSSModules = __webpack_require__(71);

	var Header = (function (_React$Component) {
	  _inherits(Header, _React$Component);

	  function Header() {
	    _classCallCheck(this, Header);

	    _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'nav',
	        { className: 'navbar navbar-inverse navbar-fixed-top' },
	        React.createElement(
	          'div',
	          { className: 'container' },
	          React.createElement(
	            'div',
	            { className: 'navbar-header' },
	            React.createElement(
	              'button',
	              { className: 'navbar-toggle collapsed', type: 'button', 'data-toggle': 'collapse', 'data-target': '.select2-navbar-collapse' },
	              React.createElement(
	                'span',
	                { className: 'sr-only' },
	                'Toggle navigation'
	              ),
	              React.createElement('span', { className: 'icon-bar' }),
	              React.createElement('span', { className: 'icon-bar' }),
	              React.createElement('span', { className: 'icon-bar' })
	            ),
	            React.createElement(
	              'a',
	              { href: '', className: 'navbar-brand' },
	              'Stardoroido'
	            )
	          ),
	          React.createElement(
	            'nav',
	            { className: 'collapse navbar-collapse select2-navbar-collapse', role: 'navigation' },
	            React.createElement(
	              'ul',
	              { className: 'nav navbar-nav' },
	              React.createElement(
	                LiLink,
	                { to: '/' },
	                'Home'
	              ),
	              React.createElement(
	                LiLink,
	                { to: '/api_docs' },
	                'API DOCS'
	              )
	            ),
	            React.createElement(
	              'ul',
	              { className: 'nav navbar-nav navbar-right' },
	              React.createElement(
	                'li',
	                null,
	                this.repositoryLink()
	              )
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'repositoryLink',
	    value: function repositoryLink() {
	      var props = { href: '' };

	      if (config.repository) {
	        props.href = config.repository.url;
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

	      return React.createElement(
	        'a',
	        props,
	        React.createElement('img', { styleName: 'github_icon', src: 'imgs/github.png' }),
	        ' GitHub'
	      );
	    }
	  }]);

	  return Header;
	})(React.Component);

	module.exports = CSSModules(Header, __webpack_require__(138));

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 444:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var Header = __webpack_require__(443);
	var Footer = __webpack_require__(442);
	var CSSModules = __webpack_require__(71);

	var App = function App(_ref) {
	  var children = _ref.children;
	  return React.createElement(
	    'div',
	    null,
	    React.createElement(Header, null),
	    React.createElement(
	      'div',
	      { styleName: 'mainContainer' },
	      children
	    ),
	    React.createElement(Footer, null)
	  );
	};

	module.exports = CSSModules(App, __webpack_require__(138));

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 445:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

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

	module.exports = NotFound;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "NotFound.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 446:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	module.exports = {
	  routes: __webpack_require__(447)
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var routes = {
	  component: __webpack_require__(444),
	  childRoutes: [{
	    path: '/',
	    component: __webpack_require__(441)
	  }, {
	    path: 'api_docs',
	    component: __webpack_require__(440),
	    childRoutes: [{
	      path: 'config',
	      component: __webpack_require__(439)
	    }, {
	      path: 'components',
	      childRoutes: [{
	        path: 'droids',
	        component: __webpack_require__(438)
	      }]
	    }]
	  }, {
	    path: '*',
	    component: __webpack_require__(445)
	  }]
	};

	module.exports = routes;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "routes.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CSSModules = __webpack_require__(71);
	var defaultProps = {
	  name: true
	};

	var Droid = (function (_React$Component) {
	  _inherits(Droid, _React$Component);

	  function Droid() {
	    _classCallCheck(this, Droid);

	    _get(Object.getPrototypeOf(Droid.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(Droid, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "li",
	        null,
	        React.createElement("img", {
	          ref: "avatar",
	          className: "img-circle",
	          styleName: "avatar",
	          src: this.props.droid.avatar
	        }),
	        React.createElement(
	          "span",
	          null,
	          this.renderName()
	        )
	      );
	    }
	  }, {
	    key: "renderName",
	    value: function renderName() {
	      if (!this.props.name) {
	        return null;
	      }

	      return React.createElement(
	        "p",
	        { className: "text-center" },
	        React.createElement(
	          "span",
	          { ref: "name", className: "label label-info" },
	          this.props.droid.name
	        )
	      );
	    }
	  }]);

	  return Droid;
	})(React.Component);

	Droid.defaultProps = defaultProps;

	module.exports = CSSModules(Droid, __webpack_require__(282));

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Droid.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 449:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var jQuery = __webpack_require__(88);
	var config = __webpack_require__(204);
	var Droid = __webpack_require__(448);

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

	      jQuery.ajax({
	        url: config.url + 'droids.json',
	        dataType: 'json',
	        success: function success(data) {
	          _this.setState({ droids: data });
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'ul',
	        { className: 'list-inline' },
	        this.renderDroids()
	      );
	    }
	  }, {
	    key: 'renderDroids',
	    value: function renderDroids() {
	      var _this2 = this;

	      if (!this.state.droids.length) {
	        return React.createElement(
	          'li',
	          null,
	          React.createElement(
	            'h2',
	            null,
	            'These are not the droids you are looking for'
	          )
	        );
	      }

	      return this.state.droids.map(function (droid, index) {
	        return React.createElement(Droid, _extends({ key: index, ref: 'droid_' + droid.id, droid: droid }, _this2.props));
	      });
	    }
	  }]);

	  return Droids;
	})(React.Component);

	module.exports = Droids;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 450:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	module.exports = {
	  Droids: __webpack_require__(449)
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var jQuery = __webpack_require__(88);

	module.exports = {
	  config: __webpack_require__(204),

	  components: __webpack_require__(450)
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/goncalvesjoao/react-projects/stardoroido/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }

});