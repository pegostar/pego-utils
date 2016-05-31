/*!
 * pego-utils v1.0.0
 * https://github.com/pegostar/pego-utils
 *
 * Copyright 2016 Davide Pegoraro
 *
 * Date: 2016-05-15T15:00Z
 */

/**
 * Extend native type String
 */
Object.defineProperties(String.prototype, {
    /**
     * Perform if string is contained
     * @example <caption>Example usage of Contains.</caption>
     * var temp = "Search the string"
     * // return true
     * temp.Contains("string")
     * @returns {boolean} true if string is contained...Otherwise
     */
    "Contains": {
        configurable: false,
        value: function (search) {
            "use strict";
            if (typeof (this.toString()) !== "string") {
                throw "Input must be string";
            }
            if (search === null || search === undefined || search.length === 0) {
                return false;
            }
            var value = this.toString();
            if (value.length < search.length) {
                return false;
            }

            var result = false;
            if (String.prototype.includes) {
                result = value.includes(search, 0);
            } else {
                result = (value.indexOf(search) !== -1);
            }

            return result;
        }
    },
    /**
     * Remove left space in the string
     * @example <caption>Example usage of LeftTrim.</caption>
     * var temp = "  generic string  "
     * // return "generic string  "
     * temp.LeftTrim()
     * @returns {string} String any space at left
     */
    "LeftTrim": {
        configurable: false,
        value: function () {
            "use strict";
            if (typeof (this.toString()) !== "string") {
                throw "Input must be string";
            }
            var value = this.toString();
            return value.replace(/^\s+/g, '');
        }
    },
    /**
     * Remove right space in the string
     * @example <caption>Example usage of RightTrim.</caption>
     * var temp = "  generic string  "
     * // return "  generic string"
     * temp.RightTrim()
     * @returns {string} String any space at right
     */
    "RightTrim": {
        configurable: false,
        value: function () {
            "use strict";
            if (typeof (this.toString()) !== "string") {
                throw "Input must be string";
            }
            var value = this.toString();
            return value.replace(/\s+$/g, '');
        }
    },
    /**
     * Remove start and end space in the string
     * @example <caption>Example usage of Trim.</caption>
     * var temp = "  generic string  "
     * // return "generic string"
     * temp.Trim()
     * @returns {string} String any space at left and right
     */
    "Trim": {
        configurable: false,
        value: function () {
            "use strict";
            if (typeof (this.toString()) !== "string") {
                throw "Input must be string";
            }

            var value = this.toString();
            return value.replace(/^\s+|\s+$/g, '');
        }
    },
    /**
     * Remove all space inside the string
     * @example <caption>Example usage of ClearAllSpaces.</caption>
     * var temp = "  generic string  "
     * // return "genericstring"
     * temp.ClearAllSpaces()
     * @returns {string} String any space in the string
     */
    "ClearAllSpaces": {
        configurable: false,
        value: function () {
            "use strict";
            if (typeof (this.toString()) !== "string") {
                throw "Input must be string";
            }

            return this.toString().replace(/ /g, '');
        }
    },
    /**
     * Convert string boolean in type boolean
     * @example <caption>Example usage of ToBoolean.</caption>
     * var temp = "true"
     * // return true
     * temp.ToBoolean()
     * @returns {boolean} true if string is represents type true...Otherwise
     */
    "ToBoolean": {
        configurable: false,
        value: function () {
            "use strict";
            if (typeof (this.toString()) !== "string") {
                throw "Input must be string";
            }

            var value = this.toString();
            value = value.replace(/ /g, '');
            value = value.toLowerCase();

            if (value === "true" || value === "yes" || value === "1") {
                return true;
            }

            if (value === "false" || value === "no" || value === "0") {
                return false;
            }

            return Boolean(value);
        }
    },
    /**
     * Convert tag html in literal form
     * @example <caption>Example usage of EscapeHtml.</caption>
     * var temp = "<sample>"
     * // return "&lt;sample&gt;"
     * temp.EscapeHtml()
     * @returns {string} literal form of the string
     */
    "EscapeHtml": {
        configurable: false,
        value: function () {
            "use strict";
            if (typeof (this.toString()) !== "string") {
                throw "Input must be string";
            }

            var value = this.toString();

            return value.replace(/[&<>"]/g, function (element) {
                var charsToReplace = {
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;',
                    '"': '&quot;'
                };

                return charsToReplace[element] || element;
            });
        }
    },
    /**
     * Convert literal form in tag html
     * @example <caption>Example usage of UnescapeHtml.</caption>
     * var temp = "&lt;sample&gt;"
     * // return "<sample>"
     * temp.UnescapeHtml()
     * @returns {string} tag html form of the string
     */
    "UnescapeHtml": {
        configurable: false,
        value: function () {
            "use strict";
            if (typeof (this.toString()) !== "string") {
                throw "Input must be string";
            }

            var value = this.toString();

            return value
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&quot;/g, '"')
                .replace(/&#034;/g, '"')
                .replace(/&#039;/g, "'")
                .replace(/&amp;/g, '&');
        }
    },
    /**
     * Escape char ' inside string
     * @example <caption>Example usage of EscapeQuot.</caption>
     * var temp = "  generic string ' "
     * // return "  generic string \' "
     * temp.EscapeQuot()
     * @returns {string} string in escape char '
     */
    "EscapeQuot": {
        configurable: false,
        value: function () {
            "use strict";
            if (typeof (this.toString()) !== "string") {
                throw "Input must be string";
            }
            var value = this.toString();

            return value.replace(/'/g, "\\\'");
        }
    },
    /**
     * Remove all html tags
     * @example <caption>Example usage of RemoveHtmlTags.</caption>
     * var temp = "  generic string <sample> "
     * // return "  generic string  "
     * temp.RemoveHtmlTags()
     * @returns {string} string any tag html
     */
    "RemoveHtmlTags": {
        configurable: false,
        value: function () {
            "use strict";
            if (typeof (this.toString()) !== "string") {
                throw "Input must be string";
            }
            var value = this.toString();

            return value.replace(/<[^>]+>/g, '');
        }
    }
});
String.Empty = '';
/**
 * Check if string is null or empty
 * @example <caption>Example usage of String.IsNullOrEmpty.</caption>
 * var temp = ""
 * // return true
 * String.IsNullOrEmpty(temp)
 * @returns {boolean} true if string is null or empty...Otherwise
 */
String.IsNullOrEmpty = function (value) {
    "use strict";
    if (typeof value !== "string") {
        throw "Input must be string";
    }
    var result = true;
    if (value !== null && value !== undefined) {
        result = (value === '');
    }

    return result;
}

/**
 * Extend native type Array
 */
Object.defineProperties(Array.prototype, {
    /**
     * Move a element from position i to position j
     * @example <caption>Example usage.</caption>
     * var element = ['a','b','c','d'];
     * // a is in position 2, c is in position 0. element[2] == 2
     * element.Move(0,2);
     * @returns {Array} New array with items in new position
     */
    "Move": {
        configurable: false,
        value: function (fromIndex, toIndex) {
            "use strict";
            if (Object.prototype.toString.call(this) !== '[object Array]') {
                throw new TypeError('Expected an array');
            }
            if (toIndex >= this.length) {
                var k = toIndex - this.length;
                while ((k--) + 1) {
                    this.push(undefined);
                }
            }
            var obj = this.splice(fromIndex, 1)[0];
            this.splice(toIndex, 0, obj);
            return this;
        }
    },
    /**
     * Insert element from position i
     * @example <caption>Example usage.</caption>
     * var element = ['a','b','c','d'];
     * // The array contains elements: 'a','b','c','d','e'
     * element.InsertAt(4,'e');
     * @returns {Array} New array with new item add
     */
    "InsertAt": {
        configurable: false,
        value: function (index, item) {
            if (index < 0) {
                throw "Invalid index";
            }
            if (Object.prototype.toString.call(this) !== '[object Array]') {
                throw new TypeError('Expected an array');
            }
            this.splice(index, 0, item);
            return this;
        }
    },
    /**
     * Remove element from position i
     * @example <caption>Example usage.</caption>
     * var element = ['a','b','c','d'];
     * // The array contains elements: 'b','c','d'
     * element.RemoveAt(0);
     * @returns {Array} New array any element in i position
     */
    "RemoveAt": {
        configurable: false,
        value: function (index) {
            "use strict";
            if (index < 0) {
                throw "Invalid index";
            }
            if (Object.prototype.toString.call(this) !== '[object Array]') {
                throw new TypeError('Expected an array');
            }

            this.splice(index, 1);
            return this;
        }
    },
    /**
     * Reverse all items
     * @example <caption>Example usage.</caption>
     * var element = ['a','b','c','d'];
     * // The array contains elements: 'd','c','b','a'
     * element.Reverse();
     * @returns {Array} New array any element in i position
     */
    "Reverse": {
        configurable: false,
        value: function () {
            "use strict";
            if (Object.prototype.toString.call(this) !== '[object Array]') {
                throw new TypeError('Expected an array');
            }

            return this.slice(0).reverse();
        }
    },
    /**
     * Perform sort by property
     * @example <caption>Example usage.</caption>
     * var element = [{id: 2, name: 'First'},{id: 1, name: 'Second'}];
     * // The array is order by id
     * element.SortBy('id', true);
     * @returns {Array} New array order by property
     */
    "SortBy": {
        configurable: false,
        value: function (field, ascending) {
            "use strict";
            if (Object.prototype.toString.call(this) !== '[object Array]') {
                throw new TypeError('Expected an array');
            }

            var key = function (data) {
                return data[field];
            };

            if (typeof ascending !== 'boolean') {
                ascending = true;
            }

            return this.slice().sort(function (first, second) {
                var item_i = key(first);
                var item_j = key(second);

                return (item_i < item_j ? -1 : item_i > item_j ? 1 : 0) * [-1, 1][+!!ascending];
            });
        }
    },
    /**
     * Remove duplicate inside array
     * @example <caption>Example usage.</caption>
     * var element = ['a','a','b','c','d'];
     * // The array contains elements: 'a','b','c','d'
     * element.Distinct();
     * @returns {Array} New array with distinct element
     */
    "Distinct": {
        configurable: false,
        value: function () {
            "use strict";
            if (Object.prototype.toString.call(this) !== '[object Array]') {
                throw new TypeError('Expected an array');
            }

            var newArr = [];
            var size = this.length;

            for (var i = 0; i < size; i++) {
                var found = false;

                for (var j = 0; j < newArr.length; j++) {
                    if (this[i] === newArr[j]) {
                        found = true;
                        break;
                    }
                }

                if (!found) {
                    newArr.push(this[i]);
                }
            }

            return newArr;
        }
    }
});

/**
 *	Guid helper type
 */
var Guid = (function () {
    "use strict";
    /**
     * Create at the new instance of the class Guid
     * @constructor
     * @param {string} value - The new guid element
     */
    function Guid(value) {
        if (value !== null && value !== undefined) {
            if (Guid.IsValidGuid(value))
            {
                this._value = value;
            }
        }
        else {
            this._value = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
    }

    /**
     * Represents the type guid in string
     * @example <caption>Example usage.</caption>
     * var element = new Guid();
     * // Is guid in format string for example "e83da16f-9f2c-428d-8b89-b1da091dd00d"
     * element.toString();
     * or
     * element + "";
     * @returns {string} Guid in format string
     */
    Guid.prototype.toString = function () {
        return this._value;
    };

    /**
     * Represents the type guid empty
     * @example <caption>Example usage.</caption>
     * var element = Guid.Empty();
     * // Is guid empty for example "00000000-0000-0000-0000-000000000000"
     * element.toString();
     * @returns {Guid} Guid empty
     */
    Guid.Empty = function () {
        return new Guid("00000000-0000-0000-0000-000000000000");
    };

    /**
     * Represents the new guid
     * @example <caption>Example usage.</caption>
     * var element = Guid.NewGuid();
     * // Is guid for example "e83da16f-9f2c-428d-8b89-b1da091dd00d"
     * element.toString();
     * @returns {Guid} Guid generated
     */
    Guid.NewGuid = function(){
        return new Guid(null);
    }

    /**
     * Check if element is type guid
     * @example <caption>Example usage.</caption>
     * var element = Guid.IsValidGuid(Guid.NewGuid());
     * // Is true
     * element
     * @returns {boolean} True is type guid...Otherwise
     */
    Guid.IsValidGuid = function (guid) {
        if(guid === null || guid === undefined || guid.length === 0){
            return false;
        }
        else{
            return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(guid);
        }
    };

    Object.seal(Guid);
    return Guid;
})();

/**
 * Log levels enum
 */
var LogLevel;
(function (LogLevel) {
    "use strict";

    LogLevel[LogLevel.Info = 0] = "Info";
    LogLevel[LogLevel.Warn = 1] = "Warn";
    LogLevel[LogLevel.Error = 2] = "Error";
    LogLevel[LogLevel.All = 3] = "All";

})(LogLevel || (LogLevel = {}));

/**
 * Namespace with library utility
 * @type {{Console, LocalStorage, Validators, File, Cookie}}
 */
var Utility = function() {
    "use strict";

    var ConsoleInstance = (function () {
        var currentLogLevel = null;
        /**
         * Check the level log for write message
         * @param {LogLevel} value - Enum LogLevel
         * @returns {boolean} True is possible write...Otherwise
         */
        var checkLogLevel = function (level) {
            switch (currentLogLevel || LogLevel.All) {
                case LogLevel.All:
                    return true;
                case LogLevel.Error:
                    return (level === LogLevel.Error || level === LogLevel.All);
                case LogLevel.Warn:
                    return (level === LogLevel.Warn || level === LogLevel.Error || level === LogLevel.All);
                case LogLevel.Info:
                    return (level === LogLevel.Warn || level === LogLevel.Error || level === LogLevel.Info || level === LogLevel.All);
            }
            return false;
        };

        return {
            /**
             * Set the level, for log element
             * @param {LogLevel} value - Enum LogLevel
             */
            SetConsoleLevel: function (level) {
                currentLogLevel = level;
            },
            /**
             * Write the error log
             * @param {string} message - Message to write
             */
            Error: function (message) {
                if (checkLogLevel(LogLevel.Error)) {
                    console.error(message);
                }
            },
            /**
             * Write the warning log
             * @param {string} message - Message to write
             */
            Warn: function (message) {
                if (checkLogLevel(LogLevel.Warn)) {
                    console.warn(message);
                }
            },
            /**
             * Write the information log
             * @param {string} message - Message to write
             */
            Info: function (message) {
                if (checkLogLevel(LogLevel.Info)) {
                    console.warn(message);
                }
            }
        };
    })();

    var LocalStorageInstance = (function(){
        /**
         * Check is space inside local storage is full
         * @param {Event} event - Event launch
         * @returns {boolean} true if localstorage is full...Otherwise
         */
        var isQuotaExceeded = function (event) {
            var quotaExceeded = false;
            if (event) {
                if (event.code) {
                    switch (event.code) {
                        case 22:
                            quotaExceeded = true;
                            break;
                        case 1014:
                            // Firefox
                            if (event.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                                quotaExceeded = true;
                            }
                            break;
                    }
                } else if (event.number === -2147024882) {
                    // Internet Explorer 8
                    quotaExceeded = true;
                }
            }
            return quotaExceeded;
        };

        /**
         * Check if exist localstorage
         * @returns {boolean} true if exist...Otherwise
         */
        var hasStorage = function() {
            try {
                localStorage.setItem("699655CA-FA06-4240-9298-A16783FC7A42", "test");
                localStorage.removeItem("699655CA-FA06-4240-9298-A16783FC7A42");
                return true;
            } catch (exception) {
                return false;
            }
        };

        return {
            /**
             * Insert element in mode synchronous
             * @param {string} key - Key to add
             * @param {object} value - Value to add
             * @returns {boolean} true if the operation was successful...Otherwise
             */
            SetItemSync: function (key, value) {
                    var result = false;

                    if (hasStorage()) {
                        try {
                            var data = JSON.stringify(value);
                            localStorage.setItem(key, data);
                            result = true;
                        } catch (e) {
                            if (isQuotaExceeded(e)) {
                                throw new Error("Quota Exceeded error");
                            }
                        }
                    }
                    else{
                        throw new Error("No localstorage suport");
                    }
                    return result;
                },
            /**
             * Recovers a element in mode synchronous
             * @param {string} key - Key to recover element
             * @returns {object} The search item
             */
            GetItemSync: function (key) {
                    var result = null;
                if (hasStorage()) {
                        result = localStorage.getItem(key);
                        result = result ? JSON.parse(result) : null;
                    }
                    else{
                    throw new Error("No localstorage suport");
                    }

                    return result;
                },
            /**
             * Insert element in mode asynchronous
             * @param {string} key - Key to add
             * @param {object} value - Value to add
             * @param {function} callback - Option function callback for success case
             * @param {function} error - Option function callback for failure case
             * @returns {Promise} Return promise if browser support it, otherwise use callback
             */
            SetItemAsync: function (key, value, callback, error) {
                var data = JSON.stringify(value);

                if (typeof Promise !== "undefined" && Promise.toString().indexOf("[native code]") !== -1) {
                    return new Promise(function (resolve, reject) {
                        if (hasStorage()) {
                            try {
                                localStorage.setItem(key, data);
                                resolve(true);
                            } catch (e) {
                                if (isQuotaExceeded(e)) {
                                    reject("Quota Exceeded error");
                                }
                            }
                        }
                        else {
                            if (typeof error === "function" && error !== null && error !== undefined) {
                                error("No localstorage suport");
                            }
                            reject("No localstorage suport");
                        }
                    });
                }
                else {
                    if (hasStorage()) {
                        try {
                            localStorage.setItem(key, data);
                            if (typeof callback === "function" && callback !== null && callback !== undefined) {
                                callback(true);
                            }
                        } catch (e) {
                            if (isQuotaExceeded(e)) {
                                if (typeof error === "function" && error !== null && error !== undefined) {
                                    error("Quota Exceeded error");
                                }
                            }
                        }
                    }
                    else {
                        if (typeof error === "function" && error !== null && error !== undefined) {
                            error("No localstorage suport");
                        }
                    }
                }
            },
            /**
             * Recover a element in mode asynchronous
             * @example <caption>Example usage of GetItemAsync.</caption>
             *
             * var test = Utility2.LocalStorage.GetItemAsync("pego");
             * test.then(function (data){
             *  ...
             * }).catch(function (error){
             *  ...
             * });
             * @param {string} key - Key to recover element
             * @param {function} callback - Option function callback for success case
             * @param {function} error - Option function callback for failure case
             * @returns {Promise} Return promise if browser support it, otherwise use callback
             */
            GetItemAsync: function (key, callback, error) {
                if (typeof Promise !== "undefined" && Promise.toString().indexOf("[native code]") !== -1) {
                    return new Promise(function (resolve, reject) {
                        if (hasStorage()) {
                            var result = localStorage.getItem(key);
                            result = result ? JSON.parse(result) : null;

                            if (typeof callback === "function" && callback !== null && callback !== undefined) {
                                callback(result);
                            }
                            resolve(result);
                        }
                        else {
                            if (typeof error === "function" && error !== null && error !== undefined) {
                                error("No localstorage suport");
                            }
                            reject("No localstorage suport");
                        }
                    });
                }
                else{
                    if (hasStorage()) {
                        var result = localStorage.getItem(key);
                        result = result ? JSON.parse(result) : null;

                        if (typeof callback === "function" && callback !== null && callback !== undefined) {
                            callback(result);
                        }
                    }
                    else {
                        if (typeof error === "function" && error !== null && error !== undefined) {
                            error("No localstorage suport");
                        }
                    }
                }
            }

            };
    })();

    var ValidatorsInstance = (function () {
        return {
            /**
             * Perform check is valid username
             * @param {string} value - Element to check
             * @returns {boolean} true if the operation was successful...Otherwise
             */
            Username: function (value) {
                var re = /^[a-z0-9_-]{3,16}$/;

                return re.test(value);
            },
            /**
             * Perform check is valid password
             * @param {string} value - Element to check
             * @returns {boolean} true if the operation was successful...Otherwise
             */
            Password: function (value) {
                /*
                 (/^
                 (?=.*\d)                //should contain at least one digit
                 (?=.*[a-z])             //should contain at least one lower case
                 (?=.*[A-Z])             //should contain at least one upper case
                 [a-zA-Z0-9]{8,}         //should contain at least 8 from the mentioned characters
                 $/)
                 */
                var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

                return re.test(value);
            },
            /**
             * Perform check is valid mail
             * @param {string} value - Element to check
             * @returns {boolean} true if the operation was successful...Otherwise
             */
            Email: function (value) {
                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                    return re.test(value);
            }
        };
    })();

    var FileInstance = (function () {
        return {
            /**
             * Normalize size file in mode readable
             * @param {number} byte - Size in byte of the element
             * @returns {string} readable representation of the dimension
             */
            NormalizeByte: function (byte) {
                var dim = 1;
                var ext = ' B';

                if (byte > Math.pow(2, 20)) {
                    dim = Math.pow(2, 20);
                    ext = ' MB';
                } else if (byte > Math.pow(2, 10)) {
                    dim = Math.pow(2, 10);
                    ext = ' KB';
                }

                return (byte / dim).toFixed(2) + ext;
            },
            /**
             * Get only extension of the file
             * @param {string} filename - Complete file name any path
             * @returns {string} Extension of the filename
             */
            GetExtension: function (filename) {
                return /.+\.([a-zA-Z]{2,6})$/.test(filename) ? (RegExp.$1).toLowerCase() : "undefined";
            },
            /**
             * Get type extension of the file
             * @param {string} filename - Complete file name any path
             * @returns {string} Extension type of the filename
             */
            GetExtensionClassfunction: function (filename) {
                switch (Utility.File.GetExtension(filename)) {
                    case '.jpg':
                    case '.img':
                    case '.png':
                    case '.gif':
                    case '.bmp':
                    case 'jpg':
                    case 'img':
                    case 'png':
                    case 'gif':
                    case 'bmp':
                        return "image-file-icon";
                    case '.doc':
                    case '.docx':
                    case 'doc':
                    case 'docx':
                        return "word-file-icon";
                    case '.xls':
                    case '.xlsx':
                    case 'xls':
                    case 'xlsx':
                        return "excel-file-icon";
                    case 'pdf':
                    case '.pdf':
                        return "pdf-file-icon";
                    case '.zip':
                    case '.rar':
                    case 'zip':
                    case 'rar':
                        return "zip-file-icon";
                    case '.txt':
                    case 'txt':
                        return "text-file-icon";
                    case '.ppt':
                    case '.pptx':
                    case '.pptm':
                    case '.potx':
                    case '.pot':
                    case '.ppsm':
                    case '.ppsx':
                    case '.pps':
                    case 'ppt':
                    case 'pptx':
                    case 'pptm':
                    case 'potx':
                    case 'pot':
                    case 'ppsm':
                    case 'ppsx':
                    case 'pps':
                        return "powerpoint-file-icon";
                    case '.rft':
                    case 'rtf':
                        return "rtf-file-icon";
                    case '.eml':
                    case 'eml':
                    case '.msg':
                    case 'msg':
                        return "email-file-icon";
                    case '.mp3':
                    case '.wav':
                    case '.aiff':
                    case '.flac':
                    case '.m4a':
                    case '.wma':
                    case 'mp3':
                    case 'wav':
                    case 'aiff':
                    case 'flac':
                    case 'm4a':
                    case 'wma':
                        return "sound-file-icon";
                    case '.mov':
                    case '.mp4':
                    case '.ogg':
                    case '.avi':
                    case '.m4v':
                    case '.mpg':
                    case '.wmv':
                    case '.3gp':
                    case 'mov':
                    case 'mp4':
                    case 'ogg':
                    case 'avi':
                    case 'm4v':
                    case 'mpg':
                    case 'wmv':
                    case '3gp':
                        return "video-file-icon";
                    default:
                        return "default-file-icon";
                }
            }
        };
    })();

    var CookieInstance = (function () {
        return {
            /**
             * Set cookie element
             * @param {string} cname - Name of the key
             * @param {string} cvalue - Element to add
             * @param {number} exdays - (optional)Expiration day
             */
            Set: function (cname, cvalue, exdays) {
                exdays = exdays || 365;
                var d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                var expires = "expires=" + d.toUTCString();
                var domain = "path=/";
                document.cookie = cname + "=" + cvalue + "; " + expires + "; " + domain;
            },
            /**
             * Get cookie element
             * @param {string} cname - Name of the key
             * @return {string} Value add inside cookie
             */
            Get: function (cname) {
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) === ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) === 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return '';
            },

            /**
             * Remove element inside cookie
             * @param {string} cname - Name of the key
             */
            Remove: function (cname) {
                document.cookie = cname +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            }
        };
    })();

    return {
        Console: ConsoleInstance,
        LocalStorage: LocalStorageInstance,
        Validators: ValidatorsInstance,
        File: FileInstance,
        Cookie: CookieInstance
    };
}();