/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/8ball/index.js":
/*!*************************************!*\
  !*** ./node_modules/8ball/index.js ***!
  \*************************************/
/***/ ((module) => {

const responses = [
  'it is certain',
  'it is decidedly so',
  'without a doubt',
  'yes — definitely',
  'you may rely on it',
  'as I see it, yes',
  'most likely',
  'outlook good',
  'yes',
  'signs point to yes',
  'reply hazy, try again',
  'ask again later',
  'better not tell you now',
  'cannot predict now',
  'concentrate and ask again',
  'don’t count on it',
  'my reply is no',
  'my sources say no',
  'outlook not so good',
  'very doubtful'
]

module.exports = () => responses[Math.floor(responses.length * Math.random())]


/***/ }),

/***/ "./node_modules/@discordjs/collection/dist/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@discordjs/collection/dist/index.js ***!
  \**********************************************************/
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Collection = void 0;
/**
 * A Map with additional utility methods. This is used throughout discord.js rather than Arrays for anything that has
 * an ID, for significantly improved performance and ease-of-use.
 * @extends {Map}
 * @property {number} size - The amount of elements in this collection.
 */
class Collection extends Map {
    constructor(entries) {
        super(entries);
        /**
         * Cached array for the `array()` method - will be reset to `null` whenever `set()` or `delete()` are called
         * @name Collection#_array
         * @type {?Array}
         * @private
         */
        Object.defineProperty(this, '_array', { value: null, writable: true, configurable: true });
        /**
         * Cached array for the `keyArray()` method - will be reset to `null` whenever `set()` or `delete()` are called
         * @name Collection#_keyArray
         * @type {?Array}
         * @private
         */
        Object.defineProperty(this, '_keyArray', { value: null, writable: true, configurable: true });
    }
    /**
     * Identical to [Map.get()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get).
     * Gets an element with the specified key, and returns its value, or `undefined` if the element does not exist.
     * @param {*} key - The key to get from this collection
     * @returns {* | undefined}
     */
    get(key) {
        return super.get(key);
    }
    /**
     * Identical to [Map.set()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set).
     * Sets a new element in the collection with the specified key and value.
     * @param {*} key - The key of the element to add
     * @param {*} value - The value of the element to add
     * @returns {Collection}
     */
    set(key, value) {
        this._array = null;
        this._keyArray = null;
        return super.set(key, value);
    }
    /**
     * Identical to [Map.has()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has).
     * Checks if an element exists in the collection.
     * @param {*} key - The key of the element to check for
     * @returns {boolean} `true` if the element exists, `false` if it does not exist.
     */
    has(key) {
        return super.has(key);
    }
    /**
     * Identical to [Map.delete()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete).
     * Deletes an element from the collection.
     * @param {*} key - The key to delete from the collection
     * @returns {boolean} `true` if the element was removed, `false` if the element does not exist.
     */
    delete(key) {
        this._array = null;
        this._keyArray = null;
        return super.delete(key);
    }
    /**
     * Identical to [Map.clear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear).
     * Removes all elements from the collection.
     * @returns {undefined}
     */
    clear() {
        return super.clear();
    }
    /**
     * Creates an ordered array of the values of this collection, and caches it internally. The array will only be
     * reconstructed if an item is added to or removed from the collection, or if you change the length of the array
     * itself. If you don't want this caching behavior, use `[...collection.values()]` or
     * `Array.from(collection.values())` instead.
     * @returns {Array}
     */
    array() {
        if (!this._array || this._array.length !== this.size)
            this._array = [...this.values()];
        return this._array;
    }
    /**
     * Creates an ordered array of the keys of this collection, and caches it internally. The array will only be
     * reconstructed if an item is added to or removed from the collection, or if you change the length of the array
     * itself. If you don't want this caching behavior, use `[...collection.keys()]` or
     * `Array.from(collection.keys())` instead.
     * @returns {Array}
     */
    keyArray() {
        if (!this._keyArray || this._keyArray.length !== this.size)
            this._keyArray = [...this.keys()];
        return this._keyArray;
    }
    first(amount) {
        if (typeof amount === 'undefined')
            return this.values().next().value;
        if (amount < 0)
            return this.last(amount * -1);
        amount = Math.min(this.size, amount);
        const iter = this.values();
        return Array.from({ length: amount }, () => iter.next().value);
    }
    firstKey(amount) {
        if (typeof amount === 'undefined')
            return this.keys().next().value;
        if (amount < 0)
            return this.lastKey(amount * -1);
        amount = Math.min(this.size, amount);
        const iter = this.keys();
        return Array.from({ length: amount }, () => iter.next().value);
    }
    last(amount) {
        const arr = this.array();
        if (typeof amount === 'undefined')
            return arr[arr.length - 1];
        if (amount < 0)
            return this.first(amount * -1);
        if (!amount)
            return [];
        return arr.slice(-amount);
    }
    lastKey(amount) {
        const arr = this.keyArray();
        if (typeof amount === 'undefined')
            return arr[arr.length - 1];
        if (amount < 0)
            return this.firstKey(amount * -1);
        if (!amount)
            return [];
        return arr.slice(-amount);
    }
    random(amount) {
        let arr = this.array();
        if (typeof amount === 'undefined')
            return arr[Math.floor(Math.random() * arr.length)];
        if (arr.length === 0 || !amount)
            return [];
        arr = arr.slice();
        return Array.from({ length: amount }, () => arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
    }
    randomKey(amount) {
        let arr = this.keyArray();
        if (typeof amount === 'undefined')
            return arr[Math.floor(Math.random() * arr.length)];
        if (arr.length === 0 || !amount)
            return [];
        arr = arr.slice();
        return Array.from({ length: amount }, () => arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
    }
    find(fn, thisArg) {
        if (typeof thisArg !== 'undefined')
            fn = fn.bind(thisArg);
        for (const [key, val] of this) {
            if (fn(val, key, this))
                return val;
        }
        return undefined;
    }
    findKey(fn, thisArg) {
        if (typeof thisArg !== 'undefined')
            fn = fn.bind(thisArg);
        for (const [key, val] of this) {
            if (fn(val, key, this))
                return key;
        }
        return undefined;
    }
    sweep(fn, thisArg) {
        if (typeof thisArg !== 'undefined')
            fn = fn.bind(thisArg);
        const previousSize = this.size;
        for (const [key, val] of this) {
            if (fn(val, key, this))
                this.delete(key);
        }
        return previousSize - this.size;
    }
    filter(fn, thisArg) {
        if (typeof thisArg !== 'undefined')
            fn = fn.bind(thisArg);
        const results = new this.constructor[Symbol.species]();
        for (const [key, val] of this) {
            if (fn(val, key, this))
                results.set(key, val);
        }
        return results;
    }
    partition(fn, thisArg) {
        if (typeof thisArg !== 'undefined')
            fn = fn.bind(thisArg);
        // TODO: consider removing the <K, V> from the constructors after TS 3.7.0 is released, as it infers it
        const results = [new this.constructor[Symbol.species](), new this.constructor[Symbol.species]()];
        for (const [key, val] of this) {
            if (fn(val, key, this)) {
                results[0].set(key, val);
            }
            else {
                results[1].set(key, val);
            }
        }
        return results;
    }
    flatMap(fn, thisArg) {
        const collections = this.map(fn, thisArg);
        return new this.constructor[Symbol.species]().concat(...collections);
    }
    map(fn, thisArg) {
        if (typeof thisArg !== 'undefined')
            fn = fn.bind(thisArg);
        const iter = this.entries();
        return Array.from({ length: this.size }, () => {
            const [key, value] = iter.next().value;
            return fn(value, key, this);
        });
    }
    mapValues(fn, thisArg) {
        if (typeof thisArg !== 'undefined')
            fn = fn.bind(thisArg);
        const coll = new this.constructor[Symbol.species]();
        for (const [key, val] of this)
            coll.set(key, fn(val, key, this));
        return coll;
    }
    some(fn, thisArg) {
        if (typeof thisArg !== 'undefined')
            fn = fn.bind(thisArg);
        for (const [key, val] of this) {
            if (fn(val, key, this))
                return true;
        }
        return false;
    }
    every(fn, thisArg) {
        if (typeof thisArg !== 'undefined')
            fn = fn.bind(thisArg);
        for (const [key, val] of this) {
            if (!fn(val, key, this))
                return false;
        }
        return true;
    }
    /**
     * Applies a function to produce a single value. Identical in behavior to
     * [Array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).
     * @param {Function} fn Function used to reduce, taking four arguments; `accumulator`, `currentValue`, `currentKey`,
     * and `collection`
     * @param {*} [initialValue] Starting value for the accumulator
     * @returns {*}
     * @example collection.reduce((acc, guild) => acc + guild.memberCount, 0);
     */
    reduce(fn, initialValue) {
        let accumulator;
        if (typeof initialValue !== 'undefined') {
            accumulator = initialValue;
            for (const [key, val] of this)
                accumulator = fn(accumulator, val, key, this);
            return accumulator;
        }
        let first = true;
        for (const [key, val] of this) {
            if (first) {
                accumulator = val;
                first = false;
                continue;
            }
            accumulator = fn(accumulator, val, key, this);
        }
        // No items iterated.
        if (first) {
            throw new TypeError('Reduce of empty collection with no initial value');
        }
        return accumulator;
    }
    each(fn, thisArg) {
        this.forEach(fn, thisArg);
        return this;
    }
    tap(fn, thisArg) {
        if (typeof thisArg !== 'undefined')
            fn = fn.bind(thisArg);
        fn(this);
        return this;
    }
    /**
     * Creates an identical shallow copy of this collection.
     * @returns {Collection}
     * @example const newColl = someColl.clone();
     */
    clone() {
        return new this.constructor[Symbol.species](this);
    }
    /**
     * Combines this collection with others into a new collection. None of the source collections are modified.
     * @param {...Collection} collections Collections to merge
     * @returns {Collection}
     * @example const newColl = someColl.concat(someOtherColl, anotherColl, ohBoyAColl);
     */
    concat(...collections) {
        const newColl = this.clone();
        for (const coll of collections) {
            for (const [key, val] of coll)
                newColl.set(key, val);
        }
        return newColl;
    }
    /**
     * Checks if this collection shares identical items with another.
     * This is different to checking for equality using equal-signs, because
     * the collections may be different objects, but contain the same data.
     * @param {Collection} collection Collection to compare with
     * @returns {boolean} Whether the collections have identical contents
     */
    equals(collection) {
        if (!collection)
            return false;
        if (this === collection)
            return true;
        if (this.size !== collection.size)
            return false;
        for (const [key, value] of this) {
            if (!collection.has(key) || value !== collection.get(key)) {
                return false;
            }
        }
        return true;
    }
    /**
     * The sort method sorts the items of a collection in place and returns it.
     * The sort is not necessarily stable in Node 10 or older.
     * The default sort order is according to string Unicode code points.
     * @param {Function} [compareFunction] Specifies a function that defines the sort order.
     * If omitted, the collection is sorted according to each character's Unicode code point value,
     * according to the string conversion of each element.
     * @returns {Collection}
     * @example collection.sort((userA, userB) => userA.createdTimestamp - userB.createdTimestamp);
     */
    sort(compareFunction = (x, y) => Number(x > y) || Number(x === y) - 1) {
        const entries = [...this.entries()];
        entries.sort((a, b) => compareFunction(a[1], b[1], a[0], b[0]));
        // Perform clean-up
        super.clear();
        this._array = null;
        this._keyArray = null;
        // Set the new entries
        for (const [k, v] of entries) {
            super.set(k, v);
        }
        return this;
    }
    /**
     * The intersect method returns a new structure containing items where the keys are present in both original structures.
     * @param {Collection} other The other Collection to filter against
     * @returns {Collection}
     */
    intersect(other) {
        return other.filter((_, k) => this.has(k));
    }
    /**
     * The difference method returns a new structure containing items where the key is present in one of the original structures but not the other.
     * @param {Collection} other The other Collection to filter against
     * @returns {Collection}
     */
    difference(other) {
        return other.filter((_, k) => !this.has(k)).concat(this.filter((_, k) => !other.has(k)));
    }
    /**
     * The sorted method sorts the items of a collection and returns it.
     * The sort is not necessarily stable in Node 10 or older.
     * The default sort order is according to string Unicode code points.
     * @param {Function} [compareFunction] Specifies a function that defines the sort order.
     * If omitted, the collection is sorted according to each character's Unicode code point value,
     * according to the string conversion of each element.
     * @returns {Collection}
     * @example collection.sorted((userA, userB) => userA.createdTimestamp - userB.createdTimestamp);
     */
    sorted(compareFunction = (x, y) => Number(x > y) || Number(x === y) - 1) {
        return new this.constructor[Symbol.species]([...this.entries()])
            .sort((av, bv, ak, bk) => compareFunction(av, bv, ak, bk));
    }
}
exports.Collection = Collection;
Collection.default = Collection;
module.exports = Collection;
exports.default = Collection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBUUE7Ozs7O0dBS0c7QUFDSCxNQUFNLFVBQWlCLFNBQVEsR0FBUztJQU12QyxZQUFtQixPQUErQztRQUNqRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFZjs7Ozs7V0FLRztRQUNILE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUUzRjs7Ozs7V0FLRztRQUNILE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxHQUFHLENBQUMsR0FBTTtRQUNoQixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLEdBQUcsQ0FBQyxHQUFNLEVBQUUsS0FBUTtRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLEdBQUcsQ0FBQyxHQUFNO1FBQ2hCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxNQUFNLENBQUMsR0FBTTtRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxLQUFLO1FBQ1gsT0FBTyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLEtBQUs7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsSUFBSTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksUUFBUTtRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDOUYsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7SUFVTSxLQUFLLENBQUMsTUFBZTtRQUMzQixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVc7WUFBRSxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDckUsSUFBSSxNQUFNLEdBQUcsQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzQixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsR0FBTSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFVTSxRQUFRLENBQUMsTUFBZTtRQUM5QixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVc7WUFBRSxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDbkUsSUFBSSxNQUFNLEdBQUcsQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsR0FBTSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFXTSxJQUFJLENBQUMsTUFBZTtRQUMxQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekIsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXO1lBQUUsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLE1BQU0sR0FBRyxDQUFDO1lBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFDdkIsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQVdNLE9BQU8sQ0FBQyxNQUFlO1FBQzdCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVc7WUFBRSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlELElBQUksTUFBTSxHQUFHLENBQUM7WUFBRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPLEVBQUUsQ0FBQztRQUN2QixPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBVU0sTUFBTSxDQUFDLE1BQWU7UUFDNUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVztZQUFFLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFDM0MsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsR0FBTSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBVU0sU0FBUyxDQUFDLE1BQWU7UUFDL0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFCLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVztZQUFFLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTyxFQUFFLENBQUM7UUFDM0MsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsR0FBTSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBZU0sSUFBSSxDQUFDLEVBQW1ELEVBQUUsT0FBaUI7UUFDakYsSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXO1lBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUQsS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUM5QixJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztnQkFBRSxPQUFPLEdBQUcsQ0FBQztTQUNuQztRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ2xCLENBQUM7SUFhTSxPQUFPLENBQUMsRUFBbUQsRUFBRSxPQUFpQjtRQUNwRixJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVc7WUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxRCxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQzlCLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO2dCQUFFLE9BQU8sR0FBRyxDQUFDO1NBQ25DO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbEIsQ0FBQztJQVVNLEtBQUssQ0FBQyxFQUFtRCxFQUFFLE9BQWlCO1FBQ2xGLElBQUksT0FBTyxPQUFPLEtBQUssV0FBVztZQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDL0IsS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUM5QixJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztnQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBYU0sTUFBTSxDQUFDLEVBQW1ELEVBQUUsT0FBaUI7UUFDbkYsSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXO1lBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBZ0IsQ0FBQztRQUNyRSxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQzlCLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDaEIsQ0FBQztJQVlNLFNBQVMsQ0FBQyxFQUFtRCxFQUFFLE9BQWlCO1FBQ3RGLElBQUksT0FBTyxPQUFPLEtBQUssV0FBVztZQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFELHVHQUF1RztRQUN2RyxNQUFNLE9BQU8sR0FBaUIsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFnQixFQUFFLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQWdCLENBQUMsQ0FBQztRQUMzSSxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQzlCLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNOLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ3pCO1NBQ0Q7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNoQixDQUFDO0lBWU0sT0FBTyxDQUFJLEVBQTRELEVBQUUsT0FBaUI7UUFDaEcsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDMUMsT0FBUSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUE2QixDQUFDLE1BQU0sQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFZTSxHQUFHLENBQUksRUFBNkMsRUFBRSxPQUFpQjtRQUM3RSxJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVc7WUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFNLEVBQUU7WUFDaEQsTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBWU0sU0FBUyxDQUFJLEVBQTZDLEVBQUUsT0FBaUI7UUFDbkYsSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXO1lBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBNEIsQ0FBQztRQUM5RSxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSTtZQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDakUsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBWU0sSUFBSSxDQUFDLEVBQW1ELEVBQUUsT0FBaUI7UUFDakYsSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXO1lBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUQsS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUM5QixJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztnQkFBRSxPQUFPLElBQUksQ0FBQztTQUNwQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQVlNLEtBQUssQ0FBQyxFQUFtRCxFQUFFLE9BQWlCO1FBQ2xGLElBQUksT0FBTyxPQUFPLEtBQUssV0FBVztZQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFELEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDOUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQztnQkFBRSxPQUFPLEtBQUssQ0FBQztTQUN0QztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ksTUFBTSxDQUFJLEVBQTZELEVBQUUsWUFBZ0I7UUFDL0YsSUFBSSxXQUFlLENBQUM7UUFFcEIsSUFBSSxPQUFPLFlBQVksS0FBSyxXQUFXLEVBQUU7WUFDeEMsV0FBVyxHQUFHLFlBQVksQ0FBQztZQUMzQixLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSTtnQkFBRSxXQUFXLEdBQUcsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzdFLE9BQU8sV0FBVyxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDOUIsSUFBSSxLQUFLLEVBQUU7Z0JBQ1YsV0FBVyxHQUFHLEdBQW1CLENBQUM7Z0JBQ2xDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ2QsU0FBUzthQUNUO1lBQ0QsV0FBVyxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM5QztRQUVELHFCQUFxQjtRQUNyQixJQUFJLEtBQUssRUFBRTtZQUNWLE1BQU0sSUFBSSxTQUFTLENBQUMsa0RBQWtELENBQUMsQ0FBQztTQUN4RTtRQUVELE9BQU8sV0FBVyxDQUFDO0lBQ3BCLENBQUM7SUFpQk0sSUFBSSxDQUFDLEVBQWdELEVBQUUsT0FBaUI7UUFDOUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFnRCxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3hFLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQWVNLEdBQUcsQ0FBQyxFQUE4QixFQUFFLE9BQWlCO1FBQzNELElBQUksT0FBTyxPQUFPLEtBQUssV0FBVztZQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFELEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNULE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxLQUFLO1FBQ1gsT0FBTyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBUyxDQUFDO0lBQzNELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBQyxHQUFHLFdBQStCO1FBQy9DLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QixLQUFLLE1BQU0sSUFBSSxJQUFJLFdBQVcsRUFBRTtZQUMvQixLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSTtnQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNyRDtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxNQUFNLENBQUMsVUFBNEI7UUFDekMsSUFBSSxDQUFDLFVBQVU7WUFBRSxPQUFPLEtBQUssQ0FBQztRQUM5QixJQUFJLElBQUksS0FBSyxVQUFVO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDckMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxJQUFJO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDaEQsS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRTtZQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLEtBQUssVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDMUQsT0FBTyxLQUFLLENBQUM7YUFDYjtTQUNEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0ksSUFBSSxDQUFDLGtCQUF3RixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3pKLE1BQU0sT0FBTyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBVSxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEUsbUJBQW1CO1FBQ25CLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRCLHNCQUFzQjtRQUN0QixLQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksT0FBTyxFQUFFO1lBQzdCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFNBQVMsQ0FBQyxLQUF1QjtRQUN2QyxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxVQUFVLENBQUMsS0FBdUI7UUFDeEMsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSSxNQUFNLENBQUMsa0JBQXdGLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDM0osT0FBUSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBVTthQUN4RSxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7O0FBSU8sZ0NBQVU7QUFwakJLLGtCQUFPLEdBQXNCLFVBQVUsQ0FBQztBQW1qQmhFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO0FBRTVCLGtCQUFlLFVBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgQ29sbGVjdGlvbkNvbnN0cnVjdG9yIHtcblx0bmV3KCk6IENvbGxlY3Rpb248dW5rbm93biwgdW5rbm93bj47XG5cdG5ldzxLLCBWPihlbnRyaWVzPzogUmVhZG9ubHlBcnJheTxyZWFkb25seSBbSywgVl0+IHwgbnVsbCk6IENvbGxlY3Rpb248SywgVj47XG5cdG5ldzxLLCBWPihpdGVyYWJsZTogSXRlcmFibGU8cmVhZG9ubHkgW0ssIFZdPik6IENvbGxlY3Rpb248SywgVj47XG5cdHJlYWRvbmx5IHByb3RvdHlwZTogQ29sbGVjdGlvbjx1bmtub3duLCB1bmtub3duPjtcblx0cmVhZG9ubHkgW1N5bWJvbC5zcGVjaWVzXTogQ29sbGVjdGlvbkNvbnN0cnVjdG9yO1xufVxuXG4vKipcbiAqIEEgTWFwIHdpdGggYWRkaXRpb25hbCB1dGlsaXR5IG1ldGhvZHMuIFRoaXMgaXMgdXNlZCB0aHJvdWdob3V0IGRpc2NvcmQuanMgcmF0aGVyIHRoYW4gQXJyYXlzIGZvciBhbnl0aGluZyB0aGF0IGhhc1xuICogYW4gSUQsIGZvciBzaWduaWZpY2FudGx5IGltcHJvdmVkIHBlcmZvcm1hbmNlIGFuZCBlYXNlLW9mLXVzZS5cbiAqIEBleHRlbmRzIHtNYXB9XG4gKiBAcHJvcGVydHkge251bWJlcn0gc2l6ZSAtIFRoZSBhbW91bnQgb2YgZWxlbWVudHMgaW4gdGhpcyBjb2xsZWN0aW9uLlxuICovXG5jbGFzcyBDb2xsZWN0aW9uPEssIFY+IGV4dGVuZHMgTWFwPEssIFY+IHtcblx0cHJpdmF0ZSBfYXJyYXkhOiBWW10gfCBudWxsO1xuXHRwcml2YXRlIF9rZXlBcnJheSE6IEtbXSB8IG51bGw7XG5cdHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdDogdHlwZW9mIENvbGxlY3Rpb24gPSBDb2xsZWN0aW9uO1xuXHRwdWJsaWMgWydjb25zdHJ1Y3RvciddOiB0eXBlb2YgQ29sbGVjdGlvbjtcblxuXHRwdWJsaWMgY29uc3RydWN0b3IoZW50cmllcz86IFJlYWRvbmx5QXJyYXk8cmVhZG9ubHkgW0ssIFZdPiB8IG51bGwpIHtcblx0XHRzdXBlcihlbnRyaWVzKTtcblxuXHRcdC8qKlxuXHRcdCAqIENhY2hlZCBhcnJheSBmb3IgdGhlIGBhcnJheSgpYCBtZXRob2QgLSB3aWxsIGJlIHJlc2V0IHRvIGBudWxsYCB3aGVuZXZlciBgc2V0KClgIG9yIGBkZWxldGUoKWAgYXJlIGNhbGxlZFxuXHRcdCAqIEBuYW1lIENvbGxlY3Rpb24jX2FycmF5XG5cdFx0ICogQHR5cGUgez9BcnJheX1cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX2FycmF5JywgeyB2YWx1ZTogbnVsbCwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcblxuXHRcdC8qKlxuXHRcdCAqIENhY2hlZCBhcnJheSBmb3IgdGhlIGBrZXlBcnJheSgpYCBtZXRob2QgLSB3aWxsIGJlIHJlc2V0IHRvIGBudWxsYCB3aGVuZXZlciBgc2V0KClgIG9yIGBkZWxldGUoKWAgYXJlIGNhbGxlZFxuXHRcdCAqIEBuYW1lIENvbGxlY3Rpb24jX2tleUFycmF5XG5cdFx0ICogQHR5cGUgez9BcnJheX1cblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX2tleUFycmF5JywgeyB2YWx1ZTogbnVsbCwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJZGVudGljYWwgdG8gW01hcC5nZXQoKV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTWFwL2dldCkuXG5cdCAqIEdldHMgYW4gZWxlbWVudCB3aXRoIHRoZSBzcGVjaWZpZWQga2V5LCBhbmQgcmV0dXJucyBpdHMgdmFsdWUsIG9yIGB1bmRlZmluZWRgIGlmIHRoZSBlbGVtZW50IGRvZXMgbm90IGV4aXN0LlxuXHQgKiBAcGFyYW0geyp9IGtleSAtIFRoZSBrZXkgdG8gZ2V0IGZyb20gdGhpcyBjb2xsZWN0aW9uXG5cdCAqIEByZXR1cm5zIHsqIHwgdW5kZWZpbmVkfVxuXHQgKi9cblx0cHVibGljIGdldChrZXk6IEspOiBWIHwgdW5kZWZpbmVkIHtcblx0XHRyZXR1cm4gc3VwZXIuZ2V0KGtleSk7XG5cdH1cblxuXHQvKipcblx0ICogSWRlbnRpY2FsIHRvIFtNYXAuc2V0KCldKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hcC9zZXQpLlxuXHQgKiBTZXRzIGEgbmV3IGVsZW1lbnQgaW4gdGhlIGNvbGxlY3Rpb24gd2l0aCB0aGUgc3BlY2lmaWVkIGtleSBhbmQgdmFsdWUuXG5cdCAqIEBwYXJhbSB7Kn0ga2V5IC0gVGhlIGtleSBvZiB0aGUgZWxlbWVudCB0byBhZGRcblx0ICogQHBhcmFtIHsqfSB2YWx1ZSAtIFRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudCB0byBhZGRcblx0ICogQHJldHVybnMge0NvbGxlY3Rpb259XG5cdCAqL1xuXHRwdWJsaWMgc2V0KGtleTogSywgdmFsdWU6IFYpOiB0aGlzIHtcblx0XHR0aGlzLl9hcnJheSA9IG51bGw7XG5cdFx0dGhpcy5fa2V5QXJyYXkgPSBudWxsO1xuXHRcdHJldHVybiBzdXBlci5zZXQoa2V5LCB2YWx1ZSk7XG5cdH1cblxuXHQvKipcblx0ICogSWRlbnRpY2FsIHRvIFtNYXAuaGFzKCldKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hcC9oYXMpLlxuXHQgKiBDaGVja3MgaWYgYW4gZWxlbWVudCBleGlzdHMgaW4gdGhlIGNvbGxlY3Rpb24uXG5cdCAqIEBwYXJhbSB7Kn0ga2V5IC0gVGhlIGtleSBvZiB0aGUgZWxlbWVudCB0byBjaGVjayBmb3Jcblx0ICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgZWxlbWVudCBleGlzdHMsIGBmYWxzZWAgaWYgaXQgZG9lcyBub3QgZXhpc3QuXG5cdCAqL1xuXHRwdWJsaWMgaGFzKGtleTogSyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBzdXBlci5oYXMoa2V5KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJZGVudGljYWwgdG8gW01hcC5kZWxldGUoKV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTWFwL2RlbGV0ZSkuXG5cdCAqIERlbGV0ZXMgYW4gZWxlbWVudCBmcm9tIHRoZSBjb2xsZWN0aW9uLlxuXHQgKiBAcGFyYW0geyp9IGtleSAtIFRoZSBrZXkgdG8gZGVsZXRlIGZyb20gdGhlIGNvbGxlY3Rpb25cblx0ICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgZWxlbWVudCB3YXMgcmVtb3ZlZCwgYGZhbHNlYCBpZiB0aGUgZWxlbWVudCBkb2VzIG5vdCBleGlzdC5cblx0ICovXG5cdHB1YmxpYyBkZWxldGUoa2V5OiBLKTogYm9vbGVhbiB7XG5cdFx0dGhpcy5fYXJyYXkgPSBudWxsO1xuXHRcdHRoaXMuX2tleUFycmF5ID0gbnVsbDtcblx0XHRyZXR1cm4gc3VwZXIuZGVsZXRlKGtleSk7XG5cdH1cblxuXHQvKipcblx0ICogSWRlbnRpY2FsIHRvIFtNYXAuY2xlYXIoKV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTWFwL2NsZWFyKS5cblx0ICogUmVtb3ZlcyBhbGwgZWxlbWVudHMgZnJvbSB0aGUgY29sbGVjdGlvbi5cblx0ICogQHJldHVybnMge3VuZGVmaW5lZH1cblx0ICovXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcblx0XHRyZXR1cm4gc3VwZXIuY2xlYXIoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIG9yZGVyZWQgYXJyYXkgb2YgdGhlIHZhbHVlcyBvZiB0aGlzIGNvbGxlY3Rpb24sIGFuZCBjYWNoZXMgaXQgaW50ZXJuYWxseS4gVGhlIGFycmF5IHdpbGwgb25seSBiZVxuXHQgKiByZWNvbnN0cnVjdGVkIGlmIGFuIGl0ZW0gaXMgYWRkZWQgdG8gb3IgcmVtb3ZlZCBmcm9tIHRoZSBjb2xsZWN0aW9uLCBvciBpZiB5b3UgY2hhbmdlIHRoZSBsZW5ndGggb2YgdGhlIGFycmF5XG5cdCAqIGl0c2VsZi4gSWYgeW91IGRvbid0IHdhbnQgdGhpcyBjYWNoaW5nIGJlaGF2aW9yLCB1c2UgYFsuLi5jb2xsZWN0aW9uLnZhbHVlcygpXWAgb3Jcblx0ICogYEFycmF5LmZyb20oY29sbGVjdGlvbi52YWx1ZXMoKSlgIGluc3RlYWQuXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICovXG5cdHB1YmxpYyBhcnJheSgpOiBWW10ge1xuXHRcdGlmICghdGhpcy5fYXJyYXkgfHwgdGhpcy5fYXJyYXkubGVuZ3RoICE9PSB0aGlzLnNpemUpIHRoaXMuX2FycmF5ID0gWy4uLnRoaXMudmFsdWVzKCldO1xuXHRcdHJldHVybiB0aGlzLl9hcnJheTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIG9yZGVyZWQgYXJyYXkgb2YgdGhlIGtleXMgb2YgdGhpcyBjb2xsZWN0aW9uLCBhbmQgY2FjaGVzIGl0IGludGVybmFsbHkuIFRoZSBhcnJheSB3aWxsIG9ubHkgYmVcblx0ICogcmVjb25zdHJ1Y3RlZCBpZiBhbiBpdGVtIGlzIGFkZGVkIHRvIG9yIHJlbW92ZWQgZnJvbSB0aGUgY29sbGVjdGlvbiwgb3IgaWYgeW91IGNoYW5nZSB0aGUgbGVuZ3RoIG9mIHRoZSBhcnJheVxuXHQgKiBpdHNlbGYuIElmIHlvdSBkb24ndCB3YW50IHRoaXMgY2FjaGluZyBiZWhhdmlvciwgdXNlIGBbLi4uY29sbGVjdGlvbi5rZXlzKCldYCBvclxuXHQgKiBgQXJyYXkuZnJvbShjb2xsZWN0aW9uLmtleXMoKSlgIGluc3RlYWQuXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICovXG5cdHB1YmxpYyBrZXlBcnJheSgpOiBLW10ge1xuXHRcdGlmICghdGhpcy5fa2V5QXJyYXkgfHwgdGhpcy5fa2V5QXJyYXkubGVuZ3RoICE9PSB0aGlzLnNpemUpIHRoaXMuX2tleUFycmF5ID0gWy4uLnRoaXMua2V5cygpXTtcblx0XHRyZXR1cm4gdGhpcy5fa2V5QXJyYXk7XG5cdH1cblxuXHQvKipcblx0ICogT2J0YWlucyB0aGUgZmlyc3QgdmFsdWUocykgaW4gdGhpcyBjb2xsZWN0aW9uLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW2Ftb3VudF0gQW1vdW50IG9mIHZhbHVlcyB0byBvYnRhaW4gZnJvbSB0aGUgYmVnaW5uaW5nXG5cdCAqIEByZXR1cm5zIHsqfEFycmF5PCo+fSBBIHNpbmdsZSB2YWx1ZSBpZiBubyBhbW91bnQgaXMgcHJvdmlkZWQgb3IgYW4gYXJyYXkgb2YgdmFsdWVzLCBzdGFydGluZyBmcm9tIHRoZSBlbmQgaWZcblx0ICogYW1vdW50IGlzIG5lZ2F0aXZlXG5cdCAqL1xuXHRwdWJsaWMgZmlyc3QoKTogViB8IHVuZGVmaW5lZDtcblx0cHVibGljIGZpcnN0KGFtb3VudDogbnVtYmVyKTogVltdO1xuXHRwdWJsaWMgZmlyc3QoYW1vdW50PzogbnVtYmVyKTogViB8IFZbXSB8IHVuZGVmaW5lZCB7XG5cdFx0aWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gdGhpcy52YWx1ZXMoKS5uZXh0KCkudmFsdWU7XG5cdFx0aWYgKGFtb3VudCA8IDApIHJldHVybiB0aGlzLmxhc3QoYW1vdW50ICogLTEpO1xuXHRcdGFtb3VudCA9IE1hdGgubWluKHRoaXMuc2l6ZSwgYW1vdW50KTtcblx0XHRjb25zdCBpdGVyID0gdGhpcy52YWx1ZXMoKTtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogYW1vdW50IH0sICgpOiBWID0+IGl0ZXIubmV4dCgpLnZhbHVlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPYnRhaW5zIHRoZSBmaXJzdCBrZXkocykgaW4gdGhpcyBjb2xsZWN0aW9uLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW2Ftb3VudF0gQW1vdW50IG9mIGtleXMgdG8gb2J0YWluIGZyb20gdGhlIGJlZ2lubmluZ1xuXHQgKiBAcmV0dXJucyB7KnxBcnJheTwqPn0gQSBzaW5nbGUga2V5IGlmIG5vIGFtb3VudCBpcyBwcm92aWRlZCBvciBhbiBhcnJheSBvZiBrZXlzLCBzdGFydGluZyBmcm9tIHRoZSBlbmQgaWZcblx0ICogYW1vdW50IGlzIG5lZ2F0aXZlXG5cdCAqL1xuXHRwdWJsaWMgZmlyc3RLZXkoKTogSyB8IHVuZGVmaW5lZDtcblx0cHVibGljIGZpcnN0S2V5KGFtb3VudDogbnVtYmVyKTogS1tdO1xuXHRwdWJsaWMgZmlyc3RLZXkoYW1vdW50PzogbnVtYmVyKTogSyB8IEtbXSB8IHVuZGVmaW5lZCB7XG5cdFx0aWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gdGhpcy5rZXlzKCkubmV4dCgpLnZhbHVlO1xuXHRcdGlmIChhbW91bnQgPCAwKSByZXR1cm4gdGhpcy5sYXN0S2V5KGFtb3VudCAqIC0xKTtcblx0XHRhbW91bnQgPSBNYXRoLm1pbih0aGlzLnNpemUsIGFtb3VudCk7XG5cdFx0Y29uc3QgaXRlciA9IHRoaXMua2V5cygpO1xuXHRcdHJldHVybiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBhbW91bnQgfSwgKCk6IEsgPT4gaXRlci5uZXh0KCkudmFsdWUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIE9idGFpbnMgdGhlIGxhc3QgdmFsdWUocykgaW4gdGhpcyBjb2xsZWN0aW9uLiBUaGlzIHJlbGllcyBvbiB7QGxpbmsgQ29sbGVjdGlvbiNhcnJheX0sIGFuZCB0aHVzIHRoZSBjYWNoaW5nXG5cdCAqIG1lY2hhbmlzbSBhcHBsaWVzIGhlcmUgYXMgd2VsbC5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFthbW91bnRdIEFtb3VudCBvZiB2YWx1ZXMgdG8gb2J0YWluIGZyb20gdGhlIGVuZFxuXHQgKiBAcmV0dXJucyB7KnxBcnJheTwqPn0gQSBzaW5nbGUgdmFsdWUgaWYgbm8gYW1vdW50IGlzIHByb3ZpZGVkIG9yIGFuIGFycmF5IG9mIHZhbHVlcywgc3RhcnRpbmcgZnJvbSB0aGUgc3RhcnQgaWZcblx0ICogYW1vdW50IGlzIG5lZ2F0aXZlXG5cdCAqL1xuXHRwdWJsaWMgbGFzdCgpOiBWIHwgdW5kZWZpbmVkO1xuXHRwdWJsaWMgbGFzdChhbW91bnQ6IG51bWJlcik6IFZbXTtcblx0cHVibGljIGxhc3QoYW1vdW50PzogbnVtYmVyKTogViB8IFZbXSB8IHVuZGVmaW5lZCB7XG5cdFx0Y29uc3QgYXJyID0gdGhpcy5hcnJheSgpO1xuXHRcdGlmICh0eXBlb2YgYW1vdW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG5cdFx0aWYgKGFtb3VudCA8IDApIHJldHVybiB0aGlzLmZpcnN0KGFtb3VudCAqIC0xKTtcblx0XHRpZiAoIWFtb3VudCkgcmV0dXJuIFtdO1xuXHRcdHJldHVybiBhcnIuc2xpY2UoLWFtb3VudCk7XG5cdH1cblxuXHQvKipcblx0ICogT2J0YWlucyB0aGUgbGFzdCBrZXkocykgaW4gdGhpcyBjb2xsZWN0aW9uLiBUaGlzIHJlbGllcyBvbiB7QGxpbmsgQ29sbGVjdGlvbiNrZXlBcnJheX0sIGFuZCB0aHVzIHRoZSBjYWNoaW5nXG5cdCAqIG1lY2hhbmlzbSBhcHBsaWVzIGhlcmUgYXMgd2VsbC5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFthbW91bnRdIEFtb3VudCBvZiBrZXlzIHRvIG9idGFpbiBmcm9tIHRoZSBlbmRcblx0ICogQHJldHVybnMgeyp8QXJyYXk8Kj59IEEgc2luZ2xlIGtleSBpZiBubyBhbW91bnQgaXMgcHJvdmlkZWQgb3IgYW4gYXJyYXkgb2Yga2V5cywgc3RhcnRpbmcgZnJvbSB0aGUgc3RhcnQgaWZcblx0ICogYW1vdW50IGlzIG5lZ2F0aXZlXG5cdCAqL1xuXHRwdWJsaWMgbGFzdEtleSgpOiBLIHwgdW5kZWZpbmVkO1xuXHRwdWJsaWMgbGFzdEtleShhbW91bnQ6IG51bWJlcik6IEtbXTtcblx0cHVibGljIGxhc3RLZXkoYW1vdW50PzogbnVtYmVyKTogSyB8IEtbXSB8IHVuZGVmaW5lZCB7XG5cdFx0Y29uc3QgYXJyID0gdGhpcy5rZXlBcnJheSgpO1xuXHRcdGlmICh0eXBlb2YgYW1vdW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIGFyclthcnIubGVuZ3RoIC0gMV07XG5cdFx0aWYgKGFtb3VudCA8IDApIHJldHVybiB0aGlzLmZpcnN0S2V5KGFtb3VudCAqIC0xKTtcblx0XHRpZiAoIWFtb3VudCkgcmV0dXJuIFtdO1xuXHRcdHJldHVybiBhcnIuc2xpY2UoLWFtb3VudCk7XG5cdH1cblxuXHQvKipcblx0ICogT2J0YWlucyB1bmlxdWUgcmFuZG9tIHZhbHVlKHMpIGZyb20gdGhpcyBjb2xsZWN0aW9uLiBUaGlzIHJlbGllcyBvbiB7QGxpbmsgQ29sbGVjdGlvbiNhcnJheX0sIGFuZCB0aHVzIHRoZSBjYWNoaW5nXG5cdCAqIG1lY2hhbmlzbSBhcHBsaWVzIGhlcmUgYXMgd2VsbC5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFthbW91bnRdIEFtb3VudCBvZiB2YWx1ZXMgdG8gb2J0YWluIHJhbmRvbWx5XG5cdCAqIEByZXR1cm5zIHsqfEFycmF5PCo+fSBBIHNpbmdsZSB2YWx1ZSBpZiBubyBhbW91bnQgaXMgcHJvdmlkZWQgb3IgYW4gYXJyYXkgb2YgdmFsdWVzXG5cdCAqL1xuXHRwdWJsaWMgcmFuZG9tKCk6IFY7XG5cdHB1YmxpYyByYW5kb20oYW1vdW50OiBudW1iZXIpOiBWW107XG5cdHB1YmxpYyByYW5kb20oYW1vdW50PzogbnVtYmVyKTogViB8IFZbXSB7XG5cdFx0bGV0IGFyciA9IHRoaXMuYXJyYXkoKTtcblx0XHRpZiAodHlwZW9mIGFtb3VudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBhcnJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCldO1xuXHRcdGlmIChhcnIubGVuZ3RoID09PSAwIHx8ICFhbW91bnQpIHJldHVybiBbXTtcblx0XHRhcnIgPSBhcnIuc2xpY2UoKTtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogYW1vdW50IH0sICgpOiBWID0+IGFyci5zcGxpY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCksIDEpWzBdKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPYnRhaW5zIHVuaXF1ZSByYW5kb20ga2V5KHMpIGZyb20gdGhpcyBjb2xsZWN0aW9uLiBUaGlzIHJlbGllcyBvbiB7QGxpbmsgQ29sbGVjdGlvbiNrZXlBcnJheX0sIGFuZCB0aHVzIHRoZSBjYWNoaW5nXG5cdCAqIG1lY2hhbmlzbSBhcHBsaWVzIGhlcmUgYXMgd2VsbC5cblx0ICogQHBhcmFtIHtudW1iZXJ9IFthbW91bnRdIEFtb3VudCBvZiBrZXlzIHRvIG9idGFpbiByYW5kb21seVxuXHQgKiBAcmV0dXJucyB7KnxBcnJheTwqPn0gQSBzaW5nbGUga2V5IGlmIG5vIGFtb3VudCBpcyBwcm92aWRlZCBvciBhbiBhcnJheVxuXHQgKi9cblx0cHVibGljIHJhbmRvbUtleSgpOiBLO1xuXHRwdWJsaWMgcmFuZG9tS2V5KGFtb3VudDogbnVtYmVyKTogS1tdO1xuXHRwdWJsaWMgcmFuZG9tS2V5KGFtb3VudD86IG51bWJlcik6IEsgfCBLW10ge1xuXHRcdGxldCBhcnIgPSB0aGlzLmtleUFycmF5KCk7XG5cdFx0aWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gYXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpXTtcblx0XHRpZiAoYXJyLmxlbmd0aCA9PT0gMCB8fCAhYW1vdW50KSByZXR1cm4gW107XG5cdFx0YXJyID0gYXJyLnNsaWNlKCk7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IGFtb3VudCB9LCAoKTogSyA9PiBhcnIuc3BsaWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpLCAxKVswXSk7XG5cdH1cblxuXHQvKipcblx0ICogU2VhcmNoZXMgZm9yIGEgc2luZ2xlIGl0ZW0gd2hlcmUgdGhlIGdpdmVuIGZ1bmN0aW9uIHJldHVybnMgYSB0cnV0aHkgdmFsdWUuIFRoaXMgYmVoYXZlcyBsaWtlXG5cdCAqIFtBcnJheS5maW5kKCldKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2ZpbmQpLlxuXHQgKiA8d2Fybj5BbGwgY29sbGVjdGlvbnMgdXNlZCBpbiBEaXNjb3JkLmpzIGFyZSBtYXBwZWQgdXNpbmcgdGhlaXIgYGlkYCBwcm9wZXJ0eSwgYW5kIGlmIHlvdSB3YW50IHRvIGZpbmQgYnkgaWQgeW91XG5cdCAqIHNob3VsZCB1c2UgdGhlIGBnZXRgIG1ldGhvZC4gU2VlXG5cdCAqIFtNRE5dKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hcC9nZXQpIGZvciBkZXRhaWxzLjwvd2Fybj5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHRlc3Qgd2l0aCAoc2hvdWxkIHJldHVybiBib29sZWFuKVxuXHQgKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBWYWx1ZSB0byB1c2UgYXMgYHRoaXNgIHdoZW4gZXhlY3V0aW5nIGZ1bmN0aW9uXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKiBAZXhhbXBsZSBjb2xsZWN0aW9uLmZpbmQodXNlciA9PiB1c2VyLnVzZXJuYW1lID09PSAnQm9iJyk7XG5cdCAqL1xuXHRwdWJsaWMgZmluZChmbjogKHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IGJvb2xlYW4pOiBWIHwgdW5kZWZpbmVkO1xuXHRwdWJsaWMgZmluZDxUPihmbjogKHRoaXM6IFQsIHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IGJvb2xlYW4sIHRoaXNBcmc6IFQpOiBWIHwgdW5kZWZpbmVkO1xuXHRwdWJsaWMgZmluZChmbjogKHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IGJvb2xlYW4sIHRoaXNBcmc/OiB1bmtub3duKTogViB8IHVuZGVmaW5lZCB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzQXJnICE9PSAndW5kZWZpbmVkJykgZm4gPSBmbi5iaW5kKHRoaXNBcmcpO1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiB0aGlzKSB7XG5cdFx0XHRpZiAoZm4odmFsLCBrZXksIHRoaXMpKSByZXR1cm4gdmFsO1xuXHRcdH1cblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNlYXJjaGVzIGZvciB0aGUga2V5IG9mIGEgc2luZ2xlIGl0ZW0gd2hlcmUgdGhlIGdpdmVuIGZ1bmN0aW9uIHJldHVybnMgYSB0cnV0aHkgdmFsdWUuIFRoaXMgYmVoYXZlcyBsaWtlXG5cdCAqIFtBcnJheS5maW5kSW5kZXgoKV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvZmluZEluZGV4KSxcblx0ICogYnV0IHJldHVybnMgdGhlIGtleSByYXRoZXIgdGhhbiB0aGUgcG9zaXRpb25hbCBpbmRleC5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHRlc3Qgd2l0aCAoc2hvdWxkIHJldHVybiBib29sZWFuKVxuXHQgKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBWYWx1ZSB0byB1c2UgYXMgYHRoaXNgIHdoZW4gZXhlY3V0aW5nIGZ1bmN0aW9uXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKiBAZXhhbXBsZSBjb2xsZWN0aW9uLmZpbmRLZXkodXNlciA9PiB1c2VyLnVzZXJuYW1lID09PSAnQm9iJyk7XG5cdCAqL1xuXHRwdWJsaWMgZmluZEtleShmbjogKHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IGJvb2xlYW4pOiBLIHwgdW5kZWZpbmVkO1xuXHRwdWJsaWMgZmluZEtleTxUPihmbjogKHRoaXM6IFQsIHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IGJvb2xlYW4sIHRoaXNBcmc6IFQpOiBLIHwgdW5kZWZpbmVkO1xuXHRwdWJsaWMgZmluZEtleShmbjogKHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IGJvb2xlYW4sIHRoaXNBcmc/OiB1bmtub3duKTogSyB8IHVuZGVmaW5lZCB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzQXJnICE9PSAndW5kZWZpbmVkJykgZm4gPSBmbi5iaW5kKHRoaXNBcmcpO1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiB0aGlzKSB7XG5cdFx0XHRpZiAoZm4odmFsLCBrZXksIHRoaXMpKSByZXR1cm4ga2V5O1xuXHRcdH1cblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlbW92ZXMgaXRlbXMgdGhhdCBzYXRpc2Z5IHRoZSBwcm92aWRlZCBmaWx0ZXIgZnVuY3Rpb24uXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEZ1bmN0aW9uIHVzZWQgdG8gdGVzdCAoc2hvdWxkIHJldHVybiBhIGJvb2xlYW4pXG5cdCAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFZhbHVlIHRvIHVzZSBhcyBgdGhpc2Agd2hlbiBleGVjdXRpbmcgZnVuY3Rpb25cblx0ICogQHJldHVybnMge251bWJlcn0gVGhlIG51bWJlciBvZiByZW1vdmVkIGVudHJpZXNcblx0ICovXG5cdHB1YmxpYyBzd2VlcChmbjogKHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IGJvb2xlYW4pOiBudW1iZXI7XG5cdHB1YmxpYyBzd2VlcDxUPihmbjogKHRoaXM6IFQsIHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IGJvb2xlYW4sIHRoaXNBcmc6IFQpOiBudW1iZXI7XG5cdHB1YmxpYyBzd2VlcChmbjogKHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IGJvb2xlYW4sIHRoaXNBcmc/OiB1bmtub3duKTogbnVtYmVyIHtcblx0XHRpZiAodHlwZW9mIHRoaXNBcmcgIT09ICd1bmRlZmluZWQnKSBmbiA9IGZuLmJpbmQodGhpc0FyZyk7XG5cdFx0Y29uc3QgcHJldmlvdXNTaXplID0gdGhpcy5zaXplO1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiB0aGlzKSB7XG5cdFx0XHRpZiAoZm4odmFsLCBrZXksIHRoaXMpKSB0aGlzLmRlbGV0ZShrZXkpO1xuXHRcdH1cblx0XHRyZXR1cm4gcHJldmlvdXNTaXplIC0gdGhpcy5zaXplO1xuXHR9XG5cblx0LyoqXG5cdCAqIElkZW50aWNhbCB0b1xuXHQgKiBbQXJyYXkuZmlsdGVyKCldKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L2ZpbHRlciksXG5cdCAqIGJ1dCByZXR1cm5zIGEgQ29sbGVjdGlvbiBpbnN0ZWFkIG9mIGFuIEFycmF5LlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gdGVzdCB3aXRoIChzaG91bGQgcmV0dXJuIGJvb2xlYW4pXG5cdCAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFZhbHVlIHRvIHVzZSBhcyBgdGhpc2Agd2hlbiBleGVjdXRpbmcgZnVuY3Rpb25cblx0ICogQHJldHVybnMge0NvbGxlY3Rpb259XG5cdCAqIEBleGFtcGxlIGNvbGxlY3Rpb24uZmlsdGVyKHVzZXIgPT4gdXNlci51c2VybmFtZSA9PT0gJ0JvYicpO1xuXHQgKi9cblx0cHVibGljIGZpbHRlcihmbjogKHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IGJvb2xlYW4pOiB0aGlzO1xuXHRwdWJsaWMgZmlsdGVyPFQ+KGZuOiAodGhpczogVCwgdmFsdWU6IFYsIGtleTogSywgY29sbGVjdGlvbjogdGhpcykgPT4gYm9vbGVhbiwgdGhpc0FyZzogVCk6IHRoaXM7XG5cdHB1YmxpYyBmaWx0ZXIoZm46ICh2YWx1ZTogViwga2V5OiBLLCBjb2xsZWN0aW9uOiB0aGlzKSA9PiBib29sZWFuLCB0aGlzQXJnPzogdW5rbm93bik6IHRoaXMge1xuXHRcdGlmICh0eXBlb2YgdGhpc0FyZyAhPT0gJ3VuZGVmaW5lZCcpIGZuID0gZm4uYmluZCh0aGlzQXJnKTtcblx0XHRjb25zdCByZXN1bHRzID0gbmV3IHRoaXMuY29uc3RydWN0b3JbU3ltYm9sLnNwZWNpZXNdPEssIFY+KCkgYXMgdGhpcztcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgdGhpcykge1xuXHRcdFx0aWYgKGZuKHZhbCwga2V5LCB0aGlzKSkgcmVzdWx0cy5zZXQoa2V5LCB2YWwpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0cztcblx0fVxuXG5cdC8qKlxuXHQgKiBQYXJ0aXRpb25zIHRoZSBjb2xsZWN0aW9uIGludG8gdHdvIGNvbGxlY3Rpb25zIHdoZXJlIHRoZSBmaXJzdCBjb2xsZWN0aW9uXG5cdCAqIGNvbnRhaW5zIHRoZSBpdGVtcyB0aGF0IHBhc3NlZCBhbmQgdGhlIHNlY29uZCBjb250YWlucyB0aGUgaXRlbXMgdGhhdCBmYWlsZWQuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEZ1bmN0aW9uIHVzZWQgdG8gdGVzdCAoc2hvdWxkIHJldHVybiBhIGJvb2xlYW4pXG5cdCAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFZhbHVlIHRvIHVzZSBhcyBgdGhpc2Agd2hlbiBleGVjdXRpbmcgZnVuY3Rpb25cblx0ICogQHJldHVybnMge0NvbGxlY3Rpb25bXX1cblx0ICogQGV4YW1wbGUgY29uc3QgW2JpZywgc21hbGxdID0gY29sbGVjdGlvbi5wYXJ0aXRpb24oZ3VpbGQgPT4gZ3VpbGQubWVtYmVyQ291bnQgPiAyNTApO1xuXHQgKi9cblx0cHVibGljIHBhcnRpdGlvbihmbjogKHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IGJvb2xlYW4pOiBbdGhpcywgdGhpc107XG5cdHB1YmxpYyBwYXJ0aXRpb248VD4oZm46ICh0aGlzOiBULCB2YWx1ZTogViwga2V5OiBLLCBjb2xsZWN0aW9uOiB0aGlzKSA9PiBib29sZWFuLCB0aGlzQXJnOiBUKTogW3RoaXMsIHRoaXNdO1xuXHRwdWJsaWMgcGFydGl0aW9uKGZuOiAodmFsdWU6IFYsIGtleTogSywgY29sbGVjdGlvbjogdGhpcykgPT4gYm9vbGVhbiwgdGhpc0FyZz86IHVua25vd24pOiBbdGhpcywgdGhpc10ge1xuXHRcdGlmICh0eXBlb2YgdGhpc0FyZyAhPT0gJ3VuZGVmaW5lZCcpIGZuID0gZm4uYmluZCh0aGlzQXJnKTtcblx0XHQvLyBUT0RPOiBjb25zaWRlciByZW1vdmluZyB0aGUgPEssIFY+IGZyb20gdGhlIGNvbnN0cnVjdG9ycyBhZnRlciBUUyAzLjcuMCBpcyByZWxlYXNlZCwgYXMgaXQgaW5mZXJzIGl0XG5cdFx0Y29uc3QgcmVzdWx0czogW3RoaXMsIHRoaXNdID0gW25ldyB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXTxLLCBWPigpIGFzIHRoaXMsIG5ldyB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXTxLLCBWPigpIGFzIHRoaXNdO1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiB0aGlzKSB7XG5cdFx0XHRpZiAoZm4odmFsLCBrZXksIHRoaXMpKSB7XG5cdFx0XHRcdHJlc3VsdHNbMF0uc2V0KGtleSwgdmFsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdHNbMV0uc2V0KGtleSwgdmFsKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdHM7XG5cdH1cblxuXHQvKipcblx0ICogTWFwcyBlYWNoIGl0ZW0gaW50byBhIENvbGxlY3Rpb24sIHRoZW4gam9pbnMgdGhlIHJlc3VsdHMgaW50byBhIHNpbmdsZSBDb2xsZWN0aW9uLiBJZGVudGljYWwgaW4gYmVoYXZpb3IgdG9cblx0ICogW0FycmF5LmZsYXRNYXAoKV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvZmxhdE1hcCkuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgYSBuZXcgQ29sbGVjdGlvblxuXHQgKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBWYWx1ZSB0byB1c2UgYXMgYHRoaXNgIHdoZW4gZXhlY3V0aW5nIGZ1bmN0aW9uXG5cdCAqIEByZXR1cm5zIHtDb2xsZWN0aW9ufVxuXHQgKiBAZXhhbXBsZSBjb2xsZWN0aW9uLmZsYXRNYXAoZ3VpbGQgPT4gZ3VpbGQubWVtYmVycy5jYWNoZSk7XG5cdCAqL1xuXHRwdWJsaWMgZmxhdE1hcDxUPihmbjogKHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IENvbGxlY3Rpb248SywgVD4pOiBDb2xsZWN0aW9uPEssIFQ+O1xuXHRwdWJsaWMgZmxhdE1hcDxULCBUaGlzPihmbjogKHRoaXM6IFRoaXMsIHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IENvbGxlY3Rpb248SywgVD4sIHRoaXNBcmc6IFRoaXMpOiBDb2xsZWN0aW9uPEssIFQ+O1xuXHRwdWJsaWMgZmxhdE1hcDxUPihmbjogKHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IENvbGxlY3Rpb248SywgVD4sIHRoaXNBcmc/OiB1bmtub3duKTogQ29sbGVjdGlvbjxLLCBUPiB7XG5cdFx0Y29uc3QgY29sbGVjdGlvbnMgPSB0aGlzLm1hcChmbiwgdGhpc0FyZyk7XG5cdFx0cmV0dXJuIChuZXcgdGhpcy5jb25zdHJ1Y3RvcltTeW1ib2wuc3BlY2llc108SywgVD4oKSBhcyBDb2xsZWN0aW9uPEssIFQ+KS5jb25jYXQoLi4uY29sbGVjdGlvbnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1hcHMgZWFjaCBpdGVtIHRvIGFub3RoZXIgdmFsdWUgaW50byBhbiBhcnJheS4gSWRlbnRpY2FsIGluIGJlaGF2aW9yIHRvXG5cdCAqIFtBcnJheS5tYXAoKV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvbWFwKS5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBhbiBlbGVtZW50IG9mIHRoZSBuZXcgYXJyYXksIHRha2luZyB0aHJlZSBhcmd1bWVudHNcblx0ICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVmFsdWUgdG8gdXNlIGFzIGB0aGlzYCB3aGVuIGV4ZWN1dGluZyBmdW5jdGlvblxuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqIEBleGFtcGxlIGNvbGxlY3Rpb24ubWFwKHVzZXIgPT4gdXNlci50YWcpO1xuXHQgKi9cblx0cHVibGljIG1hcDxUPihmbjogKHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IFQpOiBUW107XG5cdHB1YmxpYyBtYXA8VGhpcywgVD4oZm46ICh0aGlzOiBUaGlzLCB2YWx1ZTogViwga2V5OiBLLCBjb2xsZWN0aW9uOiB0aGlzKSA9PiBULCB0aGlzQXJnOiBUaGlzKTogVFtdO1xuXHRwdWJsaWMgbWFwPFQ+KGZuOiAodmFsdWU6IFYsIGtleTogSywgY29sbGVjdGlvbjogdGhpcykgPT4gVCwgdGhpc0FyZz86IHVua25vd24pOiBUW10ge1xuXHRcdGlmICh0eXBlb2YgdGhpc0FyZyAhPT0gJ3VuZGVmaW5lZCcpIGZuID0gZm4uYmluZCh0aGlzQXJnKTtcblx0XHRjb25zdCBpdGVyID0gdGhpcy5lbnRyaWVzKCk7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMuc2l6ZSB9LCAoKTogVCA9PiB7XG5cdFx0XHRjb25zdCBba2V5LCB2YWx1ZV0gPSBpdGVyLm5leHQoKS52YWx1ZTtcblx0XHRcdHJldHVybiBmbih2YWx1ZSwga2V5LCB0aGlzKTtcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNYXBzIGVhY2ggaXRlbSB0byBhbm90aGVyIHZhbHVlIGludG8gYSBjb2xsZWN0aW9uLiBJZGVudGljYWwgaW4gYmVoYXZpb3IgdG9cblx0ICogW0FycmF5Lm1hcCgpXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9tYXApLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0aGF0IHByb2R1Y2VzIGFuIGVsZW1lbnQgb2YgdGhlIG5ldyBjb2xsZWN0aW9uLCB0YWtpbmcgdGhyZWUgYXJndW1lbnRzXG5cdCAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFZhbHVlIHRvIHVzZSBhcyBgdGhpc2Agd2hlbiBleGVjdXRpbmcgZnVuY3Rpb25cblx0ICogQHJldHVybnMge0NvbGxlY3Rpb259XG5cdCAqIEBleGFtcGxlIGNvbGxlY3Rpb24ubWFwVmFsdWVzKHVzZXIgPT4gdXNlci50YWcpO1xuXHQgKi9cblx0cHVibGljIG1hcFZhbHVlczxUPihmbjogKHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IFQpOiBDb2xsZWN0aW9uPEssIFQ+O1xuXHRwdWJsaWMgbWFwVmFsdWVzPFRoaXMsIFQ+KGZuOiAodGhpczogVGhpcywgdmFsdWU6IFYsIGtleTogSywgY29sbGVjdGlvbjogdGhpcykgPT4gVCwgdGhpc0FyZzogVGhpcyk6IENvbGxlY3Rpb248SywgVD47XG5cdHB1YmxpYyBtYXBWYWx1ZXM8VD4oZm46ICh2YWx1ZTogViwga2V5OiBLLCBjb2xsZWN0aW9uOiB0aGlzKSA9PiBULCB0aGlzQXJnPzogdW5rbm93bik6IENvbGxlY3Rpb248SywgVD4ge1xuXHRcdGlmICh0eXBlb2YgdGhpc0FyZyAhPT0gJ3VuZGVmaW5lZCcpIGZuID0gZm4uYmluZCh0aGlzQXJnKTtcblx0XHRjb25zdCBjb2xsID0gbmV3IHRoaXMuY29uc3RydWN0b3JbU3ltYm9sLnNwZWNpZXNdPEssIFQ+KCkgYXMgQ29sbGVjdGlvbjxLLCBUPjtcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgdGhpcykgY29sbC5zZXQoa2V5LCBmbih2YWwsIGtleSwgdGhpcykpO1xuXHRcdHJldHVybiBjb2xsO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiB0aGVyZSBleGlzdHMgYW4gaXRlbSB0aGF0IHBhc3NlcyBhIHRlc3QuIElkZW50aWNhbCBpbiBiZWhhdmlvciB0b1xuXHQgKiBbQXJyYXkuc29tZSgpXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9zb21lKS5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gdXNlZCB0byB0ZXN0IChzaG91bGQgcmV0dXJuIGEgYm9vbGVhbilcblx0ICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVmFsdWUgdG8gdXNlIGFzIGB0aGlzYCB3aGVuIGV4ZWN1dGluZyBmdW5jdGlvblxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICogQGV4YW1wbGUgY29sbGVjdGlvbi5zb21lKHVzZXIgPT4gdXNlci5kaXNjcmltaW5hdG9yID09PSAnMDAwMCcpO1xuXHQgKi9cblx0cHVibGljIHNvbWUoZm46ICh2YWx1ZTogViwga2V5OiBLLCBjb2xsZWN0aW9uOiB0aGlzKSA9PiBib29sZWFuKTogYm9vbGVhbjtcblx0cHVibGljIHNvbWU8VD4oZm46ICh0aGlzOiBULCB2YWx1ZTogViwga2V5OiBLLCBjb2xsZWN0aW9uOiB0aGlzKSA9PiBib29sZWFuLCB0aGlzQXJnOiBUKTogYm9vbGVhbjtcblx0cHVibGljIHNvbWUoZm46ICh2YWx1ZTogViwga2V5OiBLLCBjb2xsZWN0aW9uOiB0aGlzKSA9PiBib29sZWFuLCB0aGlzQXJnPzogdW5rbm93bik6IGJvb2xlYW4ge1xuXHRcdGlmICh0eXBlb2YgdGhpc0FyZyAhPT0gJ3VuZGVmaW5lZCcpIGZuID0gZm4uYmluZCh0aGlzQXJnKTtcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgdGhpcykge1xuXHRcdFx0aWYgKGZuKHZhbCwga2V5LCB0aGlzKSkgcmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgYWxsIGl0ZW1zIHBhc3NlcyBhIHRlc3QuIElkZW50aWNhbCBpbiBiZWhhdmlvciB0b1xuXHQgKiBbQXJyYXkuZXZlcnkoKV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvZXZlcnkpLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB1c2VkIHRvIHRlc3QgKHNob3VsZCByZXR1cm4gYSBib29sZWFuKVxuXHQgKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBWYWx1ZSB0byB1c2UgYXMgYHRoaXNgIHdoZW4gZXhlY3V0aW5nIGZ1bmN0aW9uXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKiBAZXhhbXBsZSBjb2xsZWN0aW9uLmV2ZXJ5KHVzZXIgPT4gIXVzZXIuYm90KTtcblx0ICovXG5cdHB1YmxpYyBldmVyeShmbjogKHZhbHVlOiBWLCBrZXk6IEssIGNvbGxlY3Rpb246IHRoaXMpID0+IGJvb2xlYW4pOiBib29sZWFuO1xuXHRwdWJsaWMgZXZlcnk8VD4oZm46ICh0aGlzOiBULCB2YWx1ZTogViwga2V5OiBLLCBjb2xsZWN0aW9uOiB0aGlzKSA9PiBib29sZWFuLCB0aGlzQXJnOiBUKTogYm9vbGVhbjtcblx0cHVibGljIGV2ZXJ5KGZuOiAodmFsdWU6IFYsIGtleTogSywgY29sbGVjdGlvbjogdGhpcykgPT4gYm9vbGVhbiwgdGhpc0FyZz86IHVua25vd24pOiBib29sZWFuIHtcblx0XHRpZiAodHlwZW9mIHRoaXNBcmcgIT09ICd1bmRlZmluZWQnKSBmbiA9IGZuLmJpbmQodGhpc0FyZyk7XG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWxdIG9mIHRoaXMpIHtcblx0XHRcdGlmICghZm4odmFsLCBrZXksIHRoaXMpKSByZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFwcGxpZXMgYSBmdW5jdGlvbiB0byBwcm9kdWNlIGEgc2luZ2xlIHZhbHVlLiBJZGVudGljYWwgaW4gYmVoYXZpb3IgdG9cblx0ICogW0FycmF5LnJlZHVjZSgpXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9yZWR1Y2UpLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB1c2VkIHRvIHJlZHVjZSwgdGFraW5nIGZvdXIgYXJndW1lbnRzOyBgYWNjdW11bGF0b3JgLCBgY3VycmVudFZhbHVlYCwgYGN1cnJlbnRLZXlgLFxuXHQgKiBhbmQgYGNvbGxlY3Rpb25gXG5cdCAqIEBwYXJhbSB7Kn0gW2luaXRpYWxWYWx1ZV0gU3RhcnRpbmcgdmFsdWUgZm9yIHRoZSBhY2N1bXVsYXRvclxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICogQGV4YW1wbGUgY29sbGVjdGlvbi5yZWR1Y2UoKGFjYywgZ3VpbGQpID0+IGFjYyArIGd1aWxkLm1lbWJlckNvdW50LCAwKTtcblx0ICovXG5cdHB1YmxpYyByZWR1Y2U8VD4oZm46IChhY2N1bXVsYXRvcjogVCwgdmFsdWU6IFYsIGtleTogSywgY29sbGVjdGlvbjogdGhpcykgPT4gVCwgaW5pdGlhbFZhbHVlPzogVCk6IFQge1xuXHRcdGxldCBhY2N1bXVsYXRvciE6IFQ7XG5cblx0XHRpZiAodHlwZW9mIGluaXRpYWxWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGFjY3VtdWxhdG9yID0gaW5pdGlhbFZhbHVlO1xuXHRcdFx0Zm9yIChjb25zdCBba2V5LCB2YWxdIG9mIHRoaXMpIGFjY3VtdWxhdG9yID0gZm4oYWNjdW11bGF0b3IsIHZhbCwga2V5LCB0aGlzKTtcblx0XHRcdHJldHVybiBhY2N1bXVsYXRvcjtcblx0XHR9XG5cdFx0bGV0IGZpcnN0ID0gdHJ1ZTtcblx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgdGhpcykge1xuXHRcdFx0aWYgKGZpcnN0KSB7XG5cdFx0XHRcdGFjY3VtdWxhdG9yID0gdmFsIGFzIHVua25vd24gYXMgVDtcblx0XHRcdFx0Zmlyc3QgPSBmYWxzZTtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRhY2N1bXVsYXRvciA9IGZuKGFjY3VtdWxhdG9yLCB2YWwsIGtleSwgdGhpcyk7XG5cdFx0fVxuXG5cdFx0Ly8gTm8gaXRlbXMgaXRlcmF0ZWQuXG5cdFx0aWYgKGZpcnN0KSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdSZWR1Y2Ugb2YgZW1wdHkgY29sbGVjdGlvbiB3aXRoIG5vIGluaXRpYWwgdmFsdWUnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYWNjdW11bGF0b3I7XG5cdH1cblxuXHQvKipcblx0ICogSWRlbnRpY2FsIHRvXG5cdCAqIFtNYXAuZm9yRWFjaCgpXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9NYXAvZm9yRWFjaCksXG5cdCAqIGJ1dCByZXR1cm5zIHRoZSBjb2xsZWN0aW9uIGluc3RlYWQgb2YgdW5kZWZpbmVkLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBGdW5jdGlvbiB0byBleGVjdXRlIGZvciBlYWNoIGVsZW1lbnRcblx0ICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVmFsdWUgdG8gdXNlIGFzIGB0aGlzYCB3aGVuIGV4ZWN1dGluZyBmdW5jdGlvblxuXHQgKiBAcmV0dXJucyB7Q29sbGVjdGlvbn1cblx0ICogQGV4YW1wbGVcblx0ICogY29sbGVjdGlvblxuXHQgKiAgLmVhY2godXNlciA9PiBjb25zb2xlLmxvZyh1c2VyLnVzZXJuYW1lKSlcblx0ICogIC5maWx0ZXIodXNlciA9PiB1c2VyLmJvdClcblx0ICogIC5lYWNoKHVzZXIgPT4gY29uc29sZS5sb2codXNlci51c2VybmFtZSkpO1xuXHQgKi9cblx0cHVibGljIGVhY2goZm46ICh2YWx1ZTogViwga2V5OiBLLCBjb2xsZWN0aW9uOiB0aGlzKSA9PiB2b2lkKTogdGhpcztcblx0cHVibGljIGVhY2g8VD4oZm46ICh0aGlzOiBULCB2YWx1ZTogViwga2V5OiBLLCBjb2xsZWN0aW9uOiB0aGlzKSA9PiB2b2lkLCB0aGlzQXJnOiBUKTogdGhpcztcblx0cHVibGljIGVhY2goZm46ICh2YWx1ZTogViwga2V5OiBLLCBjb2xsZWN0aW9uOiB0aGlzKSA9PiB2b2lkLCB0aGlzQXJnPzogdW5rbm93bik6IHRoaXMge1xuXHRcdHRoaXMuZm9yRWFjaChmbiBhcyAodmFsdWU6IFYsIGtleTogSywgbWFwOiBNYXA8SywgVj4pID0+IHZvaWQsIHRoaXNBcmcpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJ1bnMgYSBmdW5jdGlvbiBvbiB0aGUgY29sbGVjdGlvbiBhbmQgcmV0dXJucyB0aGUgY29sbGVjdGlvbi5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gdG8gZXhlY3V0ZVxuXHQgKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBWYWx1ZSB0byB1c2UgYXMgYHRoaXNgIHdoZW4gZXhlY3V0aW5nIGZ1bmN0aW9uXG5cdCAqIEByZXR1cm5zIHtDb2xsZWN0aW9ufVxuXHQgKiBAZXhhbXBsZVxuXHQgKiBjb2xsZWN0aW9uXG5cdCAqICAudGFwKGNvbGwgPT4gY29uc29sZS5sb2coY29sbC5zaXplKSlcblx0ICogIC5maWx0ZXIodXNlciA9PiB1c2VyLmJvdClcblx0ICogIC50YXAoY29sbCA9PiBjb25zb2xlLmxvZyhjb2xsLnNpemUpKVxuXHQgKi9cblx0cHVibGljIHRhcChmbjogKGNvbGxlY3Rpb246IHRoaXMpID0+IHZvaWQpOiB0aGlzO1xuXHRwdWJsaWMgdGFwPFQ+KGZuOiAodGhpczogVCwgY29sbGVjdGlvbjogdGhpcykgPT4gdm9pZCwgdGhpc0FyZzogVCk6IHRoaXM7XG5cdHB1YmxpYyB0YXAoZm46IChjb2xsZWN0aW9uOiB0aGlzKSA9PiB2b2lkLCB0aGlzQXJnPzogdW5rbm93bik6IHRoaXMge1xuXHRcdGlmICh0eXBlb2YgdGhpc0FyZyAhPT0gJ3VuZGVmaW5lZCcpIGZuID0gZm4uYmluZCh0aGlzQXJnKTtcblx0XHRmbih0aGlzKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIGlkZW50aWNhbCBzaGFsbG93IGNvcHkgb2YgdGhpcyBjb2xsZWN0aW9uLlxuXHQgKiBAcmV0dXJucyB7Q29sbGVjdGlvbn1cblx0ICogQGV4YW1wbGUgY29uc3QgbmV3Q29sbCA9IHNvbWVDb2xsLmNsb25lKCk7XG5cdCAqL1xuXHRwdWJsaWMgY2xvbmUoKTogdGhpcyB7XG5cdFx0cmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXSh0aGlzKSBhcyB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbWJpbmVzIHRoaXMgY29sbGVjdGlvbiB3aXRoIG90aGVycyBpbnRvIGEgbmV3IGNvbGxlY3Rpb24uIE5vbmUgb2YgdGhlIHNvdXJjZSBjb2xsZWN0aW9ucyBhcmUgbW9kaWZpZWQuXG5cdCAqIEBwYXJhbSB7Li4uQ29sbGVjdGlvbn0gY29sbGVjdGlvbnMgQ29sbGVjdGlvbnMgdG8gbWVyZ2Vcblx0ICogQHJldHVybnMge0NvbGxlY3Rpb259XG5cdCAqIEBleGFtcGxlIGNvbnN0IG5ld0NvbGwgPSBzb21lQ29sbC5jb25jYXQoc29tZU90aGVyQ29sbCwgYW5vdGhlckNvbGwsIG9oQm95QUNvbGwpO1xuXHQgKi9cblx0cHVibGljIGNvbmNhdCguLi5jb2xsZWN0aW9uczogQ29sbGVjdGlvbjxLLCBWPltdKTogdGhpcyB7XG5cdFx0Y29uc3QgbmV3Q29sbCA9IHRoaXMuY2xvbmUoKTtcblx0XHRmb3IgKGNvbnN0IGNvbGwgb2YgY29sbGVjdGlvbnMpIHtcblx0XHRcdGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBjb2xsKSBuZXdDb2xsLnNldChrZXksIHZhbCk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXdDb2xsO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiB0aGlzIGNvbGxlY3Rpb24gc2hhcmVzIGlkZW50aWNhbCBpdGVtcyB3aXRoIGFub3RoZXIuXG5cdCAqIFRoaXMgaXMgZGlmZmVyZW50IHRvIGNoZWNraW5nIGZvciBlcXVhbGl0eSB1c2luZyBlcXVhbC1zaWducywgYmVjYXVzZVxuXHQgKiB0aGUgY29sbGVjdGlvbnMgbWF5IGJlIGRpZmZlcmVudCBvYmplY3RzLCBidXQgY29udGFpbiB0aGUgc2FtZSBkYXRhLlxuXHQgKiBAcGFyYW0ge0NvbGxlY3Rpb259IGNvbGxlY3Rpb24gQ29sbGVjdGlvbiB0byBjb21wYXJlIHdpdGhcblx0ICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgdGhlIGNvbGxlY3Rpb25zIGhhdmUgaWRlbnRpY2FsIGNvbnRlbnRzXG5cdCAqL1xuXHRwdWJsaWMgZXF1YWxzKGNvbGxlY3Rpb246IENvbGxlY3Rpb248SywgVj4pOiBib29sZWFuIHtcblx0XHRpZiAoIWNvbGxlY3Rpb24pIHJldHVybiBmYWxzZTtcblx0XHRpZiAodGhpcyA9PT0gY29sbGVjdGlvbikgcmV0dXJuIHRydWU7XG5cdFx0aWYgKHRoaXMuc2l6ZSAhPT0gY29sbGVjdGlvbi5zaXplKSByZXR1cm4gZmFsc2U7XG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgdGhpcykge1xuXHRcdFx0aWYgKCFjb2xsZWN0aW9uLmhhcyhrZXkpIHx8IHZhbHVlICE9PSBjb2xsZWN0aW9uLmdldChrZXkpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIHNvcnQgbWV0aG9kIHNvcnRzIHRoZSBpdGVtcyBvZiBhIGNvbGxlY3Rpb24gaW4gcGxhY2UgYW5kIHJldHVybnMgaXQuXG5cdCAqIFRoZSBzb3J0IGlzIG5vdCBuZWNlc3NhcmlseSBzdGFibGUgaW4gTm9kZSAxMCBvciBvbGRlci5cblx0ICogVGhlIGRlZmF1bHQgc29ydCBvcmRlciBpcyBhY2NvcmRpbmcgdG8gc3RyaW5nIFVuaWNvZGUgY29kZSBwb2ludHMuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJlRnVuY3Rpb25dIFNwZWNpZmllcyBhIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyB0aGUgc29ydCBvcmRlci5cblx0ICogSWYgb21pdHRlZCwgdGhlIGNvbGxlY3Rpb24gaXMgc29ydGVkIGFjY29yZGluZyB0byBlYWNoIGNoYXJhY3RlcidzIFVuaWNvZGUgY29kZSBwb2ludCB2YWx1ZSxcblx0ICogYWNjb3JkaW5nIHRvIHRoZSBzdHJpbmcgY29udmVyc2lvbiBvZiBlYWNoIGVsZW1lbnQuXG5cdCAqIEByZXR1cm5zIHtDb2xsZWN0aW9ufVxuXHQgKiBAZXhhbXBsZSBjb2xsZWN0aW9uLnNvcnQoKHVzZXJBLCB1c2VyQikgPT4gdXNlckEuY3JlYXRlZFRpbWVzdGFtcCAtIHVzZXJCLmNyZWF0ZWRUaW1lc3RhbXApO1xuXHQgKi9cblx0cHVibGljIHNvcnQoY29tcGFyZUZ1bmN0aW9uOiAoZmlyc3RWYWx1ZTogViwgc2Vjb25kVmFsdWU6IFYsIGZpcnN0S2V5OiBLLCBzZWNvbmRLZXk6IEspID0+IG51bWJlciA9ICh4LCB5KTogbnVtYmVyID0+IE51bWJlcih4ID4geSkgfHwgTnVtYmVyKHggPT09IHkpIC0gMSk6IHRoaXMge1xuXHRcdGNvbnN0IGVudHJpZXMgPSBbLi4udGhpcy5lbnRyaWVzKCldO1xuXHRcdGVudHJpZXMuc29ydCgoYSwgYik6IG51bWJlciA9PiBjb21wYXJlRnVuY3Rpb24oYVsxXSwgYlsxXSwgYVswXSwgYlswXSkpO1xuXG5cdFx0Ly8gUGVyZm9ybSBjbGVhbi11cFxuXHRcdHN1cGVyLmNsZWFyKCk7XG5cdFx0dGhpcy5fYXJyYXkgPSBudWxsO1xuXHRcdHRoaXMuX2tleUFycmF5ID0gbnVsbDtcblxuXHRcdC8vIFNldCB0aGUgbmV3IGVudHJpZXNcblx0XHRmb3IgKGNvbnN0IFtrLCB2XSBvZiBlbnRyaWVzKSB7XG5cdFx0XHRzdXBlci5zZXQoaywgdik7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBpbnRlcnNlY3QgbWV0aG9kIHJldHVybnMgYSBuZXcgc3RydWN0dXJlIGNvbnRhaW5pbmcgaXRlbXMgd2hlcmUgdGhlIGtleXMgYXJlIHByZXNlbnQgaW4gYm90aCBvcmlnaW5hbCBzdHJ1Y3R1cmVzLlxuXHQgKiBAcGFyYW0ge0NvbGxlY3Rpb259IG90aGVyIFRoZSBvdGhlciBDb2xsZWN0aW9uIHRvIGZpbHRlciBhZ2FpbnN0XG5cdCAqIEByZXR1cm5zIHtDb2xsZWN0aW9ufVxuXHQgKi9cblx0cHVibGljIGludGVyc2VjdChvdGhlcjogQ29sbGVjdGlvbjxLLCBWPik6IENvbGxlY3Rpb248SywgVj4ge1xuXHRcdHJldHVybiBvdGhlci5maWx0ZXIoKF8sIGspID0+IHRoaXMuaGFzKGspKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgZGlmZmVyZW5jZSBtZXRob2QgcmV0dXJucyBhIG5ldyBzdHJ1Y3R1cmUgY29udGFpbmluZyBpdGVtcyB3aGVyZSB0aGUga2V5IGlzIHByZXNlbnQgaW4gb25lIG9mIHRoZSBvcmlnaW5hbCBzdHJ1Y3R1cmVzIGJ1dCBub3QgdGhlIG90aGVyLlxuXHQgKiBAcGFyYW0ge0NvbGxlY3Rpb259IG90aGVyIFRoZSBvdGhlciBDb2xsZWN0aW9uIHRvIGZpbHRlciBhZ2FpbnN0XG5cdCAqIEByZXR1cm5zIHtDb2xsZWN0aW9ufVxuXHQgKi9cblx0cHVibGljIGRpZmZlcmVuY2Uob3RoZXI6IENvbGxlY3Rpb248SywgVj4pOiBDb2xsZWN0aW9uPEssIFY+IHtcblx0XHRyZXR1cm4gb3RoZXIuZmlsdGVyKChfLCBrKSA9PiAhdGhpcy5oYXMoaykpLmNvbmNhdCh0aGlzLmZpbHRlcigoXywgaykgPT4gIW90aGVyLmhhcyhrKSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBzb3J0ZWQgbWV0aG9kIHNvcnRzIHRoZSBpdGVtcyBvZiBhIGNvbGxlY3Rpb24gYW5kIHJldHVybnMgaXQuXG5cdCAqIFRoZSBzb3J0IGlzIG5vdCBuZWNlc3NhcmlseSBzdGFibGUgaW4gTm9kZSAxMCBvciBvbGRlci5cblx0ICogVGhlIGRlZmF1bHQgc29ydCBvcmRlciBpcyBhY2NvcmRpbmcgdG8gc3RyaW5nIFVuaWNvZGUgY29kZSBwb2ludHMuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb21wYXJlRnVuY3Rpb25dIFNwZWNpZmllcyBhIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyB0aGUgc29ydCBvcmRlci5cblx0ICogSWYgb21pdHRlZCwgdGhlIGNvbGxlY3Rpb24gaXMgc29ydGVkIGFjY29yZGluZyB0byBlYWNoIGNoYXJhY3RlcidzIFVuaWNvZGUgY29kZSBwb2ludCB2YWx1ZSxcblx0ICogYWNjb3JkaW5nIHRvIHRoZSBzdHJpbmcgY29udmVyc2lvbiBvZiBlYWNoIGVsZW1lbnQuXG5cdCAqIEByZXR1cm5zIHtDb2xsZWN0aW9ufVxuXHQgKiBAZXhhbXBsZSBjb2xsZWN0aW9uLnNvcnRlZCgodXNlckEsIHVzZXJCKSA9PiB1c2VyQS5jcmVhdGVkVGltZXN0YW1wIC0gdXNlckIuY3JlYXRlZFRpbWVzdGFtcCk7XG5cdCAqL1xuXHRwdWJsaWMgc29ydGVkKGNvbXBhcmVGdW5jdGlvbjogKGZpcnN0VmFsdWU6IFYsIHNlY29uZFZhbHVlOiBWLCBmaXJzdEtleTogSywgc2Vjb25kS2V5OiBLKSA9PiBudW1iZXIgPSAoeCwgeSk6IG51bWJlciA9PiBOdW1iZXIoeCA+IHkpIHx8IE51bWJlcih4ID09PSB5KSAtIDEpOiB0aGlzIHtcblx0XHRyZXR1cm4gKG5ldyB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXShbLi4udGhpcy5lbnRyaWVzKCldKSBhcyB0aGlzKVxuXHRcdFx0LnNvcnQoKGF2LCBidiwgYWssIGJrKSA9PiBjb21wYXJlRnVuY3Rpb24oYXYsIGJ2LCBhaywgYmspKTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbGxlY3Rpb247XG5leHBvcnQgeyBDb2xsZWN0aW9uIH07XG5leHBvcnQgZGVmYXVsdCBDb2xsZWN0aW9uO1xuIl19

/***/ }),

/***/ "./node_modules/@discordjs/form-data/lib/browser.js":
/*!**********************************************************!*\
  !*** ./node_modules/@discordjs/form-data/lib/browser.js ***!
  \**********************************************************/
/***/ ((module) => {

/* eslint-env browser */
module.exports = typeof self == 'object' ? self.FormData : window.FormData;


/***/ }),

/***/ "./node_modules/abort-controller/browser.js":
/*!**************************************************!*\
  !*** ./node_modules/abort-controller/browser.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
/*globals self, window */


/*eslint-disable @mysticatea/prettier */
const { AbortController, AbortSignal } =
    typeof self !== "undefined" ? self :
    typeof window !== "undefined" ? window :
    /* otherwise */ undefined
/*eslint-enable @mysticatea/prettier */

module.exports = AbortController
module.exports.AbortSignal = AbortSignal
module.exports.default = AbortController


/***/ }),

/***/ "./node_modules/discord.js/package.json":
/*!**********************************************!*\
  !*** ./node_modules/discord.js/package.json ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse("{\"_from\":\"discord.js\",\"_id\":\"discord.js@12.5.1\",\"_inBundle\":false,\"_integrity\":\"sha512-VwZkVaUAIOB9mKdca0I5MefPMTQJTNg0qdgi1huF3iwsFwJ0L5s/Y69AQe+iPmjuV6j9rtKoG0Ta0n9vgEIL6w==\",\"_location\":\"/discord.js\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"tag\",\"registry\":true,\"raw\":\"discord.js\",\"name\":\"discord.js\",\"escapedName\":\"discord.js\",\"rawSpec\":\"\",\"saveSpec\":null,\"fetchSpec\":\"latest\"},\"_requiredBy\":[\"#USER\",\"/\"],\"_resolved\":\"https://registry.npmjs.org/discord.js/-/discord.js-12.5.1.tgz\",\"_shasum\":\"992b45753e3815526a279914ccc281d3496f5990\",\"_spec\":\"discord.js\",\"_where\":\"C:\\\\Users\\\\nicho\\\\source\\\\bots\\\\select_star\",\"author\":{\"name\":\"Amish Shah\",\"email\":\"amishshah.2k@gmail.com\"},\"browser\":{\"@discordjs/opus\":false,\"https\":false,\"ws\":false,\"erlpack\":false,\"prism-media\":false,\"opusscript\":false,\"node-opus\":false,\"tweetnacl\":false,\"sodium\":false,\"worker_threads\":false,\"zlib-sync\":false,\"src/sharding/Shard.js\":false,\"src/sharding/ShardClientUtil.js\":false,\"src/sharding/ShardingManager.js\":false,\"src/client/voice/ClientVoiceManager.js\":false,\"src/client/voice/VoiceBroadcast.js\":false,\"src/client/voice/VoiceConnection.js\":false,\"src/client/voice/dispatcher/BroadcastDispatcher.js\":false,\"src/client/voice/dispatcher/StreamDispatcher.js\":false,\"src/client/voice/networking/VoiceUDPClient.js\":false,\"src/client/voice/networking/VoiceWebSocket.js\":false,\"src/client/voice/player/AudioPlayer.js\":false,\"src/client/voice/player/BasePlayer.js\":false,\"src/client/voice/player/BroadcastAudioPlayer.js\":false,\"src/client/voice/receiver/PacketHandler.js\":false,\"src/client/voice/receiver/Receiver.js\":false,\"src/client/voice/util/PlayInterface.js\":false,\"src/client/voice/util/Secretbox.js\":false,\"src/client/voice/util/Silence.js\":false,\"src/client/voice/util/VolumeInterface.js\":false},\"bugs\":{\"url\":\"https://github.com/discordjs/discord.js/issues\"},\"bundleDependencies\":false,\"commitlint\":{\"extends\":[\"@commitlint/config-angular\"],\"rules\":{\"scope-case\":[2,\"always\",\"pascal-case\"],\"type-enum\":[2,\"always\",[\"chore\",\"build\",\"ci\",\"docs\",\"feat\",\"fix\",\"perf\",\"refactor\",\"revert\",\"style\",\"test\"]]}},\"dependencies\":{\"@discordjs/collection\":\"^0.1.6\",\"@discordjs/form-data\":\"^3.0.1\",\"abort-controller\":\"^3.0.0\",\"node-fetch\":\"^2.6.1\",\"prism-media\":\"^1.2.2\",\"setimmediate\":\"^1.0.5\",\"tweetnacl\":\"^1.0.3\",\"ws\":\"^7.3.1\"},\"deprecated\":false,\"description\":\"A powerful library for interacting with the Discord API\",\"devDependencies\":{\"@commitlint/cli\":\"^11.0.0\",\"@commitlint/config-angular\":\"^11.0.0\",\"@types/node\":\"^12.12.6\",\"@types/ws\":\"^7.2.7\",\"cross-env\":\"^7.0.2\",\"discord.js-docgen\":\"git+https://github.com/discordjs/docgen.git\",\"dtslint\":\"^4.0.4\",\"eslint\":\"^7.11.0\",\"eslint-config-prettier\":\"^6.13.0\",\"eslint-plugin-import\":\"^2.22.1\",\"eslint-plugin-prettier\":\"^3.1.4\",\"husky\":\"^4.3.0\",\"jest\":\"^26.6.0\",\"json-filter-loader\":\"^1.0.0\",\"lint-staged\":\"^10.4.2\",\"prettier\":\"^2.1.2\",\"terser-webpack-plugin\":\"^4.2.3\",\"tslint\":\"^6.1.3\",\"typescript\":\"^4.0.3\",\"webpack\":\"^4.44.2\",\"webpack-cli\":\"^3.3.12\"},\"engines\":{\"node\":\">=12.0.0\"},\"exports\":{\".\":[{\"require\":\"./src/index.js\",\"import\":\"./esm/discord.mjs\"},\"./src/index.js\"],\"./esm\":\"./esm/discord.mjs\"},\"homepage\":\"https://github.com/discordjs/discord.js#readme\",\"husky\":{\"hooks\":{\"pre-commit\":\"lint-staged\",\"commit-msg\":\"commitlint -E HUSKY_GIT_PARAMS\"}},\"keywords\":[\"discord\",\"api\",\"bot\",\"client\",\"node\",\"discordapp\"],\"license\":\"Apache-2.0\",\"lint-staged\":{\"*.js\":\"eslint --fix\",\"*.ts\":\"prettier --write\"},\"main\":\"./src/index\",\"name\":\"discord.js\",\"prettier\":{\"singleQuote\":true,\"printWidth\":120,\"trailingComma\":\"all\",\"endOfLine\":\"lf\",\"arrowParens\":\"avoid\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/discordjs/discord.js.git\"},\"runkitExampleFilename\":\"./docs/examples/ping.js\",\"scripts\":{\"build:browser\":\"webpack\",\"docs\":\"docgen --source src --custom docs/index.yml --output docs/docs.json\",\"docs:test\":\"docgen --source src --custom docs/index.yml\",\"lint\":\"eslint src\",\"lint:fix\":\"eslint src --fix\",\"lint:typings\":\"tslint typings/index.d.ts\",\"prepublishOnly\":\"npm run test && cross-env NODE_ENV=production npm run build:browser\",\"prettier\":\"prettier --write src/**/*.js typings/**/*.ts\",\"test\":\"npm run lint && npm run docs:test && npm run lint:typings\",\"test:typescript\":\"tsc\"},\"types\":\"./typings/index.d.ts\",\"unpkg\":\"./webpack/discord.min.js\",\"version\":\"12.5.1\"}");

/***/ }),

/***/ "./node_modules/discord.js/src/WebSocket.js":
/*!**************************************************!*\
  !*** ./node_modules/discord.js/src/WebSocket.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


const { browser } = __webpack_require__(/*! ./util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

let erlpack;

try {
  erlpack = __webpack_require__(/*! erlpack */ "?a56a");
  if (!erlpack.pack) erlpack = null;
} catch {} // eslint-disable-line no-empty

let TextDecoder;

if (browser) {
  TextDecoder = window.TextDecoder; // eslint-disable-line no-undef
  exports.WebSocket = window.WebSocket; // eslint-disable-line no-undef
} else {
  TextDecoder = __webpack_require__(/*! util */ "?0bed").TextDecoder;
  exports.WebSocket = __webpack_require__(/*! ws */ "?98fa");
}

const ab = new TextDecoder();

exports.encoding = erlpack ? 'etf' : 'json';

exports.pack = erlpack ? erlpack.pack : JSON.stringify;

exports.unpack = (data, type) => {
  if (exports.encoding === 'json' || type === 'json') {
    if (typeof data !== 'string') {
      data = ab.decode(data);
    }
    return JSON.parse(data);
  }
  if (!Buffer.isBuffer(data)) data = Buffer.from(new Uint8Array(data));
  return erlpack.unpack(data);
};

exports.create = (gateway, query = {}, ...args) => {
  const [g, q] = gateway.split('?');
  query.encoding = exports.encoding;
  query = new URLSearchParams(query);
  if (q) new URLSearchParams(q).forEach((v, k) => query.set(k, v));
  const ws = new exports.WebSocket(`${g}?${query}`, ...args);
  if (browser) ws.binaryType = 'arraybuffer';
  return ws;
};

for (const state of ['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED']) exports[state] = exports.WebSocket[state];


/***/ }),

/***/ "./node_modules/discord.js/src/client/BaseClient.js":
/*!**********************************************************!*\
  !*** ./node_modules/discord.js/src/client/BaseClient.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
const EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js");
const RESTManager = __webpack_require__(/*! ../rest/RESTManager */ "./node_modules/discord.js/src/rest/RESTManager.js");
const { DefaultOptions } = __webpack_require__(/*! ../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");
const Util = __webpack_require__(/*! ../util/Util */ "./node_modules/discord.js/src/util/Util.js");

/**
 * The base class for all clients.
 * @extends {EventEmitter}
 */
class BaseClient extends EventEmitter {
  constructor(options = {}) {
    super();

    /**
     * Timeouts set by {@link BaseClient#setTimeout} that are still active
     * @type {Set<Timeout>}
     * @private
     */
    this._timeouts = new Set();

    /**
     * Intervals set by {@link BaseClient#setInterval} that are still active
     * @type {Set<Timeout>}
     * @private
     */
    this._intervals = new Set();

    /**
     * Intervals set by {@link BaseClient#setImmediate} that are still active
     * @type {Set<Immediate>}
     * @private
     */
    this._immediates = new Set();

    /**
     * The options the client was instantiated with
     * @type {ClientOptions}
     */
    this.options = Util.mergeDefault(DefaultOptions, options);

    /**
     * The REST manager of the client
     * @type {RESTManager}
     * @private
     */
    this.rest = new RESTManager(this, options._tokenType);
  }

  /**
   * API shortcut
   * @type {Object}
   * @readonly
   * @private
   */
  get api() {
    return this.rest.api;
  }

  /**
   * Destroys all assets used by the base client.
   */
  destroy() {
    for (const t of this._timeouts) this.clearTimeout(t);
    for (const i of this._intervals) this.clearInterval(i);
    for (const i of this._immediates) this.clearImmediate(i);
    this._timeouts.clear();
    this._intervals.clear();
    this._immediates.clear();
  }

  /**
   * Sets a timeout that will be automatically cancelled if the client is destroyed.
   * @param {Function} fn Function to execute
   * @param {number} delay Time to wait before executing (in milliseconds)
   * @param {...*} args Arguments for the function
   * @returns {Timeout}
   */
  setTimeout(fn, delay, ...args) {
    const timeout = setTimeout(() => {
      fn(...args);
      this._timeouts.delete(timeout);
    }, delay);
    this._timeouts.add(timeout);
    return timeout;
  }

  /**
   * Clears a timeout.
   * @param {Timeout} timeout Timeout to cancel
   */
  clearTimeout(timeout) {
    clearTimeout(timeout);
    this._timeouts.delete(timeout);
  }

  /**
   * Sets an interval that will be automatically cancelled if the client is destroyed.
   * @param {Function} fn Function to execute
   * @param {number} delay Time to wait between executions (in milliseconds)
   * @param {...*} args Arguments for the function
   * @returns {Timeout}
   */
  setInterval(fn, delay, ...args) {
    const interval = setInterval(fn, delay, ...args);
    this._intervals.add(interval);
    return interval;
  }

  /**
   * Clears an interval.
   * @param {Timeout} interval Interval to cancel
   */
  clearInterval(interval) {
    clearInterval(interval);
    this._intervals.delete(interval);
  }

  /**
   * Sets an immediate that will be automatically cancelled if the client is destroyed.
   * @param {Function} fn Function to execute
   * @param {...*} args Arguments for the function
   * @returns {Immediate}
   */
  setImmediate(fn, ...args) {
    const immediate = setImmediate(fn, ...args);
    this._immediates.add(immediate);
    return immediate;
  }

  /**
   * Clears an immediate.
   * @param {Immediate} immediate Immediate to cancel
   */
  clearImmediate(immediate) {
    clearImmediate(immediate);
    this._immediates.delete(immediate);
  }

  /**
   * Increments max listeners by one, if they are not zero.
   * @private
   */
  incrementMaxListeners() {
    const maxListeners = this.getMaxListeners();
    if (maxListeners !== 0) {
      this.setMaxListeners(maxListeners + 1);
    }
  }

  /**
   * Decrements max listeners by one, if they are not zero.
   * @private
   */
  decrementMaxListeners() {
    const maxListeners = this.getMaxListeners();
    if (maxListeners !== 0) {
      this.setMaxListeners(maxListeners - 1);
    }
  }

  toJSON(...props) {
    return Util.flatten(this, { domain: false }, ...props);
  }
}

module.exports = BaseClient;


/***/ }),

/***/ "./node_modules/discord.js/src/client/Client.js":
/*!******************************************************!*\
  !*** ./node_modules/discord.js/src/client/Client.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const BaseClient = __webpack_require__(/*! ./BaseClient */ "./node_modules/discord.js/src/client/BaseClient.js");
const ActionsManager = __webpack_require__(/*! ./actions/ActionsManager */ "./node_modules/discord.js/src/client/actions/ActionsManager.js");
const ClientVoiceManager = __webpack_require__(/*! ./voice/ClientVoiceManager */ "?5b33");
const WebSocketManager = __webpack_require__(/*! ./websocket/WebSocketManager */ "./node_modules/discord.js/src/client/websocket/WebSocketManager.js");
const { Error, TypeError, RangeError } = __webpack_require__(/*! ../errors */ "./node_modules/discord.js/src/errors/index.js");
const ChannelManager = __webpack_require__(/*! ../managers/ChannelManager */ "./node_modules/discord.js/src/managers/ChannelManager.js");
const GuildEmojiManager = __webpack_require__(/*! ../managers/GuildEmojiManager */ "./node_modules/discord.js/src/managers/GuildEmojiManager.js");
const GuildManager = __webpack_require__(/*! ../managers/GuildManager */ "./node_modules/discord.js/src/managers/GuildManager.js");
const UserManager = __webpack_require__(/*! ../managers/UserManager */ "./node_modules/discord.js/src/managers/UserManager.js");
const ShardClientUtil = __webpack_require__(/*! ../sharding/ShardClientUtil */ "?e41f");
const ClientApplication = __webpack_require__(/*! ../structures/ClientApplication */ "./node_modules/discord.js/src/structures/ClientApplication.js");
const GuildPreview = __webpack_require__(/*! ../structures/GuildPreview */ "./node_modules/discord.js/src/structures/GuildPreview.js");
const GuildTemplate = __webpack_require__(/*! ../structures/GuildTemplate */ "./node_modules/discord.js/src/structures/GuildTemplate.js");
const Invite = __webpack_require__(/*! ../structures/Invite */ "./node_modules/discord.js/src/structures/Invite.js");
const VoiceRegion = __webpack_require__(/*! ../structures/VoiceRegion */ "./node_modules/discord.js/src/structures/VoiceRegion.js");
const Webhook = __webpack_require__(/*! ../structures/Webhook */ "./node_modules/discord.js/src/structures/Webhook.js");
const Collection = __webpack_require__(/*! ../util/Collection */ "./node_modules/discord.js/src/util/Collection.js");
const { Events, browser, DefaultOptions } = __webpack_require__(/*! ../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");
const DataResolver = __webpack_require__(/*! ../util/DataResolver */ "./node_modules/discord.js/src/util/DataResolver.js");
const Intents = __webpack_require__(/*! ../util/Intents */ "./node_modules/discord.js/src/util/Intents.js");
const Permissions = __webpack_require__(/*! ../util/Permissions */ "./node_modules/discord.js/src/util/Permissions.js");
const Structures = __webpack_require__(/*! ../util/Structures */ "./node_modules/discord.js/src/util/Structures.js");

/**
 * The main hub for interacting with the Discord API, and the starting point for any bot.
 * @extends {BaseClient}
 */
class Client extends BaseClient {
  /**
   * @param {ClientOptions} [options] Options for the client
   */
  constructor(options = {}) {
    super(Object.assign({ _tokenType: 'Bot' }, options));

    // Obtain shard details from environment or if present, worker threads
    let data = process.env;
    try {
      // Test if worker threads module is present and used
      data = __webpack_require__(/*! worker_threads */ "?1797").workerData || data;
    } catch {
      // Do nothing
    }

    if (this.options.shards === DefaultOptions.shards) {
      if ('SHARDS' in data) {
        this.options.shards = JSON.parse(data.SHARDS);
      }
    }

    if (this.options.shardCount === DefaultOptions.shardCount) {
      if ('SHARD_COUNT' in data) {
        this.options.shardCount = Number(data.SHARD_COUNT);
      } else if (Array.isArray(this.options.shards)) {
        this.options.shardCount = this.options.shards.length;
      }
    }

    const typeofShards = typeof this.options.shards;

    if (typeofShards === 'undefined' && typeof this.options.shardCount === 'number') {
      this.options.shards = Array.from({ length: this.options.shardCount }, (_, i) => i);
    }

    if (typeofShards === 'number') this.options.shards = [this.options.shards];

    if (Array.isArray(this.options.shards)) {
      this.options.shards = [
        ...new Set(
          this.options.shards.filter(item => !isNaN(item) && item >= 0 && item < Infinity && item === (item | 0)),
        ),
      ];
    }

    this._validateOptions();

    /**
     * The WebSocket manager of the client
     * @type {WebSocketManager}
     */
    this.ws = new WebSocketManager(this);

    /**
     * The action manager of the client
     * @type {ActionsManager}
     * @private
     */
    this.actions = new ActionsManager(this);

    /**
     * The voice manager of the client (`null` in browsers)
     * @type {?ClientVoiceManager}
     */
    this.voice = !browser ? new ClientVoiceManager(this) : null;

    /**
     * Shard helpers for the client (only if the process was spawned from a {@link ShardingManager})
     * @type {?ShardClientUtil}
     */
    this.shard =
      !browser && process.env.SHARDING_MANAGER
        ? ShardClientUtil.singleton(this, process.env.SHARDING_MANAGER_MODE)
        : null;

    /**
     * All of the {@link User} objects that have been cached at any point, mapped by their IDs
     * @type {UserManager}
     */
    this.users = new UserManager(this);

    /**
     * All of the guilds the client is currently handling, mapped by their IDs -
     * as long as sharding isn't being used, this will be *every* guild the bot is a member of
     * @type {GuildManager}
     */
    this.guilds = new GuildManager(this);

    /**
     * All of the {@link Channel}s that the client is currently handling, mapped by their IDs -
     * as long as sharding isn't being used, this will be *every* channel in *every* guild the bot
     * is a member of. Note that DM channels will not be initially cached, and thus not be present
     * in the Manager without their explicit fetching or use.
     * @type {ChannelManager}
     */
    this.channels = new ChannelManager(this);

    const ClientPresence = Structures.get('ClientPresence');
    /**
     * The presence of the Client
     * @private
     * @type {ClientPresence}
     */
    this.presence = new ClientPresence(this);

    Object.defineProperty(this, 'token', { writable: true });
    if (!browser && !this.token && 'DISCORD_TOKEN' in process.env) {
      /**
       * Authorization token for the logged in bot.
       * If present, this defaults to `process.env.DISCORD_TOKEN` when instantiating the client
       * <warn>This should be kept private at all times.</warn>
       * @type {?string}
       */
      this.token = process.env.DISCORD_TOKEN;
    } else {
      this.token = null;
    }

    /**
     * User that the client is logged in as
     * @type {?ClientUser}
     */
    this.user = null;

    /**
     * Time at which the client was last regarded as being in the `READY` state
     * (each time the client disconnects and successfully reconnects, this will be overwritten)
     * @type {?Date}
     */
    this.readyAt = null;

    if (this.options.messageSweepInterval > 0) {
      this.setInterval(this.sweepMessages.bind(this), this.options.messageSweepInterval * 1000);
    }
  }

  /**
   * All custom emojis that the client has access to, mapped by their IDs
   * @type {GuildEmojiManager}
   * @readonly
   */
  get emojis() {
    const emojis = new GuildEmojiManager({ client: this });
    for (const guild of this.guilds.cache.values()) {
      if (guild.available) for (const emoji of guild.emojis.cache.values()) emojis.cache.set(emoji.id, emoji);
    }
    return emojis;
  }

  /**
   * Timestamp of the time the client was last `READY` at
   * @type {?number}
   * @readonly
   */
  get readyTimestamp() {
    return this.readyAt ? this.readyAt.getTime() : null;
  }

  /**
   * How long it has been since the client last entered the `READY` state in milliseconds
   * @type {?number}
   * @readonly
   */
  get uptime() {
    return this.readyAt ? Date.now() - this.readyAt : null;
  }

  /**
   * Logs the client in, establishing a websocket connection to Discord.
   * @param {string} [token=this.token] Token of the account to log in with
   * @returns {Promise<string>} Token of the account used
   * @example
   * client.login('my token');
   */
  async login(token = this.token) {
    if (!token || typeof token !== 'string') throw new Error('TOKEN_INVALID');
    this.token = token = token.replace(/^(Bot|Bearer)\s*/i, '');
    this.emit(
      Events.DEBUG,
      `Provided token: ${token
        .split('.')
        .map((val, i) => (i > 1 ? val.replace(/./g, '*') : val))
        .join('.')}`,
    );

    if (this.options.presence) {
      this.options.ws.presence = await this.presence._parse(this.options.presence);
    }

    this.emit(Events.DEBUG, 'Preparing to connect to the gateway...');

    try {
      await this.ws.connect();
      return this.token;
    } catch (error) {
      this.destroy();
      throw error;
    }
  }

  /**
   * Logs out, terminates the connection to Discord, and destroys the client.
   * @returns {void}
   */
  destroy() {
    super.destroy();
    this.ws.destroy();
    this.token = null;
  }

  /**
   * Obtains an invite from Discord.
   * @param {InviteResolvable} invite Invite code or URL
   * @returns {Promise<Invite>}
   * @example
   * client.fetchInvite('https://discord.gg/bRCvFy9')
   *   .then(invite => console.log(`Obtained invite with code: ${invite.code}`))
   *   .catch(console.error);
   */
  fetchInvite(invite) {
    const code = DataResolver.resolveInviteCode(invite);
    return this.api
      .invites(code)
      .get({ query: { with_counts: true } })
      .then(data => new Invite(this, data));
  }

  /**
   * Obtains a template from Discord.
   * @param {GuildTemplateResolvable} template Template code or URL
   * @returns {Promise<GuildTemplate>}
   * @example
   * client.fetchGuildTemplate('https://discord.new/FKvmczH2HyUf')
   *   .then(template => console.log(`Obtained template with code: ${template.code}`))
   *   .catch(console.error);
   */
  fetchGuildTemplate(template) {
    const code = DataResolver.resolveGuildTemplateCode(template);
    return this.api.guilds
      .templates(code)
      .get()
      .then(data => new GuildTemplate(this, data));
  }

  /**
   * Obtains a webhook from Discord.
   * @param {Snowflake} id ID of the webhook
   * @param {string} [token] Token for the webhook
   * @returns {Promise<Webhook>}
   * @example
   * client.fetchWebhook('id', 'token')
   *   .then(webhook => console.log(`Obtained webhook with name: ${webhook.name}`))
   *   .catch(console.error);
   */
  fetchWebhook(id, token) {
    return this.api
      .webhooks(id, token)
      .get()
      .then(data => new Webhook(this, data));
  }

  /**
   * Obtains the available voice regions from Discord.
   * @returns {Promise<Collection<string, VoiceRegion>>}
   * @example
   * client.fetchVoiceRegions()
   *   .then(regions => console.log(`Available regions are: ${regions.map(region => region.name).join(', ')}`))
   *   .catch(console.error);
   */
  fetchVoiceRegions() {
    return this.api.voice.regions.get().then(res => {
      const regions = new Collection();
      for (const region of res) regions.set(region.id, new VoiceRegion(region));
      return regions;
    });
  }

  /**
   * Sweeps all text-based channels' messages and removes the ones older than the max message lifetime.
   * If the message has been edited, the time of the edit is used rather than the time of the original message.
   * @param {number} [lifetime=this.options.messageCacheLifetime] Messages that are older than this (in seconds)
   * will be removed from the caches. The default is based on {@link ClientOptions#messageCacheLifetime}
   * @returns {number} Amount of messages that were removed from the caches,
   * or -1 if the message cache lifetime is unlimited
   * @example
   * // Remove all messages older than 1800 seconds from the messages cache
   * const amount = client.sweepMessages(1800);
   * console.log(`Successfully removed ${amount} messages from the cache.`);
   */
  sweepMessages(lifetime = this.options.messageCacheLifetime) {
    if (typeof lifetime !== 'number' || isNaN(lifetime)) {
      throw new TypeError('INVALID_TYPE', 'lifetime', 'number');
    }
    if (lifetime <= 0) {
      this.emit(Events.DEBUG, "Didn't sweep messages - lifetime is unlimited");
      return -1;
    }

    const lifetimeMs = lifetime * 1000;
    const now = Date.now();
    let channels = 0;
    let messages = 0;

    for (const channel of this.channels.cache.values()) {
      if (!channel.messages) continue;
      channels++;

      messages += channel.messages.cache.sweep(
        message => now - (message.editedTimestamp || message.createdTimestamp) > lifetimeMs,
      );
    }

    this.emit(
      Events.DEBUG,
      `Swept ${messages} messages older than ${lifetime} seconds in ${channels} text-based channels`,
    );
    return messages;
  }

  /**
   * Obtains the OAuth Application of this bot from Discord.
   * @returns {Promise<ClientApplication>}
   */
  fetchApplication() {
    return this.api.oauth2
      .applications('@me')
      .get()
      .then(app => new ClientApplication(this, app));
  }

  /**
   * Obtains a guild preview from Discord, available for all guilds the bot is in and all Discoverable guilds.
   * @param {GuildResolvable} guild The guild to fetch the preview for
   * @returns {Promise<GuildPreview>}
   */
  fetchGuildPreview(guild) {
    const id = this.guilds.resolveID(guild);
    if (!id) throw new TypeError('INVALID_TYPE', 'guild', 'GuildResolvable');
    return this.api
      .guilds(id)
      .preview.get()
      .then(data => new GuildPreview(this, data));
  }

  /**
   * Generates a link that can be used to invite the bot to a guild.
   * @param {InviteGenerationOptions|PermissionResolvable} [options] Permissions to request
   * @returns {Promise<string>}
   * @example
   * client.generateInvite({
   *   permissions: ['SEND_MESSAGES', 'MANAGE_GUILD', 'MENTION_EVERYONE'],
   * })
   *   .then(link => console.log(`Generated bot invite link: ${link}`))
   *   .catch(console.error);
   */
  async generateInvite(options = {}) {
    if (Array.isArray(options) || ['string', 'number'].includes(typeof options) || options instanceof Permissions) {
      process.emitWarning(
        'Client#generateInvite: Generate invite with an options object instead of a PermissionResolvable',
        'DeprecationWarning',
      );
      options = { permissions: options };
    }
    const application = await this.fetchApplication();
    const query = new URLSearchParams({
      client_id: application.id,
      permissions: Permissions.resolve(options.permissions),
      scope: 'bot',
    });
    if (typeof options.disableGuildSelect === 'boolean') {
      query.set('disable_guild_select', options.disableGuildSelect.toString());
    }
    if (typeof options.guild !== 'undefined') {
      const guildID = this.guilds.resolveID(options.guild);
      if (!guildID) throw new TypeError('INVALID_TYPE', 'options.guild', 'GuildResolvable');
      query.set('guild_id', guildID);
    }
    return `${this.options.http.api}${this.api.oauth2.authorize}?${query}`;
  }

  toJSON() {
    return super.toJSON({
      readyAt: false,
    });
  }

  /**
   * Calls {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval} on a script
   * with the client as `this`.
   * @param {string} script Script to eval
   * @returns {*}
   * @private
   */
  _eval(script) {
    return eval(script);
  }

  /**
   * Validates the client options.
   * @param {ClientOptions} [options=this.options] Options to validate
   * @private
   */
  _validateOptions(options = this.options) {
    if (typeof options.ws.intents !== 'undefined') {
      options.ws.intents = Intents.resolve(options.ws.intents);
    }
    if (typeof options.shardCount !== 'number' || isNaN(options.shardCount) || options.shardCount < 1) {
      throw new TypeError('CLIENT_INVALID_OPTION', 'shardCount', 'a number greater than or equal to 1');
    }
    if (options.shards && !(options.shards === 'auto' || Array.isArray(options.shards))) {
      throw new TypeError('CLIENT_INVALID_OPTION', 'shards', "'auto', a number or array of numbers");
    }
    if (options.shards && !options.shards.length) throw new RangeError('CLIENT_INVALID_PROVIDED_SHARDS');
    if (typeof options.messageCacheMaxSize !== 'number' || isNaN(options.messageCacheMaxSize)) {
      throw new TypeError('CLIENT_INVALID_OPTION', 'messageCacheMaxSize', 'a number');
    }
    if (typeof options.messageCacheLifetime !== 'number' || isNaN(options.messageCacheLifetime)) {
      throw new TypeError('CLIENT_INVALID_OPTION', 'The messageCacheLifetime', 'a number');
    }
    if (typeof options.messageSweepInterval !== 'number' || isNaN(options.messageSweepInterval)) {
      throw new TypeError('CLIENT_INVALID_OPTION', 'messageSweepInterval', 'a number');
    }
    if (
      typeof options.messageEditHistoryMaxSize !== 'number' ||
      isNaN(options.messageEditHistoryMaxSize) ||
      options.messageEditHistoryMaxSize < -1
    ) {
      throw new TypeError('CLIENT_INVALID_OPTION', 'messageEditHistoryMaxSize', 'a number greater than or equal to -1');
    }
    if (typeof options.fetchAllMembers !== 'boolean') {
      throw new TypeError('CLIENT_INVALID_OPTION', 'fetchAllMembers', 'a boolean');
    }
    if (typeof options.disableMentions !== 'string') {
      throw new TypeError('CLIENT_INVALID_OPTION', 'disableMentions', 'a string');
    }
    if (!Array.isArray(options.partials)) {
      throw new TypeError('CLIENT_INVALID_OPTION', 'partials', 'an Array');
    }
    if (typeof options.restWsBridgeTimeout !== 'number' || isNaN(options.restWsBridgeTimeout)) {
      throw new TypeError('CLIENT_INVALID_OPTION', 'restWsBridgeTimeout', 'a number');
    }
    if (typeof options.restRequestTimeout !== 'number' || isNaN(options.restRequestTimeout)) {
      throw new TypeError('CLIENT_INVALID_OPTION', 'restRequestTimeout', 'a number');
    }
    if (typeof options.restSweepInterval !== 'number' || isNaN(options.restSweepInterval)) {
      throw new TypeError('CLIENT_INVALID_OPTION', 'restSweepInterval', 'a number');
    }
    if (typeof options.retryLimit !== 'number' || isNaN(options.retryLimit)) {
      throw new TypeError('CLIENT_INVALID_OPTION', 'retryLimit', 'a number');
    }
  }
}

module.exports = Client;

/**
 * Options for {@link Client#generateInvite}.
 * @typedef {Object} InviteGenerationOptions
 * @property {PermissionResolvable} [permissions] Permissions to request
 * @property {GuildResolvable} [guild] Guild to preselect
 * @property {boolean} [disableGuildSelect] Whether to disable the guild selection
 */

/**
 * Emitted for general warnings.
 * @event Client#warn
 * @param {string} info The warning
 */

/**
 * Emitted for general debugging information.
 * @event Client#debug
 * @param {string} info The debug information
 */


/***/ }),

/***/ "./node_modules/discord.js/src/client/WebhookClient.js":
/*!*************************************************************!*\
  !*** ./node_modules/discord.js/src/client/WebhookClient.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const BaseClient = __webpack_require__(/*! ./BaseClient */ "./node_modules/discord.js/src/client/BaseClient.js");
const Webhook = __webpack_require__(/*! ../structures/Webhook */ "./node_modules/discord.js/src/structures/Webhook.js");

/**
 * The webhook client.
 * @implements {Webhook}
 * @extends {BaseClient}
 */
class WebhookClient extends BaseClient {
  /**
   * @param {Snowflake} id ID of the webhook
   * @param {string} token Token of the webhook
   * @param {ClientOptions} [options] Options for the client
   * @example
   * // Create a new webhook and send a message
   * const hook = new Discord.WebhookClient('1234', 'abcdef');
   * hook.send('This will send a message').catch(console.error);
   */
  constructor(id, token, options) {
    super(options);
    Object.defineProperty(this, 'client', { value: this });
    this.id = id;
    Object.defineProperty(this, 'token', { value: token, writable: true, configurable: true });
  }
}

Webhook.applyToClass(WebhookClient);

module.exports = WebhookClient;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/Action.js":
/*!**************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/Action.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { PartialTypes } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

/*

ABOUT ACTIONS

Actions are similar to WebSocket Packet Handlers, but since introducing
the REST API methods, in order to prevent rewriting code to handle data,
"actions" have been introduced. They're basically what Packet Handlers
used to be but they're strictly for manipulating data and making sure
that WebSocket events don't clash with REST methods.

*/

class GenericAction {
  constructor(client) {
    this.client = client;
  }

  handle(data) {
    return data;
  }

  getPayload(data, manager, id, partialType, cache) {
    const existing = manager.cache.get(id);
    if (!existing && this.client.options.partials.includes(partialType)) {
      return manager.add(data, cache);
    }
    return existing;
  }

  getChannel(data) {
    const id = data.channel_id || data.id;
    return (
      data.channel ||
      this.getPayload(
        {
          id,
          guild_id: data.guild_id,
          recipients: [data.author || { id: data.user_id }],
        },
        this.client.channels,
        id,
        PartialTypes.CHANNEL,
      )
    );
  }

  getMessage(data, channel, cache) {
    const id = data.message_id || data.id;
    return (
      data.message ||
      this.getPayload(
        {
          id,
          channel_id: channel.id,
          guild_id: data.guild_id || (channel.guild ? channel.guild.id : null),
        },
        channel.messages,
        id,
        PartialTypes.MESSAGE,
        cache,
      )
    );
  }

  getReaction(data, message, user) {
    const id = data.emoji.id || decodeURIComponent(data.emoji.name);
    return this.getPayload(
      {
        emoji: data.emoji,
        count: message.partial ? null : 0,
        me: user ? user.id === this.client.user.id : false,
      },
      message.reactions,
      id,
      PartialTypes.REACTION,
    );
  }

  getMember(data, guild) {
    return this.getPayload(data, guild.members, data.user.id, PartialTypes.GUILD_MEMBER);
  }

  getUser(data) {
    const id = data.user_id;
    return data.user || this.getPayload({ id }, this.client.users, id, PartialTypes.USER);
  }

  getUserFromMember(data) {
    if (data.guild_id && data.member && data.member.user) {
      const guild = this.client.guilds.cache.get(data.guild_id);
      if (guild) {
        return guild.members.add(data.member).user;
      } else {
        return this.client.users.add(data.member.user);
      }
    }
    return this.getUser(data);
  }
}

module.exports = GenericAction;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/ActionsManager.js":
/*!**********************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/ActionsManager.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


class ActionsManager {
  constructor(client) {
    this.client = client;

    this.register(__webpack_require__(/*! ./MessageCreate */ "./node_modules/discord.js/src/client/actions/MessageCreate.js"));
    this.register(__webpack_require__(/*! ./MessageDelete */ "./node_modules/discord.js/src/client/actions/MessageDelete.js"));
    this.register(__webpack_require__(/*! ./MessageDeleteBulk */ "./node_modules/discord.js/src/client/actions/MessageDeleteBulk.js"));
    this.register(__webpack_require__(/*! ./MessageUpdate */ "./node_modules/discord.js/src/client/actions/MessageUpdate.js"));
    this.register(__webpack_require__(/*! ./MessageReactionAdd */ "./node_modules/discord.js/src/client/actions/MessageReactionAdd.js"));
    this.register(__webpack_require__(/*! ./MessageReactionRemove */ "./node_modules/discord.js/src/client/actions/MessageReactionRemove.js"));
    this.register(__webpack_require__(/*! ./MessageReactionRemoveAll */ "./node_modules/discord.js/src/client/actions/MessageReactionRemoveAll.js"));
    this.register(__webpack_require__(/*! ./MessageReactionRemoveEmoji */ "./node_modules/discord.js/src/client/actions/MessageReactionRemoveEmoji.js"));
    this.register(__webpack_require__(/*! ./ChannelCreate */ "./node_modules/discord.js/src/client/actions/ChannelCreate.js"));
    this.register(__webpack_require__(/*! ./ChannelDelete */ "./node_modules/discord.js/src/client/actions/ChannelDelete.js"));
    this.register(__webpack_require__(/*! ./ChannelUpdate */ "./node_modules/discord.js/src/client/actions/ChannelUpdate.js"));
    this.register(__webpack_require__(/*! ./GuildDelete */ "./node_modules/discord.js/src/client/actions/GuildDelete.js"));
    this.register(__webpack_require__(/*! ./GuildUpdate */ "./node_modules/discord.js/src/client/actions/GuildUpdate.js"));
    this.register(__webpack_require__(/*! ./InviteCreate */ "./node_modules/discord.js/src/client/actions/InviteCreate.js"));
    this.register(__webpack_require__(/*! ./InviteDelete */ "./node_modules/discord.js/src/client/actions/InviteDelete.js"));
    this.register(__webpack_require__(/*! ./GuildMemberRemove */ "./node_modules/discord.js/src/client/actions/GuildMemberRemove.js"));
    this.register(__webpack_require__(/*! ./GuildMemberUpdate */ "./node_modules/discord.js/src/client/actions/GuildMemberUpdate.js"));
    this.register(__webpack_require__(/*! ./GuildBanRemove */ "./node_modules/discord.js/src/client/actions/GuildBanRemove.js"));
    this.register(__webpack_require__(/*! ./GuildRoleCreate */ "./node_modules/discord.js/src/client/actions/GuildRoleCreate.js"));
    this.register(__webpack_require__(/*! ./GuildRoleDelete */ "./node_modules/discord.js/src/client/actions/GuildRoleDelete.js"));
    this.register(__webpack_require__(/*! ./GuildRoleUpdate */ "./node_modules/discord.js/src/client/actions/GuildRoleUpdate.js"));
    this.register(__webpack_require__(/*! ./PresenceUpdate */ "./node_modules/discord.js/src/client/actions/PresenceUpdate.js"));
    this.register(__webpack_require__(/*! ./UserUpdate */ "./node_modules/discord.js/src/client/actions/UserUpdate.js"));
    this.register(__webpack_require__(/*! ./VoiceStateUpdate */ "./node_modules/discord.js/src/client/actions/VoiceStateUpdate.js"));
    this.register(__webpack_require__(/*! ./GuildEmojiCreate */ "./node_modules/discord.js/src/client/actions/GuildEmojiCreate.js"));
    this.register(__webpack_require__(/*! ./GuildEmojiDelete */ "./node_modules/discord.js/src/client/actions/GuildEmojiDelete.js"));
    this.register(__webpack_require__(/*! ./GuildEmojiUpdate */ "./node_modules/discord.js/src/client/actions/GuildEmojiUpdate.js"));
    this.register(__webpack_require__(/*! ./GuildEmojisUpdate */ "./node_modules/discord.js/src/client/actions/GuildEmojisUpdate.js"));
    this.register(__webpack_require__(/*! ./GuildRolesPositionUpdate */ "./node_modules/discord.js/src/client/actions/GuildRolesPositionUpdate.js"));
    this.register(__webpack_require__(/*! ./GuildChannelsPositionUpdate */ "./node_modules/discord.js/src/client/actions/GuildChannelsPositionUpdate.js"));
    this.register(__webpack_require__(/*! ./GuildIntegrationsUpdate */ "./node_modules/discord.js/src/client/actions/GuildIntegrationsUpdate.js"));
    this.register(__webpack_require__(/*! ./WebhooksUpdate */ "./node_modules/discord.js/src/client/actions/WebhooksUpdate.js"));
    this.register(__webpack_require__(/*! ./TypingStart */ "./node_modules/discord.js/src/client/actions/TypingStart.js"));
  }

  register(Action) {
    this[Action.name.replace(/Action$/, '')] = new Action(this.client);
  }
}

module.exports = ActionsManager;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/ChannelCreate.js":
/*!*********************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/ChannelCreate.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const { Events } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

class ChannelCreateAction extends Action {
  handle(data) {
    const client = this.client;
    const existing = client.channels.cache.has(data.id);
    const channel = client.channels.add(data);
    if (!existing && channel) {
      /**
       * Emitted whenever a channel is created.
       * @event Client#channelCreate
       * @param {DMChannel|GuildChannel} channel The channel that was created
       */
      client.emit(Events.CHANNEL_CREATE, channel);
    }
    return { channel };
  }
}

module.exports = ChannelCreateAction;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/ChannelDelete.js":
/*!*********************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/ChannelDelete.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const DMChannel = __webpack_require__(/*! ../../structures/DMChannel */ "./node_modules/discord.js/src/structures/DMChannel.js");
const { Events } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

class ChannelDeleteAction extends Action {
  constructor(client) {
    super(client);
    this.deleted = new Map();
  }

  handle(data) {
    const client = this.client;
    let channel = client.channels.cache.get(data.id);

    if (channel) {
      client.channels.remove(channel.id);
      channel.deleted = true;
      if (channel.messages && !(channel instanceof DMChannel)) {
        for (const message of channel.messages.cache.values()) {
          message.deleted = true;
        }
      }
      /**
       * Emitted whenever a channel is deleted.
       * @event Client#channelDelete
       * @param {DMChannel|GuildChannel} channel The channel that was deleted
       */
      client.emit(Events.CHANNEL_DELETE, channel);
    }

    return { channel };
  }
}

module.exports = ChannelDeleteAction;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/ChannelUpdate.js":
/*!*********************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/ChannelUpdate.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const Channel = __webpack_require__(/*! ../../structures/Channel */ "./node_modules/discord.js/src/structures/Channel.js");
const { ChannelTypes } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

class ChannelUpdateAction extends Action {
  handle(data) {
    const client = this.client;

    let channel = client.channels.cache.get(data.id);
    if (channel) {
      const old = channel._update(data);

      if (ChannelTypes[channel.type.toUpperCase()] !== data.type) {
        const newChannel = Channel.create(this.client, data, channel.guild);
        for (const [id, message] of channel.messages.cache) newChannel.messages.cache.set(id, message);
        newChannel._typing = new Map(channel._typing);
        channel = newChannel;
        this.client.channels.cache.set(channel.id, channel);
      }

      return {
        old,
        updated: channel,
      };
    }

    return {};
  }
}

module.exports = ChannelUpdateAction;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/GuildBanRemove.js":
/*!**********************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/GuildBanRemove.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const { Events } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

class GuildBanRemove extends Action {
  handle(data) {
    const client = this.client;
    const guild = client.guilds.cache.get(data.guild_id);
    const user = client.users.add(data.user);
    /**
     * Emitted whenever a member is unbanned from a guild.
     * @event Client#guildBanRemove
     * @param {Guild} guild The guild that the unban occurred in
     * @param {User} user The user that was unbanned
     */
    if (guild && user) client.emit(Events.GUILD_BAN_REMOVE, guild, user);
  }
}

module.exports = GuildBanRemove;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/GuildChannelsPositionUpdate.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/GuildChannelsPositionUpdate.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");

class GuildChannelsPositionUpdate extends Action {
  handle(data) {
    const client = this.client;

    const guild = client.guilds.cache.get(data.guild_id);
    if (guild) {
      for (const partialChannel of data.channels) {
        const channel = guild.channels.cache.get(partialChannel.id);
        if (channel) channel.rawPosition = partialChannel.position;
      }
    }

    return { guild };
  }
}

module.exports = GuildChannelsPositionUpdate;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/GuildDelete.js":
/*!*******************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/GuildDelete.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const { Events } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

class GuildDeleteAction extends Action {
  constructor(client) {
    super(client);
    this.deleted = new Map();
  }

  handle(data) {
    const client = this.client;

    let guild = client.guilds.cache.get(data.id);
    if (guild) {
      for (const channel of guild.channels.cache.values()) {
        if (channel.type === 'text') channel.stopTyping(true);
      }

      if (data.unavailable) {
        // Guild is unavailable
        guild.available = false;

        /**
         * Emitted whenever a guild becomes unavailable, likely due to a server outage.
         * @event Client#guildUnavailable
         * @param {Guild} guild The guild that has become unavailable
         */
        client.emit(Events.GUILD_UNAVAILABLE, guild);

        // Stops the GuildDelete packet thinking a guild was actually deleted,
        // handles emitting of event itself
        return {
          guild: null,
        };
      }

      for (const channel of guild.channels.cache.values()) this.client.channels.remove(channel.id);
      if (guild.voice && guild.voice.connection) guild.voice.connection.disconnect();

      // Delete guild
      client.guilds.cache.delete(guild.id);
      guild.deleted = true;

      /**
       * Emitted whenever a guild kicks the client or the guild is deleted/left.
       * @event Client#guildDelete
       * @param {Guild} guild The guild that was deleted
       */
      client.emit(Events.GUILD_DELETE, guild);

      this.deleted.set(guild.id, guild);
      this.scheduleForDeletion(guild.id);
    } else {
      guild = this.deleted.get(data.id) || null;
    }

    return { guild };
  }

  scheduleForDeletion(id) {
    this.client.setTimeout(() => this.deleted.delete(id), this.client.options.restWsBridgeTimeout);
  }
}

module.exports = GuildDeleteAction;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/GuildEmojiCreate.js":
/*!************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/GuildEmojiCreate.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const { Events } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

class GuildEmojiCreateAction extends Action {
  handle(guild, createdEmoji) {
    const already = guild.emojis.cache.has(createdEmoji.id);
    const emoji = guild.emojis.add(createdEmoji);
    /**
     * Emitted whenever a custom emoji is created in a guild.
     * @event Client#emojiCreate
     * @param {GuildEmoji} emoji The emoji that was created
     */
    if (!already) this.client.emit(Events.GUILD_EMOJI_CREATE, emoji);
    return { emoji };
  }
}

module.exports = GuildEmojiCreateAction;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/GuildEmojiDelete.js":
/*!************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/GuildEmojiDelete.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const { Events } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

class GuildEmojiDeleteAction extends Action {
  handle(emoji) {
    emoji.guild.emojis.cache.delete(emoji.id);
    emoji.deleted = true;
    /**
     * Emitted whenever a custom emoji is deleted in a guild.
     * @event Client#emojiDelete
     * @param {GuildEmoji} emoji The emoji that was deleted
     */
    this.client.emit(Events.GUILD_EMOJI_DELETE, emoji);
    return { emoji };
  }
}

module.exports = GuildEmojiDeleteAction;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/GuildEmojiUpdate.js":
/*!************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/GuildEmojiUpdate.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const { Events } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

class GuildEmojiUpdateAction extends Action {
  handle(current, data) {
    const old = current._update(data);
    /**
     * Emitted whenever a custom emoji is updated in a guild.
     * @event Client#emojiUpdate
     * @param {GuildEmoji} oldEmoji The old emoji
     * @param {GuildEmoji} newEmoji The new emoji
     */
    this.client.emit(Events.GUILD_EMOJI_UPDATE, old, current);
    return { emoji: current };
  }
}

module.exports = GuildEmojiUpdateAction;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/GuildEmojisUpdate.js":
/*!*************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/GuildEmojisUpdate.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");

class GuildEmojisUpdateAction extends Action {
  handle(data) {
    const guild = this.client.guilds.cache.get(data.guild_id);
    if (!guild || !guild.emojis) return;

    const deletions = new Map(guild.emojis.cache);

    for (const emoji of data.emojis) {
      // Determine type of emoji event
      const cachedEmoji = guild.emojis.cache.get(emoji.id);
      if (cachedEmoji) {
        deletions.delete(emoji.id);
        if (!cachedEmoji.equals(emoji)) {
          // Emoji updated
          this.client.actions.GuildEmojiUpdate.handle(cachedEmoji, emoji);
        }
      } else {
        // Emoji added
        this.client.actions.GuildEmojiCreate.handle(guild, emoji);
      }
    }

    for (const emoji of deletions.values()) {
      // Emoji deleted
      this.client.actions.GuildEmojiDelete.handle(emoji);
    }
  }
}

module.exports = GuildEmojisUpdateAction;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/GuildIntegrationsUpdate.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/GuildIntegrationsUpdate.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const { Events } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

class GuildIntegrationsUpdate extends Action {
  handle(data) {
    const client = this.client;
    const guild = client.guilds.cache.get(data.guild_id);
    /**
     * Emitted whenever a guild integration is updated
     * @event Client#guildIntegrationsUpdate
     * @param {Guild} guild The guild whose integrations were updated
     */
    if (guild) client.emit(Events.GUILD_INTEGRATIONS_UPDATE, guild);
  }
}

module.exports = GuildIntegrationsUpdate;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/GuildMemberRemove.js":
/*!*************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/GuildMemberRemove.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const { Events, Status } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

class GuildMemberRemoveAction extends Action {
  handle(data, shard) {
    const client = this.client;
    const guild = client.guilds.cache.get(data.guild_id);
    let member = null;
    if (guild) {
      member = this.getMember({ user: data.user }, guild);
      guild.memberCount--;
      if (member) {
        member.deleted = true;
        guild.members.cache.delete(member.id);
        /**
         * Emitted whenever a member leaves a guild, or is kicked.
         * @event Client#guildMemberRemove
         * @param {GuildMember} member The member that has left/been kicked from the guild
         */
        if (shard.status === Status.READY) client.emit(Events.GUILD_MEMBER_REMOVE, member);
      }
      guild.voiceStates.cache.delete(data.user.id);
    }
    return { guild, member };
  }
}

module.exports = GuildMemberRemoveAction;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/GuildMemberUpdate.js":
/*!*************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/GuildMemberUpdate.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const { Status, Events } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

class GuildMemberUpdateAction extends Action {
  handle(data, shard) {
    const { client } = this;
    if (data.user.username) {
      const user = client.users.cache.get(data.user.id);
      if (!user) {
        client.users.add(data.user);
      } else if (!user.equals(data.user)) {
        client.actions.UserUpdate.handle(data.user);
      }
    }

    const guild = client.guilds.cache.get(data.guild_id);
    if (guild) {
      const member = this.getMember({ user: data.user }, guild);
      if (member) {
        const old = member._update(data);
        /**
         * Emitted whenever a guild member changes - i.e. new role, removed role, nickname.
         * Also emitted when the user's details (e.g. username) change.
         * @event Client#guildMemberUpdate
         * @param {GuildMember} oldMember The member before the update
         * @param {GuildMember} newMember The member after the update
         */
        if (shard.status === Status.READY) client.emit(Events.GUILD_MEMBER_UPDATE, old, member);
      } else {
        const newMember = guild.members.add(data);
        /**
         * Emitted whenever a member becomes available in a large guild.
         * @event Client#guildMemberAvailable
         * @param {GuildMember} member The member that became available
         */
        this.client.emit(Events.GUILD_MEMBER_AVAILABLE, newMember);
      }
    }
  }
}

module.exports = GuildMemberUpdateAction;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/GuildRoleCreate.js":
/*!***********************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/GuildRoleCreate.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const { Events } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

class GuildRoleCreate extends Action {
  handle(data) {
    const client = this.client;
    const guild = client.guilds.cache.get(data.guild_id);
    let role;
    if (guild) {
      const already = guild.roles.cache.has(data.role.id);
      role = guild.roles.add(data.role);
      /**
       * Emitted whenever a role is created.
       * @event Client#roleCreate
       * @param {Role} role The role that was created
       */
      if (!already) client.emit(Events.GUILD_ROLE_CREATE, role);
    }
    return { role };
  }
}

module.exports = GuildRoleCreate;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/GuildRoleDelete.js":
/*!***********************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/GuildRoleDelete.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const { Events } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

class GuildRoleDeleteAction extends Action {
  handle(data) {
    const client = this.client;
    const guild = client.guilds.cache.get(data.guild_id);
    let role;

    if (guild) {
      role = guild.roles.cache.get(data.role_id);
      if (role) {
        guild.roles.cache.delete(data.role_id);
        role.deleted = true;
        /**
         * Emitted whenever a guild role is deleted.
         * @event Client#roleDelete
         * @param {Role} role The role that was deleted
         */
        client.emit(Events.GUILD_ROLE_DELETE, role);
      }
    }

    return { role };
  }
}

module.exports = GuildRoleDeleteAction;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/GuildRoleUpdate.js":
/*!***********************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/GuildRoleUpdate.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const { Events } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

class GuildRoleUpdateAction extends Action {
  handle(data) {
    const client = this.client;
    const guild = client.guilds.cache.get(data.guild_id);

    if (guild) {
      let old = null;

      const role = guild.roles.cache.get(data.role.id);
      if (role) {
        old = role._update(data.role);
        /**
         * Emitted whenever a guild role is updated.
         * @event Client#roleUpdate
         * @param {Role} oldRole The role before the update
         * @param {Role} newRole The role after the update
         */
        client.emit(Events.GUILD_ROLE_UPDATE, old, role);
      }

      return {
        old,
        updated: role,
      };
    }

    return {
      old: null,
      updated: null,
    };
  }
}

module.exports = GuildRoleUpdateAction;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/GuildRolesPositionUpdate.js":
/*!********************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/GuildRolesPositionUpdate.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");

class GuildRolesPositionUpdate extends Action {
  handle(data) {
    const client = this.client;

    const guild = client.guilds.cache.get(data.guild_id);
    if (guild) {
      for (const partialRole of data.roles) {
        const role = guild.roles.cache.get(partialRole.id);
        if (role) role.rawPosition = partialRole.position;
      }
    }

    return { guild };
  }
}

module.exports = GuildRolesPositionUpdate;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/GuildUpdate.js":
/*!*******************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/GuildUpdate.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const { Events } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

class GuildUpdateAction extends Action {
  handle(data) {
    const client = this.client;

    const guild = client.guilds.cache.get(data.id);
    if (guild) {
      const old = guild._update(data);
      /**
       * Emitted whenever a guild is updated - e.g. name change.
       * @event Client#guildUpdate
       * @param {Guild} oldGuild The guild before the update
       * @param {Guild} newGuild The guild after the update
       */
      client.emit(Events.GUILD_UPDATE, old, guild);
      return {
        old,
        updated: guild,
      };
    }

    return {
      old: null,
      updated: null,
    };
  }
}

module.exports = GuildUpdateAction;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/InviteCreate.js":
/*!********************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/InviteCreate.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const Invite = __webpack_require__(/*! ../../structures/Invite */ "./node_modules/discord.js/src/structures/Invite.js");
const { Events } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

class InviteCreateAction extends Action {
  handle(data) {
    const client = this.client;
    const channel = client.channels.cache.get(data.channel_id);
    const guild = client.guilds.cache.get(data.guild_id);
    if (!channel) return false;

    const inviteData = Object.assign(data, { channel, guild });
    const invite = new Invite(client, inviteData);
    /**
     * Emitted when an invite is created.
     * <info> This event only triggers if the client has `MANAGE_GUILD` permissions for the guild,
     * or `MANAGE_CHANNEL` permissions for the channel.</info>
     * @event Client#inviteCreate
     * @param {Invite} invite The invite that was created
     */
    client.emit(Events.INVITE_CREATE, invite);
    return { invite };
  }
}

module.exports = InviteCreateAction;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/InviteDelete.js":
/*!********************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/InviteDelete.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const Invite = __webpack_require__(/*! ../../structures/Invite */ "./node_modules/discord.js/src/structures/Invite.js");
const { Events } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

class InviteDeleteAction extends Action {
  handle(data) {
    const client = this.client;
    const channel = client.channels.cache.get(data.channel_id);
    const guild = client.guilds.cache.get(data.guild_id);
    if (!channel && !guild) return false;

    const inviteData = Object.assign(data, { channel, guild });
    const invite = new Invite(client, inviteData);

    /**
     * Emitted when an invite is deleted.
     * <info> This event only triggers if the client has `MANAGE_GUILD` permissions for the guild,
     * or `MANAGE_CHANNEL` permissions for the channel.</info>
     * @event Client#inviteDelete
     * @param {Invite} invite The invite that was deleted
     */
    client.emit(Events.INVITE_DELETE, invite);
    return { invite };
  }
}

module.exports = InviteDeleteAction;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/MessageCreate.js":
/*!*********************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/MessageCreate.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const { Events } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

class MessageCreateAction extends Action {
  handle(data) {
    const client = this.client;
    const channel = client.channels.cache.get(data.channel_id);
    if (channel) {
      const existing = channel.messages.cache.get(data.id);
      if (existing) return { message: existing };
      const message = channel.messages.add(data);
      const user = message.author;
      let member = message.member;
      channel.lastMessageID = data.id;
      if (user) {
        user.lastMessageID = data.id;
        user.lastMessageChannelID = channel.id;
      }
      if (member) {
        member.lastMessageID = data.id;
        member.lastMessageChannelID = channel.id;
      }

      /**
       * Emitted whenever a message is created.
       * @event Client#message
       * @param {Message} message The created message
       */
      client.emit(Events.MESSAGE_CREATE, message);
      return { message };
    }

    return {};
  }
}

module.exports = MessageCreateAction;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/MessageDelete.js":
/*!*********************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/MessageDelete.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const { Events } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

class MessageDeleteAction extends Action {
  handle(data) {
    const client = this.client;
    const channel = this.getChannel(data);
    let message;
    if (channel) {
      message = this.getMessage(data, channel);
      if (message) {
        channel.messages.cache.delete(message.id);
        message.deleted = true;
        /**
         * Emitted whenever a message is deleted.
         * @event Client#messageDelete
         * @param {Message} message The deleted message
         */
        client.emit(Events.MESSAGE_DELETE, message);
      }
    }

    return { message };
  }
}

module.exports = MessageDeleteAction;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/MessageDeleteBulk.js":
/*!*************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/MessageDeleteBulk.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const Collection = __webpack_require__(/*! ../../util/Collection */ "./node_modules/discord.js/src/util/Collection.js");
const { Events } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

class MessageDeleteBulkAction extends Action {
  handle(data) {
    const client = this.client;
    const channel = client.channels.cache.get(data.channel_id);

    if (channel) {
      const ids = data.ids;
      const messages = new Collection();
      for (const id of ids) {
        const message = this.getMessage(
          {
            id,
            guild_id: data.guild_id,
          },
          channel,
          false,
        );
        if (message) {
          message.deleted = true;
          messages.set(message.id, message);
          channel.messages.cache.delete(id);
        }
      }

      /**
       * Emitted whenever messages are deleted in bulk.
       * @event Client#messageDeleteBulk
       * @param {Collection<Snowflake, Message>} messages The deleted messages, mapped by their ID
       */
      if (messages.size > 0) client.emit(Events.MESSAGE_BULK_DELETE, messages);
      return { messages };
    }
    return {};
  }
}

module.exports = MessageDeleteBulkAction;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/MessageReactionAdd.js":
/*!**************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/MessageReactionAdd.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const { Events } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");
const { PartialTypes } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

/*
{ user_id: 'id',
     message_id: 'id',
     emoji: { name: '�', id: null },
     channel_id: 'id',
     // If originating from a guild
     guild_id: 'id',
     member: { ..., user: { ... } } }
*/

class MessageReactionAdd extends Action {
  handle(data) {
    if (!data.emoji) return false;

    const user = this.getUserFromMember(data);
    if (!user) return false;

    // Verify channel
    const channel = this.getChannel(data);
    if (!channel || channel.type === 'voice') return false;

    // Verify message
    const message = this.getMessage(data, channel);
    if (!message) return false;

    // Verify reaction
    if (message.partial && !this.client.options.partials.includes(PartialTypes.REACTION)) return false;
    const existing = message.reactions.cache.get(data.emoji.id || data.emoji.name);
    if (existing && existing.users.cache.has(user.id)) return { message, reaction: existing, user };
    const reaction = message.reactions.add({
      emoji: data.emoji,
      count: message.partial ? null : 0,
      me: user.id === this.client.user.id,
    });
    if (!reaction) return false;
    reaction._add(user);
    /**
     * Emitted whenever a reaction is added to a cached message.
     * @event Client#messageReactionAdd
     * @param {MessageReaction} messageReaction The reaction object
     * @param {User} user The user that applied the guild or reaction emoji
     */
    this.client.emit(Events.MESSAGE_REACTION_ADD, reaction, user);

    return { message, reaction, user };
  }
}

module.exports = MessageReactionAdd;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/MessageReactionRemove.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/MessageReactionRemove.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const { Events } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

/*
{ user_id: 'id',
     message_id: 'id',
     emoji: { name: '�', id: null },
     channel_id: 'id',
     guild_id: 'id' }
*/

class MessageReactionRemove extends Action {
  handle(data) {
    if (!data.emoji) return false;

    const user = this.getUser(data);
    if (!user) return false;

    // Verify channel
    const channel = this.getChannel(data);
    if (!channel || channel.type === 'voice') return false;

    // Verify message
    const message = this.getMessage(data, channel);
    if (!message) return false;

    // Verify reaction
    const reaction = this.getReaction(data, message, user);
    if (!reaction) return false;
    reaction._remove(user);
    /**
     * Emitted whenever a reaction is removed from a cached message.
     * @event Client#messageReactionRemove
     * @param {MessageReaction} messageReaction The reaction object
     * @param {User} user The user whose emoji or reaction emoji was removed
     */
    this.client.emit(Events.MESSAGE_REACTION_REMOVE, reaction, user);

    return { message, reaction, user };
  }
}

module.exports = MessageReactionRemove;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/MessageReactionRemoveAll.js":
/*!********************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/MessageReactionRemoveAll.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const { Events } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

class MessageReactionRemoveAll extends Action {
  handle(data) {
    // Verify channel
    const channel = this.getChannel(data);
    if (!channel || channel.type === 'voice') return false;

    // Verify message
    const message = this.getMessage(data, channel);
    if (!message) return false;

    message.reactions.cache.clear();
    this.client.emit(Events.MESSAGE_REACTION_REMOVE_ALL, message);

    return { message };
  }
}

/**
 * Emitted whenever all reactions are removed from a cached message.
 * @event Client#messageReactionRemoveAll
 * @param {Message} message The message the reactions were removed from
 */

module.exports = MessageReactionRemoveAll;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/MessageReactionRemoveEmoji.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/MessageReactionRemoveEmoji.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const { Events } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

class MessageReactionRemoveEmoji extends Action {
  handle(data) {
    const channel = this.getChannel(data);
    if (!channel || channel.type === 'voice') return false;

    const message = this.getMessage(data, channel);
    if (!message) return false;

    const reaction = this.getReaction(data, message);
    if (!reaction) return false;
    if (!message.partial) message.reactions.cache.delete(reaction.emoji.id || reaction.emoji.name);

    /**
     * Emitted when a bot removes an emoji reaction from a cached message.
     * @event Client#messageReactionRemoveEmoji
     * @param {MessageReaction} reaction The reaction that was removed
     */
    this.client.emit(Events.MESSAGE_REACTION_REMOVE_EMOJI, reaction);
    return { reaction };
  }
}

module.exports = MessageReactionRemoveEmoji;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/MessageUpdate.js":
/*!*********************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/MessageUpdate.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");

class MessageUpdateAction extends Action {
  handle(data) {
    const channel = this.getChannel(data);
    if (channel) {
      const { id, channel_id, guild_id, author, timestamp, type } = data;
      const message = this.getMessage({ id, channel_id, guild_id, author, timestamp, type }, channel);
      if (message) {
        const old = message.patch(data);
        return {
          old,
          updated: message,
        };
      }
    }

    return {};
  }
}

module.exports = MessageUpdateAction;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/PresenceUpdate.js":
/*!**********************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/PresenceUpdate.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const { Events } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

class PresenceUpdateAction extends Action {
  handle(data) {
    let user = this.client.users.cache.get(data.user.id);
    if (!user && data.user.username) user = this.client.users.add(data.user);
    if (!user) return;

    if (data.user && data.user.username) {
      if (!user.equals(data.user)) this.client.actions.UserUpdate.handle(data.user);
    }

    const guild = this.client.guilds.cache.get(data.guild_id);
    if (!guild) return;

    let oldPresence = guild.presences.cache.get(user.id);
    if (oldPresence) oldPresence = oldPresence._clone();
    let member = guild.members.cache.get(user.id);
    if (!member && data.status !== 'offline') {
      member = guild.members.add({
        user,
        roles: data.roles,
        deaf: false,
        mute: false,
      });
      this.client.emit(Events.GUILD_MEMBER_AVAILABLE, member);
    }
    guild.presences.add(Object.assign(data, { guild }));
    if (member && this.client.listenerCount(Events.PRESENCE_UPDATE)) {
      /**
       * Emitted whenever a guild member's presence (e.g. status, activity) is changed.
       * @event Client#presenceUpdate
       * @param {?Presence} oldPresence The presence before the update, if one at all
       * @param {Presence} newPresence The presence after the update
       */
      this.client.emit(Events.PRESENCE_UPDATE, oldPresence, member.presence);
    }
  }
}

module.exports = PresenceUpdateAction;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/TypingStart.js":
/*!*******************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/TypingStart.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const { Events } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");
const textBasedChannelTypes = ['dm', 'text', 'news'];

class TypingStart extends Action {
  handle(data) {
    const channel = this.getChannel(data);
    if (!channel) {
      return;
    }
    if (!textBasedChannelTypes.includes(channel.type)) {
      this.client.emit(Events.WARN, `Discord sent a typing packet to a ${channel.type} channel ${channel.id}`);
      return;
    }

    const user = this.getUserFromMember(data);
    const timestamp = new Date(data.timestamp * 1000);

    if (channel && user) {
      if (channel._typing.has(user.id)) {
        const typing = channel._typing.get(user.id);

        typing.lastTimestamp = timestamp;
        typing.elapsedTime = Date.now() - typing.since;
        this.client.clearTimeout(typing.timeout);
        typing.timeout = this.tooLate(channel, user);
      } else {
        const since = new Date();
        const lastTimestamp = new Date();
        channel._typing.set(user.id, {
          user,
          since,
          lastTimestamp,
          elapsedTime: Date.now() - since,
          timeout: this.tooLate(channel, user),
        });

        /**
         * Emitted whenever a user starts typing in a channel.
         * @event Client#typingStart
         * @param {Channel} channel The channel the user started typing in
         * @param {User} user The user that started typing
         */
        this.client.emit(Events.TYPING_START, channel, user);
      }
    }
  }

  tooLate(channel, user) {
    return channel.client.setTimeout(() => {
      channel._typing.delete(user.id);
    }, 10000);
  }
}

module.exports = TypingStart;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/UserUpdate.js":
/*!******************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/UserUpdate.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const { Events } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

class UserUpdateAction extends Action {
  handle(data) {
    const client = this.client;

    const newUser = client.users.cache.get(data.id);
    const oldUser = newUser._update(data);

    if (!oldUser.equals(newUser)) {
      /**
       * Emitted whenever a user's details (e.g. username) are changed.
       * Triggered by the Discord gateway events USER_UPDATE, GUILD_MEMBER_UPDATE, and PRESENCE_UPDATE.
       * @event Client#userUpdate
       * @param {User} oldUser The user before the update
       * @param {User} newUser The user after the update
       */
      client.emit(Events.USER_UPDATE, oldUser, newUser);
      return {
        old: oldUser,
        updated: newUser,
      };
    }

    return {
      old: null,
      updated: null,
    };
  }
}

module.exports = UserUpdateAction;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/VoiceStateUpdate.js":
/*!************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/VoiceStateUpdate.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const { Events } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");
const Structures = __webpack_require__(/*! ../../util/Structures */ "./node_modules/discord.js/src/util/Structures.js");

class VoiceStateUpdate extends Action {
  handle(data) {
    const client = this.client;
    const guild = client.guilds.cache.get(data.guild_id);
    if (guild) {
      const VoiceState = Structures.get('VoiceState');
      // Update the state
      const oldState = guild.voiceStates.cache.has(data.user_id)
        ? guild.voiceStates.cache.get(data.user_id)._clone()
        : new VoiceState(guild, { user_id: data.user_id });

      const newState = guild.voiceStates.add(data);

      // Get the member
      let member = guild.members.cache.get(data.user_id);
      if (member && data.member) {
        member._patch(data.member);
      } else if (data.member && data.member.user && data.member.joined_at) {
        member = guild.members.add(data.member);
      }

      // Emit event
      if (member && member.user.id === client.user.id) {
        client.emit('debug', `[VOICE] received voice state update: ${JSON.stringify(data)}`);
        client.voice.onVoiceStateUpdate(data);
      }

      /**
       * Emitted whenever a member changes voice state - e.g. joins/leaves a channel, mutes/unmutes.
       * @event Client#voiceStateUpdate
       * @param {VoiceState} oldState The voice state before the update
       * @param {VoiceState} newState The voice state after the update
       */
      client.emit(Events.VOICE_STATE_UPDATE, oldState, newState);
    }
  }
}

module.exports = VoiceStateUpdate;


/***/ }),

/***/ "./node_modules/discord.js/src/client/actions/WebhooksUpdate.js":
/*!**********************************************************************!*\
  !*** ./node_modules/discord.js/src/client/actions/WebhooksUpdate.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Action = __webpack_require__(/*! ./Action */ "./node_modules/discord.js/src/client/actions/Action.js");
const { Events } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

class WebhooksUpdate extends Action {
  handle(data) {
    const client = this.client;
    const channel = client.channels.cache.get(data.channel_id);
    /**
     * Emitted whenever a guild text channel has its webhooks changed.
     * @event Client#webhookUpdate
     * @param {TextChannel} channel The channel that had a webhook update
     */
    if (channel) client.emit(Events.WEBHOOKS_UPDATE, channel);
  }
}

module.exports = WebhooksUpdate;


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/WebSocketManager.js":
/*!**************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/WebSocketManager.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js");
const WebSocketShard = __webpack_require__(/*! ./WebSocketShard */ "./node_modules/discord.js/src/client/websocket/WebSocketShard.js");
const PacketHandlers = __webpack_require__(/*! ./handlers */ "./node_modules/discord.js/src/client/websocket/handlers/index.js");
const { Error: DJSError } = __webpack_require__(/*! ../../errors */ "./node_modules/discord.js/src/errors/index.js");
const Collection = __webpack_require__(/*! ../../util/Collection */ "./node_modules/discord.js/src/util/Collection.js");
const { Events, ShardEvents, Status, WSCodes, WSEvents } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");
const Util = __webpack_require__(/*! ../../util/Util */ "./node_modules/discord.js/src/util/Util.js");

const BeforeReadyWhitelist = [
  WSEvents.READY,
  WSEvents.RESUMED,
  WSEvents.GUILD_CREATE,
  WSEvents.GUILD_DELETE,
  WSEvents.GUILD_MEMBERS_CHUNK,
  WSEvents.GUILD_MEMBER_ADD,
  WSEvents.GUILD_MEMBER_REMOVE,
];

const UNRECOVERABLE_CLOSE_CODES = Object.keys(WSCodes).slice(1).map(Number);
const UNRESUMABLE_CLOSE_CODES = [1000, 4006, 4007];

/**
 * The WebSocket manager for this client.
 * <info>This class forwards raw dispatch events,
 * read more about it here {@link https://discord.com/developers/docs/topics/gateway}</info>
 * @extends EventEmitter
 */
class WebSocketManager extends EventEmitter {
  constructor(client) {
    super();

    /**
     * The client that instantiated this WebSocketManager
     * @type {Client}
     * @readonly
     * @name WebSocketManager#client
     */
    Object.defineProperty(this, 'client', { value: client });

    /**
     * The gateway this manager uses
     * @type {?string}
     */
    this.gateway = null;

    /**
     * The amount of shards this manager handles
     * @private
     * @type {number}
     */
    this.totalShards = this.client.options.shards.length;

    /**
     * A collection of all shards this manager handles
     * @type {Collection<number, WebSocketShard>}
     */
    this.shards = new Collection();

    /**
     * An array of shards to be connected or that need to reconnect
     * @type {Set<WebSocketShard>}
     * @private
     * @name WebSocketManager#shardQueue
     */
    Object.defineProperty(this, 'shardQueue', { value: new Set(), writable: true });

    /**
     * An array of queued events before this WebSocketManager became ready
     * @type {object[]}
     * @private
     * @name WebSocketManager#packetQueue
     */
    Object.defineProperty(this, 'packetQueue', { value: [] });

    /**
     * The current status of this WebSocketManager
     * @type {number}
     */
    this.status = Status.IDLE;

    /**
     * If this manager was destroyed. It will prevent shards from reconnecting
     * @type {boolean}
     * @private
     */
    this.destroyed = false;

    /**
     * If this manager is currently reconnecting one or multiple shards
     * @type {boolean}
     * @private
     */
    this.reconnecting = false;

    /**
     * The current session limit of the client
     * @private
     * @type {?Object}
     * @property {number} total Total number of identifies available
     * @property {number} remaining Number of identifies remaining
     * @property {number} reset_after Number of milliseconds after which the limit resets
     */
    this.sessionStartLimit = null;
  }

  /**
   * The average ping of all WebSocketShards
   * @type {number}
   * @readonly
   */
  get ping() {
    const sum = this.shards.reduce((a, b) => a + b.ping, 0);
    return sum / this.shards.size;
  }

  /**
   * Emits a debug message.
   * @param {string} message The debug message
   * @param {?WebSocketShard} [shard] The shard that emitted this message, if any
   * @private
   */
  debug(message, shard) {
    this.client.emit(Events.DEBUG, `[WS => ${shard ? `Shard ${shard.id}` : 'Manager'}] ${message}`);
  }

  /**
   * Connects this manager to the gateway.
   * @private
   */
  async connect() {
    const invalidToken = new DJSError(WSCodes[4004]);
    const {
      url: gatewayURL,
      shards: recommendedShards,
      session_start_limit: sessionStartLimit,
    } = await this.client.api.gateway.bot.get().catch(error => {
      throw error.httpStatus === 401 ? invalidToken : error;
    });

    this.sessionStartLimit = sessionStartLimit;

    const { total, remaining, reset_after } = sessionStartLimit;

    this.debug(`Fetched Gateway Information
    URL: ${gatewayURL}
    Recommended Shards: ${recommendedShards}`);

    this.debug(`Session Limit Information
    Total: ${total}
    Remaining: ${remaining}`);

    this.gateway = `${gatewayURL}/`;

    let { shards } = this.client.options;

    if (shards === 'auto') {
      this.debug(`Using the recommended shard count provided by Discord: ${recommendedShards}`);
      this.totalShards = this.client.options.shardCount = recommendedShards;
      shards = this.client.options.shards = Array.from({ length: recommendedShards }, (_, i) => i);
    }

    this.totalShards = shards.length;
    this.debug(`Spawning shards: ${shards.join(', ')}`);
    this.shardQueue = new Set(shards.map(id => new WebSocketShard(this, id)));

    await this._handleSessionLimit(remaining, reset_after);

    return this.createShards();
  }

  /**
   * Handles the creation of a shard.
   * @returns {Promise<boolean>}
   * @private
   */
  async createShards() {
    // If we don't have any shards to handle, return
    if (!this.shardQueue.size) return false;

    const [shard] = this.shardQueue;

    this.shardQueue.delete(shard);

    if (!shard.eventsAttached) {
      shard.on(ShardEvents.ALL_READY, unavailableGuilds => {
        /**
         * Emitted when a shard turns ready.
         * @event Client#shardReady
         * @param {number} id The shard ID that turned ready
         * @param {?Set<string>} unavailableGuilds Set of unavailable guild IDs, if any
         */
        this.client.emit(Events.SHARD_READY, shard.id, unavailableGuilds);

        if (!this.shardQueue.size) this.reconnecting = false;
        this.checkShardsReady();
      });

      shard.on(ShardEvents.CLOSE, event => {
        if (event.code === 1000 ? this.destroyed : UNRECOVERABLE_CLOSE_CODES.includes(event.code)) {
          /**
           * Emitted when a shard's WebSocket disconnects and will no longer reconnect.
           * @event Client#shardDisconnect
           * @param {CloseEvent} event The WebSocket close event
           * @param {number} id The shard ID that disconnected
           */
          this.client.emit(Events.SHARD_DISCONNECT, event, shard.id);
          this.debug(WSCodes[event.code], shard);
          return;
        }

        if (UNRESUMABLE_CLOSE_CODES.includes(event.code)) {
          // These event codes cannot be resumed
          shard.sessionID = null;
        }

        /**
         * Emitted when a shard is attempting to reconnect or re-identify.
         * @event Client#shardReconnecting
         * @param {number} id The shard ID that is attempting to reconnect
         */
        this.client.emit(Events.SHARD_RECONNECTING, shard.id);

        this.shardQueue.add(shard);

        if (shard.sessionID) {
          this.debug(`Session ID is present, attempting an immediate reconnect...`, shard);
          this.reconnect(true);
        } else {
          shard.destroy({ reset: true, emit: false, log: false });
          this.reconnect();
        }
      });

      shard.on(ShardEvents.INVALID_SESSION, () => {
        this.client.emit(Events.SHARD_RECONNECTING, shard.id);
      });

      shard.on(ShardEvents.DESTROYED, () => {
        this.debug('Shard was destroyed but no WebSocket connection was present! Reconnecting...', shard);

        this.client.emit(Events.SHARD_RECONNECTING, shard.id);

        this.shardQueue.add(shard);
        this.reconnect();
      });

      shard.eventsAttached = true;
    }

    this.shards.set(shard.id, shard);

    try {
      await shard.connect();
    } catch (error) {
      if (error && error.code && UNRECOVERABLE_CLOSE_CODES.includes(error.code)) {
        throw new DJSError(WSCodes[error.code]);
        // Undefined if session is invalid, error event for regular closes
      } else if (!error || error.code) {
        this.debug('Failed to connect to the gateway, requeueing...', shard);
        this.shardQueue.add(shard);
      } else {
        throw error;
      }
    }
    // If we have more shards, add a 5s delay
    if (this.shardQueue.size) {
      this.debug(`Shard Queue Size: ${this.shardQueue.size}; continuing in 5 seconds...`);
      await Util.delayFor(5000);
      await this._handleSessionLimit();
      return this.createShards();
    }

    return true;
  }

  /**
   * Handles reconnects for this manager.
   * @param {boolean} [skipLimit=false] IF this reconnect should skip checking the session limit
   * @private
   * @returns {Promise<boolean>}
   */
  async reconnect(skipLimit = false) {
    if (this.reconnecting || this.status !== Status.READY) return false;
    this.reconnecting = true;
    try {
      if (!skipLimit) await this._handleSessionLimit();
      await this.createShards();
    } catch (error) {
      this.debug(`Couldn't reconnect or fetch information about the gateway. ${error}`);
      if (error.httpStatus !== 401) {
        this.debug(`Possible network error occurred. Retrying in 5s...`);
        await Util.delayFor(5000);
        this.reconnecting = false;
        return this.reconnect();
      }
      // If we get an error at this point, it means we cannot reconnect anymore
      if (this.client.listenerCount(Events.INVALIDATED)) {
        /**
         * Emitted when the client's session becomes invalidated.
         * You are expected to handle closing the process gracefully and preventing a boot loop
         * if you are listening to this event.
         * @event Client#invalidated
         */
        this.client.emit(Events.INVALIDATED);
        // Destroy just the shards. This means you have to handle the cleanup yourself
        this.destroy();
      } else {
        this.client.destroy();
      }
    } finally {
      this.reconnecting = false;
    }
    return true;
  }

  /**
   * Broadcasts a packet to every shard this manager handles.
   * @param {Object} packet The packet to send
   * @private
   */
  broadcast(packet) {
    for (const shard of this.shards.values()) shard.send(packet);
  }

  /**
   * Destroys this manager and all its shards.
   * @private
   */
  destroy() {
    if (this.destroyed) return;
    this.debug(`Manager was destroyed. Called by:\n${new Error('MANAGER_DESTROYED').stack}`);
    this.destroyed = true;
    this.shardQueue.clear();
    for (const shard of this.shards.values()) shard.destroy({ closeCode: 1000, reset: true, emit: false, log: false });
  }

  /**
   * Handles the timeout required if we cannot identify anymore.
   * @param {number} [remaining] The amount of remaining identify sessions that can be done today
   * @param {number} [resetAfter] The amount of time in which the identify counter resets
   * @private
   */
  async _handleSessionLimit(remaining, resetAfter) {
    if (typeof remaining === 'undefined' && typeof resetAfter === 'undefined') {
      const { session_start_limit } = await this.client.api.gateway.bot.get();
      this.sessionStartLimit = session_start_limit;
      remaining = session_start_limit.remaining;
      resetAfter = session_start_limit.reset_after;
      this.debug(`Session Limit Information
    Total: ${session_start_limit.total}
    Remaining: ${remaining}`);
    }
    if (!remaining) {
      this.debug(`Exceeded identify threshold. Will attempt a connection in ${resetAfter}ms`);
      await Util.delayFor(resetAfter);
    }
  }

  /**
   * Processes a packet and queues it if this WebSocketManager is not ready.
   * @param {Object} [packet] The packet to be handled
   * @param {WebSocketShard} [shard] The shard that will handle this packet
   * @returns {boolean}
   * @private
   */
  handlePacket(packet, shard) {
    if (packet && this.status !== Status.READY) {
      if (!BeforeReadyWhitelist.includes(packet.t)) {
        this.packetQueue.push({ packet, shard });
        return false;
      }
    }

    if (this.packetQueue.length) {
      const item = this.packetQueue.shift();
      this.client.setImmediate(() => {
        this.handlePacket(item.packet, item.shard);
      });
    }

    if (packet && PacketHandlers[packet.t]) {
      PacketHandlers[packet.t](this.client, packet, shard);
    }

    return true;
  }

  /**
   * Checks whether the client is ready to be marked as ready.
   * @private
   */
  async checkShardsReady() {
    if (this.status === Status.READY) return;
    if (this.shards.size !== this.totalShards || this.shards.some(s => s.status !== Status.READY)) {
      return;
    }

    this.status = Status.NEARLY;

    if (this.client.options.fetchAllMembers) {
      try {
        const promises = this.client.guilds.cache.map(guild => {
          if (guild.available) return guild.members.fetch();
          // Return empty promise if guild is unavailable
          return Promise.resolve();
        });
        await Promise.all(promises);
      } catch (err) {
        this.debug(`Failed to fetch all members before ready! ${err}\n${err.stack}`);
      }
    }

    this.triggerClientReady();
  }

  /**
   * Causes the client to be marked as ready and emits the ready event.
   * @private
   */
  triggerClientReady() {
    this.status = Status.READY;

    this.client.readyAt = new Date();

    /**
     * Emitted when the client becomes ready to start working.
     * @event Client#ready
     */
    this.client.emit(Events.CLIENT_READY);

    this.handlePacket();
  }
}

module.exports = WebSocketManager;


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/WebSocketShard.js":
/*!************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/WebSocketShard.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js");
const WebSocket = __webpack_require__(/*! ../../WebSocket */ "./node_modules/discord.js/src/WebSocket.js");
const { browser, Status, Events, ShardEvents, OPCodes, WSEvents } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

const STATUS_KEYS = Object.keys(Status);
const CONNECTION_STATE = Object.keys(WebSocket.WebSocket);

let zlib;

if (!browser) {
  try {
    zlib = __webpack_require__(/*! zlib-sync */ "?ca8b");
  } catch {} // eslint-disable-line no-empty
}

/**
 * Represents a Shard's WebSocket connection
 */
class WebSocketShard extends EventEmitter {
  constructor(manager, id) {
    super();

    /**
     * The WebSocketManager of the shard
     * @type {WebSocketManager}
     */
    this.manager = manager;

    /**
     * The ID of the shard
     * @type {number}
     */
    this.id = id;

    /**
     * The current status of the shard
     * @type {Status}
     */
    this.status = Status.IDLE;

    /**
     * The current sequence of the shard
     * @type {number}
     * @private
     */
    this.sequence = -1;

    /**
     * The sequence of the shard after close
     * @type {number}
     * @private
     */
    this.closeSequence = 0;

    /**
     * The current session ID of the shard
     * @type {?string}
     * @private
     */
    this.sessionID = null;

    /**
     * The previous heartbeat ping of the shard
     * @type {number}
     */
    this.ping = -1;

    /**
     * The last time a ping was sent (a timestamp)
     * @type {number}
     * @private
     */
    this.lastPingTimestamp = -1;

    /**
     * If we received a heartbeat ack back. Used to identify zombie connections
     * @type {boolean}
     * @private
     */
    this.lastHeartbeatAcked = true;

    /**
     * Contains the rate limit queue and metadata
     * @name WebSocketShard#ratelimit
     * @type {Object}
     * @private
     */
    Object.defineProperty(this, 'ratelimit', {
      value: {
        queue: [],
        total: 120,
        remaining: 120,
        time: 60e3,
        timer: null,
      },
    });

    /**
     * The WebSocket connection for the current shard
     * @name WebSocketShard#connection
     * @type {?WebSocket}
     * @private
     */
    Object.defineProperty(this, 'connection', { value: null, writable: true });

    /**
     * @external Inflate
     * @see {@link https://www.npmjs.com/package/zlib-sync}
     */

    /**
     * The compression to use
     * @name WebSocketShard#inflate
     * @type {?Inflate}
     * @private
     */
    Object.defineProperty(this, 'inflate', { value: null, writable: true });

    /**
     * The HELLO timeout
     * @name WebSocketShard#helloTimeout
     * @type {?NodeJS.Timeout}
     * @private
     */
    Object.defineProperty(this, 'helloTimeout', { value: null, writable: true });

    /**
     * If the manager attached its event handlers on the shard
     * @name WebSocketShard#eventsAttached
     * @type {boolean}
     * @private
     */
    Object.defineProperty(this, 'eventsAttached', { value: false, writable: true });

    /**
     * A set of guild IDs this shard expects to receive
     * @name WebSocketShard#expectedGuilds
     * @type {?Set<string>}
     * @private
     */
    Object.defineProperty(this, 'expectedGuilds', { value: null, writable: true });

    /**
     * The ready timeout
     * @name WebSocketShard#readyTimeout
     * @type {?NodeJS.Timeout}
     * @private
     */
    Object.defineProperty(this, 'readyTimeout', { value: null, writable: true });

    /**
     * Time when the WebSocket connection was opened
     * @name WebSocketShard#connectedAt
     * @type {number}
     * @private
     */
    Object.defineProperty(this, 'connectedAt', { value: 0, writable: true });
  }

  /**
   * Emits a debug event.
   * @param {string} message The debug message
   * @private
   */
  debug(message) {
    this.manager.debug(message, this);
  }

  /**
   * Connects the shard to the gateway.
   * @private
   * @returns {Promise<void>} A promise that will resolve if the shard turns ready successfully,
   * or reject if we couldn't connect
   */
  connect() {
    const { gateway, client } = this.manager;

    if (this.connection && this.connection.readyState === WebSocket.OPEN && this.status === Status.READY) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const cleanup = () => {
        this.removeListener(ShardEvents.CLOSE, onClose);
        this.removeListener(ShardEvents.READY, onReady);
        this.removeListener(ShardEvents.RESUMED, onResumed);
        this.removeListener(ShardEvents.INVALID_SESSION, onInvalidOrDestroyed);
        this.removeListener(ShardEvents.DESTROYED, onInvalidOrDestroyed);
      };

      const onReady = () => {
        cleanup();
        resolve();
      };

      const onResumed = () => {
        cleanup();
        resolve();
      };

      const onClose = event => {
        cleanup();
        reject(event);
      };

      const onInvalidOrDestroyed = () => {
        cleanup();
        // eslint-disable-next-line prefer-promise-reject-errors
        reject();
      };

      this.once(ShardEvents.READY, onReady);
      this.once(ShardEvents.RESUMED, onResumed);
      this.once(ShardEvents.CLOSE, onClose);
      this.once(ShardEvents.INVALID_SESSION, onInvalidOrDestroyed);
      this.once(ShardEvents.DESTROYED, onInvalidOrDestroyed);

      if (this.connection && this.connection.readyState === WebSocket.OPEN) {
        this.debug('An open connection was found, attempting an immediate identify.');
        this.identify();
        return;
      }

      if (this.connection) {
        this.debug(`A connection object was found. Cleaning up before continuing.
    State: ${CONNECTION_STATE[this.connection.readyState]}`);
        this.destroy({ emit: false });
      }

      const wsQuery = { v: client.options.ws.version };

      if (zlib) {
        this.inflate = new zlib.Inflate({
          chunkSize: 65535,
          flush: zlib.Z_SYNC_FLUSH,
          to: WebSocket.encoding === 'json' ? 'string' : '',
        });
        wsQuery.compress = 'zlib-stream';
      }

      this.debug(
        `[CONNECT]
    Gateway    : ${gateway}
    Version    : ${client.options.ws.version}
    Encoding   : ${WebSocket.encoding}
    Compression: ${zlib ? 'zlib-stream' : 'none'}`,
      );

      this.status = this.status === Status.DISCONNECTED ? Status.RECONNECTING : Status.CONNECTING;
      this.setHelloTimeout();

      this.connectedAt = Date.now();

      const ws = (this.connection = WebSocket.create(gateway, wsQuery));
      ws.onopen = this.onOpen.bind(this);
      ws.onmessage = this.onMessage.bind(this);
      ws.onerror = this.onError.bind(this);
      ws.onclose = this.onClose.bind(this);
    });
  }

  /**
   * Called whenever a connection is opened to the gateway.
   * @private
   */
  onOpen() {
    this.debug(`[CONNECTED] ${this.connection.url} in ${Date.now() - this.connectedAt}ms`);
    this.status = Status.NEARLY;
  }

  /**
   * Called whenever a message is received.
   * @param {MessageEvent} event Event received
   * @private
   */
  onMessage({ data }) {
    let raw;
    if (data instanceof ArrayBuffer) data = new Uint8Array(data);
    if (zlib) {
      const l = data.length;
      const flush =
        l >= 4 && data[l - 4] === 0x00 && data[l - 3] === 0x00 && data[l - 2] === 0xff && data[l - 1] === 0xff;

      this.inflate.push(data, flush && zlib.Z_SYNC_FLUSH);
      if (!flush) return;
      raw = this.inflate.result;
    } else {
      raw = data;
    }
    let packet;
    try {
      packet = WebSocket.unpack(raw);
      this.manager.client.emit(Events.RAW, packet, this.id);
      if (packet.op === OPCodes.DISPATCH) this.manager.emit(packet.t, packet.d, this.id);
    } catch (err) {
      this.manager.client.emit(Events.SHARD_ERROR, err, this.id);
      return;
    }
    this.onPacket(packet);
  }

  /**
   * Called whenever an error occurs with the WebSocket.
   * @param {ErrorEvent} event The error that occurred
   * @private
   */
  onError(event) {
    const error = event && event.error ? event.error : event;
    if (!error) return;

    /**
     * Emitted whenever a shard's WebSocket encounters a connection error.
     * @event Client#shardError
     * @param {Error} error The encountered error
     * @param {number} shardID The shard that encountered this error
     */
    this.manager.client.emit(Events.SHARD_ERROR, error, this.id);
  }

  /**
   * @external CloseEvent
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent}
   */

  /**
   * @external ErrorEvent
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent}
   */

  /**
   * @external MessageEvent
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent}
   */

  /**
   * Called whenever a connection to the gateway is closed.
   * @param {CloseEvent} event Close event that was received
   * @private
   */
  onClose(event) {
    if (this.sequence !== -1) this.closeSequence = this.sequence;
    this.sequence = -1;

    this.debug(`[CLOSE]
    Event Code: ${event.code}
    Clean     : ${event.wasClean}
    Reason    : ${event.reason || 'No reason received'}`);

    this.setHeartbeatTimer(-1);
    this.setHelloTimeout(-1);
    // If we still have a connection object, clean up its listeners
    if (this.connection) this._cleanupConnection();

    this.status = Status.DISCONNECTED;

    /**
     * Emitted when a shard's WebSocket closes.
     * @private
     * @event WebSocketShard#close
     * @param {CloseEvent} event The received event
     */
    this.emit(ShardEvents.CLOSE, event);
  }

  /**
   * Called whenever a packet is received.
   * @param {Object} packet The received packet
   * @private
   */
  onPacket(packet) {
    if (!packet) {
      this.debug(`Received broken packet: '${packet}'.`);
      return;
    }

    switch (packet.t) {
      case WSEvents.READY:
        /**
         * Emitted when the shard receives the READY payload and is now waiting for guilds
         * @event WebSocketShard#ready
         */
        this.emit(ShardEvents.READY);

        this.sessionID = packet.d.session_id;
        this.expectedGuilds = new Set(packet.d.guilds.map(d => d.id));
        this.status = Status.WAITING_FOR_GUILDS;
        this.debug(`[READY] Session ${this.sessionID}.`);
        this.lastHeartbeatAcked = true;
        this.sendHeartbeat('ReadyHeartbeat');
        break;
      case WSEvents.RESUMED: {
        /**
         * Emitted when the shard resumes successfully
         * @event WebSocketShard#resumed
         */
        this.emit(ShardEvents.RESUMED);

        this.status = Status.READY;
        const replayed = packet.s - this.closeSequence;
        this.debug(`[RESUMED] Session ${this.sessionID} | Replayed ${replayed} events.`);
        this.lastHeartbeatAcked = true;
        this.sendHeartbeat('ResumeHeartbeat');
        break;
      }
    }

    if (packet.s > this.sequence) this.sequence = packet.s;

    switch (packet.op) {
      case OPCodes.HELLO:
        this.setHelloTimeout(-1);
        this.setHeartbeatTimer(packet.d.heartbeat_interval);
        this.identify();
        break;
      case OPCodes.RECONNECT:
        this.debug('[RECONNECT] Discord asked us to reconnect');
        this.destroy({ closeCode: 4000 });
        break;
      case OPCodes.INVALID_SESSION:
        this.debug(`[INVALID SESSION] Resumable: ${packet.d}.`);
        // If we can resume the session, do so immediately
        if (packet.d) {
          this.identifyResume();
          return;
        }
        // Reset the sequence
        this.sequence = -1;
        // Reset the session ID as it's invalid
        this.sessionID = null;
        // Set the status to reconnecting
        this.status = Status.RECONNECTING;
        // Finally, emit the INVALID_SESSION event
        this.emit(ShardEvents.INVALID_SESSION);
        break;
      case OPCodes.HEARTBEAT_ACK:
        this.ackHeartbeat();
        break;
      case OPCodes.HEARTBEAT:
        this.sendHeartbeat('HeartbeatRequest', true);
        break;
      default:
        this.manager.handlePacket(packet, this);
        if (this.status === Status.WAITING_FOR_GUILDS && packet.t === WSEvents.GUILD_CREATE) {
          this.expectedGuilds.delete(packet.d.id);
          this.checkReady();
        }
    }
  }

  /**
   * Checks if the shard can be marked as ready
   * @private
   */
  checkReady() {
    // Step 0. Clear the ready timeout, if it exists
    if (this.readyTimeout) {
      this.manager.client.clearTimeout(this.readyTimeout);
      this.readyTimeout = null;
    }
    // Step 1. If we don't have any other guilds pending, we are ready
    if (!this.expectedGuilds.size) {
      this.debug('Shard received all its guilds. Marking as fully ready.');
      this.status = Status.READY;

      /**
       * Emitted when the shard is fully ready.
       * This event is emitted if:
       * * all guilds were received by this shard
       * * the ready timeout expired, and some guilds are unavailable
       * @event WebSocketShard#allReady
       * @param {?Set<string>} unavailableGuilds Set of unavailable guilds, if any
       */
      this.emit(ShardEvents.ALL_READY);
      return;
    }
    // Step 2. Create a 15s timeout that will mark the shard as ready if there are still unavailable guilds
    this.readyTimeout = this.manager.client.setTimeout(() => {
      this.debug(`Shard did not receive any more guild packets in 15 seconds.
  Unavailable guild count: ${this.expectedGuilds.size}`);

      this.readyTimeout = null;

      this.status = Status.READY;

      this.emit(ShardEvents.ALL_READY, this.expectedGuilds);
    }, 15000);
  }

  /**
   * Sets the HELLO packet timeout.
   * @param {number} [time] If set to -1, it will clear the hello timeout timeout
   * @private
   */
  setHelloTimeout(time) {
    if (time === -1) {
      if (this.helloTimeout) {
        this.debug('Clearing the HELLO timeout.');
        this.manager.client.clearTimeout(this.helloTimeout);
        this.helloTimeout = null;
      }
      return;
    }
    this.debug('Setting a HELLO timeout for 20s.');
    this.helloTimeout = this.manager.client.setTimeout(() => {
      this.debug('Did not receive HELLO in time. Destroying and connecting again.');
      this.destroy({ reset: true, closeCode: 4009 });
    }, 20000);
  }

  /**
   * Sets the heartbeat timer for this shard.
   * @param {number} time If -1, clears the interval, any other number sets an interval
   * @private
   */
  setHeartbeatTimer(time) {
    if (time === -1) {
      if (this.heartbeatInterval) {
        this.debug('Clearing the heartbeat interval.');
        this.manager.client.clearInterval(this.heartbeatInterval);
        this.heartbeatInterval = null;
      }
      return;
    }
    this.debug(`Setting a heartbeat interval for ${time}ms.`);
    // Sanity checks
    if (this.heartbeatInterval) this.manager.client.clearInterval(this.heartbeatInterval);
    this.heartbeatInterval = this.manager.client.setInterval(() => this.sendHeartbeat(), time);
  }

  /**
   * Sends a heartbeat to the WebSocket.
   * If this shard didn't receive a heartbeat last time, it will destroy it and reconnect
   * @param {string} [tag='HeartbeatTimer'] What caused this heartbeat to be sent
   * @param {boolean} [ignoreHeartbeatAck] If we should send the heartbeat forcefully.
   * @private
   */
  sendHeartbeat(
    tag = 'HeartbeatTimer',
    ignoreHeartbeatAck = [Status.WAITING_FOR_GUILDS, Status.IDENTIFYING, Status.RESUMING].includes(this.status),
  ) {
    if (ignoreHeartbeatAck && !this.lastHeartbeatAcked) {
      this.debug(`[${tag}] Didn't process heartbeat ack yet but we are still connected. Sending one now.`);
    } else if (!this.lastHeartbeatAcked) {
      this.debug(
        `[${tag}] Didn't receive a heartbeat ack last time, assuming zombie connection. Destroying and reconnecting.
    Status          : ${STATUS_KEYS[this.status]}
    Sequence        : ${this.sequence}
    Connection State: ${this.connection ? CONNECTION_STATE[this.connection.readyState] : 'No Connection??'}`,
      );

      this.destroy({ closeCode: 4009, reset: true });
      return;
    }

    this.debug(`[${tag}] Sending a heartbeat.`);
    this.lastHeartbeatAcked = false;
    this.lastPingTimestamp = Date.now();
    this.send({ op: OPCodes.HEARTBEAT, d: this.sequence }, true);
  }

  /**
   * Acknowledges a heartbeat.
   * @private
   */
  ackHeartbeat() {
    this.lastHeartbeatAcked = true;
    const latency = Date.now() - this.lastPingTimestamp;
    this.debug(`Heartbeat acknowledged, latency of ${latency}ms.`);
    this.ping = latency;
  }

  /**
   * Identifies the client on the connection.
   * @private
   * @returns {void}
   */
  identify() {
    return this.sessionID ? this.identifyResume() : this.identifyNew();
  }

  /**
   * Identifies as a new connection on the gateway.
   * @private
   */
  identifyNew() {
    const { client } = this.manager;
    if (!client.token) {
      this.debug('[IDENTIFY] No token available to identify a new session.');
      return;
    }

    this.status = Status.IDENTIFYING;

    // Clone the identify payload and assign the token and shard info
    const d = {
      ...client.options.ws,
      token: client.token,
      shard: [this.id, Number(client.options.shardCount)],
    };

    this.debug(`[IDENTIFY] Shard ${this.id}/${client.options.shardCount}`);
    this.send({ op: OPCodes.IDENTIFY, d }, true);
  }

  /**
   * Resumes a session on the gateway.
   * @private
   */
  identifyResume() {
    if (!this.sessionID) {
      this.debug('[RESUME] No session ID was present; identifying as a new session.');
      this.identifyNew();
      return;
    }

    this.status = Status.RESUMING;

    this.debug(`[RESUME] Session ${this.sessionID}, sequence ${this.closeSequence}`);

    const d = {
      token: this.manager.client.token,
      session_id: this.sessionID,
      seq: this.closeSequence,
    };

    this.send({ op: OPCodes.RESUME, d }, true);
  }

  /**
   * Adds a packet to the queue to be sent to the gateway.
   * <warn>If you use this method, make sure you understand that you need to provide
   * a full [Payload](https://discord.com/developers/docs/topics/gateway#commands-and-events-gateway-commands).
   * Do not use this method if you don't know what you're doing.</warn>
   * @param {Object} data The full packet to send
   * @param {boolean} [important=false] If this packet should be added first in queue
   */
  send(data, important = false) {
    this.ratelimit.queue[important ? 'unshift' : 'push'](data);
    this.processQueue();
  }

  /**
   * Sends data, bypassing the queue.
   * @param {Object} data Packet to send
   * @returns {void}
   * @private
   */
  _send(data) {
    if (!this.connection || this.connection.readyState !== WebSocket.OPEN) {
      this.debug(`Tried to send packet '${JSON.stringify(data)}' but no WebSocket is available!`);
      this.destroy({ close: 4000 });
      return;
    }

    this.connection.send(WebSocket.pack(data), err => {
      if (err) this.manager.client.emit(Events.SHARD_ERROR, err, this.id);
    });
  }

  /**
   * Processes the current WebSocket queue.
   * @returns {void}
   * @private
   */
  processQueue() {
    if (this.ratelimit.remaining === 0) return;
    if (this.ratelimit.queue.length === 0) return;
    if (this.ratelimit.remaining === this.ratelimit.total) {
      this.ratelimit.timer = this.manager.client.setTimeout(() => {
        this.ratelimit.remaining = this.ratelimit.total;
        this.processQueue();
      }, this.ratelimit.time);
    }
    while (this.ratelimit.remaining > 0) {
      const item = this.ratelimit.queue.shift();
      if (!item) return;
      this._send(item);
      this.ratelimit.remaining--;
    }
  }

  /**
   * Destroys this shard and closes its WebSocket connection.
   * @param {Object} [options={ closeCode: 1000, reset: false, emit: true, log: true }] Options for destroying the shard
   * @private
   */
  destroy({ closeCode = 1000, reset = false, emit = true, log = true } = {}) {
    if (log) {
      this.debug(`[DESTROY]
    Close Code    : ${closeCode}
    Reset         : ${reset}
    Emit DESTROYED: ${emit}`);
    }

    // Step 0: Remove all timers
    this.setHeartbeatTimer(-1);
    this.setHelloTimeout(-1);

    // Step 1: Close the WebSocket connection, if any, otherwise, emit DESTROYED
    if (this.connection) {
      // If the connection is currently opened, we will (hopefully) receive close
      if (this.connection.readyState === WebSocket.OPEN) {
        this.connection.close(closeCode);
      } else {
        // Connection is not OPEN
        this.debug(`WS State: ${CONNECTION_STATE[this.connection.readyState]}`);
        // Remove listeners from the connection
        this._cleanupConnection();
        // Attempt to close the connection just in case
        try {
          this.connection.close(closeCode);
        } catch {
          // No-op
        }
        // Emit the destroyed event if needed
        if (emit) this._emitDestroyed();
      }
    } else if (emit) {
      // We requested a destroy, but we had no connection. Emit destroyed
      this._emitDestroyed();
    }

    // Step 2: Null the connection object
    this.connection = null;

    // Step 3: Set the shard status to DISCONNECTED
    this.status = Status.DISCONNECTED;

    // Step 4: Cache the old sequence (use to attempt a resume)
    if (this.sequence !== -1) this.closeSequence = this.sequence;

    // Step 5: Reset the sequence and session ID if requested
    if (reset) {
      this.sequence = -1;
      this.sessionID = null;
    }

    // Step 6: reset the ratelimit data
    this.ratelimit.remaining = this.ratelimit.total;
    this.ratelimit.queue.length = 0;
    if (this.ratelimit.timer) {
      this.manager.client.clearTimeout(this.ratelimit.timer);
      this.ratelimit.timer = null;
    }
  }

  /**
   * Cleans up the WebSocket connection listeners.
   * @private
   */
  _cleanupConnection() {
    this.connection.onopen = this.connection.onclose = this.connection.onerror = this.connection.onmessage = null;
  }

  /**
   * Emits the DESTROYED event on the shard
   * @private
   */
  _emitDestroyed() {
    /**
     * Emitted when a shard is destroyed, but no WebSocket connection was present.
     * @private
     * @event WebSocketShard#destroyed
     */
    this.emit(ShardEvents.DESTROYED);
  }
}

module.exports = WebSocketShard;


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/CHANNEL_CREATE.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/CHANNEL_CREATE.js ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (client, packet) => {
  client.actions.ChannelCreate.handle(packet.d);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/CHANNEL_DELETE.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/CHANNEL_DELETE.js ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (client, packet) => {
  client.actions.ChannelDelete.handle(packet.d);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/CHANNEL_PINS_UPDATE.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/CHANNEL_PINS_UPDATE.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { Events } = __webpack_require__(/*! ../../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

module.exports = (client, { d: data }) => {
  const channel = client.channels.cache.get(data.channel_id);
  const time = new Date(data.last_pin_timestamp);

  if (channel && !Number.isNaN(time.getTime())) {
    // Discord sends null for last_pin_timestamp if the last pinned message was removed
    channel.lastPinTimestamp = time.getTime() || null;

    /**
     * Emitted whenever the pins of a channel are updated. Due to the nature of the WebSocket event,
     * not much information can be provided easily here - you need to manually check the pins yourself.
     * @event Client#channelPinsUpdate
     * @param {DMChannel|TextChannel} channel The channel that the pins update occurred in
     * @param {Date} time The time of the pins update
     */
    client.emit(Events.CHANNEL_PINS_UPDATE, channel, time);
  }
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/CHANNEL_UPDATE.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/CHANNEL_UPDATE.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { Events } = __webpack_require__(/*! ../../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

module.exports = (client, packet) => {
  const { old, updated } = client.actions.ChannelUpdate.handle(packet.d);
  if (old && updated) {
    /**
     * Emitted whenever a channel is updated - e.g. name change, topic change, channel type change.
     * @event Client#channelUpdate
     * @param {DMChannel|GuildChannel} oldChannel The channel before the update
     * @param {DMChannel|GuildChannel} newChannel The channel after the update
     */
    client.emit(Events.CHANNEL_UPDATE, old, updated);
  }
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/GUILD_BAN_ADD.js":
/*!********************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/GUILD_BAN_ADD.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { Events } = __webpack_require__(/*! ../../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

module.exports = (client, { d: data }) => {
  const guild = client.guilds.cache.get(data.guild_id);
  const user = client.users.add(data.user);

  /**
   * Emitted whenever a member is banned from a guild.
   * @event Client#guildBanAdd
   * @param {Guild} guild The guild that the ban occurred in
   * @param {User} user The user that was banned
   */
  if (guild && user) client.emit(Events.GUILD_BAN_ADD, guild, user);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/GUILD_BAN_REMOVE.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/GUILD_BAN_REMOVE.js ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (client, packet) => {
  client.actions.GuildBanRemove.handle(packet.d);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/GUILD_CREATE.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/GUILD_CREATE.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { Events, Status } = __webpack_require__(/*! ../../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

module.exports = async (client, { d: data }, shard) => {
  let guild = client.guilds.cache.get(data.id);
  if (guild) {
    if (!guild.available && !data.unavailable) {
      // A newly available guild
      guild._patch(data);
      // If the client was ready before and we had unavailable guilds, fetch them
      if (client.ws.status === Status.READY && client.options.fetchAllMembers) {
        await guild.members
          .fetch()
          .catch(err => client.emit(Events.DEBUG, `Failed to fetch all members: ${err}\n${err.stack}`));
      }
    }
  } else {
    // A new guild
    data.shardID = shard.id;
    guild = client.guilds.add(data);
    if (client.ws.status === Status.READY) {
      /**
       * Emitted whenever the client joins a guild.
       * @event Client#guildCreate
       * @param {Guild} guild The created guild
       */
      if (client.options.fetchAllMembers) {
        await guild.members
          .fetch()
          .catch(err => client.emit(Events.DEBUG, `Failed to fetch all members: ${err}\n${err.stack}`));
      }
      client.emit(Events.GUILD_CREATE, guild);
    }
  }
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/GUILD_DELETE.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/GUILD_DELETE.js ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (client, packet) => {
  client.actions.GuildDelete.handle(packet.d);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/GUILD_EMOJIS_UPDATE.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/GUILD_EMOJIS_UPDATE.js ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (client, packet) => {
  client.actions.GuildEmojisUpdate.handle(packet.d);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/GUILD_INTEGRATIONS_UPDATE.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/GUILD_INTEGRATIONS_UPDATE.js ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (client, packet) => {
  client.actions.GuildIntegrationsUpdate.handle(packet.d);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBERS_CHUNK.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBERS_CHUNK.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Collection = __webpack_require__(/*! ../../../util/Collection */ "./node_modules/discord.js/src/util/Collection.js");
const { Events } = __webpack_require__(/*! ../../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

module.exports = (client, { d: data }) => {
  const guild = client.guilds.cache.get(data.guild_id);
  if (!guild) return;
  const members = new Collection();

  for (const member of data.members) members.set(member.user.id, guild.members.add(member));
  if (data.presences) {
    for (const presence of data.presences) guild.presences.add(Object.assign(presence, { guild }));
  }
  /**
   * Emitted whenever a chunk of guild members is received (all members come from the same guild).
   * @event Client#guildMembersChunk
   * @param {Collection<Snowflake, GuildMember>} members The members in the chunk
   * @param {Guild} guild The guild related to the member chunk
   * @param {Object} chunk Properties of the received chunk
   * @param {number} chunk.index Index of the received chunk
   * @param {number} chunk.count Number of chunks the client should receive
   * @param {?string} chunk.nonce Nonce for this chunk
   */
  client.emit(Events.GUILD_MEMBERS_CHUNK, members, guild, {
    count: data.chunk_count,
    index: data.chunk_index,
    nonce: data.nonce,
  });
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_ADD.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_ADD.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { Events, Status } = __webpack_require__(/*! ../../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

module.exports = (client, { d: data }, shard) => {
  const guild = client.guilds.cache.get(data.guild_id);
  if (guild) {
    guild.memberCount++;
    const member = guild.members.add(data);
    if (shard.status === Status.READY) {
      /**
       * Emitted whenever a user joins a guild.
       * @event Client#guildMemberAdd
       * @param {GuildMember} member The member that has joined a guild
       */
      client.emit(Events.GUILD_MEMBER_ADD, member);
    }
  }
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_REMOVE.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_REMOVE.js ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (client, packet, shard) => {
  client.actions.GuildMemberRemove.handle(packet.d, shard);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_UPDATE.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_UPDATE.js ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (client, packet, shard) => {
  client.actions.GuildMemberUpdate.handle(packet.d, shard);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_CREATE.js":
/*!************************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_CREATE.js ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (client, packet) => {
  client.actions.GuildRoleCreate.handle(packet.d);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_DELETE.js":
/*!************************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_DELETE.js ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (client, packet) => {
  client.actions.GuildRoleDelete.handle(packet.d);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_UPDATE.js":
/*!************************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_UPDATE.js ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (client, packet) => {
  client.actions.GuildRoleUpdate.handle(packet.d);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/GUILD_UPDATE.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/GUILD_UPDATE.js ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (client, packet) => {
  client.actions.GuildUpdate.handle(packet.d);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/INVITE_CREATE.js":
/*!********************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/INVITE_CREATE.js ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (client, packet) => {
  client.actions.InviteCreate.handle(packet.d);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/INVITE_DELETE.js":
/*!********************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/INVITE_DELETE.js ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (client, packet) => {
  client.actions.InviteDelete.handle(packet.d);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/MESSAGE_CREATE.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/MESSAGE_CREATE.js ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (client, packet) => {
  client.actions.MessageCreate.handle(packet.d);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/MESSAGE_DELETE.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/MESSAGE_DELETE.js ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (client, packet) => {
  client.actions.MessageDelete.handle(packet.d);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/MESSAGE_DELETE_BULK.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/MESSAGE_DELETE_BULK.js ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (client, packet) => {
  client.actions.MessageDeleteBulk.handle(packet.d);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_ADD.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_ADD.js ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (client, packet) => {
  client.actions.MessageReactionAdd.handle(packet.d);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE.js ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (client, packet) => {
  client.actions.MessageReactionRemove.handle(packet.d);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE_ALL.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE_ALL.js ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (client, packet) => {
  client.actions.MessageReactionRemoveAll.handle(packet.d);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE_EMOJI.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE_EMOJI.js ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (client, packet) => {
  client.actions.MessageReactionRemoveEmoji.handle(packet.d);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/MESSAGE_UPDATE.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/MESSAGE_UPDATE.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { Events } = __webpack_require__(/*! ../../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

module.exports = (client, packet) => {
  const { old, updated } = client.actions.MessageUpdate.handle(packet.d);
  if (old && updated) {
    /**
     * Emitted whenever a message is updated - e.g. embed or content change.
     * @event Client#messageUpdate
     * @param {Message} oldMessage The message before the update
     * @param {Message} newMessage The message after the update
     */
    client.emit(Events.MESSAGE_UPDATE, old, updated);
  }
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/PRESENCE_UPDATE.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/PRESENCE_UPDATE.js ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (client, packet) => {
  client.actions.PresenceUpdate.handle(packet.d);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/READY.js":
/*!************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/READY.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let ClientUser;

module.exports = (client, { d: data }, shard) => {
  if (client.user) {
    client.user._patch(data.user);
  } else {
    if (!ClientUser) ClientUser = __webpack_require__(/*! ../../../structures/ClientUser */ "./node_modules/discord.js/src/structures/ClientUser.js");
    const clientUser = new ClientUser(client, data.user);
    client.user = clientUser;
    client.users.cache.set(clientUser.id, clientUser);
  }

  for (const guild of data.guilds) {
    guild.shardID = shard.id;
    client.guilds.add(guild);
  }

  shard.checkReady();
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/RESUMED.js":
/*!**************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/RESUMED.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { Events } = __webpack_require__(/*! ../../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

module.exports = (client, packet, shard) => {
  const replayed = shard.sequence - shard.closeSequence;
  /**
   * Emitted when a shard resumes successfully.
   * @event Client#shardResume
   * @param {number} id The shard ID that resumed
   * @param {number} replayedEvents The amount of replayed events
   */
  client.emit(Events.SHARD_RESUME, shard.id, replayed);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/TYPING_START.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/TYPING_START.js ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (client, packet) => {
  client.actions.TypingStart.handle(packet.d);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/USER_UPDATE.js":
/*!******************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/USER_UPDATE.js ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (client, packet) => {
  client.actions.UserUpdate.handle(packet.d);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/VOICE_SERVER_UPDATE.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/VOICE_SERVER_UPDATE.js ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (client, packet) => {
  client.emit('debug', `[VOICE] received voice server: ${JSON.stringify(packet)}`);
  client.voice.onVoiceServer(packet.d);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/VOICE_STATE_UPDATE.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/VOICE_STATE_UPDATE.js ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (client, packet) => {
  client.actions.VoiceStateUpdate.handle(packet.d);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/WEBHOOKS_UPDATE.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/WEBHOOKS_UPDATE.js ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = (client, packet) => {
  client.actions.WebhooksUpdate.handle(packet.d);
};


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/index.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { WSEvents } = __webpack_require__(/*! ../../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

const handlers = {};

for (const name of Object.keys(WSEvents)) {
  try {
    handlers[name] = __webpack_require__("./node_modules/discord.js/src/client/websocket/handlers sync recursive ^\\.\\/.*\\.js$")(`./${name}.js`);
  } catch {} // eslint-disable-line no-empty
}

module.exports = handlers;


/***/ }),

/***/ "./node_modules/discord.js/src/client/websocket/handlers sync recursive ^\\.\\/.*\\.js$":
/*!**********************************************************************************!*\
  !*** ./node_modules/discord.js/src/client/websocket/handlers/ sync ^\.\/.*\.js$ ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./CHANNEL_CREATE.js": "./node_modules/discord.js/src/client/websocket/handlers/CHANNEL_CREATE.js",
	"./CHANNEL_DELETE.js": "./node_modules/discord.js/src/client/websocket/handlers/CHANNEL_DELETE.js",
	"./CHANNEL_PINS_UPDATE.js": "./node_modules/discord.js/src/client/websocket/handlers/CHANNEL_PINS_UPDATE.js",
	"./CHANNEL_UPDATE.js": "./node_modules/discord.js/src/client/websocket/handlers/CHANNEL_UPDATE.js",
	"./GUILD_BAN_ADD.js": "./node_modules/discord.js/src/client/websocket/handlers/GUILD_BAN_ADD.js",
	"./GUILD_BAN_REMOVE.js": "./node_modules/discord.js/src/client/websocket/handlers/GUILD_BAN_REMOVE.js",
	"./GUILD_CREATE.js": "./node_modules/discord.js/src/client/websocket/handlers/GUILD_CREATE.js",
	"./GUILD_DELETE.js": "./node_modules/discord.js/src/client/websocket/handlers/GUILD_DELETE.js",
	"./GUILD_EMOJIS_UPDATE.js": "./node_modules/discord.js/src/client/websocket/handlers/GUILD_EMOJIS_UPDATE.js",
	"./GUILD_INTEGRATIONS_UPDATE.js": "./node_modules/discord.js/src/client/websocket/handlers/GUILD_INTEGRATIONS_UPDATE.js",
	"./GUILD_MEMBERS_CHUNK.js": "./node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBERS_CHUNK.js",
	"./GUILD_MEMBER_ADD.js": "./node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_ADD.js",
	"./GUILD_MEMBER_REMOVE.js": "./node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_REMOVE.js",
	"./GUILD_MEMBER_UPDATE.js": "./node_modules/discord.js/src/client/websocket/handlers/GUILD_MEMBER_UPDATE.js",
	"./GUILD_ROLE_CREATE.js": "./node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_CREATE.js",
	"./GUILD_ROLE_DELETE.js": "./node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_DELETE.js",
	"./GUILD_ROLE_UPDATE.js": "./node_modules/discord.js/src/client/websocket/handlers/GUILD_ROLE_UPDATE.js",
	"./GUILD_UPDATE.js": "./node_modules/discord.js/src/client/websocket/handlers/GUILD_UPDATE.js",
	"./INVITE_CREATE.js": "./node_modules/discord.js/src/client/websocket/handlers/INVITE_CREATE.js",
	"./INVITE_DELETE.js": "./node_modules/discord.js/src/client/websocket/handlers/INVITE_DELETE.js",
	"./MESSAGE_CREATE.js": "./node_modules/discord.js/src/client/websocket/handlers/MESSAGE_CREATE.js",
	"./MESSAGE_DELETE.js": "./node_modules/discord.js/src/client/websocket/handlers/MESSAGE_DELETE.js",
	"./MESSAGE_DELETE_BULK.js": "./node_modules/discord.js/src/client/websocket/handlers/MESSAGE_DELETE_BULK.js",
	"./MESSAGE_REACTION_ADD.js": "./node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_ADD.js",
	"./MESSAGE_REACTION_REMOVE.js": "./node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE.js",
	"./MESSAGE_REACTION_REMOVE_ALL.js": "./node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE_ALL.js",
	"./MESSAGE_REACTION_REMOVE_EMOJI.js": "./node_modules/discord.js/src/client/websocket/handlers/MESSAGE_REACTION_REMOVE_EMOJI.js",
	"./MESSAGE_UPDATE.js": "./node_modules/discord.js/src/client/websocket/handlers/MESSAGE_UPDATE.js",
	"./PRESENCE_UPDATE.js": "./node_modules/discord.js/src/client/websocket/handlers/PRESENCE_UPDATE.js",
	"./READY.js": "./node_modules/discord.js/src/client/websocket/handlers/READY.js",
	"./RESUMED.js": "./node_modules/discord.js/src/client/websocket/handlers/RESUMED.js",
	"./TYPING_START.js": "./node_modules/discord.js/src/client/websocket/handlers/TYPING_START.js",
	"./USER_UPDATE.js": "./node_modules/discord.js/src/client/websocket/handlers/USER_UPDATE.js",
	"./VOICE_SERVER_UPDATE.js": "./node_modules/discord.js/src/client/websocket/handlers/VOICE_SERVER_UPDATE.js",
	"./VOICE_STATE_UPDATE.js": "./node_modules/discord.js/src/client/websocket/handlers/VOICE_STATE_UPDATE.js",
	"./WEBHOOKS_UPDATE.js": "./node_modules/discord.js/src/client/websocket/handlers/WEBHOOKS_UPDATE.js",
	"./index.js": "./node_modules/discord.js/src/client/websocket/handlers/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/discord.js/src/client/websocket/handlers sync recursive ^\\.\\/.*\\.js$";

/***/ }),

/***/ "./node_modules/discord.js/src/errors/DJSError.js":
/*!********************************************************!*\
  !*** ./node_modules/discord.js/src/errors/DJSError.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


// Heavily inspired by node's `internal/errors` module

const kCode = Symbol('code');
const messages = new Map();

/**
 * Extend an error of some sort into a DiscordjsError.
 * @param {Error} Base Base error to extend
 * @returns {DiscordjsError}
 */
function makeDiscordjsError(Base) {
  return class DiscordjsError extends Base {
    constructor(key, ...args) {
      super(message(key, args));
      this[kCode] = key;
      if (Error.captureStackTrace) Error.captureStackTrace(this, DiscordjsError);
    }

    get name() {
      return `${super.name} [${this[kCode]}]`;
    }

    get code() {
      return this[kCode];
    }
  };
}

/**
 * Format the message for an error.
 * @param {string} key Error key
 * @param {Array<*>} args Arguments to pass for util format or as function args
 * @returns {string} Formatted string
 */
function message(key, args) {
  if (typeof key !== 'string') throw new Error('Error message key must be a string');
  const msg = messages.get(key);
  if (!msg) throw new Error(`An invalid error message key was used: ${key}.`);
  if (typeof msg === 'function') return msg(...args);
  if (args === undefined || args.length === 0) return msg;
  args.unshift(msg);
  return String(...args);
}

/**
 * Register an error code and message.
 * @param {string} sym Unique name for the error
 * @param {*} val Value of the error
 */
function register(sym, val) {
  messages.set(sym, typeof val === 'function' ? val : String(val));
}

module.exports = {
  register,
  Error: makeDiscordjsError(Error),
  TypeError: makeDiscordjsError(TypeError),
  RangeError: makeDiscordjsError(RangeError),
};


/***/ }),

/***/ "./node_modules/discord.js/src/errors/Messages.js":
/*!********************************************************!*\
  !*** ./node_modules/discord.js/src/errors/Messages.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { register } = __webpack_require__(/*! ./DJSError */ "./node_modules/discord.js/src/errors/DJSError.js");

const Messages = {
  CLIENT_INVALID_OPTION: (prop, must) => `The ${prop} option must be ${must}`,
  CLIENT_INVALID_PROVIDED_SHARDS: 'None of the provided shards were valid.',

  TOKEN_INVALID: 'An invalid token was provided.',
  TOKEN_MISSING: 'Request to use token, but token was unavailable to the client.',

  WS_CLOSE_REQUESTED: 'WebSocket closed due to user request.',
  WS_CONNECTION_EXISTS: 'There is already an existing WebSocket connection.',
  WS_NOT_OPEN: (data = 'data') => `Websocket not open to send ${data}`,

  BITFIELD_INVALID: 'Invalid bitfield flag or number.',

  SHARDING_INVALID: 'Invalid shard settings were provided.',
  SHARDING_REQUIRED: 'This session would have handled too many guilds - Sharding is required.',
  INVALID_INTENTS: 'Invalid intent provided for WebSocket intents.',
  DISALLOWED_INTENTS: 'Privileged intent provided is not enabled or whitelisted.',
  SHARDING_NO_SHARDS: 'No shards have been spawned.',
  SHARDING_IN_PROCESS: 'Shards are still being spawned.',
  SHARDING_SHARD_NOT_FOUND: id => `Shard ${id} could not be found.`,
  SHARDING_ALREADY_SPAWNED: count => `Already spawned ${count} shards.`,
  SHARDING_PROCESS_EXISTS: id => `Shard ${id} already has an active process.`,
  SHARDING_WORKER_EXISTS: id => `Shard ${id} already has an active worker.`,
  SHARDING_READY_TIMEOUT: id => `Shard ${id}'s Client took too long to become ready.`,
  SHARDING_READY_DISCONNECTED: id => `Shard ${id}'s Client disconnected before becoming ready.`,
  SHARDING_READY_DIED: id => `Shard ${id}'s process exited before its Client became ready.`,
  SHARDING_NO_CHILD_EXISTS: id => `Shard ${id} has no active process or worker.`,
  SHARDING_SHARD_MISCALCULATION: (shard, guild, count) =>
    `Calculated invalid shard ${shard} for guild ${guild} with ${count} shards.`,

  COLOR_RANGE: 'Color must be within the range 0 - 16777215 (0xFFFFFF).',
  COLOR_CONVERT: 'Unable to convert color to a number.',

  EMBED_FIELD_NAME: 'MessageEmbed field names may not be empty.',
  EMBED_FIELD_VALUE: 'MessageEmbed field values may not be empty.',

  FILE_NOT_FOUND: file => `File could not be found: ${file}`,

  USER_NO_DMCHANNEL: 'No DM Channel exists!',

  VOICE_INVALID_HEARTBEAT: 'Tried to set voice heartbeat but no valid interval was specified.',
  VOICE_USER_MISSING: "Couldn't resolve the user to create stream.",
  VOICE_JOIN_CHANNEL: (full = false) =>
    `You do not have permission to join this voice channel${full ? '; it is full.' : '.'}`,
  VOICE_CONNECTION_TIMEOUT: 'Connection not established within 15 seconds.',
  VOICE_TOKEN_ABSENT: 'Token not provided from voice server packet.',
  VOICE_SESSION_ABSENT: 'Session ID not supplied.',
  VOICE_INVALID_ENDPOINT: 'Invalid endpoint received.',
  VOICE_NO_BROWSER: 'Voice connections are not available in browsers.',
  VOICE_CONNECTION_ATTEMPTS_EXCEEDED: attempts => `Too many connection attempts (${attempts}).`,
  VOICE_JOIN_SOCKET_CLOSED: 'Tried to send join packet, but the WebSocket is not open.',
  VOICE_PLAY_INTERFACE_NO_BROADCAST: 'A broadcast cannot be played in this context.',
  VOICE_PLAY_INTERFACE_BAD_TYPE: 'Unknown stream type',
  VOICE_PRISM_DEMUXERS_NEED_STREAM: 'To play a webm/ogg stream, you need to pass a ReadableStream.',

  VOICE_STATE_UNCACHED_MEMBER: 'The member of this voice state is uncached.',
  VOICE_STATE_NOT_OWN: 'You cannot self-deafen/mute on VoiceStates that do not belong to the ClientUser.',
  VOICE_STATE_INVALID_TYPE: name => `${name} must be a boolean.`,

  UDP_SEND_FAIL: 'Tried to send a UDP packet, but there is no socket available.',
  UDP_ADDRESS_MALFORMED: 'Malformed UDP address or port.',
  UDP_CONNECTION_EXISTS: 'There is already an existing UDP connection.',

  REQ_RESOURCE_TYPE: 'The resource must be a string, Buffer or a valid file stream.',

  IMAGE_FORMAT: format => `Invalid image format: ${format}`,
  IMAGE_SIZE: size => `Invalid image size: ${size}`,

  MESSAGE_BULK_DELETE_TYPE: 'The messages must be an Array, Collection, or number.',
  MESSAGE_NONCE_TYPE: 'Message nonce must fit in an unsigned 64-bit integer.',

  TYPING_COUNT: 'Count must be at least 1',

  SPLIT_MAX_LEN: 'Chunk exceeds the max length and contains no split characters.',

  BAN_RESOLVE_ID: (ban = false) => `Couldn't resolve the user ID to ${ban ? 'ban' : 'unban'}.`,
  FETCH_BAN_RESOLVE_ID: "Couldn't resolve the user ID to fetch the ban.",

  PRUNE_DAYS_TYPE: 'Days must be a number',

  GUILD_CHANNEL_RESOLVE: 'Could not resolve channel to a guild channel.',
  GUILD_VOICE_CHANNEL_RESOLVE: 'Could not resolve channel to a guild voice channel.',
  GUILD_CHANNEL_ORPHAN: 'Could not find a parent to this guild channel.',
  GUILD_OWNED: 'Guild is owned by the client.',
  GUILD_MEMBERS_TIMEOUT: "Members didn't arrive in time.",
  GUILD_UNCACHED_ME: 'The client user as a member of this guild is uncached.',

  INVALID_TYPE: (name, expected, an = false) => `Supplied ${name} is not a${an ? 'n' : ''} ${expected}.`,

  WEBHOOK_MESSAGE: 'The message was not sent by a webhook.',

  EMOJI_TYPE: 'Emoji must be a string or GuildEmoji/ReactionEmoji',
  EMOJI_MANAGED: 'Emoji is managed and has no Author.',
  MISSING_MANAGE_EMOJIS_PERMISSION: guild =>
    `Client must have Manage Emoji permission in guild ${guild} to see emoji authors.`,

  REACTION_RESOLVE_USER: "Couldn't resolve the user ID to remove from the reaction.",

  VANITY_URL: 'This guild does not have the VANITY_URL feature enabled.',

  DELETE_GROUP_DM_CHANNEL: "Bots don't have access to Group DM Channels and cannot delete them",
  FETCH_GROUP_DM_CHANNEL: "Bots don't have access to Group DM Channels and cannot fetch them",

  MEMBER_FETCH_NONCE_LENGTH: 'Nonce length must not exceed 32 characters.',
};

for (const [name, message] of Object.entries(Messages)) register(name, message);


/***/ }),

/***/ "./node_modules/discord.js/src/errors/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/discord.js/src/errors/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(/*! ./DJSError */ "./node_modules/discord.js/src/errors/DJSError.js");
module.exports.Messages = __webpack_require__(/*! ./Messages */ "./node_modules/discord.js/src/errors/Messages.js");


/***/ }),

/***/ "./node_modules/discord.js/src/index.js":
/*!**********************************************!*\
  !*** ./node_modules/discord.js/src/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Util = __webpack_require__(/*! ./util/Util */ "./node_modules/discord.js/src/util/Util.js");

module.exports = {
  // "Root" classes (starting points)
  BaseClient: __webpack_require__(/*! ./client/BaseClient */ "./node_modules/discord.js/src/client/BaseClient.js"),
  Client: __webpack_require__(/*! ./client/Client */ "./node_modules/discord.js/src/client/Client.js"),
  Shard: __webpack_require__(/*! ./sharding/Shard */ "?9d4d"),
  ShardClientUtil: __webpack_require__(/*! ./sharding/ShardClientUtil */ "?7ce5"),
  ShardingManager: __webpack_require__(/*! ./sharding/ShardingManager */ "?271f"),
  WebhookClient: __webpack_require__(/*! ./client/WebhookClient */ "./node_modules/discord.js/src/client/WebhookClient.js"),

  // Utilities
  ActivityFlags: __webpack_require__(/*! ./util/ActivityFlags */ "./node_modules/discord.js/src/util/ActivityFlags.js"),
  BitField: __webpack_require__(/*! ./util/BitField */ "./node_modules/discord.js/src/util/BitField.js"),
  Collection: __webpack_require__(/*! ./util/Collection */ "./node_modules/discord.js/src/util/Collection.js"),
  Constants: __webpack_require__(/*! ./util/Constants */ "./node_modules/discord.js/src/util/Constants.js"),
  DataResolver: __webpack_require__(/*! ./util/DataResolver */ "./node_modules/discord.js/src/util/DataResolver.js"),
  BaseManager: __webpack_require__(/*! ./managers/BaseManager */ "./node_modules/discord.js/src/managers/BaseManager.js"),
  DiscordAPIError: __webpack_require__(/*! ./rest/DiscordAPIError */ "./node_modules/discord.js/src/rest/DiscordAPIError.js"),
  HTTPError: __webpack_require__(/*! ./rest/HTTPError */ "./node_modules/discord.js/src/rest/HTTPError.js"),
  MessageFlags: __webpack_require__(/*! ./util/MessageFlags */ "./node_modules/discord.js/src/util/MessageFlags.js"),
  Intents: __webpack_require__(/*! ./util/Intents */ "./node_modules/discord.js/src/util/Intents.js"),
  Permissions: __webpack_require__(/*! ./util/Permissions */ "./node_modules/discord.js/src/util/Permissions.js"),
  Speaking: __webpack_require__(/*! ./util/Speaking */ "./node_modules/discord.js/src/util/Speaking.js"),
  Snowflake: __webpack_require__(/*! ./util/Snowflake */ "./node_modules/discord.js/src/util/Snowflake.js"),
  SnowflakeUtil: __webpack_require__(/*! ./util/Snowflake */ "./node_modules/discord.js/src/util/Snowflake.js"),
  Structures: __webpack_require__(/*! ./util/Structures */ "./node_modules/discord.js/src/util/Structures.js"),
  SystemChannelFlags: __webpack_require__(/*! ./util/SystemChannelFlags */ "./node_modules/discord.js/src/util/SystemChannelFlags.js"),
  UserFlags: __webpack_require__(/*! ./util/UserFlags */ "./node_modules/discord.js/src/util/UserFlags.js"),
  Util: Util,
  version: __webpack_require__(/*! ../package.json */ "./node_modules/discord.js/package.json").version,

  // Managers
  ChannelManager: __webpack_require__(/*! ./managers/ChannelManager */ "./node_modules/discord.js/src/managers/ChannelManager.js"),
  GuildChannelManager: __webpack_require__(/*! ./managers/GuildChannelManager */ "./node_modules/discord.js/src/managers/GuildChannelManager.js"),
  GuildEmojiManager: __webpack_require__(/*! ./managers/GuildEmojiManager */ "./node_modules/discord.js/src/managers/GuildEmojiManager.js"),
  GuildEmojiRoleManager: __webpack_require__(/*! ./managers/GuildEmojiRoleManager */ "./node_modules/discord.js/src/managers/GuildEmojiRoleManager.js"),
  GuildMemberManager: __webpack_require__(/*! ./managers/GuildMemberManager */ "./node_modules/discord.js/src/managers/GuildMemberManager.js"),
  GuildMemberRoleManager: __webpack_require__(/*! ./managers/GuildMemberRoleManager */ "./node_modules/discord.js/src/managers/GuildMemberRoleManager.js"),
  GuildManager: __webpack_require__(/*! ./managers/GuildManager */ "./node_modules/discord.js/src/managers/GuildManager.js"),
  ReactionManager: __webpack_require__(/*! ./managers/ReactionManager */ "./node_modules/discord.js/src/managers/ReactionManager.js"),
  ReactionUserManager: __webpack_require__(/*! ./managers/ReactionUserManager */ "./node_modules/discord.js/src/managers/ReactionUserManager.js"),
  MessageManager: __webpack_require__(/*! ./managers/MessageManager */ "./node_modules/discord.js/src/managers/MessageManager.js"),
  PresenceManager: __webpack_require__(/*! ./managers/PresenceManager */ "./node_modules/discord.js/src/managers/PresenceManager.js"),
  RoleManager: __webpack_require__(/*! ./managers/RoleManager */ "./node_modules/discord.js/src/managers/RoleManager.js"),
  UserManager: __webpack_require__(/*! ./managers/UserManager */ "./node_modules/discord.js/src/managers/UserManager.js"),

  // Shortcuts to Util methods
  discordSort: Util.discordSort,
  escapeMarkdown: Util.escapeMarkdown,
  fetchRecommendedShards: Util.fetchRecommendedShards,
  resolveColor: Util.resolveColor,
  resolveString: Util.resolveString,
  splitMessage: Util.splitMessage,

  // Structures
  Application: __webpack_require__(/*! ./structures/interfaces/Application */ "./node_modules/discord.js/src/structures/interfaces/Application.js"),
  Base: __webpack_require__(/*! ./structures/Base */ "./node_modules/discord.js/src/structures/Base.js"),
  Activity: __webpack_require__(/*! ./structures/Presence */ "./node_modules/discord.js/src/structures/Presence.js").Activity,
  APIMessage: __webpack_require__(/*! ./structures/APIMessage */ "./node_modules/discord.js/src/structures/APIMessage.js"),
  BaseGuildEmoji: __webpack_require__(/*! ./structures/BaseGuildEmoji */ "./node_modules/discord.js/src/structures/BaseGuildEmoji.js"),
  CategoryChannel: __webpack_require__(/*! ./structures/CategoryChannel */ "./node_modules/discord.js/src/structures/CategoryChannel.js"),
  Channel: __webpack_require__(/*! ./structures/Channel */ "./node_modules/discord.js/src/structures/Channel.js"),
  ClientApplication: __webpack_require__(/*! ./structures/ClientApplication */ "./node_modules/discord.js/src/structures/ClientApplication.js"),
  get ClientUser() {
    // This is a getter so that it properly extends any custom User class
    return __webpack_require__(/*! ./structures/ClientUser */ "./node_modules/discord.js/src/structures/ClientUser.js");
  },
  Collector: __webpack_require__(/*! ./structures/interfaces/Collector */ "./node_modules/discord.js/src/structures/interfaces/Collector.js"),
  DMChannel: __webpack_require__(/*! ./structures/DMChannel */ "./node_modules/discord.js/src/structures/DMChannel.js"),
  Emoji: __webpack_require__(/*! ./structures/Emoji */ "./node_modules/discord.js/src/structures/Emoji.js"),
  Guild: __webpack_require__(/*! ./structures/Guild */ "./node_modules/discord.js/src/structures/Guild.js"),
  GuildAuditLogs: __webpack_require__(/*! ./structures/GuildAuditLogs */ "./node_modules/discord.js/src/structures/GuildAuditLogs.js"),
  GuildChannel: __webpack_require__(/*! ./structures/GuildChannel */ "./node_modules/discord.js/src/structures/GuildChannel.js"),
  GuildEmoji: __webpack_require__(/*! ./structures/GuildEmoji */ "./node_modules/discord.js/src/structures/GuildEmoji.js"),
  GuildMember: __webpack_require__(/*! ./structures/GuildMember */ "./node_modules/discord.js/src/structures/GuildMember.js"),
  GuildPreview: __webpack_require__(/*! ./structures/GuildPreview */ "./node_modules/discord.js/src/structures/GuildPreview.js"),
  GuildTemplate: __webpack_require__(/*! ./structures/GuildTemplate */ "./node_modules/discord.js/src/structures/GuildTemplate.js"),
  Integration: __webpack_require__(/*! ./structures/Integration */ "./node_modules/discord.js/src/structures/Integration.js"),
  Invite: __webpack_require__(/*! ./structures/Invite */ "./node_modules/discord.js/src/structures/Invite.js"),
  Message: __webpack_require__(/*! ./structures/Message */ "./node_modules/discord.js/src/structures/Message.js"),
  MessageAttachment: __webpack_require__(/*! ./structures/MessageAttachment */ "./node_modules/discord.js/src/structures/MessageAttachment.js"),
  MessageCollector: __webpack_require__(/*! ./structures/MessageCollector */ "./node_modules/discord.js/src/structures/MessageCollector.js"),
  MessageEmbed: __webpack_require__(/*! ./structures/MessageEmbed */ "./node_modules/discord.js/src/structures/MessageEmbed.js"),
  MessageMentions: __webpack_require__(/*! ./structures/MessageMentions */ "./node_modules/discord.js/src/structures/MessageMentions.js"),
  MessageReaction: __webpack_require__(/*! ./structures/MessageReaction */ "./node_modules/discord.js/src/structures/MessageReaction.js"),
  NewsChannel: __webpack_require__(/*! ./structures/NewsChannel */ "./node_modules/discord.js/src/structures/NewsChannel.js"),
  PermissionOverwrites: __webpack_require__(/*! ./structures/PermissionOverwrites */ "./node_modules/discord.js/src/structures/PermissionOverwrites.js"),
  Presence: __webpack_require__(/*! ./structures/Presence */ "./node_modules/discord.js/src/structures/Presence.js").Presence,
  ClientPresence: __webpack_require__(/*! ./structures/ClientPresence */ "./node_modules/discord.js/src/structures/ClientPresence.js"),
  ReactionCollector: __webpack_require__(/*! ./structures/ReactionCollector */ "./node_modules/discord.js/src/structures/ReactionCollector.js"),
  ReactionEmoji: __webpack_require__(/*! ./structures/ReactionEmoji */ "./node_modules/discord.js/src/structures/ReactionEmoji.js"),
  RichPresenceAssets: __webpack_require__(/*! ./structures/Presence */ "./node_modules/discord.js/src/structures/Presence.js").RichPresenceAssets,
  Role: __webpack_require__(/*! ./structures/Role */ "./node_modules/discord.js/src/structures/Role.js"),
  StoreChannel: __webpack_require__(/*! ./structures/StoreChannel */ "./node_modules/discord.js/src/structures/StoreChannel.js"),
  Team: __webpack_require__(/*! ./structures/Team */ "./node_modules/discord.js/src/structures/Team.js"),
  TeamMember: __webpack_require__(/*! ./structures/TeamMember */ "./node_modules/discord.js/src/structures/TeamMember.js"),
  TextChannel: __webpack_require__(/*! ./structures/TextChannel */ "./node_modules/discord.js/src/structures/TextChannel.js"),
  User: __webpack_require__(/*! ./structures/User */ "./node_modules/discord.js/src/structures/User.js"),
  VoiceChannel: __webpack_require__(/*! ./structures/VoiceChannel */ "./node_modules/discord.js/src/structures/VoiceChannel.js"),
  VoiceRegion: __webpack_require__(/*! ./structures/VoiceRegion */ "./node_modules/discord.js/src/structures/VoiceRegion.js"),
  VoiceState: __webpack_require__(/*! ./structures/VoiceState */ "./node_modules/discord.js/src/structures/VoiceState.js"),
  Webhook: __webpack_require__(/*! ./structures/Webhook */ "./node_modules/discord.js/src/structures/Webhook.js"),

  WebSocket: __webpack_require__(/*! ./WebSocket */ "./node_modules/discord.js/src/WebSocket.js"),
};


/***/ }),

/***/ "./node_modules/discord.js/src/managers/BaseManager.js":
/*!*************************************************************!*\
  !*** ./node_modules/discord.js/src/managers/BaseManager.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Collection = __webpack_require__(/*! ../util/Collection */ "./node_modules/discord.js/src/util/Collection.js");
let Structures;

/**
 * Manages the API methods of a data model and holds its cache.
 * @abstract
 */
class BaseManager {
  constructor(client, iterable, holds, cacheType = Collection, ...cacheOptions) {
    if (!Structures) Structures = __webpack_require__(/*! ../util/Structures */ "./node_modules/discord.js/src/util/Structures.js");
    /**
     * The data structure belonging to this manager
     * @name BaseManager#holds
     * @type {Function}
     * @private
     * @readonly
     */
    Object.defineProperty(this, 'holds', { value: Structures.get(holds.name) || holds });

    /**
     * The client that instantiated this Manager
     * @name BaseManager#client
     * @type {Client}
     * @readonly
     */
    Object.defineProperty(this, 'client', { value: client });

    /**
     * The type of Collection of the Manager
     * @type {Collection}
     */
    this.cacheType = cacheType;

    /**
     * Holds the cache for the data model
     * @type {Collection}
     */
    this.cache = new cacheType(...cacheOptions);
    if (iterable) for (const i of iterable) this.add(i);
  }

  add(data, cache = true, { id, extras = [] } = {}) {
    const existing = this.cache.get(id || data.id);
    if (existing && existing._patch && cache) existing._patch(data);
    if (existing) return existing;

    const entry = this.holds ? new this.holds(this.client, data, ...extras) : data;
    if (cache) this.cache.set(id || entry.id, entry);
    return entry;
  }

  /**
   * Resolves a data entry to a data Object.
   * @param {string|Object} idOrInstance The id or instance of something in this Manager
   * @returns {?Object} An instance from this Manager
   */
  resolve(idOrInstance) {
    if (idOrInstance instanceof this.holds) return idOrInstance;
    if (typeof idOrInstance === 'string') return this.cache.get(idOrInstance) || null;
    return null;
  }

  /**
   * Resolves a data entry to a instance ID.
   * @param {string|Object} idOrInstance The id or instance of something in this Manager
   * @returns {?Snowflake}
   */
  resolveID(idOrInstance) {
    if (idOrInstance instanceof this.holds) return idOrInstance.id;
    if (typeof idOrInstance === 'string') return idOrInstance;
    return null;
  }

  valueOf() {
    return this.cache;
  }
}

module.exports = BaseManager;


/***/ }),

/***/ "./node_modules/discord.js/src/managers/ChannelManager.js":
/*!****************************************************************!*\
  !*** ./node_modules/discord.js/src/managers/ChannelManager.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const BaseManager = __webpack_require__(/*! ./BaseManager */ "./node_modules/discord.js/src/managers/BaseManager.js");
const Channel = __webpack_require__(/*! ../structures/Channel */ "./node_modules/discord.js/src/structures/Channel.js");
const { Events } = __webpack_require__(/*! ../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

/**
 * A manager of channels belonging to a client
 * @extends {BaseManager}
 */
class ChannelManager extends BaseManager {
  constructor(client, iterable) {
    super(client, iterable, Channel);
  }

  /**
   * The cache of Channels
   * @type {Collection<Snowflake, Channel>}
   * @name ChannelManager#cache
   */

  add(data, guild, cache = true) {
    const existing = this.cache.get(data.id);
    if (existing) {
      if (existing._patch && cache) existing._patch(data);
      if (guild) guild.channels.add(existing);
      return existing;
    }

    const channel = Channel.create(this.client, data, guild);

    if (!channel) {
      this.client.emit(Events.DEBUG, `Failed to find guild, or unknown type for channel ${data.id} ${data.type}`);
      return null;
    }

    if (cache) this.cache.set(channel.id, channel);

    return channel;
  }

  remove(id) {
    const channel = this.cache.get(id);
    if (channel.guild) channel.guild.channels.cache.delete(id);
    this.cache.delete(id);
  }

  /**
   * Data that can be resolved to give a Channel object. This can be:
   * * A Channel object
   * * A Snowflake
   * @typedef {Channel|Snowflake} ChannelResolvable
   */

  /**
   * Resolves a ChannelResolvable to a Channel object.
   * @method resolve
   * @memberof ChannelManager
   * @instance
   * @param {ChannelResolvable} channel The channel resolvable to resolve
   * @returns {?Channel}
   */

  /**
   * Resolves a ChannelResolvable to a channel ID string.
   * @method resolveID
   * @memberof ChannelManager
   * @instance
   * @param {ChannelResolvable} channel The channel resolvable to resolve
   * @returns {?Snowflake}
   */

  /**
   * Obtains a channel from Discord, or the channel cache if it's already available.
   * @param {Snowflake} id ID of the channel
   * @param {boolean} [cache=true] Whether to cache the new channel object if it isn't already
   * @param {boolean} [force=false] Whether to skip the cache check and request the API
   * @returns {Promise<Channel>}
   * @example
   * // Fetch a channel by its id
   * client.channels.fetch('222109930545610754')
   *   .then(channel => console.log(channel.name))
   *   .catch(console.error);
   */
  async fetch(id, cache = true, force = false) {
    if (!force) {
      const existing = this.cache.get(id);
      if (existing && !existing.partial) return existing;
    }

    const data = await this.client.api.channels(id).get();
    return this.add(data, null, cache);
  }
}

module.exports = ChannelManager;


/***/ }),

/***/ "./node_modules/discord.js/src/managers/GuildChannelManager.js":
/*!*********************************************************************!*\
  !*** ./node_modules/discord.js/src/managers/GuildChannelManager.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const BaseManager = __webpack_require__(/*! ./BaseManager */ "./node_modules/discord.js/src/managers/BaseManager.js");
const GuildChannel = __webpack_require__(/*! ../structures/GuildChannel */ "./node_modules/discord.js/src/structures/GuildChannel.js");
const PermissionOverwrites = __webpack_require__(/*! ../structures/PermissionOverwrites */ "./node_modules/discord.js/src/structures/PermissionOverwrites.js");
const { ChannelTypes } = __webpack_require__(/*! ../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

/**
 * Manages API methods for GuildChannels and stores their cache.
 * @extends {BaseManager}
 */
class GuildChannelManager extends BaseManager {
  constructor(guild, iterable) {
    super(guild.client, iterable, GuildChannel);

    /**
     * The guild this Manager belongs to
     * @type {Guild}
     */
    this.guild = guild;
  }

  /**
   * The cache of this Manager
   * @type {Collection<Snowflake, GuildChannel>}
   * @name GuildChannelManager#cache
   */

  add(channel) {
    const existing = this.cache.get(channel.id);
    if (existing) return existing;
    this.cache.set(channel.id, channel);
    return channel;
  }

  /**
   * Data that can be resolved to give a Guild Channel object. This can be:
   * * A GuildChannel object
   * * A Snowflake
   * @typedef {GuildChannel|Snowflake} GuildChannelResolvable
   */

  /**
   * Resolves a GuildChannelResolvable to a Channel object.
   * @method resolve
   * @memberof GuildChannelManager
   * @instance
   * @param {GuildChannelResolvable} channel The GuildChannel resolvable to resolve
   * @returns {?GuildChannel}
   */

  /**
   * Resolves a GuildChannelResolvable to a channel ID string.
   * @method resolveID
   * @memberof GuildChannelManager
   * @instance
   * @param {GuildChannelResolvable} channel The GuildChannel resolvable to resolve
   * @returns {?Snowflake}
   */

  /**
   * Creates a new channel in the guild.
   * @param {string} name The name of the new channel
   * @param {Object} [options] Options
   * @param {string} [options.type='text'] The type of the new channel, either `text`, `voice`, or `category`
   * @param {string} [options.topic] The topic for the new channel
   * @param {boolean} [options.nsfw] Whether the new channel is nsfw
   * @param {number} [options.bitrate] Bitrate of the new channel in bits (only voice)
   * @param {number} [options.userLimit] Maximum amount of users allowed in the new channel (only voice)
   * @param {ChannelResolvable} [options.parent] Parent of the new channel
   * @param {OverwriteResolvable[]|Collection<Snowflake, OverwriteResolvable>} [options.permissionOverwrites]
   * Permission overwrites of the new channel
   * @param {number} [options.position] Position of the new channel
   * @param {number} [options.rateLimitPerUser] The ratelimit per user for the channel
   * @param {string} [options.reason] Reason for creating the channel
   * @returns {Promise<GuildChannel>}
   * @example
   * // Create a new text channel
   * guild.channels.create('new-general', { reason: 'Needed a cool new channel' })
   *   .then(console.log)
   *   .catch(console.error);
   * @example
   * // Create a new channel with permission overwrites
   * guild.channels.create('new-voice', {
   *   type: 'voice',
   *   permissionOverwrites: [
   *      {
   *        id: message.author.id,
   *        deny: ['VIEW_CHANNEL'],
   *     },
   *   ],
   * })
   */
  async create(name, options = {}) {
    let {
      type,
      topic,
      nsfw,
      bitrate,
      userLimit,
      parent,
      permissionOverwrites,
      position,
      rateLimitPerUser,
      reason,
    } = options;
    if (parent) parent = this.client.channels.resolveID(parent);
    if (permissionOverwrites) {
      permissionOverwrites = permissionOverwrites.map(o => PermissionOverwrites.resolve(o, this.guild));
    }

    const data = await this.client.api.guilds(this.guild.id).channels.post({
      data: {
        name,
        topic,
        type: type ? ChannelTypes[type.toUpperCase()] : ChannelTypes.TEXT,
        nsfw,
        bitrate,
        user_limit: userLimit,
        parent_id: parent,
        position,
        permission_overwrites: permissionOverwrites,
        rate_limit_per_user: rateLimitPerUser,
      },
      reason,
    });
    return this.client.actions.ChannelCreate.handle(data).channel;
  }
}

module.exports = GuildChannelManager;


/***/ }),

/***/ "./node_modules/discord.js/src/managers/GuildEmojiManager.js":
/*!*******************************************************************!*\
  !*** ./node_modules/discord.js/src/managers/GuildEmojiManager.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const BaseManager = __webpack_require__(/*! ./BaseManager */ "./node_modules/discord.js/src/managers/BaseManager.js");
const { TypeError } = __webpack_require__(/*! ../errors */ "./node_modules/discord.js/src/errors/index.js");
const GuildEmoji = __webpack_require__(/*! ../structures/GuildEmoji */ "./node_modules/discord.js/src/structures/GuildEmoji.js");
const ReactionEmoji = __webpack_require__(/*! ../structures/ReactionEmoji */ "./node_modules/discord.js/src/structures/ReactionEmoji.js");
const Collection = __webpack_require__(/*! ../util/Collection */ "./node_modules/discord.js/src/util/Collection.js");
const DataResolver = __webpack_require__(/*! ../util/DataResolver */ "./node_modules/discord.js/src/util/DataResolver.js");
const { parseEmoji } = __webpack_require__(/*! ../util/Util */ "./node_modules/discord.js/src/util/Util.js");

/**
 * Manages API methods for GuildEmojis and stores their cache.
 * @extends {BaseManager}
 */
class GuildEmojiManager extends BaseManager {
  constructor(guild, iterable) {
    super(guild.client, iterable, GuildEmoji);
    /**
     * The guild this manager belongs to
     * @type {Guild}
     */
    this.guild = guild;
  }

  /**
   * The cache of GuildEmojis
   * @type {Collection<Snowflake, GuildEmoji>}
   * @name GuildEmojiManager#cache
   */

  add(data, cache) {
    return super.add(data, cache, { extras: [this.guild] });
  }

  /**
   * Creates a new custom emoji in the guild.
   * @param {BufferResolvable|Base64Resolvable} attachment The image for the emoji
   * @param {string} name The name for the emoji
   * @param {Object} [options] Options
   * @param {Collection<Snowflake, Role>|RoleResolvable[]} [options.roles] Roles to limit the emoji to
   * @param {string} [options.reason] Reason for creating the emoji
   * @returns {Promise<Emoji>} The created emoji
   * @example
   * // Create a new emoji from a url
   * guild.emojis.create('https://i.imgur.com/w3duR07.png', 'rip')
   *   .then(emoji => console.log(`Created new emoji with name ${emoji.name}!`))
   *   .catch(console.error);
   * @example
   * // Create a new emoji from a file on your computer
   * guild.emojis.create('./memes/banana.png', 'banana')
   *   .then(emoji => console.log(`Created new emoji with name ${emoji.name}!`))
   *   .catch(console.error);
   */
  async create(attachment, name, { roles, reason } = {}) {
    attachment = await DataResolver.resolveImage(attachment);
    if (!attachment) throw new TypeError('REQ_RESOURCE_TYPE');

    const data = { image: attachment, name };
    if (roles) {
      data.roles = [];
      for (let role of roles instanceof Collection ? roles.values() : roles) {
        role = this.guild.roles.resolve(role);
        if (!role) {
          return Promise.reject(
            new TypeError('INVALID_TYPE', 'options.roles', 'Array or Collection of Roles or Snowflakes', true),
          );
        }
        data.roles.push(role.id);
      }
    }

    return this.client.api
      .guilds(this.guild.id)
      .emojis.post({ data, reason })
      .then(emoji => this.client.actions.GuildEmojiCreate.handle(this.guild, emoji).emoji);
  }

  /**
   * Data that can be resolved into an GuildEmoji object. This can be:
   * * A custom emoji ID
   * * A GuildEmoji object
   * * A ReactionEmoji object
   * @typedef {Snowflake|GuildEmoji|ReactionEmoji} EmojiResolvable
   */

  /**
   * Resolves an EmojiResolvable to an Emoji object.
   * @param {EmojiResolvable} emoji The Emoji resolvable to identify
   * @returns {?GuildEmoji}
   */
  resolve(emoji) {
    if (emoji instanceof ReactionEmoji) return super.resolve(emoji.id);
    return super.resolve(emoji);
  }

  /**
   * Resolves an EmojiResolvable to an Emoji ID string.
   * @param {EmojiResolvable} emoji The Emoji resolvable to identify
   * @returns {?Snowflake}
   */
  resolveID(emoji) {
    if (emoji instanceof ReactionEmoji) return emoji.id;
    return super.resolveID(emoji);
  }

  /**
   * Data that can be resolved to give an emoji identifier. This can be:
   * * The unicode representation of an emoji
   * * The `<a:name:id>`, `<:name:id>`, `:name:id` or `a:name:id` emoji identifier string of an emoji
   * * An EmojiResolvable
   * @typedef {string|EmojiResolvable} EmojiIdentifierResolvable
   */

  /**
   * Resolves an EmojiResolvable to an emoji identifier.
   * @param {EmojiIdentifierResolvable} emoji The emoji resolvable to resolve
   * @returns {?string}
   */
  resolveIdentifier(emoji) {
    const emojiResolvable = this.resolve(emoji);
    if (emojiResolvable) return emojiResolvable.identifier;
    if (emoji instanceof ReactionEmoji) return emoji.identifier;
    if (typeof emoji === 'string') {
      const res = parseEmoji(emoji);
      if (res && res.name.length) {
        emoji = `${res.animated ? 'a:' : ''}${res.name}${res.id ? `:${res.id}` : ''}`;
      }
      if (!emoji.includes('%')) return encodeURIComponent(emoji);
      else return emoji;
    }
    return null;
  }
}

module.exports = GuildEmojiManager;


/***/ }),

/***/ "./node_modules/discord.js/src/managers/GuildEmojiRoleManager.js":
/*!***********************************************************************!*\
  !*** ./node_modules/discord.js/src/managers/GuildEmojiRoleManager.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { TypeError } = __webpack_require__(/*! ../errors */ "./node_modules/discord.js/src/errors/index.js");
const Collection = __webpack_require__(/*! ../util/Collection */ "./node_modules/discord.js/src/util/Collection.js");

/**
 * Manages API methods for roles belonging to emojis and stores their cache.
 */
class GuildEmojiRoleManager {
  constructor(emoji) {
    /**
     * The emoji belonging to this manager
     * @type {GuildEmoji}
     */
    this.emoji = emoji;
    /**
     * The guild belonging to this manager
     * @type {Guild}
     */
    this.guild = emoji.guild;
    /**
     * The client belonging to this manager
     * @type {Client}
     * @readonly
     */
    Object.defineProperty(this, 'client', { value: emoji.client });
  }

  /**
   * The filtered collection of roles of the guild emoji
   * @type {Collection<Snowflake, Role>}
   * @private
   * @readonly
   */
  get _roles() {
    return this.guild.roles.cache.filter(role => this.emoji._roles.includes(role.id));
  }

  /**
   * The cache of roles belonging to this emoji
   * @type {Collection<Snowflake, Role>}
   * @readonly
   */
  get cache() {
    return this._roles;
  }

  /**
   * Adds a role (or multiple roles) to the list of roles that can use this emoji.
   * @param {RoleResolvable|RoleResolvable[]|Collection<Snowflake, Role>} roleOrRoles The role or roles to add
   * @returns {Promise<GuildEmoji>}
   */
  add(roleOrRoles) {
    if (roleOrRoles instanceof Collection) return this.add(roleOrRoles.keyArray());
    if (!Array.isArray(roleOrRoles)) return this.add([roleOrRoles]);
    roleOrRoles = roleOrRoles.map(r => this.guild.roles.resolve(r));

    if (roleOrRoles.includes(null)) {
      return Promise.reject(new TypeError('INVALID_TYPE', 'roles', 'Array or Collection of Roles or Snowflakes', true));
    }

    const newRoles = [...new Set(roleOrRoles.concat(...this._roles.values()))];
    return this.set(newRoles);
  }

  /**
   * Removes a role (or multiple roles) from the list of roles that can use this emoji.
   * @param {RoleResolvable|RoleResolvable[]|Collection<Snowflake, Role>} roleOrRoles The role or roles to remove
   * @returns {Promise<GuildEmoji>}
   */
  remove(roleOrRoles) {
    if (roleOrRoles instanceof Collection) return this.remove(roleOrRoles.keyArray());
    if (!Array.isArray(roleOrRoles)) return this.remove([roleOrRoles]);
    roleOrRoles = roleOrRoles.map(r => this.guild.roles.resolveID(r));

    if (roleOrRoles.includes(null)) {
      return Promise.reject(new TypeError('INVALID_TYPE', 'roles', 'Array or Collection of Roles or Snowflakes', true));
    }

    const newRoles = this._roles.keyArray().filter(role => !roleOrRoles.includes(role));
    return this.set(newRoles);
  }

  /**
   * Sets the role(s) that can use this emoji.
   * @param {Collection<Snowflake, Role>|RoleResolvable[]} roles The roles or role IDs to apply
   * @returns {Promise<GuildEmoji>}
   * @example
   * // Set the emoji's roles to a single role
   * guildEmoji.roles.set(['391156570408615936'])
   *   .then(console.log)
   *   .catch(console.error);
   * @example
   * // Remove all roles from an emoji
   * guildEmoji.roles.set([])
   *    .then(console.log)
   *    .catch(console.error);
   */
  set(roles) {
    return this.emoji.edit({ roles });
  }

  clone() {
    const clone = new this.constructor(this.emoji);
    clone._patch(this._roles.keyArray().slice());
    return clone;
  }

  /**
   * Patches the roles for this manager's cache
   * @param {Snowflake[]} roles The new roles
   * @private
   */
  _patch(roles) {
    this.emoji._roles = roles;
  }
}

module.exports = GuildEmojiRoleManager;


/***/ }),

/***/ "./node_modules/discord.js/src/managers/GuildManager.js":
/*!**************************************************************!*\
  !*** ./node_modules/discord.js/src/managers/GuildManager.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const BaseManager = __webpack_require__(/*! ./BaseManager */ "./node_modules/discord.js/src/managers/BaseManager.js");
const Guild = __webpack_require__(/*! ../structures/Guild */ "./node_modules/discord.js/src/structures/Guild.js");
const GuildChannel = __webpack_require__(/*! ../structures/GuildChannel */ "./node_modules/discord.js/src/structures/GuildChannel.js");
const GuildEmoji = __webpack_require__(/*! ../structures/GuildEmoji */ "./node_modules/discord.js/src/structures/GuildEmoji.js");
const GuildMember = __webpack_require__(/*! ../structures/GuildMember */ "./node_modules/discord.js/src/structures/GuildMember.js");
const Invite = __webpack_require__(/*! ../structures/Invite */ "./node_modules/discord.js/src/structures/Invite.js");
const Role = __webpack_require__(/*! ../structures/Role */ "./node_modules/discord.js/src/structures/Role.js");
const {
  ChannelTypes,
  Events,
  VerificationLevels,
  DefaultMessageNotifications,
  ExplicitContentFilterLevels,
} = __webpack_require__(/*! ../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");
const DataResolver = __webpack_require__(/*! ../util/DataResolver */ "./node_modules/discord.js/src/util/DataResolver.js");
const Permissions = __webpack_require__(/*! ../util/Permissions */ "./node_modules/discord.js/src/util/Permissions.js");
const { resolveColor } = __webpack_require__(/*! ../util/Util */ "./node_modules/discord.js/src/util/Util.js");

/**
 * Manages API methods for Guilds and stores their cache.
 * @extends {BaseManager}
 */
class GuildManager extends BaseManager {
  constructor(client, iterable) {
    super(client, iterable, Guild);
  }

  /**
   * The cache of this Manager
   * @type {Collection<Snowflake, Guild>}
   * @name GuildManager#cache
   */

  /**
   * Data that resolves to give a Guild object. This can be:
   * * A Guild object
   * * A GuildChannel object
   * * A GuildEmoji object
   * * A Role object
   * * A Snowflake
   * * An Invite object
   * @typedef {Guild|GuildChannel|GuildMember|GuildEmoji|Role|Snowflake|Invite} GuildResolvable
   */

  /**
   * Partial data for a Role.
   * @typedef {Object} PartialRoleData
   * @property {number} [id] The ID for this role, used to set channel overrides,
   * this is a placeholder and will be replaced by the API after consumption
   * @property {string} [name] The name of the role
   * @property {ColorResolvable} [color] The color of the role, either a hex string or a base 10 number
   * @property {boolean} [hoist] Whether or not the role should be hoisted
   * @property {number} [position] The position of the role
   * @property {PermissionResolvable|number} [permissions] The permissions of the role
   * @property {boolean} [mentionable] Whether or not the role should be mentionable
   */

  /**
   * Partial overwrite data.
   * @typedef {Object} PartialOverwriteData
   * @property {number|Snowflake} id The Role or User ID for this overwrite
   * @property {string} [type] The type of this overwrite
   * @property {PermissionResolvable} [allow] The permissions to allow
   * @property {PermissionResolvable} [deny] The permissions to deny
   */

  /**
   * Partial data for a Channel.
   * @typedef {Object} PartialChannelData
   * @property {number} [id] The ID for this channel, used to set its parent,
   * this is a placeholder and will be replaced by the API after consumption
   * @property {number} [parentID] The parent ID for this channel
   * @property {string} [type] The type of the channel
   * @property {string} name The name of the channel
   * @property {string} [topic] The topic of the text channel
   * @property {boolean} [nsfw] Whether the channel is NSFW
   * @property {number} [bitrate] The bitrate of the voice channel
   * @property {number} [userLimit] The user limit of the channel
   * @property {PartialOverwriteData} [permissionOverwrites]
   * Overwrites of the channel
   * @property {number} [rateLimitPerUser] The rate limit per user of the channel in seconds
   */

  /**
   * Resolves a GuildResolvable to a Guild object.
   * @method resolve
   * @memberof GuildManager
   * @instance
   * @param {GuildResolvable} guild The guild resolvable to identify
   * @returns {?Guild}
   */
  resolve(guild) {
    if (
      guild instanceof GuildChannel ||
      guild instanceof GuildMember ||
      guild instanceof GuildEmoji ||
      guild instanceof Role ||
      (guild instanceof Invite && guild.guild)
    ) {
      return super.resolve(guild.guild);
    }
    return super.resolve(guild);
  }

  /**
   * Resolves a GuildResolvable to a Guild ID string.
   * @method resolveID
   * @memberof GuildManager
   * @instance
   * @param {GuildResolvable} guild The guild resolvable to identify
   * @returns {?Snowflake}
   */
  resolveID(guild) {
    if (
      guild instanceof GuildChannel ||
      guild instanceof GuildMember ||
      guild instanceof GuildEmoji ||
      guild instanceof Role ||
      (guild instanceof Invite && guild.guild)
    ) {
      return super.resolveID(guild.guild.id);
    }
    return super.resolveID(guild);
  }

  /**
   * Creates a guild.
   * <warn>This is only available to bots in fewer than 10 guilds.</warn>
   * @param {string} name The name of the guild
   * @param {Object} [options] Options for the creating
   * @param {number} [options.afkChannelID] The ID of the AFK channel
   * @param {number} [options.afkTimeout] The AFK timeout in seconds
   * @param {PartialChannelData[]} [options.channels] The channels for this guild
   * @param {DefaultMessageNotifications} [options.defaultMessageNotifications] The default message notifications
   * for the guild
   * @param {ExplicitContentFilterLevel} [options.explicitContentFilter] The explicit content filter level for the guild
   * @param {BufferResolvable|Base64Resolvable} [options.icon=null] The icon for the guild
   * @param {string} [options.region] The region for the server, defaults to the closest one available
   * @param {PartialRoleData[]} [options.roles] The roles for this guild,
   * the first element of this array is used to change properties of the guild's everyone role.
   * @param {number} [options.systemChannelID] The ID of the system channel
   * @param {VerificationLevel} [options.verificationLevel] The verification level for the guild
   * @returns {Promise<Guild>} The guild that was created
   */
  async create(
    name,
    {
      afkChannelID,
      afkTimeout,
      channels = [],
      defaultMessageNotifications,
      explicitContentFilter,
      icon = null,
      region,
      roles = [],
      systemChannelID,
      verificationLevel,
    } = {},
  ) {
    icon = await DataResolver.resolveImage(icon);
    if (typeof verificationLevel !== 'undefined' && typeof verificationLevel !== 'number') {
      verificationLevel = VerificationLevels.indexOf(verificationLevel);
    }
    if (typeof defaultMessageNotifications !== 'undefined' && typeof defaultMessageNotifications !== 'number') {
      defaultMessageNotifications = DefaultMessageNotifications.indexOf(defaultMessageNotifications);
    }
    if (typeof explicitContentFilter !== 'undefined' && typeof explicitContentFilter !== 'number') {
      explicitContentFilter = ExplicitContentFilterLevels.indexOf(explicitContentFilter);
    }
    for (const channel of channels) {
      if (channel.type) channel.type = ChannelTypes[channel.type.toUpperCase()];
      channel.parent_id = channel.parentID;
      delete channel.parentID;
      if (!channel.permissionOverwrites) continue;
      for (const overwrite of channel.permissionOverwrites) {
        if (overwrite.allow) overwrite.allow = Permissions.resolve(overwrite.allow);
        if (overwrite.deny) overwrite.deny = Permissions.resolve(overwrite.deny);
      }
      channel.permission_overwrites = channel.permissionOverwrites;
      delete channel.permissionOverwrites;
    }
    for (const role of roles) {
      if (role.color) role.color = resolveColor(role.color);
      if (role.permissions) role.permissions = Permissions.resolve(role.permissions);
    }
    return new Promise((resolve, reject) =>
      this.client.api.guilds
        .post({
          data: {
            name,
            region,
            icon,
            verification_level: verificationLevel,
            default_message_notifications: defaultMessageNotifications,
            explicit_content_filter: explicitContentFilter,
            roles,
            channels,
            afk_channel_id: afkChannelID,
            afk_timeout: afkTimeout,
            system_channel_id: systemChannelID,
          },
        })
        .then(data => {
          if (this.client.guilds.cache.has(data.id)) return resolve(this.client.guilds.cache.get(data.id));

          const handleGuild = guild => {
            if (guild.id === data.id) {
              this.client.clearTimeout(timeout);
              this.client.removeListener(Events.GUILD_CREATE, handleGuild);
              this.client.decrementMaxListeners();
              resolve(guild);
            }
          };
          this.client.incrementMaxListeners();
          this.client.on(Events.GUILD_CREATE, handleGuild);

          const timeout = this.client.setTimeout(() => {
            this.client.removeListener(Events.GUILD_CREATE, handleGuild);
            this.client.decrementMaxListeners();
            resolve(this.client.guilds.add(data));
          }, 10000);
          return undefined;
        }, reject),
    );
  }

  /**
   * Obtains a guild from Discord, or the guild cache if it's already available.
   * @param {Snowflake} id ID of the guild
   * @param {boolean} [cache=true] Whether to cache the new guild object if it isn't already
   * @param {boolean} [force=false] Whether to skip the cache check and request the API
   * @returns {Promise<Guild>}
   * @example
   * // Fetch a guild by its id
   * client.guilds.fetch('222078108977594368')
   *   .then(guild => console.log(guild.name))
   *   .catch(console.error);
   */
  async fetch(id, cache = true, force = false) {
    if (!force) {
      const existing = this.cache.get(id);
      if (existing) return existing;
    }

    const data = await this.client.api.guilds(id).get({ query: { with_counts: true } });
    return this.add(data, cache);
  }
}

module.exports = GuildManager;


/***/ }),

/***/ "./node_modules/discord.js/src/managers/GuildMemberManager.js":
/*!********************************************************************!*\
  !*** ./node_modules/discord.js/src/managers/GuildMemberManager.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const BaseManager = __webpack_require__(/*! ./BaseManager */ "./node_modules/discord.js/src/managers/BaseManager.js");
const { Error, TypeError, RangeError } = __webpack_require__(/*! ../errors */ "./node_modules/discord.js/src/errors/index.js");
const GuildMember = __webpack_require__(/*! ../structures/GuildMember */ "./node_modules/discord.js/src/structures/GuildMember.js");
const Collection = __webpack_require__(/*! ../util/Collection */ "./node_modules/discord.js/src/util/Collection.js");
const { Events, OPCodes } = __webpack_require__(/*! ../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");
const SnowflakeUtil = __webpack_require__(/*! ../util/Snowflake */ "./node_modules/discord.js/src/util/Snowflake.js");

/**
 * Manages API methods for GuildMembers and stores their cache.
 * @extends {BaseManager}
 */
class GuildMemberManager extends BaseManager {
  constructor(guild, iterable) {
    super(guild.client, iterable, GuildMember);
    /**
     * The guild this manager belongs to
     * @type {Guild}
     */
    this.guild = guild;
  }

  /**
   * The cache of this Manager
   * @type {Collection<Snowflake, GuildMember>}
   * @name GuildMemberManager#cache
   */

  add(data, cache = true) {
    return super.add(data, cache, { id: data.user.id, extras: [this.guild] });
  }

  /**
   * Data that resolves to give a GuildMember object. This can be:
   * * A GuildMember object
   * * A User resolvable
   * @typedef {GuildMember|UserResolvable} GuildMemberResolvable
   */

  /**
   * Resolves a GuildMemberResolvable to a GuildMember object.
   * @param {GuildMemberResolvable} member The user that is part of the guild
   * @returns {?GuildMember}
   */
  resolve(member) {
    const memberResolvable = super.resolve(member);
    if (memberResolvable) return memberResolvable;
    const userResolvable = this.client.users.resolveID(member);
    if (userResolvable) return super.resolve(userResolvable);
    return null;
  }

  /**
   * Resolves a GuildMemberResolvable to a member ID string.
   * @param {GuildMemberResolvable} member The user that is part of the guild
   * @returns {?Snowflake}
   */
  resolveID(member) {
    const memberResolvable = super.resolveID(member);
    if (memberResolvable) return memberResolvable;
    const userResolvable = this.client.users.resolveID(member);
    return this.cache.has(userResolvable) ? userResolvable : null;
  }

  /**
   * Options used to fetch a single member from a guild.
   * @typedef {Object} FetchMemberOptions
   * @property {UserResolvable} user The user to fetch
   * @property {boolean} [cache=true] Whether or not to cache the fetched member
   * @property {boolean} [force=false] Whether to skip the cache check and request the API
   */

  /**
   * Options used to fetch multiple members from a guild.
   * @typedef {Object} FetchMembersOptions
   * @property {UserResolvable|UserResolvable[]} user The user(s) to fetch
   * @property {?string} query Limit fetch to members with similar usernames
   * @property {number} [limit=0] Maximum number of members to request
   * @property {boolean} [withPresences=false] Whether or not to include the presences
   * @property {number} [time=120e3] Timeout for receipt of members
   * @property {?string} nonce Nonce for this request (32 characters max - default to base 16 now timestamp)
   * @property {boolean} [force=false] Whether to skip the cache check and request the API
   */

  /**
   * Fetches member(s) from Discord, even if they're offline.
   * @param {UserResolvable|FetchMemberOptions|FetchMembersOptions} [options] If a UserResolvable, the user to fetch.
   * If undefined, fetches all members.
   * If a query, it limits the results to users with similar usernames.
   * @returns {Promise<GuildMember>|Promise<Collection<Snowflake, GuildMember>>}
   * @example
   * // Fetch all members from a guild
   * guild.members.fetch()
   *   .then(console.log)
   *   .catch(console.error);
   * @example
   * // Fetch a single member
   * guild.members.fetch('66564597481480192')
   *   .then(console.log)
   *   .catch(console.error);
   * @example
   * // Fetch a single member without checking cache
   * guild.members.fetch({ user, force: true })
   *   .then(console.log)
   *   .catch(console.error)
   * @example
   * // Fetch a single member without caching
   * guild.members.fetch({ user, cache: false })
   *   .then(console.log)
   *   .catch(console.error);
   * @example
   * // Fetch by an array of users including their presences
   * guild.members.fetch({ user: ['66564597481480192', '191615925336670208'], withPresences: true })
   *   .then(console.log)
   *   .catch(console.error);
   * @example
   * // Fetch by query
   * guild.members.fetch({ query: 'hydra', limit: 1 })
   *   .then(console.log)
   *   .catch(console.error);
   */
  fetch(options) {
    if (!options) return this._fetchMany();
    const user = this.client.users.resolveID(options);
    if (user) return this._fetchSingle({ user, cache: true });
    if (options.user) {
      if (Array.isArray(options.user)) {
        options.user = options.user.map(u => this.client.users.resolveID(u));
        return this._fetchMany(options);
      } else {
        options.user = this.client.users.resolveID(options.user);
      }
      if (!options.limit && !options.withPresences) return this._fetchSingle(options);
    }
    return this._fetchMany(options);
  }

  /**
   * Prunes members from the guild based on how long they have been inactive.
   * <info>It's recommended to set options.count to `false` for large guilds.</info>
   * @param {Object} [options] Prune options
   * @param {number} [options.days=7] Number of days of inactivity required to kick
   * @param {boolean} [options.dry=false] Get number of users that will be kicked, without actually kicking them
   * @param {boolean} [options.count=true] Whether or not to return the number of users that have been kicked.
   * @param {RoleResolvable[]} [options.roles=[]] Array of roles to bypass the "...and no roles" constraint when pruning
   * @param {string} [options.reason] Reason for this prune
   * @returns {Promise<number|null>} The number of members that were/will be kicked
   * @example
   * // See how many members will be pruned
   * guild.members.prune({ dry: true })
   *   .then(pruned => console.log(`This will prune ${pruned} people!`))
   *   .catch(console.error);
   * @example
   * // Actually prune the members
   * guild.members.prune({ days: 1, reason: 'too many people!' })
   *   .then(pruned => console.log(`I just pruned ${pruned} people!`))
   *   .catch(console.error);
   * @example
   * // Include members with a specified role
   * guild.members.prune({ days: 7, roles: ['657259391652855808'] })
   *    .then(pruned => console.log(`I just pruned ${pruned} people!`))
   *    .catch(console.error);
   */
  prune({ days = 7, dry = false, count: compute_prune_count = true, roles = [], reason } = {}) {
    if (typeof days !== 'number') throw new TypeError('PRUNE_DAYS_TYPE');

    const query = { days };
    const resolvedRoles = [];

    for (const role of roles) {
      const resolvedRole = this.guild.roles.resolveID(role);
      if (!resolvedRole) {
        return Promise.reject(new TypeError('INVALID_TYPE', 'roles', 'Array of Roles or Snowflakes', true));
      }
      resolvedRoles.push(resolvedRole);
    }

    if (resolvedRoles.length) {
      query.include_roles = dry ? resolvedRoles.join(',') : resolvedRoles;
    }

    const endpoint = this.client.api.guilds(this.guild.id).prune;

    if (dry) {
      return endpoint.get({ query, reason }).then(data => data.pruned);
    }

    return endpoint
      .post({
        data: { ...query, compute_prune_count },
        reason,
      })
      .then(data => data.pruned);
  }

  /**
   * Bans a user from the guild.
   * @param {UserResolvable} user The user to ban
   * @param {Object} [options] Options for the ban
   * @param {number} [options.days=0] Number of days of messages to delete, must be between 0 and 7
   * @param {string} [options.reason] Reason for banning
   * @returns {Promise<GuildMember|User|Snowflake>} Result object will be resolved as specifically as possible.
   * If the GuildMember cannot be resolved, the User will instead be attempted to be resolved. If that also cannot
   * be resolved, the user ID will be the result.
   * @example
   * // Ban a user by ID (or with a user/guild member object)
   * guild.members.ban('84484653687267328')
   *   .then(user => console.log(`Banned ${user.username || user.id || user} from ${guild.name}`))
   *   .catch(console.error);
   */
  ban(user, options = { days: 0 }) {
    if (options.days) options.delete_message_days = options.days;
    const id = this.client.users.resolveID(user);
    if (!id) return Promise.reject(new Error('BAN_RESOLVE_ID', true));
    return this.client.api
      .guilds(this.guild.id)
      .bans[id].put({ data: options })
      .then(() => {
        if (user instanceof GuildMember) return user;
        const _user = this.client.users.resolve(id);
        if (_user) {
          const member = this.resolve(_user);
          return member || _user;
        }
        return id;
      });
  }

  /**
   * Unbans a user from the guild.
   * @param {UserResolvable} user The user to unban
   * @param {string} [reason] Reason for unbanning user
   * @returns {Promise<User>}
   * @example
   * // Unban a user by ID (or with a user/guild member object)
   * guild.members.unban('84484653687267328')
   *   .then(user => console.log(`Unbanned ${user.username} from ${guild.name}`))
   *   .catch(console.error);
   */
  unban(user, reason) {
    const id = this.client.users.resolveID(user);
    if (!id) return Promise.reject(new Error('BAN_RESOLVE_ID'));
    return this.client.api
      .guilds(this.guild.id)
      .bans[id].delete({ reason })
      .then(() => this.client.users.resolve(user));
  }

  _fetchSingle({ user, cache, force = false }) {
    if (!force) {
      const existing = this.cache.get(user);
      if (existing && !existing.partial) return Promise.resolve(existing);
    }

    return this.client.api
      .guilds(this.guild.id)
      .members(user)
      .get()
      .then(data => this.add(data, cache));
  }

  _fetchMany({
    limit = 0,
    withPresences: presences = false,
    user: user_ids,
    query,
    time = 120e3,
    nonce = SnowflakeUtil.generate(),
    force = false,
  } = {}) {
    return new Promise((resolve, reject) => {
      if (this.guild.memberCount === this.cache.size && !query && !limit && !presences && !user_ids && !force) {
        resolve(this.cache);
        return;
      }
      if (!query && !user_ids) query = '';
      if (nonce.length > 32) throw new RangeError('MEMBER_FETCH_NONCE_LENGTH');
      this.guild.shard.send({
        op: OPCodes.REQUEST_GUILD_MEMBERS,
        d: {
          guild_id: this.guild.id,
          presences,
          user_ids,
          query,
          nonce,
          limit,
        },
      });
      const fetchedMembers = new Collection();
      const option = query || limit || presences || user_ids;
      let i = 0;
      const handler = (members, _, chunk) => {
        timeout.refresh();
        if (chunk.nonce !== nonce) return;
        i++;
        for (const member of members.values()) {
          if (option) fetchedMembers.set(member.id, member);
        }
        if (
          this.guild.memberCount <= this.cache.size ||
          (option && members.size < 1000) ||
          (limit && fetchedMembers.size >= limit) ||
          i === chunk.count
        ) {
          this.client.clearTimeout(timeout);
          this.client.removeListener(Events.GUILD_MEMBERS_CHUNK, handler);
          this.client.decrementMaxListeners();
          let fetched = option ? fetchedMembers : this.cache;
          if (user_ids && !Array.isArray(user_ids) && fetched.size) fetched = fetched.first();
          resolve(fetched);
        }
      };
      const timeout = this.client.setTimeout(() => {
        this.client.removeListener(Events.GUILD_MEMBERS_CHUNK, handler);
        this.client.decrementMaxListeners();
        reject(new Error('GUILD_MEMBERS_TIMEOUT'));
      }, time);
      this.client.incrementMaxListeners();
      this.client.on(Events.GUILD_MEMBERS_CHUNK, handler);
    });
  }
}

module.exports = GuildMemberManager;


/***/ }),

/***/ "./node_modules/discord.js/src/managers/GuildMemberRoleManager.js":
/*!************************************************************************!*\
  !*** ./node_modules/discord.js/src/managers/GuildMemberRoleManager.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { TypeError } = __webpack_require__(/*! ../errors */ "./node_modules/discord.js/src/errors/index.js");
const Collection = __webpack_require__(/*! ../util/Collection */ "./node_modules/discord.js/src/util/Collection.js");

/**
 * Manages API methods for roles of a GuildMember and stores their cache.
 */
class GuildMemberRoleManager {
  constructor(member) {
    /**
     * The GuildMember this manager belongs to
     * @type {GuildMember}
     */
    this.member = member;
    /**
     * The Guild this manager belongs to
     * @type {Guild}
     */
    this.guild = member.guild;
    Object.defineProperty(this, 'client', { value: member.client });
  }

  /**
   * The filtered collection of roles of the member
   * @type {Collection<Snowflake, Role>}
   * @private
   * @readonly
   */
  get _roles() {
    const everyone = this.guild.roles.everyone;
    return this.guild.roles.cache.filter(role => this.member._roles.includes(role.id)).set(everyone.id, everyone);
  }

  /**
   * The roles of this member
   * @type {Collection<Snowflake, Role>}
   * @readonly
   */
  get cache() {
    return this._roles;
  }

  /**
   * The role of the member used to hoist them in a separate category in the users list
   * @type {?Role}
   * @readonly
   */
  get hoist() {
    const hoistedRoles = this._roles.filter(role => role.hoist);
    if (!hoistedRoles.size) return null;
    return hoistedRoles.reduce((prev, role) => (!prev || role.comparePositionTo(prev) > 0 ? role : prev));
  }

  /**
   * The role of the member used to set their color
   * @type {?Role}
   * @readonly
   */
  get color() {
    const coloredRoles = this._roles.filter(role => role.color);
    if (!coloredRoles.size) return null;
    return coloredRoles.reduce((prev, role) => (!prev || role.comparePositionTo(prev) > 0 ? role : prev));
  }

  /**
   * The role of the member with the highest position
   * @type {Role}
   * @readonly
   */
  get highest() {
    return this._roles.reduce((prev, role) => (role.comparePositionTo(prev) > 0 ? role : prev), this._roles.first());
  }

  /**
   * Adds a role (or multiple roles) to the member.
   * @param {RoleResolvable|RoleResolvable[]|Collection<Snowflake, Role>} roleOrRoles The role or roles to add
   * @param {string} [reason] Reason for adding the role(s)
   * @returns {Promise<GuildMember>}
   */
  async add(roleOrRoles, reason) {
    if (roleOrRoles instanceof Collection || Array.isArray(roleOrRoles)) {
      roleOrRoles = roleOrRoles.map(r => this.guild.roles.resolve(r));
      if (roleOrRoles.includes(null)) {
        throw new TypeError('INVALID_TYPE', 'roles', 'Array or Collection of Roles or Snowflakes', true);
      }

      const newRoles = [...new Set(roleOrRoles.concat(...this._roles.values()))];
      return this.set(newRoles, reason);
    } else {
      roleOrRoles = this.guild.roles.resolve(roleOrRoles);
      if (roleOrRoles === null) {
        throw new TypeError('INVALID_TYPE', 'roles', 'Role, Snowflake or Array or Collection of Roles or Snowflakes');
      }

      await this.client.api.guilds[this.guild.id].members[this.member.id].roles[roleOrRoles.id].put({ reason });

      const clone = this.member._clone();
      clone._roles = [...this._roles.keys(), roleOrRoles.id];
      return clone;
    }
  }

  /**
   * Removes a role (or multiple roles) from the member.
   * @param {RoleResolvable|RoleResolvable[]|Collection<Snowflake, Role>} roleOrRoles The role or roles to remove
   * @param {string} [reason] Reason for removing the role(s)
   * @returns {Promise<GuildMember>}
   */
  async remove(roleOrRoles, reason) {
    if (roleOrRoles instanceof Collection || Array.isArray(roleOrRoles)) {
      roleOrRoles = roleOrRoles.map(r => this.guild.roles.resolve(r));
      if (roleOrRoles.includes(null)) {
        throw new TypeError('INVALID_TYPE', 'roles', 'Array or Collection of Roles or Snowflakes', true);
      }

      const newRoles = this._roles.filter(role => !roleOrRoles.includes(role));
      return this.set(newRoles, reason);
    } else {
      roleOrRoles = this.guild.roles.resolve(roleOrRoles);
      if (roleOrRoles === null) {
        throw new TypeError('INVALID_TYPE', 'roles', 'Array or Collection of Roles or Snowflakes', true);
      }

      await this.client.api.guilds[this.guild.id].members[this.member.id].roles[roleOrRoles.id].delete({ reason });

      const clone = this.member._clone();
      const newRoles = this._roles.filter(role => role.id !== roleOrRoles.id);
      clone._roles = [...newRoles.keys()];
      return clone;
    }
  }

  /**
   * Sets the roles applied to the member.
   * @param {Collection<Snowflake, Role>|RoleResolvable[]} roles The roles or role IDs to apply
   * @param {string} [reason] Reason for applying the roles
   * @returns {Promise<GuildMember>}
   * @example
   * // Set the member's roles to a single role
   * guildMember.roles.set(['391156570408615936'])
   *   .then(console.log)
   *   .catch(console.error);
   * @example
   * // Remove all the roles from a member
   * guildMember.roles.set([])
   *   .then(member => console.log(`Member roles is now of ${member.roles.cache.size} size`))
   *   .catch(console.error);
   */
  set(roles, reason) {
    return this.member.edit({ roles }, reason);
  }

  clone() {
    const clone = new this.constructor(this.member);
    clone.member._roles = [...this._roles.keyArray()];
    return clone;
  }
}

module.exports = GuildMemberRoleManager;


/***/ }),

/***/ "./node_modules/discord.js/src/managers/MessageManager.js":
/*!****************************************************************!*\
  !*** ./node_modules/discord.js/src/managers/MessageManager.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const BaseManager = __webpack_require__(/*! ./BaseManager */ "./node_modules/discord.js/src/managers/BaseManager.js");
const { TypeError } = __webpack_require__(/*! ../errors */ "./node_modules/discord.js/src/errors/index.js");
const Message = __webpack_require__(/*! ../structures/Message */ "./node_modules/discord.js/src/structures/Message.js");
const Collection = __webpack_require__(/*! ../util/Collection */ "./node_modules/discord.js/src/util/Collection.js");
const LimitedCollection = __webpack_require__(/*! ../util/LimitedCollection */ "./node_modules/discord.js/src/util/LimitedCollection.js");

/**
 * Manages API methods for Messages and holds their cache.
 * @extends {BaseManager}
 */
class MessageManager extends BaseManager {
  constructor(channel, iterable) {
    super(channel.client, iterable, Message, LimitedCollection, channel.client.options.messageCacheMaxSize);
    /**
     * The channel that the messages belong to
     * @type {TextBasedChannel}
     */
    this.channel = channel;
  }

  /**
   * The cache of Messages
   * @type {Collection<Snowflake, Message>}
   * @name MessageManager#cache
   */

  add(data, cache) {
    return super.add(data, cache, { extras: [this.channel] });
  }

  /**
   * The parameters to pass in when requesting previous messages from a channel. `around`, `before` and
   * `after` are mutually exclusive. All the parameters are optional.
   * @typedef {Object} ChannelLogsQueryOptions
   * @property {number} [limit=50] Number of messages to acquire
   * @property {Snowflake} [before] ID of a message to get the messages that were posted before it
   * @property {Snowflake} [after] ID of a message to get the messages that were posted after it
   * @property {Snowflake} [around] ID of a message to get the messages that were posted around it
   */

  /**
   * Gets a message, or messages, from this channel.
   * <info>The returned Collection does not contain reaction users of the messages if they were not cached.
   * Those need to be fetched separately in such a case.</info>
   * @param {Snowflake|ChannelLogsQueryOptions} [message] The ID of the message to fetch, or query parameters.
   * @param {boolean} [cache=true] Whether to cache the message(s)
   * @param {boolean} [force=false] Whether to skip the cache check and request the API
   * @returns {Promise<Message>|Promise<Collection<Snowflake, Message>>}
   * @example
   * // Get message
   * channel.messages.fetch('99539446449315840')
   *   .then(message => console.log(message.content))
   *   .catch(console.error);
   * @example
   * // Get messages
   * channel.messages.fetch({ limit: 10 })
   *   .then(messages => console.log(`Received ${messages.size} messages`))
   *   .catch(console.error);
   * @example
   * // Get messages and filter by user ID
   * channel.messages.fetch()
   *   .then(messages => console.log(`${messages.filter(m => m.author.id === '84484653687267328').size} messages`))
   *   .catch(console.error);
   */
  fetch(message, cache = true, force = false) {
    return typeof message === 'string' ? this._fetchId(message, cache, force) : this._fetchMany(message, cache);
  }

  /**
   * Fetches the pinned messages of this channel and returns a collection of them.
   * <info>The returned Collection does not contain any reaction data of the messages.
   * Those need to be fetched separately.</info>
   * @param {boolean} [cache=true] Whether to cache the message(s)
   * @returns {Promise<Collection<Snowflake, Message>>}
   * @example
   * // Get pinned messages
   * channel.messages.fetchPinned()
   *   .then(messages => console.log(`Received ${messages.size} messages`))
   *   .catch(console.error);
   */
  fetchPinned(cache = true) {
    return this.client.api.channels[this.channel.id].pins.get().then(data => {
      const messages = new Collection();
      for (const message of data) messages.set(message.id, this.add(message, cache));
      return messages;
    });
  }

  /**
   * Data that can be resolved to a Message object. This can be:
   * * A Message
   * * A Snowflake
   * @typedef {Message|Snowflake} MessageResolvable
   */

  /**
   * Resolves a MessageResolvable to a Message object.
   * @method resolve
   * @memberof MessageManager
   * @instance
   * @param {MessageResolvable} message The message resolvable to resolve
   * @returns {?Message}
   */

  /**
   * Resolves a MessageResolvable to a Message ID string.
   * @method resolveID
   * @memberof MessageManager
   * @instance
   * @param {MessageResolvable} message The message resolvable to resolve
   * @returns {?Snowflake}
   */

  /**
   * Deletes a message, even if it's not cached.
   * @param {MessageResolvable} message The message to delete
   * @param {string} [reason] Reason for deleting this message, if it does not belong to the client user
   * @returns {Promise<void>}
   */
  async delete(message, reason) {
    message = this.resolveID(message);
    if (!message) throw new TypeError('INVALID_TYPE', 'message', 'MessageResolvable');

    await this.client.api.channels(this.channel.id).messages(message).delete({ reason });
  }

  async _fetchId(messageID, cache, force) {
    if (!force) {
      const existing = this.cache.get(messageID);
      if (existing && !existing.partial) return existing;
    }

    const data = await this.client.api.channels[this.channel.id].messages[messageID].get();
    return this.add(data, cache);
  }

  async _fetchMany(options = {}, cache) {
    const data = await this.client.api.channels[this.channel.id].messages.get({ query: options });
    const messages = new Collection();
    for (const message of data) messages.set(message.id, this.add(message, cache));
    return messages;
  }
}

module.exports = MessageManager;


/***/ }),

/***/ "./node_modules/discord.js/src/managers/PresenceManager.js":
/*!*****************************************************************!*\
  !*** ./node_modules/discord.js/src/managers/PresenceManager.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const BaseManager = __webpack_require__(/*! ./BaseManager */ "./node_modules/discord.js/src/managers/BaseManager.js");
const { Presence } = __webpack_require__(/*! ../structures/Presence */ "./node_modules/discord.js/src/structures/Presence.js");

/**
 * Manages API methods for Presences and holds their cache.
 * @extends {BaseManager}
 */
class PresenceManager extends BaseManager {
  constructor(client, iterable) {
    super(client, iterable, Presence);
  }

  /**
   * The cache of Presences
   * @type {Collection<Snowflake, Presence>}
   * @name PresenceManager#cache
   */

  add(data, cache) {
    const existing = this.cache.get(data.user.id);
    return existing ? existing.patch(data) : super.add(data, cache, { id: data.user.id });
  }

  /**
   * Data that can be resolved to a Presence object. This can be:
   * * A Presence
   * * A UserResolvable
   * * A Snowflake
   * @typedef {Presence|UserResolvable|Snowflake} PresenceResolvable
   */

  /**
   * Resolves a PresenceResolvable to a Presence object.
   * @param {PresenceResolvable} presence The presence resolvable to resolve
   * @returns {?Presence}
   */
  resolve(presence) {
    const presenceResolvable = super.resolve(presence);
    if (presenceResolvable) return presenceResolvable;
    const UserResolvable = this.client.users.resolveID(presence);
    return super.resolve(UserResolvable) || null;
  }

  /**
   * Resolves a PresenceResolvable to a Presence ID string.
   * @param {PresenceResolvable} presence The presence resolvable to resolve
   * @returns {?Snowflake}
   */
  resolveID(presence) {
    const presenceResolvable = super.resolveID(presence);
    if (presenceResolvable) return presenceResolvable;
    const userResolvable = this.client.users.resolveID(presence);
    return this.cache.has(userResolvable) ? userResolvable : null;
  }
}

module.exports = PresenceManager;


/***/ }),

/***/ "./node_modules/discord.js/src/managers/ReactionManager.js":
/*!*****************************************************************!*\
  !*** ./node_modules/discord.js/src/managers/ReactionManager.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const BaseManager = __webpack_require__(/*! ./BaseManager */ "./node_modules/discord.js/src/managers/BaseManager.js");
const MessageReaction = __webpack_require__(/*! ../structures/MessageReaction */ "./node_modules/discord.js/src/structures/MessageReaction.js");

/**
 * Manages API methods for reactions and holds their cache.
 * @extends {BaseManager}
 */
class ReactionManager extends BaseManager {
  constructor(message, iterable) {
    super(message.client, iterable, MessageReaction);

    /**
     * The message that this manager belongs to
     * @type {Message}
     */
    this.message = message;
  }

  add(data, cache) {
    return super.add(data, cache, { id: data.emoji.id || data.emoji.name, extras: [this.message] });
  }

  /**
   * The reaction cache of this manager
   * @type {Collection<string|Snowflake, MessageReaction>}
   * @name ReactionManager#cache
   */

  /**
   * Data that can be resolved to a MessageReaction object. This can be:
   * * A MessageReaction
   * * A Snowflake
   * @typedef {MessageReaction|Snowflake} MessageReactionResolvable
   */

  /**
   * Resolves a MessageReactionResolvable to a MessageReaction object.
   * @method resolve
   * @memberof ReactionManager
   * @instance
   * @param {MessageReactionResolvable} reaction The MessageReaction to resolve
   * @returns {?MessageReaction}
   */

  /**
   * Resolves a MessageReactionResolvable to a MessageReaction ID string.
   * @method resolveID
   * @memberof ReactionManager
   * @instance
   * @param {MessageReactionResolvable} reaction The MessageReaction to resolve
   * @returns {?Snowflake}
   */

  /**
   * Removes all reactions from a message.
   * @returns {Promise<Message>}
   */
  removeAll() {
    return this.client.api
      .channels(this.message.channel.id)
      .messages(this.message.id)
      .reactions.delete()
      .then(() => this.message);
  }
}

module.exports = ReactionManager;


/***/ }),

/***/ "./node_modules/discord.js/src/managers/ReactionUserManager.js":
/*!*********************************************************************!*\
  !*** ./node_modules/discord.js/src/managers/ReactionUserManager.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const BaseManager = __webpack_require__(/*! ./BaseManager */ "./node_modules/discord.js/src/managers/BaseManager.js");
const { Error } = __webpack_require__(/*! ../errors */ "./node_modules/discord.js/src/errors/index.js");
const Collection = __webpack_require__(/*! ../util/Collection */ "./node_modules/discord.js/src/util/Collection.js");

/**
 * Manages API methods for users who reacted to a reaction and stores their cache.
 * @extends {BaseManager}
 */
class ReactionUserManager extends BaseManager {
  constructor(client, iterable, reaction) {
    super(client, iterable, { name: 'User' });
    /**
     * The reaction that this manager belongs to
     * @type {MessageReaction}
     */
    this.reaction = reaction;
  }

  /**
   * The cache of this manager
   * @type {Collection<Snowflake, User>}
   * @name ReactionUserManager#cache
   */

  /**
   * Fetches all the users that gave this reaction. Resolves with a collection of users, mapped by their IDs.
   * @param {Object} [options] Options for fetching the users
   * @param {number} [options.limit=100] The maximum amount of users to fetch, defaults to 100
   * @param {Snowflake} [options.before] Limit fetching users to those with an id lower than the supplied id
   * @param {Snowflake} [options.after] Limit fetching users to those with an id greater than the supplied id
   * @returns {Promise<Collection<Snowflake, User>>}
   */
  async fetch({ limit = 100, after, before } = {}) {
    const message = this.reaction.message;
    const data = await this.client.api.channels[message.channel.id].messages[message.id].reactions[
      this.reaction.emoji.identifier
    ].get({ query: { limit, before, after } });
    const users = new Collection();
    for (const rawUser of data) {
      const user = this.client.users.add(rawUser);
      this.cache.set(user.id, user);
      users.set(user.id, user);
    }
    return users;
  }

  /**
   * Removes a user from this reaction.
   * @param {UserResolvable} [user=this.client.user] The user to remove the reaction of
   * @returns {Promise<MessageReaction>}
   */
  remove(user = this.client.user) {
    const userID = this.client.users.resolveID(user);
    if (!userID) return Promise.reject(new Error('REACTION_RESOLVE_USER'));
    const message = this.reaction.message;
    return this.client.api.channels[message.channel.id].messages[message.id].reactions[this.reaction.emoji.identifier][
      userID === this.client.user.id ? '@me' : userID
    ]
      .delete()
      .then(() => this.reaction);
  }
}

module.exports = ReactionUserManager;


/***/ }),

/***/ "./node_modules/discord.js/src/managers/RoleManager.js":
/*!*************************************************************!*\
  !*** ./node_modules/discord.js/src/managers/RoleManager.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const BaseManager = __webpack_require__(/*! ./BaseManager */ "./node_modules/discord.js/src/managers/BaseManager.js");
const Role = __webpack_require__(/*! ../structures/Role */ "./node_modules/discord.js/src/structures/Role.js");
const Permissions = __webpack_require__(/*! ../util/Permissions */ "./node_modules/discord.js/src/util/Permissions.js");
const { resolveColor } = __webpack_require__(/*! ../util/Util */ "./node_modules/discord.js/src/util/Util.js");

/**
 * Manages API methods for roles and stores their cache.
 * @extends {BaseManager}
 */
class RoleManager extends BaseManager {
  constructor(guild, iterable) {
    super(guild.client, iterable, Role);
    /**
     * The guild belonging to this manager
     * @type {Guild}
     */
    this.guild = guild;
  }

  /**
   * The role cache of this manager
   * @type {Collection<Snowflake, Role>}
   * @name RoleManager#cache
   */

  add(data, cache) {
    return super.add(data, cache, { extras: [this.guild] });
  }

  /**
   * Obtains one or more roles from Discord, or the role cache if they're already available.
   * @param {Snowflake} [id] ID or IDs of the role(s)
   * @param {boolean} [cache=true] Whether to cache the new roles objects if it weren't already
   * @param {boolean} [force=false] Whether to skip the cache check and request the API
   * @returns {Promise<Role|RoleManager>}
   * @example
   * // Fetch all roles from the guild
   * message.guild.roles.fetch()
   *   .then(roles => console.log(`There are ${roles.cache.size} roles.`))
   *   .catch(console.error);
   * @example
   * // Fetch a single role
   * message.guild.roles.fetch('222078108977594368')
   *   .then(role => console.log(`The role color is: ${role.color}`))
   *   .catch(console.error);
   */
  async fetch(id, cache = true, force = false) {
    if (id && !force) {
      const existing = this.cache.get(id);
      if (existing) return existing;
    }

    // We cannot fetch a single role, as of this commit's date, Discord API throws with 405
    const roles = await this.client.api.guilds(this.guild.id).roles.get();
    for (const role of roles) this.add(role, cache);
    return id ? this.cache.get(id) || null : this;
  }

  /**
   * Data that can be resolved to a Role object. This can be:
   * * A Role
   * * A Snowflake
   * @typedef {Role|Snowflake} RoleResolvable
   */

  /**
   * Resolves a RoleResolvable to a Role object.
   * @method resolve
   * @memberof RoleManager
   * @instance
   * @param {RoleResolvable} role The role resolvable to resolve
   * @returns {?Role}
   */

  /**
   * Resolves a RoleResolvable to a role ID string.
   * @method resolveID
   * @memberof RoleManager
   * @instance
   * @param {RoleResolvable} role The role resolvable to resolve
   * @returns {?Snowflake}
   */

  /**
   * Creates a new role in the guild with given information.
   * <warn>The position will silently reset to 1 if an invalid one is provided, or none.</warn>
   * @param {Object} [options] Options
   * @param {RoleData} [options.data] The data to create the role with
   * @param {string} [options.reason] Reason for creating this role
   * @returns {Promise<Role>}
   * @example
   * // Create a new role
   * guild.roles.create()
   *   .then(console.log)
   *   .catch(console.error);
   * @example
   * // Create a new role with data and a reason
   * guild.roles.create({
   *   data: {
   *     name: 'Super Cool People',
   *     color: 'BLUE',
   *   },
   *   reason: 'we needed a role for Super Cool People',
   * })
   *   .then(console.log)
   *   .catch(console.error);
   */
  create({ data = {}, reason } = {}) {
    if (data.color) data.color = resolveColor(data.color);
    if (data.permissions) data.permissions = Permissions.resolve(data.permissions);

    return this.guild.client.api
      .guilds(this.guild.id)
      .roles.post({ data, reason })
      .then(r => {
        const { role } = this.client.actions.GuildRoleCreate.handle({
          guild_id: this.guild.id,
          role: r,
        });
        if (data.position) return role.setPosition(data.position, reason);
        return role;
      });
  }

  /**
   * The `@everyone` role of the guild
   * @type {Role}
   * @readonly
   */
  get everyone() {
    return this.cache.get(this.guild.id);
  }

  /**
   * The role with the highest position in the cache
   * @type {Role}
   * @readonly
   */
  get highest() {
    return this.cache.reduce((prev, role) => (role.comparePositionTo(prev) > 0 ? role : prev), this.cache.first());
  }
}

module.exports = RoleManager;


/***/ }),

/***/ "./node_modules/discord.js/src/managers/UserManager.js":
/*!*************************************************************!*\
  !*** ./node_modules/discord.js/src/managers/UserManager.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const BaseManager = __webpack_require__(/*! ./BaseManager */ "./node_modules/discord.js/src/managers/BaseManager.js");
const GuildMember = __webpack_require__(/*! ../structures/GuildMember */ "./node_modules/discord.js/src/structures/GuildMember.js");
const Message = __webpack_require__(/*! ../structures/Message */ "./node_modules/discord.js/src/structures/Message.js");
const User = __webpack_require__(/*! ../structures/User */ "./node_modules/discord.js/src/structures/User.js");

/**
 * Manages API methods for users and stores their cache.
 * @extends {BaseManager}
 */
class UserManager extends BaseManager {
  constructor(client, iterable) {
    super(client, iterable, User);
  }

  /**
   * The cache of this manager
   * @type {Collection<Snowflake, User>}
   * @name UserManager#cache
   */

  /**
   * Data that resolves to give a User object. This can be:
   * * A User object
   * * A Snowflake
   * * A Message object (resolves to the message author)
   * * A GuildMember object
   * @typedef {User|Snowflake|Message|GuildMember} UserResolvable
   */

  /**
   * Resolves a UserResolvable to a User object.
   * @param {UserResolvable} user The UserResolvable to identify
   * @returns {?User}
   */
  resolve(user) {
    if (user instanceof GuildMember) return user.user;
    if (user instanceof Message) return user.author;
    return super.resolve(user);
  }

  /**
   * Resolves a UserResolvable to a user ID string.
   * @param {UserResolvable} user The UserResolvable to identify
   * @returns {?Snowflake}
   */
  resolveID(user) {
    if (user instanceof GuildMember) return user.user.id;
    if (user instanceof Message) return user.author.id;
    return super.resolveID(user);
  }

  /**
   * Obtains a user from Discord, or the user cache if it's already available.
   * @param {Snowflake} id ID of the user
   * @param {boolean} [cache=true] Whether to cache the new user object if it isn't already
   * @param {boolean} [force=false] Whether to skip the cache check and request the API
   * @returns {Promise<User>}
   */
  async fetch(id, cache = true, force = false) {
    if (!force) {
      const existing = this.cache.get(id);
      if (existing && !existing.partial) return existing;
    }

    const data = await this.client.api.users(id).get();
    return this.add(data, cache);
  }
}

module.exports = UserManager;


/***/ }),

/***/ "./node_modules/discord.js/src/managers/VoiceStateManager.js":
/*!*******************************************************************!*\
  !*** ./node_modules/discord.js/src/managers/VoiceStateManager.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const BaseManager = __webpack_require__(/*! ./BaseManager */ "./node_modules/discord.js/src/managers/BaseManager.js");

/**
 * Manages API methods for VoiceStates and stores their cache.
 * @extends {BaseManager}
 */
class VoiceStateManager extends BaseManager {
  constructor(guild, iterable) {
    super(guild.client, iterable, { name: 'VoiceState' });
    /**
     * The guild this manager belongs to
     * @type {Guild}
     */
    this.guild = guild;
  }

  /**
   * The cache of this manager
   * @type {Collection<Snowflake, VoiceState>}
   * @name VoiceStateManager#cache
   */

  add(data, cache = true) {
    const existing = this.cache.get(data.user_id);
    if (existing) return existing._patch(data);

    const entry = new this.holds(this.guild, data);
    if (cache) this.cache.set(data.user_id, entry);
    return entry;
  }
}

module.exports = VoiceStateManager;


/***/ }),

/***/ "./node_modules/discord.js/src/rest/APIRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/discord.js/src/rest/APIRequest.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const https = __webpack_require__(/*! https */ "?8ff5");
const FormData = __webpack_require__(/*! @discordjs/form-data */ "./node_modules/@discordjs/form-data/lib/browser.js");
const AbortController = __webpack_require__(/*! abort-controller */ "./node_modules/abort-controller/browser.js");
const fetch = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
const { browser, UserAgent } = __webpack_require__(/*! ../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

if (https.Agent) var agent = new https.Agent({ keepAlive: true });

class APIRequest {
  constructor(rest, method, path, options) {
    this.rest = rest;
    this.client = rest.client;
    this.method = method;
    this.route = options.route;
    this.options = options;
    this.retries = 0;

    let queryString = '';
    if (options.query) {
      const query = Object.entries(options.query)
        .filter(([, value]) => ![null, 'null', 'undefined'].includes(value) && typeof value !== 'undefined')
        .flatMap(([key, value]) => (Array.isArray(value) ? value.map(v => [key, v]) : [[key, value]]));
      queryString = new URLSearchParams(query).toString();
    }
    this.path = `${path}${queryString && `?${queryString}`}`;
  }

  make() {
    const API =
      this.options.versioned === false
        ? this.client.options.http.api
        : `${this.client.options.http.api}/v${this.client.options.http.version}`;
    const url = API + this.path;
    let headers = {};

    if (this.options.auth !== false) headers.Authorization = this.rest.getAuth();
    if (this.options.reason) headers['X-Audit-Log-Reason'] = encodeURIComponent(this.options.reason);
    if (!browser) headers['User-Agent'] = UserAgent;
    if (this.options.headers) headers = Object.assign(headers, this.options.headers);

    let body;
    if (this.options.files && this.options.files.length) {
      body = new FormData();
      for (const file of this.options.files) if (file && file.file) body.append(file.name, file.file, file.name);
      if (typeof this.options.data !== 'undefined') body.append('payload_json', JSON.stringify(this.options.data));
      if (!browser) headers = Object.assign(headers, body.getHeaders());
      // eslint-disable-next-line eqeqeq
    } else if (this.options.data != null) {
      body = JSON.stringify(this.options.data);
      headers['Content-Type'] = 'application/json';
    }

    const controller = new AbortController();
    const timeout = this.client.setTimeout(() => controller.abort(), this.client.options.restRequestTimeout);
    return fetch(url, {
      method: this.method,
      headers,
      agent,
      body,
      signal: controller.signal,
    }).finally(() => this.client.clearTimeout(timeout));
  }
}

module.exports = APIRequest;


/***/ }),

/***/ "./node_modules/discord.js/src/rest/APIRouter.js":
/*!*******************************************************!*\
  !*** ./node_modules/discord.js/src/rest/APIRouter.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


const noop = () => {}; // eslint-disable-line no-empty-function
const methods = ['get', 'post', 'delete', 'patch', 'put'];
const reflectors = [
  'toString',
  'valueOf',
  'inspect',
  'constructor',
  Symbol.toPrimitive,
  Symbol.for('nodejs.util.inspect.custom'),
];

function buildRoute(manager) {
  const route = [''];
  const handler = {
    get(target, name) {
      if (reflectors.includes(name)) return () => route.join('/');
      if (methods.includes(name)) {
        const routeBucket = [];
        for (let i = 0; i < route.length; i++) {
          // Reactions routes and sub-routes all share the same bucket
          if (route[i - 1] === 'reactions') break;
          // Literal IDs should only be taken account if they are the Major ID (the Channel/Guild ID)
          if (/\d{16,19}/g.test(route[i]) && !/channels|guilds/.test(route[i - 1])) routeBucket.push(':id');
          // All other parts of the route should be considered as part of the bucket identifier
          else routeBucket.push(route[i]);
        }
        return options =>
          manager.request(
            name,
            route.join('/'),
            Object.assign(
              {
                versioned: manager.versioned,
                route: routeBucket.join('/'),
              },
              options,
            ),
          );
      }
      route.push(name);
      return new Proxy(noop, handler);
    },
    apply(target, _, args) {
      route.push(...args.filter(x => x != null)); // eslint-disable-line eqeqeq
      return new Proxy(noop, handler);
    },
  };
  return new Proxy(noop, handler);
}

module.exports = buildRoute;


/***/ }),

/***/ "./node_modules/discord.js/src/rest/AsyncQueue.js":
/*!********************************************************!*\
  !*** ./node_modules/discord.js/src/rest/AsyncQueue.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
/**
 * MIT License
 *
 * Copyright (c) 2020 kyranet, discord.js
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */



// TODO(kyranet, vladfrangu): replace this with discord.js v13's core AsyncQueue.

/**
 * An async queue that preserves the stack and prevents lock-ups.
 * @private
 */
class AsyncQueue {
  constructor() {
    /**
     * The promises array.
     * @type {Array<{promise: Promise<void>, resolve: Function}>}
     * @private
     */
    this.promises = [];
  }

  /**
   * The remaining amount of queued promises
   * @type {number}
   */
  get remaining() {
    return this.promises.length;
  }

  /**
   * Waits for last promise and queues a new one.
   * @returns {Promise<void>}
   * @example
   * const queue = new AsyncQueue();
   * async function request(url, options) {
   *     await queue.wait();
   *     try {
   *         const result = await fetch(url, options);
   *         // Do some operations with 'result'
   *     } finally {
   *         // Remove first entry from the queue and resolve for the next entry
   *         queue.shift();
   *     }
   * }
   *
   * request(someUrl1, someOptions1); // Will call fetch() immediately
   * request(someUrl2, someOptions2); // Will call fetch() after the first finished
   * request(someUrl3, someOptions3); // Will call fetch() after the second finished
   */
  wait() {
    const next = this.promises.length ? this.promises[this.promises.length - 1].promise : Promise.resolve();
    let resolve;
    const promise = new Promise(res => {
      resolve = res;
    });

    this.promises.push({
      resolve,
      promise,
    });

    return next;
  }

  /**
   * Frees the queue's lock for the next item to process.
   */
  shift() {
    const deferred = this.promises.shift();
    if (typeof deferred !== 'undefined') deferred.resolve();
  }
}

module.exports = AsyncQueue;


/***/ }),

/***/ "./node_modules/discord.js/src/rest/DiscordAPIError.js":
/*!*************************************************************!*\
  !*** ./node_modules/discord.js/src/rest/DiscordAPIError.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


/**
 * Represents an error from the Discord API.
 * @extends Error
 */
class DiscordAPIError extends Error {
  constructor(path, error, method, status) {
    super();
    const flattened = this.constructor.flattenErrors(error.errors || error).join('\n');
    this.name = 'DiscordAPIError';
    this.message = error.message && flattened ? `${error.message}\n${flattened}` : error.message || flattened;

    /**
     * The HTTP method used for the request
     * @type {string}
     */
    this.method = method;

    /**
     * The path of the request relative to the HTTP endpoint
     * @type {string}
     */
    this.path = path;

    /**
     * HTTP error code returned by Discord
     * @type {number}
     */
    this.code = error.code;

    /**
     * The HTTP status code
     * @type {number}
     */
    this.httpStatus = status;
  }

  /**
   * Flattens an errors object returned from the API into an array.
   * @param {Object} obj Discord errors object
   * @param {string} [key] Used internally to determine key names of nested fields
   * @returns {string[]}
   * @private
   */
  static flattenErrors(obj, key = '') {
    let messages = [];

    for (const [k, v] of Object.entries(obj)) {
      if (k === 'message') continue;
      const newKey = key ? (isNaN(k) ? `${key}.${k}` : `${key}[${k}]`) : k;

      if (v._errors) {
        messages.push(`${newKey}: ${v._errors.map(e => e.message).join(' ')}`);
      } else if (v.code || v.message) {
        messages.push(`${v.code ? `${v.code}: ` : ''}${v.message}`.trim());
      } else if (typeof v === 'string') {
        messages.push(v);
      } else {
        messages = messages.concat(this.flattenErrors(v, newKey));
      }
    }

    return messages;
  }
}

module.exports = DiscordAPIError;


/***/ }),

/***/ "./node_modules/discord.js/src/rest/HTTPError.js":
/*!*******************************************************!*\
  !*** ./node_modules/discord.js/src/rest/HTTPError.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


/**
 * Represents a HTTP error from a request.
 * @extends Error
 */
class HTTPError extends Error {
  constructor(message, name, code, method, path) {
    super(message);

    /**
     * The name of the error
     * @type {string}
     */
    this.name = name;

    /**
     * HTTP error code returned from the request
     * @type {number}
     */
    this.code = code || 500;

    /**
     * The HTTP method used for the request
     * @type {string}
     */
    this.method = method;

    /**
     * The path of the request relative to the HTTP endpoint
     * @type {string}
     */
    this.path = path;
  }
}

module.exports = HTTPError;


/***/ }),

/***/ "./node_modules/discord.js/src/rest/RESTManager.js":
/*!*********************************************************!*\
  !*** ./node_modules/discord.js/src/rest/RESTManager.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const APIRequest = __webpack_require__(/*! ./APIRequest */ "./node_modules/discord.js/src/rest/APIRequest.js");
const routeBuilder = __webpack_require__(/*! ./APIRouter */ "./node_modules/discord.js/src/rest/APIRouter.js");
const RequestHandler = __webpack_require__(/*! ./RequestHandler */ "./node_modules/discord.js/src/rest/RequestHandler.js");
const { Error } = __webpack_require__(/*! ../errors */ "./node_modules/discord.js/src/errors/index.js");
const Collection = __webpack_require__(/*! ../util/Collection */ "./node_modules/discord.js/src/util/Collection.js");
const { Endpoints } = __webpack_require__(/*! ../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

class RESTManager {
  constructor(client, tokenPrefix = 'Bot') {
    this.client = client;
    this.handlers = new Collection();
    this.tokenPrefix = tokenPrefix;
    this.versioned = true;
    this.globalTimeout = null;
    if (client.options.restSweepInterval > 0) {
      client.setInterval(() => {
        this.handlers.sweep(handler => handler._inactive);
      }, client.options.restSweepInterval * 1000);
    }
  }

  get api() {
    return routeBuilder(this);
  }

  getAuth() {
    const token = this.client.token || this.client.accessToken;
    if (token) return `${this.tokenPrefix} ${token}`;
    throw new Error('TOKEN_MISSING');
  }

  get cdn() {
    return Endpoints.CDN(this.client.options.http.cdn);
  }

  request(method, url, options = {}) {
    const apiRequest = new APIRequest(this, method, url, options);
    let handler = this.handlers.get(apiRequest.route);

    if (!handler) {
      handler = new RequestHandler(this);
      this.handlers.set(apiRequest.route, handler);
    }

    return handler.push(apiRequest);
  }

  get endpoint() {
    return this.client.options.http.api;
  }

  set endpoint(endpoint) {
    this.client.options.http.api = endpoint;
  }
}

module.exports = RESTManager;


/***/ }),

/***/ "./node_modules/discord.js/src/rest/RequestHandler.js":
/*!************************************************************!*\
  !*** ./node_modules/discord.js/src/rest/RequestHandler.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const AsyncQueue = __webpack_require__(/*! ./AsyncQueue */ "./node_modules/discord.js/src/rest/AsyncQueue.js");
const DiscordAPIError = __webpack_require__(/*! ./DiscordAPIError */ "./node_modules/discord.js/src/rest/DiscordAPIError.js");
const HTTPError = __webpack_require__(/*! ./HTTPError */ "./node_modules/discord.js/src/rest/HTTPError.js");
const {
  Events: { RATE_LIMIT },
  browser,
} = __webpack_require__(/*! ../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");
const Util = __webpack_require__(/*! ../util/Util */ "./node_modules/discord.js/src/util/Util.js");

function parseResponse(res) {
  if (res.headers.get('content-type').startsWith('application/json')) return res.json();
  if (browser) return res.blob();
  return res.buffer();
}

function getAPIOffset(serverDate) {
  return new Date(serverDate).getTime() - Date.now();
}

function calculateReset(reset, serverDate) {
  return new Date(Number(reset) * 1000).getTime() - getAPIOffset(serverDate);
}

class RequestHandler {
  constructor(manager) {
    this.manager = manager;
    this.queue = new AsyncQueue();
    this.reset = -1;
    this.remaining = -1;
    this.limit = -1;
    this.retryAfter = -1;
  }

  async push(request) {
    await this.queue.wait();
    try {
      return await this.execute(request);
    } finally {
      this.queue.shift();
    }
  }

  get limited() {
    return Boolean(this.manager.globalTimeout) || (this.remaining <= 0 && Date.now() < this.reset);
  }

  get _inactive() {
    return this.queue.remaining === 0 && !this.limited;
  }

  async execute(request) {
    // After calculations and requests have been done, pre-emptively stop further requests
    if (this.limited) {
      const timeout = this.reset + this.manager.client.options.restTimeOffset - Date.now();

      if (this.manager.client.listenerCount(RATE_LIMIT)) {
        /**
         * Emitted when the client hits a rate limit while making a request
         * @event Client#rateLimit
         * @param {Object} rateLimitInfo Object containing the rate limit info
         * @param {number} rateLimitInfo.timeout Timeout in ms
         * @param {number} rateLimitInfo.limit Number of requests that can be made to this endpoint
         * @param {string} rateLimitInfo.method HTTP method used for request that triggered this event
         * @param {string} rateLimitInfo.path Path used for request that triggered this event
         * @param {string} rateLimitInfo.route Route used for request that triggered this event
         */
        this.manager.client.emit(RATE_LIMIT, {
          timeout,
          limit: this.limit,
          method: request.method,
          path: request.path,
          route: request.route,
        });
      }

      if (this.manager.globalTimeout) {
        await this.manager.globalTimeout;
      } else {
        // Wait for the timeout to expire in order to avoid an actual 429
        await Util.delayFor(timeout);
      }
    }

    // Perform the request
    let res;
    try {
      res = await request.make();
    } catch (error) {
      // Retry the specified number of times for request abortions
      if (request.retries === this.manager.client.options.retryLimit) {
        throw new HTTPError(error.message, error.constructor.name, error.status, request.method, request.path);
      }

      request.retries++;
      return this.execute(request);
    }

    if (res && res.headers) {
      const serverDate = res.headers.get('date');
      const limit = res.headers.get('x-ratelimit-limit');
      const remaining = res.headers.get('x-ratelimit-remaining');
      const reset = res.headers.get('x-ratelimit-reset');
      const retryAfter = res.headers.get('retry-after');

      this.limit = limit ? Number(limit) : Infinity;
      this.remaining = remaining ? Number(remaining) : 1;
      this.reset = reset ? calculateReset(reset, serverDate) : Date.now();
      this.retryAfter = retryAfter ? Number(retryAfter) : -1;

      // https://github.com/discordapp/discord-api-docs/issues/182
      if (request.route.includes('reactions')) {
        this.reset = new Date(serverDate).getTime() - getAPIOffset(serverDate) + 250;
      }

      // Handle global ratelimit
      if (res.headers.get('x-ratelimit-global')) {
        // Set the manager's global timeout as the promise for other requests to "wait"
        this.manager.globalTimeout = Util.delayFor(this.retryAfter);

        // Wait for the global timeout to resolve before continuing
        await this.manager.globalTimeout;

        // Clean up global timeout
        this.manager.globalTimeout = null;
      }
    }

    // Handle 2xx and 3xx responses
    if (res.ok) {
      // Nothing wrong with the request, proceed with the next one
      return parseResponse(res);
    }

    // Handle 4xx responses
    if (res.status >= 400 && res.status < 500) {
      // Handle ratelimited requests
      if (res.status === 429) {
        // A ratelimit was hit - this should never happen
        this.manager.client.emit('debug', `429 hit on route ${request.route}`);
        await Util.delayFor(this.retryAfter);
        return this.execute(request);
      }

      // Handle possible malformed requests
      let data;
      try {
        data = await parseResponse(res);
      } catch (err) {
        throw new HTTPError(err.message, err.constructor.name, err.status, request.method, request.path);
      }

      throw new DiscordAPIError(request.path, data, request.method, res.status);
    }

    // Handle 5xx responses
    if (res.status >= 500 && res.status < 600) {
      // Retry the specified number of times for possible serverside issues
      if (request.retries === this.manager.client.options.retryLimit) {
        throw new HTTPError(res.statusText, res.constructor.name, res.status, request.method, request.path);
      }

      request.retries++;
      return this.execute(request);
    }

    // Fallback in the rare case a status code outside the range 200..=599 is returned
    return null;
  }
}

module.exports = RequestHandler;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/APIMessage.js":
/*!**************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/APIMessage.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const MessageAttachment = __webpack_require__(/*! ./MessageAttachment */ "./node_modules/discord.js/src/structures/MessageAttachment.js");
const MessageEmbed = __webpack_require__(/*! ./MessageEmbed */ "./node_modules/discord.js/src/structures/MessageEmbed.js");
const { RangeError } = __webpack_require__(/*! ../errors */ "./node_modules/discord.js/src/errors/index.js");
const { browser } = __webpack_require__(/*! ../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");
const DataResolver = __webpack_require__(/*! ../util/DataResolver */ "./node_modules/discord.js/src/util/DataResolver.js");
const MessageFlags = __webpack_require__(/*! ../util/MessageFlags */ "./node_modules/discord.js/src/util/MessageFlags.js");
const Util = __webpack_require__(/*! ../util/Util */ "./node_modules/discord.js/src/util/Util.js");

/**
 * Represents a message to be sent to the API.
 */
class APIMessage {
  /**
   * @param {MessageTarget} target - The target for this message to be sent to
   * @param {MessageOptions|WebhookMessageOptions} options - Options passed in from send
   */
  constructor(target, options) {
    /**
     * The target for this message to be sent to
     * @type {MessageTarget}
     */
    this.target = target;

    /**
     * Options passed in from send
     * @type {MessageOptions|WebhookMessageOptions}
     */
    this.options = options;

    /**
     * Data sendable to the API
     * @type {?Object}
     */
    this.data = null;

    /**
     * Files sendable to the API
     * @type {?Object[]}
     */
    this.files = null;
  }

  /**
   * Whether or not the target is a webhook
   * @type {boolean}
   * @readonly
   */
  get isWebhook() {
    const Webhook = __webpack_require__(/*! ./Webhook */ "./node_modules/discord.js/src/structures/Webhook.js");
    const WebhookClient = __webpack_require__(/*! ../client/WebhookClient */ "./node_modules/discord.js/src/client/WebhookClient.js");
    return this.target instanceof Webhook || this.target instanceof WebhookClient;
  }

  /**
   * Whether or not the target is a user
   * @type {boolean}
   * @readonly
   */
  get isUser() {
    const User = __webpack_require__(/*! ./User */ "./node_modules/discord.js/src/structures/User.js");
    const GuildMember = __webpack_require__(/*! ./GuildMember */ "./node_modules/discord.js/src/structures/GuildMember.js");
    return this.target instanceof User || this.target instanceof GuildMember;
  }

  /**
   * Whether or not the target is a message
   * @type {boolean}
   * @readonly
   */
  get isMessage() {
    const Message = __webpack_require__(/*! ./Message */ "./node_modules/discord.js/src/structures/Message.js");
    return this.target instanceof Message;
  }

  /**
   * Makes the content of this message.
   * @returns {?(string|string[])}
   */
  makeContent() {
    const GuildMember = __webpack_require__(/*! ./GuildMember */ "./node_modules/discord.js/src/structures/GuildMember.js");

    let content;
    if (this.options.content === null) {
      content = '';
    } else if (typeof this.options.content !== 'undefined') {
      content = Util.resolveString(this.options.content);
    }

    if (typeof content !== 'string') return content;

    const disableMentions =
      typeof this.options.disableMentions === 'undefined'
        ? this.target.client.options.disableMentions
        : this.options.disableMentions;
    if (disableMentions === 'all') {
      content = Util.removeMentions(content);
    } else if (disableMentions === 'everyone') {
      content = content.replace(/@([^<>@ ]*)/gmsu, (match, target) => {
        if (target.match(/^[&!]?\d+$/)) {
          return `@${target}`;
        } else {
          return `@\u200b${target}`;
        }
      });
    }

    const isSplit = typeof this.options.split !== 'undefined' && this.options.split !== false;
    const isCode = typeof this.options.code !== 'undefined' && this.options.code !== false;
    const splitOptions = isSplit ? { ...this.options.split } : undefined;

    let mentionPart = '';
    if (this.options.reply && !this.isUser && this.target.type !== 'dm') {
      const id = this.target.client.users.resolveID(this.options.reply);
      mentionPart = `<@${this.options.reply instanceof GuildMember && this.options.reply.nickname ? '!' : ''}${id}>, `;
      if (isSplit) {
        splitOptions.prepend = `${mentionPart}${splitOptions.prepend || ''}`;
      }
    }

    if (content || mentionPart) {
      if (isCode) {
        const codeName = typeof this.options.code === 'string' ? this.options.code : '';
        content = `${mentionPart}\`\`\`${codeName}\n${Util.cleanCodeBlockContent(content)}\n\`\`\``;
        if (isSplit) {
          splitOptions.prepend = `${splitOptions.prepend || ''}\`\`\`${codeName}\n`;
          splitOptions.append = `\n\`\`\`${splitOptions.append || ''}`;
        }
      } else if (mentionPart) {
        content = `${mentionPart}${content}`;
      }

      if (isSplit) {
        content = Util.splitMessage(content, splitOptions);
      }
    }

    return content;
  }

  /**
   * Resolves data.
   * @returns {APIMessage}
   */
  resolveData() {
    if (this.data) return this;

    const content = this.makeContent();
    const tts = Boolean(this.options.tts);

    let nonce;
    if (typeof this.options.nonce !== 'undefined') {
      nonce = parseInt(this.options.nonce);
      if (isNaN(nonce) || nonce < 0) throw new RangeError('MESSAGE_NONCE_TYPE');
    }

    const embedLikes = [];
    if (this.isWebhook) {
      if (this.options.embeds) {
        embedLikes.push(...this.options.embeds);
      }
    } else if (this.options.embed) {
      embedLikes.push(this.options.embed);
    }
    const embeds = embedLikes.map(e => new MessageEmbed(e).toJSON());

    let username;
    let avatarURL;
    if (this.isWebhook) {
      username = this.options.username || this.target.name;
      if (this.options.avatarURL) avatarURL = this.options.avatarURL;
    }

    let flags;
    if (this.isMessage) {
      // eslint-disable-next-line eqeqeq
      flags = this.options.flags != null ? new MessageFlags(this.options.flags).bitfield : this.target.flags.bitfield;
    }

    let allowedMentions =
      typeof this.options.allowedMentions === 'undefined'
        ? this.target.client.options.allowedMentions
        : this.options.allowedMentions;
    if (this.options.reply) {
      const id = this.target.client.users.resolveID(this.options.reply);
      if (allowedMentions) {
        // Clone the object as not to alter the ClientOptions object
        allowedMentions = Util.cloneObject(allowedMentions);
        const parsed = allowedMentions.parse && allowedMentions.parse.includes('users');
        // Check if the mention won't be parsed, and isn't supplied in `users`
        if (!parsed && !(allowedMentions.users && allowedMentions.users.includes(id))) {
          if (!allowedMentions.users) allowedMentions.users = [];
          allowedMentions.users.push(id);
        }
      } else {
        allowedMentions = { users: [id] };
      }
    }

    this.data = {
      content,
      tts,
      nonce,
      embed: this.options.embed === null ? null : embeds[0],
      embeds,
      username,
      avatar_url: avatarURL,
      allowed_mentions: typeof content === 'undefined' ? undefined : allowedMentions,
      flags,
    };
    return this;
  }

  /**
   * Resolves files.
   * @returns {Promise<APIMessage>}
   */
  async resolveFiles() {
    if (this.files) return this;

    const embedLikes = [];
    if (this.isWebhook) {
      if (this.options.embeds) {
        embedLikes.push(...this.options.embeds);
      }
    } else if (this.options.embed) {
      embedLikes.push(this.options.embed);
    }

    const fileLikes = [];
    if (this.options.files) {
      fileLikes.push(...this.options.files);
    }
    for (const embed of embedLikes) {
      if (embed.files) {
        fileLikes.push(...embed.files);
      }
    }

    this.files = await Promise.all(fileLikes.map(f => this.constructor.resolveFile(f)));
    return this;
  }

  /**
   * Converts this APIMessage into an array of APIMessages for each split content
   * @returns {APIMessage[]}
   */
  split() {
    if (!this.data) this.resolveData();

    if (!Array.isArray(this.data.content)) return [this];

    const apiMessages = [];

    for (let i = 0; i < this.data.content.length; i++) {
      let data;
      let opt;

      if (i === this.data.content.length - 1) {
        data = { ...this.data, content: this.data.content[i] };
        opt = { ...this.options, content: this.data.content[i] };
      } else {
        data = { content: this.data.content[i], tts: this.data.tts, allowed_mentions: this.options.allowedMentions };
        opt = { content: this.data.content[i], tts: this.data.tts, allowedMentions: this.options.allowedMentions };
      }

      const apiMessage = new APIMessage(this.target, opt);
      apiMessage.data = data;
      apiMessages.push(apiMessage);
    }

    return apiMessages;
  }

  /**
   * Resolves a single file into an object sendable to the API.
   * @param {BufferResolvable|Stream|FileOptions|MessageAttachment} fileLike Something that could be resolved to a file
   * @returns {Object}
   */
  static async resolveFile(fileLike) {
    let attachment;
    let name;

    const findName = thing => {
      if (typeof thing === 'string') {
        return Util.basename(thing);
      }

      if (thing.path) {
        return Util.basename(thing.path);
      }

      return 'file.jpg';
    };

    const ownAttachment =
      typeof fileLike === 'string' ||
      fileLike instanceof (browser ? ArrayBuffer : Buffer) ||
      typeof fileLike.pipe === 'function';
    if (ownAttachment) {
      attachment = fileLike;
      name = findName(attachment);
    } else {
      attachment = fileLike.attachment;
      name = fileLike.name || findName(attachment);
    }

    const resource = await DataResolver.resolveFile(attachment);
    return { attachment, name, file: resource };
  }

  /**
   * Partitions embeds and attachments.
   * @param {Array<MessageEmbed|MessageAttachment>} items Items to partition
   * @returns {Array<MessageEmbed[], MessageAttachment[]>}
   */
  static partitionMessageAdditions(items) {
    const embeds = [];
    const files = [];
    for (const item of items) {
      if (item instanceof MessageEmbed) {
        embeds.push(item);
      } else if (item instanceof MessageAttachment) {
        files.push(item);
      }
    }

    return [embeds, files];
  }

  /**
   * Transforms the user-level arguments into a final options object. Passing a transformed options object alone into
   * this method will keep it the same, allowing for the reuse of the final options object.
   * @param {StringResolvable} [content] Content to send
   * @param {MessageOptions|WebhookMessageOptions|MessageAdditions} [options={}] Options to use
   * @param {MessageOptions|WebhookMessageOptions} [extra={}] Extra options to add onto transformed options
   * @param {boolean} [isWebhook=false] Whether or not to use WebhookMessageOptions as the result
   * @returns {MessageOptions|WebhookMessageOptions}
   */
  static transformOptions(content, options, extra = {}, isWebhook = false) {
    if (!options && typeof content === 'object' && !Array.isArray(content)) {
      options = content;
      content = undefined;
    }

    if (!options) {
      options = {};
    } else if (options instanceof MessageEmbed) {
      return isWebhook ? { content, embeds: [options], ...extra } : { content, embed: options, ...extra };
    } else if (options instanceof MessageAttachment) {
      return { content, files: [options], ...extra };
    }

    if (Array.isArray(options)) {
      const [embeds, files] = this.partitionMessageAdditions(options);
      return isWebhook ? { content, embeds, files, ...extra } : { content, embed: embeds[0], files, ...extra };
    } else if (Array.isArray(content)) {
      const [embeds, files] = this.partitionMessageAdditions(content);
      if (embeds.length || files.length) {
        return isWebhook ? { embeds, files, ...extra } : { embed: embeds[0], files, ...extra };
      }
    }

    return { content, ...options, ...extra };
  }

  /**
   * Creates an `APIMessage` from user-level arguments.
   * @param {MessageTarget} target Target to send to
   * @param {StringResolvable} [content] Content to send
   * @param {MessageOptions|WebhookMessageOptions|MessageAdditions} [options={}] Options to use
   * @param {MessageOptions|WebhookMessageOptions} [extra={}] - Extra options to add onto transformed options
   * @returns {MessageOptions|WebhookMessageOptions}
   */
  static create(target, content, options, extra = {}) {
    const Webhook = __webpack_require__(/*! ./Webhook */ "./node_modules/discord.js/src/structures/Webhook.js");
    const WebhookClient = __webpack_require__(/*! ../client/WebhookClient */ "./node_modules/discord.js/src/client/WebhookClient.js");

    const isWebhook = target instanceof Webhook || target instanceof WebhookClient;
    const transformed = this.transformOptions(content, options, extra, isWebhook);
    return new this(target, transformed);
  }
}

module.exports = APIMessage;

/**
 * A target for a message.
 * @typedef {TextChannel|DMChannel|User|GuildMember|Webhook|WebhookClient} MessageTarget
 */

/**
 * Additional items that can be sent with a message.
 * @typedef {MessageEmbed|MessageAttachment|Array<MessageEmbed|MessageAttachment>} MessageAdditions
 */


/***/ }),

/***/ "./node_modules/discord.js/src/structures/Base.js":
/*!********************************************************!*\
  !*** ./node_modules/discord.js/src/structures/Base.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Util = __webpack_require__(/*! ../util/Util */ "./node_modules/discord.js/src/util/Util.js");

/**
 * Represents a data model that is identifiable by a Snowflake (i.e. Discord API data models).
 * @abstract
 */
class Base {
  constructor(client) {
    /**
     * The client that instantiated this
     * @name Base#client
     * @type {Client}
     * @readonly
     */
    Object.defineProperty(this, 'client', { value: client });
  }

  _clone() {
    return Object.assign(Object.create(this), this);
  }

  _patch(data) {
    return data;
  }

  _update(data) {
    const clone = this._clone();
    this._patch(data);
    return clone;
  }

  toJSON(...props) {
    return Util.flatten(this, ...props);
  }

  valueOf() {
    return this.id;
  }
}

module.exports = Base;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/BaseGuildEmoji.js":
/*!******************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/BaseGuildEmoji.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Emoji = __webpack_require__(/*! ./Emoji */ "./node_modules/discord.js/src/structures/Emoji.js");

/**
 * Parent class for {@link GuildEmoji} and {@link GuildPreviewEmoji}.
 * @extends {Emoji}
 * @abstract
 */
class BaseGuildEmoji extends Emoji {
  constructor(client, data, guild) {
    super(client, data);

    /**
     * The guild this emoji is a part of
     * @type {Guild|GuildPreview}
     */
    this.guild = guild;

    this.requireColons = null;
    this.managed = null;
    this.available = null;

    /**
     * Array of role ids this emoji is active for
     * @name BaseGuildEmoji#_roles
     * @type {Snowflake[]}
     * @private
     */
    Object.defineProperty(this, '_roles', { value: [], writable: true });

    this._patch(data);
  }

  _patch(data) {
    if (data.name) this.name = data.name;

    if (typeof data.require_colons !== 'undefined') {
      /**
       * Whether or not this emoji requires colons surrounding it
       * @type {?boolean}
       */
      this.requiresColons = data.require_colons;
    }

    if (typeof data.managed !== 'undefined') {
      /**
       * Whether this emoji is managed by an external service
       * @type {?boolean}
       */
      this.managed = data.managed;
    }

    if (typeof data.available !== 'undefined') {
      /**
       * Whether this emoji is available
       * @type {?boolean}
       */
      this.available = data.available;
    }

    if (data.roles) this._roles = data.roles;
  }
}

module.exports = BaseGuildEmoji;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/CategoryChannel.js":
/*!*******************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/CategoryChannel.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const GuildChannel = __webpack_require__(/*! ./GuildChannel */ "./node_modules/discord.js/src/structures/GuildChannel.js");

/**
 * Represents a guild category channel on Discord.
 * @extends {GuildChannel}
 */
class CategoryChannel extends GuildChannel {
  /**
   * Channels that are a part of this category
   * @type {Collection<Snowflake, GuildChannel>}
   * @readonly
   */
  get children() {
    return this.guild.channels.cache.filter(c => c.parentID === this.id);
  }

  /**
   * Sets the category parent of this channel.
   * <warn>It is not currently possible to set the parent of a CategoryChannel.</warn>
   * @method setParent
   * @memberof CategoryChannel
   * @instance
   * @param {?GuildChannel|Snowflake} channel Parent channel
   * @param {Object} [options={}] Options to pass
   * @param {boolean} [options.lockPermissions=true] Lock the permissions to what the parent's permissions are
   * @param {string} [options.reason] Reason for modifying the parent of this channel
   * @returns {Promise<GuildChannel>}
   */
}

module.exports = CategoryChannel;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/Channel.js":
/*!***********************************************************!*\
  !*** ./node_modules/discord.js/src/structures/Channel.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Base = __webpack_require__(/*! ./Base */ "./node_modules/discord.js/src/structures/Base.js");
const { ChannelTypes } = __webpack_require__(/*! ../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");
const Snowflake = __webpack_require__(/*! ../util/Snowflake */ "./node_modules/discord.js/src/util/Snowflake.js");

/**
 * Represents any channel on Discord.
 * @extends {Base}
 * @abstract
 */
class Channel extends Base {
  constructor(client, data) {
    super(client);

    const type = Object.keys(ChannelTypes)[data.type];
    /**
     * The type of the channel, either:
     * * `dm` - a DM channel
     * * `text` - a guild text channel
     * * `voice` - a guild voice channel
     * * `category` - a guild category channel
     * * `news` - a guild news channel
     * * `store` - a guild store channel
     * * `unknown` - a generic channel of unknown type, could be Channel or GuildChannel
     * @type {string}
     */
    this.type = type ? type.toLowerCase() : 'unknown';

    /**
     * Whether the channel has been deleted
     * @type {boolean}
     */
    this.deleted = false;

    if (data) this._patch(data);
  }

  _patch(data) {
    /**
     * The unique ID of the channel
     * @type {Snowflake}
     */
    this.id = data.id;
  }

  /**
   * The timestamp the channel was created at
   * @type {number}
   * @readonly
   */
  get createdTimestamp() {
    return Snowflake.deconstruct(this.id).timestamp;
  }

  /**
   * The time the channel was created at
   * @type {Date}
   * @readonly
   */
  get createdAt() {
    return new Date(this.createdTimestamp);
  }

  /**
   * When concatenated with a string, this automatically returns the channel's mention instead of the Channel object.
   * @returns {string}
   * @example
   * // Logs: Hello from <#123456789012345678>!
   * console.log(`Hello from ${channel}!`);
   */
  toString() {
    return `<#${this.id}>`;
  }

  /**
   * Deletes this channel.
   * @returns {Promise<Channel>}
   * @example
   * // Delete the channel
   * channel.delete()
   *   .then(console.log)
   *   .catch(console.error);
   */
  delete() {
    return this.client.api
      .channels(this.id)
      .delete()
      .then(() => this);
  }

  /**
   * Fetches this channel.
   * @param {boolean} [force=false] Whether to skip the cache check and request the API
   * @returns {Promise<Channel>}
   */
  fetch(force = false) {
    return this.client.channels.fetch(this.id, true, force);
  }

  /**
   * Indicates whether this channel is text-based.
   * @returns {boolean}
   */
  isText() {
    return 'messages' in this;
  }

  static create(client, data, guild) {
    const Structures = __webpack_require__(/*! ../util/Structures */ "./node_modules/discord.js/src/util/Structures.js");
    let channel;
    if (!data.guild_id && !guild) {
      if ((data.recipients && data.type !== ChannelTypes.GROUP) || data.type === ChannelTypes.DM) {
        const DMChannel = Structures.get('DMChannel');
        channel = new DMChannel(client, data);
      } else if (data.type === ChannelTypes.GROUP) {
        const PartialGroupDMChannel = __webpack_require__(/*! ./PartialGroupDMChannel */ "./node_modules/discord.js/src/structures/PartialGroupDMChannel.js");
        channel = new PartialGroupDMChannel(client, data);
      }
    } else {
      guild = guild || client.guilds.cache.get(data.guild_id);
      if (guild) {
        switch (data.type) {
          case ChannelTypes.TEXT: {
            const TextChannel = Structures.get('TextChannel');
            channel = new TextChannel(guild, data);
            break;
          }
          case ChannelTypes.VOICE: {
            const VoiceChannel = Structures.get('VoiceChannel');
            channel = new VoiceChannel(guild, data);
            break;
          }
          case ChannelTypes.CATEGORY: {
            const CategoryChannel = Structures.get('CategoryChannel');
            channel = new CategoryChannel(guild, data);
            break;
          }
          case ChannelTypes.NEWS: {
            const NewsChannel = Structures.get('NewsChannel');
            channel = new NewsChannel(guild, data);
            break;
          }
          case ChannelTypes.STORE: {
            const StoreChannel = Structures.get('StoreChannel');
            channel = new StoreChannel(guild, data);
            break;
          }
        }
        if (channel) guild.channels.cache.set(channel.id, channel);
      }
    }
    return channel;
  }

  toJSON(...props) {
    return super.toJSON({ createdTimestamp: true }, ...props);
  }
}

module.exports = Channel;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/ClientApplication.js":
/*!*********************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/ClientApplication.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Team = __webpack_require__(/*! ./Team */ "./node_modules/discord.js/src/structures/Team.js");
const Application = __webpack_require__(/*! ./interfaces/Application */ "./node_modules/discord.js/src/structures/interfaces/Application.js");

/**
 * Represents a Client OAuth2 Application.
 * @extends {Application}
 */
class ClientApplication extends Application {
  _patch(data) {
    super._patch(data);

    /**
     * The app's cover image
     * @type {?string}
     */
    this.cover = data.cover_image || null;

    /**
     * The app's RPC origins, if enabled
     * @type {string[]}
     */
    this.rpcOrigins = data.rpc_origins || [];

    /**
     * If this app's bot requires a code grant when using the OAuth2 flow
     * @type {?boolean}
     */
    this.botRequireCodeGrant = typeof data.bot_require_code_grant !== 'undefined' ? data.bot_require_code_grant : null;

    /**
     * If this app's bot is public
     * @type {?boolean}
     */
    this.botPublic = typeof data.bot_public !== 'undefined' ? data.bot_public : null;

    /**
     * The owner of this OAuth application
     * @type {?User|Team}
     */
    this.owner = data.team ? new Team(this.client, data.team) : data.owner ? this.client.users.add(data.owner) : null;
  }
}

module.exports = ClientApplication;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/ClientPresence.js":
/*!******************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/ClientPresence.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { Presence } = __webpack_require__(/*! ./Presence */ "./node_modules/discord.js/src/structures/Presence.js");
const { TypeError } = __webpack_require__(/*! ../errors */ "./node_modules/discord.js/src/errors/index.js");
const Collection = __webpack_require__(/*! ../util/Collection */ "./node_modules/discord.js/src/util/Collection.js");
const { ActivityTypes, OPCodes } = __webpack_require__(/*! ../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

class ClientPresence extends Presence {
  /**
   * @param {Client} client The instantiating client
   * @param {Object} [data={}] The data for the client presence
   */
  constructor(client, data = {}) {
    super(client, Object.assign(data, { status: 'online', user: { id: null } }));
  }

  async set(presence) {
    const packet = await this._parse(presence);
    this.patch(packet);
    if (typeof presence.shardID === 'undefined') {
      this.client.ws.broadcast({ op: OPCodes.STATUS_UPDATE, d: packet });
    } else if (Array.isArray(presence.shardID)) {
      for (const shardID of presence.shardID) {
        this.client.ws.shards.get(shardID).send({ op: OPCodes.STATUS_UPDATE, d: packet });
      }
    } else {
      this.client.ws.shards.get(presence.shardID).send({ op: OPCodes.STATUS_UPDATE, d: packet });
    }
    return this;
  }

  async _parse({ status, since, afk, activity }) {
    const applicationID = activity && (activity.application ? activity.application.id || activity.application : null);
    let assets = new Collection();
    if (activity) {
      if (typeof activity.name !== 'string') throw new TypeError('INVALID_TYPE', 'name', 'string');
      if (!activity.type) activity.type = 0;
      if (activity.assets && applicationID) {
        try {
          const a = await this.client.api.oauth2.applications(applicationID).assets.get();
          for (const asset of a) assets.set(asset.name, asset.id);
        } catch {} // eslint-disable-line no-empty
      }
    }

    const packet = {
      afk: afk != null ? afk : false, // eslint-disable-line eqeqeq
      since: since != null ? since : null, // eslint-disable-line eqeqeq
      status: status || this.status,
      game: activity
        ? {
            type: activity.type,
            name: activity.name,
            url: activity.url,
            details: activity.details || undefined,
            state: activity.state || undefined,
            assets: activity.assets
              ? {
                  large_text: activity.assets.largeText || undefined,
                  small_text: activity.assets.smallText || undefined,
                  large_image: assets.get(activity.assets.largeImage) || activity.assets.largeImage,
                  small_image: assets.get(activity.assets.smallImage) || activity.assets.smallImage,
                }
              : undefined,
            timestamps: activity.timestamps || undefined,
            party: activity.party || undefined,
            application_id: applicationID || undefined,
            secrets: activity.secrets || undefined,
            instance: activity.instance || undefined,
          }
        : null,
    };

    if ((status || afk || since) && !activity) {
      packet.game = this.activities[0] || null;
    }

    if (packet.game) {
      packet.game.type =
        typeof packet.game.type === 'number' ? packet.game.type : ActivityTypes.indexOf(packet.game.type);
    }

    return packet;
  }
}

module.exports = ClientPresence;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/ClientUser.js":
/*!**************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/ClientUser.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const DataResolver = __webpack_require__(/*! ../util/DataResolver */ "./node_modules/discord.js/src/util/DataResolver.js");
const Structures = __webpack_require__(/*! ../util/Structures */ "./node_modules/discord.js/src/util/Structures.js");

/**
 * Represents the logged in client's Discord user.
 * @extends {User}
 */
class ClientUser extends Structures.get('User') {
  constructor(client, data) {
    super(client, data);
    this._typing = new Map();
  }

  _patch(data) {
    super._patch(data);

    if ('verified' in data) {
      /**
       * Whether or not this account has been verified
       * @type {boolean}
       */
      this.verified = data.verified;
    }

    if ('mfa_enabled' in data) {
      /**
       * If the bot's {@link ClientApplication#owner Owner} has MFA enabled on their account
       * @type {?boolean}
       */
      this.mfaEnabled = typeof data.mfa_enabled === 'boolean' ? data.mfa_enabled : null;
    } else if (typeof this.mfaEnabled === 'undefined') {
      this.mfaEnabled = null;
    }

    if (data.token) this.client.token = data.token;
  }

  /**
   * ClientUser's presence
   * @type {Presence}
   * @readonly
   */
  get presence() {
    return this.client.presence;
  }

  edit(data) {
    return this.client.api
      .users('@me')
      .patch({ data })
      .then(newData => {
        this.client.token = newData.token;
        const { updated } = this.client.actions.UserUpdate.handle(newData);
        if (updated) return updated;
        return this;
      });
  }

  /**
   * Sets the username of the logged in client.
   * <info>Changing usernames in Discord is heavily rate limited, with only 2 requests
   * every hour. Use this sparingly!</info>
   * @param {string} username The new username
   * @returns {Promise<ClientUser>}
   * @example
   * // Set username
   * client.user.setUsername('discordjs')
   *   .then(user => console.log(`My new username is ${user.username}`))
   *   .catch(console.error);
   */
  setUsername(username) {
    return this.edit({ username });
  }

  /**
   * Sets the avatar of the logged in client.
   * @param {BufferResolvable|Base64Resolvable} avatar The new avatar
   * @returns {Promise<ClientUser>}
   * @example
   * // Set avatar
   * client.user.setAvatar('./avatar.png')
   *   .then(user => console.log(`New avatar set!`))
   *   .catch(console.error);
   */
  async setAvatar(avatar) {
    return this.edit({ avatar: await DataResolver.resolveImage(avatar) });
  }

  /**
   * Data resembling a raw Discord presence.
   * @typedef {Object} PresenceData
   * @property {PresenceStatusData} [status] Status of the user
   * @property {boolean} [afk] Whether the user is AFK
   * @property {Object} [activity] Activity the user is playing
   * @property {string} [activity.name] Name of the activity
   * @property {ActivityType|number} [activity.type] Type of the activity
   * @property {string} [activity.url] Twitch / YouTube stream URL
   * @property {?number|number[]} [shardID] Shard Id(s) to have the activity set on
   */

  /**
   * Sets the full presence of the client user.
   * @param {PresenceData} data Data for the presence
   * @returns {Promise<Presence>}
   * @example
   * // Set the client user's presence
   * client.user.setPresence({ activity: { name: 'with discord.js' }, status: 'idle' })
   *   .then(console.log)
   *   .catch(console.error);
   */
  setPresence(data) {
    return this.client.presence.set(data);
  }

  /**
   * A user's status. Must be one of:
   * * `online`
   * * `idle`
   * * `invisible`
   * * `dnd` (do not disturb)
   * @typedef {string} PresenceStatusData
   */

  /**
   * Sets the status of the client user.
   * @param {PresenceStatusData} status Status to change to
   * @param {?number|number[]} [shardID] Shard ID(s) to have the activity set on
   * @returns {Promise<Presence>}
   * @example
   * // Set the client user's status
   * client.user.setStatus('idle')
   *   .then(console.log)
   *   .catch(console.error);
   */
  setStatus(status, shardID) {
    return this.setPresence({ status, shardID });
  }

  /**
   * Options for setting an activity.
   * @typedef ActivityOptions
   * @type {Object}
   * @property {string} [url] Twitch / YouTube stream URL
   * @property {ActivityType|number} [type] Type of the activity
   * @property {?number|number[]} [shardID] Shard Id(s) to have the activity set on
   */

  /**
   * Sets the activity the client user is playing.
   * @param {string|ActivityOptions} [name] Activity being played, or options for setting the activity
   * @param {ActivityOptions} [options] Options for setting the activity
   * @returns {Promise<Presence>}
   * @example
   * // Set the client user's activity
   * client.user.setActivity('discord.js', { type: 'WATCHING' })
   *   .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
   *   .catch(console.error);
   */
  setActivity(name, options = {}) {
    if (!name) return this.setPresence({ activity: null, shardID: options.shardID });

    const activity = Object.assign({}, options, typeof name === 'object' ? name : { name });
    return this.setPresence({ activity, shardID: activity.shardID });
  }

  /**
   * Sets/removes the AFK flag for the client user.
   * @param {boolean} afk Whether or not the user is AFK
   * @returns {Promise<Presence>}
   */
  setAFK(afk) {
    return this.setPresence({ afk });
  }
}

module.exports = ClientUser;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/DMChannel.js":
/*!*************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/DMChannel.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Channel = __webpack_require__(/*! ./Channel */ "./node_modules/discord.js/src/structures/Channel.js");
const TextBasedChannel = __webpack_require__(/*! ./interfaces/TextBasedChannel */ "./node_modules/discord.js/src/structures/interfaces/TextBasedChannel.js");
const MessageManager = __webpack_require__(/*! ../managers/MessageManager */ "./node_modules/discord.js/src/managers/MessageManager.js");

/**
 * Represents a direct message channel between two users.
 * @extends {Channel}
 * @implements {TextBasedChannel}
 */
class DMChannel extends Channel {
  /**
   * @param {Client} client The instantiating client
   * @param {Object} data The data for the DM channel
   */
  constructor(client, data) {
    super(client, data);
    // Override the channel type so partials have a known type
    this.type = 'dm';
    /**
     * A manager of the messages belonging to this channel
     * @type {MessageManager}
     */
    this.messages = new MessageManager(this);
    this._typing = new Map();
  }

  _patch(data) {
    super._patch(data);

    if (data.recipients) {
      /**
       * The recipient on the other end of the DM
       * @type {User}
       */
      this.recipient = this.client.users.add(data.recipients[0]);
    }

    /**
     * The ID of the last message in the channel, if one was sent
     * @type {?Snowflake}
     */
    this.lastMessageID = data.last_message_id;

    /**
     * The timestamp when the last pinned message was pinned, if there was one
     * @type {?number}
     */
    this.lastPinTimestamp = data.last_pin_timestamp ? new Date(data.last_pin_timestamp).getTime() : null;
  }

  /**
   * Whether this DMChannel is a partial
   * @type {boolean}
   * @readonly
   */
  get partial() {
    return typeof this.lastMessageID === 'undefined';
  }

  /**
   * Fetch this DMChannel.
   * @param {boolean} [force=false] Whether to skip the cache check and request the API
   * @returns {Promise<DMChannel>}
   */
  fetch(force = false) {
    return this.recipient.createDM(force);
  }

  /**
   * When concatenated with a string, this automatically returns the recipient's mention instead of the
   * DMChannel object.
   * @returns {string}
   * @example
   * // Logs: Hello from <@123456789012345678>!
   * console.log(`Hello from ${channel}!`);
   */
  toString() {
    return this.recipient.toString();
  }

  // These are here only for documentation purposes - they are implemented by TextBasedChannel
  /* eslint-disable no-empty-function */
  get lastMessage() {}
  get lastPinAt() {}
  send() {}
  startTyping() {}
  stopTyping() {}
  get typing() {}
  get typingCount() {}
  createMessageCollector() {}
  awaitMessages() {}
  // Doesn't work on DM channels; bulkDelete() {}
}

TextBasedChannel.applyToClass(DMChannel, true, ['bulkDelete']);

module.exports = DMChannel;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/Emoji.js":
/*!*********************************************************!*\
  !*** ./node_modules/discord.js/src/structures/Emoji.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Base = __webpack_require__(/*! ./Base */ "./node_modules/discord.js/src/structures/Base.js");
const Snowflake = __webpack_require__(/*! ../util/Snowflake */ "./node_modules/discord.js/src/util/Snowflake.js");

/**
 * Represents an emoji, see {@link GuildEmoji} and {@link ReactionEmoji}.
 * @extends {Base}
 */
class Emoji extends Base {
  constructor(client, emoji) {
    super(client);
    /**
     * Whether this emoji is animated
     * @type {boolean}
     */
    this.animated = emoji.animated;

    /**
     * The name of this emoji
     * @type {string}
     */
    this.name = emoji.name;

    /**
     * The ID of this emoji
     * @type {?Snowflake}
     */
    this.id = emoji.id;

    /**
     * Whether this emoji has been deleted
     * @type {boolean}
     */
    this.deleted = false;
  }

  /**
   * The identifier of this emoji, used for message reactions
   * @type {string}
   * @readonly
   */
  get identifier() {
    if (this.id) return `${this.animated ? 'a:' : ''}${this.name}:${this.id}`;
    return encodeURIComponent(this.name);
  }

  /**
   * The URL to the emoji file if its a custom emoji
   * @type {?string}
   * @readonly
   */
  get url() {
    if (!this.id) return null;
    return this.client.rest.cdn.Emoji(this.id, this.animated ? 'gif' : 'png');
  }

  /**
   * The timestamp the emoji was created at, or null if unicode
   * @type {?number}
   * @readonly
   */
  get createdTimestamp() {
    if (!this.id) return null;
    return Snowflake.deconstruct(this.id).timestamp;
  }

  /**
   * The time the emoji was created at, or null if unicode
   * @type {?Date}
   * @readonly
   */
  get createdAt() {
    if (!this.id) return null;
    return new Date(this.createdTimestamp);
  }

  /**
   * When concatenated with a string, this automatically returns the text required to form a graphical emoji on Discord
   * instead of the Emoji object.
   * @returns {string}
   * @example
   * // Send a custom emoji from a guild:
   * const emoji = guild.emojis.cache.first();
   * msg.reply(`Hello! ${emoji}`);
   * @example
   * // Send the emoji used in a reaction to the channel the reaction is part of
   * reaction.message.channel.send(`The emoji used was: ${reaction.emoji}`);
   */
  toString() {
    return this.id ? `<${this.animated ? 'a' : ''}:${this.name}:${this.id}>` : this.name;
  }

  toJSON() {
    return super.toJSON({
      guild: 'guildID',
      createdTimestamp: true,
      url: true,
      identifier: true,
    });
  }
}

module.exports = Emoji;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/Guild.js":
/*!*********************************************************!*\
  !*** ./node_modules/discord.js/src/structures/Guild.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { deprecate } = __webpack_require__(/*! util */ "?0bed");
const Base = __webpack_require__(/*! ./Base */ "./node_modules/discord.js/src/structures/Base.js");
const GuildAuditLogs = __webpack_require__(/*! ./GuildAuditLogs */ "./node_modules/discord.js/src/structures/GuildAuditLogs.js");
const GuildPreview = __webpack_require__(/*! ./GuildPreview */ "./node_modules/discord.js/src/structures/GuildPreview.js");
const GuildTemplate = __webpack_require__(/*! ./GuildTemplate */ "./node_modules/discord.js/src/structures/GuildTemplate.js");
const Integration = __webpack_require__(/*! ./Integration */ "./node_modules/discord.js/src/structures/Integration.js");
const Invite = __webpack_require__(/*! ./Invite */ "./node_modules/discord.js/src/structures/Invite.js");
const VoiceRegion = __webpack_require__(/*! ./VoiceRegion */ "./node_modules/discord.js/src/structures/VoiceRegion.js");
const Webhook = __webpack_require__(/*! ./Webhook */ "./node_modules/discord.js/src/structures/Webhook.js");
const { Error, TypeError } = __webpack_require__(/*! ../errors */ "./node_modules/discord.js/src/errors/index.js");
const GuildChannelManager = __webpack_require__(/*! ../managers/GuildChannelManager */ "./node_modules/discord.js/src/managers/GuildChannelManager.js");
const GuildEmojiManager = __webpack_require__(/*! ../managers/GuildEmojiManager */ "./node_modules/discord.js/src/managers/GuildEmojiManager.js");
const GuildMemberManager = __webpack_require__(/*! ../managers/GuildMemberManager */ "./node_modules/discord.js/src/managers/GuildMemberManager.js");
const PresenceManager = __webpack_require__(/*! ../managers/PresenceManager */ "./node_modules/discord.js/src/managers/PresenceManager.js");
const RoleManager = __webpack_require__(/*! ../managers/RoleManager */ "./node_modules/discord.js/src/managers/RoleManager.js");
const VoiceStateManager = __webpack_require__(/*! ../managers/VoiceStateManager */ "./node_modules/discord.js/src/managers/VoiceStateManager.js");
const Collection = __webpack_require__(/*! ../util/Collection */ "./node_modules/discord.js/src/util/Collection.js");
const {
  browser,
  ChannelTypes,
  DefaultMessageNotifications,
  PartialTypes,
  VerificationLevels,
  ExplicitContentFilterLevels,
} = __webpack_require__(/*! ../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");
const DataResolver = __webpack_require__(/*! ../util/DataResolver */ "./node_modules/discord.js/src/util/DataResolver.js");
const Snowflake = __webpack_require__(/*! ../util/Snowflake */ "./node_modules/discord.js/src/util/Snowflake.js");
const SystemChannelFlags = __webpack_require__(/*! ../util/SystemChannelFlags */ "./node_modules/discord.js/src/util/SystemChannelFlags.js");
const Util = __webpack_require__(/*! ../util/Util */ "./node_modules/discord.js/src/util/Util.js");

/**
 * Represents a guild (or a server) on Discord.
 * <info>It's recommended to see if a guild is available before performing operations or reading data from it. You can
 * check this with `guild.available`.</info>
 * @extends {Base}
 */
class Guild extends Base {
  /**
   * @param {Client} client The instantiating client
   * @param {Object} data The data for the guild
   */
  constructor(client, data) {
    super(client);

    /**
     * A manager of the members belonging to this guild
     * @type {GuildMemberManager}
     */
    this.members = new GuildMemberManager(this);

    /**
     * A manager of the channels belonging to this guild
     * @type {GuildChannelManager}
     */
    this.channels = new GuildChannelManager(this);

    /**
     * A manager of the roles belonging to this guild
     * @type {RoleManager}
     */
    this.roles = new RoleManager(this);

    /**
     * A manager of the presences belonging to this guild
     * @type {PresenceManager}
     */
    this.presences = new PresenceManager(this.client);

    /**
     * A manager of the voice states of this guild
     * @type {VoiceStateManager}
     */
    this.voiceStates = new VoiceStateManager(this);

    /**
     * Whether the bot has been removed from the guild
     * @type {boolean}
     */
    this.deleted = false;

    if (!data) return;
    if (data.unavailable) {
      /**
       * Whether the guild is available to access. If it is not available, it indicates a server outage
       * @type {boolean}
       */
      this.available = false;

      /**
       * The Unique ID of the guild, useful for comparisons
       * @type {Snowflake}
       */
      this.id = data.id;
    } else {
      this._patch(data);
      if (!data.channels) this.available = false;
    }

    /**
     * The id of the shard this Guild belongs to.
     * @type {number}
     */
    this.shardID = data.shardID;
  }

  /**
   * The Shard this Guild belongs to.
   * @type {WebSocketShard}
   * @readonly
   */
  get shard() {
    return this.client.ws.shards.get(this.shardID);
  }

  /**
   * Sets up the guild.
   * @param {*} data The raw data of the guild
   * @private
   */
  _patch(data) {
    /**
     * The name of the guild
     * @type {string}
     */
    this.name = data.name;

    /**
     * The hash of the guild icon
     * @type {?string}
     */
    this.icon = data.icon;

    /**
     * The hash of the guild invite splash image
     * @type {?string}
     */
    this.splash = data.splash;

    /**
     * The hash of the guild discovery splash image
     * @type {?string}
     */
    this.discoverySplash = data.discovery_splash;

    /**
     * The region the guild is located in
     * @type {string}
     */
    this.region = data.region;

    /**
     * The full amount of members in this guild
     * @type {number}
     */
    this.memberCount = data.member_count || this.memberCount;

    /**
     * Whether the guild is "large" (has more than large_threshold members, 50 by default)
     * @type {boolean}
     */
    this.large = Boolean('large' in data ? data.large : this.large);

    /**
     * An array of enabled guild features, here are the possible values:
     * * ANIMATED_ICON
     * * BANNER
     * * COMMERCE
     * * COMMUNITY
     * * DISCOVERABLE
     * * FEATURABLE
     * * INVITE_SPLASH
     * * NEWS
     * * PARTNERED
     * * RELAY_ENABLED
     * * VANITY_URL
     * * VERIFIED
     * * VIP_REGIONS
     * * WELCOME_SCREEN_ENABLED
     * @typedef {string} Features
     */

    /**
     * An array of guild features partnered guilds have enabled
     * @type {Features[]}
     */
    this.features = data.features;

    /**
     * The ID of the application that created this guild (if applicable)
     * @type {?Snowflake}
     */
    this.applicationID = data.application_id;

    /**
     * The time in seconds before a user is counted as "away from keyboard"
     * @type {?number}
     */
    this.afkTimeout = data.afk_timeout;

    /**
     * The ID of the voice channel where AFK members are moved
     * @type {?Snowflake}
     */
    this.afkChannelID = data.afk_channel_id;

    /**
     * The ID of the system channel
     * @type {?Snowflake}
     */
    this.systemChannelID = data.system_channel_id;

    /**
     * Whether embedded images are enabled on this guild
     * @type {boolean}
     * @deprecated
     */
    this.embedEnabled = data.embed_enabled;

    /**
     * The type of premium tier:
     * * 0: NONE
     * * 1: TIER_1
     * * 2: TIER_2
     * * 3: TIER_3
     * @typedef {number} PremiumTier
     */

    /**
     * The premium tier on this guild
     * @type {PremiumTier}
     */
    this.premiumTier = data.premium_tier;

    if (typeof data.premium_subscription_count !== 'undefined') {
      /**
       * The total number of boosts for this server
       * @type {?number}
       */
      this.premiumSubscriptionCount = data.premium_subscription_count;
    }

    if (typeof data.widget_enabled !== 'undefined') {
      /**
       * Whether widget images are enabled on this guild
       * @type {?boolean}
       */
      this.widgetEnabled = data.widget_enabled;
    }

    if (typeof data.widget_channel_id !== 'undefined') {
      /**
       * The widget channel ID, if enabled
       * @type {?string}
       */
      this.widgetChannelID = data.widget_channel_id;
    }

    if (typeof data.embed_channel_id !== 'undefined') {
      /**
       * The embed channel ID, if enabled
       * @type {?string}
       * @deprecated
       */
      this.embedChannelID = data.embed_channel_id;
    }

    /**
     * The verification level of the guild
     * @type {VerificationLevel}
     */
    this.verificationLevel = VerificationLevels[data.verification_level];

    /**
     * The explicit content filter level of the guild
     * @type {ExplicitContentFilterLevel}
     */
    this.explicitContentFilter = ExplicitContentFilterLevels[data.explicit_content_filter];

    /**
     * The required MFA level for the guild
     * @type {number}
     */
    this.mfaLevel = data.mfa_level;

    /**
     * The timestamp the client user joined the guild at
     * @type {number}
     */
    this.joinedTimestamp = data.joined_at ? new Date(data.joined_at).getTime() : this.joinedTimestamp;

    /**
     * The value set for the guild's default message notifications
     * @type {DefaultMessageNotifications|number}
     */
    this.defaultMessageNotifications =
      DefaultMessageNotifications[data.default_message_notifications] || data.default_message_notifications;

    /**
     * The value set for the guild's system channel flags
     * @type {Readonly<SystemChannelFlags>}
     */
    this.systemChannelFlags = new SystemChannelFlags(data.system_channel_flags).freeze();

    if (typeof data.max_members !== 'undefined') {
      /**
       * The maximum amount of members the guild can have
       * @type {?number}
       */
      this.maximumMembers = data.max_members;
    } else if (typeof this.maximumMembers === 'undefined') {
      this.maximumMembers = null;
    }

    if (typeof data.max_presences !== 'undefined') {
      /**
       * The maximum amount of presences the guild can have
       * <info>You will need to fetch the guild using {@link Guild#fetch} if you want to receive this parameter</info>
       * @type {?number}
       */
      this.maximumPresences = data.max_presences || 25000;
    } else if (typeof this.maximumPresences === 'undefined') {
      this.maximumPresences = null;
    }

    if (typeof data.approximate_member_count !== 'undefined') {
      /**
       * The approximate amount of members the guild has
       * <info>You will need to fetch the guild using {@link Guild#fetch} if you want to receive this parameter</info>
       * @type {?number}
       */
      this.approximateMemberCount = data.approximate_member_count;
    } else if (typeof this.approximateMemberCount === 'undefined') {
      this.approximateMemberCount = null;
    }

    if (typeof data.approximate_presence_count !== 'undefined') {
      /**
       * The approximate amount of presences the guild has
       * <info>You will need to fetch the guild using {@link Guild#fetch} if you want to receive this parameter</info>
       * @type {?number}
       */
      this.approximatePresenceCount = data.approximate_presence_count;
    } else if (typeof this.approximatePresenceCount === 'undefined') {
      this.approximatePresenceCount = null;
    }

    /**
     * The vanity invite code of the guild, if any
     * @type {?string}
     */
    this.vanityURLCode = data.vanity_url_code;

    /* eslint-disable max-len */
    /**
     * The use count of the vanity URL code of the guild, if any
     * <info>You will need to fetch this parameter using {@link Guild#fetchVanityData} if you want to receive it</info>
     * @type {?number}
     */
    this.vanityURLUses = null;
    /* eslint-enable max-len */

    /**
     * The description of the guild, if any
     * @type {?string}
     */
    this.description = data.description;

    /**
     * The hash of the guild banner
     * @type {?string}
     */
    this.banner = data.banner;

    this.id = data.id;
    this.available = !data.unavailable;
    this.features = data.features || this.features || [];

    /**
     * The ID of the rules channel for the guild
     * @type {?Snowflake}
     */
    this.rulesChannelID = data.rules_channel_id;

    /**
     * The ID of the community updates channel for the guild
     * @type {?Snowflake}
     */
    this.publicUpdatesChannelID = data.public_updates_channel_id;

    /**
     * The preferred locale of the guild, defaults to `en-US`
     * @type {string}
     */
    this.preferredLocale = data.preferred_locale;

    if (data.channels) {
      this.channels.cache.clear();
      for (const rawChannel of data.channels) {
        this.client.channels.add(rawChannel, this);
      }
    }

    if (data.roles) {
      this.roles.cache.clear();
      for (const role of data.roles) this.roles.add(role);
    }

    if (data.members) {
      this.members.cache.clear();
      for (const guildUser of data.members) this.members.add(guildUser);
    }

    if (data.owner_id) {
      /**
       * The user ID of this guild's owner
       * @type {Snowflake}
       */
      this.ownerID = data.owner_id;
    }

    if (data.presences) {
      for (const presence of data.presences) {
        this.presences.add(Object.assign(presence, { guild: this }));
      }
    }

    if (data.voice_states) {
      this.voiceStates.cache.clear();
      for (const voiceState of data.voice_states) {
        this.voiceStates.add(voiceState);
      }
    }

    if (!this.emojis) {
      /**
       * A manager of the emojis belonging to this guild
       * @type {GuildEmojiManager}
       */
      this.emojis = new GuildEmojiManager(this);
      if (data.emojis) for (const emoji of data.emojis) this.emojis.add(emoji);
    } else if (data.emojis) {
      this.client.actions.GuildEmojisUpdate.handle({
        guild_id: this.id,
        emojis: data.emojis,
      });
    }
  }

  /**
   * The URL to this guild's banner.
   * @param {ImageURLOptions} [options={}] Options for the Image URL
   * @returns {?string}
   */
  bannerURL({ format, size } = {}) {
    if (!this.banner) return null;
    return this.client.rest.cdn.Banner(this.id, this.banner, format, size);
  }

  /**
   * The timestamp the guild was created at
   * @type {number}
   * @readonly
   */
  get createdTimestamp() {
    return Snowflake.deconstruct(this.id).timestamp;
  }

  /**
   * The time the guild was created at
   * @type {Date}
   * @readonly
   */
  get createdAt() {
    return new Date(this.createdTimestamp);
  }

  /**
   * The time the client user joined the guild
   * @type {Date}
   * @readonly
   */
  get joinedAt() {
    return new Date(this.joinedTimestamp);
  }

  /**
   * If this guild is partnered
   * @type {boolean}
   * @readonly
   */
  get partnered() {
    return this.features.includes('PARTNERED');
  }

  /**
   * If this guild is verified
   * @type {boolean}
   * @readonly
   */
  get verified() {
    return this.features.includes('VERIFIED');
  }

  /**
   * The URL to this guild's icon.
   * @param {ImageURLOptions} [options={}] Options for the Image URL
   * @returns {?string}
   */
  iconURL({ format, size, dynamic } = {}) {
    if (!this.icon) return null;
    return this.client.rest.cdn.Icon(this.id, this.icon, format, size, dynamic);
  }

  /**
   * The acronym that shows up in place of a guild icon.
   * @type {string}
   * @readonly
   */
  get nameAcronym() {
    return this.name
      .replace(/'s /g, ' ')
      .replace(/\w+/g, e => e[0])
      .replace(/\s/g, '');
  }

  /**
   * The URL to this guild's invite splash image.
   * @param {ImageURLOptions} [options={}] Options for the Image URL
   * @returns {?string}
   */
  splashURL({ format, size } = {}) {
    if (!this.splash) return null;
    return this.client.rest.cdn.Splash(this.id, this.splash, format, size);
  }

  /**
   * The URL to this guild's discovery splash image.
   * @param {ImageURLOptions} [options={}] Options for the Image URL
   * @returns {?string}
   */
  discoverySplashURL({ format, size } = {}) {
    if (!this.discoverySplash) return null;
    return this.client.rest.cdn.DiscoverySplash(this.id, this.discoverySplash, format, size);
  }

  /**
   * The owner of the guild
   * @type {?GuildMember}
   * @readonly
   */
  get owner() {
    return (
      this.members.cache.get(this.ownerID) ||
      (this.client.options.partials.includes(PartialTypes.GUILD_MEMBER)
        ? this.members.add({ user: { id: this.ownerID } }, true)
        : null)
    );
  }

  /**
   * AFK voice channel for this guild
   * @type {?VoiceChannel}
   * @readonly
   */
  get afkChannel() {
    return this.client.channels.cache.get(this.afkChannelID) || null;
  }

  /**
   * System channel for this guild
   * @type {?TextChannel}
   * @readonly
   */
  get systemChannel() {
    return this.client.channels.cache.get(this.systemChannelID) || null;
  }

  /**
   * Widget channel for this guild
   * @type {?TextChannel}
   * @readonly
   */
  get widgetChannel() {
    return this.client.channels.cache.get(this.widgetChannelID) || null;
  }

  /**
   * Embed channel for this guild
   * @type {?TextChannel}
   * @readonly
   * @deprecated
   */
  get embedChannel() {
    return this.client.channels.cache.get(this.embedChannelID) || null;
  }

  /**
   * Rules channel for this guild
   * @type {?TextChannel}
   * @readonly
   */
  get rulesChannel() {
    return this.client.channels.cache.get(this.rulesChannelID) || null;
  }

  /**
   * Public updates channel for this guild
   * @type {?TextChannel}
   * @readonly
   */
  get publicUpdatesChannel() {
    return this.client.channels.cache.get(this.publicUpdatesChannelID) || null;
  }

  /**
   * The client user as a GuildMember of this guild
   * @type {?GuildMember}
   * @readonly
   */
  get me() {
    return (
      this.members.cache.get(this.client.user.id) ||
      (this.client.options.partials.includes(PartialTypes.GUILD_MEMBER)
        ? this.members.add({ user: { id: this.client.user.id } }, true)
        : null)
    );
  }

  /**
   * The voice state for the client user of this guild, if any
   * @type {?VoiceState}
   * @readonly
   */
  get voice() {
    return this.voiceStates.cache.get(this.client.user.id);
  }

  /**
   * Returns the GuildMember form of a User object, if the user is present in the guild.
   * @param {UserResolvable} user The user that you want to obtain the GuildMember of
   * @returns {?GuildMember}
   * @example
   * // Get the guild member of a user
   * const member = guild.member(message.author);
   */
  member(user) {
    return this.members.resolve(user);
  }

  /**
   * Fetches this guild.
   * @returns {Promise<Guild>}
   */
  fetch() {
    return this.client.api
      .guilds(this.id)
      .get({ query: { with_counts: true } })
      .then(data => {
        this._patch(data);
        return this;
      });
  }

  /**
   * An object containing information about a guild member's ban.
   * @typedef {Object} BanInfo
   * @property {User} user User that was banned
   * @property {?string} reason Reason the user was banned
   */

  /**
   * Fetches information on a banned user from this guild.
   * @param {UserResolvable} user The User to fetch the ban info of
   * @returns {Promise<BanInfo>}
   */
  fetchBan(user) {
    const id = this.client.users.resolveID(user);
    if (!id) throw new Error('FETCH_BAN_RESOLVE_ID');
    return this.client.api
      .guilds(this.id)
      .bans(id)
      .get()
      .then(ban => ({
        reason: ban.reason,
        user: this.client.users.add(ban.user),
      }));
  }

  /**
   * Fetches a collection of banned users in this guild.
   * @returns {Promise<Collection<Snowflake, BanInfo>>}
   */
  fetchBans() {
    return this.client.api
      .guilds(this.id)
      .bans.get()
      .then(bans =>
        bans.reduce((collection, ban) => {
          collection.set(ban.user.id, {
            reason: ban.reason,
            user: this.client.users.add(ban.user),
          });
          return collection;
        }, new Collection()),
      );
  }

  /**
   * Fetches a collection of integrations to this guild.
   * Resolves with a collection mapping integrations by their ids.
   * @param {Object} [options] Options for fetching integrations
   * @param {boolean} [options.includeApplications] Whether to include bot and Oauth2 webhook integrations
   * @returns {Promise<Collection<string, Integration>>}
   * @example
   * // Fetch integrations
   * guild.fetchIntegrations()
   *   .then(integrations => console.log(`Fetched ${integrations.size} integrations`))
   *   .catch(console.error);
   */
  fetchIntegrations({ includeApplications = false } = {}) {
    return this.client.api
      .guilds(this.id)
      .integrations.get({
        query: {
          include_applications: includeApplications,
        },
      })
      .then(data =>
        data.reduce(
          (collection, integration) => collection.set(integration.id, new Integration(this.client, integration, this)),
          new Collection(),
        ),
      );
  }

  /**
   * Fetches a collection of templates from this guild.
   * Resolves with a collection mapping templates by their codes.
   * @returns {Promise<Collection<string, GuildTemplate>>}
   */
  fetchTemplates() {
    return this.client.api
      .guilds(this.id)
      .templates.get()
      .then(templates =>
        templates.reduce((col, data) => col.set(data.code, new GuildTemplate(this.client, data)), new Collection()),
      );
  }

  /**
   * The data for creating an integration.
   * @typedef {Object} IntegrationData
   * @property {string} id The integration id
   * @property {string} type The integration type
   */

  /**
   * Creates an integration by attaching an integration object
   * @param {IntegrationData} data The data for the integration
   * @param {string} reason Reason for creating the integration
   * @returns {Promise<Guild>}
   */
  createIntegration(data, reason) {
    return this.client.api
      .guilds(this.id)
      .integrations.post({ data, reason })
      .then(() => this);
  }

  /**
   * Creates a template for the guild.
   * @param {string} name The name for the template
   * @param {string} [description] The description for the template
   * @returns {Promise<GuildTemplate>}
   */
  createTemplate(name, description) {
    return this.client.api
      .guilds(this.id)
      .templates.post({ data: { name, description } })
      .then(data => new GuildTemplate(this.client, data));
  }

  /**
   * Fetches a collection of invites to this guild.
   * Resolves with a collection mapping invites by their codes.
   * @returns {Promise<Collection<string, Invite>>}
   * @example
   * // Fetch invites
   * guild.fetchInvites()
   *   .then(invites => console.log(`Fetched ${invites.size} invites`))
   *   .catch(console.error);
   * @example
   * // Fetch invite creator by their id
   * guild.fetchInvites()
   *  .then(invites => console.log(invites.find(invite => invite.inviter.id === '84484653687267328')))
   *  .catch(console.error);
   */
  fetchInvites() {
    return this.client.api
      .guilds(this.id)
      .invites.get()
      .then(inviteItems => {
        const invites = new Collection();
        for (const inviteItem of inviteItems) {
          const invite = new Invite(this.client, inviteItem);
          invites.set(invite.code, invite);
        }
        return invites;
      });
  }

  /**
   * Obtains a guild preview for this guild from Discord.
   * @returns {Promise<GuildPreview>}
   */
  fetchPreview() {
    return this.client.api
      .guilds(this.id)
      .preview.get()
      .then(data => new GuildPreview(this.client, data));
  }

  /**
   * Fetches the vanity url invite code to this guild.
   * Resolves with a string matching the vanity url invite code, not the full url.
   * @returns {Promise<string>}
   * @deprecated
   * @example
   * // Fetch invites
   * guild.fetchVanityCode()
   *   .then(code => {
   *     console.log(`Vanity URL: https://discord.gg/${code}`);
   *   })
   *   .catch(console.error);
   */
  fetchVanityCode() {
    return this.fetchVanityData().then(vanity => vanity.code);
  }

  /**
   * An object containing information about a guild's vanity invite.
   * @typedef {Object} Vanity
   * @property {?string} code Vanity invite code
   * @property {?number} uses How many times this invite has been used
   */

  /**
   * Fetches the vanity url invite object to this guild.
   * Resolves with an object containing the vanity url invite code and the use count
   * @returns {Promise<Vanity>}
   * @example
   * // Fetch invite data
   * guild.fetchVanityData()
   *   .then(res => {
   *     console.log(`Vanity URL: https://discord.gg/${res.code} with ${res.uses} uses`);
   *   })
   *   .catch(console.error);
   */
  async fetchVanityData() {
    if (!this.features.includes('VANITY_URL')) {
      throw new Error('VANITY_URL');
    }
    const data = await this.client.api.guilds(this.id, 'vanity-url').get();
    this.vanityURLUses = data.uses;

    return data;
  }

  /**
   * Fetches all webhooks for the guild.
   * @returns {Promise<Collection<Snowflake, Webhook>>}
   * @example
   * // Fetch webhooks
   * guild.fetchWebhooks()
   *   .then(webhooks => console.log(`Fetched ${webhooks.size} webhooks`))
   *   .catch(console.error);
   */
  fetchWebhooks() {
    return this.client.api
      .guilds(this.id)
      .webhooks.get()
      .then(data => {
        const hooks = new Collection();
        for (const hook of data) hooks.set(hook.id, new Webhook(this.client, hook));
        return hooks;
      });
  }

  /**
   * Fetches available voice regions.
   * @returns {Promise<Collection<string, VoiceRegion>>}
   */
  fetchVoiceRegions() {
    return this.client.api
      .guilds(this.id)
      .regions.get()
      .then(res => {
        const regions = new Collection();
        for (const region of res) regions.set(region.id, new VoiceRegion(region));
        return regions;
      });
  }

  /**
   * Data for the Guild Widget object
   * @typedef {Object} GuildWidget
   * @property {boolean} enabled Whether the widget is enabled
   * @property {?GuildChannel} channel The widget channel
   */

  /**
   * The Guild Widget object
   * @typedef {Object} GuildWidgetData
   * @property {boolean} enabled Whether the widget is enabled
   * @property {?GuildChannelResolvable} channel The widget channel
   */

  /**
   * Fetches the guild embed.
   * @returns {Promise<GuildWidget>}
   * @deprecated
   * @example
   * // Fetches the guild embed
   * guild.fetchEmbed()
   *   .then(embed => console.log(`The embed is ${embed.enabled ? 'enabled' : 'disabled'}`))
   *   .catch(console.error);
   */
  fetchEmbed() {
    return this.fetchWidget();
  }

  /**
   * Fetches the guild widget.
   * @returns {Promise<GuildWidget>}
   * @example
   * // Fetches the guild widget
   * guild.fetchWidget()
   *   .then(widget => console.log(`The widget is ${widget.enabled ? 'enabled' : 'disabled'}`))
   *   .catch(console.error);
   */
  async fetchWidget() {
    const data = await this.client.api.guilds(this.id).widget.get();
    this.widgetEnabled = this.embedEnabled = data.enabled;
    this.widgetChannelID = this.embedChannelID = data.channel_id;
    return {
      enabled: data.enabled,
      channel: data.channel_id ? this.channels.cache.get(data.channel_id) : null,
    };
  }

  /**
   * Fetches audit logs for this guild.
   * @param {Object} [options={}] Options for fetching audit logs
   * @param {Snowflake|GuildAuditLogsEntry} [options.before] Limit to entries from before specified entry
   * @param {number} [options.limit] Limit number of entries
   * @param {UserResolvable} [options.user] Only show entries involving this user
   * @param {AuditLogAction|number} [options.type] Only show entries involving this action type
   * @returns {Promise<GuildAuditLogs>}
   * @example
   * // Output audit log entries
   * guild.fetchAuditLogs()
   *   .then(audit => console.log(audit.entries.first()))
   *   .catch(console.error);
   */
  fetchAuditLogs(options = {}) {
    if (options.before && options.before instanceof GuildAuditLogs.Entry) options.before = options.before.id;
    if (typeof options.type === 'string') options.type = GuildAuditLogs.Actions[options.type];

    return this.client.api
      .guilds(this.id)
      ['audit-logs'].get({
        query: {
          before: options.before,
          limit: options.limit,
          user_id: this.client.users.resolveID(options.user),
          action_type: options.type,
        },
      })
      .then(data => GuildAuditLogs.build(this, data));
  }

  /**
   * Adds a user to the guild using OAuth2. Requires the `CREATE_INSTANT_INVITE` permission.
   * @param {UserResolvable} user User to add to the guild
   * @param {Object} options Options for the addition
   * @param {string} options.accessToken An OAuth2 access token for the user with the `guilds.join` scope granted to the
   * bot's application
   * @param {string} [options.nick] Nickname to give the member (requires `MANAGE_NICKNAMES`)
   * @param {Collection<Snowflake, Role>|RoleResolvable[]} [options.roles] Roles to add to the member
   * (requires `MANAGE_ROLES`)
   * @param {boolean} [options.mute] Whether the member should be muted (requires `MUTE_MEMBERS`)
   * @param {boolean} [options.deaf] Whether the member should be deafened (requires `DEAFEN_MEMBERS`)
   * @returns {Promise<GuildMember>}
   */
  async addMember(user, options) {
    user = this.client.users.resolveID(user);
    if (!user) throw new TypeError('INVALID_TYPE', 'user', 'UserResolvable');
    if (this.members.cache.has(user)) return this.members.cache.get(user);
    options.access_token = options.accessToken;
    if (options.roles) {
      const roles = [];
      for (let role of options.roles instanceof Collection ? options.roles.values() : options.roles) {
        role = this.roles.resolve(role);
        if (!role) {
          throw new TypeError('INVALID_TYPE', 'options.roles', 'Array or Collection of Roles or Snowflakes', true);
        }
        roles.push(role.id);
      }
      options.roles = roles;
    }
    const data = await this.client.api.guilds(this.id).members(user).put({ data: options });
    // Data is an empty buffer if the member is already part of the guild.
    return data instanceof (browser ? ArrayBuffer : Buffer) ? this.members.fetch(user) : this.members.add(data);
  }

  /**
   * The data for editing a guild.
   * @typedef {Object} GuildEditData
   * @property {string} [name] The name of the guild
   * @property {string} [region] The region of the guild
   * @property {VerificationLevel|number} [verificationLevel] The verification level of the guild
   * @property {ExplicitContentFilterLevel|number} [explicitContentFilter] The level of the explicit content filter
   * @property {ChannelResolvable} [afkChannel] The AFK channel of the guild
   * @property {ChannelResolvable} [systemChannel] The system channel of the guild
   * @property {number} [afkTimeout] The AFK timeout of the guild
   * @property {Base64Resolvable} [icon] The icon of the guild
   * @property {GuildMemberResolvable} [owner] The owner of the guild
   * @property {Base64Resolvable} [splash] The invite splash image of the guild
   * @property {Base64Resolvable} [discoverySplash] The discovery splash image of the guild
   * @property {Base64Resolvable} [banner] The banner of the guild
   * @property {DefaultMessageNotifications|number} [defaultMessageNotifications] The default message notifications
   * @property {SystemChannelFlagsResolvable} [systemChannelFlags] The system channel flags of the guild
   * @property {ChannelResolvable} [rulesChannel] The rules channel of the guild
   * @property {ChannelResolvable} [publicUpdatesChannel] The community updates channel of the guild
   * @property {string} [preferredLocale] The preferred locale of the guild
   */

  /**
   * Updates the guild with new information - e.g. a new name.
   * @param {GuildEditData} data The data to update the guild with
   * @param {string} [reason] Reason for editing this guild
   * @returns {Promise<Guild>}
   * @example
   * // Set the guild name and region
   * guild.edit({
   *   name: 'Discord Guild',
   *   region: 'london',
   * })
   *   .then(updated => console.log(`New guild name ${updated} in region ${updated.region}`))
   *   .catch(console.error);
   */
  edit(data, reason) {
    const _data = {};
    if (data.name) _data.name = data.name;
    if (data.region) _data.region = data.region;
    if (typeof data.verificationLevel !== 'undefined') {
      _data.verification_level =
        typeof data.verificationLevel === 'number'
          ? Number(data.verificationLevel)
          : VerificationLevels.indexOf(data.verificationLevel);
    }
    if (typeof data.afkChannel !== 'undefined') {
      _data.afk_channel_id = this.client.channels.resolveID(data.afkChannel);
    }
    if (typeof data.systemChannel !== 'undefined') {
      _data.system_channel_id = this.client.channels.resolveID(data.systemChannel);
    }
    if (data.afkTimeout) _data.afk_timeout = Number(data.afkTimeout);
    if (typeof data.icon !== 'undefined') _data.icon = data.icon;
    if (data.owner) _data.owner_id = this.client.users.resolveID(data.owner);
    if (data.splash) _data.splash = data.splash;
    if (data.discoverySplash) _data.discovery_splash = data.discoverySplash;
    if (data.banner) _data.banner = data.banner;
    if (typeof data.explicitContentFilter !== 'undefined') {
      _data.explicit_content_filter =
        typeof data.explicitContentFilter === 'number'
          ? data.explicitContentFilter
          : ExplicitContentFilterLevels.indexOf(data.explicitContentFilter);
    }
    if (typeof data.defaultMessageNotifications !== 'undefined') {
      _data.default_message_notifications =
        typeof data.defaultMessageNotifications === 'string'
          ? DefaultMessageNotifications.indexOf(data.defaultMessageNotifications)
          : data.defaultMessageNotifications;
    }
    if (typeof data.systemChannelFlags !== 'undefined') {
      _data.system_channel_flags = SystemChannelFlags.resolve(data.systemChannelFlags);
    }
    if (typeof data.rulesChannel !== 'undefined') {
      _data.rules_channel_id = this.client.channels.resolveID(data.rulesChannel);
    }
    if (typeof data.publicUpdatesChannel !== 'undefined') {
      _data.public_updates_channel_id = this.client.channels.resolveID(data.publicUpdatesChannel);
    }
    if (data.preferredLocale) _data.preferred_locale = data.preferredLocale;
    return this.client.api
      .guilds(this.id)
      .patch({ data: _data, reason })
      .then(newData => this.client.actions.GuildUpdate.handle(newData).updated);
  }

  /**
   * Edits the level of the explicit content filter.
   * @param {ExplicitContentFilterLevel|number} explicitContentFilter The new level of the explicit content filter
   * @param {string} [reason] Reason for changing the level of the guild's explicit content filter
   * @returns {Promise<Guild>}
   */
  setExplicitContentFilter(explicitContentFilter, reason) {
    return this.edit({ explicitContentFilter }, reason);
  }

  /* eslint-disable max-len */
  /**
   * Edits the setting of the default message notifications of the guild.
   * @param {DefaultMessageNotifications|number} defaultMessageNotifications The new setting for the default message notifications
   * @param {string} [reason] Reason for changing the setting of the default message notifications
   * @returns {Promise<Guild>}
   */
  setDefaultMessageNotifications(defaultMessageNotifications, reason) {
    return this.edit({ defaultMessageNotifications }, reason);
  }
  /* eslint-enable max-len */

  /**
   * Edits the flags of the default message notifications of the guild.
   * @param {SystemChannelFlagsResolvable} systemChannelFlags The new flags for the default message notifications
   * @param {string} [reason] Reason for changing the flags of the default message notifications
   * @returns {Promise<Guild>}
   */
  setSystemChannelFlags(systemChannelFlags, reason) {
    return this.edit({ systemChannelFlags }, reason);
  }

  /**
   * Edits the name of the guild.
   * @param {string} name The new name of the guild
   * @param {string} [reason] Reason for changing the guild's name
   * @returns {Promise<Guild>}
   * @example
   * // Edit the guild name
   * guild.setName('Discord Guild')
   *  .then(updated => console.log(`Updated guild name to ${updated.name}`))
   *  .catch(console.error);
   */
  setName(name, reason) {
    return this.edit({ name }, reason);
  }

  /**
   * Edits the region of the guild.
   * @param {string} region The new region of the guild
   * @param {string} [reason] Reason for changing the guild's region
   * @returns {Promise<Guild>}
   * @example
   * // Edit the guild region
   * guild.setRegion('london')
   *  .then(updated => console.log(`Updated guild region to ${updated.region}`))
   *  .catch(console.error);
   */
  setRegion(region, reason) {
    return this.edit({ region }, reason);
  }

  /**
   * Edits the verification level of the guild.
   * @param {VerificationLevel|number} verificationLevel The new verification level of the guild
   * @param {string} [reason] Reason for changing the guild's verification level
   * @returns {Promise<Guild>}
   * @example
   * // Edit the guild verification level
   * guild.setVerificationLevel(1)
   *  .then(updated => console.log(`Updated guild verification level to ${guild.verificationLevel}`))
   *  .catch(console.error);
   */
  setVerificationLevel(verificationLevel, reason) {
    return this.edit({ verificationLevel }, reason);
  }

  /**
   * Edits the AFK channel of the guild.
   * @param {ChannelResolvable} afkChannel The new AFK channel
   * @param {string} [reason] Reason for changing the guild's AFK channel
   * @returns {Promise<Guild>}
   * @example
   * // Edit the guild AFK channel
   * guild.setAFKChannel(channel)
   *  .then(updated => console.log(`Updated guild AFK channel to ${guild.afkChannel.name}`))
   *  .catch(console.error);
   */
  setAFKChannel(afkChannel, reason) {
    return this.edit({ afkChannel }, reason);
  }

  /**
   * Edits the system channel of the guild.
   * @param {ChannelResolvable} systemChannel The new system channel
   * @param {string} [reason] Reason for changing the guild's system channel
   * @returns {Promise<Guild>}
   * @example
   * // Edit the guild system channel
   * guild.setSystemChannel(channel)
   *  .then(updated => console.log(`Updated guild system channel to ${guild.systemChannel.name}`))
   *  .catch(console.error);
   */
  setSystemChannel(systemChannel, reason) {
    return this.edit({ systemChannel }, reason);
  }

  /**
   * Edits the AFK timeout of the guild.
   * @param {number} afkTimeout The time in seconds that a user must be idle to be considered AFK
   * @param {string} [reason] Reason for changing the guild's AFK timeout
   * @returns {Promise<Guild>}
   * @example
   * // Edit the guild AFK channel
   * guild.setAFKTimeout(60)
   *  .then(updated => console.log(`Updated guild AFK timeout to ${guild.afkTimeout}`))
   *  .catch(console.error);
   */
  setAFKTimeout(afkTimeout, reason) {
    return this.edit({ afkTimeout }, reason);
  }

  /**
   * Sets a new guild icon.
   * @param {Base64Resolvable|BufferResolvable} icon The new icon of the guild
   * @param {string} [reason] Reason for changing the guild's icon
   * @returns {Promise<Guild>}
   * @example
   * // Edit the guild icon
   * guild.setIcon('./icon.png')
   *  .then(updated => console.log('Updated the guild icon'))
   *  .catch(console.error);
   */
  async setIcon(icon, reason) {
    return this.edit({ icon: await DataResolver.resolveImage(icon), reason });
  }

  /**
   * Sets a new owner of the guild.
   * @param {GuildMemberResolvable} owner The new owner of the guild
   * @param {string} [reason] Reason for setting the new owner
   * @returns {Promise<Guild>}
   * @example
   * // Edit the guild owner
   * guild.setOwner(guild.members.cache.first())
   *  .then(updated => console.log(`Updated the guild owner to ${updated.owner.displayName}`))
   *  .catch(console.error);
   */
  setOwner(owner, reason) {
    return this.edit({ owner }, reason);
  }

  /**
   * Sets a new guild invite splash image.
   * @param {Base64Resolvable|BufferResolvable} splash The new invite splash image of the guild
   * @param {string} [reason] Reason for changing the guild's invite splash image
   * @returns {Promise<Guild>}
   * @example
   * // Edit the guild splash
   * guild.setSplash('./splash.png')
   *  .then(updated => console.log('Updated the guild splash'))
   *  .catch(console.error);
   */
  async setSplash(splash, reason) {
    return this.edit({ splash: await DataResolver.resolveImage(splash), reason });
  }

  /**
   * Sets a new guild discovery splash image.
   * @param {Base64Resolvable|BufferResolvable} discoverySplash The new discovery splash image of the guild
   * @param {string} [reason] Reason for changing the guild's discovery splash image
   * @returns {Promise<Guild>}
   * @example
   * // Edit the guild discovery splash
   * guild.setDiscoverySplash('./discoverysplash.png')
   *   .then(updated => console.log('Updated the guild discovery splash'))
   *   .catch(console.error);
   */
  async setDiscoverySplash(discoverySplash, reason) {
    return this.edit({ discoverySplash: await DataResolver.resolveImage(discoverySplash), reason });
  }

  /**
   * Sets a new guild banner.
   * @param {Base64Resolvable|BufferResolvable} banner The new banner of the guild
   * @param {string} [reason] Reason for changing the guild's banner
   * @returns {Promise<Guild>}
   * @example
   * guild.setBanner('./banner.png')
   *  .then(updated => console.log('Updated the guild banner'))
   *  .catch(console.error);
   */
  async setBanner(banner, reason) {
    return this.edit({ banner: await DataResolver.resolveImage(banner), reason });
  }

  /**
   * Edits the rules channel of the guild.
   * @param {ChannelResolvable} rulesChannel The new rules channel
   * @param {string} [reason] Reason for changing the guild's rules channel
   * @returns {Promise<Guild>}
   * @example
   * // Edit the guild rules channel
   * guild.setRulesChannel(channel)
   *  .then(updated => console.log(`Updated guild rules channel to ${guild.rulesChannel.name}`))
   *  .catch(console.error);
   */
  setRulesChannel(rulesChannel, reason) {
    return this.edit({ rulesChannel }, reason);
  }

  /**
   * Edits the community updates channel of the guild.
   * @param {ChannelResolvable} publicUpdatesChannel The new community updates channel
   * @param {string} [reason] Reason for changing the guild's community updates channel
   * @returns {Promise<Guild>}
   * @example
   * // Edit the guild community updates channel
   * guild.setPublicUpdatesChannel(channel)
   *  .then(updated => console.log(`Updated guild community updates channel to ${guild.publicUpdatesChannel.name}`))
   *  .catch(console.error);
   */
  setPublicUpdatesChannel(publicUpdatesChannel, reason) {
    return this.edit({ publicUpdatesChannel }, reason);
  }

  /**
   * Edits the preferred locale of the guild.
   * @param {string} preferredLocale The new preferred locale of the guild
   * @param {string} [reason] Reason for changing the guild's preferred locale
   * @returns {Promise<Guild>}
   * @example
   * // Edit the guild preferred locale
   * guild.setPreferredLocale('en-US')
   *  .then(updated => console.log(`Updated guild preferred locale to ${guild.preferredLocale}`))
   *  .catch(console.error);
   */
  setPreferredLocale(preferredLocale, reason) {
    return this.edit({ preferredLocale }, reason);
  }

  /**
   * The data needed for updating a channel's position.
   * @typedef {Object} ChannelPosition
   * @property {ChannelResolvable} channel Channel to update
   * @property {number} position New position for the channel
   */

  /**
   * Batch-updates the guild's channels' positions.
   * @param {ChannelPosition[]} channelPositions Channel positions to update
   * @returns {Promise<Guild>}
   * @example
   * guild.setChannelPositions([{ channel: channelID, position: newChannelIndex }])
   *   .then(guild => console.log(`Updated channel positions for ${guild}`))
   *   .catch(console.error);
   */
  setChannelPositions(channelPositions) {
    const updatedChannels = channelPositions.map(r => ({
      id: this.client.channels.resolveID(r.channel),
      position: r.position,
    }));

    return this.client.api
      .guilds(this.id)
      .channels.patch({ data: updatedChannels })
      .then(
        () =>
          this.client.actions.GuildChannelsPositionUpdate.handle({
            guild_id: this.id,
            channels: updatedChannels,
          }).guild,
      );
  }

  /**
   * The data needed for updating a guild role's position
   * @typedef {Object} GuildRolePosition
   * @property {RoleResolveable} role The ID of the role
   * @property {number} position The position to update
   */

  /**
   * Batch-updates the guild's role positions
   * @param {GuildRolePosition[]} rolePositions Role positions to update
   * @returns {Promise<Guild>}
   * @example
   * guild.setRolePositions([{ role: roleID, position: updatedRoleIndex }])
   *  .then(guild => console.log(`Role permissions updated for ${guild}`))
   *  .catch(console.error);
   */
  setRolePositions(rolePositions) {
    // Make sure rolePositions are prepared for API
    rolePositions = rolePositions.map(o => ({
      id: this.roles.resolveID(o.role),
      position: o.position,
    }));

    // Call the API to update role positions
    return this.client.api
      .guilds(this.id)
      .roles.patch({
        data: rolePositions,
      })
      .then(
        () =>
          this.client.actions.GuildRolesPositionUpdate.handle({
            guild_id: this.id,
            roles: rolePositions,
          }).guild,
      );
  }

  /**
   * Edits the guild's embed.
   * @param {GuildWidgetData} embed The embed for the guild
   * @param {string} [reason] Reason for changing the guild's embed
   * @returns {Promise<Guild>}
   * @deprecated
   */
  setEmbed(embed, reason) {
    return this.setWidget(embed, reason);
  }

  /**
   * Edits the guild's widget.
   * @param {GuildWidgetData} widget The widget for the guild
   * @param {string} [reason] Reason for changing the guild's widget
   * @returns {Promise<Guild>}
   */
  setWidget(widget, reason) {
    return this.client.api
      .guilds(this.id)
      .widget.patch({
        data: {
          enabled: widget.enabled,
          channel_id: this.channels.resolveID(widget.channel),
        },
        reason,
      })
      .then(() => this);
  }

  /**
   * Leaves the guild.
   * @returns {Promise<Guild>}
   * @example
   * // Leave a guild
   * guild.leave()
   *   .then(g => console.log(`Left the guild ${g}`))
   *   .catch(console.error);
   */
  leave() {
    if (this.ownerID === this.client.user.id) return Promise.reject(new Error('GUILD_OWNED'));
    return this.client.api
      .users('@me')
      .guilds(this.id)
      .delete()
      .then(() => this.client.actions.GuildDelete.handle({ id: this.id }).guild);
  }

  /**
   * Deletes the guild.
   * @returns {Promise<Guild>}
   * @example
   * // Delete a guild
   * guild.delete()
   *   .then(g => console.log(`Deleted the guild ${g}`))
   *   .catch(console.error);
   */
  delete() {
    return this.client.api
      .guilds(this.id)
      .delete()
      .then(() => this.client.actions.GuildDelete.handle({ id: this.id }).guild);
  }

  /**
   * Whether this guild equals another guild. It compares all properties, so for most operations
   * it is advisable to just compare `guild.id === guild2.id` as it is much faster and is often
   * what most users need.
   * @param {Guild} guild The guild to compare with
   * @returns {boolean}
   */
  equals(guild) {
    let equal =
      guild &&
      guild instanceof this.constructor &&
      this.id === guild.id &&
      this.available === guild.available &&
      this.splash === guild.splash &&
      this.discoverySplash === guild.discoverySplash &&
      this.region === guild.region &&
      this.name === guild.name &&
      this.memberCount === guild.memberCount &&
      this.large === guild.large &&
      this.icon === guild.icon &&
      this.ownerID === guild.ownerID &&
      this.verificationLevel === guild.verificationLevel &&
      this.embedEnabled === guild.embedEnabled &&
      (this.features === guild.features ||
        (this.features.length === guild.features.length &&
          this.features.every((feat, i) => feat === guild.features[i])));

    if (equal) {
      if (this.embedChannel) {
        if (!guild.embedChannel || this.embedChannel.id !== guild.embedChannel.id) equal = false;
      } else if (guild.embedChannel) {
        equal = false;
      }
    }

    return equal;
  }

  /**
   * When concatenated with a string, this automatically returns the guild's name instead of the Guild object.
   * @returns {string}
   * @example
   * // Logs: Hello from My Guild!
   * console.log(`Hello from ${guild}!`);
   */
  toString() {
    return this.name;
  }

  toJSON() {
    const json = super.toJSON({
      available: false,
      createdTimestamp: true,
      nameAcronym: true,
      presences: false,
      voiceStates: false,
    });
    json.iconURL = this.iconURL();
    json.splashURL = this.splashURL();
    json.discoverySplashURL = this.discoverySplashURL();
    json.bannerURL = this.bannerURL();
    return json;
  }

  /**
   * Creates a collection of this guild's roles, sorted by their position and IDs.
   * @returns {Collection<Role>}
   * @private
   */
  _sortedRoles() {
    return Util.discordSort(this.roles.cache);
  }

  /**
   * Creates a collection of this guild's or a specific category's channels, sorted by their position and IDs.
   * @param {GuildChannel} [channel] Category to get the channels of
   * @returns {Collection<GuildChannel>}
   * @private
   */
  _sortedChannels(channel) {
    const category = channel.type === ChannelTypes.CATEGORY;
    return Util.discordSort(
      this.channels.cache.filter(
        c =>
          (['text', 'news', 'store'].includes(channel.type)
            ? ['text', 'news', 'store'].includes(c.type)
            : c.type === channel.type) &&
          (category || c.parent === channel.parent),
      ),
    );
  }
}

Guild.prototype.setEmbed = deprecate(Guild.prototype.setEmbed, 'Guild#setEmbed: Use setWidget instead');

Guild.prototype.fetchEmbed = deprecate(Guild.prototype.fetchEmbed, 'Guild#fetchEmbed: Use fetchWidget instead');

Guild.prototype.fetchVanityCode = deprecate(
  Guild.prototype.fetchVanityCode,
  'Guild#fetchVanityCode: Use fetchVanityData() instead',
);

module.exports = Guild;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/GuildAuditLogs.js":
/*!******************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/GuildAuditLogs.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Integration = __webpack_require__(/*! ./Integration */ "./node_modules/discord.js/src/structures/Integration.js");
const Webhook = __webpack_require__(/*! ./Webhook */ "./node_modules/discord.js/src/structures/Webhook.js");
const Collection = __webpack_require__(/*! ../util/Collection */ "./node_modules/discord.js/src/util/Collection.js");
const { PartialTypes } = __webpack_require__(/*! ../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");
const Snowflake = __webpack_require__(/*! ../util/Snowflake */ "./node_modules/discord.js/src/util/Snowflake.js");
const Util = __webpack_require__(/*! ../util/Util */ "./node_modules/discord.js/src/util/Util.js");

/**
 * The target type of an entry, e.g. `GUILD`. Here are the available types:
 * * GUILD
 * * CHANNEL
 * * USER
 * * ROLE
 * * INVITE
 * * WEBHOOK
 * * EMOJI
 * * MESSAGE
 * * INTEGRATION
 * @typedef {string} AuditLogTargetType
 */

/**
 * Key mirror of all available audit log targets.
 * @name GuildAuditLogs.Targets
 * @type {Object<string, string>}
 */
const Targets = {
  ALL: 'ALL',
  GUILD: 'GUILD',
  CHANNEL: 'CHANNEL',
  USER: 'USER',
  ROLE: 'ROLE',
  INVITE: 'INVITE',
  WEBHOOK: 'WEBHOOK',
  EMOJI: 'EMOJI',
  MESSAGE: 'MESSAGE',
  INTEGRATION: 'INTEGRATION',
  UNKNOWN: 'UNKNOWN',
};

/**
 * The action of an entry. Here are the available actions:
 * * ALL: null
 * * GUILD_UPDATE: 1
 * * CHANNEL_CREATE: 10
 * * CHANNEL_UPDATE: 11
 * * CHANNEL_DELETE: 12
 * * CHANNEL_OVERWRITE_CREATE: 13
 * * CHANNEL_OVERWRITE_UPDATE: 14
 * * CHANNEL_OVERWRITE_DELETE: 15
 * * MEMBER_KICK: 20
 * * MEMBER_PRUNE: 21
 * * MEMBER_BAN_ADD: 22
 * * MEMBER_BAN_REMOVE: 23
 * * MEMBER_UPDATE: 24
 * * MEMBER_ROLE_UPDATE: 25
 * * MEMBER_MOVE: 26
 * * MEMBER_DISCONNECT: 27
 * * BOT_ADD: 28,
 * * ROLE_CREATE: 30
 * * ROLE_UPDATE: 31
 * * ROLE_DELETE: 32
 * * INVITE_CREATE: 40
 * * INVITE_UPDATE: 41
 * * INVITE_DELETE: 42
 * * WEBHOOK_CREATE: 50
 * * WEBHOOK_UPDATE: 51
 * * WEBHOOK_DELETE: 52
 * * EMOJI_CREATE: 60
 * * EMOJI_UPDATE: 61
 * * EMOJI_DELETE: 62
 * * MESSAGE_DELETE: 72
 * * MESSAGE_BULK_DELETE: 73
 * * MESSAGE_PIN: 74
 * * MESSAGE_UNPIN: 75
 * * INTEGRATION_CREATE: 80
 * * INTEGRATION_UPDATE: 81
 * * INTEGRATION_DELETE: 82
 * @typedef {?number|string} AuditLogAction
 */

/**
 * All available actions keyed under their names to their numeric values.
 * @name GuildAuditLogs.Actions
 * @type {Object<string, number>}
 */
const Actions = {
  ALL: null,
  GUILD_UPDATE: 1,
  CHANNEL_CREATE: 10,
  CHANNEL_UPDATE: 11,
  CHANNEL_DELETE: 12,
  CHANNEL_OVERWRITE_CREATE: 13,
  CHANNEL_OVERWRITE_UPDATE: 14,
  CHANNEL_OVERWRITE_DELETE: 15,
  MEMBER_KICK: 20,
  MEMBER_PRUNE: 21,
  MEMBER_BAN_ADD: 22,
  MEMBER_BAN_REMOVE: 23,
  MEMBER_UPDATE: 24,
  MEMBER_ROLE_UPDATE: 25,
  MEMBER_MOVE: 26,
  MEMBER_DISCONNECT: 27,
  BOT_ADD: 28,
  ROLE_CREATE: 30,
  ROLE_UPDATE: 31,
  ROLE_DELETE: 32,
  INVITE_CREATE: 40,
  INVITE_UPDATE: 41,
  INVITE_DELETE: 42,
  WEBHOOK_CREATE: 50,
  WEBHOOK_UPDATE: 51,
  WEBHOOK_DELETE: 52,
  EMOJI_CREATE: 60,
  EMOJI_UPDATE: 61,
  EMOJI_DELETE: 62,
  MESSAGE_DELETE: 72,
  MESSAGE_BULK_DELETE: 73,
  MESSAGE_PIN: 74,
  MESSAGE_UNPIN: 75,
  INTEGRATION_CREATE: 80,
  INTEGRATION_UPDATE: 81,
  INTEGRATION_DELETE: 82,
};

/**
 * Audit logs entries are held in this class.
 */
class GuildAuditLogs {
  constructor(guild, data) {
    if (data.users) for (const user of data.users) guild.client.users.add(user);
    /**
     * Cached webhooks
     * @type {Collection<Snowflake, Webhook>}
     * @private
     */
    this.webhooks = new Collection();
    if (data.webhooks) {
      for (const hook of data.webhooks) {
        this.webhooks.set(hook.id, new Webhook(guild.client, hook));
      }
    }

    /**
     * Cached integrations
     * @type {Collection<Snowflake, Integration>}
     * @private
     */
    this.integrations = new Collection();
    if (data.integrations) {
      for (const integration of data.integrations) {
        this.integrations.set(integration.id, new Integration(guild.client, integration, guild));
      }
    }

    /**
     * The entries for this guild's audit logs
     * @type {Collection<Snowflake, GuildAuditLogsEntry>}
     */
    this.entries = new Collection();
    for (const item of data.audit_log_entries) {
      const entry = new GuildAuditLogsEntry(this, guild, item);
      this.entries.set(entry.id, entry);
    }
  }

  /**
   * Handles possible promises for entry targets.
   * @returns {Promise<GuildAuditLogs>}
   */
  static build(...args) {
    const logs = new GuildAuditLogs(...args);
    return Promise.all(logs.entries.map(e => e.target)).then(() => logs);
  }

  /**
   * The target of an entry. It can be one of:
   * * A guild
   * * A user
   * * A role
   * * An emoji
   * * An invite
   * * A webhook
   * * An integration
   * * An object with an id key if target was deleted
   * * An object where the keys represent either the new value or the old value
   * @typedef {?Object|Guild|User|Role|GuildEmoji|Invite|Webhook|Integration} AuditLogEntryTarget
   */

  /**
   * Finds the target type from the entry action.
   * @param {AuditLogAction} target The action target
   * @returns {AuditLogTargetType}
   */
  static targetType(target) {
    if (target < 10) return Targets.GUILD;
    if (target < 20) return Targets.CHANNEL;
    if (target < 30) return Targets.USER;
    if (target < 40) return Targets.ROLE;
    if (target < 50) return Targets.INVITE;
    if (target < 60) return Targets.WEBHOOK;
    if (target < 70) return Targets.EMOJI;
    if (target < 80) return Targets.MESSAGE;
    if (target < 90) return Targets.INTEGRATION;
    return Targets.UNKNOWN;
  }

  /**
   * The action type of an entry, e.g. `CREATE`. Here are the available types:
   * * CREATE
   * * DELETE
   * * UPDATE
   * * ALL
   * @typedef {string} AuditLogActionType
   */

  /**
   * Finds the action type from the entry action.
   * @param {AuditLogAction} action The action target
   * @returns {AuditLogActionType}
   */
  static actionType(action) {
    if (
      [
        Actions.CHANNEL_CREATE,
        Actions.CHANNEL_OVERWRITE_CREATE,
        Actions.MEMBER_BAN_REMOVE,
        Actions.BOT_ADD,
        Actions.ROLE_CREATE,
        Actions.INVITE_CREATE,
        Actions.WEBHOOK_CREATE,
        Actions.EMOJI_CREATE,
        Actions.MESSAGE_PIN,
        Actions.INTEGRATION_CREATE,
      ].includes(action)
    ) {
      return 'CREATE';
    }

    if (
      [
        Actions.CHANNEL_DELETE,
        Actions.CHANNEL_OVERWRITE_DELETE,
        Actions.MEMBER_KICK,
        Actions.MEMBER_PRUNE,
        Actions.MEMBER_BAN_ADD,
        Actions.MEMBER_DISCONNECT,
        Actions.ROLE_DELETE,
        Actions.INVITE_DELETE,
        Actions.WEBHOOK_DELETE,
        Actions.EMOJI_DELETE,
        Actions.MESSAGE_DELETE,
        Actions.MESSAGE_BULK_DELETE,
        Actions.MESSAGE_UNPIN,
        Actions.INTEGRATION_DELETE,
      ].includes(action)
    ) {
      return 'DELETE';
    }

    if (
      [
        Actions.GUILD_UPDATE,
        Actions.CHANNEL_UPDATE,
        Actions.CHANNEL_OVERWRITE_UPDATE,
        Actions.MEMBER_UPDATE,
        Actions.MEMBER_ROLE_UPDATE,
        Actions.MEMBER_MOVE,
        Actions.ROLE_UPDATE,
        Actions.INVITE_UPDATE,
        Actions.WEBHOOK_UPDATE,
        Actions.EMOJI_UPDATE,
        Actions.INTEGRATION_UPDATE,
      ].includes(action)
    ) {
      return 'UPDATE';
    }

    return 'ALL';
  }

  toJSON() {
    return Util.flatten(this);
  }
}

/**
 * Audit logs entry.
 */
class GuildAuditLogsEntry {
  constructor(logs, guild, data) {
    const targetType = GuildAuditLogs.targetType(data.action_type);
    /**
     * The target type of this entry
     * @type {AuditLogTargetType}
     */
    this.targetType = targetType;

    /**
     * The action type of this entry
     * @type {AuditLogActionType}
     */
    this.actionType = GuildAuditLogs.actionType(data.action_type);

    /**
     * Specific action type of this entry in its string presentation
     * @type {AuditLogAction}
     */
    this.action = Object.keys(Actions).find(k => Actions[k] === data.action_type);

    /**
     * The reason of this entry
     * @type {?string}
     */
    this.reason = data.reason || null;

    /**
     * The user that executed this entry
     * @type {User}
     */
    this.executor = guild.client.options.partials.includes(PartialTypes.USER)
      ? guild.client.users.add({ id: data.user_id })
      : guild.client.users.cache.get(data.user_id);

    /**
     * An entry in the audit log representing a specific change.
     * @typedef {object} AuditLogChange
     * @property {string} key The property that was changed, e.g. `nick` for nickname changes
     * @property {*} [old] The old value of the change, e.g. for nicknames, the old nickname
     * @property {*} [new] The new value of the change, e.g. for nicknames, the new nickname
     */

    /**
     * Specific property changes
     * @type {AuditLogChange[]}
     */
    this.changes = data.changes ? data.changes.map(c => ({ key: c.key, old: c.old_value, new: c.new_value })) : null;

    /**
     * The ID of this entry
     * @type {Snowflake}
     */
    this.id = data.id;

    /**
     * Any extra data from the entry
     * @type {?Object|Role|GuildMember}
     */
    this.extra = null;
    switch (data.action_type) {
      case Actions.MEMBER_PRUNE:
        this.extra = {
          removed: Number(data.options.members_removed),
          days: Number(data.options.delete_member_days),
        };
        break;

      case Actions.MEMBER_MOVE:
      case Actions.MESSAGE_DELETE:
      case Actions.MESSAGE_BULK_DELETE:
        this.extra = {
          channel: guild.channels.cache.get(data.options.channel_id) || { id: data.options.channel_id },
          count: Number(data.options.count),
        };
        break;

      case Actions.MESSAGE_PIN:
      case Actions.MESSAGE_UNPIN:
        this.extra = {
          channel: guild.client.channels.cache.get(data.options.channel_id) || { id: data.options.channel_id },
          messageID: data.options.message_id,
        };
        break;

      case Actions.MEMBER_DISCONNECT:
        this.extra = {
          count: Number(data.options.count),
        };
        break;

      case Actions.CHANNEL_OVERWRITE_CREATE:
      case Actions.CHANNEL_OVERWRITE_UPDATE:
      case Actions.CHANNEL_OVERWRITE_DELETE:
        switch (data.options.type) {
          case 'member':
            this.extra = guild.members.cache.get(data.options.id) || { id: data.options.id, type: 'member' };
            break;

          case 'role':
            this.extra = guild.roles.cache.get(data.options.id) || {
              id: data.options.id,
              name: data.options.role_name,
              type: 'role',
            };
            break;

          default:
            break;
        }
        break;

      default:
        break;
    }

    /**
     * The target of this entry
     * @type {?AuditLogEntryTarget}
     */
    this.target = null;
    if (targetType === Targets.UNKNOWN) {
      this.target = this.changes.reduce((o, c) => {
        o[c.key] = c.new || c.old;
        return o;
      }, {});
      this.target.id = data.target_id;
      // MEMBER_DISCONNECT and similar types do not provide a target_id.
    } else if (targetType === Targets.USER && data.target_id) {
      this.target = guild.client.options.partials.includes(PartialTypes.USER)
        ? guild.client.users.add({ id: data.target_id })
        : guild.client.users.cache.get(data.target_id);
    } else if (targetType === Targets.GUILD) {
      this.target = guild.client.guilds.cache.get(data.target_id);
    } else if (targetType === Targets.WEBHOOK) {
      this.target =
        logs.webhooks.get(data.target_id) ||
        new Webhook(
          guild.client,
          this.changes.reduce(
            (o, c) => {
              o[c.key] = c.new || c.old;
              return o;
            },
            {
              id: data.target_id,
              guild_id: guild.id,
            },
          ),
        );
    } else if (targetType === Targets.INVITE) {
      this.target = guild.members.fetch(guild.client.user.id).then(me => {
        if (me.permissions.has('MANAGE_GUILD')) {
          const change = this.changes.find(c => c.key === 'code');
          return guild.fetchInvites().then(invites => {
            this.target = invites.find(i => i.code === (change.new || change.old));
          });
        } else {
          this.target = this.changes.reduce((o, c) => {
            o[c.key] = c.new || c.old;
            return o;
          }, {});
          return this.target;
        }
      });
    } else if (targetType === Targets.MESSAGE) {
      // Discord sends a channel id for the MESSAGE_BULK_DELETE action type.
      this.target =
        data.action_type === Actions.MESSAGE_BULK_DELETE
          ? guild.channels.cache.get(data.target_id) || { id: data.target_id }
          : guild.client.users.cache.get(data.target_id);
    } else if (targetType === Targets.INTEGRATION) {
      this.target =
        logs.integrations.get(data.target_id) ||
        new Integration(
          guild.client,
          this.changes.reduce(
            (o, c) => {
              o[c.key] = c.new || c.old;
              return o;
            },
            { id: data.target_id },
          ),
          guild,
        );
    } else if (data.target_id) {
      this.target = guild[`${targetType.toLowerCase()}s`].cache.get(data.target_id) || { id: data.target_id };
    }
  }

  /**
   * The timestamp this entry was created at
   * @type {number}
   * @readonly
   */
  get createdTimestamp() {
    return Snowflake.deconstruct(this.id).timestamp;
  }

  /**
   * The time this entry was created at
   * @type {Date}
   * @readonly
   */
  get createdAt() {
    return new Date(this.createdTimestamp);
  }

  toJSON() {
    return Util.flatten(this, { createdTimestamp: true });
  }
}

GuildAuditLogs.Actions = Actions;
GuildAuditLogs.Targets = Targets;
GuildAuditLogs.Entry = GuildAuditLogsEntry;

module.exports = GuildAuditLogs;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/GuildChannel.js":
/*!****************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/GuildChannel.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Channel = __webpack_require__(/*! ./Channel */ "./node_modules/discord.js/src/structures/Channel.js");
const Invite = __webpack_require__(/*! ./Invite */ "./node_modules/discord.js/src/structures/Invite.js");
const PermissionOverwrites = __webpack_require__(/*! ./PermissionOverwrites */ "./node_modules/discord.js/src/structures/PermissionOverwrites.js");
const Role = __webpack_require__(/*! ./Role */ "./node_modules/discord.js/src/structures/Role.js");
const { Error, TypeError } = __webpack_require__(/*! ../errors */ "./node_modules/discord.js/src/errors/index.js");
const Collection = __webpack_require__(/*! ../util/Collection */ "./node_modules/discord.js/src/util/Collection.js");
const Permissions = __webpack_require__(/*! ../util/Permissions */ "./node_modules/discord.js/src/util/Permissions.js");
const Util = __webpack_require__(/*! ../util/Util */ "./node_modules/discord.js/src/util/Util.js");

/**
 * Represents a guild channel from any of the following:
 * - {@link TextChannel}
 * - {@link VoiceChannel}
 * - {@link CategoryChannel}
 * - {@link NewsChannel}
 * - {@link StoreChannel}
 * @extends {Channel}
 * @abstract
 */
class GuildChannel extends Channel {
  /**
   * @param {Guild} guild The guild the guild channel is part of
   * @param {Object} data The data for the guild channel
   */
  constructor(guild, data) {
    super(guild.client, data);

    /**
     * The guild the channel is in
     * @type {Guild}
     */
    this.guild = guild;
  }

  _patch(data) {
    super._patch(data);

    /**
     * The name of the guild channel
     * @type {string}
     */
    this.name = data.name;

    /**
     * The raw position of the channel from discord
     * @type {number}
     */
    this.rawPosition = data.position;

    /**
     * The ID of the category parent of this channel
     * @type {?Snowflake}
     */
    this.parentID = data.parent_id || null;

    /**
     * A map of permission overwrites in this channel for roles and users
     * @type {Collection<Snowflake, PermissionOverwrites>}
     */
    this.permissionOverwrites = new Collection();
    if (data.permission_overwrites) {
      for (const overwrite of data.permission_overwrites) {
        this.permissionOverwrites.set(overwrite.id, new PermissionOverwrites(this, overwrite));
      }
    }
  }

  /**
   * The category parent of this channel
   * @type {?CategoryChannel}
   * @readonly
   */
  get parent() {
    return this.guild.channels.cache.get(this.parentID) || null;
  }

  /**
   * If the permissionOverwrites match the parent channel, null if no parent
   * @type {?boolean}
   * @readonly
   */
  get permissionsLocked() {
    if (!this.parent) return null;
    if (this.permissionOverwrites.size !== this.parent.permissionOverwrites.size) return false;
    return this.permissionOverwrites.every((value, key) => {
      const testVal = this.parent.permissionOverwrites.get(key);
      return (
        testVal !== undefined &&
        testVal.deny.bitfield === value.deny.bitfield &&
        testVal.allow.bitfield === value.allow.bitfield
      );
    });
  }

  /**
   * The position of the channel
   * @type {number}
   * @readonly
   */
  get position() {
    const sorted = this.guild._sortedChannels(this);
    return sorted.array().indexOf(sorted.get(this.id));
  }

  /**
   * Gets the overall set of permissions for a member or role in this channel, taking into account channel overwrites.
   * @param {GuildMemberResolvable|RoleResolvable} memberOrRole The member or role to obtain the overall permissions for
   * @returns {?Readonly<Permissions>}
   */
  permissionsFor(memberOrRole) {
    const member = this.guild.members.resolve(memberOrRole);
    if (member) return this.memberPermissions(member);
    const role = this.guild.roles.resolve(memberOrRole);
    if (role) return this.rolePermissions(role);
    return null;
  }

  overwritesFor(member, verified = false, roles = null) {
    if (!verified) member = this.guild.members.resolve(member);
    if (!member) return [];

    roles = roles || member.roles.cache;
    const roleOverwrites = [];
    let memberOverwrites;
    let everyoneOverwrites;

    for (const overwrite of this.permissionOverwrites.values()) {
      if (overwrite.id === this.guild.id) {
        everyoneOverwrites = overwrite;
      } else if (roles.has(overwrite.id)) {
        roleOverwrites.push(overwrite);
      } else if (overwrite.id === member.id) {
        memberOverwrites = overwrite;
      }
    }

    return {
      everyone: everyoneOverwrites,
      roles: roleOverwrites,
      member: memberOverwrites,
    };
  }

  /**
   * Gets the overall set of permissions for a member in this channel, taking into account channel overwrites.
   * @param {GuildMember} member The member to obtain the overall permissions for
   * @returns {Readonly<Permissions>}
   * @private
   */
  memberPermissions(member) {
    if (member.id === this.guild.ownerID) return new Permissions(Permissions.ALL).freeze();

    const roles = member.roles.cache;
    const permissions = new Permissions(roles.map(role => role.permissions));

    if (permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return new Permissions(Permissions.ALL).freeze();

    const overwrites = this.overwritesFor(member, true, roles);

    return permissions
      .remove(overwrites.everyone ? overwrites.everyone.deny : 0)
      .add(overwrites.everyone ? overwrites.everyone.allow : 0)
      .remove(overwrites.roles.length > 0 ? overwrites.roles.map(role => role.deny) : 0)
      .add(overwrites.roles.length > 0 ? overwrites.roles.map(role => role.allow) : 0)
      .remove(overwrites.member ? overwrites.member.deny : 0)
      .add(overwrites.member ? overwrites.member.allow : 0)
      .freeze();
  }

  /**
   * Gets the overall set of permissions for a role in this channel, taking into account channel overwrites.
   * @param {Role} role The role to obtain the overall permissions for
   * @returns {Readonly<Permissions>}
   * @private
   */
  rolePermissions(role) {
    if (role.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return new Permissions(Permissions.ALL).freeze();

    const everyoneOverwrites = this.permissionOverwrites.get(this.guild.id);
    const roleOverwrites = this.permissionOverwrites.get(role.id);

    return role.permissions
      .remove(everyoneOverwrites ? everyoneOverwrites.deny : 0)
      .add(everyoneOverwrites ? everyoneOverwrites.allow : 0)
      .remove(roleOverwrites ? roleOverwrites.deny : 0)
      .add(roleOverwrites ? roleOverwrites.allow : 0)
      .freeze();
  }

  /**
   * Replaces the permission overwrites in this channel.
   * @param {OverwriteResolvable[]|Collection<Snowflake, OverwriteResolvable>} overwrites
   * Permission overwrites the channel gets updated with
   * @param {string} [reason] Reason for updating the channel overwrites
   * @returns {Promise<GuildChannel>}
   * @example
   * channel.overwritePermissions([
   *   {
   *      id: message.author.id,
   *      deny: ['VIEW_CHANNEL'],
   *   },
   * ], 'Needed to change permissions');
   */
  overwritePermissions(overwrites, reason) {
    if (!Array.isArray(overwrites) && !(overwrites instanceof Collection)) {
      return Promise.reject(
        new TypeError('INVALID_TYPE', 'overwrites', 'Array or Collection of Permission Overwrites', true),
      );
    }
    return this.edit({ permissionOverwrites: overwrites, reason }).then(() => this);
  }

  /**
   * Updates Overwrites for a user or role in this channel. (creates if non-existent)
   * @param {RoleResolvable|UserResolvable} userOrRole The user or role to update
   * @param {PermissionOverwriteOptions} options The options for the update
   * @param {string} [reason] Reason for creating/editing this overwrite
   * @returns {Promise<GuildChannel>}
   * @example
   * // Update or Create permission overwrites for a message author
   * message.channel.updateOverwrite(message.author, {
   *   SEND_MESSAGES: false
   * })
   *   .then(channel => console.log(channel.permissionOverwrites.get(message.author.id)))
   *   .catch(console.error);
   */
  updateOverwrite(userOrRole, options, reason) {
    userOrRole = this.guild.roles.resolve(userOrRole) || this.client.users.resolve(userOrRole);
    if (!userOrRole) return Promise.reject(new TypeError('INVALID_TYPE', 'parameter', 'User nor a Role'));

    const existing = this.permissionOverwrites.get(userOrRole.id);
    if (existing) return existing.update(options, reason).then(() => this);
    return this.createOverwrite(userOrRole, options, reason);
  }

  /**
   * Overwrites the permissions for a user or role in this channel. (replaces if existent)
   * @param {RoleResolvable|UserResolvable} userOrRole The user or role to update
   * @param {PermissionOverwriteOptions} options The options for the update
   * @param {string} [reason] Reason for creating/editing this overwrite
   * @returns {Promise<GuildChannel>}
   * @example
   * // Create or Replace permissions overwrites for a message author
   * message.channel.createOverwrite(message.author, {
   *   SEND_MESSAGES: false
   * })
   *   .then(channel => console.log(channel.permissionOverwrites.get(message.author.id)))
   *   .catch(console.error);
   */
  createOverwrite(userOrRole, options, reason) {
    userOrRole = this.guild.roles.resolve(userOrRole) || this.client.users.resolve(userOrRole);
    if (!userOrRole) return Promise.reject(new TypeError('INVALID_TYPE', 'parameter', 'User nor a Role'));

    const type = userOrRole instanceof Role ? 'role' : 'member';
    const { allow, deny } = PermissionOverwrites.resolveOverwriteOptions(options);

    return this.client.api
      .channels(this.id)
      .permissions[userOrRole.id].put({
        data: { id: userOrRole.id, type, allow: allow.bitfield, deny: deny.bitfield },
        reason,
      })
      .then(() => this);
  }

  /**
   * Locks in the permission overwrites from the parent channel.
   * @returns {Promise<GuildChannel>}
   */
  lockPermissions() {
    if (!this.parent) return Promise.reject(new Error('GUILD_CHANNEL_ORPHAN'));
    const permissionOverwrites = this.parent.permissionOverwrites.map(overwrite => overwrite.toJSON());
    return this.edit({ permissionOverwrites });
  }

  /**
   * A collection of members that can see this channel, mapped by their ID
   * @type {Collection<Snowflake, GuildMember>}
   * @readonly
   */
  get members() {
    const members = new Collection();
    for (const member of this.guild.members.cache.values()) {
      if (this.permissionsFor(member).has('VIEW_CHANNEL', false)) {
        members.set(member.id, member);
      }
    }
    return members;
  }

  /**
   * The data for a guild channel.
   * @typedef {Object} ChannelData
   * @property {string} [name] The name of the channel
   * @property {number} [position] The position of the channel
   * @property {string} [topic] The topic of the text channel
   * @property {boolean} [nsfw] Whether the channel is NSFW
   * @property {number} [bitrate] The bitrate of the voice channel
   * @property {number} [userLimit] The user limit of the voice channel
   * @property {?Snowflake} [parentID] The parent ID of the channel
   * @property {boolean} [lockPermissions]
   * Lock the permissions of the channel to what the parent's permissions are
   * @property {OverwriteResolvable[]|Collection<Snowflake, OverwriteResolvable>} [permissionOverwrites]
   * Permission overwrites for the channel
   * @property {number} [rateLimitPerUser] The ratelimit per user for the channel in seconds
   */

  /**
   * Edits the channel.
   * @param {ChannelData} data The new data for the channel
   * @param {string} [reason] Reason for editing this channel
   * @returns {Promise<GuildChannel>}
   * @example
   * // Edit a channel
   * channel.edit({ name: 'new-channel' })
   *   .then(console.log)
   *   .catch(console.error);
   */
  async edit(data, reason) {
    if (typeof data.position !== 'undefined') {
      await Util.setPosition(
        this,
        data.position,
        false,
        this.guild._sortedChannels(this),
        this.client.api.guilds(this.guild.id).channels,
        reason,
      ).then(updatedChannels => {
        this.client.actions.GuildChannelsPositionUpdate.handle({
          guild_id: this.guild.id,
          channels: updatedChannels,
        });
      });
    }

    let permission_overwrites;

    if (data.permissionOverwrites) {
      permission_overwrites = data.permissionOverwrites.map(o => PermissionOverwrites.resolve(o, this.guild));
    }

    if (data.lockPermissions) {
      if (data.parentID) {
        const newParent = this.guild.channels.resolve(data.parentID);
        if (newParent && newParent.type === 'category') {
          permission_overwrites = newParent.permissionOverwrites.map(o => PermissionOverwrites.resolve(o, this.guild));
        }
      } else if (this.parent) {
        permission_overwrites = this.parent.permissionOverwrites.map(o => PermissionOverwrites.resolve(o, this.guild));
      }
    }

    const newData = await this.client.api.channels(this.id).patch({
      data: {
        name: (data.name || this.name).trim(),
        topic: data.topic,
        nsfw: data.nsfw,
        bitrate: data.bitrate || this.bitrate,
        user_limit: typeof data.userLimit !== 'undefined' ? data.userLimit : this.userLimit,
        parent_id: data.parentID,
        lock_permissions: data.lockPermissions,
        rate_limit_per_user: data.rateLimitPerUser,
        permission_overwrites,
      },
      reason,
    });

    const clone = this._clone();
    clone._patch(newData);
    return clone;
  }

  /**
   * Sets a new name for the guild channel.
   * @param {string} name The new name for the guild channel
   * @param {string} [reason] Reason for changing the guild channel's name
   * @returns {Promise<GuildChannel>}
   * @example
   * // Set a new channel name
   * channel.setName('not_general')
   *   .then(newChannel => console.log(`Channel's new name is ${newChannel.name}`))
   *   .catch(console.error);
   */
  setName(name, reason) {
    return this.edit({ name }, reason);
  }

  /**
   * Sets the category parent of this channel.
   * @param {?CategoryChannel|Snowflake} channel Parent channel
   * @param {Object} [options={}] Options to pass
   * @param {boolean} [options.lockPermissions=true] Lock the permissions to what the parent's permissions are
   * @param {string} [options.reason] Reason for modifying the parent of this channel
   * @returns {Promise<GuildChannel>}
   * @example
   * // Add a parent to a channel
   * message.channel.setParent('355908108431917066', { lockPermissions: false })
   *   .then(channel => console.log(`New parent of ${message.channel.name}: ${channel.name}`))
   *   .catch(console.error);
   */
  setParent(channel, { lockPermissions = true, reason } = {}) {
    return this.edit(
      {
        // eslint-disable-next-line no-prototype-builtins
        parentID: channel !== null ? (channel.hasOwnProperty('id') ? channel.id : channel) : null,
        lockPermissions,
      },
      reason,
    );
  }

  /**
   * Sets a new topic for the guild channel.
   * @param {?string} topic The new topic for the guild channel
   * @param {string} [reason] Reason for changing the guild channel's topic
   * @returns {Promise<GuildChannel>}
   * @example
   * // Set a new channel topic
   * channel.setTopic('needs more rate limiting')
   *   .then(newChannel => console.log(`Channel's new topic is ${newChannel.topic}`))
   *   .catch(console.error);
   */
  setTopic(topic, reason) {
    return this.edit({ topic }, reason);
  }

  /**
   * Sets a new position for the guild channel.
   * @param {number} position The new position for the guild channel
   * @param {Object} [options] Options for setting position
   * @param {boolean} [options.relative=false] Change the position relative to its current value
   * @param {string} [options.reason] Reason for changing the position
   * @returns {Promise<GuildChannel>}
   * @example
   * // Set a new channel position
   * channel.setPosition(2)
   *   .then(newChannel => console.log(`Channel's new position is ${newChannel.position}`))
   *   .catch(console.error);
   */
  setPosition(position, { relative, reason } = {}) {
    return Util.setPosition(
      this,
      position,
      relative,
      this.guild._sortedChannels(this),
      this.client.api.guilds(this.guild.id).channels,
      reason,
    ).then(updatedChannels => {
      this.client.actions.GuildChannelsPositionUpdate.handle({
        guild_id: this.guild.id,
        channels: updatedChannels,
      });
      return this;
    });
  }

  /**
   * Creates an invite to this guild channel.
   * @param {Object} [options={}] Options for the invite
   * @param {boolean} [options.temporary=false] Whether members that joined via the invite should be automatically
   * kicked after 24 hours if they have not yet received a role
   * @param {number} [options.maxAge=86400] How long the invite should last (in seconds, 0 for forever)
   * @param {number} [options.maxUses=0] Maximum number of uses
   * @param {boolean} [options.unique=false] Create a unique invite, or use an existing one with similar settings
   * @param {string} [options.reason] Reason for creating this
   * @returns {Promise<Invite>}
   * @example
   * // Create an invite to a channel
   * channel.createInvite()
   *   .then(invite => console.log(`Created an invite with a code of ${invite.code}`))
   *   .catch(console.error);
   */
  createInvite({ temporary = false, maxAge = 86400, maxUses = 0, unique, reason } = {}) {
    return this.client.api
      .channels(this.id)
      .invites.post({
        data: {
          temporary,
          max_age: maxAge,
          max_uses: maxUses,
          unique,
        },
        reason,
      })
      .then(invite => new Invite(this.client, invite));
  }

  /**
   * Fetches a collection of invites to this guild channel.
   * Resolves with a collection mapping invites by their codes.
   * @returns {Promise<Collection<string, Invite>>}
   */
  async fetchInvites() {
    const inviteItems = await this.client.api.channels(this.id).invites.get();
    const invites = new Collection();
    for (const inviteItem of inviteItems) {
      const invite = new Invite(this.client, inviteItem);
      invites.set(invite.code, invite);
    }
    return invites;
  }

  /* eslint-disable max-len */
  /**
   * Clones this channel.
   * @param {Object} [options] The options
   * @param {string} [options.name=this.name] Name of the new channel
   * @param {OverwriteResolvable[]|Collection<Snowflake, OverwriteResolvable>} [options.permissionOverwrites=this.permissionOverwrites]
   * Permission overwrites of the new channel
   * @param {string} [options.type=this.type] Type of the new channel
   * @param {string} [options.topic=this.topic] Topic of the new channel (only text)
   * @param {boolean} [options.nsfw=this.nsfw] Whether the new channel is nsfw (only text)
   * @param {number} [options.bitrate=this.bitrate] Bitrate of the new channel in bits (only voice)
   * @param {number} [options.userLimit=this.userLimit] Maximum amount of users allowed in the new channel (only voice)
   * @param {number} [options.rateLimitPerUser=this.rateLimitPerUser] Ratelimit per user for the new channel (only text)
   * @param {ChannelResolvable} [options.parent=this.parent] Parent of the new channel
   * @param {string} [options.reason] Reason for cloning this channel
   * @returns {Promise<GuildChannel>}
   */
  clone(options = {}) {
    Util.mergeDefault(
      {
        name: this.name,
        permissionOverwrites: this.permissionOverwrites,
        topic: this.topic,
        type: this.type,
        nsfw: this.nsfw,
        parent: this.parent,
        bitrate: this.bitrate,
        userLimit: this.userLimit,
        rateLimitPerUser: this.rateLimitPerUser,
        reason: null,
      },
      options,
    );
    return this.guild.channels.create(options.name, options);
  }
  /* eslint-enable max-len */

  /**
   * Checks if this channel has the same type, topic, position, name, overwrites and ID as another channel.
   * In most cases, a simple `channel.id === channel2.id` will do, and is much faster too.
   * @param {GuildChannel} channel Channel to compare with
   * @returns {boolean}
   */
  equals(channel) {
    let equal =
      channel &&
      this.id === channel.id &&
      this.type === channel.type &&
      this.topic === channel.topic &&
      this.position === channel.position &&
      this.name === channel.name;

    if (equal) {
      if (this.permissionOverwrites && channel.permissionOverwrites) {
        equal = this.permissionOverwrites.equals(channel.permissionOverwrites);
      } else {
        equal = !this.permissionOverwrites && !channel.permissionOverwrites;
      }
    }

    return equal;
  }

  /**
   * Whether the channel is deletable by the client user
   * @type {boolean}
   * @readonly
   */
  get deletable() {
    return this.permissionsFor(this.client.user).has(Permissions.FLAGS.MANAGE_CHANNELS, false);
  }

  /**
   * Whether the channel is manageable by the client user
   * @type {boolean}
   * @readonly
   */
  get manageable() {
    if (this.client.user.id === this.guild.ownerID) return true;
    if (this.type === 'voice') {
      if (!this.permissionsFor(this.client.user).has(Permissions.FLAGS.CONNECT, false)) {
        return false;
      }
    } else if (!this.viewable) {
      return false;
    }
    return this.permissionsFor(this.client.user).has(Permissions.FLAGS.MANAGE_CHANNELS, false);
  }

  /**
   * Whether the channel is viewable by the client user
   * @type {boolean}
   * @readonly
   */
  get viewable() {
    if (this.client.user.id === this.guild.ownerID) return true;
    const permissions = this.permissionsFor(this.client.user);
    if (!permissions) return false;
    return permissions.has(Permissions.FLAGS.VIEW_CHANNEL, false);
  }

  /**
   * Deletes this channel.
   * @param {string} [reason] Reason for deleting this channel
   * @returns {Promise<GuildChannel>}
   * @example
   * // Delete the channel
   * channel.delete('making room for new channels')
   *   .then(console.log)
   *   .catch(console.error);
   */
  delete(reason) {
    return this.client.api
      .channels(this.id)
      .delete({ reason })
      .then(() => this);
  }
}

module.exports = GuildChannel;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/GuildEmoji.js":
/*!**************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/GuildEmoji.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const BaseGuildEmoji = __webpack_require__(/*! ./BaseGuildEmoji */ "./node_modules/discord.js/src/structures/BaseGuildEmoji.js");
const { Error } = __webpack_require__(/*! ../errors */ "./node_modules/discord.js/src/errors/index.js");
const GuildEmojiRoleManager = __webpack_require__(/*! ../managers/GuildEmojiRoleManager */ "./node_modules/discord.js/src/managers/GuildEmojiRoleManager.js");
const Permissions = __webpack_require__(/*! ../util/Permissions */ "./node_modules/discord.js/src/util/Permissions.js");

/**
 * Represents a custom emoji.
 * @extends {BaseGuildEmoji}
 */
class GuildEmoji extends BaseGuildEmoji {
  /**
   * @param {Client} client The instantiating client
   * @param {Object} data The data for the guild emoji
   * @param {Guild} guild The guild the guild emoji is part of
   */
  constructor(client, data, guild) {
    super(client, data, guild);

    /**
     * The user who created this emoji
     * @type {?User}
     */
    this.author = null;
  }

  /**
   * The guild this emoji is part of
   * @type {Guild}
   * @name GuildEmoji#guild
   */

  _clone() {
    const clone = super._clone();
    clone._roles = this._roles.slice();
    return clone;
  }

  _patch(data) {
    super._patch(data);
    if (typeof data.user !== 'undefined') this.author = this.client.users.add(data.user);
  }

  /**
   * Whether the emoji is deletable by the client user
   * @type {boolean}
   * @readonly
   */
  get deletable() {
    if (!this.guild.me) throw new Error('GUILD_UNCACHED_ME');
    return !this.managed && this.guild.me.hasPermission(Permissions.FLAGS.MANAGE_EMOJIS);
  }

  /**
   * A manager for roles this emoji is active for.
   * @type {GuildEmojiRoleManager}
   * @readonly
   */
  get roles() {
    return new GuildEmojiRoleManager(this);
  }

  /**
   * Fetches the author for this emoji
   * @returns {Promise<User>}
   */
  async fetchAuthor() {
    if (this.managed) {
      throw new Error('EMOJI_MANAGED');
    } else {
      if (!this.guild.me) throw new Error('GUILD_UNCACHED_ME');
      if (!this.guild.me.permissions.has(Permissions.FLAGS.MANAGE_EMOJIS)) {
        throw new Error('MISSING_MANAGE_EMOJIS_PERMISSION', this.guild);
      }
    }
    const data = await this.client.api.guilds(this.guild.id).emojis(this.id).get();
    this._patch(data);
    return this.author;
  }

  /**
   * Data for editing an emoji.
   * @typedef {Object} GuildEmojiEditData
   * @property {string} [name] The name of the emoji
   * @property {Collection<Snowflake, Role>|RoleResolvable[]} [roles] Roles to restrict emoji to
   */

  /**
   * Edits the emoji.
   * @param {GuildEmojiEditData} data The new data for the emoji
   * @param {string} [reason] Reason for editing this emoji
   * @returns {Promise<GuildEmoji>}
   * @example
   * // Edit an emoji
   * emoji.edit({ name: 'newemoji' })
   *   .then(e => console.log(`Edited emoji ${e}`))
   *   .catch(console.error);
   */
  edit(data, reason) {
    const roles = data.roles ? data.roles.map(r => r.id || r) : undefined;
    return this.client.api
      .guilds(this.guild.id)
      .emojis(this.id)
      .patch({
        data: {
          name: data.name,
          roles,
        },
        reason,
      })
      .then(newData => {
        const clone = this._clone();
        clone._patch(newData);
        return clone;
      });
  }

  /**
   * Sets the name of the emoji.
   * @param {string} name The new name for the emoji
   * @param {string} [reason] Reason for changing the emoji's name
   * @returns {Promise<GuildEmoji>}
   */
  setName(name, reason) {
    return this.edit({ name }, reason);
  }

  /**
   * Deletes the emoji.
   * @param {string} [reason] Reason for deleting the emoji
   * @returns {Promise<GuildEmoji>}
   */
  delete(reason) {
    return this.client.api
      .guilds(this.guild.id)
      .emojis(this.id)
      .delete({ reason })
      .then(() => this);
  }

  /**
   * Whether this emoji is the same as another one.
   * @param {GuildEmoji|Object} other The emoji to compare it to
   * @returns {boolean} Whether the emoji is equal to the given emoji or not
   */
  equals(other) {
    if (other instanceof GuildEmoji) {
      return (
        other.id === this.id &&
        other.name === this.name &&
        other.managed === this.managed &&
        other.requiresColons === this.requiresColons &&
        other.roles.cache.size === this.roles.cache.size &&
        other.roles.cache.every(role => this.roles.cache.has(role.id))
      );
    } else {
      return (
        other.id === this.id &&
        other.name === this.name &&
        other.roles.length === this.roles.cache.size &&
        other.roles.every(role => this.roles.cache.has(role))
      );
    }
  }
}

module.exports = GuildEmoji;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/GuildMember.js":
/*!***************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/GuildMember.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Base = __webpack_require__(/*! ./Base */ "./node_modules/discord.js/src/structures/Base.js");
const Role = __webpack_require__(/*! ./Role */ "./node_modules/discord.js/src/structures/Role.js");
const TextBasedChannel = __webpack_require__(/*! ./interfaces/TextBasedChannel */ "./node_modules/discord.js/src/structures/interfaces/TextBasedChannel.js");
const { Error } = __webpack_require__(/*! ../errors */ "./node_modules/discord.js/src/errors/index.js");
const GuildMemberRoleManager = __webpack_require__(/*! ../managers/GuildMemberRoleManager */ "./node_modules/discord.js/src/managers/GuildMemberRoleManager.js");
const Permissions = __webpack_require__(/*! ../util/Permissions */ "./node_modules/discord.js/src/util/Permissions.js");
let Structures;

/**
 * Represents a member of a guild on Discord.
 * @implements {TextBasedChannel}
 * @extends {Base}
 */
class GuildMember extends Base {
  /**
   * @param {Client} client The instantiating client
   * @param {Object} data The data for the guild member
   * @param {Guild} guild The guild the member is part of
   */
  constructor(client, data, guild) {
    super(client);

    /**
     * The guild that this member is part of
     * @type {Guild}
     */
    this.guild = guild;

    /**
     * The timestamp the member joined the guild at
     * @type {?number}
     */
    this.joinedTimestamp = null;

    /**
     * The ID of the last message sent by the member in their guild, if one was sent
     * @type {?Snowflake}
     */
    this.lastMessageID = null;

    /**
     * The ID of the channel for the last message sent by the member in their guild, if one was sent
     * @type {?Snowflake}
     */
    this.lastMessageChannelID = null;

    /**
     * The timestamp of when the member used their Nitro boost on the guild, if it was used
     * @type {?number}
     */
    this.premiumSinceTimestamp = null;

    /**
     * Whether the member has been removed from the guild
     * @type {boolean}
     */
    this.deleted = false;

    /**
     * The nickname of this member, if they have one
     * @type {?string}
     */
    this.nickname = null;

    this._roles = [];
    if (data) this._patch(data);
  }

  _patch(data) {
    if ('user' in data) {
      /**
       * The user that this guild member instance represents
       * @type {User}
       */
      this.user = this.client.users.add(data.user, true);
    }

    if ('nick' in data) this.nickname = data.nick;
    if ('joined_at' in data) this.joinedTimestamp = new Date(data.joined_at).getTime();
    if ('premium_since' in data) this.premiumSinceTimestamp = new Date(data.premium_since).getTime();
    if ('roles' in data) this._roles = data.roles;
  }

  _clone() {
    const clone = super._clone();
    clone._roles = this._roles.slice();
    return clone;
  }

  /**
   * Whether this GuildMember is a partial
   * @type {boolean}
   * @readonly
   */
  get partial() {
    return !this.joinedTimestamp;
  }

  /**
   * A manager for the roles belonging to this member
   * @type {GuildMemberRoleManager}
   * @readonly
   */
  get roles() {
    return new GuildMemberRoleManager(this);
  }

  /**
   * The Message object of the last message sent by the member in their guild, if one was sent
   * @type {?Message}
   * @readonly
   */
  get lastMessage() {
    const channel = this.guild.channels.cache.get(this.lastMessageChannelID);
    return (channel && channel.messages.cache.get(this.lastMessageID)) || null;
  }

  /**
   * The voice state of this member
   * @type {VoiceState}
   * @readonly
   */
  get voice() {
    if (!Structures) Structures = __webpack_require__(/*! ../util/Structures */ "./node_modules/discord.js/src/util/Structures.js");
    const VoiceState = Structures.get('VoiceState');
    return this.guild.voiceStates.cache.get(this.id) || new VoiceState(this.guild, { user_id: this.id });
  }

  /**
   * The time this member joined the guild
   * @type {?Date}
   * @readonly
   */
  get joinedAt() {
    return this.joinedTimestamp ? new Date(this.joinedTimestamp) : null;
  }

  /**
   * The time of when the member used their Nitro boost on the guild, if it was used
   * @type {?Date}
   * @readonly
   */
  get premiumSince() {
    return this.premiumSinceTimestamp ? new Date(this.premiumSinceTimestamp) : null;
  }

  /**
   * The presence of this guild member
   * @type {Presence}
   * @readonly
   */
  get presence() {
    if (!Structures) Structures = __webpack_require__(/*! ../util/Structures */ "./node_modules/discord.js/src/util/Structures.js");
    const Presence = Structures.get('Presence');
    return (
      this.guild.presences.cache.get(this.id) ||
      new Presence(this.client, {
        user: {
          id: this.id,
        },
        guild: this.guild,
      })
    );
  }

  /**
   * The displayed color of this member in base 10
   * @type {number}
   * @readonly
   */
  get displayColor() {
    const role = this.roles.color;
    return (role && role.color) || 0;
  }

  /**
   * The displayed color of this member in hexadecimal
   * @type {string}
   * @readonly
   */
  get displayHexColor() {
    const role = this.roles.color;
    return (role && role.hexColor) || '#000000';
  }

  /**
   * The ID of this member
   * @type {Snowflake}
   * @readonly
   */
  get id() {
    return this.user.id;
  }

  /**
   * The nickname of this member, or their username if they don't have one
   * @type {?string}
   * @readonly
   */
  get displayName() {
    return this.nickname || this.user.username;
  }

  /**
   * The overall set of permissions for this member, taking only roles into account
   * @type {Readonly<Permissions>}
   * @readonly
   */
  get permissions() {
    if (this.user.id === this.guild.ownerID) return new Permissions(Permissions.ALL).freeze();
    return new Permissions(this.roles.cache.map(role => role.permissions)).freeze();
  }

  /**
   * Whether the client user is above this user in the hierarchy, according to role position and guild ownership.
   * This is a prerequisite for many moderative actions.
   * @type {boolean}
   * @readonly
   */
  get manageable() {
    if (this.user.id === this.guild.ownerID) return false;
    if (this.user.id === this.client.user.id) return false;
    if (this.client.user.id === this.guild.ownerID) return true;
    if (!this.guild.me) throw new Error('GUILD_UNCACHED_ME');
    return this.guild.me.roles.highest.comparePositionTo(this.roles.highest) > 0;
  }

  /**
   * Whether this member is kickable by the client user
   * @type {boolean}
   * @readonly
   */
  get kickable() {
    return this.manageable && this.guild.me.permissions.has(Permissions.FLAGS.KICK_MEMBERS);
  }

  /**
   * Whether this member is bannable by the client user
   * @type {boolean}
   * @readonly
   */
  get bannable() {
    return this.manageable && this.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS);
  }

  /**
   * Returns `channel.permissionsFor(guildMember)`. Returns permissions for a member in a guild channel,
   * taking into account roles and permission overwrites.
   * @param {ChannelResolvable} channel The guild channel to use as context
   * @returns {Readonly<Permissions>}
   */
  permissionsIn(channel) {
    channel = this.guild.channels.resolve(channel);
    if (!channel) throw new Error('GUILD_CHANNEL_RESOLVE');
    return channel.memberPermissions(this);
  }

  /**
   * Checks if any of this member's roles have a permission.
   * @param {PermissionResolvable} permission Permission(s) to check for
   * @param {Object} [options] Options
   * @param {boolean} [options.checkAdmin=true] Whether to allow the administrator permission to override
   * @param {boolean} [options.checkOwner=true] Whether to allow being the guild's owner to override
   * @returns {boolean}
   */
  hasPermission(permission, { checkAdmin = true, checkOwner = true } = {}) {
    if (checkOwner && this.user.id === this.guild.ownerID) return true;
    const permissions = new Permissions(this.roles.cache.map(role => role.permissions));
    return permissions.has(permission, checkAdmin);
  }

  /**
   * The data for editing a guild member.
   * @typedef {Object} GuildMemberEditData
   * @property {string} [nick] The nickname to set for the member
   * @property {Collection<Snowflake, Role>|RoleResolvable[]} [roles] The roles or role IDs to apply
   * @property {boolean} [mute] Whether or not the member should be muted
   * @property {boolean} [deaf] Whether or not the member should be deafened
   * @property {ChannelResolvable|null} [channel] Channel to move member to (if they are connected to voice), or `null`
   * if you want to kick them from voice
   */

  /**
   * Edits this member.
   * @param {GuildMemberEditData} data The data to edit the member with
   * @param {string} [reason] Reason for editing this user
   * @returns {Promise<GuildMember>}
   */
  async edit(data, reason) {
    if (data.channel) {
      data.channel = this.guild.channels.resolve(data.channel);
      if (!data.channel || data.channel.type !== 'voice') {
        throw new Error('GUILD_VOICE_CHANNEL_RESOLVE');
      }
      data.channel_id = data.channel.id;
      data.channel = undefined;
    } else if (data.channel === null) {
      data.channel_id = null;
      data.channel = undefined;
    }
    if (data.roles) data.roles = data.roles.map(role => (role instanceof Role ? role.id : role));
    let endpoint = this.client.api.guilds(this.guild.id);
    if (this.user.id === this.client.user.id) {
      const keys = Object.keys(data);
      if (keys.length === 1 && keys[0] === 'nick') endpoint = endpoint.members('@me').nick;
      else endpoint = endpoint.members(this.id);
    } else {
      endpoint = endpoint.members(this.id);
    }
    await endpoint.patch({ data, reason });

    const clone = this._clone();
    data.user = this.user;
    clone._patch(data);
    return clone;
  }

  /**
   * Sets the nickname for this member.
   * @param {string} nick The nickname for the guild member
   * @param {string} [reason] Reason for setting the nickname
   * @returns {Promise<GuildMember>}
   */
  setNickname(nick, reason) {
    return this.edit({ nick }, reason);
  }

  /**
   * Creates a DM channel between the client and this member.
   * @returns {Promise<DMChannel>}
   */
  createDM() {
    return this.user.createDM();
  }

  /**
   * Deletes any DMs with this member.
   * @returns {Promise<DMChannel>}
   */
  deleteDM() {
    return this.user.deleteDM();
  }

  /**
   * Kicks this member from the guild.
   * @param {string} [reason] Reason for kicking user
   * @returns {Promise<GuildMember>}
   */
  kick(reason) {
    return this.client.api
      .guilds(this.guild.id)
      .members(this.user.id)
      .delete({ reason })
      .then(() => this);
  }

  /**
   * Bans this guild member.
   * @param {Object} [options] Options for the ban
   * @param {number} [options.days=0] Number of days of messages to delete, must be between 0 and 7
   * @param {string} [options.reason] Reason for banning
   * @returns {Promise<GuildMember>}
   * @example
   * // ban a guild member
   * guildMember.ban({ days: 7, reason: 'They deserved it' })
   *   .then(console.log)
   *   .catch(console.error);
   */
  ban(options) {
    return this.guild.members.ban(this, options);
  }

  /**
   * Fetches this GuildMember.
   * @param {boolean} [force=false] Whether to skip the cache check and request the API
   * @returns {Promise<GuildMember>}
   */
  fetch(force = false) {
    return this.guild.members.fetch({ user: this.id, cache: true, force });
  }

  /**
   * When concatenated with a string, this automatically returns the user's mention instead of the GuildMember object.
   * @returns {string}
   * @example
   * // Logs: Hello from <@123456789012345678>!
   * console.log(`Hello from ${member}!`);
   */
  toString() {
    return `<@${this.nickname ? '!' : ''}${this.user.id}>`;
  }

  toJSON() {
    return super.toJSON({
      guild: 'guildID',
      user: 'userID',
      displayName: true,
      speaking: false,
      lastMessage: false,
      lastMessageID: false,
      roles: true,
    });
  }

  // These are here only for documentation purposes - they are implemented by TextBasedChannel
  /* eslint-disable no-empty-function */
  send() {}
}

TextBasedChannel.applyToClass(GuildMember);

module.exports = GuildMember;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/GuildPreview.js":
/*!****************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/GuildPreview.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Base = __webpack_require__(/*! ./Base */ "./node_modules/discord.js/src/structures/Base.js");
const GuildPreviewEmoji = __webpack_require__(/*! ./GuildPreviewEmoji */ "./node_modules/discord.js/src/structures/GuildPreviewEmoji.js");
const Collection = __webpack_require__(/*! ../util/Collection */ "./node_modules/discord.js/src/util/Collection.js");

/**
 * Represents the data about the guild any bot can preview, connected to the specified guild.
 * @extends {Base}
 */
class GuildPreview extends Base {
  constructor(client, data) {
    super(client);

    if (!data) return;

    this._patch(data);
  }

  /**
   * Builds the guild with the provided data.
   * @param {*} data The raw data of the guild
   * @private
   */
  _patch(data) {
    /**
     * The id of this guild
     * @type {string}
     */
    this.id = data.id;

    /**
     * The name of this guild
     * @type {string}
     */
    this.name = data.name;

    /**
     * The icon of this guild
     * @type {?string}
     */
    this.icon = data.icon;

    /**
     * The splash icon of this guild
     * @type {?string}
     */
    this.splash = data.splash;

    /**
     * The discovery splash icon of this guild
     * @type {?string}
     */
    this.discoverySplash = data.discovery_splash;

    /**
     * An array of enabled guild features
     * @type {Features[]}
     */
    this.features = data.features;

    /**
     * The approximate count of members in this guild
     * @type {number}
     */
    this.approximateMemberCount = data.approximate_member_count;

    /**
     * The approximate count of online members in this guild
     * @type {number}
     */
    this.approximatePresenceCount = data.approximate_presence_count;

    /**
     * The description for this guild
     * @type {?string}
     */
    this.description = data.description || null;

    if (!this.emojis) {
      /**
       * Collection of emojis belonging to this guild
       * @type {Collection<Snowflake, GuildPreviewEmoji>}
       */
      this.emojis = new Collection();
    } else {
      this.emojis.clear();
    }
    for (const emoji of data.emojis) {
      this.emojis.set(emoji.id, new GuildPreviewEmoji(this.client, emoji, this));
    }
  }

  /**
   * The URL to this guild's splash.
   * @param {ImageURLOptions} [options={}] Options for the Image URL
   * @returns {?string}
   */
  splashURL({ format, size } = {}) {
    if (!this.splash) return null;
    return this.client.rest.cdn.Splash(this.id, this.splash, format, size);
  }

  /**
   * The URL to this guild's discovery splash.
   * @param {ImageURLOptions} [options={}] Options for the Image URL
   * @returns {?string}
   */
  discoverySplashURL({ format, size } = {}) {
    if (!this.discoverySplash) return null;
    return this.client.rest.cdn.DiscoverySplash(this.id, this.discoverySplash, format, size);
  }

  /**
   * The URL to this guild's icon.
   * @param {ImageURLOptions} [options={}] Options for the Image URL
   * @returns {?string}
   */
  iconURL({ format, size, dynamic } = {}) {
    if (!this.icon) return null;
    return this.client.rest.cdn.Icon(this.id, this.icon, format, size, dynamic);
  }

  /**
   * Fetches this guild.
   * @returns {Promise<GuildPreview>}
   */
  fetch() {
    return this.client.api
      .guilds(this.id)
      .preview.get()
      .then(data => {
        this._patch(data);
        return this;
      });
  }

  /**
   * When concatenated with a string, this automatically returns the guild's name instead of the Guild object.
   * @returns {string}
   * @example
   * // Logs: Hello from My Guild!
   * console.log(`Hello from ${previewGuild}!`);
   */
  toString() {
    return this.name;
  }

  toJSON() {
    const json = super.toJSON();
    json.iconURL = this.iconURL();
    json.splashURL = this.splashURL();
    return json;
  }
}

module.exports = GuildPreview;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/GuildPreviewEmoji.js":
/*!*********************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/GuildPreviewEmoji.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const BaseGuildEmoji = __webpack_require__(/*! ./BaseGuildEmoji */ "./node_modules/discord.js/src/structures/BaseGuildEmoji.js");

/**
 * Represents an instance of an emoji belonging to a public guild obtained through Discord's preview endpoint.
 * @extends {BaseGuildEmoji}
 */
class GuildPreviewEmoji extends BaseGuildEmoji {
  /**
   * The public guild this emoji is part of
   * @type {GuildPreview}
   * @name GuildPreviewEmoji#guild
   */

  /**
   * Set of roles this emoji is active for
   * @type {Set<Snowflake>}
   * @readonly
   */
  get roles() {
    return new Set(this._roles);
  }
}

module.exports = GuildPreviewEmoji;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/GuildTemplate.js":
/*!*****************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/GuildTemplate.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Base = __webpack_require__(/*! ./Base */ "./node_modules/discord.js/src/structures/Base.js");
const { Events } = __webpack_require__(/*! ../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");
const DataResolver = __webpack_require__(/*! ../util/DataResolver */ "./node_modules/discord.js/src/util/DataResolver.js");

/**
 * Represents the template for a guild.
 * @extends {Base}
 */
class GuildTemplate extends Base {
  /**
   * @param {Client} client The instantiating client
   * @param {Object} data The raw data for the template
   */
  constructor(client, data) {
    super(client);
    this._patch(data);
  }

  /**
   * Builds or updates the template with the provided data.
   * @param {Object} data The raw data for the template
   * @returns {GuildTemplate}
   * @private
   */
  _patch(data) {
    /**
     * The unique code of this template
     * @type {string}
     */
    this.code = data.code;

    /**
     * The name of this template
     * @type {string}
     */
    this.name = data.name;

    /**
     * The description of this template
     * @type {?string}
     */
    this.description = data.description;

    /**
     * The amount of times this template has been used
     * @type {number}
     */
    this.usageCount = data.usage_count;

    /**
     * The ID of the user that created this template
     * @type {Snowflake}
     */
    this.creatorID = data.creator_id;

    /**
     * The user that created this template
     * @type {User}
     */
    this.creator = this.client.users.add(data.creator);

    /**
     * The time of when this template was created at
     * @type {Date}
     */
    this.createdAt = new Date(data.created_at);

    /**
     * The time of when this template was last synced to the guild
     * @type {Date}
     */
    this.updatedAt = new Date(data.updated_at);

    /**
     * The ID of the guild that this template belongs to
     * @type {Snowflake}
     */
    this.guildID = data.source_guild_id;

    /**
     * The data of the guild that this template would create
     * @type {Object}
     * @see {@link https://discord.com/developers/docs/resources/guild#guild-resource}
     */
    this.serializedGuild = data.serialized_source_guild;

    /**
     * Whether this template has unsynced changes
     * @type {?boolean}
     */
    this.unSynced = 'is_dirty' in data ? Boolean(data.is_dirty) : null;

    return this;
  }

  /**
   * Creates a guild based from this template.
   * <warn>This is only available to bots in fewer than 10 guilds.</warn>
   * @param {string} name The name of the guild
   * @param {BufferResolvable|Base64Resolvable} [icon] The icon for the guild
   * @returns {Promise<Guild>}
   */
  async createGuild(name, icon) {
    const { client } = this;
    const data = await client.api.guilds.templates(this.code).post({
      data: {
        name,
        icon: await DataResolver.resolveImage(icon),
      },
    });
    // eslint-disable-next-line consistent-return
    return new Promise(resolve => {
      const createdGuild = client.guilds.cache.get(data.id);
      if (createdGuild) return resolve(createdGuild);

      const resolveGuild = guild => {
        client.off(Events.GUILD_CREATE, handleGuild);
        client.decrementMaxListeners();
        resolve(guild);
      };

      const handleGuild = guild => {
        if (guild.id === data.id) {
          client.clearTimeout(timeout);
          resolveGuild(guild);
        }
      };

      client.incrementMaxListeners();
      client.on(Events.GUILD_CREATE, handleGuild);

      const timeout = client.setTimeout(() => resolveGuild(client.guilds.add(data)), 10000);
    });
  }

  /**
   * Updates the metadata on this template.
   * @param {Object} options Options for the template
   * @param {string} [options.name] The name of this template
   * @param {string} [options.description] The description of this template
   * @returns {Promise<GuildTemplate>}
   */
  edit({ name, description } = {}) {
    return this.client.api
      .guilds(this.guildID)
      .templates(this.code)
      .patch({ data: { name, description } })
      .then(data => this._patch(data));
  }

  /**
   * Deletes this template.
   * @returns {Promise<GuildTemplate>}
   */
  delete() {
    return this.client.api
      .guilds(this.guildID)
      .templates(this.code)
      .delete()
      .then(() => this);
  }

  /**
   * Syncs this template to the current state of the guild.
   * @returns {Promise<GuildTemplate>}
   */
  sync() {
    return this.client.api
      .guilds(this.guildID)
      .templates(this.code)
      .put()
      .then(data => this._patch(data));
  }

  /**
   * The timestamp of when this template was created at
   * @type {number}
   * @readonly
   */
  get createdTimestamp() {
    return this.createdAt.getTime();
  }

  /**
   * The timestamp of when this template was last synced to the guild
   * @type {number}
   * @readonly
   */
  get updatedTimestamp() {
    return this.updatedAt.getTime();
  }

  /**
   * The guild that this template belongs to
   * @type {?Guild}
   * @readonly
   */
  get guild() {
    return this.client.guilds.cache.get(this.guildID) || null;
  }

  /**
   * The URL of this template
   * @type {string}
   * @readonly
   */
  get url() {
    return `${this.client.options.http.template}/${this.code}`;
  }

  /**
   * When concatenated with a string, this automatically returns the templates's code instead of the template object.
   * @returns {string}
   * @example
   * // Logs: Template: FKvmczH2HyUf
   * console.log(`Template: ${guildTemplate}!`);
   */
  toString() {
    return this.code;
  }
}

module.exports = GuildTemplate;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/Integration.js":
/*!***************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/Integration.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Base = __webpack_require__(/*! ./Base */ "./node_modules/discord.js/src/structures/Base.js");
const IntegrationApplication = __webpack_require__(/*! ./IntegrationApplication */ "./node_modules/discord.js/src/structures/IntegrationApplication.js");

/**
 * The information account for an integration
 * @typedef {Object} IntegrationAccount
 * @property {string} id The id of the account
 * @property {string} name The name of the account
 */

/**
 *  Represents a guild integration.
 */
class Integration extends Base {
  constructor(client, data, guild) {
    super(client);

    /**
     * The guild this integration belongs to
     * @type {Guild}
     */
    this.guild = guild;

    /**
     * The integration id
     * @type {Snowflake}
     */
    this.id = data.id;

    /**
     * The integration name
     * @type {string}
     */
    this.name = data.name;

    /**
     * The integration type (twitch, youtube, etc)
     * @type {string}
     */
    this.type = data.type;

    /**
     * Whether this integration is enabled
     * @type {boolean}
     */
    this.enabled = data.enabled;

    /**
     * Whether this integration is syncing
     * @type {boolean}
     */
    this.syncing = data.syncing;

    /**
     * The role that this integration uses for subscribers
     * @type {Role}
     */
    this.role = this.guild.roles.cache.get(data.role_id);

    if (data.user) {
      /**
       * The user for this integration
       * @type {?User}
       */
      this.user = this.client.users.add(data.user);
    } else {
      this.user = null;
    }

    /**
     * The account integration information
     * @type {IntegrationAccount}
     */
    this.account = data.account;

    /**
     * The last time this integration was last synced
     * @type {number}
     */
    this.syncedAt = data.synced_at;
    this._patch(data);
  }

  _patch(data) {
    /**
     * The behavior of expiring subscribers
     * @type {number}
     */
    this.expireBehavior = data.expire_behavior;

    /**
     * The grace period before expiring subscribers
     * @type {number}
     */
    this.expireGracePeriod = data.expire_grace_period;

    if ('application' in data) {
      if (this.application) {
        this.application._patch(data.application);
      } else {
        /**
         * The application for this integration
         * @type {?IntegrationApplication}
         */
        this.application = new IntegrationApplication(this.client, data.application);
      }
    } else if (!this.application) {
      this.application = null;
    }
  }

  /**
   * Sync this integration
   * @returns {Promise<Integration>}
   */
  sync() {
    this.syncing = true;
    return this.client.api
      .guilds(this.guild.id)
      .integrations(this.id)
      .post()
      .then(() => {
        this.syncing = false;
        this.syncedAt = Date.now();
        return this;
      });
  }

  /**
   * The data for editing an integration.
   * @typedef {Object} IntegrationEditData
   * @property {number} [expireBehavior] The new behaviour of expiring subscribers
   * @property {number} [expireGracePeriod] The new grace period before expiring subscribers
   */

  /**
   * Edits this integration.
   * @param {IntegrationEditData} data The data to edit this integration with
   * @param {string} reason Reason for editing this integration
   * @returns {Promise<Integration>}
   */
  edit(data, reason) {
    if ('expireBehavior' in data) {
      data.expire_behavior = data.expireBehavior;
      data.expireBehavior = null;
    }
    if ('expireGracePeriod' in data) {
      data.expire_grace_period = data.expireGracePeriod;
      data.expireGracePeriod = null;
    }
    // The option enable_emoticons is only available for Twitch at this moment
    return this.client.api
      .guilds(this.guild.id)
      .integrations(this.id)
      .patch({ data, reason })
      .then(() => {
        this._patch(data);
        return this;
      });
  }

  /**
   * Deletes this integration.
   * @returns {Promise<Integration>}
   * @param {string} [reason] Reason for deleting this integration
   */
  delete(reason) {
    return this.client.api
      .guilds(this.guild.id)
      .integrations(this.id)
      .delete({ reason })
      .then(() => this);
  }

  toJSON() {
    return super.toJSON({
      role: 'roleID',
      guild: 'guildID',
      user: 'userID',
    });
  }
}

module.exports = Integration;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/IntegrationApplication.js":
/*!**************************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/IntegrationApplication.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Application = __webpack_require__(/*! ./interfaces/Application */ "./node_modules/discord.js/src/structures/interfaces/Application.js");

/**
 * Represents an Integration's OAuth2 Application.
 * @extends {Application}
 */
class IntegrationApplication extends Application {
  _patch(data) {
    super._patch(data);

    if (typeof data.bot !== 'undefined') {
      /**
       * The bot {@link User user} for this application
       * @type {?User}
       */
      this.bot = this.client.users.add(data.bot);
    } else if (!this.bot) {
      this.bot = null;
    }
  }
}

module.exports = IntegrationApplication;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/Invite.js":
/*!**********************************************************!*\
  !*** ./node_modules/discord.js/src/structures/Invite.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Base = __webpack_require__(/*! ./Base */ "./node_modules/discord.js/src/structures/Base.js");
const { Endpoints } = __webpack_require__(/*! ../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");
const Permissions = __webpack_require__(/*! ../util/Permissions */ "./node_modules/discord.js/src/util/Permissions.js");

/**
 * Represents an invitation to a guild channel.
 * <warn>The only guaranteed properties are `code`, `channel`, and `url`. Other properties can be missing.</warn>
 * @extends {Base}
 */
class Invite extends Base {
  constructor(client, data) {
    super(client);
    this._patch(data);
  }

  _patch(data) {
    /**
     * The guild the invite is for
     * @type {?Guild}
     */
    this.guild = data.guild ? this.client.guilds.add(data.guild, false) : null;

    /**
     * The code for this invite
     * @type {string}
     */
    this.code = data.code;

    /**
     * The approximate number of online members of the guild this invite is for
     * @type {?number}
     */
    this.presenceCount = 'approximate_presence_count' in data ? data.approximate_presence_count : null;

    /**
     * The approximate total number of members of the guild this invite is for
     * @type {?number}
     */
    this.memberCount = 'approximate_member_count' in data ? data.approximate_member_count : null;

    /**
     * Whether or not this invite is temporary
     * @type {?boolean}
     */
    this.temporary = 'temporary' in data ? data.temporary : null;

    /**
     * The maximum age of the invite, in seconds, 0 if never expires
     * @type {?number}
     */
    this.maxAge = 'max_age' in data ? data.max_age : null;

    /**
     * How many times this invite has been used
     * @type {?number}
     */
    this.uses = 'uses' in data ? data.uses : null;

    /**
     * The maximum uses of this invite
     * @type {?number}
     */
    this.maxUses = 'max_uses' in data ? data.max_uses : null;

    /**
     * The user who created this invite
     * @type {?User}
     */
    this.inviter = data.inviter ? this.client.users.add(data.inviter) : null;

    /**
     * The target user for this invite
     * @type {?User}
     */
    this.targetUser = data.target_user ? this.client.users.add(data.target_user) : null;

    /**
     * The type of the target user:
     * * 1: STREAM
     * @typedef {number} TargetUser
     */

    /**
     * The target user type
     * @type {?TargetUser}
     */
    this.targetUserType = typeof data.target_user_type === 'number' ? data.target_user_type : null;

    /**
     * The channel the invite is for
     * @type {Channel}
     */
    this.channel = this.client.channels.add(data.channel, this.guild, false);

    /**
     * The timestamp the invite was created at
     * @type {?number}
     */
    this.createdTimestamp = 'created_at' in data ? new Date(data.created_at).getTime() : null;
  }

  /**
   * The time the invite was created at
   * @type {?Date}
   * @readonly
   */
  get createdAt() {
    return this.createdTimestamp ? new Date(this.createdTimestamp) : null;
  }

  /**
   * Whether the invite is deletable by the client user
   * @type {boolean}
   * @readonly
   */
  get deletable() {
    const guild = this.guild;
    if (!guild || !this.client.guilds.cache.has(guild.id)) return false;
    if (!guild.me) throw new Error('GUILD_UNCACHED_ME');
    return (
      this.channel.permissionsFor(this.client.user).has(Permissions.FLAGS.MANAGE_CHANNELS, false) ||
      guild.me.permissions.has(Permissions.FLAGS.MANAGE_GUILD)
    );
  }

  /**
   * The timestamp the invite will expire at
   * @type {?number}
   * @readonly
   */
  get expiresTimestamp() {
    return this.createdTimestamp && this.maxAge ? this.createdTimestamp + this.maxAge * 1000 : null;
  }

  /**
   * The time the invite will expire at
   * @type {?Date}
   * @readonly
   */
  get expiresAt() {
    const { expiresTimestamp } = this;
    return expiresTimestamp ? new Date(expiresTimestamp) : null;
  }

  /**
   * The URL to the invite
   * @type {string}
   * @readonly
   */
  get url() {
    return Endpoints.invite(this.client.options.http.invite, this.code);
  }

  /**
   * Deletes this invite.
   * @param {string} [reason] Reason for deleting this invite
   * @returns {Promise<Invite>}
   */
  delete(reason) {
    return this.client.api.invites[this.code].delete({ reason }).then(() => this);
  }

  /**
   * When concatenated with a string, this automatically concatenates the invite's URL instead of the object.
   * @returns {string}
   * @example
   * // Logs: Invite: https://discord.gg/A1b2C3
   * console.log(`Invite: ${invite}`);
   */
  toString() {
    return this.url;
  }

  toJSON() {
    return super.toJSON({
      url: true,
      expiresTimestamp: true,
      presenceCount: false,
      memberCount: false,
      uses: false,
      channel: 'channelID',
      inviter: 'inviterID',
      guild: 'guildID',
    });
  }

  valueOf() {
    return this.code;
  }
}

module.exports = Invite;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/Message.js":
/*!***********************************************************!*\
  !*** ./node_modules/discord.js/src/structures/Message.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const APIMessage = __webpack_require__(/*! ./APIMessage */ "./node_modules/discord.js/src/structures/APIMessage.js");
const Base = __webpack_require__(/*! ./Base */ "./node_modules/discord.js/src/structures/Base.js");
const ClientApplication = __webpack_require__(/*! ./ClientApplication */ "./node_modules/discord.js/src/structures/ClientApplication.js");
const MessageAttachment = __webpack_require__(/*! ./MessageAttachment */ "./node_modules/discord.js/src/structures/MessageAttachment.js");
const Embed = __webpack_require__(/*! ./MessageEmbed */ "./node_modules/discord.js/src/structures/MessageEmbed.js");
const Mentions = __webpack_require__(/*! ./MessageMentions */ "./node_modules/discord.js/src/structures/MessageMentions.js");
const ReactionCollector = __webpack_require__(/*! ./ReactionCollector */ "./node_modules/discord.js/src/structures/ReactionCollector.js");
const { Error, TypeError } = __webpack_require__(/*! ../errors */ "./node_modules/discord.js/src/errors/index.js");
const ReactionManager = __webpack_require__(/*! ../managers/ReactionManager */ "./node_modules/discord.js/src/managers/ReactionManager.js");
const Collection = __webpack_require__(/*! ../util/Collection */ "./node_modules/discord.js/src/util/Collection.js");
const { MessageTypes } = __webpack_require__(/*! ../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");
const MessageFlags = __webpack_require__(/*! ../util/MessageFlags */ "./node_modules/discord.js/src/util/MessageFlags.js");
const Permissions = __webpack_require__(/*! ../util/Permissions */ "./node_modules/discord.js/src/util/Permissions.js");
const SnowflakeUtil = __webpack_require__(/*! ../util/Snowflake */ "./node_modules/discord.js/src/util/Snowflake.js");
const Util = __webpack_require__(/*! ../util/Util */ "./node_modules/discord.js/src/util/Util.js");

/**
 * Represents a message on Discord.
 * @extends {Base}
 */
class Message extends Base {
  /**
   * @param {Client} client The instantiating client
   * @param {Object} data The data for the message
   * @param {TextChannel|DMChannel|NewsChannel} channel The channel the message was sent in
   */
  constructor(client, data, channel) {
    super(client);

    /**
     * The channel that the message was sent in
     * @type {TextChannel|DMChannel|NewsChannel}
     */
    this.channel = channel;

    /**
     * Whether this message has been deleted
     * @type {boolean}
     */
    this.deleted = false;

    if (data) this._patch(data);
  }

  _patch(data) {
    /**
     * The ID of the message
     * @type {Snowflake}
     */
    this.id = data.id;

    if ('type' in data) {
      /**
       * The type of the message
       * @type {?MessageType}
       */
      this.type = MessageTypes[data.type];

      /**
       * Whether or not this message was sent by Discord, not actually a user (e.g. pin notifications)
       * @type {?boolean}
       */
      this.system = data.type !== 0;
    } else if (typeof this.type !== 'string') {
      this.system = null;
      this.type = null;
    }

    if ('content' in data) {
      /**
       * The content of the message
       * @type {?string}
       */
      this.content = data.content;
    } else if (typeof this.content !== 'string') {
      this.content = null;
    }

    if ('author' in data) {
      /**
       * The author of the message
       * @type {?User}
       */
      this.author = this.client.users.add(data.author, !data.webhook_id);
    } else if (!this.author) {
      this.author = null;
    }

    if ('pinned' in data) {
      /**
       * Whether or not this message is pinned
       * @type {?boolean}
       */
      this.pinned = Boolean(data.pinned);
    } else if (typeof this.pinned !== 'boolean') {
      this.pinned = null;
    }

    if ('tts' in data) {
      /**
       * Whether or not the message was Text-To-Speech
       * @type {?boolean}
       */
      this.tts = data.tts;
    } else if (typeof this.tts !== 'boolean') {
      this.tts = null;
    }

    /**
     * A random number or string used for checking message delivery
     * <warn>This is only received after the message was sent successfully, and
     * lost if re-fetched</warn>
     * @type {?string}
     */
    this.nonce = 'nonce' in data ? data.nonce : null;

    /**
     * A list of embeds in the message - e.g. YouTube Player
     * @type {MessageEmbed[]}
     */
    this.embeds = (data.embeds || []).map(e => new Embed(e, true));

    /**
     * A collection of attachments in the message - e.g. Pictures - mapped by their ID
     * @type {Collection<Snowflake, MessageAttachment>}
     */
    this.attachments = new Collection();
    if (data.attachments) {
      for (const attachment of data.attachments) {
        this.attachments.set(attachment.id, new MessageAttachment(attachment.url, attachment.filename, attachment));
      }
    }

    /**
     * The timestamp the message was sent at
     * @type {number}
     */
    this.createdTimestamp = SnowflakeUtil.deconstruct(this.id).timestamp;

    /**
     * The timestamp the message was last edited at (if applicable)
     * @type {?number}
     */
    this.editedTimestamp = 'edited_timestamp' in data ? new Date(data.edited_timestamp).getTime() : null;

    /**
     * A manager of the reactions belonging to this message
     * @type {ReactionManager}
     */
    this.reactions = new ReactionManager(this);
    if (data.reactions && data.reactions.length > 0) {
      for (const reaction of data.reactions) {
        this.reactions.add(reaction);
      }
    }

    /**
     * All valid mentions that the message contains
     * @type {MessageMentions}
     */
    this.mentions = new Mentions(this, data.mentions, data.mention_roles, data.mention_everyone, data.mention_channels);

    /**
     * ID of the webhook that sent the message, if applicable
     * @type {?Snowflake}
     */
    this.webhookID = data.webhook_id || null;

    /**
     * Supplemental application information for group activities
     * @type {?ClientApplication}
     */
    this.application = data.application ? new ClientApplication(this.client, data.application) : null;

    /**
     * Group activity
     * @type {?MessageActivity}
     */
    this.activity = data.activity
      ? {
          partyID: data.activity.party_id,
          type: data.activity.type,
        }
      : null;

    /**
     * The previous versions of the message, sorted with the most recent first
     * @type {Message[]}
     * @private
     */
    this._edits = [];

    if (this.member && data.member) {
      this.member._patch(data.member);
    } else if (data.member && this.guild && this.author) {
      this.guild.members.add(Object.assign(data.member, { user: this.author }));
    }

    /**
     * Flags that are applied to the message
     * @type {Readonly<MessageFlags>}
     */
    this.flags = new MessageFlags(data.flags).freeze();

    /**
     * Reference data sent in a crossposted message.
     * @typedef {Object} MessageReference
     * @property {string} channelID ID of the channel the message was crossposted from
     * @property {?string} guildID ID of the guild the message was crossposted from
     * @property {?string} messageID ID of the message that was crossposted
     */

    /**
     * Message reference data
     * @type {?MessageReference}
     */
    this.reference = data.message_reference
      ? {
          channelID: data.message_reference.channel_id,
          guildID: data.message_reference.guild_id,
          messageID: data.message_reference.message_id,
        }
      : null;
  }

  /**
   * Whether or not this message is a partial
   * @type {boolean}
   * @readonly
   */
  get partial() {
    return typeof this.content !== 'string' || !this.author;
  }

  /**
   * Updates the message and returns the old message.
   * @param {Object} data Raw Discord message update data
   * @returns {Message}
   * @private
   */
  patch(data) {
    const clone = this._clone();
    const { messageEditHistoryMaxSize } = this.client.options;
    if (messageEditHistoryMaxSize !== 0) {
      const editsLimit = messageEditHistoryMaxSize === -1 ? Infinity : messageEditHistoryMaxSize;
      if (this._edits.unshift(clone) > editsLimit) this._edits.pop();
    }

    if ('edited_timestamp' in data) this.editedTimestamp = new Date(data.edited_timestamp).getTime();
    if ('content' in data) this.content = data.content;
    if ('pinned' in data) this.pinned = data.pinned;
    if ('tts' in data) this.tts = data.tts;
    if ('embeds' in data) this.embeds = data.embeds.map(e => new Embed(e, true));
    else this.embeds = this.embeds.slice();

    if ('attachments' in data) {
      this.attachments = new Collection();
      for (const attachment of data.attachments) {
        this.attachments.set(attachment.id, new MessageAttachment(attachment.url, attachment.filename, attachment));
      }
    } else {
      this.attachments = new Collection(this.attachments);
    }

    this.mentions = new Mentions(
      this,
      'mentions' in data ? data.mentions : this.mentions.users,
      'mention_roles' in data ? data.mention_roles : this.mentions.roles,
      'mention_everyone' in data ? data.mention_everyone : this.mentions.everyone,
      'mention_channels' in data ? data.mention_channels : this.mentions.crosspostedChannels,
    );

    this.flags = new MessageFlags('flags' in data ? data.flags : 0).freeze();

    return clone;
  }

  /**
   * Represents the author of the message as a guild member.
   * Only available if the message comes from a guild where the author is still a member
   * @type {?GuildMember}
   * @readonly
   */
  get member() {
    return this.guild ? this.guild.member(this.author) || null : null;
  }

  /**
   * The time the message was sent at
   * @type {Date}
   * @readonly
   */
  get createdAt() {
    return new Date(this.createdTimestamp);
  }

  /**
   * The time the message was last edited at (if applicable)
   * @type {?Date}
   * @readonly
   */
  get editedAt() {
    return this.editedTimestamp ? new Date(this.editedTimestamp) : null;
  }

  /**
   * The guild the message was sent in (if in a guild channel)
   * @type {?Guild}
   * @readonly
   */
  get guild() {
    return this.channel.guild || null;
  }

  /**
   * The url to jump to this message
   * @type {string}
   * @readonly
   */
  get url() {
    return `https://discord.com/channels/${this.guild ? this.guild.id : '@me'}/${this.channel.id}/${this.id}`;
  }

  /**
   * The message contents with all mentions replaced by the equivalent text.
   * If mentions cannot be resolved to a name, the relevant mention in the message content will not be converted.
   * @type {string}
   * @readonly
   */
  get cleanContent() {
    // eslint-disable-next-line eqeqeq
    return this.content != null ? Util.cleanContent(this.content, this) : null;
  }

  /**
   * Creates a reaction collector.
   * @param {CollectorFilter} filter The filter to apply
   * @param {ReactionCollectorOptions} [options={}] Options to send to the collector
   * @returns {ReactionCollector}
   * @example
   * // Create a reaction collector
   * const filter = (reaction, user) => reaction.emoji.name === '👌' && user.id === 'someID';
   * const collector = message.createReactionCollector(filter, { time: 15000 });
   * collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
   * collector.on('end', collected => console.log(`Collected ${collected.size} items`));
   */
  createReactionCollector(filter, options = {}) {
    return new ReactionCollector(this, filter, options);
  }

  /**
   * An object containing the same properties as CollectorOptions, but a few more:
   * @typedef {ReactionCollectorOptions} AwaitReactionsOptions
   * @property {string[]} [errors] Stop/end reasons that cause the promise to reject
   */

  /**
   * Similar to createReactionCollector but in promise form.
   * Resolves with a collection of reactions that pass the specified filter.
   * @param {CollectorFilter} filter The filter function to use
   * @param {AwaitReactionsOptions} [options={}] Optional options to pass to the internal collector
   * @returns {Promise<Collection<string, MessageReaction>>}
   * @example
   * // Create a reaction collector
   * const filter = (reaction, user) => reaction.emoji.name === '👌' && user.id === 'someID'
   * message.awaitReactions(filter, { time: 15000 })
   *   .then(collected => console.log(`Collected ${collected.size} reactions`))
   *   .catch(console.error);
   */
  awaitReactions(filter, options = {}) {
    return new Promise((resolve, reject) => {
      const collector = this.createReactionCollector(filter, options);
      collector.once('end', (reactions, reason) => {
        if (options.errors && options.errors.includes(reason)) reject(reactions);
        else resolve(reactions);
      });
    });
  }

  /**
   * An array of cached versions of the message, including the current version
   * Sorted from latest (first) to oldest (last)
   * @type {Message[]}
   * @readonly
   */
  get edits() {
    const copy = this._edits.slice();
    copy.unshift(this);
    return copy;
  }

  /**
   * Whether the message is editable by the client user
   * @type {boolean}
   * @readonly
   */
  get editable() {
    return this.author.id === this.client.user.id;
  }

  /**
   * Whether the message is deletable by the client user
   * @type {boolean}
   * @readonly
   */
  get deletable() {
    return (
      !this.deleted &&
      (this.author.id === this.client.user.id ||
        (this.guild && this.channel.permissionsFor(this.client.user).has(Permissions.FLAGS.MANAGE_MESSAGES, false)))
    );
  }

  /**
   * Whether the message is pinnable by the client user
   * @type {boolean}
   * @readonly
   */
  get pinnable() {
    return (
      this.type === 'DEFAULT' &&
      (!this.guild || this.channel.permissionsFor(this.client.user).has(Permissions.FLAGS.MANAGE_MESSAGES, false))
    );
  }

  /**
   * Whether the message is crosspostable by the client user
   * @type {boolean}
   * @readonly
   */
  get crosspostable() {
    return (
      this.channel.type === 'news' &&
      !this.flags.has(MessageFlags.FLAGS.CROSSPOSTED) &&
      this.type === 'DEFAULT' &&
      this.channel.viewable &&
      this.channel.permissionsFor(this.client.user).has(Permissions.FLAGS.SEND_MESSAGES) &&
      (this.author.id === this.client.user.id ||
        this.channel.permissionsFor(this.client.user).has(Permissions.FLAGS.MANAGE_MESSAGES))
    );
  }

  /**
   * Options that can be passed into editMessage.
   * @typedef {Object} MessageEditOptions
   * @property {string} [content] Content to be edited
   * @property {MessageEmbed|Object} [embed] An embed to be added/edited
   * @property {string|boolean} [code] Language for optional codeblock formatting to apply
   * @property {MessageMentionOptions} [allowedMentions] Which mentions should be parsed from the message content
   */

  /**
   * Edits the content of the message.
   * @param {StringResolvable|APIMessage} [content] The new content for the message
   * @param {MessageEditOptions|MessageEmbed} [options] The options to provide
   * @returns {Promise<Message>}
   * @example
   * // Update the content of a message
   * message.edit('This is my new content!')
   *   .then(msg => console.log(`Updated the content of a message to ${msg.content}`))
   *   .catch(console.error);
   */
  edit(content, options) {
    const { data } =
      content instanceof APIMessage ? content.resolveData() : APIMessage.create(this, content, options).resolveData();
    return this.client.api.channels[this.channel.id].messages[this.id].patch({ data }).then(d => {
      const clone = this._clone();
      clone._patch(d);
      return clone;
    });
  }

  /**
   * Publishes a message in an announcement channel to all channels following it.
   * @returns {Promise<Message>}
   * @example
   * // Crosspost a message
   * if (message.channel.type === 'news') {
   *   message.crosspost()
   *     .then(() => console.log('Crossposted message'))
   *     .catch(console.error);
   * }
   */
  async crosspost() {
    await this.client.api.channels(this.channel.id).messages(this.id).crosspost.post();
    return this;
  }

  /**
   * Pins this message to the channel's pinned messages.
   * @param {Object} [options] Options for pinning
   * @param {string} [options.reason] Reason for pinning
   * @returns {Promise<Message>}
   * @example
   * // Pin a message with a reason
   * message.pin({ reason: 'important' })
   *   .then(console.log)
   *   .catch(console.error)
   */
  pin(options) {
    return this.client.api
      .channels(this.channel.id)
      .pins(this.id)
      .put(options)
      .then(() => this);
  }

  /**
   * Unpins this message from the channel's pinned messages.
   * @param {Object} [options] Options for unpinning
   * @param {string} [options.reason] Reason for unpinning
   * @returns {Promise<Message>}
   * @example
   * // Unpin a message with a reason
   * message.unpin({ reason: 'no longer relevant' })
   *   .then(console.log)
   *   .catch(console.error)
   */
  unpin(options) {
    return this.client.api
      .channels(this.channel.id)
      .pins(this.id)
      .delete(options)
      .then(() => this);
  }

  /**
   * Adds a reaction to the message.
   * @param {EmojiIdentifierResolvable} emoji The emoji to react with
   * @returns {Promise<MessageReaction>}
   * @example
   * // React to a message with a unicode emoji
   * message.react('🤔')
   *   .then(console.log)
   *   .catch(console.error);
   * @example
   * // React to a message with a custom emoji
   * message.react(message.guild.emojis.cache.get('123456789012345678'))
   *   .then(console.log)
   *   .catch(console.error);
   */
  react(emoji) {
    emoji = this.client.emojis.resolveIdentifier(emoji);
    if (!emoji) throw new TypeError('EMOJI_TYPE');

    return this.client.api
      .channels(this.channel.id)
      .messages(this.id)
      .reactions(emoji, '@me')
      .put()
      .then(
        () =>
          this.client.actions.MessageReactionAdd.handle({
            user: this.client.user,
            channel: this.channel,
            message: this,
            emoji: Util.parseEmoji(emoji),
          }).reaction,
      );
  }

  /**
   * Deletes the message.
   * @param {Object} [options] Options
   * @param {number} [options.timeout=0] How long to wait to delete the message in milliseconds
   * @param {string} [options.reason] Reason for deleting this message, if it does not belong to the client user
   * @returns {Promise<Message>}
   * @example
   * // Delete a message
   * message.delete({ timeout: 5000 })
   *   .then(msg => console.log(`Deleted message from ${msg.author.username} after 5 seconds`))
   *   .catch(console.error);
   */
  delete(options = {}) {
    if (typeof options !== 'object') return Promise.reject(new TypeError('INVALID_TYPE', 'options', 'object', true));
    const { timeout = 0, reason } = options;
    if (timeout <= 0) {
      return this.channel.messages.delete(this.id, reason).then(() => this);
    } else {
      return new Promise(resolve => {
        this.client.setTimeout(() => {
          resolve(this.delete({ reason }));
        }, timeout);
      });
    }
  }

  /**
   * Replies to the message.
   * @param {StringResolvable|APIMessage} [content=''] The content for the message
   * @param {MessageOptions|MessageAdditions} [options={}] The options to provide
   * @returns {Promise<Message|Message[]>}
   * @example
   * // Reply to a message
   * message.reply('Hey, I\'m a reply!')
   *   .then(() => console.log(`Sent a reply to ${message.author.username}`))
   *   .catch(console.error);
   */
  reply(content, options) {
    return this.channel.send(
      content instanceof APIMessage
        ? content
        : APIMessage.transformOptions(content, options, { reply: this.member || this.author }),
    );
  }

  /**
   * Fetch this message.
   * @param {boolean} [force=false] Whether to skip the cache check and request the API
   * @returns {Promise<Message>}
   */
  fetch(force = false) {
    return this.channel.messages.fetch(this.id, true, force);
  }

  /**
   * Fetches the webhook used to create this message.
   * @returns {Promise<?Webhook>}
   */
  fetchWebhook() {
    if (!this.webhookID) return Promise.reject(new Error('WEBHOOK_MESSAGE'));
    return this.client.fetchWebhook(this.webhookID);
  }

  /**
   * Suppresses or unsuppresses embeds on a message
   * @param {boolean} [suppress=true] If the embeds should be suppressed or not
   * @returns {Promise<Message>}
   */
  suppressEmbeds(suppress = true) {
    const flags = new MessageFlags(this.flags.bitfield);

    if (suppress) {
      flags.add(MessageFlags.FLAGS.SUPPRESS_EMBEDS);
    } else {
      flags.remove(MessageFlags.FLAGS.SUPPRESS_EMBEDS);
    }

    return this.edit({ flags });
  }

  /**
   * Used mainly internally. Whether two messages are identical in properties. If you want to compare messages
   * without checking all the properties, use `message.id === message2.id`, which is much more efficient. This
   * method allows you to see if there are differences in content, embeds, attachments, nonce and tts properties.
   * @param {Message} message The message to compare it to
   * @param {Object} rawData Raw data passed through the WebSocket about this message
   * @returns {boolean}
   */
  equals(message, rawData) {
    if (!message) return false;
    const embedUpdate = !message.author && !message.attachments;
    if (embedUpdate) return this.id === message.id && this.embeds.length === message.embeds.length;

    let equal =
      this.id === message.id &&
      this.author.id === message.author.id &&
      this.content === message.content &&
      this.tts === message.tts &&
      this.nonce === message.nonce &&
      this.embeds.length === message.embeds.length &&
      this.attachments.length === message.attachments.length;

    if (equal && rawData) {
      equal =
        this.mentions.everyone === message.mentions.everyone &&
        this.createdTimestamp === new Date(rawData.timestamp).getTime() &&
        this.editedTimestamp === new Date(rawData.edited_timestamp).getTime();
    }

    return equal;
  }

  /**
   * When concatenated with a string, this automatically concatenates the message's content instead of the object.
   * @returns {string}
   * @example
   * // Logs: Message: This is a message!
   * console.log(`Message: ${message}`);
   */
  toString() {
    return this.content;
  }

  toJSON() {
    return super.toJSON({
      channel: 'channelID',
      author: 'authorID',
      application: 'applicationID',
      guild: 'guildID',
      cleanContent: true,
      member: false,
      reactions: false,
    });
  }
}

module.exports = Message;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/MessageAttachment.js":
/*!*********************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/MessageAttachment.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Util = __webpack_require__(/*! ../util/Util */ "./node_modules/discord.js/src/util/Util.js");

/**
 * Represents an attachment in a message.
 */
class MessageAttachment {
  /**
   * @param {BufferResolvable|Stream} attachment The file
   * @param {string} [name=null] The name of the file, if any
   * @param {Object} [data] Extra data
   */
  constructor(attachment, name = null, data) {
    this.attachment = attachment;
    /**
     * The name of this attachment
     * @type {?string}
     */
    this.name = name;
    if (data) this._patch(data);
  }

  /**
   * Sets the file of this attachment.
   * @param {BufferResolvable|Stream} attachment The file
   * @param {string} [name=null] The name of the file, if any
   * @returns {MessageAttachment} This attachment
   */
  setFile(attachment, name = null) {
    this.attachment = attachment;
    this.name = name;
    return this;
  }

  /**
   * Sets the name of this attachment.
   * @param {string} name The name of the file
   * @returns {MessageAttachment} This attachment
   */
  setName(name) {
    this.name = name;
    return this;
  }

  _patch(data) {
    /**
     * The ID of this attachment
     * @type {Snowflake}
     */
    this.id = data.id;

    /**
     * The size of this attachment in bytes
     * @type {number}
     */
    this.size = data.size;

    /**
     * The URL to this attachment
     * @type {string}
     */
    this.url = data.url;

    /**
     * The Proxy URL to this attachment
     * @type {string}
     */
    this.proxyURL = data.proxy_url;

    /**
     * The height of this attachment (if an image or video)
     * @type {?number}
     */
    this.height = typeof data.height !== 'undefined' ? data.height : null;

    /**
     * The width of this attachment (if an image or video)
     * @type {?number}
     */
    this.width = typeof data.width !== 'undefined' ? data.width : null;
  }

  /**
   * Whether or not this attachment has been marked as a spoiler
   * @type {boolean}
   * @readonly
   */
  get spoiler() {
    return Util.basename(this.url).startsWith('SPOILER_');
  }

  toJSON() {
    return Util.flatten(this);
  }
}

module.exports = MessageAttachment;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/MessageCollector.js":
/*!********************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/MessageCollector.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Collector = __webpack_require__(/*! ./interfaces/Collector */ "./node_modules/discord.js/src/structures/interfaces/Collector.js");
const { Events } = __webpack_require__(/*! ../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

/**
 * @typedef {CollectorOptions} MessageCollectorOptions
 * @property {number} max The maximum amount of messages to collect
 * @property {number} maxProcessed The maximum amount of messages to process
 */

/**
 * Collects messages on a channel.
 * Will automatically stop if the channel (`'channelDelete'`) or guild (`'guildDelete'`) are deleted.
 * @extends {Collector}
 */
class MessageCollector extends Collector {
  /**
   * @param {TextChannel|DMChannel} channel The channel
   * @param {CollectorFilter} filter The filter to be applied to this collector
   * @param {MessageCollectorOptions} options The options to be applied to this collector
   * @emits MessageCollector#message
   */
  constructor(channel, filter, options = {}) {
    super(channel.client, filter, options);

    /**
     * The channel
     * @type {TextBasedChannel}
     */
    this.channel = channel;

    /**
     * Total number of messages that were received in the channel during message collection
     * @type {number}
     */
    this.received = 0;

    const bulkDeleteListener = messages => {
      for (const message of messages.values()) this.handleDispose(message);
    };
    this._handleChannelDeletion = this._handleChannelDeletion.bind(this);
    this._handleGuildDeletion = this._handleGuildDeletion.bind(this);

    this.client.incrementMaxListeners();
    this.client.on(Events.MESSAGE_CREATE, this.handleCollect);
    this.client.on(Events.MESSAGE_DELETE, this.handleDispose);
    this.client.on(Events.MESSAGE_BULK_DELETE, bulkDeleteListener);
    this.client.on(Events.CHANNEL_DELETE, this._handleChannelDeletion);
    this.client.on(Events.GUILD_DELETE, this._handleGuildDeletion);

    this.once('end', () => {
      this.client.removeListener(Events.MESSAGE_CREATE, this.handleCollect);
      this.client.removeListener(Events.MESSAGE_DELETE, this.handleDispose);
      this.client.removeListener(Events.MESSAGE_BULK_DELETE, bulkDeleteListener);
      this.client.removeListener(Events.CHANNEL_DELETE, this._handleChannelDeletion);
      this.client.removeListener(Events.GUILD_DELETE, this._handleGuildDeletion);
      this.client.decrementMaxListeners();
    });
  }

  /**
   * Handles a message for possible collection.
   * @param {Message} message The message that could be collected
   * @returns {?Snowflake}
   * @private
   */
  collect(message) {
    /**
     * Emitted whenever a message is collected.
     * @event MessageCollector#collect
     * @param {Message} message The message that was collected
     */
    if (message.channel.id !== this.channel.id) return null;
    this.received++;
    return message.id;
  }

  /**
   * Handles a message for possible disposal.
   * @param {Message} message The message that could be disposed of
   * @returns {?Snowflake}
   */
  dispose(message) {
    /**
     * Emitted whenever a message is disposed of.
     * @event MessageCollector#dispose
     * @param {Message} message The message that was disposed of
     */
    return message.channel.id === this.channel.id ? message.id : null;
  }

  /**
   * Checks after un/collection to see if the collector is done.
   * @returns {?string}
   * @private
   */
  endReason() {
    if (this.options.max && this.collected.size >= this.options.max) return 'limit';
    if (this.options.maxProcessed && this.received === this.options.maxProcessed) return 'processedLimit';
    return null;
  }

  /**
   * Handles checking if the channel has been deleted, and if so, stops the collector with the reason 'channelDelete'.
   * @private
   * @param {GuildChannel} channel The channel that was deleted
   * @returns {void}
   */
  _handleChannelDeletion(channel) {
    if (channel.id === this.channel.id) {
      this.stop('channelDelete');
    }
  }

  /**
   * Handles checking if the guild has been deleted, and if so, stops the collector with the reason 'guildDelete'.
   * @private
   * @param {Guild} guild The guild that was deleted
   * @returns {void}
   */
  _handleGuildDeletion(guild) {
    if (this.channel.guild && guild.id === this.channel.guild.id) {
      this.stop('guildDelete');
    }
  }
}

module.exports = MessageCollector;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/MessageEmbed.js":
/*!****************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/MessageEmbed.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { RangeError } = __webpack_require__(/*! ../errors */ "./node_modules/discord.js/src/errors/index.js");
const Util = __webpack_require__(/*! ../util/Util */ "./node_modules/discord.js/src/util/Util.js");

/**
 * Represents an embed in a message (image/video preview, rich embed, etc.)
 */
class MessageEmbed {
  /**
   * @name MessageEmbed
   * @kind constructor
   * @memberof MessageEmbed
   * @param {MessageEmbed|Object} [data={}] MessageEmbed to clone or raw embed data
   */

  constructor(data = {}, skipValidation = false) {
    this.setup(data, skipValidation);
  }

  setup(data, skipValidation) {
    /**
     * The type of this embed, either:
     * * `rich` - a rich embed
     * * `image` - an image embed
     * * `video` - a video embed
     * * `gifv` - a gifv embed
     * * `article` - an article embed
     * * `link` - a link embed
     * @type {string}
     */
    this.type = data.type || 'rich';

    /**
     * The title of this embed
     * @type {?string}
     */
    this.title = 'title' in data ? data.title : null;

    /**
     * The description of this embed
     * @type {?string}
     */
    this.description = 'description' in data ? data.description : null;

    /**
     * The URL of this embed
     * @type {?string}
     */
    this.url = 'url' in data ? data.url : null;

    /**
     * The color of this embed
     * @type {?number}
     */
    this.color = 'color' in data ? Util.resolveColor(data.color) : null;

    /**
     * The timestamp of this embed
     * @type {?number}
     */
    this.timestamp = 'timestamp' in data ? new Date(data.timestamp).getTime() : null;

    /**
     * Represents a field of a MessageEmbed
     * @typedef {Object} EmbedField
     * @property {string} name The name of this field
     * @property {string} value The value of this field
     * @property {boolean} inline If this field will be displayed inline
     */

    /**
     * The fields of this embed
     * @type {EmbedField[]}
     */
    this.fields = [];
    if (data.fields) {
      this.fields = skipValidation ? data.fields.map(Util.cloneObject) : this.constructor.normalizeFields(data.fields);
    }

    /**
     * Represents the thumbnail of a MessageEmbed
     * @typedef {Object} MessageEmbedThumbnail
     * @property {string} url URL for this thumbnail
     * @property {string} proxyURL ProxyURL for this thumbnail
     * @property {number} height Height of this thumbnail
     * @property {number} width Width of this thumbnail
     */

    /**
     * The thumbnail of this embed (if there is one)
     * @type {?MessageEmbedThumbnail}
     */
    this.thumbnail = data.thumbnail
      ? {
          url: data.thumbnail.url,
          proxyURL: data.thumbnail.proxyURL || data.thumbnail.proxy_url,
          height: data.thumbnail.height,
          width: data.thumbnail.width,
        }
      : null;

    /**
     * Represents the image of a MessageEmbed
     * @typedef {Object} MessageEmbedImage
     * @property {string} url URL for this image
     * @property {string} proxyURL ProxyURL for this image
     * @property {number} height Height of this image
     * @property {number} width Width of this image
     */

    /**
     * The image of this embed, if there is one
     * @type {?MessageEmbedImage}
     */
    this.image = data.image
      ? {
          url: data.image.url,
          proxyURL: data.image.proxyURL || data.image.proxy_url,
          height: data.image.height,
          width: data.image.width,
        }
      : null;

    /**
     * Represents the video of a MessageEmbed
     * @typedef {Object} MessageEmbedVideo
     * @property {string} url URL of this video
     * @property {string} proxyURL ProxyURL for this video
     * @property {number} height Height of this video
     * @property {number} width Width of this video
     */

    /**
     * The video of this embed (if there is one)
     * @type {?MessageEmbedVideo}
     * @readonly
     */
    this.video = data.video
      ? {
          url: data.video.url,
          proxyURL: data.video.proxyURL || data.video.proxy_url,
          height: data.video.height,
          width: data.video.width,
        }
      : null;

    /**
     * Represents the author field of a MessageEmbed
     * @typedef {Object} MessageEmbedAuthor
     * @property {string} name The name of this author
     * @property {string} url URL of this author
     * @property {string} iconURL URL of the icon for this author
     * @property {string} proxyIconURL Proxied URL of the icon for this author
     */

    /**
     * The author of this embed (if there is one)
     * @type {?MessageEmbedAuthor}
     */
    this.author = data.author
      ? {
          name: data.author.name,
          url: data.author.url,
          iconURL: data.author.iconURL || data.author.icon_url,
          proxyIconURL: data.author.proxyIconURL || data.author.proxy_icon_url,
        }
      : null;

    /**
     * Represents the provider of a MessageEmbed
     * @typedef {Object} MessageEmbedProvider
     * @property {string} name The name of this provider
     * @property {string} url URL of this provider
     */

    /**
     * The provider of this embed (if there is one)
     * @type {?MessageEmbedProvider}
     */
    this.provider = data.provider
      ? {
          name: data.provider.name,
          url: data.provider.name,
        }
      : null;

    /**
     * Represents the footer field of a MessageEmbed
     * @typedef {Object} MessageEmbedFooter
     * @property {string} text The text of this footer
     * @property {string} iconURL URL of the icon for this footer
     * @property {string} proxyIconURL Proxied URL of the icon for this footer
     */

    /**
     * The footer of this embed
     * @type {?MessageEmbedFooter}
     */
    this.footer = data.footer
      ? {
          text: data.footer.text,
          iconURL: data.footer.iconURL || data.footer.icon_url,
          proxyIconURL: data.footer.proxyIconURL || data.footer.proxy_icon_url,
        }
      : null;

    /**
     * The files of this embed
     * @type {Array<FileOptions|string|MessageAttachment>}
     */
    this.files = data.files || [];
  }

  /**
   * The date displayed on this embed
   * @type {?Date}
   * @readonly
   */
  get createdAt() {
    return this.timestamp ? new Date(this.timestamp) : null;
  }

  /**
   * The hexadecimal version of the embed color, with a leading hash
   * @type {?string}
   * @readonly
   */
  get hexColor() {
    return this.color ? `#${this.color.toString(16).padStart(6, '0')}` : null;
  }

  /**
   * The accumulated length for the embed title, description, fields and footer text
   * @type {number}
   * @readonly
   */
  get length() {
    return (
      (this.title ? this.title.length : 0) +
      (this.description ? this.description.length : 0) +
      (this.fields.length >= 1
        ? this.fields.reduce((prev, curr) => prev + curr.name.length + curr.value.length, 0)
        : 0) +
      (this.footer ? this.footer.text.length : 0)
    );
  }

  /**
   * Adds a field to the embed (max 25).
   * @param {StringResolvable} name The name of this field
   * @param {StringResolvable} value The value of this field
   * @param {boolean} [inline=false] If this field will be displayed inline
   * @returns {MessageEmbed}
   */
  addField(name, value, inline) {
    return this.addFields({ name, value, inline });
  }

  /**
   * Adds fields to the embed (max 25).
   * @param {...EmbedFieldData|EmbedFieldData[]} fields The fields to add
   * @returns {MessageEmbed}
   */
  addFields(...fields) {
    this.fields.push(...this.constructor.normalizeFields(fields));
    return this;
  }

  /**
   * Removes, replaces, and inserts fields in the embed (max 25).
   * @param {number} index The index to start at
   * @param {number} deleteCount The number of fields to remove
   * @param {...EmbedFieldData|EmbedFieldData[]} [fields] The replacing field objects
   * @returns {MessageEmbed}
   */
  spliceFields(index, deleteCount, ...fields) {
    this.fields.splice(index, deleteCount, ...this.constructor.normalizeFields(...fields));
    return this;
  }

  /**
   * Sets the file to upload alongside the embed. This file can be accessed via `attachment://fileName.extension` when
   * setting an embed image or author/footer icons. Multiple files can be attached.
   * @param {Array<FileOptions|string|MessageAttachment>} files Files to attach
   * @returns {MessageEmbed}
   */
  attachFiles(files) {
    this.files = this.files.concat(files);
    return this;
  }

  /**
   * Sets the author of this embed.
   * @param {StringResolvable} name The name of the author
   * @param {string} [iconURL] The icon URL of the author
   * @param {string} [url] The URL of the author
   * @returns {MessageEmbed}
   */
  setAuthor(name, iconURL, url) {
    this.author = { name: Util.resolveString(name), iconURL, url };
    return this;
  }

  /**
   * Sets the color of this embed.
   * @param {ColorResolvable} color The color of the embed
   * @returns {MessageEmbed}
   */
  setColor(color) {
    this.color = Util.resolveColor(color);
    return this;
  }

  /**
   * Sets the description of this embed.
   * @param {StringResolvable} description The description
   * @returns {MessageEmbed}
   */
  setDescription(description) {
    description = Util.resolveString(description);
    this.description = description;
    return this;
  }

  /**
   * Sets the footer of this embed.
   * @param {StringResolvable} text The text of the footer
   * @param {string} [iconURL] The icon URL of the footer
   * @returns {MessageEmbed}
   */
  setFooter(text, iconURL) {
    text = Util.resolveString(text);
    this.footer = { text, iconURL };
    return this;
  }

  /**
   * Sets the image of this embed.
   * @param {string} url The URL of the image
   * @returns {MessageEmbed}
   */
  setImage(url) {
    this.image = { url };
    return this;
  }

  /**
   * Sets the thumbnail of this embed.
   * @param {string} url The URL of the thumbnail
   * @returns {MessageEmbed}
   */
  setThumbnail(url) {
    this.thumbnail = { url };
    return this;
  }

  /**
   * Sets the timestamp of this embed.
   * @param {Date|number} [timestamp=Date.now()] The timestamp or date
   * @returns {MessageEmbed}
   */
  setTimestamp(timestamp = Date.now()) {
    if (timestamp instanceof Date) timestamp = timestamp.getTime();
    this.timestamp = timestamp;
    return this;
  }

  /**
   * Sets the title of this embed.
   * @param {StringResolvable} title The title
   * @returns {MessageEmbed}
   */
  setTitle(title) {
    title = Util.resolveString(title);
    this.title = title;
    return this;
  }

  /**
   * Sets the URL of this embed.
   * @param {string} url The URL
   * @returns {MessageEmbed}
   */
  setURL(url) {
    this.url = url;
    return this;
  }

  /**
   * Transforms the embed to a plain object.
   * @returns {Object} The raw data of this embed
   */
  toJSON() {
    return {
      title: this.title,
      type: 'rich',
      description: this.description,
      url: this.url,
      timestamp: this.timestamp ? new Date(this.timestamp) : null,
      color: this.color,
      fields: this.fields,
      thumbnail: this.thumbnail,
      image: this.image,
      author: this.author
        ? {
            name: this.author.name,
            url: this.author.url,
            icon_url: this.author.iconURL,
          }
        : null,
      footer: this.footer
        ? {
            text: this.footer.text,
            icon_url: this.footer.iconURL,
          }
        : null,
    };
  }

  /**
   * Normalizes field input and resolves strings.
   * @param {StringResolvable} name The name of the field
   * @param {StringResolvable} value The value of the field
   * @param {boolean} [inline=false] Set the field to display inline
   * @returns {EmbedField}
   */
  static normalizeField(name, value, inline = false) {
    name = Util.resolveString(name);
    if (!name) throw new RangeError('EMBED_FIELD_NAME');
    value = Util.resolveString(value);
    if (!value) throw new RangeError('EMBED_FIELD_VALUE');
    return { name, value, inline };
  }

  /**
   * @typedef {Object} EmbedFieldData
   * @property {StringResolvable} name The name of this field
   * @property {StringResolvable} value The value of this field
   * @property {boolean} [inline] If this field will be displayed inline
   */

  /**
   * Normalizes field input and resolves strings.
   * @param  {...EmbedFieldData|EmbedFieldData[]} fields Fields to normalize
   * @returns {EmbedField[]}
   */
  static normalizeFields(...fields) {
    return fields
      .flat(2)
      .map(field =>
        this.normalizeField(
          field && field.name,
          field && field.value,
          field && typeof field.inline === 'boolean' ? field.inline : false,
        ),
      );
  }
}

module.exports = MessageEmbed;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/MessageMentions.js":
/*!*******************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/MessageMentions.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Collection = __webpack_require__(/*! ../util/Collection */ "./node_modules/discord.js/src/util/Collection.js");
const { ChannelTypes } = __webpack_require__(/*! ../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");
const Util = __webpack_require__(/*! ../util/Util */ "./node_modules/discord.js/src/util/Util.js");

/**
 * Keeps track of mentions in a {@link Message}.
 */
class MessageMentions {
  constructor(message, users, roles, everyone, crosspostedChannels) {
    /**
     * The client the message is from
     * @type {Client}
     * @readonly
     */
    Object.defineProperty(this, 'client', { value: message.client });

    /**
     * The guild the message is in
     * @type {?Guild}
     * @readonly
     */
    Object.defineProperty(this, 'guild', { value: message.guild });

    /**
     * The initial message content
     * @type {string}
     * @readonly
     * @private
     */
    Object.defineProperty(this, '_content', { value: message.content });

    /**
     * Whether `@everyone` or `@here` were mentioned
     * @type {boolean}
     */
    this.everyone = Boolean(everyone);

    if (users) {
      if (users instanceof Collection) {
        /**
         * Any users that were mentioned
         * <info>Order as received from the API, not as they appear in the message content</info>
         * @type {Collection<Snowflake, User>}
         */
        this.users = new Collection(users);
      } else {
        this.users = new Collection();
        for (const mention of users) {
          if (mention.member && message.guild) {
            message.guild.members.add(Object.assign(mention.member, { user: mention }));
          }
          const user = message.client.users.add(mention);
          this.users.set(user.id, user);
        }
      }
    } else {
      this.users = new Collection();
    }

    if (roles) {
      if (roles instanceof Collection) {
        /**
         * Any roles that were mentioned
         * <info>Order as received from the API, not as they appear in the message content</info>
         * @type {Collection<Snowflake, Role>}
         */
        this.roles = new Collection(roles);
      } else {
        this.roles = new Collection();
        for (const mention of roles) {
          const role = message.channel.guild.roles.cache.get(mention);
          if (role) this.roles.set(role.id, role);
        }
      }
    } else {
      this.roles = new Collection();
    }

    /**
     * Cached members for {@link MessageMentions#members}
     * @type {?Collection<Snowflake, GuildMember>}
     * @private
     */
    this._members = null;

    /**
     * Cached channels for {@link MessageMentions#channels}
     * @type {?Collection<Snowflake, GuildChannel>}
     * @private
     */
    this._channels = null;

    /**
     * Crossposted channel data.
     * @typedef {Object} CrosspostedChannel
     * @property {string} channelID ID of the mentioned channel
     * @property {string} guildID ID of the guild that has the channel
     * @property {string} type Type of the channel
     * @property {string} name The name of the channel
     */

    if (crosspostedChannels) {
      if (crosspostedChannels instanceof Collection) {
        /**
         * A collection of crossposted channels
         * <info>Order as received from the API, not as they appear in the message content</info>
         * @type {Collection<Snowflake, CrosspostedChannel>}
         */
        this.crosspostedChannels = new Collection(crosspostedChannels);
      } else {
        this.crosspostedChannels = new Collection();
        const channelTypes = Object.keys(ChannelTypes);
        for (const d of crosspostedChannels) {
          const type = channelTypes[d.type];
          this.crosspostedChannels.set(d.id, {
            channelID: d.id,
            guildID: d.guild_id,
            type: type ? type.toLowerCase() : 'unknown',
            name: d.name,
          });
        }
      }
    } else {
      this.crosspostedChannels = new Collection();
    }
  }

  /**
   * Any members that were mentioned (only in {@link TextChannel}s)
   * <info>Order as received from the API, not as they appear in the message content</info>
   * @type {?Collection<Snowflake, GuildMember>}
   * @readonly
   */
  get members() {
    if (this._members) return this._members;
    if (!this.guild) return null;
    this._members = new Collection();
    this.users.forEach(user => {
      const member = this.guild.member(user);
      if (member) this._members.set(member.user.id, member);
    });
    return this._members;
  }

  /**
   * Any channels that were mentioned
   * <info>Order as they appear first in the message content</info>
   * @type {Collection<Snowflake, GuildChannel>}
   * @readonly
   */
  get channels() {
    if (this._channels) return this._channels;
    this._channels = new Collection();
    let matches;
    while ((matches = this.constructor.CHANNELS_PATTERN.exec(this._content)) !== null) {
      const chan = this.client.channels.cache.get(matches[1]);
      if (chan) this._channels.set(chan.id, chan);
    }
    return this._channels;
  }

  /**
   * Checks if a user, guild member, role, or channel is mentioned.
   * Takes into account user mentions, role mentions, and @everyone/@here mentions.
   * @param {UserResolvable|RoleResolvable|GuildChannelResolvable} data User/Role/Channel to check
   * @param {Object} [options] Options
   * @param {boolean} [options.ignoreDirect=false] - Whether to ignore direct mentions to the item
   * @param {boolean} [options.ignoreRoles=false] - Whether to ignore role mentions to a guild member
   * @param {boolean} [options.ignoreEveryone=false] - Whether to ignore everyone/here mentions
   * @returns {boolean}
   */
  has(data, { ignoreDirect = false, ignoreRoles = false, ignoreEveryone = false } = {}) {
    if (!ignoreEveryone && this.everyone) return true;
    const GuildMember = __webpack_require__(/*! ./GuildMember */ "./node_modules/discord.js/src/structures/GuildMember.js");
    if (!ignoreRoles && data instanceof GuildMember) {
      for (const role of this.roles.values()) if (data.roles.cache.has(role.id)) return true;
    }

    if (!ignoreDirect) {
      const id =
        this.client.users.resolveID(data) ||
        (this.guild && this.guild.roles.resolveID(data)) ||
        this.client.channels.resolveID(data);

      return this.users.has(id) || this.channels.has(id) || this.roles.has(id);
    }

    return false;
  }

  toJSON() {
    return Util.flatten(this, {
      members: true,
      channels: true,
    });
  }
}

/**
 * Regular expression that globally matches `@everyone` and `@here`
 * @type {RegExp}
 */
MessageMentions.EVERYONE_PATTERN = /@(everyone|here)/g;

/**
 * Regular expression that globally matches user mentions like `<@81440962496172032>`
 * @type {RegExp}
 */
MessageMentions.USERS_PATTERN = /<@!?(\d{17,19})>/g;

/**
 * Regular expression that globally matches role mentions like `<@&297577916114403338>`
 * @type {RegExp}
 */
MessageMentions.ROLES_PATTERN = /<@&(\d{17,19})>/g;

/**
 * Regular expression that globally matches channel mentions like `<#222079895583457280>`
 * @type {RegExp}
 */
MessageMentions.CHANNELS_PATTERN = /<#(\d{17,19})>/g;

module.exports = MessageMentions;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/MessageReaction.js":
/*!*******************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/MessageReaction.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const GuildEmoji = __webpack_require__(/*! ./GuildEmoji */ "./node_modules/discord.js/src/structures/GuildEmoji.js");
const ReactionEmoji = __webpack_require__(/*! ./ReactionEmoji */ "./node_modules/discord.js/src/structures/ReactionEmoji.js");
const ReactionUserManager = __webpack_require__(/*! ../managers/ReactionUserManager */ "./node_modules/discord.js/src/managers/ReactionUserManager.js");
const Util = __webpack_require__(/*! ../util/Util */ "./node_modules/discord.js/src/util/Util.js");

/**
 * Represents a reaction to a message.
 */
class MessageReaction {
  /**
   * @param {Client} client The instantiating client
   * @param {Object} data The data for the message reaction
   * @param {Message} message The message the reaction refers to
   */
  constructor(client, data, message) {
    /**
     * The client that instantiated this message reaction
     * @name MessageReaction#client
     * @type {Client}
     * @readonly
     */
    Object.defineProperty(this, 'client', { value: client });
    /**
     * The message that this reaction refers to
     * @type {Message}
     */
    this.message = message;

    /**
     * A manager of the users that have given this reaction
     * @type {ReactionUserManager}
     */
    this.users = new ReactionUserManager(client, undefined, this);

    this._emoji = new ReactionEmoji(this, data.emoji);

    this._patch(data);
  }

  _patch(data) {
    // eslint-disable-next-line eqeqeq
    if (this.count == undefined) {
      /**
       * The number of people that have given the same reaction
       * @type {?number}
       */
      this.count = data.count;
    }

    /**
     * Whether the client has given this reaction
     * @type {boolean}
     */
    this.me = data.me;
  }

  /**
   * Removes all users from this reaction.
   * @returns {Promise<MessageReaction>}
   */
  async remove() {
    await this.client.api
      .channels(this.message.channel.id)
      .messages(this.message.id)
      .reactions(this._emoji.identifier)
      .delete();
    return this;
  }

  /**
   * The emoji of this reaction, either an GuildEmoji object for known custom emojis, or a ReactionEmoji
   * object which has fewer properties. Whatever the prototype of the emoji, it will still have
   * `name`, `id`, `identifier` and `toString()`
   * @type {GuildEmoji|ReactionEmoji}
   * @readonly
   */
  get emoji() {
    if (this._emoji instanceof GuildEmoji) return this._emoji;
    // Check to see if the emoji has become known to the client
    if (this._emoji.id) {
      const emojis = this.message.client.emojis.cache;
      if (emojis.has(this._emoji.id)) {
        const emoji = emojis.get(this._emoji.id);
        this._emoji = emoji;
        return emoji;
      }
    }
    return this._emoji;
  }

  /**
   * Whether or not this reaction is a partial
   * @type {boolean}
   * @readonly
   */
  get partial() {
    return this.count === null;
  }

  /**
   * Fetch this reaction.
   * @returns {Promise<MessageReaction>}
   */
  async fetch() {
    const message = await this.message.fetch();
    const existing = message.reactions.cache.get(this.emoji.id || this.emoji.name);
    // The reaction won't get set when it has been completely removed
    this._patch(existing || { count: 0 });
    return this;
  }

  toJSON() {
    return Util.flatten(this, { emoji: 'emojiID', message: 'messageID' });
  }

  _add(user) {
    if (this.partial) return;
    this.users.cache.set(user.id, user);
    if (!this.me || user.id !== this.message.client.user.id || this.count === 0) this.count++;
    if (!this.me) this.me = user.id === this.message.client.user.id;
  }

  _remove(user) {
    if (this.partial) return;
    this.users.cache.delete(user.id);
    if (!this.me || user.id !== this.message.client.user.id) this.count--;
    if (user.id === this.message.client.user.id) this.me = false;
    if (this.count <= 0 && this.users.cache.size === 0) {
      this.message.reactions.cache.delete(this.emoji.id || this.emoji.name);
    }
  }
}

module.exports = MessageReaction;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/NewsChannel.js":
/*!***************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/NewsChannel.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const TextChannel = __webpack_require__(/*! ./TextChannel */ "./node_modules/discord.js/src/structures/TextChannel.js");
const { Error } = __webpack_require__(/*! ../errors */ "./node_modules/discord.js/src/errors/index.js");

/**
 * Represents a guild news channel on Discord.
 * @extends {TextChannel}
 */
class NewsChannel extends TextChannel {
  _patch(data) {
    super._patch(data);

    // News channels don't have a rate limit per user, remove it
    this.rateLimitPerUser = undefined;
  }

  /**
   * Adds the target to this channel's followers.
   * @param {GuildChannelResolvable} channel The channel where the webhook should be created
   * @param {string} [reason] Reason for creating the webhook
   * @returns {Promise<NewsChannel>}
   * @example
   * if (channel.type === 'news') {
   *   channel.addFollower('222197033908436994', 'Important announcements')
   *     .then(() => console.log('Added follower'))
   *     .catch(console.error);
   * }
   */
  async addFollower(channel, reason) {
    const channelID = this.guild.channels.resolveID(channel);
    if (!channelID) throw new Error('GUILD_CHANNEL_RESOLVE');
    await this.client.api.channels(this.id).followers.post({ data: { webhook_channel_id: channelID }, reason });
    return this;
  }
}

module.exports = NewsChannel;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/PartialGroupDMChannel.js":
/*!*************************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/PartialGroupDMChannel.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Channel = __webpack_require__(/*! ./Channel */ "./node_modules/discord.js/src/structures/Channel.js");
const { Error } = __webpack_require__(/*! ../errors */ "./node_modules/discord.js/src/errors/index.js");

/**
 * Represents a Partial Group DM Channel on Discord.
 * @extends {Channel}
 */
class PartialGroupDMChannel extends Channel {
  constructor(client, data) {
    super(client, data);

    /**
     * The name of this Group DM Channel
     * @type {string}
     */
    this.name = data.name;

    /**
     * The hash of the channel icon
     * @type {?string}
     */
    this.icon = data.icon;
  }

  /**
   * The URL to this channel's icon.
   * @param {ImageURLOptions} [options={}] Options for the Image URL
   * @returns {?string}
   */
  iconURL({ format, size } = {}) {
    if (!this.icon) return null;
    return this.client.rest.cdn.GDMIcon(this.id, this.icon, format, size);
  }

  delete() {
    return Promise.reject(new Error('DELETE_GROUP_DM_CHANNEL'));
  }

  fetch() {
    return Promise.reject(new Error('FETCH_GROUP_DM_CHANNEL'));
  }
}

module.exports = PartialGroupDMChannel;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/PermissionOverwrites.js":
/*!************************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/PermissionOverwrites.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Role = __webpack_require__(/*! ./Role */ "./node_modules/discord.js/src/structures/Role.js");
const { TypeError } = __webpack_require__(/*! ../errors */ "./node_modules/discord.js/src/errors/index.js");
const Permissions = __webpack_require__(/*! ../util/Permissions */ "./node_modules/discord.js/src/util/Permissions.js");
const Util = __webpack_require__(/*! ../util/Util */ "./node_modules/discord.js/src/util/Util.js");

/**
 * Represents a permission overwrite for a role or member in a guild channel.
 */
class PermissionOverwrites {
  constructor(guildChannel, data) {
    /**
     * The GuildChannel this overwrite is for
     * @name PermissionOverwrites#channel
     * @type {GuildChannel}
     * @readonly
     */
    Object.defineProperty(this, 'channel', { value: guildChannel });

    if (data) this._patch(data);
  }

  _patch(data) {
    /**
     * The ID of this overwrite, either a user ID or a role ID
     * @type {Snowflake}
     */
    this.id = data.id;

    /**
     * The type of a permission overwrite. It can be one of:
     * * member
     * * role
     * @typedef {string} OverwriteType
     */

    /**
     * The type of this overwrite
     * @type {OverwriteType}
     */
    this.type = data.type;

    /**
     * The permissions that are denied for the user or role.
     * @type {Readonly<Permissions>}
     */
    this.deny = new Permissions(data.deny).freeze();

    /**
     * The permissions that are allowed for the user or role.
     * @type {Readonly<Permissions>}
     */
    this.allow = new Permissions(data.allow).freeze();
  }

  /**
   * Updates this permissionOverwrites.
   * @param {PermissionOverwriteOptions} options The options for the update
   * @param {string} [reason] Reason for creating/editing this overwrite
   * @returns {Promise<PermissionOverwrites>}
   * @example
   * // Update permission overwrites
   * permissionOverwrites.update({
   *   SEND_MESSAGES: false
   * })
   *   .then(channel => console.log(channel.permissionOverwrites.get(message.author.id)))
   *   .catch(console.error);
   */
  update(options, reason) {
    const { allow, deny } = this.constructor.resolveOverwriteOptions(options, this);

    return this.channel.client.api
      .channels(this.channel.id)
      .permissions[this.id].put({
        data: { id: this.id, type: this.type, allow: allow.bitfield, deny: deny.bitfield },
        reason,
      })
      .then(() => this);
  }

  /**
   * Deletes this Permission Overwrite.
   * @param {string} [reason] Reason for deleting this overwrite
   * @returns {Promise<PermissionOverwrites>}
   */
  delete(reason) {
    return this.channel.client.api.channels[this.channel.id].permissions[this.id].delete({ reason }).then(() => this);
  }

  toJSON() {
    return Util.flatten(this);
  }

  /**
   * An object mapping permission flags to `true` (enabled), `null` (unset) or `false` (disabled).
   * ```js
   * {
   *  'SEND_MESSAGES': true,
   *  'EMBED_LINKS': null,
   *  'ATTACH_FILES': false,
   * }
   * ```
   * @typedef {Object} PermissionOverwriteOptions
   */

  /**
   * @typedef {object} ResolvedOverwriteOptions
   * @property {Permissions} allow The allowed permissions
   * @property {Permissions} deny The denied permissions
   */

  /**
   * Resolves bitfield permissions overwrites from an object.
   * @param {PermissionOverwriteOptions} options The options for the update
   * @param {Object} initialPermissions The initial permissions
   * @param {PermissionResolvable} initialPermissions.allow Initial allowed permissions
   * @param {PermissionResolvable} initialPermissions.deny Initial denied permissions
   * @returns {ResolvedOverwriteOptions}
   */
  static resolveOverwriteOptions(options, { allow, deny } = {}) {
    allow = new Permissions(allow);
    deny = new Permissions(deny);

    for (const [perm, value] of Object.entries(options)) {
      if (value === true) {
        allow.add(Permissions.FLAGS[perm]);
        deny.remove(Permissions.FLAGS[perm]);
      } else if (value === false) {
        allow.remove(Permissions.FLAGS[perm]);
        deny.add(Permissions.FLAGS[perm]);
      } else if (value === null) {
        allow.remove(Permissions.FLAGS[perm]);
        deny.remove(Permissions.FLAGS[perm]);
      }
    }

    return { allow, deny };
  }

  /**
   * The raw data for a permission overwrite
   * @typedef {Object} RawOverwriteData
   * @property {Snowflake} id The id of the overwrite
   * @property {number} allow The permissions to allow
   * @property {number} deny The permissions to deny
   * @property {OverwriteType} type The type of this OverwriteData
   */

  /**
   * Data that can be resolved into {@link RawOverwriteData}
   * @typedef {PermissionOverwrites|OverwriteData} OverwriteResolvable
   */

  /**
   * Data that can be used for a permission overwrite
   * @typedef {Object} OverwriteData
   * @property {GuildMemberResolvable|RoleResolvable} id Member or role this overwrite is for
   * @property {PermissionResolvable} [allow] The permissions to allow
   * @property {PermissionResolvable} [deny] The permissions to deny
   * @property {OverwriteType} [type] The type of this OverwriteData
   */

  /**
   * Resolves an overwrite into {@link RawOverwriteData}.
   * @param {OverwriteResolvable} overwrite The overwrite-like data to resolve
   * @param {Guild} guild The guild to resolve from
   * @returns {RawOverwriteData}
   */
  static resolve(overwrite, guild) {
    if (overwrite instanceof this) return overwrite.toJSON();
    if (typeof overwrite.id === 'string' && ['role', 'member'].includes(overwrite.type)) {
      return { ...overwrite, allow: Permissions.resolve(overwrite.allow), deny: Permissions.resolve(overwrite.deny) };
    }

    const userOrRole = guild.roles.resolve(overwrite.id) || guild.client.users.resolve(overwrite.id);
    if (!userOrRole) throw new TypeError('INVALID_TYPE', 'parameter', 'User nor a Role');
    const type = userOrRole instanceof Role ? 'role' : 'member';

    return {
      id: userOrRole.id,
      type,
      allow: Permissions.resolve(overwrite.allow),
      deny: Permissions.resolve(overwrite.deny),
    };
  }
}

module.exports = PermissionOverwrites;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/Presence.js":
/*!************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/Presence.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


const Emoji = __webpack_require__(/*! ./Emoji */ "./node_modules/discord.js/src/structures/Emoji.js");
const ActivityFlags = __webpack_require__(/*! ../util/ActivityFlags */ "./node_modules/discord.js/src/util/ActivityFlags.js");
const { ActivityTypes } = __webpack_require__(/*! ../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");
const Util = __webpack_require__(/*! ../util/Util */ "./node_modules/discord.js/src/util/Util.js");

/**
 * Activity sent in a message.
 * @typedef {Object} MessageActivity
 * @property {string} [partyID] Id of the party represented in activity
 * @property {number} [type] Type of activity sent
 */

/**
 * The status of this presence:
 * * **`online`** - user is online
 * * **`idle`** - user is AFK
 * * **`offline`** - user is offline or invisible
 * * **`dnd`** - user is in Do Not Disturb
 * @typedef {string} PresenceStatus
 */

/**
 * The status of this presence:
 * * **`online`** - user is online
 * * **`idle`** - user is AFK
 * * **`dnd`** - user is in Do Not Disturb
 * @typedef {string} ClientPresenceStatus
 */

/**
 * Represents a user's presence.
 */
class Presence {
  /**
   * @param {Client} client The instantiating client
   * @param {Object} [data={}] The data for the presence
   */
  constructor(client, data = {}) {
    /**
     * The client that instantiated this
     * @name Presence#client
     * @type {Client}
     * @readonly
     */
    Object.defineProperty(this, 'client', { value: client });
    /**
     * The user ID of this presence
     * @type {Snowflake}
     */
    this.userID = data.user.id;

    /**
     * The guild of this presence
     * @type {?Guild}
     */
    this.guild = data.guild || null;

    this.patch(data);
  }

  /**
   * The user of this presence
   * @type {?User}
   * @readonly
   */
  get user() {
    return this.client.users.cache.get(this.userID) || null;
  }

  /**
   * The member of this presence
   * @type {?GuildMember}
   * @readonly
   */
  get member() {
    return this.guild.members.cache.get(this.userID) || null;
  }

  patch(data) {
    /**
     * The status of this presence
     * @type {PresenceStatus}
     */
    this.status = data.status || this.status || 'offline';

    if (data.activities) {
      /**
       * The activities of this presence
       * @type {Activity[]}
       */
      this.activities = data.activities.map(activity => new Activity(this, activity));
    } else if (data.activity || data.game) {
      this.activities = [new Activity(this, data.game || data.activity)];
    } else {
      this.activities = [];
    }

    /**
     * The devices this presence is on
     * @type {?Object}
     * @property {?ClientPresenceStatus} web The current presence in the web application
     * @property {?ClientPresenceStatus} mobile The current presence in the mobile application
     * @property {?ClientPresenceStatus} desktop The current presence in the desktop application
     */
    this.clientStatus = data.client_status || null;

    return this;
  }

  _clone() {
    const clone = Object.assign(Object.create(this), this);
    if (this.activities) clone.activities = this.activities.map(activity => activity._clone());
    return clone;
  }

  /**
   * Whether this presence is equal to another.
   * @param {Presence} presence The presence to compare with
   * @returns {boolean}
   */
  equals(presence) {
    return (
      this === presence ||
      (presence &&
        this.status === presence.status &&
        this.activities.length === presence.activities.length &&
        this.activities.every((activity, index) => activity.equals(presence.activities[index])) &&
        this.clientStatus.web === presence.clientStatus.web &&
        this.clientStatus.mobile === presence.clientStatus.mobile &&
        this.clientStatus.desktop === presence.clientStatus.desktop)
    );
  }

  toJSON() {
    return Util.flatten(this);
  }
}

/**
 * Represents an activity that is part of a user's presence.
 */
class Activity {
  constructor(presence, data) {
    Object.defineProperty(this, 'presence', { value: presence });

    /**
     * The name of the activity being played
     * @type {string}
     */
    this.name = data.name;

    /**
     * The type of the activity status
     * @type {ActivityType}
     */
    this.type = ActivityTypes[data.type];

    /**
     * If the activity is being streamed, a link to the stream
     * @type {?string}
     */
    this.url = data.url || null;

    /**
     * Details about the activity
     * @type {?string}
     */
    this.details = data.details || null;

    /**
     * State of the activity
     * @type {?string}
     */
    this.state = data.state || null;

    /**
     * Application ID associated with this activity
     * @type {?Snowflake}
     */
    this.applicationID = data.application_id || null;

    /**
     * Timestamps for the activity
     * @type {?Object}
     * @property {?Date} start When the activity started
     * @property {?Date} end When the activity will end
     */
    this.timestamps = data.timestamps
      ? {
          start: data.timestamps.start ? new Date(Number(data.timestamps.start)) : null,
          end: data.timestamps.end ? new Date(Number(data.timestamps.end)) : null,
        }
      : null;

    /**
     * Party of the activity
     * @type {?Object}
     * @property {?string} id ID of the party
     * @property {number[]} size Size of the party as `[current, max]`
     */
    this.party = data.party || null;

    /**
     * Assets for rich presence
     * @type {?RichPresenceAssets}
     */
    this.assets = data.assets ? new RichPresenceAssets(this, data.assets) : null;

    this.syncID = data.sync_id;

    /**
     * Flags that describe the activity
     * @type {Readonly<ActivityFlags>}
     */
    this.flags = new ActivityFlags(data.flags).freeze();

    /**
     * Emoji for a custom activity
     * @type {?Emoji}
     */
    this.emoji = data.emoji ? new Emoji(presence.client, data.emoji) : null;

    /**
     * Creation date of the activity
     * @type {number}
     */
    this.createdTimestamp = new Date(data.created_at).getTime();
  }

  /**
   * Whether this activity is equal to another activity.
   * @param {Activity} activity The activity to compare with
   * @returns {boolean}
   */
  equals(activity) {
    return (
      this === activity ||
      (activity && this.name === activity.name && this.type === activity.type && this.url === activity.url)
    );
  }

  /**
   * The time the activity was created at
   * @type {Date}
   * @readonly
   */
  get createdAt() {
    return new Date(this.createdTimestamp);
  }

  /**
   * When concatenated with a string, this automatically returns the activities' name instead of the Activity object.
   * @returns {string}
   */
  toString() {
    return this.name;
  }

  _clone() {
    return Object.assign(Object.create(this), this);
  }
}

/**
 * Assets for a rich presence
 */
class RichPresenceAssets {
  constructor(activity, assets) {
    Object.defineProperty(this, 'activity', { value: activity });

    /**
     * Hover text for the large image
     * @type {?string}
     */
    this.largeText = assets.large_text || null;

    /**
     * Hover text for the small image
     * @type {?string}
     */
    this.smallText = assets.small_text || null;

    /**
     * ID of the large image asset
     * @type {?Snowflake}
     */
    this.largeImage = assets.large_image || null;

    /**
     * ID of the small image asset
     * @type {?Snowflake}
     */
    this.smallImage = assets.small_image || null;
  }

  /**
   * Gets the URL of the small image asset
   * @param {Object} [options] Options for the image url
   * @param {string} [options.format] Format of the image
   * @param {number} [options.size] Size of the image
   * @returns {?string} The small image URL
   */
  smallImageURL({ format, size } = {}) {
    if (!this.smallImage) return null;
    return this.activity.presence.client.rest.cdn.AppAsset(this.activity.applicationID, this.smallImage, {
      format,
      size,
    });
  }

  /**
   * Gets the URL of the large image asset
   * @param {Object} [options] Options for the image url
   * @param {string} [options.format] Format of the image
   * @param {number} [options.size] Size of the image
   * @returns {?string} The large image URL
   */
  largeImageURL({ format, size } = {}) {
    if (!this.largeImage) return null;
    if (/^spotify:/.test(this.largeImage)) {
      return `https://i.scdn.co/image/${this.largeImage.slice(8)}`;
    } else if (/^twitch:/.test(this.largeImage)) {
      return `https://static-cdn.jtvnw.net/previews-ttv/live_user_${this.largeImage.slice(7)}.png`;
    }
    return this.activity.presence.client.rest.cdn.AppAsset(this.activity.applicationID, this.largeImage, {
      format,
      size,
    });
  }
}

exports.Presence = Presence;
exports.Activity = Activity;
exports.RichPresenceAssets = RichPresenceAssets;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/ReactionCollector.js":
/*!*********************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/ReactionCollector.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Collector = __webpack_require__(/*! ./interfaces/Collector */ "./node_modules/discord.js/src/structures/interfaces/Collector.js");
const Collection = __webpack_require__(/*! ../util/Collection */ "./node_modules/discord.js/src/util/Collection.js");
const { Events } = __webpack_require__(/*! ../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

/**
 * @typedef {CollectorOptions} ReactionCollectorOptions
 * @property {number} max The maximum total amount of reactions to collect
 * @property {number} maxEmojis The maximum number of emojis to collect
 * @property {number} maxUsers The maximum number of users to react
 */

/**
 * Collects reactions on messages.
 * Will automatically stop if the message (`'messageDelete'`),
 * channel (`'channelDelete'`), or guild (`'guildDelete'`) are deleted.
 * @extends {Collector}
 */
class ReactionCollector extends Collector {
  /**
   * @param {Message} message The message upon which to collect reactions
   * @param {CollectorFilter} filter The filter to apply to this collector
   * @param {ReactionCollectorOptions} [options={}] The options to apply to this collector
   */
  constructor(message, filter, options = {}) {
    super(message.client, filter, options);

    /**
     * The message upon which to collect reactions
     * @type {Message}
     */
    this.message = message;

    /**
     * The users which have reacted to this message
     * @type {Collection}
     */
    this.users = new Collection();

    /**
     * The total number of reactions collected
     * @type {number}
     */
    this.total = 0;

    this.empty = this.empty.bind(this);
    this._handleChannelDeletion = this._handleChannelDeletion.bind(this);
    this._handleGuildDeletion = this._handleGuildDeletion.bind(this);
    this._handleMessageDeletion = this._handleMessageDeletion.bind(this);

    this.client.incrementMaxListeners();
    this.client.on(Events.MESSAGE_REACTION_ADD, this.handleCollect);
    this.client.on(Events.MESSAGE_REACTION_REMOVE, this.handleDispose);
    this.client.on(Events.MESSAGE_REACTION_REMOVE_ALL, this.empty);
    this.client.on(Events.MESSAGE_DELETE, this._handleMessageDeletion);
    this.client.on(Events.CHANNEL_DELETE, this._handleChannelDeletion);
    this.client.on(Events.GUILD_DELETE, this._handleGuildDeletion);

    this.once('end', () => {
      this.client.removeListener(Events.MESSAGE_REACTION_ADD, this.handleCollect);
      this.client.removeListener(Events.MESSAGE_REACTION_REMOVE, this.handleDispose);
      this.client.removeListener(Events.MESSAGE_REACTION_REMOVE_ALL, this.empty);
      this.client.removeListener(Events.MESSAGE_DELETE, this._handleMessageDeletion);
      this.client.removeListener(Events.CHANNEL_DELETE, this._handleChannelDeletion);
      this.client.removeListener(Events.GUILD_DELETE, this._handleGuildDeletion);
      this.client.decrementMaxListeners();
    });

    this.on('collect', (reaction, user) => {
      this.total++;
      this.users.set(user.id, user);
    });

    this.on('remove', (reaction, user) => {
      this.total--;
      if (!this.collected.some(r => r.users.cache.has(user.id))) this.users.delete(user.id);
    });
  }

  /**
   * Handles an incoming reaction for possible collection.
   * @param {MessageReaction} reaction The reaction to possibly collect
   * @returns {?Snowflake|string}
   * @private
   */
  collect(reaction) {
    /**
     * Emitted whenever a reaction is collected.
     * @event ReactionCollector#collect
     * @param {MessageReaction} reaction The reaction that was collected
     * @param {User} user The user that added the reaction
     */
    if (reaction.message.id !== this.message.id) return null;
    return ReactionCollector.key(reaction);
  }

  /**
   * Handles a reaction deletion for possible disposal.
   * @param {MessageReaction} reaction The reaction to possibly dispose of
   * @param {User} user The user that removed the reaction
   * @returns {?Snowflake|string}
   */
  dispose(reaction, user) {
    /**
     * Emitted when the reaction had all the users removed and the `dispose` option is set to true.
     * @event ReactionCollector#dispose
     * @param {MessageReaction} reaction The reaction that was disposed of
     * @param {User} user The user that removed the reaction
     */
    if (reaction.message.id !== this.message.id) return null;

    /**
     * Emitted when the reaction had one user removed and the `dispose` option is set to true.
     * @event ReactionCollector#remove
     * @param {MessageReaction} reaction The reaction that was removed
     * @param {User} user The user that removed the reaction
     */
    if (this.collected.has(ReactionCollector.key(reaction)) && this.users.has(user.id)) {
      this.emit('remove', reaction, user);
    }
    return reaction.count ? null : ReactionCollector.key(reaction);
  }

  /**
   * Empties this reaction collector.
   */
  empty() {
    this.total = 0;
    this.collected.clear();
    this.users.clear();
    this.checkEnd();
  }

  endReason() {
    if (this.options.max && this.total >= this.options.max) return 'limit';
    if (this.options.maxEmojis && this.collected.size >= this.options.maxEmojis) return 'emojiLimit';
    if (this.options.maxUsers && this.users.size >= this.options.maxUsers) return 'userLimit';
    return null;
  }

  /**
   * Handles checking if the message has been deleted, and if so, stops the collector with the reason 'messageDelete'.
   * @private
   * @param {Message} message The message that was deleted
   * @returns {void}
   */
  _handleMessageDeletion(message) {
    if (message.id === this.message.id) {
      this.stop('messageDelete');
    }
  }

  /**
   * Handles checking if the channel has been deleted, and if so, stops the collector with the reason 'channelDelete'.
   * @private
   * @param {GuildChannel} channel The channel that was deleted
   * @returns {void}
   */
  _handleChannelDeletion(channel) {
    if (channel.id === this.message.channel.id) {
      this.stop('channelDelete');
    }
  }

  /**
   * Handles checking if the guild has been deleted, and if so, stops the collector with the reason 'guildDelete'.
   * @private
   * @param {Guild} guild The guild that was deleted
   * @returns {void}
   */
  _handleGuildDeletion(guild) {
    if (this.message.guild && guild.id === this.message.guild.id) {
      this.stop('guildDelete');
    }
  }

  /**
   * Gets the collector key for a reaction.
   * @param {MessageReaction} reaction The message reaction to get the key for
   * @returns {Snowflake|string}
   */
  static key(reaction) {
    return reaction.emoji.id || reaction.emoji.name;
  }
}

module.exports = ReactionCollector;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/ReactionEmoji.js":
/*!*****************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/ReactionEmoji.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Emoji = __webpack_require__(/*! ./Emoji */ "./node_modules/discord.js/src/structures/Emoji.js");
const Util = __webpack_require__(/*! ../util/Util */ "./node_modules/discord.js/src/util/Util.js");

/**
 * Represents a limited emoji set used for both custom and unicode emojis. Custom emojis
 * will use this class opposed to the Emoji class when the client doesn't know enough
 * information about them.
 * @extends {Emoji}
 */
class ReactionEmoji extends Emoji {
  constructor(reaction, emoji) {
    super(reaction.message.client, emoji);
    /**
     * The message reaction this emoji refers to
     * @type {MessageReaction}
     */
    this.reaction = reaction;
  }

  toJSON() {
    return Util.flatten(this, { identifier: true });
  }

  valueOf() {
    return this.id;
  }
}

module.exports = ReactionEmoji;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/Role.js":
/*!********************************************************!*\
  !*** ./node_modules/discord.js/src/structures/Role.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Base = __webpack_require__(/*! ./Base */ "./node_modules/discord.js/src/structures/Base.js");
const { Error, TypeError } = __webpack_require__(/*! ../errors */ "./node_modules/discord.js/src/errors/index.js");
const Permissions = __webpack_require__(/*! ../util/Permissions */ "./node_modules/discord.js/src/util/Permissions.js");
const Snowflake = __webpack_require__(/*! ../util/Snowflake */ "./node_modules/discord.js/src/util/Snowflake.js");
const Util = __webpack_require__(/*! ../util/Util */ "./node_modules/discord.js/src/util/Util.js");

/**
 * Represents a role on Discord.
 * @extends {Base}
 */
class Role extends Base {
  /**
   * @param {Client} client The instantiating client
   * @param {Object} data The data for the role
   * @param {Guild} guild The guild the role is part of
   */
  constructor(client, data, guild) {
    super(client);

    /**
     * The guild that the role belongs to
     * @type {Guild}
     */
    this.guild = guild;

    if (data) this._patch(data);
  }

  _patch(data) {
    /**
     * The ID of the role (unique to the guild it is part of)
     * @type {Snowflake}
     */
    this.id = data.id;

    /**
     * The name of the role
     * @type {string}
     */
    this.name = data.name;

    /**
     * The base 10 color of the role
     * @type {number}
     */
    this.color = data.color;

    /**
     * If true, users that are part of this role will appear in a separate category in the users list
     * @type {boolean}
     */
    this.hoist = data.hoist;

    /**
     * The raw position of the role from the API
     * @type {number}
     */
    this.rawPosition = data.position;

    /**
     * The permissions of the role
     * @type {Readonly<Permissions>}
     */
    this.permissions = new Permissions(data.permissions).freeze();

    /**
     * Whether or not the role is managed by an external service
     * @type {boolean}
     */
    this.managed = data.managed;

    /**
     * Whether or not the role can be mentioned by anyone
     * @type {boolean}
     */
    this.mentionable = data.mentionable;

    /**
     * Whether the role has been deleted
     * @type {boolean}
     */
    this.deleted = false;
  }

  /**
   * The timestamp the role was created at
   * @type {number}
   * @readonly
   */
  get createdTimestamp() {
    return Snowflake.deconstruct(this.id).timestamp;
  }

  /**
   * The time the role was created at
   * @type {Date}
   * @readonly
   */
  get createdAt() {
    return new Date(this.createdTimestamp);
  }

  /**
   * The hexadecimal version of the role color, with a leading hashtag
   * @type {string}
   * @readonly
   */
  get hexColor() {
    return `#${this.color.toString(16).padStart(6, '0')}`;
  }

  /**
   * The cached guild members that have this role
   * @type {Collection<Snowflake, GuildMember>}
   * @readonly
   */
  get members() {
    return this.guild.members.cache.filter(m => m.roles.cache.has(this.id));
  }

  /**
   * Whether the role is editable by the client user
   * @type {boolean}
   * @readonly
   */
  get editable() {
    if (this.managed) return false;
    const clientMember = this.guild.member(this.client.user);
    if (!clientMember.permissions.has(Permissions.FLAGS.MANAGE_ROLES)) return false;
    return clientMember.roles.highest.comparePositionTo(this) > 0;
  }

  /**
   * The position of the role in the role manager
   * @type {number}
   * @readonly
   */
  get position() {
    const sorted = this.guild._sortedRoles();
    return sorted.array().indexOf(sorted.get(this.id));
  }

  /**
   * Compares this role's position to another role's.
   * @param {RoleResolvable} role Role to compare to this one
   * @returns {number} Negative number if this role's position is lower (other role's is higher),
   * positive number if this one is higher (other's is lower), 0 if equal
   */
  comparePositionTo(role) {
    role = this.guild.roles.resolve(role);
    if (!role) throw new TypeError('INVALID_TYPE', 'role', 'Role nor a Snowflake');
    return this.constructor.comparePositions(this, role);
  }

  /**
   * The data for a role.
   * @typedef {Object} RoleData
   * @property {string} [name] The name of the role
   * @property {ColorResolvable} [color] The color of the role, either a hex string or a base 10 number
   * @property {boolean} [hoist] Whether or not the role should be hoisted
   * @property {number} [position] The position of the role
   * @property {PermissionResolvable} [permissions] The permissions of the role
   * @property {boolean} [mentionable] Whether or not the role should be mentionable
   */

  /**
   * Edits the role.
   * @param {RoleData} data The new data for the role
   * @param {string} [reason] Reason for editing this role
   * @returns {Promise<Role>}
   * @example
   * // Edit a role
   * role.edit({ name: 'new role' })
   *   .then(updated => console.log(`Edited role name to ${updated.name}`))
   *   .catch(console.error);
   */
  async edit(data, reason) {
    if (typeof data.permissions !== 'undefined') data.permissions = Permissions.resolve(data.permissions);
    else data.permissions = this.permissions.bitfield;
    if (typeof data.position !== 'undefined') {
      await Util.setPosition(
        this,
        data.position,
        false,
        this.guild._sortedRoles(),
        this.client.api.guilds(this.guild.id).roles,
        reason,
      ).then(updatedRoles => {
        this.client.actions.GuildRolesPositionUpdate.handle({
          guild_id: this.guild.id,
          roles: updatedRoles,
        });
      });
    }
    return this.client.api.guilds[this.guild.id].roles[this.id]
      .patch({
        data: {
          name: data.name || this.name,
          color: data.color !== null ? Util.resolveColor(data.color || this.color) : null,
          hoist: typeof data.hoist !== 'undefined' ? data.hoist : this.hoist,
          permissions: data.permissions,
          mentionable: typeof data.mentionable !== 'undefined' ? data.mentionable : this.mentionable,
        },
        reason,
      })
      .then(role => {
        const clone = this._clone();
        clone._patch(role);
        return clone;
      });
  }

  /**
   * Returns `channel.permissionsFor(role)`. Returns permissions for a role in a guild channel,
   * taking into account permission overwrites.
   * @param {ChannelResolvable} channel The guild channel to use as context
   * @returns {Readonly<Permissions>}
   */
  permissionsIn(channel) {
    channel = this.guild.channels.resolve(channel);
    if (!channel) throw new Error('GUILD_CHANNEL_RESOLVE');
    return channel.rolePermissions(this);
  }

  /**
   * Sets a new name for the role.
   * @param {string} name The new name of the role
   * @param {string} [reason] Reason for changing the role's name
   * @returns {Promise<Role>}
   * @example
   * // Set the name of the role
   * role.setName('new role')
   *   .then(updated => console.log(`Updated role name to ${updated.name}`))
   *   .catch(console.error);
   */
  setName(name, reason) {
    return this.edit({ name }, reason);
  }

  /**
   * Sets a new color for the role.
   * @param {ColorResolvable} color The color of the role
   * @param {string} [reason] Reason for changing the role's color
   * @returns {Promise<Role>}
   * @example
   * // Set the color of a role
   * role.setColor('#FF0000')
   *   .then(updated => console.log(`Set color of role to ${updated.color}`))
   *   .catch(console.error);
   */
  setColor(color, reason) {
    return this.edit({ color }, reason);
  }

  /**
   * Sets whether or not the role should be hoisted.
   * @param {boolean} hoist Whether or not to hoist the role
   * @param {string} [reason] Reason for setting whether or not the role should be hoisted
   * @returns {Promise<Role>}
   * @example
   * // Set the hoist of the role
   * role.setHoist(true)
   *   .then(updated => console.log(`Role hoisted: ${updated.hoist}`))
   *   .catch(console.error);
   */
  setHoist(hoist, reason) {
    return this.edit({ hoist }, reason);
  }

  /**
   * Sets the permissions of the role.
   * @param {PermissionResolvable} permissions The permissions of the role
   * @param {string} [reason] Reason for changing the role's permissions
   * @returns {Promise<Role>}
   * @example
   * // Set the permissions of the role
   * role.setPermissions(['KICK_MEMBERS', 'BAN_MEMBERS'])
   *   .then(updated => console.log(`Updated permissions to ${updated.permissions.bitfield}`))
   *   .catch(console.error);
   * @example
   * // Remove all permissions from a role
   * role.setPermissions(0)
   *   .then(updated => console.log(`Updated permissions to ${updated.permissions.bitfield}`))
   *   .catch(console.error);
   */
  setPermissions(permissions, reason) {
    return this.edit({ permissions }, reason);
  }

  /**
   * Sets whether this role is mentionable.
   * @param {boolean} mentionable Whether this role should be mentionable
   * @param {string} [reason] Reason for setting whether or not this role should be mentionable
   * @returns {Promise<Role>}
   * @example
   * // Make the role mentionable
   * role.setMentionable(true)
   *   .then(updated => console.log(`Role updated ${updated.name}`))
   *   .catch(console.error);
   */
  setMentionable(mentionable, reason) {
    return this.edit({ mentionable }, reason);
  }

  /**
   * Sets the position of the role.
   * @param {number} position The position of the role
   * @param {Object} [options] Options for setting position
   * @param {boolean} [options.relative=false] Change the position relative to its current value
   * @param {string} [options.reason] Reason for changing the position
   * @returns {Promise<Role>}
   * @example
   * // Set the position of the role
   * role.setPosition(1)
   *   .then(updated => console.log(`Role position: ${updated.position}`))
   *   .catch(console.error);
   */
  setPosition(position, { relative, reason } = {}) {
    return Util.setPosition(
      this,
      position,
      relative,
      this.guild._sortedRoles(),
      this.client.api.guilds(this.guild.id).roles,
      reason,
    ).then(updatedRoles => {
      this.client.actions.GuildRolesPositionUpdate.handle({
        guild_id: this.guild.id,
        roles: updatedRoles,
      });
      return this;
    });
  }

  /**
   * Deletes the role.
   * @param {string} [reason] Reason for deleting this role
   * @returns {Promise<Role>}
   * @example
   * // Delete a role
   * role.delete('The role needed to go')
   *   .then(deleted => console.log(`Deleted role ${deleted.name}`))
   *   .catch(console.error);
   */
  delete(reason) {
    return this.client.api.guilds[this.guild.id].roles[this.id].delete({ reason }).then(() => {
      this.client.actions.GuildRoleDelete.handle({ guild_id: this.guild.id, role_id: this.id });
      return this;
    });
  }

  /**
   * Whether this role equals another role. It compares all properties, so for most operations
   * it is advisable to just compare `role.id === role2.id` as it is much faster and is often
   * what most users need.
   * @param {Role} role Role to compare with
   * @returns {boolean}
   */
  equals(role) {
    return (
      role &&
      this.id === role.id &&
      this.name === role.name &&
      this.color === role.color &&
      this.hoist === role.hoist &&
      this.position === role.position &&
      this.permissions.bitfield === role.permissions.bitfield &&
      this.managed === role.managed
    );
  }

  /**
   * When concatenated with a string, this automatically returns the role's mention instead of the Role object.
   * @returns {string}
   * @example
   * // Logs: Role: <@&123456789012345678>
   * console.log(`Role: ${role}`);
   */
  toString() {
    if (this.id === this.guild.id) return '@everyone';
    return `<@&${this.id}>`;
  }

  toJSON() {
    return super.toJSON({ createdTimestamp: true });
  }

  /**
   * Compares the positions of two roles.
   * @param {Role} role1 First role to compare
   * @param {Role} role2 Second role to compare
   * @returns {number} Negative number if the first role's position is lower (second role's is higher),
   * positive number if the first's is higher (second's is lower), 0 if equal
   */
  static comparePositions(role1, role2) {
    if (role1.position === role2.position) return role2.id - role1.id;
    return role1.position - role2.position;
  }
}

module.exports = Role;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/StoreChannel.js":
/*!****************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/StoreChannel.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const GuildChannel = __webpack_require__(/*! ./GuildChannel */ "./node_modules/discord.js/src/structures/GuildChannel.js");

/**
 * Represents a guild store channel on Discord.
 * @extends {GuildChannel}
 */
class StoreChannel extends GuildChannel {
  /**
   * @param {*} guild The guild the store channel is part of
   * @param {*} data The data for the store channel
   */
  constructor(guild, data) {
    super(guild, data);

    /**
     * If the guild considers this channel NSFW
     * @type {boolean}
     * @readonly
     */
    this.nsfw = Boolean(data.nsfw);
  }

  _patch(data) {
    super._patch(data);

    if (typeof data.nsfw !== 'undefined') this.nsfw = Boolean(data.nsfw);
  }
}

module.exports = StoreChannel;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/Team.js":
/*!********************************************************!*\
  !*** ./node_modules/discord.js/src/structures/Team.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Base = __webpack_require__(/*! ./Base */ "./node_modules/discord.js/src/structures/Base.js");
const TeamMember = __webpack_require__(/*! ./TeamMember */ "./node_modules/discord.js/src/structures/TeamMember.js");
const Collection = __webpack_require__(/*! ../util/Collection */ "./node_modules/discord.js/src/util/Collection.js");
const Snowflake = __webpack_require__(/*! ../util/Snowflake */ "./node_modules/discord.js/src/util/Snowflake.js");

/**
 * Represents a Client OAuth2 Application Team.
 * @extends {Base}
 */
class Team extends Base {
  constructor(client, data) {
    super(client);
    this._patch(data);
  }

  _patch(data) {
    /**
     * The ID of the Team
     * @type {Snowflake}
     */
    this.id = data.id;

    /**
     * The name of the Team
     * @type {string}
     */
    this.name = data.name;

    /**
     * The Team's icon hash
     * @type {?string}
     */
    this.icon = data.icon || null;

    /**
     * The Team's owner id
     * @type {?string}
     */
    this.ownerID = data.owner_user_id || null;

    /**
     * The Team's members
     * @type {Collection<Snowflake, TeamMember>}
     */
    this.members = new Collection();

    for (const memberData of data.members) {
      const member = new TeamMember(this, memberData);
      this.members.set(member.id, member);
    }
  }

  /**
   * The owner of this team
   * @type {?TeamMember}
   * @readonly
   */
  get owner() {
    return this.members.get(this.ownerID) || null;
  }

  /**
   * The timestamp the team was created at
   * @type {number}
   * @readonly
   */
  get createdTimestamp() {
    return Snowflake.deconstruct(this.id).timestamp;
  }

  /**
   * The time the team was created at
   * @type {Date}
   * @readonly
   */
  get createdAt() {
    return new Date(this.createdTimestamp);
  }

  /**
   * A link to the teams's icon.
   * @param {ImageURLOptions} [options={}] Options for the Image URL
   * @returns {?string} URL to the icon
   */
  iconURL({ format, size } = {}) {
    if (!this.icon) return null;
    return this.client.rest.cdn.TeamIcon(this.id, this.icon, { format, size });
  }

  /**
   * When concatenated with a string, this automatically returns the Team's name instead of the
   * Team object.
   * @returns {string}
   * @example
   * // Logs: Team name: My Team
   * console.log(`Team name: ${team}`);
   */
  toString() {
    return this.name;
  }

  toJSON() {
    return super.toJSON({ createdTimestamp: true });
  }
}

module.exports = Team;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/TeamMember.js":
/*!**************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/TeamMember.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Base = __webpack_require__(/*! ./Base */ "./node_modules/discord.js/src/structures/Base.js");
const { MembershipStates } = __webpack_require__(/*! ../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

/**
 * Represents a Client OAuth2 Application Team Member.
 * @extends {Base}
 */
class TeamMember extends Base {
  constructor(team, data) {
    super(team.client);

    /**
     * The Team this member is part of
     * @type {Team}
     */
    this.team = team;

    this._patch(data);
  }

  _patch(data) {
    /**
     * The permissions this Team Member has with regard to the team
     * @type {string[]}
     */
    this.permissions = data.permissions;

    /**
     * The permissions this Team Member has with regard to the team
     * @type {MembershipStates}
     */
    this.membershipState = MembershipStates[data.membership_state];

    /**
     * The user for this Team Member
     * @type {User}
     */
    this.user = this.client.users.add(data.user);
  }

  /**
   * The ID of the Team Member
   * @type {Snowflake}
   * @readonly
   */
  get id() {
    return this.user.id;
  }

  /**
   * When concatenated with a string, this automatically returns the team members's mention instead of the
   * TeamMember object.
   * @returns {string}
   * @example
   * // Logs: Team Member's mention: <@123456789012345678>
   * console.log(`Team Member's mention: ${teamMember}`);
   */
  toString() {
    return this.user.toString();
  }
}

module.exports = TeamMember;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/TextChannel.js":
/*!***************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/TextChannel.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const GuildChannel = __webpack_require__(/*! ./GuildChannel */ "./node_modules/discord.js/src/structures/GuildChannel.js");
const Webhook = __webpack_require__(/*! ./Webhook */ "./node_modules/discord.js/src/structures/Webhook.js");
const TextBasedChannel = __webpack_require__(/*! ./interfaces/TextBasedChannel */ "./node_modules/discord.js/src/structures/interfaces/TextBasedChannel.js");
const MessageManager = __webpack_require__(/*! ../managers/MessageManager */ "./node_modules/discord.js/src/managers/MessageManager.js");
const Collection = __webpack_require__(/*! ../util/Collection */ "./node_modules/discord.js/src/util/Collection.js");
const DataResolver = __webpack_require__(/*! ../util/DataResolver */ "./node_modules/discord.js/src/util/DataResolver.js");

/**
 * Represents a guild text channel on Discord.
 * @extends {GuildChannel}
 * @implements {TextBasedChannel}
 */
class TextChannel extends GuildChannel {
  /**
   * @param {Guild} guild The guild the text channel is part of
   * @param {Object} data The data for the text channel
   */
  constructor(guild, data) {
    super(guild, data);
    /**
     * A manager of the messages sent to this channel
     * @type {MessageManager}
     */
    this.messages = new MessageManager(this);

    /**
     * If the guild considers this channel NSFW
     * @type {boolean}
     * @readonly
     */
    this.nsfw = Boolean(data.nsfw);
    this._typing = new Map();
  }

  _patch(data) {
    super._patch(data);

    /**
     * The topic of the text channel
     * @type {?string}
     */
    this.topic = data.topic;

    if (typeof data.nsfw !== 'undefined') this.nsfw = Boolean(data.nsfw);

    /**
     * The ID of the last message sent in this channel, if one was sent
     * @type {?Snowflake}
     */
    this.lastMessageID = data.last_message_id;

    /**
     * The ratelimit per user for this channel in seconds
     * @type {number}
     */
    this.rateLimitPerUser = data.rate_limit_per_user || 0;

    /**
     * The timestamp when the last pinned message was pinned, if there was one
     * @type {?number}
     */
    this.lastPinTimestamp = data.last_pin_timestamp ? new Date(data.last_pin_timestamp).getTime() : null;

    if (data.messages) for (const message of data.messages) this.messages.add(message);
  }

  /**
   * Sets the rate limit per user for this channel.
   * @param {number} rateLimitPerUser The new ratelimit in seconds
   * @param {string} [reason] Reason for changing the channel's ratelimits
   * @returns {Promise<TextChannel>}
   */
  setRateLimitPerUser(rateLimitPerUser, reason) {
    return this.edit({ rateLimitPerUser }, reason);
  }

  /**
   * Sets whether this channel is flagged as NSFW.
   * @param {boolean} nsfw Whether the channel should be considered NSFW
   * @param {string} [reason] Reason for changing the channel's NSFW flag
   * @returns {Promise<TextChannel>}
   */
  setNSFW(nsfw, reason) {
    return this.edit({ nsfw }, reason);
  }

  /**
   * Fetches all webhooks for the channel.
   * @returns {Promise<Collection<Snowflake, Webhook>>}
   * @example
   * // Fetch webhooks
   * channel.fetchWebhooks()
   *   .then(hooks => console.log(`This channel has ${hooks.size} hooks`))
   *   .catch(console.error);
   */
  fetchWebhooks() {
    return this.client.api.channels[this.id].webhooks.get().then(data => {
      const hooks = new Collection();
      for (const hook of data) hooks.set(hook.id, new Webhook(this.client, hook));
      return hooks;
    });
  }

  /**
   * Creates a webhook for the channel.
   * @param {string} name The name of the webhook
   * @param {Object} [options] Options for creating the webhook
   * @param {BufferResolvable|Base64Resolvable} [options.avatar] Avatar for the webhook
   * @param {string} [options.reason] Reason for creating the webhook
   * @returns {Promise<Webhook>} webhook The created webhook
   * @example
   * // Create a webhook for the current channel
   * channel.createWebhook('Snek', {
   *   avatar: 'https://i.imgur.com/mI8XcpG.jpg',
   *   reason: 'Needed a cool new Webhook'
   * })
   *   .then(console.log)
   *   .catch(console.error)
   */
  async createWebhook(name, { avatar, reason } = {}) {
    if (typeof avatar === 'string' && !avatar.startsWith('data:')) {
      avatar = await DataResolver.resolveImage(avatar);
    }
    return this.client.api.channels[this.id].webhooks
      .post({
        data: {
          name,
          avatar,
        },
        reason,
      })
      .then(data => new Webhook(this.client, data));
  }

  // These are here only for documentation purposes - they are implemented by TextBasedChannel
  /* eslint-disable no-empty-function */
  get lastMessage() {}
  get lastPinAt() {}
  send() {}
  startTyping() {}
  stopTyping() {}
  get typing() {}
  get typingCount() {}
  createMessageCollector() {}
  awaitMessages() {}
  bulkDelete() {}
}

TextBasedChannel.applyToClass(TextChannel, true);

module.exports = TextChannel;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/User.js":
/*!********************************************************!*\
  !*** ./node_modules/discord.js/src/structures/User.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Base = __webpack_require__(/*! ./Base */ "./node_modules/discord.js/src/structures/Base.js");
const TextBasedChannel = __webpack_require__(/*! ./interfaces/TextBasedChannel */ "./node_modules/discord.js/src/structures/interfaces/TextBasedChannel.js");
const { Error } = __webpack_require__(/*! ../errors */ "./node_modules/discord.js/src/errors/index.js");
const Snowflake = __webpack_require__(/*! ../util/Snowflake */ "./node_modules/discord.js/src/util/Snowflake.js");
const UserFlags = __webpack_require__(/*! ../util/UserFlags */ "./node_modules/discord.js/src/util/UserFlags.js");

let Structures;

/**
 * Represents a user on Discord.
 * @implements {TextBasedChannel}
 * @extends {Base}
 */
class User extends Base {
  /**
   * @param {Client} client The instantiating client
   * @param {Object} data The data for the user
   */
  constructor(client, data) {
    super(client);

    /**
     * The ID of the user
     * @type {Snowflake}
     */
    this.id = data.id;

    this.system = null;
    this.locale = null;
    this.flags = null;

    this._patch(data);
  }

  _patch(data) {
    if ('username' in data) {
      /**
       * The username of the user
       * @type {?string}
       */
      this.username = data.username;
    } else if (typeof this.username !== 'string') {
      this.username = null;
    }

    if ('bot' in data || typeof this.bot !== 'boolean') {
      /**
       * Whether or not the user is a bot
       * @type {boolean}
       */
      this.bot = Boolean(data.bot);
    }

    if ('discriminator' in data) {
      /**
       * A discriminator based on username for the user
       * @type {?string}
       */
      this.discriminator = data.discriminator;
    } else if (typeof this.discriminator !== 'string') {
      this.discriminator = null;
    }

    if ('avatar' in data) {
      /**
       * The ID of the user's avatar
       * @type {?string}
       */
      this.avatar = data.avatar;
    } else if (typeof this.avatar !== 'string') {
      this.avatar = null;
    }

    if ('system' in data) {
      /**
       * Whether the user is an Official Discord System user (part of the urgent message system)
       * @type {?boolean}
       */
      this.system = Boolean(data.system);
    }

    if ('locale' in data) {
      /**
       * The locale of the user's client (ISO 639-1)
       * @type {?string}
       */
      this.locale = data.locale;
    }

    if ('public_flags' in data) {
      /**
       * The flags for this user
       * @type {?UserFlags}
       */
      this.flags = new UserFlags(data.public_flags);
    }

    /**
     * The ID of the last message sent by the user, if one was sent
     * @type {?Snowflake}
     */
    this.lastMessageID = null;

    /**
     * The ID of the channel for the last message sent by the user, if one was sent
     * @type {?Snowflake}
     */
    this.lastMessageChannelID = null;
  }

  /**
   * Whether this User is a partial
   * @type {boolean}
   * @readonly
   */
  get partial() {
    return typeof this.username !== 'string';
  }

  /**
   * The timestamp the user was created at
   * @type {number}
   * @readonly
   */
  get createdTimestamp() {
    return Snowflake.deconstruct(this.id).timestamp;
  }

  /**
   * The time the user was created at
   * @type {Date}
   * @readonly
   */
  get createdAt() {
    return new Date(this.createdTimestamp);
  }

  /**
   * The Message object of the last message sent by the user, if one was sent
   * @type {?Message}
   * @readonly
   */
  get lastMessage() {
    const channel = this.client.channels.cache.get(this.lastMessageChannelID);
    return (channel && channel.messages.cache.get(this.lastMessageID)) || null;
  }

  /**
   * The presence of this user
   * @type {Presence}
   * @readonly
   */
  get presence() {
    for (const guild of this.client.guilds.cache.values()) {
      if (guild.presences.cache.has(this.id)) return guild.presences.cache.get(this.id);
    }
    if (!Structures) Structures = __webpack_require__(/*! ../util/Structures */ "./node_modules/discord.js/src/util/Structures.js");
    const Presence = Structures.get('Presence');
    return new Presence(this.client, { user: { id: this.id } });
  }

  /**
   * A link to the user's avatar.
   * @param {ImageURLOptions} [options={}] Options for the Image URL
   * @returns {?string}
   */
  avatarURL({ format, size, dynamic } = {}) {
    if (!this.avatar) return null;
    return this.client.rest.cdn.Avatar(this.id, this.avatar, format, size, dynamic);
  }

  /**
   * A link to the user's default avatar
   * @type {string}
   * @readonly
   */
  get defaultAvatarURL() {
    return this.client.rest.cdn.DefaultAvatar(this.discriminator % 5);
  }

  /**
   * A link to the user's avatar if they have one.
   * Otherwise a link to their default avatar will be returned.
   * @param {ImageURLOptions} [options={}] Options for the Image URL
   * @returns {string}
   */
  displayAvatarURL(options) {
    return this.avatarURL(options) || this.defaultAvatarURL;
  }

  /**
   * The Discord "tag" (e.g. `hydrabolt#0001`) for this user
   * @type {?string}
   * @readonly
   */
  get tag() {
    return typeof this.username === 'string' ? `${this.username}#${this.discriminator}` : null;
  }

  /**
   * Checks whether the user is typing in a channel.
   * @param {ChannelResolvable} channel The channel to check in
   * @returns {boolean}
   */
  typingIn(channel) {
    channel = this.client.channels.resolve(channel);
    return channel._typing.has(this.id);
  }

  /**
   * Gets the time that the user started typing.
   * @param {ChannelResolvable} channel The channel to get the time in
   * @returns {?Date}
   */
  typingSinceIn(channel) {
    channel = this.client.channels.resolve(channel);
    return channel._typing.has(this.id) ? new Date(channel._typing.get(this.id).since) : null;
  }

  /**
   * Gets the amount of time the user has been typing in a channel for (in milliseconds), or -1 if they're not typing.
   * @param {ChannelResolvable} channel The channel to get the time in
   * @returns {number}
   */
  typingDurationIn(channel) {
    channel = this.client.channels.resolve(channel);
    return channel._typing.has(this.id) ? channel._typing.get(this.id).elapsedTime : -1;
  }

  /**
   * The DM between the client's user and this user
   * @type {?DMChannel}
   * @readonly
   */
  get dmChannel() {
    return this.client.channels.cache.find(c => c.type === 'dm' && c.recipient.id === this.id) || null;
  }

  /**
   * Creates a DM channel between the client and the user.
   * @param {boolean} [force=false] Whether to skip the cache check and request the API
   * @returns {Promise<DMChannel>}
   */
  async createDM(force = false) {
    if (!force) {
      const { dmChannel } = this;
      if (dmChannel && !dmChannel.partial) return dmChannel;
    }

    const data = await this.client.api.users(this.client.user.id).channels.post({
      data: {
        recipient_id: this.id,
      },
    });
    return this.client.actions.ChannelCreate.handle(data).channel;
  }

  /**
   * Deletes a DM channel (if one exists) between the client and the user. Resolves with the channel if successful.
   * @returns {Promise<DMChannel>}
   */
  async deleteDM() {
    const { dmChannel } = this;
    if (!dmChannel) throw new Error('USER_NO_DMCHANNEL');
    const data = await this.client.api.channels(dmChannel.id).delete();
    return this.client.actions.ChannelDelete.handle(data).channel;
  }

  /**
   * Checks if the user is equal to another. It compares ID, username, discriminator, avatar, and bot flags.
   * It is recommended to compare equality by using `user.id === user2.id` unless you want to compare all properties.
   * @param {User} user User to compare with
   * @returns {boolean}
   */
  equals(user) {
    let equal =
      user &&
      this.id === user.id &&
      this.username === user.username &&
      this.discriminator === user.discriminator &&
      this.avatar === user.avatar;

    return equal;
  }

  /**
   * Fetches this user's flags.
   * @param {boolean} [force=false] Whether to skip the cache check and request the AP
   * @returns {Promise<UserFlags>}
   */
  async fetchFlags(force = false) {
    if (this.flags && !force) return this.flags;
    const data = await this.client.api.users(this.id).get();
    this._patch(data);
    return this.flags;
  }

  /**
   * Fetches this user.
   * @param {boolean} [force=false] Whether to skip the cache check and request the AP
   * @returns {Promise<User>}
   */
  fetch(force = false) {
    return this.client.users.fetch(this.id, true, force);
  }

  /**
   * When concatenated with a string, this automatically returns the user's mention instead of the User object.
   * @returns {string}
   * @example
   * // Logs: Hello from <@123456789012345678>!
   * console.log(`Hello from ${user}!`);
   */
  toString() {
    return `<@${this.id}>`;
  }

  toJSON(...props) {
    const json = super.toJSON(
      {
        createdTimestamp: true,
        defaultAvatarURL: true,
        tag: true,
        lastMessage: false,
        lastMessageID: false,
      },
      ...props,
    );
    json.avatarURL = this.avatarURL();
    json.displayAvatarURL = this.displayAvatarURL();
    return json;
  }

  // These are here only for documentation purposes - they are implemented by TextBasedChannel
  /* eslint-disable no-empty-function */
  send() {}
}

TextBasedChannel.applyToClass(User);

module.exports = User;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/VoiceChannel.js":
/*!****************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/VoiceChannel.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const GuildChannel = __webpack_require__(/*! ./GuildChannel */ "./node_modules/discord.js/src/structures/GuildChannel.js");
const { Error } = __webpack_require__(/*! ../errors */ "./node_modules/discord.js/src/errors/index.js");
const Collection = __webpack_require__(/*! ../util/Collection */ "./node_modules/discord.js/src/util/Collection.js");
const { browser } = __webpack_require__(/*! ../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");
const Permissions = __webpack_require__(/*! ../util/Permissions */ "./node_modules/discord.js/src/util/Permissions.js");

/**
 * Represents a guild voice channel on Discord.
 * @extends {GuildChannel}
 */
class VoiceChannel extends GuildChannel {
  _patch(data) {
    super._patch(data);
    /**
     * The bitrate of this voice channel
     * @type {number}
     */
    this.bitrate = data.bitrate;

    /**
     * The maximum amount of users allowed in this channel - 0 means unlimited.
     * @type {number}
     */
    this.userLimit = data.user_limit;
  }

  /**
   * The members in this voice channel
   * @type {Collection<Snowflake, GuildMember>}
   * @readonly
   */
  get members() {
    const coll = new Collection();
    for (const state of this.guild.voiceStates.cache.values()) {
      if (state.channelID === this.id && state.member) {
        coll.set(state.id, state.member);
      }
    }
    return coll;
  }

  /**
   * Checks if the voice channel is full
   * @type {boolean}
   * @readonly
   */
  get full() {
    return this.userLimit > 0 && this.members.size >= this.userLimit;
  }

  /**
   * Whether the channel is deletable by the client user
   * @type {boolean}
   * @readonly
   */
  get deletable() {
    return super.deletable && this.permissionsFor(this.client.user).has(Permissions.FLAGS.CONNECT, false);
  }

  /**
   * Whether the channel is editable by the client user
   * @type {boolean}
   * @readonly
   */
  get editable() {
    return this.manageable && this.permissionsFor(this.client.user).has(Permissions.FLAGS.CONNECT, false);
  }

  /**
   * Whether the channel is joinable by the client user
   * @type {boolean}
   * @readonly
   */
  get joinable() {
    if (browser) return false;
    if (!this.viewable) return false;
    if (!this.permissionsFor(this.client.user).has(Permissions.FLAGS.CONNECT, false)) return false;
    if (this.full && !this.permissionsFor(this.client.user).has(Permissions.FLAGS.MOVE_MEMBERS, false)) return false;
    return true;
  }

  /**
   * Checks if the client has permission to send audio to the voice channel
   * @type {boolean}
   * @readonly
   */
  get speakable() {
    return this.permissionsFor(this.client.user).has(Permissions.FLAGS.SPEAK, false);
  }

  /**
   * Sets the bitrate of the channel.
   * @param {number} bitrate The new bitrate
   * @param {string} [reason] Reason for changing the channel's bitrate
   * @returns {Promise<VoiceChannel>}
   * @example
   * // Set the bitrate of a voice channel
   * voiceChannel.setBitrate(48000)
   *   .then(vc => console.log(`Set bitrate to ${vc.bitrate}bps for ${vc.name}`))
   *   .catch(console.error);
   */
  setBitrate(bitrate, reason) {
    return this.edit({ bitrate }, reason);
  }

  /**
   * Sets the user limit of the channel.
   * @param {number} userLimit The new user limit
   * @param {string} [reason] Reason for changing the user limit
   * @returns {Promise<VoiceChannel>}
   * @example
   * // Set the user limit of a voice channel
   * voiceChannel.setUserLimit(42)
   *   .then(vc => console.log(`Set user limit to ${vc.userLimit} for ${vc.name}`))
   *   .catch(console.error);
   */
  setUserLimit(userLimit, reason) {
    return this.edit({ userLimit }, reason);
  }

  /**
   * Attempts to join this voice channel.
   * @returns {Promise<VoiceConnection>}
   * @example
   * // Join a voice channel
   * voiceChannel.join()
   *   .then(connection => console.log('Connected!'))
   *   .catch(console.error);
   */
  join() {
    if (browser) return Promise.reject(new Error('VOICE_NO_BROWSER'));
    return this.client.voice.joinChannel(this);
  }

  /**
   * Leaves this voice channel.
   * @example
   * // Leave a voice channel
   * voiceChannel.leave();
   */
  leave() {
    if (browser) return;
    const connection = this.client.voice.connections.get(this.guild.id);
    if (connection && connection.channel.id === this.id) connection.disconnect();
  }
}

module.exports = VoiceChannel;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/VoiceRegion.js":
/*!***************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/VoiceRegion.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Util = __webpack_require__(/*! ../util/Util */ "./node_modules/discord.js/src/util/Util.js");

/**
 * Represents a Discord voice region for guilds.
 */
class VoiceRegion {
  constructor(data) {
    /**
     * The ID of the region
     * @type {string}
     */
    this.id = data.id;

    /**
     * Name of the region
     * @type {string}
     */
    this.name = data.name;

    /**
     * Whether the region is VIP-only
     * @type {boolean}
     */
    this.vip = data.vip;

    /**
     * Whether the region is deprecated
     * @type {boolean}
     */
    this.deprecated = data.deprecated;

    /**
     * Whether the region is optimal
     * @type {boolean}
     */
    this.optimal = data.optimal;

    /**
     * Whether the region is custom
     * @type {boolean}
     */
    this.custom = data.custom;
  }

  toJSON() {
    return Util.flatten(this);
  }
}

module.exports = VoiceRegion;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/VoiceState.js":
/*!**************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/VoiceState.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Base = __webpack_require__(/*! ./Base */ "./node_modules/discord.js/src/structures/Base.js");
const { Error, TypeError } = __webpack_require__(/*! ../errors */ "./node_modules/discord.js/src/errors/index.js");
const { browser } = __webpack_require__(/*! ../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");

/**
 * Represents the voice state for a Guild Member.
 */
class VoiceState extends Base {
  /**
   * @param {Guild} guild The guild the voice state is part of
   * @param {Object} data The data for the voice state
   */
  constructor(guild, data) {
    super(guild.client);
    /**
     * The guild of this voice state
     * @type {Guild}
     */
    this.guild = guild;
    /**
     * The ID of the member of this voice state
     * @type {Snowflake}
     */
    this.id = data.user_id;
    this._patch(data);
  }

  _patch(data) {
    /**
     * Whether this member is deafened server-wide
     * @type {?boolean}
     */
    this.serverDeaf = 'deaf' in data ? data.deaf : null;
    /**
     * Whether this member is muted server-wide
     * @type {?boolean}
     */
    this.serverMute = 'mute' in data ? data.mute : null;
    /**
     * Whether this member is self-deafened
     * @type {?boolean}
     */
    this.selfDeaf = 'self_deaf' in data ? data.self_deaf : null;
    /**
     * Whether this member is self-muted
     * @type {?boolean}
     */
    this.selfMute = 'self_mute' in data ? data.self_mute : null;
    /**
     * Whether this member's camera is enabled
     * @type {?boolean}
     */
    this.selfVideo = 'self_video' in data ? data.self_video : null;
    /**
     * The session ID of this member's connection
     * @type {?string}
     */
    this.sessionID = 'session_id' in data ? data.session_id : null;
    /**
     * Whether this member is streaming using "Go Live"
     * @type {boolean}
     */
    this.streaming = data.self_stream || false;
    /**
     * The ID of the voice channel that this member is in
     * @type {?Snowflake}
     */
    this.channelID = data.channel_id || null;
    return this;
  }

  /**
   * The member that this voice state belongs to
   * @type {?GuildMember}
   * @readonly
   */
  get member() {
    return this.guild.members.cache.get(this.id) || null;
  }

  /**
   * The channel that the member is connected to
   * @type {?VoiceChannel}
   * @readonly
   */
  get channel() {
    return this.guild.channels.cache.get(this.channelID) || null;
  }

  /**
   * If this is a voice state of the client user, then this will refer to the active VoiceConnection for this guild
   * @type {?VoiceConnection}
   * @readonly
   */
  get connection() {
    if (browser || this.id !== this.client.user.id) return null;
    return this.client.voice.connections.get(this.guild.id) || null;
  }

  /**
   * Whether this member is either self-deafened or server-deafened
   * @type {?boolean}
   * @readonly
   */
  get deaf() {
    return this.serverDeaf || this.selfDeaf;
  }

  /**
   * Whether this member is either self-muted or server-muted
   * @type {?boolean}
   * @readonly
   */
  get mute() {
    return this.serverMute || this.selfMute;
  }

  /**
   * Whether this member is currently speaking. A boolean if the information is available (aka
   * the bot is connected to any voice channel in the guild), otherwise this is null
   * @type {?boolean}
   * @readonly
   */
  get speaking() {
    return this.channel && this.channel.connection ? Boolean(this.channel.connection._speaking.get(this.id)) : null;
  }

  /**
   * Mutes/unmutes the member of this voice state.
   * @param {boolean} mute Whether or not the member should be muted
   * @param {string} [reason] Reason for muting or unmuting
   * @returns {Promise<GuildMember>}
   */
  setMute(mute, reason) {
    return this.member ? this.member.edit({ mute }, reason) : Promise.reject(new Error('VOICE_STATE_UNCACHED_MEMBER'));
  }

  /**
   * Deafens/undeafens the member of this voice state.
   * @param {boolean} deaf Whether or not the member should be deafened
   * @param {string} [reason] Reason for deafening or undeafening
   * @returns {Promise<GuildMember>}
   */
  setDeaf(deaf, reason) {
    return this.member ? this.member.edit({ deaf }, reason) : Promise.reject(new Error('VOICE_STATE_UNCACHED_MEMBER'));
  }

  /**
   * Kicks the member from the voice channel.
   * @param {string} [reason] Reason for kicking member from the channel
   * @returns {Promise<GuildMember>}
   */
  kick(reason) {
    return this.setChannel(null, reason);
  }

  /**
   * Moves the member to a different channel, or disconnects them from the one they're in.
   * @param {ChannelResolvable|null} [channel] Channel to move the member to, or `null` if you want to disconnect them
   * from voice.
   * @param {string} [reason] Reason for moving member to another channel or disconnecting
   * @returns {Promise<GuildMember>}
   */
  setChannel(channel, reason) {
    return this.member
      ? this.member.edit({ channel }, reason)
      : Promise.reject(new Error('VOICE_STATE_UNCACHED_MEMBER'));
  }

  /**
   * Self-mutes/unmutes the bot for this voice state.
   * @param {boolean} mute Whether or not the bot should be self-muted
   * @returns {Promise<boolean>} true if the voice state was successfully updated, otherwise false
   */
  async setSelfMute(mute) {
    if (this.id !== this.client.user.id) throw new Error('VOICE_STATE_NOT_OWN');
    if (typeof mute !== 'boolean') throw new TypeError('VOICE_STATE_INVALID_TYPE', 'mute');
    if (!this.connection) return false;
    this.selfMute = mute;
    await this.connection.sendVoiceStateUpdate();
    return true;
  }

  /**
   * Self-deafens/undeafens the bot for this voice state.
   * @param {boolean} deaf Whether or not the bot should be self-deafened
   * @returns {Promise<boolean>} true if the voice state was successfully updated, otherwise false
   */
  async setSelfDeaf(deaf) {
    if (this.id !== this.client.user.id) return new Error('VOICE_STATE_NOT_OWN');
    if (typeof deaf !== 'boolean') return new TypeError('VOICE_STATE_INVALID_TYPE', 'deaf');
    if (!this.connection) return false;
    this.selfDeaf = deaf;
    await this.connection.sendVoiceStateUpdate();
    return true;
  }

  toJSON() {
    return super.toJSON({
      id: true,
      serverDeaf: true,
      serverMute: true,
      selfDeaf: true,
      selfMute: true,
      sessionID: true,
      channelID: 'channel',
    });
  }
}

module.exports = VoiceState;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/Webhook.js":
/*!***********************************************************!*\
  !*** ./node_modules/discord.js/src/structures/Webhook.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const APIMessage = __webpack_require__(/*! ./APIMessage */ "./node_modules/discord.js/src/structures/APIMessage.js");
const Channel = __webpack_require__(/*! ./Channel */ "./node_modules/discord.js/src/structures/Channel.js");
const { WebhookTypes } = __webpack_require__(/*! ../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");
const DataResolver = __webpack_require__(/*! ../util/DataResolver */ "./node_modules/discord.js/src/util/DataResolver.js");
const Snowflake = __webpack_require__(/*! ../util/Snowflake */ "./node_modules/discord.js/src/util/Snowflake.js");

/**
 * Represents a webhook.
 */
class Webhook {
  constructor(client, data) {
    /**
     * The client that instantiated the webhook
     * @name Webhook#client
     * @type {Client}
     * @readonly
     */
    Object.defineProperty(this, 'client', { value: client });
    if (data) this._patch(data);
  }

  _patch(data) {
    /**
     * The name of the webhook
     * @type {string}
     */
    this.name = data.name;

    /**
     * The token for the webhook
     * @name Webhook#token
     * @type {?string}
     */
    Object.defineProperty(this, 'token', { value: data.token || null, writable: true, configurable: true });

    /**
     * The avatar for the webhook
     * @type {?string}
     */
    this.avatar = data.avatar;

    /**
     * The ID of the webhook
     * @type {Snowflake}
     */
    this.id = data.id;

    /**
     * The type of the webhook
     * @type {WebhookTypes}
     */
    this.type = WebhookTypes[data.type];

    /**
     * The guild the webhook belongs to
     * @type {Snowflake}
     */
    this.guildID = data.guild_id;

    /**
     * The channel the webhook belongs to
     * @type {Snowflake}
     */
    this.channelID = data.channel_id;

    if (data.user) {
      /**
       * The owner of the webhook
       * @type {?User|Object}
       */
      this.owner = this.client.users ? this.client.users.cache.get(data.user.id) : data.user;
    } else {
      this.owner = null;
    }
  }

  /**
   * Options that can be passed into send.
   * @typedef {Object} WebhookMessageOptions
   * @property {string} [username=this.name] Username override for the message
   * @property {string} [avatarURL] Avatar URL override for the message
   * @property {boolean} [tts=false] Whether or not the message should be spoken aloud
   * @property {string} [nonce=''] The nonce for the message
   * @property {Object[]} [embeds] An array of embeds for the message
   * @property {MessageMentionOptions} [allowedMentions] Which mentions should be parsed from the message content
   * (see [here](https://discord.com/developers/docs/resources/channel#embed-object) for more details)
   * @property {DisableMentionType} [disableMentions=this.client.options.disableMentions] Whether or not all mentions or
   * everyone/here mentions should be sanitized to prevent unexpected mentions
   * @property {FileOptions[]|string[]} [files] Files to send with the message
   * @property {string|boolean} [code] Language for optional codeblock formatting to apply
   * @property {boolean|SplitOptions} [split=false] Whether or not the message should be split into multiple messages if
   * it exceeds the character limit. If an object is provided, these are the options for splitting the message.
   */

  /**
   * Sends a message with this webhook.
   * @param {StringResolvable|APIMessage} [content=''] The content to send
   * @param {WebhookMessageOptions|MessageAdditions} [options={}] The options to provide
   * @returns {Promise<Message|Object>}
   * @example
   * // Send a basic message
   * webhook.send('hello!')
   *   .then(message => console.log(`Sent message: ${message.content}`))
   *   .catch(console.error);
   * @example
   * // Send a remote file
   * webhook.send({
   *   files: ['https://cdn.discordapp.com/icons/222078108977594368/6e1019b3179d71046e463a75915e7244.png?size=2048']
   * })
   *   .then(console.log)
   *   .catch(console.error);
   * @example
   * // Send a local file
   * webhook.send({
   *   files: [{
   *     attachment: 'entire/path/to/file.jpg',
   *     name: 'file.jpg'
   *   }]
   * })
   *   .then(console.log)
   *   .catch(console.error);
   * @example
   * // Send an embed with a local image inside
   * webhook.send('This is an embed', {
   *   embeds: [{
   *     thumbnail: {
   *          url: 'attachment://file.jpg'
   *       }
   *    }],
   *    files: [{
   *       attachment: 'entire/path/to/file.jpg',
   *       name: 'file.jpg'
   *    }]
   * })
   *   .then(console.log)
   *   .catch(console.error);
   */
  async send(content, options) {
    let apiMessage;

    if (content instanceof APIMessage) {
      apiMessage = content.resolveData();
    } else {
      apiMessage = APIMessage.create(this, content, options).resolveData();
      if (Array.isArray(apiMessage.data.content)) {
        return Promise.all(apiMessage.split().map(this.send.bind(this)));
      }
    }

    const { data, files } = await apiMessage.resolveFiles();
    return this.client.api
      .webhooks(this.id, this.token)
      .post({
        data,
        files,
        query: { wait: true },
        auth: false,
      })
      .then(d => {
        const channel = this.client.channels ? this.client.channels.cache.get(d.channel_id) : undefined;
        if (!channel) return d;
        return channel.messages.add(d, false);
      });
  }

  /**
   * Sends a raw slack message with this webhook.
   * @param {Object} body The raw body to send
   * @returns {Promise<boolean>}
   * @example
   * // Send a slack message
   * webhook.sendSlackMessage({
   *   'username': 'Wumpus',
   *   'attachments': [{
   *     'pretext': 'this looks pretty cool',
   *     'color': '#F0F',
   *     'footer_icon': 'http://snek.s3.amazonaws.com/topSnek.png',
   *     'footer': 'Powered by sneks',
   *     'ts': Date.now() / 1000
   *   }]
   * }).catch(console.error);
   */
  sendSlackMessage(body) {
    return this.client.api
      .webhooks(this.id, this.token)
      .slack.post({
        query: { wait: true },
        auth: false,
        data: body,
      })
      .then(data => data.toString() === 'ok');
  }

  /**
   * Edits the webhook.
   * @param {Object} options Options
   * @param {string} [options.name=this.name] New name for this webhook
   * @param {BufferResolvable} [options.avatar] New avatar for this webhook
   * @param {ChannelResolvable} [options.channel] New channel for this webhook
   * @param {string} [reason] Reason for editing this webhook
   * @returns {Promise<Webhook>}
   */
  async edit({ name = this.name, avatar, channel }, reason) {
    if (avatar && typeof avatar === 'string' && !avatar.startsWith('data:')) {
      avatar = await DataResolver.resolveImage(avatar);
    }
    if (channel) channel = channel instanceof Channel ? channel.id : channel;
    const data = await this.client.api.webhooks(this.id, channel ? undefined : this.token).patch({
      data: { name, avatar, channel_id: channel },
      reason,
    });

    this.name = data.name;
    this.avatar = data.avatar;
    this.channelID = data.channel_id;
    return this;
  }

  /**
   * Deletes the webhook.
   * @param {string} [reason] Reason for deleting this webhook
   * @returns {Promise}
   */
  delete(reason) {
    return this.client.api.webhooks(this.id, this.token).delete({ reason });
  }
  /**
   * The timestamp the webhook was created at
   * @type {number}
   * @readonly
   */
  get createdTimestamp() {
    return Snowflake.deconstruct(this.id).timestamp;
  }

  /**
   * The time the webhook was created at
   * @type {Date}
   * @readonly
   */
  get createdAt() {
    return new Date(this.createdTimestamp);
  }

  /**
   * The url of this webhook
   * @type {string}
   * @readonly
   */
  get url() {
    return this.client.options.http.api + this.client.api.webhooks(this.id, this.token);
  }

  /**
   * A link to the webhook's avatar.
   * @param {ImageURLOptions} [options={}] Options for the Image URL
   * @returns {?string}
   */
  avatarURL({ format, size } = {}) {
    if (!this.avatar) return null;
    return this.client.rest.cdn.Avatar(this.id, this.avatar, format, size);
  }

  static applyToClass(structure) {
    for (const prop of ['send', 'sendSlackMessage', 'edit', 'delete', 'createdTimestamp', 'createdAt', 'url']) {
      Object.defineProperty(structure.prototype, prop, Object.getOwnPropertyDescriptor(Webhook.prototype, prop));
    }
  }
}

module.exports = Webhook;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/interfaces/Application.js":
/*!**************************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/interfaces/Application.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { ClientApplicationAssetTypes, Endpoints } = __webpack_require__(/*! ../../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");
const Snowflake = __webpack_require__(/*! ../../util/Snowflake */ "./node_modules/discord.js/src/util/Snowflake.js");
const Base = __webpack_require__(/*! ../Base */ "./node_modules/discord.js/src/structures/Base.js");

const AssetTypes = Object.keys(ClientApplicationAssetTypes);

/**
 * Represents an OAuth2 Application.
 * @abstract
 */
class Application extends Base {
  constructor(client, data) {
    super(client);
    this._patch(data);
  }

  _patch(data) {
    /**
     * The ID of the app
     * @type {Snowflake}
     */
    this.id = data.id;

    /**
     * The name of the app
     * @type {string}
     */
    this.name = data.name;

    /**
     * The app's description
     * @type {string}
     */
    this.description = data.description;

    /**
     * The app's icon hash
     * @type {string}
     */
    this.icon = data.icon;
  }

  /**
   * The timestamp the app was created at
   * @type {number}
   * @readonly
   */
  get createdTimestamp() {
    return Snowflake.deconstruct(this.id).timestamp;
  }

  /**
   * The time the app was created at
   * @type {Date}
   * @readonly
   */
  get createdAt() {
    return new Date(this.createdTimestamp);
  }

  /**
   * A link to the application's icon.
   * @param {ImageURLOptions} [options={}] Options for the Image URL
   * @returns {?string} URL to the icon
   */
  iconURL({ format, size } = {}) {
    if (!this.icon) return null;
    return this.client.rest.cdn.AppIcon(this.id, this.icon, { format, size });
  }

  /**
   * A link to this application's cover image.
   * @param {ImageURLOptions} [options={}] Options for the Image URL
   * @returns {?string} URL to the cover image
   */
  coverImage({ format, size } = {}) {
    if (!this.cover) return null;
    return Endpoints.CDN(this.client.options.http.cdn).AppIcon(this.id, this.cover, { format, size });
  }

  /**
   * Asset data.
   * @typedef {Object} ApplicationAsset
   * @property {Snowflake} id The asset ID
   * @property {string} name The asset name
   * @property {string} type The asset type
   */

  /**
   * Gets the clients rich presence assets.
   * @returns {Promise<Array<ApplicationAsset>>}
   */
  fetchAssets() {
    return this.client.api.oauth2
      .applications(this.id)
      .assets.get()
      .then(assets =>
        assets.map(a => ({
          id: a.id,
          name: a.name,
          type: AssetTypes[a.type - 1],
        })),
      );
  }

  /**
   * When concatenated with a string, this automatically returns the application's name instead of the
   * Oauth2Application object.
   * @returns {string}
   * @example
   * // Logs: Application name: My App
   * console.log(`Application name: ${application}`);
   */
  toString() {
    return this.name;
  }

  toJSON() {
    return super.toJSON({ createdTimestamp: true });
  }
}

module.exports = Application;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/interfaces/Collector.js":
/*!************************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/interfaces/Collector.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js");
const Collection = __webpack_require__(/*! ../../util/Collection */ "./node_modules/discord.js/src/util/Collection.js");
const Util = __webpack_require__(/*! ../../util/Util */ "./node_modules/discord.js/src/util/Util.js");

/**
 * Filter to be applied to the collector.
 * @typedef {Function} CollectorFilter
 * @param {...*} args Any arguments received by the listener
 * @param {Collection} collection The items collected by this collector
 * @returns {boolean|Promise<boolean>}
 */

/**
 * Options to be applied to the collector.
 * @typedef {Object} CollectorOptions
 * @property {number} [time] How long to run the collector for in milliseconds
 * @property {number} [idle] How long to stop the collector after inactivity in milliseconds
 * @property {boolean} [dispose=false] Whether to dispose data when it's deleted
 */

/**
 * Abstract class for defining a new Collector.
 * @abstract
 */
class Collector extends EventEmitter {
  constructor(client, filter, options = {}) {
    super();

    /**
     * The client that instantiated this Collector
     * @name Collector#client
     * @type {Client}
     * @readonly
     */
    Object.defineProperty(this, 'client', { value: client });

    /**
     * The filter applied to this collector
     * @type {CollectorFilter}
     */
    this.filter = filter;

    /**
     * The options of this collector
     * @type {CollectorOptions}
     */
    this.options = options;

    /**
     * The items collected by this collector
     * @type {Collection}
     */
    this.collected = new Collection();

    /**
     * Whether this collector has finished collecting
     * @type {boolean}
     */
    this.ended = false;

    /**
     * Timeout for cleanup
     * @type {?Timeout}
     * @private
     */
    this._timeout = null;

    /**
     * Timeout for cleanup due to inactivity
     * @type {?Timeout}
     * @private
     */
    this._idletimeout = null;

    this.handleCollect = this.handleCollect.bind(this);
    this.handleDispose = this.handleDispose.bind(this);

    if (options.time) this._timeout = this.client.setTimeout(() => this.stop('time'), options.time);
    if (options.idle) this._idletimeout = this.client.setTimeout(() => this.stop('idle'), options.idle);
  }

  /**
   * Call this to handle an event as a collectable element. Accepts any event data as parameters.
   * @param {...*} args The arguments emitted by the listener
   * @emits Collector#collect
   */
  async handleCollect(...args) {
    const collect = this.collect(...args);

    if (collect && (await this.filter(...args, this.collected))) {
      this.collected.set(collect, args[0]);

      /**
       * Emitted whenever an element is collected.
       * @event Collector#collect
       * @param {...*} args The arguments emitted by the listener
       */
      this.emit('collect', ...args);

      if (this._idletimeout) {
        this.client.clearTimeout(this._idletimeout);
        this._idletimeout = this.client.setTimeout(() => this.stop('idle'), this.options.idle);
      }
    }
    this.checkEnd();
  }

  /**
   * Call this to remove an element from the collection. Accepts any event data as parameters.
   * @param {...*} args The arguments emitted by the listener
   * @emits Collector#dispose
   */
  handleDispose(...args) {
    if (!this.options.dispose) return;

    const dispose = this.dispose(...args);
    if (!dispose || !this.filter(...args) || !this.collected.has(dispose)) return;
    this.collected.delete(dispose);

    /**
     * Emitted whenever an element is disposed of.
     * @event Collector#dispose
     * @param {...*} args The arguments emitted by the listener
     */
    this.emit('dispose', ...args);
    this.checkEnd();
  }

  /**
   * Returns a promise that resolves with the next collected element;
   * rejects with collected elements if the collector finishes without receiving a next element
   * @type {Promise}
   * @readonly
   */
  get next() {
    return new Promise((resolve, reject) => {
      if (this.ended) {
        reject(this.collected);
        return;
      }

      const cleanup = () => {
        this.removeListener('collect', onCollect);
        this.removeListener('end', onEnd);
      };

      const onCollect = item => {
        cleanup();
        resolve(item);
      };

      const onEnd = () => {
        cleanup();
        reject(this.collected); // eslint-disable-line prefer-promise-reject-errors
      };

      this.on('collect', onCollect);
      this.on('end', onEnd);
    });
  }

  /**
   * Stops this collector and emits the `end` event.
   * @param {string} [reason='user'] The reason this collector is ending
   * @emits Collector#end
   */
  stop(reason = 'user') {
    if (this.ended) return;

    if (this._timeout) {
      this.client.clearTimeout(this._timeout);
      this._timeout = null;
    }
    if (this._idletimeout) {
      this.client.clearTimeout(this._idletimeout);
      this._idletimeout = null;
    }
    this.ended = true;

    /**
     * Emitted when the collector is finished collecting.
     * @event Collector#end
     * @param {Collection} collected The elements collected by the collector
     * @param {string} reason The reason the collector ended
     */
    this.emit('end', this.collected, reason);
  }

  /**
   * Resets the collectors timeout and idle timer.
   * @param {Object} [options] Options
   * @param {number} [options.time] How long to run the collector for in milliseconds
   * @param {number} [options.idle] How long to stop the collector after inactivity in milliseconds
   */
  resetTimer({ time, idle } = {}) {
    if (this._timeout) {
      this.client.clearTimeout(this._timeout);
      this._timeout = this.client.setTimeout(() => this.stop('time'), time || this.options.time);
    }
    if (this._idletimeout) {
      this.client.clearTimeout(this._idletimeout);
      this._idletimeout = this.client.setTimeout(() => this.stop('idle'), idle || this.options.idle);
    }
  }

  /**
   * Checks whether the collector should end, and if so, ends it.
   */
  checkEnd() {
    const reason = this.endReason();
    if (reason) this.stop(reason);
  }

  /**
   * Allows collectors to be consumed with for-await-of loops
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of}
   */
  async *[Symbol.asyncIterator]() {
    const queue = [];
    const onCollect = item => queue.push(item);
    this.on('collect', onCollect);

    try {
      while (queue.length || !this.ended) {
        if (queue.length) {
          yield queue.shift();
        } else {
          // eslint-disable-next-line no-await-in-loop
          await new Promise(resolve => {
            const tick = () => {
              this.removeListener('collect', tick);
              this.removeListener('end', tick);
              return resolve();
            };
            this.on('collect', tick);
            this.on('end', tick);
          });
        }
      }
    } finally {
      this.removeListener('collect', onCollect);
    }
  }

  toJSON() {
    return Util.flatten(this);
  }

  /* eslint-disable no-empty-function, valid-jsdoc */
  /**
   * Handles incoming events from the `handleCollect` function. Returns null if the event should not
   * be collected, or returns an object describing the data that should be stored.
   * @see Collector#handleCollect
   * @param {...*} args Any args the event listener emits
   * @returns {?{key, value}} Data to insert into collection, if any
   * @abstract
   */
  collect() {}

  /**
   * Handles incoming events from the `handleDispose`. Returns null if the event should not
   * be disposed, or returns the key that should be removed.
   * @see Collector#handleDispose
   * @param {...*} args Any args the event listener emits
   * @returns {?*} Key to remove from the collection, if any
   * @abstract
   */
  dispose() {}

  /**
   * The reason this collector has ended or will end with.
   * @returns {?string} Reason to end the collector, if any
   * @abstract
   */
  endReason() {}
  /* eslint-enable no-empty-function, valid-jsdoc */
}

module.exports = Collector;


/***/ }),

/***/ "./node_modules/discord.js/src/structures/interfaces/TextBasedChannel.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/discord.js/src/structures/interfaces/TextBasedChannel.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* eslint-disable import/order */
const MessageCollector = __webpack_require__(/*! ../MessageCollector */ "./node_modules/discord.js/src/structures/MessageCollector.js");
const APIMessage = __webpack_require__(/*! ../APIMessage */ "./node_modules/discord.js/src/structures/APIMessage.js");
const Snowflake = __webpack_require__(/*! ../../util/Snowflake */ "./node_modules/discord.js/src/util/Snowflake.js");
const Collection = __webpack_require__(/*! ../../util/Collection */ "./node_modules/discord.js/src/util/Collection.js");
const { RangeError, TypeError } = __webpack_require__(/*! ../../errors */ "./node_modules/discord.js/src/errors/index.js");

/**
 * Interface for classes that have text-channel-like features.
 * @interface
 */
class TextBasedChannel {
  constructor() {
    /**
     * A manager of the messages sent to this channel
     * @type {MessageManager}
     */
    this.messages = new MessageManager(this);

    /**
     * The ID of the last message in the channel, if one was sent
     * @type {?Snowflake}
     */
    this.lastMessageID = null;

    /**
     * The timestamp when the last pinned message was pinned, if there was one
     * @type {?number}
     */
    this.lastPinTimestamp = null;
  }

  /**
   * The Message object of the last message in the channel, if one was sent
   * @type {?Message}
   * @readonly
   */
  get lastMessage() {
    return this.messages.cache.get(this.lastMessageID) || null;
  }

  /**
   * The date when the last pinned message was pinned, if there was one
   * @type {?Date}
   * @readonly
   */
  get lastPinAt() {
    return this.lastPinTimestamp ? new Date(this.lastPinTimestamp) : null;
  }

  /**
   * Options provided when sending or editing a message.
   * @typedef {Object} MessageOptions
   * @property {boolean} [tts=false] Whether or not the message should be spoken aloud
   * @property {string} [nonce=''] The nonce for the message
   * @property {string} [content=''] The content for the message
   * @property {MessageEmbed|Object} [embed] An embed for the message
   * (see [here](https://discord.com/developers/docs/resources/channel#embed-object) for more details)
   * @property {MessageMentionOptions} [allowedMentions] Which mentions should be parsed from the message content
   * @property {DisableMentionType} [disableMentions=this.client.options.disableMentions] Whether or not all mentions or
   * everyone/here mentions should be sanitized to prevent unexpected mentions
   * @property {FileOptions[]|BufferResolvable[]} [files] Files to send with the message
   * @property {string|boolean} [code] Language for optional codeblock formatting to apply
   * @property {boolean|SplitOptions} [split=false] Whether or not the message should be split into multiple messages if
   * it exceeds the character limit. If an object is provided, these are the options for splitting the message
   * @property {UserResolvable} [reply] User to reply to (prefixes the message with a mention, except in DMs)
   */

  /**
   * Options provided to control parsing of mentions by Discord
   * @typedef {Object} MessageMentionOptions
   * @property {MessageMentionTypes[]} [parse] Types of mentions to be parsed
   * @property {Snowflake[]} [users] Snowflakes of Users to be parsed as mentions
   * @property {Snowflake[]} [roles] Snowflakes of Roles to be parsed as mentions
   */

  /**
   * Types of mentions to enable in MessageMentionOptions.
   * - `roles`
   * - `users`
   * - `everyone`
   * @typedef {string} MessageMentionTypes
   */

  /**
   * The type of mentions to disable.
   * - `none`
   * - `all`
   * - `everyone`
   * @typedef {string} DisableMentionType
   */

  /**
   * @typedef {Object} FileOptions
   * @property {BufferResolvable} attachment File to attach
   * @property {string} [name='file.jpg'] Filename of the attachment
   */

  /**
   * Options for splitting a message.
   * @typedef {Object} SplitOptions
   * @property {number} [maxLength=2000] Maximum character length per message piece
   * @property {string} [char='\n'] Character to split the message with
   * @property {string} [prepend=''] Text to prepend to every piece except the first
   * @property {string} [append=''] Text to append to every piece except the last
   */

  /**
   * Sends a message to this channel.
   * @param {StringResolvable|APIMessage} [content=''] The content to send
   * @param {MessageOptions|MessageAdditions} [options={}] The options to provide
   * @returns {Promise<Message|Message[]>}
   * @example
   * // Send a basic message
   * channel.send('hello!')
   *   .then(message => console.log(`Sent message: ${message.content}`))
   *   .catch(console.error);
   * @example
   * // Send a remote file
   * channel.send({
   *   files: ['https://cdn.discordapp.com/icons/222078108977594368/6e1019b3179d71046e463a75915e7244.png?size=2048']
   * })
   *   .then(console.log)
   *   .catch(console.error);
   * @example
   * // Send a local file
   * channel.send({
   *   files: [{
   *     attachment: 'entire/path/to/file.jpg',
   *     name: 'file.jpg'
   *   }]
   * })
   *   .then(console.log)
   *   .catch(console.error);
   * @example
   * // Send an embed with a local image inside
   * channel.send('This is an embed', {
   *   embed: {
   *     thumbnail: {
   *          url: 'attachment://file.jpg'
   *       }
   *    },
   *    files: [{
   *       attachment: 'entire/path/to/file.jpg',
   *       name: 'file.jpg'
   *    }]
   * })
   *   .then(console.log)
   *   .catch(console.error);
   */
  async send(content, options) {
    const User = __webpack_require__(/*! ../User */ "./node_modules/discord.js/src/structures/User.js");
    const GuildMember = __webpack_require__(/*! ../GuildMember */ "./node_modules/discord.js/src/structures/GuildMember.js");

    if (this instanceof User || this instanceof GuildMember) {
      return this.createDM().then(dm => dm.send(content, options));
    }

    let apiMessage;

    if (content instanceof APIMessage) {
      apiMessage = content.resolveData();
    } else {
      apiMessage = APIMessage.create(this, content, options).resolveData();
      if (Array.isArray(apiMessage.data.content)) {
        return Promise.all(apiMessage.split().map(this.send.bind(this)));
      }
    }

    const { data, files } = await apiMessage.resolveFiles();
    return this.client.api.channels[this.id].messages
      .post({ data, files })
      .then(d => this.client.actions.MessageCreate.handle(d).message);
  }

  /**
   * Starts a typing indicator in the channel.
   * @param {number} [count=1] The number of times startTyping should be considered to have been called
   * @returns {Promise} Resolves once the bot stops typing gracefully, or rejects when an error occurs
   * @example
   * // Start typing in a channel, or increase the typing count by one
   * channel.startTyping();
   * @example
   * // Start typing in a channel with a typing count of five, or set it to five
   * channel.startTyping(5);
   */
  startTyping(count) {
    if (typeof count !== 'undefined' && count < 1) throw new RangeError('TYPING_COUNT');
    if (this.client.user._typing.has(this.id)) {
      const entry = this.client.user._typing.get(this.id);
      entry.count = count || entry.count + 1;
      return entry.promise;
    }

    const entry = {};
    entry.promise = new Promise((resolve, reject) => {
      const endpoint = this.client.api.channels[this.id].typing;
      Object.assign(entry, {
        count: count || 1,
        interval: this.client.setInterval(() => {
          endpoint.post().catch(error => {
            this.client.clearInterval(entry.interval);
            this.client.user._typing.delete(this.id);
            reject(error);
          });
        }, 9000),
        resolve,
      });
      endpoint.post().catch(error => {
        this.client.clearInterval(entry.interval);
        this.client.user._typing.delete(this.id);
        reject(error);
      });
      this.client.user._typing.set(this.id, entry);
    });
    return entry.promise;
  }

  /**
   * Stops the typing indicator in the channel.
   * The indicator will only stop if this is called as many times as startTyping().
   * <info>It can take a few seconds for the client user to stop typing.</info>
   * @param {boolean} [force=false] Whether or not to reset the call count and force the indicator to stop
   * @example
   * // Reduce the typing count by one and stop typing if it reached 0
   * channel.stopTyping();
   * @example
   * // Force typing to fully stop regardless of typing count
   * channel.stopTyping(true);
   */
  stopTyping(force = false) {
    if (this.client.user._typing.has(this.id)) {
      const entry = this.client.user._typing.get(this.id);
      entry.count--;
      if (entry.count <= 0 || force) {
        this.client.clearInterval(entry.interval);
        this.client.user._typing.delete(this.id);
        entry.resolve();
      }
    }
  }

  /**
   * Whether or not the typing indicator is being shown in the channel
   * @type {boolean}
   * @readonly
   */
  get typing() {
    return this.client.user._typing.has(this.id);
  }

  /**
   * Number of times `startTyping` has been called
   * @type {number}
   * @readonly
   */
  get typingCount() {
    if (this.client.user._typing.has(this.id)) return this.client.user._typing.get(this.id).count;
    return 0;
  }

  /**
   * Creates a Message Collector.
   * @param {CollectorFilter} filter The filter to create the collector with
   * @param {MessageCollectorOptions} [options={}] The options to pass to the collector
   * @returns {MessageCollector}
   * @example
   * // Create a message collector
   * const filter = m => m.content.includes('discord');
   * const collector = channel.createMessageCollector(filter, { time: 15000 });
   * collector.on('collect', m => console.log(`Collected ${m.content}`));
   * collector.on('end', collected => console.log(`Collected ${collected.size} items`));
   */
  createMessageCollector(filter, options = {}) {
    return new MessageCollector(this, filter, options);
  }

  /**
   * An object containing the same properties as CollectorOptions, but a few more:
   * @typedef {MessageCollectorOptions} AwaitMessagesOptions
   * @property {string[]} [errors] Stop/end reasons that cause the promise to reject
   */

  /**
   * Similar to createMessageCollector but in promise form.
   * Resolves with a collection of messages that pass the specified filter.
   * @param {CollectorFilter} filter The filter function to use
   * @param {AwaitMessagesOptions} [options={}] Optional options to pass to the internal collector
   * @returns {Promise<Collection<Snowflake, Message>>}
   * @example
   * // Await !vote messages
   * const filter = m => m.content.startsWith('!vote');
   * // Errors: ['time'] treats ending because of the time limit as an error
   * channel.awaitMessages(filter, { max: 4, time: 60000, errors: ['time'] })
   *   .then(collected => console.log(collected.size))
   *   .catch(collected => console.log(`After a minute, only ${collected.size} out of 4 voted.`));
   */
  awaitMessages(filter, options = {}) {
    return new Promise((resolve, reject) => {
      const collector = this.createMessageCollector(filter, options);
      collector.once('end', (collection, reason) => {
        if (options.errors && options.errors.includes(reason)) {
          reject(collection);
        } else {
          resolve(collection);
        }
      });
    });
  }

  /**
   * Bulk deletes given messages that are newer than two weeks.
   * @param {Collection<Snowflake, Message>|MessageResolvable[]|number} messages
   * Messages or number of messages to delete
   * @param {boolean} [filterOld=false] Filter messages to remove those which are older than two weeks automatically
   * @returns {Promise<Collection<Snowflake, Message>>} Deleted messages
   * @example
   * // Bulk delete messages
   * channel.bulkDelete(5)
   *   .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
   *   .catch(console.error);
   */
  async bulkDelete(messages, filterOld = false) {
    if (Array.isArray(messages) || messages instanceof Collection) {
      let messageIDs = messages instanceof Collection ? messages.keyArray() : messages.map(m => m.id || m);
      if (filterOld) {
        messageIDs = messageIDs.filter(id => Date.now() - Snowflake.deconstruct(id).date.getTime() < 1209600000);
      }
      if (messageIDs.length === 0) return new Collection();
      if (messageIDs.length === 1) {
        await this.client.api.channels(this.id).messages(messageIDs[0]).delete();
        const message = this.client.actions.MessageDelete.getMessage(
          {
            message_id: messageIDs[0],
          },
          this,
        );
        return message ? new Collection([[message.id, message]]) : new Collection();
      }
      await this.client.api.channels[this.id].messages['bulk-delete'].post({ data: { messages: messageIDs } });
      return messageIDs.reduce(
        (col, id) =>
          col.set(
            id,
            this.client.actions.MessageDeleteBulk.getMessage(
              {
                message_id: id,
              },
              this,
            ),
          ),
        new Collection(),
      );
    }
    if (!isNaN(messages)) {
      const msgs = await this.messages.fetch({ limit: messages });
      return this.bulkDelete(msgs, filterOld);
    }
    throw new TypeError('MESSAGE_BULK_DELETE_TYPE');
  }

  static applyToClass(structure, full = false, ignore = []) {
    const props = ['send'];
    if (full) {
      props.push(
        'lastMessage',
        'lastPinAt',
        'bulkDelete',
        'startTyping',
        'stopTyping',
        'typing',
        'typingCount',
        'createMessageCollector',
        'awaitMessages',
      );
    }
    for (const prop of props) {
      if (ignore.includes(prop)) continue;
      Object.defineProperty(
        structure.prototype,
        prop,
        Object.getOwnPropertyDescriptor(TextBasedChannel.prototype, prop),
      );
    }
  }
}

module.exports = TextBasedChannel;

// Fixes Circular
const MessageManager = __webpack_require__(/*! ../../managers/MessageManager */ "./node_modules/discord.js/src/managers/MessageManager.js");


/***/ }),

/***/ "./node_modules/discord.js/src/util/ActivityFlags.js":
/*!***********************************************************!*\
  !*** ./node_modules/discord.js/src/util/ActivityFlags.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const BitField = __webpack_require__(/*! ./BitField */ "./node_modules/discord.js/src/util/BitField.js");

/**
 * Data structure that makes it easy to interact with an {@link Activity#flags} bitfield.
 * @extends {BitField}
 */
class ActivityFlags extends BitField {}

/**
 * @name ActivityFlags
 * @kind constructor
 * @memberof ActivityFlags
 * @param {BitFieldResolvable} [bits=0] Bit(s) to read from
 */

/**
 * Numeric activity flags. All available properties:
 * * `INSTANCE`
 * * `JOIN`
 * * `SPECTATE`
 * * `JOIN_REQUEST`
 * * `SYNC`
 * * `PLAY`
 * @type {Object}
 * @see {@link https://discord.com/developers/docs/topics/gateway#activity-object-activity-flags}
 */
ActivityFlags.FLAGS = {
  INSTANCE: 1 << 0,
  JOIN: 1 << 1,
  SPECTATE: 1 << 2,
  JOIN_REQUEST: 1 << 3,
  SYNC: 1 << 4,
  PLAY: 1 << 5,
};

module.exports = ActivityFlags;


/***/ }),

/***/ "./node_modules/discord.js/src/util/BitField.js":
/*!******************************************************!*\
  !*** ./node_modules/discord.js/src/util/BitField.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { RangeError } = __webpack_require__(/*! ../errors */ "./node_modules/discord.js/src/errors/index.js");

/**
 * Data structure that makes it easy to interact with a bitfield.
 */
class BitField {
  /**
   * @param {BitFieldResolvable} [bits=0] Bit(s) to read from
   */
  constructor(bits) {
    /**
     * Bitfield of the packed bits
     * @type {number}
     */
    this.bitfield = this.constructor.resolve(bits);
  }

  /**
   * Checks whether the bitfield has a bit, or any of multiple bits.
   * @param {BitFieldResolvable} bit Bit(s) to check for
   * @returns {boolean}
   */
  any(bit) {
    return (this.bitfield & this.constructor.resolve(bit)) !== 0;
  }

  /**
   * Checks if this bitfield equals another
   * @param {BitFieldResolvable} bit Bit(s) to check for
   * @returns {boolean}
   */
  equals(bit) {
    return this.bitfield === this.constructor.resolve(bit);
  }

  /**
   * Checks whether the bitfield has a bit, or multiple bits.
   * @param {BitFieldResolvable} bit Bit(s) to check for
   * @returns {boolean}
   */
  has(bit) {
    if (Array.isArray(bit)) return bit.every(p => this.has(p));
    bit = this.constructor.resolve(bit);
    return (this.bitfield & bit) === bit;
  }

  /**
   * Gets all given bits that are missing from the bitfield.
   * @param {BitFieldResolvable} bits Bit(s) to check for
   * @param {...*} hasParams Additional parameters for the has method, if any
   * @returns {string[]}
   */
  missing(bits, ...hasParams) {
    if (!Array.isArray(bits)) bits = new this.constructor(bits).toArray(false);
    return bits.filter(p => !this.has(p, ...hasParams));
  }

  /**
   * Freezes these bits, making them immutable.
   * @returns {Readonly<BitField>} These bits
   */
  freeze() {
    return Object.freeze(this);
  }

  /**
   * Adds bits to these ones.
   * @param {...BitFieldResolvable} [bits] Bits to add
   * @returns {BitField} These bits or new BitField if the instance is frozen.
   */
  add(...bits) {
    let total = 0;
    for (const bit of bits) {
      total |= this.constructor.resolve(bit);
    }
    if (Object.isFrozen(this)) return new this.constructor(this.bitfield | total);
    this.bitfield |= total;
    return this;
  }

  /**
   * Removes bits from these.
   * @param {...BitFieldResolvable} [bits] Bits to remove
   * @returns {BitField} These bits or new BitField if the instance is frozen.
   */
  remove(...bits) {
    let total = 0;
    for (const bit of bits) {
      total |= this.constructor.resolve(bit);
    }
    if (Object.isFrozen(this)) return new this.constructor(this.bitfield & ~total);
    this.bitfield &= ~total;
    return this;
  }

  /**
   * Gets an object mapping field names to a {@link boolean} indicating whether the
   * bit is available.
   * @param {...*} hasParams Additional parameters for the has method, if any
   * @returns {Object}
   */
  serialize(...hasParams) {
    const serialized = {};
    for (const [flag, bit] of Object.entries(this.constructor.FLAGS)) serialized[flag] = this.has(bit, ...hasParams);
    return serialized;
  }

  /**
   * Gets an {@link Array} of bitfield names based on the bits available.
   * @param {...*} hasParams Additional parameters for the has method, if any
   * @returns {string[]}
   */
  toArray(...hasParams) {
    return Object.keys(this.constructor.FLAGS).filter(bit => this.has(bit, ...hasParams));
  }

  toJSON() {
    return this.bitfield;
  }

  valueOf() {
    return this.bitfield;
  }

  *[Symbol.iterator]() {
    yield* this.toArray();
  }

  /**
   * Data that can be resolved to give a bitfield. This can be:
   * * A string (see {@link BitField.FLAGS})
   * * A bit number
   * * An instance of BitField
   * * An Array of BitFieldResolvable
   * @typedef {string|number|BitField|BitFieldResolvable[]} BitFieldResolvable
   */

  /**
   * Resolves bitfields to their numeric form.
   * @param {BitFieldResolvable} [bit=0] - bit(s) to resolve
   * @returns {number}
   */
  static resolve(bit = 0) {
    if (typeof bit === 'number' && bit >= 0) return bit;
    if (bit instanceof BitField) return bit.bitfield;
    if (Array.isArray(bit)) return bit.map(p => this.resolve(p)).reduce((prev, p) => prev | p, 0);
    if (typeof bit === 'string' && typeof this.FLAGS[bit] !== 'undefined') return this.FLAGS[bit];
    const error = new RangeError('BITFIELD_INVALID');
    error.bit = bit;
    throw error;
  }
}

/**
 * Numeric bitfield flags.
 * <info>Defined in extension classes</info>
 * @type {Object}
 * @abstract
 */
BitField.FLAGS = {};

module.exports = BitField;


/***/ }),

/***/ "./node_modules/discord.js/src/util/Collection.js":
/*!********************************************************!*\
  !*** ./node_modules/discord.js/src/util/Collection.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const BaseCollection = __webpack_require__(/*! @discordjs/collection */ "./node_modules/@discordjs/collection/dist/index.js");
const Util = __webpack_require__(/*! ./Util */ "./node_modules/discord.js/src/util/Util.js");

class Collection extends BaseCollection {
  toJSON() {
    return this.map(e => (typeof e.toJSON === 'function' ? e.toJSON() : Util.flatten(e)));
  }
}

module.exports = Collection;

/**
 * @external Collection
 * @see {@link https://discord.js.org/#/docs/collection/master/class/Collection}
 */


/***/ }),

/***/ "./node_modules/discord.js/src/util/Constants.js":
/*!*******************************************************!*\
  !*** ./node_modules/discord.js/src/util/Constants.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


const Package = (exports.Package = __webpack_require__(/*! ../../package.json */ "./node_modules/discord.js/package.json"));
const { Error, RangeError } = __webpack_require__(/*! ../errors */ "./node_modules/discord.js/src/errors/index.js");
const browser = (exports.browser = typeof window !== 'undefined');

/**
 * Options for a client.
 * @typedef {Object} ClientOptions
 * @property {number|number[]|string} [shards] ID of the shard to run, or an array of shard IDs. If not specified,
 * the client will spawn {@link ClientOptions#shardCount} shards. If set to `auto`, it will fetch the
 * recommended amount of shards from Discord and spawn that amount
 * @property {number} [shardCount=1] The total amount of shards used by all processes of this bot
 * (e.g. recommended shard count, shard count of the ShardingManager)
 * @property {number} [messageCacheMaxSize=200] Maximum number of messages to cache per channel
 * (-1 or Infinity for unlimited - don't do this without message sweeping, otherwise memory usage will climb
 * indefinitely)
 * @property {number} [messageCacheLifetime=0] How long a message should stay in the cache until it is considered
 * sweepable (in seconds, 0 for forever)
 * @property {number} [messageSweepInterval=0] How frequently to remove messages from the cache that are older than
 * the message cache lifetime (in seconds, 0 for never)
 * @property {number} [messageEditHistoryMaxSize=-1] Maximum number of previous versions to hold for an edited message
 * (-1 or Infinity for unlimited - don't do this without sweeping, otherwise memory usage may climb indefinitely.)
 * @property {boolean} [fetchAllMembers=false] Whether to cache all guild members and users upon startup, as well as
 * upon joining a guild (should be avoided whenever possible)
 * @property {DisableMentionType} [disableMentions='none'] Default value for {@link MessageOptions#disableMentions}
 * @property {MessageMentionOptions} [allowedMentions] Default value for {@link MessageOptions#allowedMentions}
 * @property {PartialType[]} [partials] Structures allowed to be partial. This means events can be emitted even when
 * they're missing all the data for a particular structure. See the "Partials" topic listed in the sidebar for some
 * important usage information, as partials require you to put checks in place when handling data.
 * @property {number} [restWsBridgeTimeout=5000] Maximum time permitted between REST responses and their
 * corresponding websocket events
 * @property {number} [restTimeOffset=500] Extra time in milliseconds to wait before continuing to make REST
 * requests (higher values will reduce rate-limiting errors on bad connections)
 * @property {number} [restRequestTimeout=15000] Time to wait before cancelling a REST request, in milliseconds
 * @property {number} [restSweepInterval=60] How frequently to delete inactive request buckets, in seconds
 * (or 0 for never)
 * @property {number} [retryLimit=1] How many times to retry on 5XX errors (Infinity for indefinite amount of retries)
 * @property {PresenceData} [presence] Presence data to use upon login
 * @property {WebsocketOptions} [ws] Options for the WebSocket
 * @property {HTTPOptions} [http] HTTP options
 */
exports.DefaultOptions = {
  shardCount: 1,
  messageCacheMaxSize: 200,
  messageCacheLifetime: 0,
  messageSweepInterval: 0,
  messageEditHistoryMaxSize: -1,
  fetchAllMembers: false,
  disableMentions: 'none',
  partials: [],
  restWsBridgeTimeout: 5000,
  restRequestTimeout: 15000,
  retryLimit: 1,
  restTimeOffset: 500,
  restSweepInterval: 60,
  presence: {},

  /**
   * WebSocket options (these are left as snake_case to match the API)
   * @typedef {Object} WebsocketOptions
   * @property {number} [large_threshold=50] Number of members in a guild after which offline users will no longer be
   * sent in the initial guild member list, must be between 50 and 250
   * @property {IntentsResolvable} [intents] Intents to enable for this connection
   */
  ws: {
    large_threshold: 50,
    compress: false,
    properties: {
      $os: browser ? 'browser' : process.platform,
      $browser: 'discord.js',
      $device: 'discord.js',
    },
    version: 6,
  },

  /**
   * HTTP options
   * @typedef {Object} HTTPOptions
   * @property {number} [version=7] API version to use
   * @property {string} [api='https://discord.com/api'] Base url of the API
   * @property {string} [cdn='https://cdn.discordapp.com'] Base url of the CDN
   * @property {string} [invite='https://discord.gg'] Base url of invites
   * @property {string} [template='https://discord.new'] Base url of templates
   */
  http: {
    version: 7,
    api: 'https://discord.com/api',
    cdn: 'https://cdn.discordapp.com',
    invite: 'https://discord.gg',
    template: 'https://discord.new',
  },
};

exports.UserAgent = browser
  ? null
  : `DiscordBot (${Package.homepage.split('#')[0]}, ${Package.version}) Node.js/${process.version}`;

exports.WSCodes = {
  1000: 'WS_CLOSE_REQUESTED',
  4004: 'TOKEN_INVALID',
  4010: 'SHARDING_INVALID',
  4011: 'SHARDING_REQUIRED',
  4013: 'INVALID_INTENTS',
  4014: 'DISALLOWED_INTENTS',
};

const AllowedImageFormats = ['webp', 'png', 'jpg', 'jpeg', 'gif'];

const AllowedImageSizes = Array.from({ length: 9 }, (e, i) => 2 ** (i + 4));

function makeImageUrl(root, { format = 'webp', size } = {}) {
  if (format && !AllowedImageFormats.includes(format)) throw new Error('IMAGE_FORMAT', format);
  if (size && !AllowedImageSizes.includes(size)) throw new RangeError('IMAGE_SIZE', size);
  return `${root}.${format}${size ? `?size=${size}` : ''}`;
}
/**
 * Options for Image URLs.
 * @typedef {Object} ImageURLOptions
 * @property {string} [format] One of `webp`, `png`, `jpg`, `jpeg`, `gif`. If no format is provided,
 * defaults to `webp`.
 * @property {boolean} [dynamic] If true, the format will dynamically change to `gif` for
 * animated avatars; the default is false.
 * @property {number} [size] One of `16`, `32`, `64`, `128`, `256`, `512`, `1024`, `2048`, `4096`
 */

exports.Endpoints = {
  CDN(root) {
    return {
      Emoji: (emojiID, format = 'png') => `${root}/emojis/${emojiID}.${format}`,
      Asset: name => `${root}/assets/${name}`,
      DefaultAvatar: discriminator => `${root}/embed/avatars/${discriminator}.png`,
      Avatar: (userID, hash, format = 'webp', size, dynamic = false) => {
        if (dynamic) format = hash.startsWith('a_') ? 'gif' : format;
        return makeImageUrl(`${root}/avatars/${userID}/${hash}`, { format, size });
      },
      Banner: (guildID, hash, format = 'webp', size) =>
        makeImageUrl(`${root}/banners/${guildID}/${hash}`, { format, size }),
      Icon: (guildID, hash, format = 'webp', size, dynamic = false) => {
        if (dynamic) format = hash.startsWith('a_') ? 'gif' : format;
        return makeImageUrl(`${root}/icons/${guildID}/${hash}`, { format, size });
      },
      AppIcon: (clientID, hash, { format = 'webp', size } = {}) =>
        makeImageUrl(`${root}/app-icons/${clientID}/${hash}`, { size, format }),
      AppAsset: (clientID, hash, { format = 'webp', size } = {}) =>
        makeImageUrl(`${root}/app-assets/${clientID}/${hash}`, { size, format }),
      GDMIcon: (channelID, hash, format = 'webp', size) =>
        makeImageUrl(`${root}/channel-icons/${channelID}/${hash}`, { size, format }),
      Splash: (guildID, hash, format = 'webp', size) =>
        makeImageUrl(`${root}/splashes/${guildID}/${hash}`, { size, format }),
      DiscoverySplash: (guildID, hash, format = 'webp', size) =>
        makeImageUrl(`${root}/discovery-splashes/${guildID}/${hash}`, { size, format }),
      TeamIcon: (teamID, hash, { format = 'webp', size } = {}) =>
        makeImageUrl(`${root}/team-icons/${teamID}/${hash}`, { size, format }),
    };
  },
  invite: (root, code) => `${root}/${code}`,
  botGateway: '/gateway/bot',
};

/**
 * The current status of the client. Here are the available statuses:
 * * READY: 0
 * * CONNECTING: 1
 * * RECONNECTING: 2
 * * IDLE: 3
 * * NEARLY: 4
 * * DISCONNECTED: 5
 * * WAITING_FOR_GUILDS: 6
 * * IDENTIFYING: 7
 * * RESUMING: 8
 * @typedef {number} Status
 */
exports.Status = {
  READY: 0,
  CONNECTING: 1,
  RECONNECTING: 2,
  IDLE: 3,
  NEARLY: 4,
  DISCONNECTED: 5,
  WAITING_FOR_GUILDS: 6,
  IDENTIFYING: 7,
  RESUMING: 8,
};

/**
 * The current status of a voice connection. Here are the available statuses:
 * * CONNECTED: 0
 * * CONNECTING: 1
 * * AUTHENTICATING: 2
 * * RECONNECTING: 3
 * * DISCONNECTED: 4
 * @typedef {number} VoiceStatus
 */
exports.VoiceStatus = {
  CONNECTED: 0,
  CONNECTING: 1,
  AUTHENTICATING: 2,
  RECONNECTING: 3,
  DISCONNECTED: 4,
};

exports.OPCodes = {
  DISPATCH: 0,
  HEARTBEAT: 1,
  IDENTIFY: 2,
  STATUS_UPDATE: 3,
  VOICE_STATE_UPDATE: 4,
  VOICE_GUILD_PING: 5,
  RESUME: 6,
  RECONNECT: 7,
  REQUEST_GUILD_MEMBERS: 8,
  INVALID_SESSION: 9,
  HELLO: 10,
  HEARTBEAT_ACK: 11,
};

exports.VoiceOPCodes = {
  IDENTIFY: 0,
  SELECT_PROTOCOL: 1,
  READY: 2,
  HEARTBEAT: 3,
  SESSION_DESCRIPTION: 4,
  SPEAKING: 5,
  HELLO: 8,
  CLIENT_CONNECT: 12,
  CLIENT_DISCONNECT: 13,
};

exports.Events = {
  RATE_LIMIT: 'rateLimit',
  CLIENT_READY: 'ready',
  GUILD_CREATE: 'guildCreate',
  GUILD_DELETE: 'guildDelete',
  GUILD_UPDATE: 'guildUpdate',
  GUILD_UNAVAILABLE: 'guildUnavailable',
  GUILD_AVAILABLE: 'guildAvailable',
  GUILD_MEMBER_ADD: 'guildMemberAdd',
  GUILD_MEMBER_REMOVE: 'guildMemberRemove',
  GUILD_MEMBER_UPDATE: 'guildMemberUpdate',
  GUILD_MEMBER_AVAILABLE: 'guildMemberAvailable',
  GUILD_MEMBER_SPEAKING: 'guildMemberSpeaking',
  GUILD_MEMBERS_CHUNK: 'guildMembersChunk',
  GUILD_INTEGRATIONS_UPDATE: 'guildIntegrationsUpdate',
  GUILD_ROLE_CREATE: 'roleCreate',
  GUILD_ROLE_DELETE: 'roleDelete',
  INVITE_CREATE: 'inviteCreate',
  INVITE_DELETE: 'inviteDelete',
  GUILD_ROLE_UPDATE: 'roleUpdate',
  GUILD_EMOJI_CREATE: 'emojiCreate',
  GUILD_EMOJI_DELETE: 'emojiDelete',
  GUILD_EMOJI_UPDATE: 'emojiUpdate',
  GUILD_BAN_ADD: 'guildBanAdd',
  GUILD_BAN_REMOVE: 'guildBanRemove',
  CHANNEL_CREATE: 'channelCreate',
  CHANNEL_DELETE: 'channelDelete',
  CHANNEL_UPDATE: 'channelUpdate',
  CHANNEL_PINS_UPDATE: 'channelPinsUpdate',
  MESSAGE_CREATE: 'message',
  MESSAGE_DELETE: 'messageDelete',
  MESSAGE_UPDATE: 'messageUpdate',
  MESSAGE_BULK_DELETE: 'messageDeleteBulk',
  MESSAGE_REACTION_ADD: 'messageReactionAdd',
  MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
  MESSAGE_REACTION_REMOVE_ALL: 'messageReactionRemoveAll',
  MESSAGE_REACTION_REMOVE_EMOJI: 'messageReactionRemoveEmoji',
  USER_UPDATE: 'userUpdate',
  PRESENCE_UPDATE: 'presenceUpdate',
  VOICE_SERVER_UPDATE: 'voiceServerUpdate',
  VOICE_STATE_UPDATE: 'voiceStateUpdate',
  VOICE_BROADCAST_SUBSCRIBE: 'subscribe',
  VOICE_BROADCAST_UNSUBSCRIBE: 'unsubscribe',
  TYPING_START: 'typingStart',
  TYPING_STOP: 'typingStop',
  WEBHOOKS_UPDATE: 'webhookUpdate',
  ERROR: 'error',
  WARN: 'warn',
  DEBUG: 'debug',
  SHARD_DISCONNECT: 'shardDisconnect',
  SHARD_ERROR: 'shardError',
  SHARD_RECONNECTING: 'shardReconnecting',
  SHARD_READY: 'shardReady',
  SHARD_RESUME: 'shardResume',
  INVALIDATED: 'invalidated',
  RAW: 'raw',
};

exports.ShardEvents = {
  CLOSE: 'close',
  DESTROYED: 'destroyed',
  INVALID_SESSION: 'invalidSession',
  READY: 'ready',
  RESUMED: 'resumed',
  ALL_READY: 'allReady',
};

/**
 * The type of Structure allowed to be a partial:
 * * USER
 * * CHANNEL (only affects DMChannels)
 * * GUILD_MEMBER
 * * MESSAGE
 * * REACTION
 * <warn>Partials require you to put checks in place when handling data, read the Partials topic listed in the
 * sidebar for more information.</warn>
 * @typedef {string} PartialType
 */
exports.PartialTypes = keyMirror(['USER', 'CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION']);

/**
 * The type of a websocket message event, e.g. `MESSAGE_CREATE`. Here are the available events:
 * * READY
 * * RESUMED
 * * GUILD_CREATE
 * * GUILD_DELETE
 * * GUILD_UPDATE
 * * INVITE_CREATE
 * * INVITE_DELETE
 * * GUILD_MEMBER_ADD
 * * GUILD_MEMBER_REMOVE
 * * GUILD_MEMBER_UPDATE
 * * GUILD_MEMBERS_CHUNK
 * * GUILD_INTEGRATIONS_UPDATE
 * * GUILD_ROLE_CREATE
 * * GUILD_ROLE_DELETE
 * * GUILD_ROLE_UPDATE
 * * GUILD_BAN_ADD
 * * GUILD_BAN_REMOVE
 * * GUILD_EMOJIS_UPDATE
 * * CHANNEL_CREATE
 * * CHANNEL_DELETE
 * * CHANNEL_UPDATE
 * * CHANNEL_PINS_UPDATE
 * * MESSAGE_CREATE
 * * MESSAGE_DELETE
 * * MESSAGE_UPDATE
 * * MESSAGE_DELETE_BULK
 * * MESSAGE_REACTION_ADD
 * * MESSAGE_REACTION_REMOVE
 * * MESSAGE_REACTION_REMOVE_ALL
 * * MESSAGE_REACTION_REMOVE_EMOJI
 * * USER_UPDATE
 * * PRESENCE_UPDATE
 * * TYPING_START
 * * VOICE_STATE_UPDATE
 * * VOICE_SERVER_UPDATE
 * * WEBHOOKS_UPDATE
 * @typedef {string} WSEventType
 */
exports.WSEvents = keyMirror([
  'READY',
  'RESUMED',
  'GUILD_CREATE',
  'GUILD_DELETE',
  'GUILD_UPDATE',
  'INVITE_CREATE',
  'INVITE_DELETE',
  'GUILD_MEMBER_ADD',
  'GUILD_MEMBER_REMOVE',
  'GUILD_MEMBER_UPDATE',
  'GUILD_MEMBERS_CHUNK',
  'GUILD_INTEGRATIONS_UPDATE',
  'GUILD_ROLE_CREATE',
  'GUILD_ROLE_DELETE',
  'GUILD_ROLE_UPDATE',
  'GUILD_BAN_ADD',
  'GUILD_BAN_REMOVE',
  'GUILD_EMOJIS_UPDATE',
  'CHANNEL_CREATE',
  'CHANNEL_DELETE',
  'CHANNEL_UPDATE',
  'CHANNEL_PINS_UPDATE',
  'MESSAGE_CREATE',
  'MESSAGE_DELETE',
  'MESSAGE_UPDATE',
  'MESSAGE_DELETE_BULK',
  'MESSAGE_REACTION_ADD',
  'MESSAGE_REACTION_REMOVE',
  'MESSAGE_REACTION_REMOVE_ALL',
  'MESSAGE_REACTION_REMOVE_EMOJI',
  'USER_UPDATE',
  'PRESENCE_UPDATE',
  'TYPING_START',
  'VOICE_STATE_UPDATE',
  'VOICE_SERVER_UPDATE',
  'WEBHOOKS_UPDATE',
]);

/**
 * The type of a message, e.g. `DEFAULT`. Here are the available types:
 * * DEFAULT
 * * RECIPIENT_ADD
 * * RECIPIENT_REMOVE
 * * CALL
 * * CHANNEL_NAME_CHANGE
 * * CHANNEL_ICON_CHANGE
 * * PINS_ADD
 * * GUILD_MEMBER_JOIN
 * * USER_PREMIUM_GUILD_SUBSCRIPTION
 * * USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1
 * * USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2
 * * USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3
 * * CHANNEL_FOLLOW_ADD
 * * GUILD_DISCOVERY_DISQUALIFIED
 * * GUILD_DISCOVERY_REQUALIFIED
 * @typedef {string} MessageType
 */
exports.MessageTypes = [
  'DEFAULT',
  'RECIPIENT_ADD',
  'RECIPIENT_REMOVE',
  'CALL',
  'CHANNEL_NAME_CHANGE',
  'CHANNEL_ICON_CHANGE',
  'PINS_ADD',
  'GUILD_MEMBER_JOIN',
  'USER_PREMIUM_GUILD_SUBSCRIPTION',
  'USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1',
  'USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2',
  'USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3',
  'CHANNEL_FOLLOW_ADD',
  null,
  'GUILD_DISCOVERY_DISQUALIFIED',
  'GUILD_DISCOVERY_REQUALIFIED',
];

/**
 * <info>Bots cannot set a `CUSTOM_STATUS`, it is only for custom statuses received from users</info>
 * The type of an activity of a users presence, e.g. `PLAYING`. Here are the available types:
 * * PLAYING
 * * STREAMING
 * * LISTENING
 * * WATCHING
 * * CUSTOM_STATUS
 * * COMPETING
 * @typedef {string} ActivityType
 */
exports.ActivityTypes = ['PLAYING', 'STREAMING', 'LISTENING', 'WATCHING', 'CUSTOM_STATUS', 'COMPETING'];

exports.ChannelTypes = {
  TEXT: 0,
  DM: 1,
  VOICE: 2,
  GROUP: 3,
  CATEGORY: 4,
  NEWS: 5,
  STORE: 6,
};

exports.ClientApplicationAssetTypes = {
  SMALL: 1,
  BIG: 2,
};

exports.Colors = {
  DEFAULT: 0x000000,
  WHITE: 0xffffff,
  AQUA: 0x1abc9c,
  GREEN: 0x2ecc71,
  BLUE: 0x3498db,
  YELLOW: 0xffff00,
  PURPLE: 0x9b59b6,
  LUMINOUS_VIVID_PINK: 0xe91e63,
  GOLD: 0xf1c40f,
  ORANGE: 0xe67e22,
  RED: 0xe74c3c,
  GREY: 0x95a5a6,
  NAVY: 0x34495e,
  DARK_AQUA: 0x11806a,
  DARK_GREEN: 0x1f8b4c,
  DARK_BLUE: 0x206694,
  DARK_PURPLE: 0x71368a,
  DARK_VIVID_PINK: 0xad1457,
  DARK_GOLD: 0xc27c0e,
  DARK_ORANGE: 0xa84300,
  DARK_RED: 0x992d22,
  DARK_GREY: 0x979c9f,
  DARKER_GREY: 0x7f8c8d,
  LIGHT_GREY: 0xbcc0c0,
  DARK_NAVY: 0x2c3e50,
  BLURPLE: 0x7289da,
  GREYPLE: 0x99aab5,
  DARK_BUT_NOT_BLACK: 0x2c2f33,
  NOT_QUITE_BLACK: 0x23272a,
};

/**
 * The value set for the explicit content filter levels for a guild:
 * * DISABLED
 * * MEMBERS_WITHOUT_ROLES
 * * ALL_MEMBERS
 * @typedef {string} ExplicitContentFilterLevel
 */
exports.ExplicitContentFilterLevels = ['DISABLED', 'MEMBERS_WITHOUT_ROLES', 'ALL_MEMBERS'];

/**
 * The value set for the verification levels for a guild:
 * * NONE
 * * LOW
 * * MEDIUM
 * * HIGH
 * * VERY_HIGH
 * @typedef {string} VerificationLevel
 */
exports.VerificationLevels = ['NONE', 'LOW', 'MEDIUM', 'HIGH', 'VERY_HIGH'];

/**
 * An error encountered while performing an API request. Here are the potential errors:
 * * UNKNOWN_ACCOUNT
 * * UNKNOWN_APPLICATION
 * * UNKNOWN_CHANNEL
 * * UNKNOWN_GUILD
 * * UNKNOWN_INTEGRATION
 * * UNKNOWN_INVITE
 * * UNKNOWN_MEMBER
 * * UNKNOWN_MESSAGE
 * * UNKNOWN_OVERWRITE
 * * UNKNOWN_PROVIDER
 * * UNKNOWN_ROLE
 * * UNKNOWN_TOKEN
 * * UNKNOWN_USER
 * * UNKNOWN_EMOJI
 * * UNKNOWN_WEBHOOK
 * * UNKNOWN_BAN
 * * UNKNOWN_GUILD_TEMPLATE
 * * BOT_PROHIBITED_ENDPOINT
 * * BOT_ONLY_ENDPOINT
 * * CHANNEL_HIT_WRITE_RATELIMIT
 * * MAXIMUM_GUILDS
 * * MAXIMUM_FRIENDS
 * * MAXIMUM_PINS
 * * MAXIMUM_ROLES
 * * MAXIMUM_WEBHOOKS
 * * MAXIMUM_REACTIONS
 * * MAXIMUM_CHANNELS
 * * MAXIMUM_ATTACHMENTS
 * * MAXIMUM_INVITES
 * * GUILD_ALREADY_HAS_TEMPLATE
 * * UNAUTHORIZED
 * * ACCOUNT_VERIFICATION_REQUIRED
 * * REQUEST_ENTITY_TOO_LARGE
 * * FEATURE_TEMPORARILY_DISABLED
 * * USER_BANNED
 * * ALREADY_CROSSPOSTED
 * * MISSING_ACCESS
 * * INVALID_ACCOUNT_TYPE
 * * CANNOT_EXECUTE_ON_DM
 * * EMBED_DISABLED
 * * CANNOT_EDIT_MESSAGE_BY_OTHER
 * * CANNOT_SEND_EMPTY_MESSAGE
 * * CANNOT_MESSAGE_USER
 * * CANNOT_SEND_MESSAGES_IN_VOICE_CHANNEL
 * * CHANNEL_VERIFICATION_LEVEL_TOO_HIGH
 * * OAUTH2_APPLICATION_BOT_ABSENT
 * * MAXIMUM_OAUTH2_APPLICATIONS
 * * INVALID_OAUTH_STATE
 * * MISSING_PERMISSIONS
 * * INVALID_AUTHENTICATION_TOKEN
 * * NOTE_TOO_LONG
 * * INVALID_BULK_DELETE_QUANTITY
 * * CANNOT_PIN_MESSAGE_IN_OTHER_CHANNEL
 * * INVALID_OR_TAKEN_INVITE_CODE
 * * CANNOT_EXECUTE_ON_SYSTEM_MESSAGE
 * * INVALID_OAUTH_TOKEN
 * * BULK_DELETE_MESSAGE_TOO_OLD
 * * INVALID_FORM_BODY
 * * INVITE_ACCEPTED_TO_GUILD_NOT_CONTAINING_BOT
 * * INVALID_API_VERSION
 * * CANNOT_DELETE_COMMUNITY_REQUIRED_CHANNEL
 * * REACTION_BLOCKED
 * * RESOURCE_OVERLOADED
 * @typedef {string} APIError
 */
exports.APIErrors = {
  UNKNOWN_ACCOUNT: 10001,
  UNKNOWN_APPLICATION: 10002,
  UNKNOWN_CHANNEL: 10003,
  UNKNOWN_GUILD: 10004,
  UNKNOWN_INTEGRATION: 10005,
  UNKNOWN_INVITE: 10006,
  UNKNOWN_MEMBER: 10007,
  UNKNOWN_MESSAGE: 10008,
  UNKNOWN_OVERWRITE: 10009,
  UNKNOWN_PROVIDER: 10010,
  UNKNOWN_ROLE: 10011,
  UNKNOWN_TOKEN: 10012,
  UNKNOWN_USER: 10013,
  UNKNOWN_EMOJI: 10014,
  UNKNOWN_WEBHOOK: 10015,
  UNKNOWN_BAN: 10026,
  UNKNOWN_GUILD_TEMPLATE: 10057,
  BOT_PROHIBITED_ENDPOINT: 20001,
  BOT_ONLY_ENDPOINT: 20002,
  CHANNEL_HIT_WRITE_RATELIMIT: 20028,
  MAXIMUM_GUILDS: 30001,
  MAXIMUM_FRIENDS: 30002,
  MAXIMUM_PINS: 30003,
  MAXIMUM_ROLES: 30005,
  MAXIMUM_WEBHOOKS: 30007,
  MAXIMUM_REACTIONS: 30010,
  MAXIMUM_CHANNELS: 30013,
  MAXIMUM_ATTACHMENTS: 30015,
  MAXIMUM_INVITES: 30016,
  GUILD_ALREADY_HAS_TEMPLATE: 30031,
  UNAUTHORIZED: 40001,
  ACCOUNT_VERIFICATION_REQUIRED: 40002,
  REQUEST_ENTITY_TOO_LARGE: 40005,
  FEATURE_TEMPORARILY_DISABLED: 40006,
  USER_BANNED: 40007,
  ALREADY_CROSSPOSTED: 40033,
  MISSING_ACCESS: 50001,
  INVALID_ACCOUNT_TYPE: 50002,
  CANNOT_EXECUTE_ON_DM: 50003,
  EMBED_DISABLED: 50004,
  CANNOT_EDIT_MESSAGE_BY_OTHER: 50005,
  CANNOT_SEND_EMPTY_MESSAGE: 50006,
  CANNOT_MESSAGE_USER: 50007,
  CANNOT_SEND_MESSAGES_IN_VOICE_CHANNEL: 50008,
  CHANNEL_VERIFICATION_LEVEL_TOO_HIGH: 50009,
  OAUTH2_APPLICATION_BOT_ABSENT: 50010,
  MAXIMUM_OAUTH2_APPLICATIONS: 50011,
  INVALID_OAUTH_STATE: 50012,
  MISSING_PERMISSIONS: 50013,
  INVALID_AUTHENTICATION_TOKEN: 50014,
  NOTE_TOO_LONG: 50015,
  INVALID_BULK_DELETE_QUANTITY: 50016,
  CANNOT_PIN_MESSAGE_IN_OTHER_CHANNEL: 50019,
  INVALID_OR_TAKEN_INVITE_CODE: 50020,
  CANNOT_EXECUTE_ON_SYSTEM_MESSAGE: 50021,
  INVALID_OAUTH_TOKEN: 50025,
  BULK_DELETE_MESSAGE_TOO_OLD: 50034,
  INVALID_FORM_BODY: 50035,
  INVITE_ACCEPTED_TO_GUILD_NOT_CONTAINING_BOT: 50036,
  INVALID_API_VERSION: 50041,
  CANNOT_DELETE_COMMUNITY_REQUIRED_CHANNEL: 50074,
  REACTION_BLOCKED: 90001,
  RESOURCE_OVERLOADED: 130000,
};

/**
 * The value set for a guild's default message notifications, e.g. `ALL`. Here are the available types:
 * * ALL
 * * MENTIONS
 * @typedef {string} DefaultMessageNotifications
 */
exports.DefaultMessageNotifications = ['ALL', 'MENTIONS'];

/**
 * The value set for a team members's membership state:
 * * INVITED
 * * ACCEPTED
 * @typedef {string} MembershipStates
 */
exports.MembershipStates = [
  // They start at 1
  null,
  'INVITED',
  'ACCEPTED',
];

/**
 * The value set for a webhook's type:
 * * Incoming
 * * Channel Follower
 * @typedef {string} WebhookTypes
 */
exports.WebhookTypes = [
  // They start at 1
  null,
  'Incoming',
  'Channel Follower',
];

function keyMirror(arr) {
  let tmp = Object.create(null);
  for (const value of arr) tmp[value] = value;
  return tmp;
}


/***/ }),

/***/ "./node_modules/discord.js/src/util/DataResolver.js":
/*!**********************************************************!*\
  !*** ./node_modules/discord.js/src/util/DataResolver.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const fs = __webpack_require__(/*! fs */ "?65c5");
const path = __webpack_require__(/*! path */ "?0f27");
const stream = __webpack_require__(/*! stream */ "?cc48");
const fetch = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
const { Error: DiscordError, TypeError } = __webpack_require__(/*! ../errors */ "./node_modules/discord.js/src/errors/index.js");
const { browser } = __webpack_require__(/*! ../util/Constants */ "./node_modules/discord.js/src/util/Constants.js");
const Util = __webpack_require__(/*! ../util/Util */ "./node_modules/discord.js/src/util/Util.js");

/**
 * The DataResolver identifies different objects and tries to resolve a specific piece of information from them.
 * @private
 */
class DataResolver {
  constructor() {
    throw new Error(`The ${this.constructor.name} class may not be instantiated.`);
  }

  /**
   * Data that can be resolved to give an invite code. This can be:
   * * An invite code
   * * An invite URL
   * @typedef {string} InviteResolvable
   */

  /**
   * Data that can be resolved to give an template code. This can be:
   * * A template code
   * * A template URL
   * @typedef {string} GuildTemplateResolvable
   */

  /**
   * Resolves the string to a code based on the passed regex.
   * @param {string} data The string to resolve
   * @param {RegExp} regex The RegExp used to extract the code
   * @returns {string}
   */
  static resolveCode(data, regex) {
    const match = regex.exec(data);
    return match ? match[1] || data : data;
  }

  /**
   * Resolves InviteResolvable to an invite code.
   * @param {InviteResolvable} data The invite resolvable to resolve
   * @returns {string}
   */
  static resolveInviteCode(data) {
    return this.resolveCode(data, /discord(?:(?:app)?\.com\/invite|\.gg(?:\/invite)?)\/([\w-]{2,255})/i);
  }

  /**
   * Resolves GuildTemplateResolvable to a template code.
   * @param {GuildTemplateResolvable} data The template resolvable to resolve
   * @returns {string}
   */
  static resolveGuildTemplateCode(data) {
    return this.resolveCode(data, /discord(?:app)?\.(?:com\/template|new)\/([\w-]{2,255})/i);
  }

  /**
   * Resolves a Base64Resolvable, a string, or a BufferResolvable to a Base 64 image.
   * @param {BufferResolvable|Base64Resolvable} image The image to be resolved
   * @returns {Promise<?string>}
   */
  static async resolveImage(image) {
    if (!image) return null;
    if (typeof image === 'string' && image.startsWith('data:')) {
      return image;
    }
    const file = await this.resolveFileAsBuffer(image);
    return DataResolver.resolveBase64(file);
  }

  /**
   * Data that resolves to give a Base64 string, typically for image uploading. This can be:
   * * A Buffer
   * * A base64 string
   * @typedef {Buffer|string} Base64Resolvable
   */

  /**
   * Resolves a Base64Resolvable to a Base 64 image.
   * @param {Base64Resolvable} data The base 64 resolvable you want to resolve
   * @returns {?string}
   */
  static resolveBase64(data) {
    if (Buffer.isBuffer(data)) return `data:image/jpg;base64,${data.toString('base64')}`;
    return data;
  }

  /**
   * Data that can be resolved to give a Buffer. This can be:
   * * A Buffer
   * * The path to a local file
   * * A URL
   * @typedef {string|Buffer} BufferResolvable
   */

  /**
   * @external Stream
   * @see {@link https://nodejs.org/api/stream.html}
   */

  /**
   * Resolves a BufferResolvable to a Buffer or a Stream.
   * @param {BufferResolvable|Stream} resource The buffer or stream resolvable to resolve
   * @returns {Promise<Buffer|Stream>}
   */
  static async resolveFile(resource) {
    if (!browser && Buffer.isBuffer(resource)) return resource;
    if (browser && resource instanceof ArrayBuffer) return Util.convertToBuffer(resource);
    // eslint-disable-next-line no-undef
    if (browser && resource instanceof Blob) return resource;
    if (resource instanceof stream.Readable) return resource;

    if (typeof resource === 'string') {
      if (/^https?:\/\//.test(resource)) {
        const res = await fetch(resource);
        return browser ? res.blob() : res.body;
      } else if (!browser) {
        return new Promise((resolve, reject) => {
          const file = path.resolve(resource);
          fs.stat(file, (err, stats) => {
            if (err) return reject(err);
            if (!stats.isFile()) return reject(new DiscordError('FILE_NOT_FOUND', file));
            return resolve(fs.createReadStream(file));
          });
        });
      }
    }

    throw new TypeError('REQ_RESOURCE_TYPE');
  }

  /**
   * Resolves a BufferResolvable to a Buffer.
   * @param {BufferResolvable|Stream} resource The buffer or stream resolvable to resolve
   * @returns {Promise<Buffer>}
   */
  static async resolveFileAsBuffer(resource) {
    const file = await this.resolveFile(resource);
    if (Buffer.isBuffer(file)) return file;

    const buffers = [];
    for await (const data of file) buffers.push(data);
    return Buffer.concat(buffers);
  }
}

module.exports = DataResolver;


/***/ }),

/***/ "./node_modules/discord.js/src/util/Intents.js":
/*!*****************************************************!*\
  !*** ./node_modules/discord.js/src/util/Intents.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const BitField = __webpack_require__(/*! ./BitField */ "./node_modules/discord.js/src/util/BitField.js");

/**
 * Data structure that makes it easy to calculate intents.
 * @extends {BitField}
 */
class Intents extends BitField {}

/**
 * @name Intents
 * @kind constructor
 * @memberof Intents
 * @param {IntentsResolvable} [bits=0] Bit(s) to read from
 */

/**
 * Data that can be resolved to give a permission number. This can be:
 * * A string (see {@link Intents.FLAGS})
 * * An intents flag
 * * An instance of Intents
 * * An array of IntentsResolvable
 * @typedef {string|number|Intents|IntentsResolvable[]} IntentsResolvable
 */

/**
 * Numeric websocket intents. All available properties:
 * * `GUILDS`
 * * `GUILD_MEMBERS`
 * * `GUILD_BANS`
 * * `GUILD_EMOJIS`
 * * `GUILD_INTEGRATIONS`
 * * `GUILD_WEBHOOKS`
 * * `GUILD_INVITES`
 * * `GUILD_VOICE_STATES`
 * * `GUILD_PRESENCES`
 * * `GUILD_MESSAGES`
 * * `GUILD_MESSAGE_REACTIONS`
 * * `GUILD_MESSAGE_TYPING`
 * * `DIRECT_MESSAGES`
 * * `DIRECT_MESSAGE_REACTIONS`
 * * `DIRECT_MESSAGE_TYPING`
 * @type {Object}
 * @see {@link https://discord.com/developers/docs/topics/gateway#list-of-intents}
 */
Intents.FLAGS = {
  GUILDS: 1 << 0,
  GUILD_MEMBERS: 1 << 1,
  GUILD_BANS: 1 << 2,
  GUILD_EMOJIS: 1 << 3,
  GUILD_INTEGRATIONS: 1 << 4,
  GUILD_WEBHOOKS: 1 << 5,
  GUILD_INVITES: 1 << 6,
  GUILD_VOICE_STATES: 1 << 7,
  GUILD_PRESENCES: 1 << 8,
  GUILD_MESSAGES: 1 << 9,
  GUILD_MESSAGE_REACTIONS: 1 << 10,
  GUILD_MESSAGE_TYPING: 1 << 11,
  DIRECT_MESSAGES: 1 << 12,
  DIRECT_MESSAGE_REACTIONS: 1 << 13,
  DIRECT_MESSAGE_TYPING: 1 << 14,
};

/**
 * Bitfield representing all privileged intents
 * @type {number}
 * @see {@link https://discord.com/developers/docs/topics/gateway#privileged-intents}
 */
Intents.PRIVILEGED = Intents.FLAGS.GUILD_MEMBERS | Intents.FLAGS.GUILD_PRESENCES;

/**
 * Bitfield representing all intents combined
 * @type {number}
 */
Intents.ALL = Object.values(Intents.FLAGS).reduce((acc, p) => acc | p, 0);

/**
 * Bitfield representing all non-privileged intents
 * @type {number}
 */
Intents.NON_PRIVILEGED = Intents.ALL & ~Intents.PRIVILEGED;

module.exports = Intents;


/***/ }),

/***/ "./node_modules/discord.js/src/util/LimitedCollection.js":
/*!***************************************************************!*\
  !*** ./node_modules/discord.js/src/util/LimitedCollection.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Collection = __webpack_require__(/*! ./Collection.js */ "./node_modules/discord.js/src/util/Collection.js");

/**
 * A Collection which holds a max amount of entries. The first key is deleted if the Collection has
 * reached max size.
 * @extends {Collection}
 * @param {number} [maxSize=0] The maximum size of the Collection
 * @param {Iterable} [iterable=null] Optional entries passed to the Map constructor.
 * @private
 */
class LimitedCollection extends Collection {
  constructor(maxSize = 0, iterable = null) {
    super(iterable);
    /**
     * The max size of the Collection.
     * @type {number}
     */
    this.maxSize = maxSize;
  }

  set(key, value) {
    if (this.maxSize === 0) return this;
    if (this.size >= this.maxSize && !this.has(key)) this.delete(this.firstKey());
    return super.set(key, value);
  }

  static get [Symbol.species]() {
    return Collection;
  }
}

module.exports = LimitedCollection;


/***/ }),

/***/ "./node_modules/discord.js/src/util/MessageFlags.js":
/*!**********************************************************!*\
  !*** ./node_modules/discord.js/src/util/MessageFlags.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const BitField = __webpack_require__(/*! ./BitField */ "./node_modules/discord.js/src/util/BitField.js");

/**
 * Data structure that makes it easy to interact with an {@link Message#flags} bitfield.
 * @extends {BitField}
 */
class MessageFlags extends BitField {}

/**
 * @name MessageFlags
 * @kind constructor
 * @memberof MessageFlags
 * @param {BitFieldResolvable} [bits=0] Bit(s) to read from
 */

/**
 * Numeric message flags. All available properties:
 * * `CROSSPOSTED`
 * * `IS_CROSSPOST`
 * * `SUPPRESS_EMBEDS`
 * * `SOURCE_MESSAGE_DELETED`
 * * `URGENT`
 * @type {Object}
 * @see {@link https://discord.com/developers/docs/resources/channel#message-object-message-flags}
 */
MessageFlags.FLAGS = {
  CROSSPOSTED: 1 << 0,
  IS_CROSSPOST: 1 << 1,
  SUPPRESS_EMBEDS: 1 << 2,
  SOURCE_MESSAGE_DELETED: 1 << 3,
  URGENT: 1 << 4,
};

module.exports = MessageFlags;


/***/ }),

/***/ "./node_modules/discord.js/src/util/Permissions.js":
/*!*********************************************************!*\
  !*** ./node_modules/discord.js/src/util/Permissions.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const BitField = __webpack_require__(/*! ./BitField */ "./node_modules/discord.js/src/util/BitField.js");

/**
 * Data structure that makes it easy to interact with a permission bitfield. All {@link GuildMember}s have a set of
 * permissions in their guild, and each channel in the guild may also have {@link PermissionOverwrites} for the member
 * that override their default permissions.
 * @extends {BitField}
 */
class Permissions extends BitField {
  /**
   * @name Permissions
   * @kind constructor
   * @memberof Permissions
   * @param {PermissionResolvable} [bits=0] Bit(s) to read from
   */

  /**
   * Data that can be resolved to give a permission number. This can be:
   * * A string (see {@link Permissions.FLAGS})
   * * A permission number
   * * An instance of Permissions
   * * An Array of PermissionResolvable
   * @typedef {string|number|Permissions|PermissionResolvable[]} PermissionResolvable
   */

  /**
   * Checks whether the bitfield has a permission, or any of multiple permissions.
   * @param {PermissionResolvable} permission Permission(s) to check for
   * @param {boolean} [checkAdmin=true] Whether to allow the administrator permission to override
   * @returns {boolean}
   */
  any(permission, checkAdmin = true) {
    return (checkAdmin && super.has(this.constructor.FLAGS.ADMINISTRATOR)) || super.any(permission);
  }

  /**
   * Checks whether the bitfield has a permission, or multiple permissions.
   * @param {PermissionResolvable} permission Permission(s) to check for
   * @param {boolean} [checkAdmin=true] Whether to allow the administrator permission to override
   * @returns {boolean}
   */
  has(permission, checkAdmin = true) {
    return (checkAdmin && super.has(this.constructor.FLAGS.ADMINISTRATOR)) || super.has(permission);
  }
}

/**
 * Numeric permission flags. All available properties:
 * * `ADMINISTRATOR` (implicitly has *all* permissions, and bypasses all channel overwrites)
 * * `CREATE_INSTANT_INVITE` (create invitations to the guild)
 * * `KICK_MEMBERS`
 * * `BAN_MEMBERS`
 * * `MANAGE_CHANNELS` (edit and reorder channels)
 * * `MANAGE_GUILD` (edit the guild information, region, etc.)
 * * `ADD_REACTIONS` (add new reactions to messages)
 * * `VIEW_AUDIT_LOG`
 * * `PRIORITY_SPEAKER`
 * * `STREAM`
 * * `VIEW_CHANNEL`
 * * `SEND_MESSAGES`
 * * `SEND_TTS_MESSAGES`
 * * `MANAGE_MESSAGES` (delete messages and reactions)
 * * `EMBED_LINKS` (links posted will have a preview embedded)
 * * `ATTACH_FILES`
 * * `READ_MESSAGE_HISTORY` (view messages that were posted prior to opening Discord)
 * * `MENTION_EVERYONE`
 * * `USE_EXTERNAL_EMOJIS` (use emojis from different guilds)
 * * `VIEW_GUILD_INSIGHTS`
 * * `CONNECT` (connect to a voice channel)
 * * `SPEAK` (speak in a voice channel)
 * * `MUTE_MEMBERS` (mute members across all voice channels)
 * * `DEAFEN_MEMBERS` (deafen members across all voice channels)
 * * `MOVE_MEMBERS` (move members between voice channels)
 * * `USE_VAD` (use voice activity detection)
 * * `CHANGE_NICKNAME`
 * * `MANAGE_NICKNAMES` (change other members' nicknames)
 * * `MANAGE_ROLES`
 * * `MANAGE_WEBHOOKS`
 * * `MANAGE_EMOJIS`
 * @type {Object}
 * @see {@link https://discord.com/developers/docs/topics/permissions}
 */
Permissions.FLAGS = {
  CREATE_INSTANT_INVITE: 1 << 0,
  KICK_MEMBERS: 1 << 1,
  BAN_MEMBERS: 1 << 2,
  ADMINISTRATOR: 1 << 3,
  MANAGE_CHANNELS: 1 << 4,
  MANAGE_GUILD: 1 << 5,
  ADD_REACTIONS: 1 << 6,
  VIEW_AUDIT_LOG: 1 << 7,
  PRIORITY_SPEAKER: 1 << 8,
  STREAM: 1 << 9,
  VIEW_CHANNEL: 1 << 10,
  SEND_MESSAGES: 1 << 11,
  SEND_TTS_MESSAGES: 1 << 12,
  MANAGE_MESSAGES: 1 << 13,
  EMBED_LINKS: 1 << 14,
  ATTACH_FILES: 1 << 15,
  READ_MESSAGE_HISTORY: 1 << 16,
  MENTION_EVERYONE: 1 << 17,
  USE_EXTERNAL_EMOJIS: 1 << 18,
  VIEW_GUILD_INSIGHTS: 1 << 19,
  CONNECT: 1 << 20,
  SPEAK: 1 << 21,
  MUTE_MEMBERS: 1 << 22,
  DEAFEN_MEMBERS: 1 << 23,
  MOVE_MEMBERS: 1 << 24,
  USE_VAD: 1 << 25,
  CHANGE_NICKNAME: 1 << 26,
  MANAGE_NICKNAMES: 1 << 27,
  MANAGE_ROLES: 1 << 28,
  MANAGE_WEBHOOKS: 1 << 29,
  MANAGE_EMOJIS: 1 << 30,
};

/**
 * Bitfield representing every permission combined
 * @type {number}
 */
Permissions.ALL = Object.values(Permissions.FLAGS).reduce((all, p) => all | p, 0);

/**
 * Bitfield representing the default permissions for users
 * @type {number}
 */
Permissions.DEFAULT = 104324673;

module.exports = Permissions;


/***/ }),

/***/ "./node_modules/discord.js/src/util/Snowflake.js":
/*!*******************************************************!*\
  !*** ./node_modules/discord.js/src/util/Snowflake.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const Util = __webpack_require__(/*! ../util/Util */ "./node_modules/discord.js/src/util/Util.js");

// Discord epoch (2015-01-01T00:00:00.000Z)
const EPOCH = 1420070400000;
let INCREMENT = 0;

/**
 * A container for useful snowflake-related methods.
 */
class SnowflakeUtil {
  constructor() {
    throw new Error(`The ${this.constructor.name} class may not be instantiated.`);
  }

  /**
   * A Twitter snowflake, except the epoch is 2015-01-01T00:00:00.000Z
   * ```
   * If we have a snowflake '266241948824764416' we can represent it as binary:
   *
   * 64                                          22     17     12          0
   *  000000111011000111100001101001000101000000  00001  00000  000000000000
   *       number of ms since Discord epoch       worker  pid    increment
   * ```
   * @typedef {string} Snowflake
   */

  /**
   * Generates a Discord snowflake.
   * <info>This hardcodes the worker ID as 1 and the process ID as 0.</info>
   * @param {number|Date} [timestamp=Date.now()] Timestamp or date of the snowflake to generate
   * @returns {Snowflake} The generated snowflake
   */
  static generate(timestamp = Date.now()) {
    if (timestamp instanceof Date) timestamp = timestamp.getTime();
    if (typeof timestamp !== 'number' || isNaN(timestamp)) {
      throw new TypeError(
        `"timestamp" argument must be a number (received ${isNaN(timestamp) ? 'NaN' : typeof timestamp})`,
      );
    }
    if (INCREMENT >= 4095) INCREMENT = 0;
    const BINARY = `${(timestamp - EPOCH).toString(2).padStart(42, '0')}0000100000${(INCREMENT++)
      .toString(2)
      .padStart(12, '0')}`;
    return Util.binaryToID(BINARY);
  }

  /**
   * A deconstructed snowflake.
   * @typedef {Object} DeconstructedSnowflake
   * @property {number} timestamp Timestamp the snowflake was created
   * @property {Date} date Date the snowflake was created
   * @property {number} workerID Worker ID in the snowflake
   * @property {number} processID Process ID in the snowflake
   * @property {number} increment Increment in the snowflake
   * @property {string} binary Binary representation of the snowflake
   */

  /**
   * Deconstructs a Discord snowflake.
   * @param {Snowflake} snowflake Snowflake to deconstruct
   * @returns {DeconstructedSnowflake} Deconstructed snowflake
   */
  static deconstruct(snowflake) {
    const BINARY = Util.idToBinary(snowflake).toString(2).padStart(64, '0');
    const res = {
      timestamp: parseInt(BINARY.substring(0, 42), 2) + EPOCH,
      workerID: parseInt(BINARY.substring(42, 47), 2),
      processID: parseInt(BINARY.substring(47, 52), 2),
      increment: parseInt(BINARY.substring(52, 64), 2),
      binary: BINARY,
    };
    Object.defineProperty(res, 'date', {
      get: function get() {
        return new Date(this.timestamp);
      },
      enumerable: true,
    });
    return res;
  }

  /**
   * Discord's epoch value (2015-01-01T00:00:00.000Z).
   * @type {number}
   * @readonly
   */
  static get EPOCH() {
    return EPOCH;
  }
}

module.exports = SnowflakeUtil;


/***/ }),

/***/ "./node_modules/discord.js/src/util/Speaking.js":
/*!******************************************************!*\
  !*** ./node_modules/discord.js/src/util/Speaking.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const BitField = __webpack_require__(/*! ./BitField */ "./node_modules/discord.js/src/util/BitField.js");

/**
 * Data structure that makes it easy to interact with a {@link VoiceConnection#speaking}
 * and {@link guildMemberSpeaking} event bitfields.
 * @extends {BitField}
 */
class Speaking extends BitField {}

/**
 * @name Speaking
 * @kind constructor
 * @memberof Speaking
 * @param {BitFieldResolvable} [bits=0] Bit(s) to read from
 */

/**
 * Numeric speaking flags. All available properties:
 * * `SPEAKING`
 * * `SOUNDSHARE`
 * * `PRIORITY_SPEAKING`
 * @type {Object}
 * @see {@link https://discord.com/developers/docs/topics/voice-connections#speaking}
 */
Speaking.FLAGS = {
  SPEAKING: 1 << 0,
  SOUNDSHARE: 1 << 1,
  PRIORITY_SPEAKING: 1 << 2,
};

module.exports = Speaking;


/***/ }),

/***/ "./node_modules/discord.js/src/util/Structures.js":
/*!********************************************************!*\
  !*** ./node_modules/discord.js/src/util/Structures.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/**
 * An extendable structure:
 * * **`GuildEmoji`**
 * * **`DMChannel`**
 * * **`TextChannel`**
 * * **`VoiceChannel`**
 * * **`CategoryChannel`**
 * * **`NewsChannel`**
 * * **`StoreChannel`**
 * * **`GuildMember`**
 * * **`Guild`**
 * * **`Message`**
 * * **`MessageReaction`**
 * * **`Presence`**
 * * **`ClientPresence`**
 * * **`VoiceState`**
 * * **`Role`**
 * * **`User`**
 * @typedef {string} ExtendableStructure
 */

/**
 * Allows for the extension of built-in Discord.js structures that are instantiated by {@link BaseManager Managers}.
 */
class Structures {
  constructor() {
    throw new Error(`The ${this.constructor.name} class may not be instantiated.`);
  }

  /**
   * Retrieves a structure class.
   * @param {string} structure Name of the structure to retrieve
   * @returns {Function}
   */
  static get(structure) {
    if (typeof structure === 'string') return structures[structure];
    throw new TypeError(`"structure" argument must be a string (received ${typeof structure})`);
  }

  /**
   * Extends a structure.
   * <warn> Make sure to extend all structures before instantiating your client.
   * Extending after doing so may not work as expected. </warn>
   * @param {ExtendableStructure} structure Name of the structure class to extend
   * @param {Function} extender Function that takes the base class to extend as its only parameter and returns the
   * extended class/prototype
   * @returns {Function} Extended class/prototype returned from the extender
   * @example
   * const { Structures } = require('discord.js');
   *
   * Structures.extend('Guild', Guild => {
   *   class CoolGuild extends Guild {
   *     constructor(client, data) {
   *       super(client, data);
   *       this.cool = true;
   *     }
   *   }
   *
   *   return CoolGuild;
   * });
   */
  static extend(structure, extender) {
    if (!structures[structure]) throw new RangeError(`"${structure}" is not a valid extensible structure.`);
    if (typeof extender !== 'function') {
      const received = `(received ${typeof extender})`;
      throw new TypeError(
        `"extender" argument must be a function that returns the extended structure class/prototype ${received}.`,
      );
    }

    const extended = extender(structures[structure]);
    if (typeof extended !== 'function') {
      const received = `(received ${typeof extended})`;
      throw new TypeError(`The extender function must return the extended structure class/prototype ${received}.`);
    }

    if (!(extended.prototype instanceof structures[structure])) {
      const prototype = Object.getPrototypeOf(extended);
      const received = `${extended.name || 'unnamed'}${prototype.name ? ` extends ${prototype.name}` : ''}`;
      throw new Error(
        'The class/prototype returned from the extender function must extend the existing structure class/prototype' +
          ` (received function ${received}; expected extension of ${structures[structure].name}).`,
      );
    }

    structures[structure] = extended;
    return extended;
  }
}

const structures = {
  GuildEmoji: __webpack_require__(/*! ../structures/GuildEmoji */ "./node_modules/discord.js/src/structures/GuildEmoji.js"),
  DMChannel: __webpack_require__(/*! ../structures/DMChannel */ "./node_modules/discord.js/src/structures/DMChannel.js"),
  TextChannel: __webpack_require__(/*! ../structures/TextChannel */ "./node_modules/discord.js/src/structures/TextChannel.js"),
  VoiceChannel: __webpack_require__(/*! ../structures/VoiceChannel */ "./node_modules/discord.js/src/structures/VoiceChannel.js"),
  CategoryChannel: __webpack_require__(/*! ../structures/CategoryChannel */ "./node_modules/discord.js/src/structures/CategoryChannel.js"),
  NewsChannel: __webpack_require__(/*! ../structures/NewsChannel */ "./node_modules/discord.js/src/structures/NewsChannel.js"),
  StoreChannel: __webpack_require__(/*! ../structures/StoreChannel */ "./node_modules/discord.js/src/structures/StoreChannel.js"),
  GuildMember: __webpack_require__(/*! ../structures/GuildMember */ "./node_modules/discord.js/src/structures/GuildMember.js"),
  Guild: __webpack_require__(/*! ../structures/Guild */ "./node_modules/discord.js/src/structures/Guild.js"),
  Message: __webpack_require__(/*! ../structures/Message */ "./node_modules/discord.js/src/structures/Message.js"),
  MessageReaction: __webpack_require__(/*! ../structures/MessageReaction */ "./node_modules/discord.js/src/structures/MessageReaction.js"),
  Presence: __webpack_require__(/*! ../structures/Presence */ "./node_modules/discord.js/src/structures/Presence.js").Presence,
  ClientPresence: __webpack_require__(/*! ../structures/ClientPresence */ "./node_modules/discord.js/src/structures/ClientPresence.js"),
  VoiceState: __webpack_require__(/*! ../structures/VoiceState */ "./node_modules/discord.js/src/structures/VoiceState.js"),
  Role: __webpack_require__(/*! ../structures/Role */ "./node_modules/discord.js/src/structures/Role.js"),
  User: __webpack_require__(/*! ../structures/User */ "./node_modules/discord.js/src/structures/User.js"),
};

module.exports = Structures;


/***/ }),

/***/ "./node_modules/discord.js/src/util/SystemChannelFlags.js":
/*!****************************************************************!*\
  !*** ./node_modules/discord.js/src/util/SystemChannelFlags.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const BitField = __webpack_require__(/*! ./BitField */ "./node_modules/discord.js/src/util/BitField.js");

/**
 * Data structure that makes it easy to interact with a {@link Guild#systemChannelFlags} bitfield.
 * <info>Note that all event message types are enabled by default,
 * and by setting their corresponding flags you are disabling them</info>
 * @extends {BitField}
 */
class SystemChannelFlags extends BitField {}

/**
 * @name SystemChannelFlags
 * @kind constructor
 * @memberof SystemChannelFlags
 * @param {SystemChannelFlagsResolvable} [bits=0] Bit(s) to read from
 */

/**
 * Data that can be resolved to give a sytem channel flag bitfield. This can be:
 * * A string (see {@link SystemChannelFlags.FLAGS})
 * * A sytem channel flag
 * * An instance of SystemChannelFlags
 * * An Array of SystemChannelFlagsResolvable
 * @typedef {string|number|SystemChannelFlags|SystemChannelFlagsResolvable[]} SystemChannelFlagsResolvable
 */

/**
 * Numeric system channel flags. All available properties:
 * * `WELCOME_MESSAGE_DISABLED`
 * * `BOOST_MESSAGE_DISABLED`
 * @type {Object}
 */
SystemChannelFlags.FLAGS = {
  WELCOME_MESSAGE_DISABLED: 1 << 0,
  BOOST_MESSAGE_DISABLED: 1 << 1,
};

module.exports = SystemChannelFlags;


/***/ }),

/***/ "./node_modules/discord.js/src/util/UserFlags.js":
/*!*******************************************************!*\
  !*** ./node_modules/discord.js/src/util/UserFlags.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const BitField = __webpack_require__(/*! ./BitField */ "./node_modules/discord.js/src/util/BitField.js");

/**
 * Data structure that makes it easy to interact with a {@link User#flags} bitfield.
 * @extends {BitField}
 */
class UserFlags extends BitField {}

/**
 * @name UserFlags
 * @kind constructor
 * @memberof UserFlags
 * @param {BitFieldResolvable} [bits=0] Bit(s) to read from
 */

/**
 * Numeric user flags. All available properties:
 * * `DISCORD_EMPLOYEE`
 * * `PARTNERED_SERVER_OWNER`
 * * `DISCORD_PARTNER` **(deprecated)**
 * * `HYPESQUAD_EVENTS`
 * * `BUGHUNTER_LEVEL_1`
 * * `HOUSE_BRAVERY`
 * * `HOUSE_BRILLIANCE`
 * * `HOUSE_BALANCE`
 * * `EARLY_SUPPORTER`
 * * `TEAM_USER`
 * * `SYSTEM`
 * * `BUGHUNTER_LEVEL_2`
 * * `VERIFIED_BOT`
 * * `EARLY_VERIFIED_BOT_DEVELOPER`
 * * `VERIFIED_DEVELOPER` **(deprecated)**
 * @type {Object}
 * @see {@link https://discord.com/developers/docs/resources/user#user-object-user-flags}
 */
UserFlags.FLAGS = {
  DISCORD_EMPLOYEE: 1 << 0,
  PARTNERED_SERVER_OWNER: 1 << 1,
  DISCORD_PARTNER: 1 << 1,
  HYPESQUAD_EVENTS: 1 << 2,
  BUGHUNTER_LEVEL_1: 1 << 3,
  HOUSE_BRAVERY: 1 << 6,
  HOUSE_BRILLIANCE: 1 << 7,
  HOUSE_BALANCE: 1 << 8,
  EARLY_SUPPORTER: 1 << 9,
  TEAM_USER: 1 << 10,
  SYSTEM: 1 << 12,
  BUGHUNTER_LEVEL_2: 1 << 14,
  VERIFIED_BOT: 1 << 16,
  EARLY_VERIFIED_DEVELOPER: 1 << 17,
  VERIFIED_DEVELOPER: 1 << 17,
};

module.exports = UserFlags;


/***/ }),

/***/ "./node_modules/discord.js/src/util/Util.js":
/*!**************************************************!*\
  !*** ./node_modules/discord.js/src/util/Util.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { parse } = __webpack_require__(/*! path */ "?0f27");
const fetch = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
const { Colors, DefaultOptions, Endpoints } = __webpack_require__(/*! ./Constants */ "./node_modules/discord.js/src/util/Constants.js");
const { Error: DiscordError, RangeError, TypeError } = __webpack_require__(/*! ../errors */ "./node_modules/discord.js/src/errors/index.js");
const has = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
const isObject = d => typeof d === 'object' && d !== null;

/**
 * Contains various general-purpose utility methods. These functions are also available on the base `Discord` object.
 */
class Util {
  constructor() {
    throw new Error(`The ${this.constructor.name} class may not be instantiated.`);
  }

  /**
   * Flatten an object. Any properties that are collections will get converted to an array of keys.
   * @param {Object} obj The object to flatten.
   * @param {...Object<string, boolean|string>} [props] Specific properties to include/exclude.
   * @returns {Object}
   */
  static flatten(obj, ...props) {
    if (!isObject(obj)) return obj;

    const objProps = Object.keys(obj)
      .filter(k => !k.startsWith('_'))
      .map(k => ({ [k]: true }));

    props = objProps.length ? Object.assign(...objProps, ...props) : Object.assign({}, ...props);

    const out = {};

    for (let [prop, newProp] of Object.entries(props)) {
      if (!newProp) continue;
      newProp = newProp === true ? prop : newProp;

      const element = obj[prop];
      const elemIsObj = isObject(element);
      const valueOf = elemIsObj && typeof element.valueOf === 'function' ? element.valueOf() : null;

      // If it's a Collection, make the array of keys
      if (element instanceof __webpack_require__(/*! ./Collection */ "./node_modules/discord.js/src/util/Collection.js")) out[newProp] = Array.from(element.keys());
      // If the valueOf is a Collection, use its array of keys
      else if (valueOf instanceof __webpack_require__(/*! ./Collection */ "./node_modules/discord.js/src/util/Collection.js")) out[newProp] = Array.from(valueOf.keys());
      // If it's an array, flatten each element
      else if (Array.isArray(element)) out[newProp] = element.map(e => Util.flatten(e));
      // If it's an object with a primitive `valueOf`, use that value
      else if (typeof valueOf !== 'object') out[newProp] = valueOf;
      // If it's a primitive
      else if (!elemIsObj) out[newProp] = element;
    }

    return out;
  }

  /**
   * Splits a string into multiple chunks at a designated character that do not exceed a specific length.
   * @param {StringResolvable} text Content to split
   * @param {SplitOptions} [options] Options controlling the behavior of the split
   * @returns {string[]}
   */
  static splitMessage(text, { maxLength = 2000, char = '\n', prepend = '', append = '' } = {}) {
    text = Util.resolveString(text);
    if (text.length <= maxLength) return [text];
    const splitText = text.split(char);
    if (splitText.some(chunk => chunk.length > maxLength)) throw new RangeError('SPLIT_MAX_LEN');
    const messages = [];
    let msg = '';
    for (const chunk of splitText) {
      if (msg && (msg + char + chunk + append).length > maxLength) {
        messages.push(msg + append);
        msg = prepend;
      }
      msg += (msg && msg !== prepend ? char : '') + chunk;
    }
    return messages.concat(msg).filter(m => m);
  }

  /**
   * Escapes any Discord-flavour markdown in a string.
   * @param {string} text Content to escape
   * @param {Object} [options={}] What types of markdown to escape
   * @param {boolean} [options.codeBlock=true] Whether to escape code blocks or not
   * @param {boolean} [options.inlineCode=true] Whether to escape inline code or not
   * @param {boolean} [options.bold=true] Whether to escape bolds or not
   * @param {boolean} [options.italic=true] Whether to escape italics or not
   * @param {boolean} [options.underline=true] Whether to escape underlines or not
   * @param {boolean} [options.strikethrough=true] Whether to escape strikethroughs or not
   * @param {boolean} [options.spoiler=true] Whether to escape spoilers or not
   * @param {boolean} [options.codeBlockContent=true] Whether to escape text inside code blocks or not
   * @param {boolean} [options.inlineCodeContent=true] Whether to escape text inside inline code or not
   * @returns {string}
   */
  static escapeMarkdown(
    text,
    {
      codeBlock = true,
      inlineCode = true,
      bold = true,
      italic = true,
      underline = true,
      strikethrough = true,
      spoiler = true,
      codeBlockContent = true,
      inlineCodeContent = true,
    } = {},
  ) {
    if (!codeBlockContent) {
      return text
        .split('```')
        .map((subString, index, array) => {
          if (index % 2 && index !== array.length - 1) return subString;
          return Util.escapeMarkdown(subString, {
            inlineCode,
            bold,
            italic,
            underline,
            strikethrough,
            spoiler,
            inlineCodeContent,
          });
        })
        .join(codeBlock ? '\\`\\`\\`' : '```');
    }
    if (!inlineCodeContent) {
      return text
        .split(/(?<=^|[^`])`(?=[^`]|$)/g)
        .map((subString, index, array) => {
          if (index % 2 && index !== array.length - 1) return subString;
          return Util.escapeMarkdown(subString, {
            codeBlock,
            bold,
            italic,
            underline,
            strikethrough,
            spoiler,
          });
        })
        .join(inlineCode ? '\\`' : '`');
    }
    if (inlineCode) text = Util.escapeInlineCode(text);
    if (codeBlock) text = Util.escapeCodeBlock(text);
    if (italic) text = Util.escapeItalic(text);
    if (bold) text = Util.escapeBold(text);
    if (underline) text = Util.escapeUnderline(text);
    if (strikethrough) text = Util.escapeStrikethrough(text);
    if (spoiler) text = Util.escapeSpoiler(text);
    return text;
  }

  /**
   * Escapes code block markdown in a string.
   * @param {string} text Content to escape
   * @returns {string}
   */
  static escapeCodeBlock(text) {
    return text.replace(/```/g, '\\`\\`\\`');
  }

  /**
   * Escapes inline code markdown in a string.
   * @param {string} text Content to escape
   * @returns {string}
   */
  static escapeInlineCode(text) {
    return text.replace(/(?<=^|[^`])`(?=[^`]|$)/g, '\\`');
  }

  /**
   * Escapes italic markdown in a string.
   * @param {string} text Content to escape
   * @returns {string}
   */
  static escapeItalic(text) {
    let i = 0;
    text = text.replace(/(?<=^|[^*])\*([^*]|\*\*|$)/g, (_, match) => {
      if (match === '**') return ++i % 2 ? `\\*${match}` : `${match}\\*`;
      return `\\*${match}`;
    });
    i = 0;
    return text.replace(/(?<=^|[^_])_([^_]|__|$)/g, (_, match) => {
      if (match === '__') return ++i % 2 ? `\\_${match}` : `${match}\\_`;
      return `\\_${match}`;
    });
  }

  /**
   * Escapes bold markdown in a string.
   * @param {string} text Content to escape
   * @returns {string}
   */
  static escapeBold(text) {
    let i = 0;
    return text.replace(/\*\*(\*)?/g, (_, match) => {
      if (match) return ++i % 2 ? `${match}\\*\\*` : `\\*\\*${match}`;
      return '\\*\\*';
    });
  }

  /**
   * Escapes underline markdown in a string.
   * @param {string} text Content to escape
   * @returns {string}
   */
  static escapeUnderline(text) {
    let i = 0;
    return text.replace(/__(_)?/g, (_, match) => {
      if (match) return ++i % 2 ? `${match}\\_\\_` : `\\_\\_${match}`;
      return '\\_\\_';
    });
  }

  /**
   * Escapes strikethrough markdown in a string.
   * @param {string} text Content to escape
   * @returns {string}
   */
  static escapeStrikethrough(text) {
    return text.replace(/~~/g, '\\~\\~');
  }

  /**
   * Escapes spoiler markdown in a string.
   * @param {string} text Content to escape
   * @returns {string}
   */
  static escapeSpoiler(text) {
    return text.replace(/\|\|/g, '\\|\\|');
  }

  /**
   * Gets the recommended shard count from Discord.
   * @param {string} token Discord auth token
   * @param {number} [guildsPerShard=1000] Number of guilds per shard
   * @returns {Promise<number>} The recommended number of shards
   */
  static fetchRecommendedShards(token, guildsPerShard = 1000) {
    if (!token) throw new DiscordError('TOKEN_MISSING');
    return fetch(`${DefaultOptions.http.api}/v${DefaultOptions.http.version}${Endpoints.botGateway}`, {
      method: 'GET',
      headers: { Authorization: `Bot ${token.replace(/^Bot\s*/i, '')}` },
    })
      .then(res => {
        if (res.ok) return res.json();
        if (res.status === 401) throw new DiscordError('TOKEN_INVALID');
        throw res;
      })
      .then(data => data.shards * (1000 / guildsPerShard));
  }

  /**
   * Parses emoji info out of a string. The string must be one of:
   * * A UTF-8 emoji (no ID)
   * * A URL-encoded UTF-8 emoji (no ID)
   * * A Discord custom emoji (`<:name:id>` or `<a:name:id>`)
   * @param {string} text Emoji string to parse
   * @returns {Object} Object with `animated`, `name`, and `id` properties
   * @private
   */
  static parseEmoji(text) {
    if (text.includes('%')) text = decodeURIComponent(text);
    if (!text.includes(':')) return { animated: false, name: text, id: null };
    const m = text.match(/<?(?:(a):)?(\w{2,32}):(\d{17,19})?>?/);
    if (!m) return null;
    return { animated: Boolean(m[1]), name: m[2], id: m[3] || null };
  }

  /**
   * Shallow-copies an object with its class/prototype intact.
   * @param {Object} obj Object to clone
   * @returns {Object}
   * @private
   */
  static cloneObject(obj) {
    return Object.assign(Object.create(obj), obj);
  }

  /**
   * Sets default properties on an object that aren't already specified.
   * @param {Object} def Default properties
   * @param {Object} given Object to assign defaults to
   * @returns {Object}
   * @private
   */
  static mergeDefault(def, given) {
    if (!given) return def;
    for (const key in def) {
      if (!has(given, key) || given[key] === undefined) {
        given[key] = def[key];
      } else if (given[key] === Object(given[key])) {
        given[key] = Util.mergeDefault(def[key], given[key]);
      }
    }

    return given;
  }

  /**
   * Converts an ArrayBuffer or string to a Buffer.
   * @param {ArrayBuffer|string} ab ArrayBuffer to convert
   * @returns {Buffer}
   * @private
   */
  static convertToBuffer(ab) {
    if (typeof ab === 'string') ab = Util.str2ab(ab);
    return Buffer.from(ab);
  }

  /**
   * Converts a string to an ArrayBuffer.
   * @param {string} str String to convert
   * @returns {ArrayBuffer}
   * @private
   */
  static str2ab(str) {
    const buffer = new ArrayBuffer(str.length * 2);
    const view = new Uint16Array(buffer);
    for (var i = 0, strLen = str.length; i < strLen; i++) view[i] = str.charCodeAt(i);
    return buffer;
  }

  /**
   * Makes an Error from a plain info object.
   * @param {Object} obj Error info
   * @param {string} obj.name Error type
   * @param {string} obj.message Message for the error
   * @param {string} obj.stack Stack for the error
   * @returns {Error}
   * @private
   */
  static makeError(obj) {
    const err = new Error(obj.message);
    err.name = obj.name;
    err.stack = obj.stack;
    return err;
  }

  /**
   * Makes a plain error info object from an Error.
   * @param {Error} err Error to get info from
   * @returns {Object}
   * @private
   */
  static makePlainError(err) {
    return {
      name: err.name,
      message: err.message,
      stack: err.stack,
    };
  }

  /**
   * Moves an element in an array *in place*.
   * @param {Array<*>} array Array to modify
   * @param {*} element Element to move
   * @param {number} newIndex Index or offset to move the element to
   * @param {boolean} [offset=false] Move the element by an offset amount rather than to a set index
   * @returns {number}
   * @private
   */
  static moveElementInArray(array, element, newIndex, offset = false) {
    const index = array.indexOf(element);
    newIndex = (offset ? index : 0) + newIndex;
    if (newIndex > -1 && newIndex < array.length) {
      const removedElement = array.splice(index, 1)[0];
      array.splice(newIndex, 0, removedElement);
    }
    return array.indexOf(element);
  }

  /**
   * Data that can be resolved to give a string. This can be:
   * * A string
   * * An array (joined with a new line delimiter to give a string)
   * * Any value
   * @typedef {string|Array|*} StringResolvable
   */

  /**
   * Resolves a StringResolvable to a string.
   * @param {StringResolvable} data The string resolvable to resolve
   * @returns {string}
   */
  static resolveString(data) {
    if (typeof data === 'string') return data;
    if (Array.isArray(data)) return data.join('\n');
    return String(data);
  }

  /**
   * Can be a number, hex string, an RGB array like:
   * ```js
   * [255, 0, 255] // purple
   * ```
   * or one of the following strings:
   * - `DEFAULT`
   * - `WHITE`
   * - `AQUA`
   * - `GREEN`
   * - `BLUE`
   * - `YELLOW`
   * - `PURPLE`
   * - `LUMINOUS_VIVID_PINK`
   * - `GOLD`
   * - `ORANGE`
   * - `RED`
   * - `GREY`
   * - `DARKER_GREY`
   * - `NAVY`
   * - `DARK_AQUA`
   * - `DARK_GREEN`
   * - `DARK_BLUE`
   * - `DARK_PURPLE`
   * - `DARK_VIVID_PINK`
   * - `DARK_GOLD`
   * - `DARK_ORANGE`
   * - `DARK_RED`
   * - `DARK_GREY`
   * - `LIGHT_GREY`
   * - `DARK_NAVY`
   * - `BLURPLE`
   * - `GREYPLE`
   * - `DARK_BUT_NOT_BLACK`
   * - `NOT_QUITE_BLACK`
   * - `RANDOM`
   * @typedef {string|number|number[]} ColorResolvable
   */

  /**
   * Resolves a ColorResolvable into a color number.
   * @param {ColorResolvable} color Color to resolve
   * @returns {number} A color
   */
  static resolveColor(color) {
    if (typeof color === 'string') {
      if (color === 'RANDOM') return Math.floor(Math.random() * (0xffffff + 1));
      if (color === 'DEFAULT') return 0;
      color = Colors[color] || parseInt(color.replace('#', ''), 16);
    } else if (Array.isArray(color)) {
      color = (color[0] << 16) + (color[1] << 8) + color[2];
    }

    if (color < 0 || color > 0xffffff) throw new RangeError('COLOR_RANGE');
    else if (color && isNaN(color)) throw new TypeError('COLOR_CONVERT');

    return color;
  }

  /**
   * Sorts by Discord's position and ID.
   * @param  {Collection} collection Collection of objects to sort
   * @returns {Collection}
   */
  static discordSort(collection) {
    return collection.sorted(
      (a, b) =>
        a.rawPosition - b.rawPosition ||
        parseInt(b.id.slice(0, -10)) - parseInt(a.id.slice(0, -10)) ||
        parseInt(b.id.slice(10)) - parseInt(a.id.slice(10)),
    );
  }

  /**
   * Sets the position of a Channel or Role.
   * @param {Channel|Role} item Object to set the position of
   * @param {number} position New position for the object
   * @param {boolean} relative Whether `position` is relative to its current position
   * @param {Collection<string, Channel|Role>} sorted A collection of the objects sorted properly
   * @param {APIRouter} route Route to call PATCH on
   * @param {string} [reason] Reason for the change
   * @returns {Promise<Object[]>} Updated item list, with `id` and `position` properties
   * @private
   */
  static setPosition(item, position, relative, sorted, route, reason) {
    let updatedItems = sorted.array();
    Util.moveElementInArray(updatedItems, item, position, relative);
    updatedItems = updatedItems.map((r, i) => ({ id: r.id, position: i }));
    return route.patch({ data: updatedItems, reason }).then(() => updatedItems);
  }

  /**
   * Alternative to Node's `path.basename`, removing query string after the extension if it exists.
   * @param {string} path Path to get the basename of
   * @param {string} [ext] File extension to remove
   * @returns {string} Basename of the path
   * @private
   */
  static basename(path, ext) {
    let res = parse(path);
    return ext && res.ext.startsWith(ext) ? res.name : res.base.split('?')[0];
  }

  /**
   * Transforms a snowflake from a decimal string to a bit string.
   * @param  {Snowflake} num Snowflake to be transformed
   * @returns {string}
   * @private
   */
  static idToBinary(num) {
    let bin = '';
    let high = parseInt(num.slice(0, -10)) || 0;
    let low = parseInt(num.slice(-10));
    while (low > 0 || high > 0) {
      bin = String(low & 1) + bin;
      low = Math.floor(low / 2);
      if (high > 0) {
        low += 5000000000 * (high % 2);
        high = Math.floor(high / 2);
      }
    }
    return bin;
  }

  /**
   * Transforms a snowflake from a bit string to a decimal string.
   * @param  {string} num Bit string to be transformed
   * @returns {Snowflake}
   * @private
   */
  static binaryToID(num) {
    let dec = '';

    while (num.length > 50) {
      const high = parseInt(num.slice(0, -32), 2);
      const low = parseInt((high % 10).toString(2) + num.slice(-32), 2);

      dec = (low % 10).toString() + dec;
      num =
        Math.floor(high / 10).toString(2) +
        Math.floor(low / 10)
          .toString(2)
          .padStart(32, '0');
    }

    num = parseInt(num, 2);
    while (num > 0) {
      dec = (num % 10).toString() + dec;
      num = Math.floor(num / 10);
    }

    return dec;
  }

  /**
   * Breaks user, role and everyone/here mentions by adding a zero width space after every @ character
   * @param {string} str The string to sanitize
   * @returns {string}
   */
  static removeMentions(str) {
    return str.replace(/@/g, '@\u200b');
  }

  /**
   * The content to have all mentions replaced by the equivalent text.
   * @param {string} str The string to be converted
   * @param {Message} message The message object to reference
   * @returns {string}
   */
  static cleanContent(str, message) {
    str = str
      .replace(/<@!?[0-9]+>/g, input => {
        const id = input.replace(/<|!|>|@/g, '');
        if (message.channel.type === 'dm') {
          const user = message.client.users.cache.get(id);
          return user ? Util.removeMentions(`@${user.username}`) : input;
        }

        const member = message.channel.guild.members.cache.get(id);
        if (member) {
          return Util.removeMentions(`@${member.displayName}`);
        } else {
          const user = message.client.users.cache.get(id);
          return user ? Util.removeMentions(`@${user.username}`) : input;
        }
      })
      .replace(/<#[0-9]+>/g, input => {
        const channel = message.client.channels.cache.get(input.replace(/<|#|>/g, ''));
        return channel ? `#${channel.name}` : input;
      })
      .replace(/<@&[0-9]+>/g, input => {
        if (message.channel.type === 'dm') return input;
        const role = message.guild.roles.cache.get(input.replace(/<|@|>|&/g, ''));
        return role ? `@${role.name}` : input;
      });
    if (message.client.options.disableMentions === 'everyone') {
      str = str.replace(/@([^<>@ ]*)/gmsu, (match, target) => {
        if (target.match(/^[&!]?\d+$/)) {
          return `@${target}`;
        } else {
          return `@\u200b${target}`;
        }
      });
    }
    if (message.client.options.disableMentions === 'all') {
      return Util.removeMentions(str);
    } else {
      return str;
    }
  }

  /**
   * The content to put in a codeblock with all codeblock fences replaced by the equivalent backticks.
   * @param {string} text The string to be converted
   * @returns {string}
   */
  static cleanCodeBlockContent(text) {
    return text.replace(/```/g, '`\u200b``');
  }

  /**
   * Creates a Promise that resolves after a specified duration.
   * @param {number} ms How long to wait before resolving (in milliseconds)
   * @returns {Promise<void>}
   * @private
   */
  static delayFor(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }
}

module.exports = Util;


/***/ }),

/***/ "./node_modules/dotenv/lib/main.js":
/*!*****************************************!*\
  !*** ./node_modules/dotenv/lib/main.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* @flow */
/*::

type DotenvParseOptions = {
  debug?: boolean
}

// keys and values from src
type DotenvParseOutput = { [string]: string }

type DotenvConfigOptions = {
  path?: string, // path to .env file
  encoding?: string, // encoding of .env file
  debug?: string // turn on logging for debugging purposes
}

type DotenvConfigOutput = {
  parsed?: DotenvParseOutput,
  error?: Error
}

*/

const fs = __webpack_require__(/*! fs */ "?65c5")
const path = __webpack_require__(/*! path */ "?0f27")

function log (message /*: string */) {
  console.log(`[dotenv][DEBUG] ${message}`)
}

const NEWLINE = '\n'
const RE_INI_KEY_VAL = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/
const RE_NEWLINES = /\\n/g
const NEWLINES_MATCH = /\n|\r|\r\n/

// Parses src into an Object
function parse (src /*: string | Buffer */, options /*: ?DotenvParseOptions */) /*: DotenvParseOutput */ {
  const debug = Boolean(options && options.debug)
  const obj = {}

  // convert Buffers before splitting into lines and processing
  src.toString().split(NEWLINES_MATCH).forEach(function (line, idx) {
    // matching "KEY' and 'VAL' in 'KEY=VAL'
    const keyValueArr = line.match(RE_INI_KEY_VAL)
    // matched?
    if (keyValueArr != null) {
      const key = keyValueArr[1]
      // default undefined or missing values to empty string
      let val = (keyValueArr[2] || '')
      const end = val.length - 1
      const isDoubleQuoted = val[0] === '"' && val[end] === '"'
      const isSingleQuoted = val[0] === "'" && val[end] === "'"

      // if single or double quoted, remove quotes
      if (isSingleQuoted || isDoubleQuoted) {
        val = val.substring(1, end)

        // if double quoted, expand newlines
        if (isDoubleQuoted) {
          val = val.replace(RE_NEWLINES, NEWLINE)
        }
      } else {
        // remove surrounding whitespace
        val = val.trim()
      }

      obj[key] = val
    } else if (debug) {
      log(`did not match key and value when parsing line ${idx + 1}: ${line}`)
    }
  })

  return obj
}

// Populates process.env from .env file
function config (options /*: ?DotenvConfigOptions */) /*: DotenvConfigOutput */ {
  let dotenvPath = path.resolve(process.cwd(), '.env')
  let encoding /*: string */ = 'utf8'
  let debug = false

  if (options) {
    if (options.path != null) {
      dotenvPath = options.path
    }
    if (options.encoding != null) {
      encoding = options.encoding
    }
    if (options.debug != null) {
      debug = true
    }
  }

  try {
    // specifying an encoding returns a string instead of a buffer
    const parsed = parse(fs.readFileSync(dotenvPath, { encoding }), { debug })

    Object.keys(parsed).forEach(function (key) {
      if (!Object.prototype.hasOwnProperty.call(process.env, key)) {
        process.env[key] = parsed[key]
      } else if (debug) {
        log(`"${key}" is already defined in \`process.env\` and will not be overwritten`)
      }
    })

    return { parsed }
  } catch (e) {
    return { error: e }
  }
}

module.exports.config = config
module.exports.parse = parse


/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function eventListener() {
      if (errorListener !== undefined) {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };
    var errorListener;

    // Adding an error listener is not optional because
    // if an error is thrown on an event emitter we cannot
    // guarantee that the actual event we are waiting will
    // be fired. The result could be a silent way to create
    // memory or file descriptor leaks, which is something
    // we should avoid.
    if (name !== 'error') {
      errorListener = function errorListener(err) {
        emitter.removeListener(name, eventListener);
        reject(err);
      };

      emitter.once('error', errorListener);
    }

    emitter.once(name, eventListener);
  });
}


/***/ }),

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/***/ ((module, exports) => {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
if (global.fetch) {
	exports.default = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof __webpack_require__.g === "undefined" ? this : __webpack_require__.g : self));


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
var dotenv = __webpack_require__(/*! dotenv */ "./node_modules/dotenv/lib/main.js");
var _8ball_1 = __webpack_require__(/*! 8ball */ "./node_modules/8ball/index.js");
var Discord = __webpack_require__(/*! discord.js */ "./node_modules/discord.js/src/index.js");
var lib_1 = __webpack_require__(/*! ./lib */ "./src/lib.ts");
dotenv.config();
var bot = new Discord.Client();
var TOKEN = process.env.TOKEN;
bot.login(TOKEN);
bot.on('message', function (msg) {
    if (msg.author.bot)
        return false;
    if (msg.mentions.has(bot.user.id) && msg.content.endsWith("?")) {
        msg.reply(_8ball_1["default"]());
    }
    if (msg.mentions.has(bot.user.id) && msg.content.includes("check library")) {
        msg.reply(lib_1.echo());
    }
});


/***/ }),

/***/ "./src/lib.ts":
/*!********************!*\
  !*** ./src/lib.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports.__esModule = true;
exports.echo = void 0;
function echo() {
    return "hello from the library";
}
exports.echo = echo;


/***/ }),

/***/ "?e41f":
/*!*********************************************!*\
  !*** ../sharding/ShardClientUtil (ignored) ***!
  \*********************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?9d4d":
/*!**********************************!*\
  !*** ./sharding/Shard (ignored) ***!
  \**********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?7ce5":
/*!********************************************!*\
  !*** ./sharding/ShardClientUtil (ignored) ***!
  \********************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?271f":
/*!********************************************!*\
  !*** ./sharding/ShardingManager (ignored) ***!
  \********************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?5b33":
/*!********************************************!*\
  !*** ./voice/ClientVoiceManager (ignored) ***!
  \********************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?a56a":
/*!*************************!*\
  !*** erlpack (ignored) ***!
  \*************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?65c5":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?8ff5":
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?0f27":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?cc48":
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?0bed":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?1797":
/*!********************************!*\
  !*** worker_threads (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?98fa":
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?ca8b":
/*!***************************!*\
  !*** zlib-sync (ignored) ***!
  \***************************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;