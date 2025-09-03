'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var reactDom = require('react-dom');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

var filterOptions = function (options, searchTerm, searchDescriptions) {
    if (searchDescriptions === void 0) { searchDescriptions = true; }
    var term = searchTerm.toLowerCase().trim();
    if (!term)
        return options;
    return options.filter(function (option) {
        return option.label.toLowerCase().includes(term) ||
            (searchDescriptions &&
                option.description &&
                option.description.toLowerCase().includes(term));
    });
};
var getSelectedOptions = function (options, value) {
    if (!value)
        return [];
    var values = Array.isArray(value) ? value : [value];
    return options.filter(function (option) { return values.includes(option.value); });
};
var calculatePosition = function (triggerElement, menuElement, offset) {
    var triggerRect = triggerElement.getBoundingClientRect();
    var viewportHeight = window.innerHeight;
    var viewportWidth = window.innerWidth;
    // Get menu dimensions, but use a stable fallback if not available
    var menuHeight = menuElement.offsetHeight || 200; // fallback height
    var menuWidth = Math.max(triggerRect.width, 200); // minimum width
    var spaceBelow = viewportHeight - triggerRect.bottom - offset;
    var spaceAbove = triggerRect.top - offset;
    // Determine if dropdown should open upward or downward
    var openUpward = spaceBelow < menuHeight && spaceAbove > spaceBelow;
    var top = openUpward
        ? triggerRect.top - menuHeight - offset
        : triggerRect.bottom + offset;
    var left = triggerRect.left;
    // Adjust horizontal position to stay within viewport
    if (left + menuWidth > viewportWidth - 8) {
        left = Math.max(8, viewportWidth - menuWidth - 8);
    }
    if (left < 8) {
        left = 8;
    }
    // Adjust vertical position to stay within viewport
    if (top + menuHeight > viewportHeight - 8) {
        top = Math.max(8, viewportHeight - menuHeight - 8);
    }
    if (top < 8) {
        top = 8;
    }
    return {
        top: Math.round(top),
        left: Math.round(left),
        width: triggerRect.width,
    };
};
var getNextFocusIndex = function (currentIndex, optionsLength, direction) {
    return direction === 'down'
        ? currentIndex < optionsLength - 1
            ? currentIndex + 1
            : 0
        : currentIndex > 0
            ? currentIndex - 1
            : optionsLength - 1;
};
var scrollIntoView = function (element, container) {
    var elementTop = element.offsetTop;
    var elementBottom = elementTop + element.offsetHeight;
    var containerTop = container.scrollTop;
    var containerBottom = containerTop + container.offsetHeight;
    if (elementTop < containerTop) {
        container.scrollTop = elementTop;
    }
    else if (elementBottom > containerBottom) {
        container.scrollTop = elementBottom - container.offsetHeight;
    }
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.pointer-events-none{pointer-events:none}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.inset-y-0{bottom:0;top:0}.left-0{left:0}.z-10{z-index:10}.z-50{z-index:50}.mb-2{margin-bottom:.5rem}.ml-1{margin-left:.25rem}.ml-2{margin-left:.5rem}.mr-1{margin-right:.25rem}.mr-2{margin-right:.5rem}.flex{display:flex}.inline-flex{display:inline-flex}.h-3{height:.75rem}.h-4{height:1rem}.max-h-48{max-height:12rem}.w-3{width:.75rem}.w-4{width:1rem}.w-full{width:100%}.min-w-0{min-width:0}.flex-1{flex:1 1 0%}@keyframes scaleIn{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.animate-scale-in{animation:scaleIn .15s ease-out}@keyframes spin{to{transform:rotate(1turn)}}.animate-spin{animation:spin 1s linear infinite}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.resize{resize:both}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-md{border-radius:.375rem}.rounded-xl{border-radius:.75rem}.border{border-width:1px}.border-b{border-bottom-width:1px}.border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235/var(--tw-border-opacity,1))}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity,1))}.border-purple-500{--tw-border-opacity:1;border-color:rgb(168 85 247/var(--tw-border-opacity,1))}.bg-blue-100{--tw-bg-opacity:1;background-color:rgb(219 234 254/var(--tw-bg-opacity,1))}.bg-blue-50{--tw-bg-opacity:1;background-color:rgb(239 246 255/var(--tw-bg-opacity,1))}.bg-blue-500{--tw-bg-opacity:1;background-color:rgb(59 130 246/var(--tw-bg-opacity,1))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity,1))}.bg-green-100{--tw-bg-opacity:1;background-color:rgb(220 252 231/var(--tw-bg-opacity,1))}.bg-purple-50{--tw-bg-opacity:1;background-color:rgb(250 245 255/var(--tw-bg-opacity,1))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))}.p-0\\.5{padding:.125rem}.p-2{padding:.5rem}.p-4{padding:1rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.pl-2{padding-left:.5rem}.pl-8{padding-left:2rem}.pr-3{padding-right:.75rem}.text-left{text-align:left}.text-center{text-align:center}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-semibold{font-weight:600}.text-blue-900{--tw-text-opacity:1;color:rgb(30 58 138/var(--tw-text-opacity,1))}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1))}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity,1))}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity,1))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity,1))}.text-green-900{--tw-text-opacity:1;color:rgb(20 83 45/var(--tw-text-opacity,1))}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity,1))}.placeholder-gray-500::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(107 114 128/var(--tw-placeholder-opacity,1))}.placeholder-gray-500::placeholder{--tw-placeholder-opacity:1;color:rgb(107 114 128/var(--tw-placeholder-opacity,1))}.opacity-20{opacity:.2}.opacity-25{opacity:.25}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)}.shadow-lg,.shadow-sm{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-colors{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1)}.dropdown-scrollbar::-webkit-scrollbar{width:6px}.dropdown-scrollbar::-webkit-scrollbar-track{background:transparent}.dropdown-scrollbar::-webkit-scrollbar-thumb{background-color:#d1d5db;border-radius:3px}.dropdown-scrollbar::-webkit-scrollbar-thumb:hover{background-color:#9ca3af}.dropdown-scrollbar{scrollbar-color:#d1d5db transparent;scrollbar-width:thin}.hover\\:border-gray-400:hover{--tw-border-opacity:1;border-color:rgb(156 163 175/var(--tw-border-opacity,1))}.hover\\:bg-gray-50:hover{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity,1))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}";
styleInject(css_248z,{"insertAt":"top"});

var ChevronDownIcon = function () { return (jsxRuntime.jsx("svg", { className: 'w-4 h-4', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', children: jsxRuntime.jsx("path", { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M19 9l-7 7-7-7' }) })); };
var SearchIcon = function () { return (jsxRuntime.jsx("svg", { className: 'w-4 h-4', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', children: jsxRuntime.jsx("path", { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' }) })); };
var CheckIcon = function () { return (jsxRuntime.jsx("svg", { className: 'w-4 h-4', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', children: jsxRuntime.jsx("path", { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M5 13l4 4L19 7' }) })); };
var SmallXIcon = function () { return (jsxRuntime.jsx("svg", { className: 'w-3 h-3', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', children: jsxRuntime.jsx("path", { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M6 18L18 6M6 6l12 12' }) })); };
var LoadingIcon = function () { return (jsxRuntime.jsxs("svg", { className: 'w-4 h-4 animate-spin', fill: 'none', viewBox: '0 0 24 24', children: [jsxRuntime.jsx("circle", { className: 'opacity-25', cx: '12', cy: '12', r: '10', stroke: 'currentColor', strokeWidth: '4' }), jsxRuntime.jsx("path", { className: 'opacity-75', fill: 'currentColor', d: 'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' })] })); };
var Dropdown = function (_a) {
    var options = _a.options, value = _a.value, onChange = _a.onChange, _b = _a.placeholder, placeholder = _b === void 0 ? 'Select...' : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.multiple, multiple = _d === void 0 ? false : _d, _e = _a.searchable, searchable = _e === void 0 ? false : _e, _f = _a.searchPlaceholder, searchPlaceholder = _f === void 0 ? 'Search...' : _f, _g = _a.usePortal, usePortal = _g === void 0 ? true : _g, className = _a.className, style = _a.style, _h = _a.zIndex, zIndex = _h === void 0 ? 1000 : _h, _j = _a.loading, loading = _j === void 0 ? false : _j, _k = _a.loadingText, loadingText = _k === void 0 ? 'Loading...' : _k;
    var _l = react.useState(false), isOpen = _l[0], setIsOpen = _l[1];
    var _m = react.useState(''), searchTerm = _m[0], setSearchTerm = _m[1];
    var _o = react.useState(-1), focusedIndex = _o[0], setFocusedIndex = _o[1];
    var _p = react.useState({
        top: 0,
        left: 0,
        width: 0,
    }), menuPosition = _p[0], setMenuPosition = _p[1];
    var triggerRef = react.useRef(null);
    var menuRef = react.useRef(null);
    var searchRef = react.useRef(null);
    var optionRefs = react.useRef([]);
    var selectedOptions = getSelectedOptions(options, value);
    var filteredOptions = filterOptions(options, searchTerm, false);
    var updatePosition = react.useCallback(function () {
        if (triggerRef.current && menuRef.current && isOpen) {
            var newPosition_1 = calculatePosition(triggerRef.current, menuRef.current, 4);
            setMenuPosition(function (prev) {
                // Only update if position has changed significantly to prevent jitter
                if (Math.abs(prev.top - newPosition_1.top) > 2 ||
                    Math.abs(prev.left - newPosition_1.left) > 2 ||
                    Math.abs(prev.width - newPosition_1.width) > 2) {
                    return newPosition_1;
                }
                return prev;
            });
        }
    }, [isOpen]);
    react.useEffect(function () {
        if (isOpen) {
            // Use requestAnimationFrame to ensure DOM is ready
            requestAnimationFrame(updatePosition);
            // Throttle scroll events to prevent excessive updates
            var scrollTimeout_1;
            var throttledUpdate_1 = function () {
                clearTimeout(scrollTimeout_1);
                scrollTimeout_1 = setTimeout(updatePosition, 16); // ~60fps
            };
            window.addEventListener('scroll', throttledUpdate_1, true);
            window.addEventListener('resize', updatePosition);
            return function () {
                clearTimeout(scrollTimeout_1);
                window.removeEventListener('scroll', throttledUpdate_1, true);
                window.removeEventListener('resize', updatePosition);
            };
        }
    }, [isOpen, updatePosition]);
    react.useEffect(function () {
        if (isOpen && searchable && searchRef.current) {
            searchRef.current.focus();
        }
    }, [isOpen, searchable]);
    var handleOpen = react.useCallback(function () {
        if (disabled)
            return;
        setIsOpen(true);
        setFocusedIndex(-1);
    }, [disabled]);
    var handleClose = react.useCallback(function () {
        setIsOpen(false);
        setSearchTerm('');
        setFocusedIndex(-1);
    }, []);
    var handleToggle = react.useCallback(function () {
        isOpen ? handleClose() : handleOpen();
    }, [isOpen, handleOpen, handleClose]);
    var handleOptionSelect = react.useCallback(function (option) {
        if (option.disabled)
            return;
        if (multiple) {
            var currentValues = Array.isArray(value)
                ? value
                : value
                    ? [value]
                    : [];
            var newValues = currentValues.includes(option.value)
                ? currentValues.filter(function (v) { return v !== option.value; })
                : __spreadArray(__spreadArray([], currentValues, true), [option.value], false);
            onChange(newValues);
        }
        else {
            onChange(option.value);
            handleClose();
        }
    }, [multiple, value, onChange, handleClose]);
    var handleRemoveOption = react.useCallback(function (optionValue, e) {
        e.stopPropagation();
        if (multiple && Array.isArray(value)) {
            var newValues = value.filter(function (v) { return v !== optionValue; });
            onChange(newValues);
        }
    }, [multiple, value, onChange]);
    var handleKeyDown = react.useCallback(function (e) {
        var _a;
        switch (e.key) {
            case 'Enter':
            case ' ':
                if (!isOpen) {
                    e.preventDefault();
                    handleOpen();
                }
                else if (focusedIndex >= 0 &&
                    focusedIndex < filteredOptions.length) {
                    e.preventDefault();
                    handleOptionSelect(filteredOptions[focusedIndex]);
                }
                break;
            case 'Escape':
                e.preventDefault();
                handleClose();
                (_a = triggerRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                break;
            case 'ArrowDown':
                e.preventDefault();
                if (!isOpen) {
                    handleOpen();
                }
                else {
                    var nextIndex = getNextFocusIndex(focusedIndex, filteredOptions.length, 'down');
                    setFocusedIndex(nextIndex);
                }
                break;
            case 'ArrowUp':
                e.preventDefault();
                if (isOpen) {
                    var nextIndex = getNextFocusIndex(focusedIndex, filteredOptions.length, 'up');
                    setFocusedIndex(nextIndex);
                }
                break;
            case 'Tab':
                if (isOpen)
                    handleClose();
                break;
        }
    }, [
        isOpen,
        focusedIndex,
        filteredOptions,
        handleOpen,
        handleClose,
        handleOptionSelect,
    ]);
    react.useEffect(function () {
        if (focusedIndex >= 0 &&
            optionRefs.current[focusedIndex] &&
            menuRef.current) {
            scrollIntoView(optionRefs.current[focusedIndex], menuRef.current);
        }
    }, [focusedIndex]);
    react.useEffect(function () {
        var handleClickOutside = function (event) {
            if (isOpen &&
                triggerRef.current &&
                menuRef.current &&
                !triggerRef.current.contains(event.target) &&
                !menuRef.current.contains(event.target)) {
                handleClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return function () { return document.removeEventListener('mousedown', handleClickOutside); };
    }, [isOpen, handleClose]);
    var renderSelectedValues = function () {
        if (loading) {
            return (jsxRuntime.jsxs("div", { className: 'flex items-center space-x-2', children: [jsxRuntime.jsx(LoadingIcon, {}), jsxRuntime.jsx("span", { className: 'text-gray-600', children: loadingText })] }));
        }
        if (selectedOptions.length === 0) {
            return jsxRuntime.jsx("span", { className: 'text-gray-500', children: placeholder });
        }
        if (multiple && selectedOptions.length > 1) {
            return (jsxRuntime.jsx("div", { className: 'flex flex-wrap gap-1', children: selectedOptions.map(function (option) { return (jsxRuntime.jsxs("span", { className: 'inline-flex items-center px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full', children: [option.icon && jsxRuntime.jsx("span", { className: 'mr-1', children: option.icon }), option.label, jsxRuntime.jsx("button", { type: 'button', onClick: function (e) { return handleRemoveOption(option.value, e); }, className: 'ml-1 p-0.5 rounded-full border border-gray-300 hover:border-gray-400 focus:outline-none transition-colors', children: jsxRuntime.jsx(SmallXIcon, {}) })] }, option.value)); }) }));
        }
        var option = selectedOptions[0];
        return (jsxRuntime.jsxs("div", { className: 'flex items-center', children: [option.icon && jsxRuntime.jsx("span", { className: 'mr-2', children: option.icon }), jsxRuntime.jsx("span", { children: option.label })] }));
    };
    var renderSingleOption = function (option, index) {
        var isSelected = selectedOptions.some(function (selected) { return selected.value === option.value; });
        var isFocused = index === focusedIndex;
        return (jsxRuntime.jsxs("div", { ref: function (el) { return (optionRefs.current[index] = el); }, className: clsx('px-3 py-2 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors text-gray-900', {
                'bg-blue-50 text-blue-900': isFocused && !isSelected,
                'bg-blue-100 text-blue-900': isSelected && !multiple,
                'bg-green-100 text-green-900': isSelected && multiple,
                'opacity-50 cursor-not-allowed': option.disabled,
            }), onClick: function () { return !option.disabled && handleOptionSelect(option); }, onMouseEnter: function () { return setFocusedIndex(index); }, children: [jsxRuntime.jsxs("div", { className: 'flex items-center flex-1', children: [option.icon && jsxRuntime.jsx("span", { className: 'mr-2', children: option.icon }), jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("div", { className: 'font-medium text-gray-900', children: option.label }), option.description && !searchable && (jsxRuntime.jsx("div", { className: 'text-sm text-gray-600', children: option.description }))] })] }), multiple && isSelected && jsxRuntime.jsx(CheckIcon, {})] }, option.value));
    };
    var renderOptionsList = function () {
        if (loading) {
            return (jsxRuntime.jsxs("div", { className: 'px-3 py-2 text-center text-gray-600', children: [jsxRuntime.jsx(LoadingIcon, {}), jsxRuntime.jsx("span", { className: 'ml-2', children: loadingText })] }));
        }
        if (filteredOptions.length === 0) {
            return (jsxRuntime.jsx("div", { className: 'px-3 py-2 text-center text-gray-600', children: "No results found" }));
        }
        return filteredOptions.map(function (option, index) {
            return renderSingleOption(option, index);
        });
    };
    var menu = (jsxRuntime.jsxs("div", { ref: menuRef, className: 'absolute bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden animate-scale-in text-gray-900', style: {
            top: menuPosition.top,
            left: menuPosition.left,
            minWidth: menuPosition.width,
            zIndex: zIndex,
            maxWidth: '320px', // Prevent menu from becoming too wide
        }, children: [searchable && (jsxRuntime.jsx("div", { className: 'p-2 border-b border-gray-200', children: jsxRuntime.jsxs("div", { className: 'relative', children: [jsxRuntime.jsx("div", { className: 'absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none text-gray-400', children: jsxRuntime.jsx(SearchIcon, {}) }), jsxRuntime.jsx("input", { ref: searchRef, type: 'text', className: 'w-full pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none text-gray-900 placeholder-gray-500', placeholder: searchPlaceholder, value: searchTerm, onChange: function (e) { return setSearchTerm(e.target.value); }, onKeyDown: handleKeyDown })] }) })), jsxRuntime.jsx("div", { className: 'max-h-48 overflow-y-auto dropdown-scrollbar', children: renderOptionsList() })] }));
    return (jsxRuntime.jsxs("div", { className: clsx('relative', className), style: style, children: [jsxRuntime.jsx("button", { ref: triggerRef, type: 'button', className: clsx('w-full px-3 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none transition-colors', { 'cursor-not-allowed opacity-50': disabled }), onClick: handleToggle, onKeyDown: handleKeyDown, disabled: disabled, "aria-expanded": isOpen, "aria-haspopup": 'listbox', children: jsxRuntime.jsxs("div", { className: 'flex items-center justify-between', children: [jsxRuntime.jsx("div", { className: 'flex-1 min-w-0', children: renderSelectedValues() }), jsxRuntime.jsx(ChevronDownIcon, {})] }) }), isOpen && (usePortal ? reactDom.createPortal(menu, document.body) : menu)] }));
};

exports.Dropdown = Dropdown;
exports.calculatePosition = calculatePosition;
exports.filterOptions = filterOptions;
exports.getNextFocusIndex = getNextFocusIndex;
exports.getSelectedOptions = getSelectedOptions;
exports.scrollIntoView = scrollIntoView;
//# sourceMappingURL=index.js.map
