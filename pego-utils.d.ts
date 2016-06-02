interface StringConstructor {
    /**
     * Empty string constant
     */
    Empty: string;

    /**
     * Check if string is null or empty
     * @example <caption>Example usage of String.IsNullOrEmpty.</caption>
     * let temp: string = ""
     * // return true
     * String.IsNullOrEmpty(temp)
     * @returns {boolean} true if string is null or empty...Otherwise
     */
    IsNullOrEmpty(value: string): boolean;
}

/**
 * Extend string type
 */
interface String {
    /**
     * Perform if string is contained
     * @example <caption>Example usage of Contains.</caption>
     * let temp: string = "Search the string"
     * // return true
     * temp.Contains("string")
     * @returns {boolean} true if string is contained...Otherwise
     */
    Contains(value: string): boolean;

    /**
     * Remove left space in the string
     * @example <caption>Example usage of LeftTrim.</caption>
     * let temp: string = "  generic string  "
     * // return "generic string  "
     * temp.LeftTrim()
     * @returns {string} String any space at left
     */
    LeftTrim(): string;

    /**
     * Remove right space in the string
     * @example <caption>Example usage of RightTrim.</caption>
     * let temp: string = "  generic string  "
     * // return "  generic string"
     * temp.RightTrim()
     * @returns {string} String any space at right
     */
    RightTrim(): string;

    /**
     * Remove start and end space in the string
     * @example <caption>Example usage of Trim.</caption>
     * let temp: string = "  generic string  "
     * // return "generic string"
     * temp.Trim()
     * @returns {string} String any space at left and right
     */
    Trim(): string;

    /**
     * Remove all space inside the string
     * @example <caption>Example usage of ClearAllSpaces.</caption>
     * let temp: string = "  generic string  "
     * // return "genericstring"
     * temp.ClearAllSpaces()
     * @returns {string} String any space in the string
     */
    ClearAllSpaces(): string;

    /**
     * Convert string boolean in type boolean
     * @example <caption>Example usage of ToBoolean.</caption>
     * let temp: string = "true"
     * // return true
     * temp.ToBoolean()
     * @returns {boolean} true if string is represents type true...Otherwise
     */
    ToBoolean(): boolean;

    /**
     * Convert tag html in literal form
     * @example <caption>Example usage of EscapeHtml.</caption>
     * let temp: string = "<sample>"
     * // return "&lt;sample&gt;"
     * temp.EscapeHtml()
     * @returns {string} literal form of the string
     */
    EscapeHtml(): string;

    /**
     * Convert literal form in tag html
     * @example <caption>Example usage of UnescapeHtml.</caption>
     * let temp: string = "&lt;sample&gt;"
     * // return "<sample>"
     * temp.UnescapeHtml()
     * @returns {string} tag html form of the string
     */
    UnescapeHtml(): string;

    /**
     * Escape char ' inside string
     * @example <caption>Example usage of EscapeQuot.</caption>
     * let temp: string = "  generic string ' "
     * // return "  generic string \' "
     * temp.EscapeQuot()
     * @returns {string} string in escape char '
     */
    EscapeQuot(): string;

    /**
     * Remove all html tags
     * @example <caption>Example usage of RemoveHtmlTags.</caption>
     * let temp: string = "  generic string <sample> "
     * // return "  generic string  "
     * temp.RemoveHtmlTags()
     * @returns {string} string any tag html
     */
    RemoveHtmlTags(): string;

    /**
     * Check if string is null or empty
     * @example <caption>Example usage of String.IsNullOrEmpty.</caption>
     * let temp: string = ""
     * // return true
     * String.IsNullOrEmpty(temp)
     * @returns {boolean} true if string is null or empty...Otherwise
     */
    IsNullOrEmpty(): boolean;
}
/**
 * Extend array type
 */
interface Array<T> {
    /**
     * Move a element from position i to position j
     * @example <caption>Example usage.</caption>
     * let element[] = ['a','b','c','d'];
     * // a is in position 2, c is in position 0. element[2] == 2
     * element.Move(0,2);
     * @returns {Array} New array with items in new position
     */
    Move(fromIndex: number, toIndex: number): Array<T>;

    /**
     * Insert element from position i
     * @example <caption>Example usage.</caption>
     * let element[] = ['a','b','c','d'];
     * // The array contains elements: 'a','b','c','d','e'
     * element.InsertAt(4,'e');
     * @returns {Array} New array with new item add
     */
    InsertAt(index: number, item: T): Array<T>;

    /**
     * Remove element from position i
     * @example <caption>Example usage.</caption>
     * let element[] = ['a','b','c','d'];
     * // The array contains elements: 'b','c','d'
     * element.RemoveAt(0);
     * @returns {Array} New array any element in i position
     */
    RemoveAt(index: number): Array<T>;

    /**
     * Reverse all items
     * @example <caption>Example usage.</caption>
     * let element[] = ['a','b','c','d'];
     * // The array contains elements: 'd','c','b','a'
     * element.Reverse();
     * @returns {Array} New array any element in i position
     */
    Reverse(): Array<T>;

