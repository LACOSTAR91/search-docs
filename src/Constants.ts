const Constants: Object = {
    URL: "https://developer.mozilla.org/",
    HTML: "en-US/docs/Web/HTML/Reference/",
    CSS: "en-US/docs/Web/CSS/Reference/",
    JS: "en-US/docs/Web/JavaScript/Reference/",
    JSON_EXTENSION: "bcd.json",
};

const HTML_List: string[] = [

];

const CSS_List: string[] = [

];

const JS_List: string[] = [
    'Global_Objects#AggregateError',
    'Global_Objects#Array',
    'Global_Objects#Array#Array',
    'Global_Objects#Array#@@iterator',    
    'Global_Objects#Array#@@species',   
    'Global_Objects#Array#@@unscopables',
    'Global_Objects#Array#at',
    'Global_Objects#Array#concat',        
    'Global_Objects#Array#copyWithin',  
    'Global_Objects#Array#entries',      
    'Global_Objects#Array#every',         
    'Global_Objects#Array#fill',        
    'Global_Objects#Array#filter',       
    'Global_Objects#Array#find',          
    'Global_Objects#Array#findIndex',   
    'Global_Objects#Array#findLast',     
    'Global_Objects#Array#findLastIndex', 
    'Global_Objects#Array#flat',        
    'Global_Objects#Array#flatMap',      
    'Global_Objects#Array#forEach',       
    'Global_Objects#Array#from',        
    'Global_Objects#Array#group',        
    'Global_Objects#Array#groupToMap',    
    'Global_Objects#Array#includes',    
    'Global_Objects#Array#indexOf',      
    'Global_Objects#Array#isArray',       
    'Global_Objects#Array#join',        
    'Global_Objects#Array#keys',
    'Global_Objects#Array#lastIndexOf',   
    'Global_Objects#Array#length',      
    'Global_Objects#Array#map',
    'Global_Objects#Array#of',            
    'Global_Objects#Array#pop',         
    'Global_Objects#Array#push',
    'Global_Objects#Array#reduce',        
    'Global_Objects#Array#reduceRight', 
    'Global_Objects#Array#reverse',      
    'Global_Objects#Array#shift',         
    'Global_Objects#Array#slice',       
    'Global_Objects#Array#some',
    'Global_Objects#Array#sort',          
    'Global_Objects#Array#splice',      
    'Global_Objects#Array#toLocaleString',
    'Global_Objects#Array#toSource',      
    'Global_Objects#Array#toString',    
    'Global_Objects#Array#unshift',
    'Global_Objects#Array#values',
    'Global_Objects#ArrayBuffer',
    'Global_Objects#ArrayBuffer#@@species',  
    'Global_Objects#ArrayBuffer#byteLength', 
    'Global_Objects#ArrayBuffer#isView',     
    'Global_Objects#ArrayBuffer#slice',
    'Global_Objects#Atomics',
    'Global_Objects#Atomics#add',
    'Global_Objects#Atomics#and',
    'Global_Objects#Atomics#compareExchange',
    'Global_Objects#Atomics#exchange',
    'Global_Objects#Atomics#isLockFree',
    'Global_Objects#Atomics#load',
    'Global_Objects#Atomics#notify',
    'Global_Objects#Atomics#or',
    'Global_Objects#Atomics#store',
    'Global_Objects#Atomics#sub',
    'Global_Objects#Atomics#wait',
    'Global_Objects#Atomics#waitAsync',
    'Global_Objects#Atomics#xor',
    'Global_Objects#BigInt',
    'Global_Objects#BigInt#asIntN',
    'Global_Objects#BigInt#asUintN',
    'Global_Objects#BigInt#toLocaleString',
    'Global_Objects#BigInt#toString',
    'Global_Objects#BigInt#valueOf',
    'Global_Objects#BigInt64Array',
    'Global_Objects#BigUint64Array',
    'Global_Objects#Boolean',
    'Global_Objects#Boolean#Boolean',
    'Global_Objects#Boolean#toSource', 
    'Global_Objects#Boolean#toString', 
    'Global_Objects#Boolean#valueOf',
    'Global_Objects#DataView',
    'Global_Objects#DataView#DataView',
    'Global_Objects#DataView#buffer',       
    'Global_Objects#DataView#byteLength',
    'Global_Objects#DataView#byteOffset',   
    'Global_Objects#DataView#getBigInt64',
    'Global_Objects#DataView#getBigUint64', 
    'Global_Objects#DataView#getFloat32',
    'Global_Objects#DataView#getFloat64',   
    'Global_Objects#DataView#getInt16',
    'Global_Objects#DataView#getInt32',     
    'Global_Objects#DataView#getInt8',
    'Global_Objects#DataView#getUint16',    
    'Global_Objects#DataView#getUint32',
    'Global_Objects#DataView#getUint8',     
    'Global_Objects#DataView#setBigInt64',
    'Global_Objects#DataView#setBigUint64', 
    'Global_Objects#DataView#setFloat32',
    'Global_Objects#DataView#setFloat64',   
    'Global_Objects#DataView#setInt16',
    'Global_Objects#DataView#setInt32',     
    'Global_Objects#DataView#setInt8',
    'Global_Objects#DataView#setUint16',    
    'Global_Objects#DataView#setUint32',
    'Global_Objects#DataView#setUint8',
    'Global_Objects#Date',   
    'Global_Objects#Date#Date',              
    'Global_Objects#Date#@@toPrimitive',      
    'Global_Objects#Date#UTC',         
    'Global_Objects#Date#getDate',           
    'Global_Objects#Date#getDay',
    'Global_Objects#Date#getFullYear',        
    'Global_Objects#Date#getHours',          
    'Global_Objects#Date#getMilliseconds',
    'Global_Objects#Date#getMinutes',         
    'Global_Objects#Date#getMonth',          
    'Global_Objects#Date#getSeconds',
    'Global_Objects#Date#getTime',            
    'Global_Objects#Date#getTimezoneOffset', 
    'Global_Objects#Date#getUTCDate',
    'Global_Objects#Date#getUTCDay',          
    'Global_Objects#Date#getUTCFullYear',    
    'Global_Objects#Date#getUTCHours',
    'Global_Objects#Date#getUTCMilliseconds', 
    'Global_Objects#Date#getUTCMinutes',     
    'Global_Objects#Date#getUTCMonth',
    'Global_Objects#Date#getUTCSeconds',      
    'Global_Objects#Date#getYear',           
    'Global_Objects#Date#now',
    'Global_Objects#Date#parse',              
    'Global_Objects#Date#setDate',           
    'Global_Objects#Date#setFullYear',
    'Global_Objects#Date#setHours',           
    'Global_Objects#Date#setMilliseconds',   
    'Global_Objects#Date#setMinutes',
    'Global_Objects#Date#setMonth',           
    'Global_Objects#Date#setSeconds',        
    'Global_Objects#Date#setTime',
    'Global_Objects#Date#setUTCDate',         
    'Global_Objects#Date#setUTCFullYear',    
    'Global_Objects#Date#setUTCHours',
    'Global_Objects#Date#setUTCMilliseconds', 
    'Global_Objects#Date#setUTCMinutes',     
    'Global_Objects#Date#setUTCMonth',
    'Global_Objects#Date#setUTCSeconds',      
    'Global_Objects#Date#setYear',           
    'Global_Objects#Date#toDateString',
    'Global_Objects#Date#toGMTString',        
    'Global_Objects#Date#toISOString',       
    'Global_Objects#Date#toJSON',
    'Global_Objects#Date#toLocaleDateString', 
    'Global_Objects#Date#toLocaleString',    
    'Global_Objects#Date#toLocaleTimeString',
    'Global_Objects#Date#toSource',           
    'Global_Objects#Date#toString',          
    'Global_Objects#Date#toTimeString',
    'Global_Objects#Date#toUTCString',        
    'Global_Objects#Date#valueOf',
    'Global_Objects#decodeURI',
    'Global_Objects#decodeURIComponent',
    'Global_Objects#encodeURI',
    'Global_Objects#encodeURIComponent',
    'Global_Objects#Error',
    'Global_Objects#Error#Error',
    'Global_Objects#Error#cause',
    'Global_Objects#Error#columnNumber',
    'Global_Objects#Error#fileName',
    'Global_Objects#Error#lineNumber',
    'Global_Objects#Error#message',
    'Global_Objects#Error#name',
    'Global_Objects#Error#serializable_object',
    'Global_Objects#Error#stack',
    'Global_Objects#Error#toString',
    'Global_Objects#escape',
    'Global_Objects#eval',
    'Global_Objects#EvalError',
    'Global_Objects#EvalError#EvalError',
    'Global_Objects#EvalError#serializable_object',
    'Global_Objects#FinalizationRegistry',
    'Global_Objects#FinalizationRegistry#FinalizationRegistry',
    'Global_Objects#FinalizationRegistry#register', 
    'Global_Objects#FinalizationRegistry#unregister',
    'Global_Objects#Float32Array',
    'Global_Objects#Float32Array#Float32Array',
    'Global_Objects#Float64Array',
    'Global_Objects#Float64Array#Float64Array',
    'Global_Objects#Function',
    'Global_Objects#Function#Function',
    'Global_Objects#Function#apply',    
    'Global_Objects#Function#arguments',
    'Global_Objects#Function#bind',     
    'Global_Objects#Function#call',
    'Global_Objects#Function#caller',   
    'Global_Objects#Function#displayName',
    'Global_Objects#Function#length',   
    'Global_Objects#Function#name',
    'Global_Objects#Function#toSource', 
    'Global_Objects#Function#toString',
    'Global_Objects#Generator#next', 
    'Global_Objects#Generator#return', 
    'Global_Objects#Generator#throw',
    'Global_Objects#GeneratorFunction',
    'Global_Objects#Infinity',
    'Global_Objects#Int16Array',
    'Global_Objects#Int16Array#Int16Array',
    'Global_Objects#Int32Array',
    'Global_Objects#Int32Array#Int32Array',
    'Global_Objects#Int8Array',
    'Global_Objects#Int8Array#Int8Array',
    'Global_Objects#InternalError',
    'Global_Objects#InternalError#InternalError',
    'Global_Objects#Intl',
    'Global_Objects#Intl#@@toStringTag',      
    'Global_Objects#Intl#Collator',
    'Global_Objects#Intl#DateTimeFormat',     
    'Global_Objects#Intl#DisplayNames',       
    'Global_Objects#Intl#ListFormat',
    'Global_Objects#Intl#Locale',
    'Global_Objects#Intl#NumberFormat',       
    'Global_Objects#Intl#PluralRules',        
    'Global_Objects#Intl#RelativeTimeFormat', 
    'Global_Objects#Intl#Segmenter',
    'Global_Objects#Intl#Segments',
    'Global_Objects#Intl#getCanonicalLocales',
    'Global_Objects#Intl#supportedValuesOf',
    'Global_Objects#isFinite',
    'Global_Objects#isNaN',
    'Global_Objects#JSON',
    'Global_Objects#JSON#json_superset', 
    'Global_Objects#JSON#parse', 
    'Global_Objects#JSON#stringify',
    'Global_Objects#Map',
    'Global_Objects#Map#Map',
    'Global_Objects#Map#@@iterator',
    'Global_Objects#Map#@@species',
    'Global_Objects#Map#@@toStringTag',
    'Global_Objects#Map#clear',
    'Global_Objects#Map#delete',
    'Global_Objects#Map#entries',
    'Global_Objects#Map#forEach',
    'Global_Objects#Map#get',
    'Global_Objects#Map#has',
    'Global_Objects#Map#key_equality_for_zeros',
    'Global_Objects#Map#keys',
    'Global_Objects#Map#set',
    'Global_Objects#Map#size',
    'Global_Objects#Map#values',
    'Global_Objects#Math',
    'Global_Objects#Math#E',        
    'Global_Objects#Math#LN10',   
    'Global_Objects#Math#LN2',     
    'Global_Objects#Math#LOG10E',
    'Global_Objects#Math#LOG2E',    
    'Global_Objects#Math#PI',     
    'Global_Objects#Math#SQRT1_2', 
    'Global_Objects#Math#SQRT2',
    'Global_Objects#Math#abs',    
    'Global_Objects#Math#acos',    
    'Global_Objects#Math#acosh', 
    'Global_Objects#Math#asin',     
    'Global_Objects#Math#asinh',  
    'Global_Objects#Math#atan',    
    'Global_Objects#Math#atan2', 
    'Global_Objects#Math#atanh',    
    'Global_Objects#Math#cbrt',   
    'Global_Objects#Math#ceil',    
    'Global_Objects#Math#clz32', 
    'Global_Objects#Math#cos',      
    'Global_Objects#Math#cosh',   
    'Global_Objects#Math#exp',     
    'Global_Objects#Math#expm1', 
    'Global_Objects#Math#floor',    
    'Global_Objects#Math#fround', 
    'Global_Objects#Math#hypot',   
    'Global_Objects#Math#imul',  
    'Global_Objects#Math#log',      
    'Global_Objects#Math#log10',  
    'Global_Objects#Math#log1p',   
    'Global_Objects#Math#log2',  
    'Global_Objects#Math#max',      
    'Global_Objects#Math#min',    
    'Global_Objects#Math#pow',     
    'Global_Objects#Math#random',
    'Global_Objects#Math#round',    
    'Global_Objects#Math#sign',   
    'Global_Objects#Math#sin',     
    'Global_Objects#Math#sinh',  
    'Global_Objects#Math#sqrt',     
    'Global_Objects#Math#tan',    
    'Global_Objects#Math#tanh',    
    'Global_Objects#Math#trunc',
    'Global_Objects#NaN',
    'Global_Objects#Number',
    'Global_Objects#Number#Number',
    'Global_Objects#Number#EPSILON',           
    'Global_Objects#Number#MAX_SAFE_INTEGER', 
    'Global_Objects#Number#MAX_VALUE',         
    'Global_Objects#Number#MIN_SAFE_INTEGER', 
    'Global_Objects#Number#MIN_VALUE',         
    'Global_Objects#Number#NEGATIVE_INFINITY',
    'Global_Objects#Number#NaN',               
    'Global_Objects#Number#POSITIVE_INFINITY',
    'Global_Objects#Number#isFinite',          
    'Global_Objects#Number#isInteger',        
    'Global_Objects#Number#isNaN',             
    'Global_Objects#Number#isSafeInteger',    
    'Global_Objects#Number#parseFloat',        
    'Global_Objects#Number#parseInt',
    'Global_Objects#Number#toExponential',     
    'Global_Objects#Number#toFixed',
    'Global_Objects#Number#toLocaleString',    
    'Global_Objects#Number#toPrecision',      
    'Global_Objects#Number#toSource',          
    'Global_Objects#Number#toString',
    'Global_Objects#Number#valueOf',
    'Global_Objects#Object',
    'Global_Objects#Object#Object',
    'Global_Objects#Object#assign',
    'Global_Objects#Object#constructor',
    'Global_Objects#Object#create',
    'Global_Objects#Object#defineGetter',
    'Global_Objects#Object#defineProperties',
    'Global_Objects#Object#defineProperty',
    'Global_Objects#Object#defineSetter',
    'Global_Objects#Object#entries',
    'Global_Objects#Object#freeze',
    'Global_Objects#Object#fromEntries',
    'Global_Objects#Object#getOwnPropertyDescriptor', 
    'Global_Objects#Object#getOwnPropertyDescriptors',
    'Global_Objects#Object#getOwnPropertyNames',      
    'Global_Objects#Object#getOwnPropertySymbols',    
    'Global_Objects#Object#getPrototypeOf',
    'Global_Objects#Object#hasOwn',
    'Global_Objects#Object#hasOwnProperty',
    'Global_Objects#Object#is',
    'Global_Objects#Object#isExtensible',
    'Global_Objects#Object#isFrozen',
    'Global_Objects#Object#isPrototypeOf',
    'Global_Objects#Object#isSealed',
    'Global_Objects#Object#keys',
    'Global_Objects#Object#lookupGetter',
    'Global_Objects#Object#lookupSetter',
    'Global_Objects#Object#preventExtensions',
    'Global_Objects#Object#propertyIsEnumerable',
    'Global_Objects#Object#proto',
    'Global_Objects#Object#seal',
    'Global_Objects#Object#setPrototypeOf',
    'Global_Objects#Object#toLocaleString',
    'Global_Objects#Object#toSource',
    'Global_Objects#Object#toString',
    'Global_Objects#Object#valueOf',
    'Global_Objects#Object#values',
    'Global_Objects#parseFloat',
    'Global_Objects#parseInt',
    'Global_Objects#Promise',
    'Global_Objects#Promise#Promise',
    'Global_Objects#Promise#all',
    'Global_Objects#Promise#allSettled',
    'Global_Objects#Promise#any',
    'Global_Objects#Promise#catch',
    'Global_Objects#Promise#finally',
    'Global_Objects#Promise#incumbent_settings_object_tracking',
    'Global_Objects#Promise#race',
    'Global_Objects#Promise#reject',
    'Global_Objects#Promise#resolve',
    'Global_Objects#Promise#then',
    'Global_Objects#Proxy',
    'Global_Objects#Proxy#Proxy',
    'Global_Objects#Proxy#handler',
    'Global_Objects#Proxy#revocable',
    'Global_Objects#Proxy#revoke',
    'Global_Objects#RangeError',
    'Global_Objects#RangeError#RangeError',
    'Global_Objects#RangeError#serializable_object',
    'Global_Objects#ReferenceError',
    'Global_Objects#ReferenceError#ReferenceError',
    'Global_Objects#ReferenceError#serializable_object',
    'Global_Objects#Reflect',
    'Global_Objects#Reflect#apply',
    'Global_Objects#Reflect#construct',
    'Global_Objects#Reflect#defineProperty',
    'Global_Objects#Reflect#deleteProperty',
    'Global_Objects#Reflect#get',
    'Global_Objects#Reflect#getOwnPropertyDescriptor',
    'Global_Objects#Reflect#getPrototypeOf',
    'Global_Objects#Reflect#has',
    'Global_Objects#Reflect#isExtensible',
    'Global_Objects#Reflect#ownKeys',
    'Global_Objects#Reflect#preventExtensions',       
    'Global_Objects#Reflect#set',
    'Global_Objects#Reflect#setPrototypeOf',
    'Global_Objects#RegExp',
    'Global_Objects#RegExp#RegExp',
    'Global_Objects#RegExp#@@match',              
    'Global_Objects#RegExp#@@matchAll',
    'Global_Objects#RegExp#@@replace',            
    'Global_Objects#RegExp#@@search',
    'Global_Objects#RegExp#@@species',            
    'Global_Objects#RegExp#@@split',
    'Global_Objects#RegExp#compile',              
    'Global_Objects#RegExp#dotAll',
    'Global_Objects#RegExp#exec',                 
    'Global_Objects#RegExp#flags',
    'Global_Objects#RegExp#global',               
    'Global_Objects#RegExp#hasIndices',
    'Global_Objects#RegExp#ignoreCase',           
    'Global_Objects#RegExp#input',
    'Global_Objects#RegExp#lastIndex',            
    'Global_Objects#RegExp#lastMatch',
    'Global_Objects#RegExp#lastParen',            
    'Global_Objects#RegExp#leftContext',
    'Global_Objects#RegExp#lookbehind_assertion', 
    'Global_Objects#RegExp#multiline',
    'Global_Objects#RegExp#n',                    
    'Global_Objects#RegExp#named_capture_groups',
    'Global_Objects#RegExp#property_escapes',     
    'Global_Objects#RegExp#rightContext',        
    'Global_Objects#RegExp#source',               
    'Global_Objects#RegExp#sticky',
    'Global_Objects#RegExp#test',                 
    'Global_Objects#RegExp#toSource',
    'Global_Objects#RegExp#toString',             
    'Global_Objects#RegExp#unicode',
    'Global_Objects#Set',
    'Global_Objects#Set#Set',
    'Global_Objects#Set#@@iterator',
    'Global_Objects#Set#@@species',
    'Global_Objects#Set#add',
    'Global_Objects#Set#clear',
    'Global_Objects#Set#delete',
    'Global_Objects#Set#entries',
    'Global_Objects#Set#forEach',
    'Global_Objects#Set#has',
    'Global_Objects#Set#key_equality_for_zeros',
    'Global_Objects#Set#size',
    'Global_Objects#Set#values',
    'Global_Objects#SharedArrayBuffer',
    'Global_Objects#SharedArrayBuffer#SharedArrayBuffer',
    'Global_Objects#SharedArrayBuffer#byteLength',
    'Global_Objects#SharedArrayBuffer#slice',
    'Global_Objects#String',
    'Global_Objects#String#String',
    'Global_Objects#String#@@iterator', 
    'Global_Objects#String#anchor',     
    'Global_Objects#String#at',
    'Global_Objects#String#big',        
    'Global_Objects#String#blink',      
    'Global_Objects#String#bold',       
    'Global_Objects#String#charAt',     
    'Global_Objects#String#charCodeAt', 
    'Global_Objects#String#codePointAt',
    'Global_Objects#String#concat',     
    'Global_Objects#String#endsWith',   
    'Global_Objects#String#fixed',      
    'Global_Objects#String#fontcolor',  
    'Global_Objects#String#fontsize',   
    'Global_Objects#String#fromCharCode',
    'Global_Objects#String#fromCodePoint',
    'Global_Objects#String#includes',
    'Global_Objects#String#indexOf',
    'Global_Objects#String#italics',
    'Global_Objects#String#lastIndexOf',
    'Global_Objects#String#length',
    'Global_Objects#String#link',
    'Global_Objects#String#localeCompare',
    'Global_Objects#String#match',
    'Global_Objects#String#matchAll',
    'Global_Objects#String#normalize',
    'Global_Objects#String#padEnd',
    'Global_Objects#String#padStart',
    'Global_Objects#String#raw',
    'Global_Objects#String#repeat',
    'Global_Objects#String#replace',
    'Global_Objects#String#replaceAll',
    'Global_Objects#String#search',
    'Global_Objects#String#slice',
    'Global_Objects#String#small',
    'Global_Objects#String#split',
    'Global_Objects#String#startsWith',
    'Global_Objects#String#strike',
    'Global_Objects#String#sub',
    'Global_Objects#String#substr',
    'Global_Objects#String#substring',
    'Global_Objects#String#sup',
    'Global_Objects#String#toLocaleLowerCase',
    'Global_Objects#String#toLocaleUpperCase',
    'Global_Objects#String#toLowerCase',
    'Global_Objects#String#toSource',
    'Global_Objects#String#toString',
    'Global_Objects#String#toUpperCase',
    'Global_Objects#String#trim',
    'Global_Objects#String#trimEnd',
    'Global_Objects#String#trimStart',
    'Global_Objects#String#unicode_code_point_escapes',
    'Global_Objects#String#valueOf',
    'Global_Objects#Symbol',
    'Global_Objects#Symbol#Symbol',
    'Global_Objects#Symbol#@@toPrimitive', 
    'Global_Objects#Symbol#asyncIterator',     
    'Global_Objects#Symbol#description',   
    'Global_Objects#Symbol#for',
    'Global_Objects#Symbol#hasInstance',   
    'Global_Objects#Symbol#isConcatSpreadable',
    'Global_Objects#Symbol#iterator',      
    'Global_Objects#Symbol#keyFor',
    'Global_Objects#Symbol#match',         
    'Global_Objects#Symbol#matchAll',
    'Global_Objects#Symbol#replace',       
    'Global_Objects#Symbol#search',
    'Global_Objects#Symbol#species',       
    'Global_Objects#Symbol#split',
    'Global_Objects#Symbol#toPrimitive',   
    'Global_Objects#Symbol#toSource',
    'Global_Objects#Symbol#toString',      
    'Global_Objects#Symbol#toStringTag',       
    'Global_Objects#Symbol#unscopables',   
    'Global_Objects#Symbol#valueOf',
    'Global_Objects#SyntaxError',
    'Global_Objects#SyntaxError#SyntaxError',
    'Global_Objects#SyntaxError#serializable_object',
    'Global_Objects#TypedArray',
    'Global_Objects#TypedArray#@@iterator',
    'Global_Objects#TypedArray#@@species',
    'Global_Objects#TypedArray#BYTES_PER_ELEMENT',
    'Global_Objects#TypedArray#at',
    'Global_Objects#TypedArray#buffer',
    'Global_Objects#TypedArray#byteLength',
    'Global_Objects#TypedArray#byteOffset',
    'Global_Objects#TypedArray#constructor_without_parameters',
    'Global_Objects#TypedArray#copyWithin',
    'Global_Objects#TypedArray#entries',
    'Global_Objects#TypedArray#every',
    'Global_Objects#TypedArray#fill',
    'Global_Objects#TypedArray#filter',
    'Global_Objects#TypedArray#find',
    'Global_Objects#TypedArray#findIndex',
    'Global_Objects#TypedArray#findLast',
    'Global_Objects#TypedArray#findLastIndex',
    'Global_Objects#TypedArray#forEach',
    'Global_Objects#TypedArray#from',
    'Global_Objects#TypedArray#includes',
    'Global_Objects#TypedArray#indexOf',
    'Global_Objects#TypedArray#index_properties_not_consulting_prototype',
    'Global_Objects#TypedArray#iterable_in_constructor',
    'Global_Objects#TypedArray#join',
    'Global_Objects#TypedArray#keys',
    'Global_Objects#TypedArray#lastIndexOf',
    'Global_Objects#TypedArray#length',
    'Global_Objects#TypedArray#map',
    'Global_Objects#TypedArray#name',
    'Global_Objects#TypedArray#named_properties',
    'Global_Objects#TypedArray#new_required',
    'Global_Objects#TypedArray#of',
    'Global_Objects#TypedArray#reduce',
    'Global_Objects#TypedArray#reduceRight',
    'Global_Objects#TypedArray#reverse',
    'Global_Objects#TypedArray#set',
    'Global_Objects#TypedArray#slice',
    'Global_Objects#TypedArray#some',
    'Global_Objects#TypedArray#sort',
    'Global_Objects#TypedArray#subarray',
    'Global_Objects#TypedArray#toLocaleString',
    'Global_Objects#TypedArray#toString',
    'Global_Objects#TypedArray#values',
    'Global_Objects#TypeError',
    'Global_Objects#TypeError#TypeError',
    'Global_Objects#TypeError#serializable_object',
    'Global_Objects#Uint16Array',
    'Global_Objects#Uint16Array#Uint16Array',
    'Global_Objects#Uint32Array',
    'Global_Objects#Uint32Array#Uint32Array',
    'Global_Objects#Uint8Array',
    'Global_Objects#Uint8Array#Uint8Array',
    'Global_Objects#Uint8ClampedArray',
    'Global_Objects#Uint8ClampedArray#Uint8ClampedArray',
    'Global_Objects#undefined',
    'Global_Objects#unescape',
    'Global_Objects#uneval',
    'Global_Objects#URIError',
    'Global_Objects#URIError#URIError',
    'Global_Objects#URIError#serializable_object',
    'Global_Objects#WeakMap',
    'Global_Objects#WeakMap#WeakMap',
    'Global_Objects#WeakMap#clear',   
    'Global_Objects#WeakMap#delete',  
    'Global_Objects#WeakMap#get',     
    'Global_Objects#WeakMap#has',     
    'Global_Objects#WeakMap#set',
    'Global_Objects#WeakRef',
    'Global_Objects#WeakRef#WeakRef',
    'Global_Objects#WeakRef#deref',
    'Global_Objects#WeakSet',
    'Global_Objects#WeakSet#WeakSet',
    'Global_Objects#WeakSet#add',
    'Global_Objects#WeakSet#delete',
    'Global_Objects#WeakSet#has',
    'Global_Objects#WebAssembly',
    'Global_Objects#WebAssembly#CompileError',         
    'Global_Objects#WebAssembly#Exception',   
    'Global_Objects#WebAssembly#Global',               
    'Global_Objects#WebAssembly#Instance',    
    'Global_Objects#WebAssembly#LinkError',            
    'Global_Objects#WebAssembly#Memory',      
    'Global_Objects#WebAssembly#Module',               
    'Global_Objects#WebAssembly#RuntimeError',
    'Global_Objects#WebAssembly#Table',                
    'Global_Objects#WebAssembly#Tag',         
    'Global_Objects#WebAssembly#compile',
    'Global_Objects#WebAssembly#compileStreaming',     
    'Global_Objects#WebAssembly#instantiate',
    'Global_Objects#WebAssembly#instantiateStreaming', 
    'Global_Objects#WebAssembly#validate',
    'Operators#addition',
    'Operators#addition_assignment',     
    'Operators#assignment',
    'Operators#async_function',
    'Operators#async_generator_function',
    'Operators#await',
    'Operators#bitwise_and',
    'Operators#bitwise_and_assignment',  
    'Operators#bitwise_not',
    'Operators#bitwise_or',
    'Operators#bitwise_or_assignment',   
    'Operators#bitwise_xor',
    'Operators#bitwise_xor_assignment',  
    'Operators#class',
    'Operators#comma',
    'Operators#conditional',
    'Operators#decrement',
    'Operators#delete',
    'Operators#destructuring',
    'Operators#division',
    'Operators#division_assignment',     
    'Operators#equality',
    'Operators#exponentiation',
    'Operators#exponentiation_assignment',
    'Operators#function',
    'Operators#generator_function',
    'Operators#greater_than',
    'Operators#greater_than_or_equal',
    'Operators#grouping',
    'Operators#import',
    'Operators#import_meta',
    'Operators#in',
    'Operators#increment',
    'Operators#inequality',
    'Operators#instanceof',
    'Operators#left_shift',
    'Operators#left_shift_assignment',
    'Operators#less_than',
    'Operators#less_than_or_equal',
    'Operators#logical_and',
    'Operators#logical_and_assignment',
    'Operators#logical_not',
    'Operators#logical_nullish_assignment',
    'Operators#logical_or',
    'Operators#logical_or_assignment',
    'Operators#multiplication',
    'Operators#multiplication_assignment',
    'Operators#new',
    'Operators#new_target',
    'Operators#null',
    'Operators#nullish_coalescing',
    'Operators#object_initializer',
    'Operators#optional_chaining',
    'Operators#property_accessors',
    'Operators#remainder',
    'Operators#remainder_assignment',
    'Operators#right_shift',
    'Operators#right_shift_assignment',
    'Operators#spread',
    'Operators#strict_equality',
    'Operators#strict_inequality',
    'Operators#subtraction',
    'Operators#subtraction_assignment',
    'Operators#super',
    'Operators#this',
    'Operators#typeof',
    'Operators#unary_negation',
    'Operators#unary_plus',
    'Operators#unsigned_right_shift',
    'Operators#unsigned_right_shift_assignment',
    'Operators#void',
    'Operators#yield',
    'Operators#yield_star',
    'Statements#async_function',
    'Statements#async_generator_function',
    'Statements#block',
    'Statements#break',
    'Statements#class',
    'Statements#const',
    'Statements#continue',
    'Statements#debugger',
    'Statements#do_while',
    'Statements#empty',
    'Statements#export',
    'Statements#for',
    'Statements#for_await_of',
    'Statements#for_in',
    'Statements#for_of',
    'Statements#function',
    'Statements#generator_function',
    'Statements#if_else',
    'Statements#import',
    'Statements#label',
    'Statements#let',
    'Statements#return',
    'Statements#switch',
    'Statements#throw',
    'Statements#try_catch',
    'Statements#var',
    'Statements#while',
    'Statements#with',
    'Functions#arguments',
    'Functions#arrow_functions',
    'Functions#block_level_functions',
    'Functions#default_parameters',
    'Functions#get',
    'Functions#method_definitions',
    'Functions#rest_parameters',
    'Functions#set',
    'Classes#constructor',
    'Classes#extends',
    'Classes#private_class_fields',
    'Classes#private_class_fields_in',
    'Classes#private_class_methods',
    'Classes#public_class_fields',
    'Classes#static',
    'Classes#static_class_fields',
    'Classes#static_initialization_blocks'
];

export { Constants, HTML_List, CSS_List, JS_List };