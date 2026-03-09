import $ from 'jquery';

// Polyfill for functions removed in newer jQuery versions (like 4.0) 
// or deprecated in 3.x
if (!$.type) {
    $.type = function (obj) {
        if (obj == null) return String(obj);
        return typeof obj === "object" || typeof obj === "function"
            ? Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
            : typeof obj;
    };
}

if (!$.isFunction) {
    $.isFunction = function (obj) {
        return typeof obj === "function";
    };
}

if (!$.isArray) {
    $.isArray = Array.isArray;
}

if (!$.isNumeric) {
    $.isNumeric = function (obj) {
        return !isNaN(parseFloat(obj)) && isFinite(obj);
    };
}

if (!$.trim) {
    $.trim = function (text) {
        return text == null ? "" : (text + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    };
}

if (!$.camelCase) {
    $.camelCase = function (string) {
        return string.replace(/-([a-z])/g, function (all, letter) {
            return letter.toUpperCase();
        });
    };
}

window.jQuery = window.$ = $;
export default $;