    /**
     * Perform sort by property
     * @example <caption>Example usage.</caption>
     * let element: [] = [{id: 2, name: 'First'},{id: 1, name: 'Second'}];
     * // The array is order by id
     * element.SortBy('id', true);
     * @returns {Array} New array order by property
     */
    SortBy(field: string, ascending: boolean): Array<T>;

    /**
     * Remove duplicate inside array
     * @example <caption>Example usage.</caption>
     * let element: [] = ['a','a','b','c','d'];
     * // The array contains elements: 'a','b','c','d'
     * element.Distinct();
     * @returns {Array} New array with distinct element
     */
    Distinct(): Array<T>;
}

/**
 * Class for guid object
 */
declare class Guid {
    /**
     * Create at the new instance of the class Guid
     * @constructor
     * @param {string} value - The new guid element
     */
    constructor(value?: string);

    /**
     * Represents the type guid in string
     * @example <caption>Example usage.</caption>
     * let element: Guid = new Guid();
     * // Is guid in format string for example "e83da16f-9f2c-428d-8b89-b1da091dd00d"
     * element.toString();
     * or
     * element + "";
     * @returns {string} Guid in format string
     */
    public toString(): string;

    /**
     * Represents the type guid empty
     * @example <caption>Example usage.</caption>
     * let element: Guid = Guid.Empty();
     * // Is guid empty for example "00000000-0000-0000-0000-000000000000"
     * element.toString();
     * @returns {Guid} Guid empty
     */
    public static EmptyGuid(): Guid;

    /**
     * Represents the new guid
     * @example <caption>Example usage.</caption>
     * let element: Guid = Guid.NewGuid();
     * // Is guid for example "e83da16f-9f2c-428d-8b89-b1da091dd00d"
     * element.toString();
     * @returns {Guid} Guid generated
     */
    public static NewGuid(): Guid;

    /**
     * Check if element is type guid
     * @example <caption>Example usage.</caption>
     * let element: boolean = Guid.IsValidGuid(Guid.NewGuid());
     * // Is true
     * element
     * @returns {boolean} True is type guid...Otherwise
     */
    public static IsValidGuid(guid: string): boolean;
}

/**
 * class for Loglevel enum
 */
declare enum LogLevel {
    /**
     * Info log level
     */
    Info,
    /**
     * Warn log level
     */
    Warn,
    /**
     * Error log level
     */
    Error,
    /**
     * All events log level
     */
    All
}

/**
 * Interface for objectindexable items (with properties accessible via string array notation)
 */
interface IObjectIndexable {
    [index: string]: any;
}

/**
 *   Module Utility
 */
declare module Utility {
    /**
     * Class for console write
     */
    class Console {
        /**
         * Set the level, for log element
         * @param {LogLevel} value - Enum LogLevel
         */
        static SetConsoleLevel(level: LogLevel): void;

        /**
         * Show a error console entry
         * @param {string} message
         */
        static Error(message: string): void;
        /**
         * Show a warn console entry
         * @param {string} message
         */

        static Warn(message: string): void;

        /**
         * Show a info console entry
         * @param {string} message
         */
        static Info(message: string): void;
    }

    class LocalStorage {
        /**
         * Insert element in mode synchronous
         * @param {string} key - Key to add
         * @param {object} value - Value to add
         * @returns {boolean} true if the operation was successful...Otherwise
         */
        static SetItemSync<T>(name: string, value: T): void;
        /**
         * Recovers a element in mode synchronous
         * @param {string} key - Key to recover element
         * @returns {object} The search item
         */
        static GetItemSync<T>(name: string): T;

        /**
         * Insert element in mode asynchronous
         * @param {string} key - Key to add
         * @param {object} value - Value to add
         * @param {function} callback - Option function callback for success case
         * @param {function} error - Option function callback for failure case
         * @returns {Promise} Return promise if browser support it, otherwise use callback
         */
        static SetItemAsync<T>(name: string, value: T, callback?: Function, error?: Function): Promise<T>;
        /**
         * Recover a element in mode asynchronous
         * @example <caption>Example usage of GetItemAsync.</caption>
         *
         * var test: Promise = Utility.LocalStorage.GetItemAsync("pego");
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
        static GetItemAsync<T>(name: string, callback?: Function, error?: Function): Promise<T>;
    }

    /**
     * Class for static and classic validators
     */
    class Validators {
        /**
         * Perform check is valid username
         * @param {string} value - Element to check
         * @returns {boolean} true if the operation was successful...Otherwise
         */
        static Username(value: string): boolean;

        /**
         * Perform check is valid password
         * @param {string} value - Element to check
         * @returns {boolean} true if the operation was successful...Otherwise
         */
        static Password(value: string): boolean;

        /**
         * Perform check is valid mail
         * @param {string} value - Element to check
         * @returns {boolean} true if the operation was successful...Otherwise
         */
        static Email(email: string): boolean;
    }

