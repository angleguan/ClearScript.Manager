(function() {
var def = {
    "!name": "ecma6",
    "!define": {
        "Promise.prototype": {
            "catch": {
                "!doc": "The catch() method returns a Promise and deals with rejected cases only. It behaves the same as calling Promise.prototype.then(undefined, onRejected).",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch",
                "!type": "fn(onRejected: fn(reason: ?))"
            },
            "then": {
                "!doc": "The then() method returns a Promise. It takes two arguments, both are callback functions for the success and failure cases of the Promise.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then",
                "!type": "fn(onFulfilled: fn(value: ?), onRejected: fn(reason: ?))",
                "!effects": [
                    "call !0 !this.value"
                ]
            }
        },
        "promiseReject": {
            "!type": "fn(reason: ?)"
        }
    },
    "Array": {
        "from": {
            "!type": "fn(arrayLike: [], mapFn?: fn(), thisArg?: ?) -> !custom:Array_ctor",
            "!doc": "The Array.from() method creates a new Array instance from an array-like or iterable object.",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from"
        },
        "of": {
            "!type": "fn(elementN: ?) -> !custom:Array_ctor",
            "!doc": "The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of"
        },
        "prototype": {
            "copyWithin": {
                "!type": "fn(target: number, start: number, end?: number) -> !custom:Array_ctor",
                "!doc": "The copyWithin() method copies the sequence of array elements within the array to the position starting at target. The copy is taken from the index positions of the second and third arguments start and end. The end argument is optional and defaults to the length of the array.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin"
            },
            "entries": {
                "!type": "fn() -> TODO_ITERATOR",
                "!doc": "The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries"
            },
            "fill": {
                "!type": "fn(value: ?, start?: number, end?: number)",
                "!doc": "The fill() method fills all the elements of an array from a start index to an end index with a static value.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill"
            },
            "find": {
                "!type": "fn(callback: fn(element: ?, index: number, array: []), thisArg?: ?) -> ?",
                "!doc": "The find() method returns a value in the array, if an element in the array satisfies the provided testing function. Otherwise undefined is returned.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find"
            },
            "findIndex": {
                "!type": "fn(callback: fn(element: ?, index: number, array: []), thisArg?: ?) -> number",
                "!doc": "The findIndex() method returns an index in the array, if an element in the array satisfies the provided testing function. Otherwise -1 is returned.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex"
            },
            "keys": {
                "!type": "fn() -> !custom:Array_ctor",
                "!doc": "The keys() method returns a new Array Iterator that contains the keys for each index in the array.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys"
            },
            "values": {
                "!type": "fn() -> !custom:Array_ctor",
                "!doc": "The values() method returns a new Array Iterator object that contains the values for each index in the array.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values"
            }
        }
    },
    "ArrayBuffer": {
        "!type": "fn(length: number)",
        "!doc": "The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. You can not directly manipulate the contents of an ArrayBuffer; instead, you create one of the typed array objects or a DataView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer.",
        "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer",
        "isView": {
            "!type": "fn(arg: ?) -> bool",
            "!doc": "The ArrayBuffer.isView() method returns true if arg is a view one of the ArrayBuffer views, such as typed array objects or a DataView; false otherwise.",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView"
        },
        "transfer": {
            "!type": "fn(oldBuffer: ?, newByteLength: ?)",
            "!doc": "The static ArrayBuffer.transfer() method returns a new ArrayBuffer whose contents are taken from the oldBuffer's data and then is either truncated or zero-extended by newByteLength. If newByteLength is undefined, the byteLength of the oldBuffer is used. This operation leaves oldBuffer in a detached state.",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transfer"
        },
        "prototype": {
            "byteLength": {
                "!type": "number",
                "!doc": "The byteLength accessor property represents the length of an ArrayBuffer in bytes.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength"
            },
            "slice": {
                "!type": "fn(begin: number, end?: number) -> +ArrayBuffer",
                "!doc": "The slice() method returns a new ArrayBuffer whose contents are a copy of this ArrayBuffer's bytes from begin, inclusive, up to end, exclusive.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice"
            }
        }
    },
    "DataView": {
        "!type": "fn(buffer: +ArrayBuffer, byteOffset?: number, byteLength?: number)",
        "!doc": "The DataView view provides a low-level interface for reading data from and writing it to an ArrayBuffer.",
        "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView",
        "prototype": {
            "buffer": {
                "!type": "+ArrayBuffer",
                "!doc": "The buffer accessor property represents the ArrayBuffer referenced by the DataView at construction time.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/buffer"
            },
            "byteLength": {
                "!type": "number",
                "!doc": "The byteLength accessor property represents the length (in bytes) of this view from the start of its ArrayBuffer.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/byteLength"
            },
            "byteOffset": {
                "!type": "number",
                "!doc": "The byteOffset accessor property represents the offset (in bytes) of this view from the start of its ArrayBuffer.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/byteOffset"
            },
            "getFloat32": {
                "!type": "fn(byteOffset: number, littleEndian?: bool) -> number",
                "!doc": "The getFloat32() method gets a signed 32-bit integer (float) at the specified byte offset from the start of the DataView.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getFloat32"
            },
            "getFloat64": {
                "!type": "fn(byteOffset: number, littleEndian?: bool) -> number",
                "!doc": "The getFloat64() method gets a signed 64-bit float (double) at the specified byte offset from the start of the DataView.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getFloat64"
            },
            "getInt16": {
                "!type": "fn(byteOffset: number, littleEndian?: bool) -> number",
                "!doc": "The getInt16() method gets a signed 16-bit integer (short) at the specified byte offset from the start of the DataView.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt16"
            },
            "getInt32": {
                "!type": "fn(byteOffset: number, littleEndian?: bool) -> number",
                "!doc": "The getInt32() method gets a signed 32-bit integer (long) at the specified byte offset from the start of the DataView.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt32"
            },
            "getInt8": {
                "!type": "fn(byteOffset: number, littleEndian?: bool) -> number",
                "!doc": "The getInt8() method gets a signed 8-bit integer (byte) at the specified byte offset from the start of the DataView.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt8"
            },
            "getUint16": {
                "!type": "fn(byteOffset: number, littleEndian?: bool) -> number",
                "!doc": "The getUint16() method gets an unsigned 16-bit integer (unsigned short) at the specified byte offset from the start of the DataView.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint16"
            },
            "getUint32": {
                "!type": "fn(byteOffset: number, littleEndian?: bool) -> number",
                "!doc": "The getUint32() method gets an unsigned 32-bit integer (unsigned long) at the specified byte offset from the start of the DataView.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint32"
            },
            "getUint8": {
                "!type": "fn(byteOffset: number) -> number",
                "!doc": "The getUint8() method gets an unsigned 8-bit integer (unsigned byte) at the specified byte offset from the start of the DataView.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getUint8"
            },
            "setFloat32": {
                "!type": "fn(byteOffset: number, value: number, littleEndian?: bool)",
                "!doc": "The setFloat32() method stores a signed 32-bit integer (float) value at the specified byte offset from the start of the DataView.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setFloat32"
            },
            "setFloat64": {
                "!type": "fn(byteOffset: number, value: number, littleEndian?: bool)",
                "!doc": "The setFloat64() method stores a signed 64-bit integer (double) value at the specified byte offset from the start of the DataView.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setFloat64"
            },
            "setInt16": {
                "!type": "fn(byteOffset: number, value: number, littleEndian?: bool)",
                "!doc": "The setInt16() method stores a signed 16-bit integer (short) value at the specified byte offset from the start of the DataView.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt16"
            },
            "setInt32": {
                "!type": "fn(byteOffset: number, value: number, littleEndian?: bool)",
                "!doc": "The setInt32() method stores a signed 32-bit integer (long) value at the specified byte offset from the start of the DataView.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt32"
            },
            "setInt8": {
                "!type": "fn(byteOffset: number, value: number)",
                "!doc": "The setInt8() method stores a signed 8-bit integer (byte) value at the specified byte offset from the start of the DataView.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt8"
            },
            "setUint16": {
                "!type": "fn(byteOffset: number, value: number, littleEndian?: bool)",
                "!doc": "The setUint16() method stores an unsigned 16-bit integer (unsigned short) value at the specified byte offset from the start of the DataView.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint16"
            },
            "setUint32": {
                "!type": "fn(byteOffset: number, value: number, littleEndian?: bool)",
                "!doc": "The setUint32() method stores an unsigned 32-bit integer (unsigned long) value at the specified byte offset from the start of the DataView.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint32"
            },
            "setUint8": {
                "!type": "fn(byteOffset: number, value: number)",
                "!doc": "The setUint8() method stores an unsigned 8-bit integer (byte) value at the specified byte offset from the start of the DataView.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint8"
            }
        }
    },
    "Float32Array": {
        "!type": "fn(length: number)",
        "!doc": "The Float32Array typed array represents an array of 32-bit floating point numbers (corresponding to the C float data type) in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).",
        "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array",
        "prototype": {
            "!proto": "TypedArray.prototype"
        },
        "length": "TypedArray.length",
        "BYTES_PER_ELEMENT": "TypedArray.BYTES_PER_ELEMENT",
        "name": "TypedArray.name",
        "from": "TypedArray.from",
        "of": "TypedArray.of"
    },
    "Float64Array": {
        "!type": "fn(length: number)",
        "!doc": "The Float64Array typed array represents an array of 64-bit floating point numbers (corresponding to the C double data type) in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).",
        "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array",
        "prototype": {
            "!proto": "TypedArray.prototype"
        },
        "length": "TypedArray.length",
        "BYTES_PER_ELEMENT": "TypedArray.BYTES_PER_ELEMENT",
        "name": "TypedArray.name",
        "from": "TypedArray.from",
        "of": "TypedArray.of"
    },
    "Int16Array": {
        "!type": "fn(length: number)",
        "!doc": "The Int16Array typed array represents an array of twos-complement 16-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).",
        "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array",
        "prototype": {
            "!proto": "TypedArray.prototype"
        },
        "length": "TypedArray.length",
        "BYTES_PER_ELEMENT": "TypedArray.BYTES_PER_ELEMENT",
        "name": "TypedArray.name",
        "from": "TypedArray.from",
        "of": "TypedArray.of"
    },
    "Int32Array": {
        "!type": "fn(length: number)",
        "!doc": "The Int32Array typed array represents an array of twos-complement 32-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).",
        "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array",
        "prototype": {
            "!proto": "TypedArray.prototype"
        },
        "length": "TypedArray.length",
        "BYTES_PER_ELEMENT": "TypedArray.BYTES_PER_ELEMENT",
        "name": "TypedArray.name",
        "from": "TypedArray.from",
        "of": "TypedArray.of"
    },
    "Int8Array": {
        "!type": "fn(length: number)",
        "!doc": "The Int8Array typed array represents an array of twos-complement 8-bit signed integers. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).",
        "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array",
        "prototype": {
            "!proto": "TypedArray.prototype"
        },
        "length": "TypedArray.length",
        "BYTES_PER_ELEMENT": "TypedArray.BYTES_PER_ELEMENT",
        "name": "TypedArray.name",
        "from": "TypedArray.from",
        "of": "TypedArray.of"
    },
    "Map": {
        "!type": "fn(iterable?: [])",
        "!doc": "The Map object is a simple key/value map. Any value (both objects and primitive values) may be used as either a key or a value.",
        "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",
        "prototype": {
            "clear": {
                "!type": "fn()",
                "!doc": "The clear() method removes all elements from a Map object.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear"
            },
            "delete": {
                "!type": "fn(key: ?)",
                "!doc": "The delete() method removes the specified element from a Map object.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete"
            },
            "entries": {
                "!type": "fn() -> TODO_ITERATOR",
                "!doc": "The entries() method returns a new Iterator object that contains the [key, value] pairs for each element in the Map object in insertion order.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries"
            },
            "forEach": {
                "!type": "fn(callback: fn(value: ?, key: ?, map: +Map), thisArg?: ?)",
                "!effects": ["call !0 this=!1 !this.<i> number !this"],
                "!doc": "The forEach() method executes a provided function once per each key/value pair in the Map object, in insertion order.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach"
            },
            "get": {
                "!type": "fn(key: ?) -> !this.<i>",
                "!doc": "The get() method returns a specified element from a Map object.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get"
            },
            "has": {
                "!type": "fn(key: ?) -> bool",
                "!doc": "The has() method returns a boolean indicating whether an element with the specified key exists or not.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has"
            },
            "keys": {
                "!type": "fn() -> TODO_ITERATOR",
                "!doc": "The keys() method returns a new Iterator object that contains the keys for each element in the Map object in insertion order.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys"
            },
            "set": {
                "!type": "fn(key: ?, value: ?) -> !this",
                "!doc": "The set() method adds a new element with a specified key and value to a Map object.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set"
            },
            "size": {
                "!type": "number",
                "!doc": "The size accessor property returns the number of elements in a Map object.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size"
            },
            "values": {
                "!type": "fn() -> TODO_ITERATOR",
                "!doc": "The values() method returns a new Iterator object that contains the values for each element in the Map object in insertion order.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values"
            },
            "prototype[@@iterator]": {
                "!type": "fn()",
                "!doc": "The initial value of the @@iterator property is the same function object as the initial value of the entries property.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/@@iterator"
            }
        }
    },
    "Math": {
        "acosh": {
            "!type": "fn(x: number) -> number",
            "!doc": "The Math.acosh() function returns the hyperbolic arc-cosine of a number, that is",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acosh"
        },
        "asinh": {
            "!type": "fn(x: number) -> number",
            "!doc": "The Math.asinh() function returns the hyperbolic arcsine of a number, that is",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/asinh"
        },
        "atanh": {
            "!type": "fn(x: number) -> number",
            "!doc": "The Math.atanh() function returns the hyperbolic arctangent of a number, that is",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atanh"
        },
        "cbrt": {
            "!type": "fn(x: number) -> number",
            "!doc": "The Math.cbrt() function returns the cube root of a number, that is",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cbrt"
        },
        "clz32": {
            "!type": "fn(x: number) -> number",
            "!doc": "The Math.clz32() function returns the number of leading zero bits in the 32-bit binary representation of a number.",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32"
        },
        "cosh": {
            "!type": "fn(x: number) -> number",
            "!doc": "The Math.cosh() function returns the hyperbolic cosine of a number, that can be expressed using the constant e:",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cosh"
        },
        "expm1": {
            "!type": "fn(x: number) -> number",
            "!doc": "The Math.expm1() function returns ex - 1, where x is the argument, and e the base of the natural logarithms.",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/expm1"
        },
        "fround": {
            "!type": "fn(x: number) -> number",
            "!doc": "The Math.fround() function returns the nearest single precision float representation of a number.",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround"
        },
        "hypot": {
            "!type": "fn(value: number) -> number",
            "!doc": "The Math.hypot() function returns the square root of the sum of squares of its arguments, that is",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot"
        },
        "imul": {
            "!type": "fn(a: number, b: number) -> number",
            "!doc": "The Math.imul() function returns the result of the C-like 32-bit multiplication of the two parameters.",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul"
        },
        "log10": {
            "!type": "fn(x: number) -> number",
            "!doc": "The Math.log10() function returns the base 10 logarithm of a number, that is",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log10"
        },
        "log1p": {
            "!type": "fn(x: number) -> number",
            "!doc": "The Math.log1p() function returns the natural logarithm (base e) of 1 + a number, that is",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log1p"
        },
        "log2": {
            "!type": "fn(x: number) -> number",
            "!doc": "The Math.log2() function returns the base 2 logarithm of a number, that is",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log2"
        },
        "sign": {
            "!type": "fn(x: number) -> number",
            "!doc": "The Math.sign() function returns the sign of a number, indicating whether the number is positive, negative or zero.",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign"
        },
        "sinh": {
            "!type": "fn(x: number) -> number",
            "!doc": "The Math.sinh() function returns the hyperbolic sine of a number, that can be expressed using the constant e:",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sinh"
        },
        "tanh": {
            "!type": "fn(x: number) -> number",
            "!doc": "The Math.tanh() function returns the hyperbolic tangent of a number, that is",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tanh"
        },
        "trunc": {
            "!type": "fn(x: number) -> number",
            "!doc": "The Math.trunc() function returns the integral part of a number by removing any fractional digits. It does not round any numbers. The function can be expressed with the floor() and ceil() function:",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc"
        }
    },
    "Number": {
        "EPSILON": {
            "!type": "number",
            "!doc": "The Number.EPSILON property represents the difference between one and the smallest value greater than one that can be represented as a Number.",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/EPSILON"
        },
        "MAX_SAFE_INTEGER": {
            "!type": "number",
            "!doc": "The Number.MAX_SAFE_INTEGER constant represents the maximum safe integer in JavaScript (253 - 1).",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER"
        },
        "MIN_SAFE_INTEGER": {
            "!type": "number",
            "!doc": "The Number.MIN_SAFE_INTEGER constant represents the minimum safe integer in JavaScript (-(253 - 1)).",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER"
        },
        "isFinite": {
            "!type": "fn(testValue: ?) -> bool",
            "!doc": "The Number.isFinite() method determines whether the passed value is finite.",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite"
        },
        "isInteger": {
            "!type": "fn(testValue: ?) -> bool",
            "!doc": "The Number.isInteger() method determines whether the passed value is an integer.",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger"
        },
        "isNaN": {
            "!type": "fn(testValue: ?) -> bool",
            "!doc": "The Number.isNaN() method determines whether the passed value is NaN. More robust version of the original global isNaN().",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN"
        },
        "isSafeInteger": {
            "!type": "fn(testValue: ?) -> bool",
            "!doc": "The Number.isSafeInteger() method determines whether the provided value is a number that is a safe integer. A safe integer is an integer that",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger"
        },
        "parseFloat": {
            "!type": "fn(string: string) -> number",
            "!doc": "The Number.parseFloat() method parses a string argument and returns a floating point number. This method behaves identically to the global function parseFloat() and is part of ECMAScript 6 (its purpose is modularization of globals).",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat"
        },
        "parseInt": {
            "!type": "fn(string: string, radix?: number) -> number",
            "!doc": "The Number.parseInt() method parses a string argument and returns an integer of the specified radix or base. This method behaves identically to the global function parseInt() and is part of ECMAScript 6 (its purpose is modularization of globals).",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt"
        }
    },
    "Object": {
        "assign": {
            "!type": "fn(target: ?, sources: ?) -> ?",
            "!doc": "The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"
        },
        "getOwnPropertySymbols": {
            "!type": "fn(obj: ?) -> [?]",
            "!doc": "The Object.getOwnPropertySymbols() method returns an array of all symbol properties found directly upon a given object.",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
        },
        "is": {
            "!type": "fn(value1: ?, value2: ?) -> bool",
            "!doc": "The Object.is() method determines whether two values are the same value.",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is"
        },
        "setPrototypeOf": {
            "!type": "fn(obj: ?, prototype: ?)",
            "!doc": "The Object.setPrototype() method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf"
        }
    },
    "Promise": {
        "!type": "fn(executor: fn(resolve: fn(value: ?), reject: promiseReject)) -> !custom:Promise_ctor",
        "!doc": "The Promise object is used for deferred and asynchronous computations. A Promise is in one of the three states:",
        "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
        "all": {
            "!type": "fn(iterable: [+Promise]) -> !0.<i>",
            "!doc": "The Promise.all(iterable) method returns a promise that resolves when all of the promises in the iterable argument have resolved.",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all"
        },
        "race": {
            "!type": "fn(iterable: [+Promise]) -> !0.<i>",
            "!doc": "The Promise.race(iterable) method returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise.",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race"
        },
        "reject": {
            "!type": "fn(reason: ?) -> !this",
            "!doc": "The Promise.reject(reason) method returns a Promise object that is rejected with the given reason.",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject"
        },
        "resolve": {
            "!type": "fn(value: ?) -> +Promise[value=!0]",
            "!doc": "The Promise.resolve(value) method returns a Promise object that is resolved with the given value. If the value is a thenable (i.e. has a then method), the returned promise will 'follow' that thenable, adopting its eventual state; otherwise the returned promise will be fulfilled with the value.",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve"
        },
        "prototype": "Promise.prototype"
    },
    "Proxy": {
        "!type": "fn(target: ?, handler: ?)",
        "!doc": "The Proxy object is used to define the custom behavior in JavaScript fundamental operation (e.g. property lookup, assignment, enumeration, function invocation, etc).",
        "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy",
        "revocable": {
            "!doc": "The Proxy.revocable() method is used to create a revocable Proxy object.",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/revocable"
        }
    },
    "RegExp": {
        "prototype": {
            "flags": {
                "!type": "string",
                "!doc": "The flags property returns a string consisting of the flags of the current regular expression object.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags"
            },
            "sticky": {
                "!type": "bool",
                "!doc": "The sticky property reflects whether or not the search is sticky (searches in strings only from the index indicated by the lastIndex property of this regular expression). sticky is a read-only property of an individual regular expression object.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky"
            }
        }
    },
    "Set": {
        "!type": "fn(iterable: [?])",
        "!doc": "The Set object lets you store unique values of any type, whether primitive values or object references.",
        "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",
        "length": {
            "!type": "number",
            "!doc": "The value of the length property is 1."
        },
        "prototype": {
            "add": {
                "!type": "fn(value: ?) -> !this",
                "!doc": "The add() method appends a new element with a specified�value to the end of a Set object.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add"
            },
            "clear": {
                "!type": "fn()",
                "!doc": "The clear() method removes all elements from a Set object.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear"
            },
            "delete": {
                "!type": "fn(value: ?) -> bool",
                "!doc": "The delete() method removes the specified element from a Set object.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/delete"
            },
            "entries": {
                "!type": "fn() -> TODO_ITERATOR",
                "!doc": "The entries() method returns a new Iterator object that contains an array of [value, value] for each element in the Set object, in insertion order. For Set objects there is no key like in Map objects. However, to keep the API similar to the Map object, each entry has the same value for its key and value here, so that an array [value, value] is returned.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/entries"
            },
            "forEach": {
                "!type": "fn(callback: fn(value: ?, value2: ?, set: +Set), thisArg?: ?)",
                "!effects": ["call !0 this=!1 !this.<i> number !this"]
            },
            "has": {
                "!type": "fn(value: ?) -> bool",
                "!doc": "The has() method returns a boolean indicating whether an element with the specified value exists in a Set object or not.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has"
            },
            "keys": {
                "!type": "fn() -> TODO_ITERATOR",
                "!doc": "The values() method returns a new Iterator object that contains the values for each element in the Set object in insertion order.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/keys"
            },
            "size": {
                "!type": "number",
                "!doc": "The size accessor property returns the number of elements in a Set object.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size"
            },
            "values": {
                "!type": "fn() -> TODO_ITERATOR",
                "!doc": "The values() method returns a new Iterator object that contains the values for each element in the Set object in insertion order.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/values"
            },
            "prototype[@@iterator]": {
                "!type": "fn()",
                "!doc": "The initial value of the @@iterator property is the same function object as the initial value of the values property.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/@@iterator"
            }
        }
    },
    "String": {
        "fromCodePoint": {
            "!type": "fn(num1: ?) -> string",
            "!doc": "The static String.fromCodePoint() method returns a string created by using the specified sequence of code points.",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint"
        },
        "raw": {
            "!type": "fn(callSite: ?, substitutions: ?, templateString: ?) -> string",
            "!doc": "The static String.raw() method is a tag function of template strings, like the r prefix in Python or the @ prefix in C# for string literals, this function is used to get the raw string form of template strings.",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw"
        },
        "prototype": {
            "codePointAt": {
                "!type": "fn(pos: number) -> number",
                "!doc": "The codePointAt() method returns a non-negative integer that is the UTF-16 encoded code point value.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt"
            },
            "endsWith": {
                "!type": "fn(searchString: string, position?: number) -> bool",
                "!doc": "The endsWith() method determines whether a string ends with the characters of another string, returning true or false as appropriate.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith"
            },
            "includes": {
                "!type": "fn(searchString: string, position?: number) -> bool",
                "!doc": "The includes() method determines whether one string may be found within another string, returning true or false as appropriate.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/contains"
            },
            "normalize": {
                "!type": "fn(form: string) -> string",
                "!doc": "The normalize() method returns the Unicode Normalization Form of a given string (if the value isn't a string, it will be converted to one first).",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize"
            },
            "repeat": {
                "!type": "fn(count: number) -> string",
                "!doc": "The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat"
            },
            "startsWith": {
                "!type": "fn(searchString: string, position?: number) -> bool",
                "!doc": "The startsWith() method determines whether a string begins with the characters of another string, returning true or false as appropriate.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith"
            }
        }
    },
    "Symbol": {
        "!type": "fn(description?: string)",
        "!doc": "A symbol is a unique and immutable data type and may be used as an identifier for object properties. The symbol object is an implicit object wrapper for the symbol primitive data type.",
        "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol",
        "for": {
            "!type": "fn(key: string) -> +Symbol",
            "!doc": "The Symbol.for(key) method searches for existing symbols in a runtime-wide symbol registry with the given key and returns it if found. Otherwise a new symbol gets created in the global symbol registry with this key.",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for"
        },
        "keyFor": {
            "!type": "fn(sym: +Symbol) -> +Symbol",
            "!doc": "The Symbol.keyFor(sym) method retrieves a shared symbol key from the global symbol registry for the given symbol.",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor"
        },
        "prototype": {
            "toString": {
                "!type": "fn() -> string",
                "!doc": "The toString() method returns a string representing the specified Symbol object.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString"
            },
            "valueOf": {
                "!type": "fn() -> ?",
                "!doc": "The valueOf() method returns the primitive value of a Symbol object.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/valueOf"
            }
        }
    },
    "TypedArray": {
        "!type": "fn(length: number)",
        "!doc": "A TypedArray object describes an array-like view of an underlying binary data buffer. There is no global property named TypedArray, nor is there a directly visible TypedArray constructor.  Instead, there are a number of different global properties, whose values are typed array constructors for specific element types, listed below. On the following pages you will find common properties and methods that can be used with any typed array containing elements of any type.",
        "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray",
        "BYTES_PER_ELEMENT": {
            "!type": "number",
            "!doc": "The TypedArray.BYTES_PER_ELEMENT property represents the size in bytes of each element in an typed array.",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT"
        },
        "length": {
            "!type": "number",
            "!doc": "The length accessor property represents the length (in elements) of a typed array.",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length"
        },
        "name": {
            "!type": "string",
            "!doc": "The TypedArray.name property represents a string value of the typed array constructor name.",
            "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/name"
        },
        "prototype": {
            "buffer": {
                "!type": "+ArrayBuffer",
                "!doc": "The buffer accessor property represents the ArrayBuffer referenced by a TypedArray at construction time.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/buffer"
            },
            "byteLength": {
                "!type": "number",
                "!doc": "The byteLength accessor property represents the length (in bytes) of a typed array from the start of its ArrayBuffer.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength"
            },
            "byteOffset": {
                "!type": "number",
                "!doc": "The byteOffset accessor property represents the offset (in bytes) of a typed array from the start of its ArrayBuffer.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset"
            },
            "copyWithin": {
                "!type": "fn(target: number, start: number, end?: number) -> ?",
                "!doc": "The copyWithin() method copies the sequence of array elements within the array to the position starting at target. The copy is taken from the index positions of the second and third arguments start and end. The end argument is optional and defaults to the length of the array. This method has the same algorithm as Array.prototype.copyWithin. TypedArray is one of the typed array types here.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin"
            },
            "entries": {
                "!type": "fn() -> TODO_ITERATOR",
                "!doc": "The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/entries"
            },
            "every": {
                "!type": "fn(callback: fn(currentValue: ?, index: number, array: +TypedArray) -> bool, thisArg?: ?) -> bool",
                "!effects": [
                    "call !0 this=!1 !this.<i> number !this"
                ],
                "!doc": "The every() method tests whether all elements in the typed array pass the test implemented by the provided function. This method has the same algorithm as Array.prototype.every(). TypedArray is one of the typed array types here.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/every"
            },
            "fill": {
                "!type": "fn(value: ?, start?: number, end?: number)",
                "!doc": "The fill() method fills all the elements of a typed array from a start index to an end index with a static value. This method has the same algorithm as Array.prototype.fill(). TypedArray is one of the typed array types here.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/fill"
            },
            "filter": {
                "!type": "fn(test: fn(elt: ?, i: number) -> bool, context?: ?) -> !this",
                "!effects": [
                    "call !0 this=!1 !this.<i> number"
                ],
                "!doc": "Creates a new array with all of the elements of this array for which the provided filtering function returns true. See also Array.prototype.filter().",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter"
            },
            "find": {
                "!type": "fn(callback: fn(element: ?, index: number, array: +TypedArray) -> bool, thisArg?: ?) -> ?",
                "!effects": [
                    "call !0 this=!1 !this.<i> number !this"
                ],
                "!doc": "The find() method returns a value in the typed array, if an element satisfies the provided testing function. Otherwise undefined is returned. TypedArray is one of the typed array types here.\nSee also the findIndex() method, which returns the index of a found element in the typed array instead of its value.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/find"
            },
            "findIndex": {
                "!type": "fn(callback: fn(element: ?, index: number, array: +TypedArray) -> bool, thisArg?: ?) -> number",
                "!effects": [
                    "call !0 this=!1 !this.<i> number !this"
                ],
                "!doc": "The findIndex() method returns an index in the typed array, if an element in the typed array satisfies the provided testing function. Otherwise -1 is returned.\nSee also the find() method, which returns the value of a found element in the typed array instead of its index.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex"
            },
            "forEach": {
                "!type": "fn(callback: fn(value: ?, key: ?, array: +TypedArray), thisArg?: ?)",
                "!effects": ["call !0 this=!1 !this.<i> number !this"],
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach"
            },
            "includes": {
                "!type": "fn(searchElement: ?, fromIndex?: number) -> bool",
                "!doc": "The includes() method determines whether a typed array includes a certain element, returning true or false as appropriate. This method has the same algorithm as Array.prototype.includes(). TypedArray is one of the typed array types here.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes"
            },
            "indexOf": {
                "!type": "fn(searchElement: ?, fromIndex?: number) -> number",
                "!doc": "The indexOf() method returns the first index at which a given element can be found in the typed array, or -1 if it is not present. This method has the same algorithm as Array.prototype.indexOf(). TypedArray is one of the typed array types here.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf"
            },
            "join": {
                "!type": "fn(separator?: string) -> string",
                "!doc": "The join() method joins all elements of an array into a string. This method has the same algorithm as Array.prototype.join(). TypedArray is one of the typed array types here.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/join"
            },
            "keys": {
                "!type": "fn() -> TODO_ITERATOR",
                "!doc": "The keys() method returns a new Array Iterator object that contains the keys for each index in the array.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/keys"
            },
            "lastIndexOf": {
                "!type": "fn(searchElement: ?, fromIndex?: number) -> number",
                "!doc": "The lastIndexOf() method returns the last index at which a given element can be found in the typed array, or -1 if it is not present. The typed array is searched backwards, starting at fromIndex. This method has the same algorithm as Array.prototype.lastIndexOf(). TypedArray is one of the typed array types here.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf"
            },
            "length": {
                "!type": "number",
                "!doc": "Returns the number of elements hold in the typed array. Fixed at construction time and thus read only.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length"
            },
            "map": {
                "!type": "fn(f: fn(elt: ?, i: number) -> ?, context?: ?) -> [!0.!ret]",
                "!effects": [
                    "call !0 this=!1 !this.<i> number"
                ],
                "!doc": "Creates a new array with the results of calling a provided function on every element in this array. See also Array.prototype.map().",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/map"
            },
            "reduce": {
                "!type": "fn(combine: fn(sum: ?, elt: ?, i: number) -> ?, init?: ?) -> !0.!ret",
                "!effects": [
                    "call !0 !1 !this.<i> number"
                ],
                "!doc": "Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value. See also Array.prototype.reduce().",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduce"
            },
            "reduceRight": {
                "!type": "fn(combine: fn(sum: ?, elt: ?, i: number) -> ?, init?: ?) -> !0.!ret",
                "!effects": [
                    "call !0 !1 !this.<i> number"
                ],
                "!doc": "Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value. See also Array.prototype.reduceRight().",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reduceRight"
            },
            "reverse": {
                "!type": "fn()",
                "!doc": "The reverse() method reverses a typed array in place. The first typed array element becomes the last and the last becomes the first. This method has the same algorithm as Array.prototype.reverse(). TypedArray is one of the typed array types here.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reverse"
            },
            "set": {
                "!type": "fn(array: [?], offset?: ?)",
                "!doc": "The set() method stores multiple values in the typed array, reading input values from a specified array.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/set"
            },
            "slice": {
                "!type": "fn(from: number, to?: number) -> !this",
                "!type": "Extracts a section of an array and returns a new array. See also Array.prototype.slice().",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/slice"
            },
            "some": {
                "!type": "fn(test: fn(elt: ?, i: number) -> bool, context?: ?) -> bool",
                "!effects": [
                    "call !0 this=!1 !this.<i> number"
                ],
                "!doc": "The some() method tests whether some element in the typed array passes the test implemented by the provided function. This method has the same algorithm as Array.prototype.some(). TypedArray is one of the typed array types here.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/some"
            },
            "sort": {
                "!type": "fn(compare?: fn(a: ?, b: ?) -> number)",
                "!effects": [
                    "call !0 !this.<i> !this.<i>"
                ],
                "!doc": "Sorts the elements of an array in place and returns the array. See also Array.prototype.sort().",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/sort"
            },
            "subarray": {
                "!type": "fn(begin?: number, end?: number) -> +TypedArray",
                "!doc": "The subarray() method returns a new TypedArray on the same ArrayBuffer store and with the same element types as for this TypedArray object. The begin offset is inclusive and the end offset is exclusive. TypedArray is one of the typed array types.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray"
            },
            "values": {
                "!type": "fn() -> TODO_ITERATOR",
                "!doc": "The values() method returns a new Array Iterator object that contains the values for each index in the array.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/values"
            },
            "prototype[@@iterator]": {
                "!type": "fn()",
                "!doc": "The initial value of the @@iterator property is the same function object as the initial value of the values property.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator"
            }
        }
    },
    "Uint16Array": {
        "!type": "fn()",
        "!doc": "The Uint16Array typed array represents an array of 16-bit unsigned integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).",
        "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array",
        "length": "TypedArray.length",
        "BYTES_PER_ELEMENT": "TypedArray.BYTES_PER_ELEMENT",
        "name": "TypedArray.name",
        "from": "TypedArray.from",
        "of": "TypedArray.of",
        "prototype": {
            "!proto": "TypedArray.prototype"
        }
    },
    "Uint32Array": {
        "!type": "fn()",
        "!doc": "The Uint32Array typed array represents an array of 32-bit unsigned integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).",
        "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array",
        "length": "TypedArray.length",
        "BYTES_PER_ELEMENT": "TypedArray.BYTES_PER_ELEMENT",
        "name": "TypedArray.name",
        "from": "TypedArray.from",
        "of": "TypedArray.of",
        "prototype": {
            "!proto": "TypedArray.prototype"
        }
    },
    "Uint8Array": {
        "!type": "fn()",
        "!doc": "The Uint8Array typed array represents an array of 8-bit unsigned integers. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).",
        "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array",
        "length": "TypedArray.length",
        "BYTES_PER_ELEMENT": "TypedArray.BYTES_PER_ELEMENT",
        "name": "TypedArray.name",
        "from": "TypedArray.from",
        "of": "TypedArray.of",
        "prototype": {
            "!proto": "TypedArray.prototype"
        }
    },
    "Uint8ClampedArray": {
        "!type": "fn()",
        "!doc": "The Uint8ClampedArray typed array represents an array of 8-bit unsigned integers clamped to 0-255. The contents are initialized to 0. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).",
        "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray",
        "length": "TypedArray.length",
        "BYTES_PER_ELEMENT": "TypedArray.BYTES_PER_ELEMENT",
        "name": "TypedArray.name",
        "from": "TypedArray.from",
        "of": "TypedArray.of",
        "prototype": {
            "!proto": "TypedArray.prototype"
        }
    },
    "WeakMap": {
        "!type": "fn(iterable: [?])",
        "!doc": "The WeakMap object is a collection of key/value pairs in which the keys are objects and the values can be arbitrary values.",
        "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap",
        "prototype": {
            "delete": {
                "!type": "fn(key: ?) -> bool",
                "!doc": "The delete() method removes the specified element from a WeakMap object.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/delete"
            },
            "get": {
                "!type": "fn(key: ?) !this.<i>",
                "!doc": "The get() method returns a specified element from a WeakMap object.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/get"
            },
            "has": {
                "!type": "fn(key: ?) -> bool",
                "!doc": "The has() method returns a boolean indicating whether an element with the specified key exists in the WeakMap object or not.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/has"
            },
            "set": {
                "!type": "fn(key: ?, value: ?)",
                "!doc": "The set() method adds a new element with a specified key and value to a WeakMap object.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/set"
            }
        }
    },
    "WeakSet": {
        "!type": "fn(iterable: [?])",
        "!doc": "The WeakSet object lets you store weakly held objects in a collection.",
        "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet",
        "prototype": {
            "add": {
                "!type": "fn(value: ?)",
                "!doc": "The add() method appends a new object to the end of a WeakSet object.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/add"
            },
            "delete": {
                "!type": "fn(value: ?) -> bool",
                "!doc": "The delete() method removes the specified element from a WeakSet object.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/delete"
            },
            "has": {
                "!type": "fn(value: ?) -> bool",
                "!doc": "The has() method returns a boolean indicating whether an object exists in a WeakSet or not.",
                "!url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/has"
            }
        }
    }
}

    CodeMirror.tern.addDef(def);
})();