    /**
     * Class for file utility
     */
    class File {
        /**
         * Normalize size file in mode readable
         * @param {number} byte - Size in byte of the element
         * @returns {string} readable representation of the dimension
         */
        static NormalizeByte(byte: number): string;
        /**
         * Get only extension of the file
         * @param {string} filename - Complete file name any path
         * @returns {string} Extension of the filename
         */
        static GetExtension(filename: string): string;
        /**
         * Get type extension of the file
         * @param {string} filename - Complete file name any path
         * @returns {string} Extension type of the filename
         */
        static GetExtensionClassfunction(filename: string): string;
    }

    /**
     *	Class for access in cookie, used as fallback for localforage
     */
    class Cookie {
        /**
         * Set cookie element
         * @param {string} name - Name of the key
         * @param {string} value - Element to add
         * @param {number} exdays - (optional)Expiration day
         */
        static Set(name: string, value: string, expireday?: number): void;

        /**
         * Get cookie element
         * @param {string} cname - Name of the key
         * @return {string} Value add inside cookie
         */
        static Get(name: string): string;

        /**
         * Remove element inside cookie
         * @param {string} cname - Name of the key
         */
        static Remove(name: string): void;
    }
}

// Type definitions for es6-promise
// Project: https://github.com/jakearchibald/ES6-Promise
// Definitions by: François de Campredon <https://github.com/fdecampredon/>, vvakame <https://github.com/vvakame>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
interface Thenable<T> {
    then<U>(onFulfilled?: (value: T) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
    then<U>(onFulfilled?: (value: T) => U | Thenable<U>, onRejected?: (error: any) => void): Thenable<U>;
    catch<U>(onRejected?: (error: any) => U | Thenable<U>): Thenable<U>;
}

declare class Promise<T> implements Thenable<T> {
    /**
     * If you call resolve in the body of the callback passed to the constructor,
     * your promise is fulfilled with result object passed to resolve.
     * If you call reject your promise is rejected with the object passed to reject.
     * For consistency and debugging (eg stack traces), obj should be an instanceof Error.
     * Any errors thrown in the constructor callback will be implicitly passed to reject().
     */
    constructor(callback: (resolve : (value?: T | Thenable<T>) => void, reject: (error?: any) => void) => void);

    /**
     * onFulfilled is called when/if "promise" resolves. onRejected is called when/if "promise" rejects.
     * Both are optional, if either/both are omitted the next onFulfilled/onRejected in the chain is called.
     * Both callbacks have a single parameter , the fulfillment value or rejection reason.
     * "then" returns a new promise equivalent to the value you return from onFulfilled/onRejected after being passed through Promise.resolve.
     * If an error is thrown in the callback, the returned promise rejects with that error.
     *
     * @param onFulfilled called when/if "promise" resolves
     * @param onRejected called when/if "promise" rejects
     */
    then<U>(onFulfilled?: (value: T) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>): Promise<U>;
    then<U>(onFulfilled?: (value: T) => U | Thenable<U>, onRejected?: (error: any) => void): Promise<U>;

    /**
     * Sugar for promise.then(undefined, onRejected)
     *
     * @param onRejected called when/if "promise" rejects
     */
    catch<U>(onRejected?: (error: any) => U | Thenable<U>): Promise<U>;
}

declare namespace Promise {
    /**
     * Make a new promise from the thenable.
     * A thenable is promise-like in as far as it has a "then" method.
     */
    function resolve<T>(value?: T | Thenable<T>): Promise<T>;

    /**
     * Make a promise that rejects to obj. For consistency and debugging (eg stack traces), obj should be an instanceof Error
     */
    function reject(error: any): Promise<any>;
    function reject<T>(error: T): Promise<T>;

    /**
     * Make a promise that fulfills when every item in the array fulfills, and rejects if (and when) any item rejects.
     * the array passed to all can be a mixture of promise-like objects and other objects.
     * The fulfillment value is an array (in order) of fulfillment values. The rejection value is the first rejection value.
     */
    function all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>, T8 | Thenable<T8>, T9 | Thenable<T9>, T10 | Thenable<T10>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
    function all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>, T8 | Thenable<T8>, T9 | Thenable<T9>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
    function all<T1, T2, T3, T4, T5, T6, T7, T8>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>, T8 | Thenable<T8>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>;
    function all<T1, T2, T3, T4, T5, T6, T7>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>, T7 | Thenable<T7>]): Promise<[T1, T2, T3, T4, T5, T6, T7]>;
    function all<T1, T2, T3, T4, T5, T6>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>, T6 | Thenable<T6>]): Promise<[T1, T2, T3, T4, T5, T6]>;
    function all<T1, T2, T3, T4, T5>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>, T5 | Thenable<T5>]): Promise<[T1, T2, T3, T4, T5]>;
    function all<T1, T2, T3, T4>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>, T4 | Thenable <T4>]): Promise<[T1, T2, T3, T4]>;
    function all<T1, T2, T3>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>, T3 | Thenable<T3>]): Promise<[T1, T2, T3]>;
    function all<T1, T2>(values: [T1 | Thenable<T1>, T2 | Thenable<T2>]): Promise<[T1, T2]>;
    function all<T>(values: (T | Thenable<T>)[]): Promise<T[]>;

    /**
     * Make a Promise that fulfills when any item fulfills, and rejects if any item rejects.
     */
    function race<T>(promises: (T | Thenable<T>)[]): Promise<T>;
}