'use strict';
var 
  jsonschema = require('jsonschema'),
  checkftions = require('allex_checkslowlevellib'),
  cleanftions = require('allex_destructionlowlevellib')(checkftions.isFunction, checkftions.isArray, checkftions.isNumber, checkftions.isString),
  inherit = require('allex_inheritlowlevellib'),
  slist = require('allex_singlelinkedlistlowlevellib'),
  maclib = require('allex_macaddresslowlevellib')(checkftions.isFunction, checkftions.isArray),
  stringmanip = require('allex_stringmanipulationlowlevellib')(checkftions.isString, checkftions.isNull),
  objmanip = require('allex_objectmanipulationlowlevellib')(checkftions),
  functionmanip = require('allex_functionmanipulationlowlevellib')(inherit.inherit),
  AllexError = require('allex_errorlowlevellib')(inherit.inherit),
  AllexJSONizingError = require('allex_jsonizingerrorlowlevellib')(AllexError,inherit.inherit),
  NotAnAllexErrorError = require('allex_notanallexerrorerrorlowlevellib')(AllexError,inherit.inherit),
  dlinkedlistbase = require('allex_doublelinkedlistbaselowlevellib'),
  fifo = require('allex_fifolowlevellib')(dlinkedlistbase, inherit.inherit),
  stringbuffer = require('allex_stringbufferlowlevellib')(fifo),
  timeout = require('allex_timeoutlowlevellib')(checkftions.isFunction, fifo),
  eventemitter = require('allex_eventemitterlowlevellib')(dlinkedlistbase, inherit.inherit, checkftions.isFunction, checkftions.isArrayOfFunctions),
  destroyables = require('allex_destroyablemixinslowlevellib')(inherit, functionmanip.dummyFunc, eventemitter),
  props = require('allex_propertymixinslowlevellib')(inherit, functionmanip.dummyFunc, eventemitter, objmanip.extend, destroyables.Destroyable, jsonschema, stringmanip.readPropertyFromDotDelimitedString, checkftions.isFunction, checkftions.isArray, stringmanip.writePropertyFromDelimitedString),
  q = require('allex_qlowlevellib')(timeout.runNext, checkftions.isArray, checkftions.isFunction, inherit.inherit, functionmanip.dummyFunc, eventemitter),
  deferfifo = require('allex_deferfifolowlevellib')(dlinkedlistbase, inherit.inherit, q),
  uidlib = require('allex_uidlowlevellib')(q, maclib.getMac),
  avltreelib = require('allex_avltreelowlevellib')(dlinkedlistbase, inherit.inherit),
  map = require('allex_maplowlevellib')(avltreelib, inherit.inherit),
  defermap = require('allex_defermaplowlevellib')(map, q),
  qlib = require('allex_qextlowlevellib')(q, inherit.inherit, timeout.runNext, fifo, map, cleanftions.containerDestroyAll),
  listenablemap = require('allex_listenablemaplowlevellib')(map, eventemitter, inherit.inherit, timeout.runNext, checkftions.isArray, checkftions.defined, checkftions.isDefinedAndNotNull, cleanftions.containerDestroyDeep, cleanftions.arryDestroyAll),
  DIContainer = require('allex_dicontainerlowlevellib')(map, defermap, listenablemap, q, qlib, cleanftions.containerDestroyAll);

var toExport = {
  jsonschema : jsonschema,
  Error: AllexError,
  JSONizingError: AllexJSONizingError,
  NotAnAllexErrorError: NotAnAllexErrorError,
  dummyFunc:functionmanip.dummyFunc,
  functionCopy:functionmanip.functionCopy,
  traverseShallow:objmanip.traverseShallow,
  traverseShallowConditionally:objmanip.traverseShallowConditionally,
  traverse:objmanip.traverse,
  traverseConditionally:objmanip.traverseConditionally,
  extend:objmanip.extend,
  extendWithConcat:objmanip.extendWithConcat,
  extendShallow:objmanip.extendShallow,
  pick:objmanip.pick,
  pickExcept:objmanip.pickExcept,
  inherit:inherit.inherit,
  inheritMethods:inherit.inheritMethods,
  isFunction:checkftions.isFunction,
  isArray:checkftions.isArray,
  isUndef:checkftions.isUndef,
  defined:checkftions.defined,
  isString:checkftions.isString,
  isNumber:checkftions.isNumber,
  isNull: checkftions.isNull,
  isNotNull:checkftions.isNotNull,
  isDefinedAndNotNull:checkftions.isDefinedAndNotNull,
  isBoolean: checkftions.isBoolean,
  isVal:checkftions.isVal,
  isEqual: checkftions.isEqual,
  has: checkftions.has,
  isInteger : checkftions.isInteger,
  Destroyable: destroyables.Destroyable,
  SimpleDestroyable: destroyables.SimpleDestroyable,
  ComplexDestroyable: destroyables.ComplexDestroyable,
  Gettable: props.Gettable,
  Settable: props.Settable,
  Changeable: props.Changeable,
  Listenable: props.Listenable,
  ChangeableListenable: props.ChangeableListenable,
  CLDestroyable: props.CLDestroyable,
  Configurable: props.Configurable,
  CBMapable: props.CBMapable,
  prependToString: stringmanip.prependToString,
  thousandSeparate : stringmanip.thousandSeparate,
  readPropertyFromDotDelimitedString: stringmanip.readPropertyFromDotDelimitedString,
  writePropertyFromDotDelimitedString: stringmanip.writePropertyFromDelimitedString,
  toIndentedJson : stringmanip.toIndentedJson,
  querystring : stringmanip.querystring,
  getMac: maclib.getMac,
  isMac: maclib.isMac,
  initUid: uidlib.init,
  uid: uidlib.uid,
  setImmediate: timeout.setImmediate,
  clearImmediate: timeout.clearImmediate,
  runNext: timeout.runNext,
  destroyASAP: timeout.destroyASAP,
  clearTimeout: timeout.clearTimeout,
  intervals: timeout.intervals,
  DList: require('allex_doublelinkedlistlowlevellib')(dlinkedlistbase, inherit.inherit),
  Fifo: fifo,
  StringBuffer: stringbuffer,
  DeferFifo: deferfifo,
  DeferMap : defermap,
  Map: map,
  SortedList: slist,
  arryDestroyEl: cleanftions.arryDestroyEl,
  arryDestroyAll : cleanftions.arryDestroyAll,
  arryNullEl: cleanftions.arryNullEl,
  arryNullAll:cleanftions.arryNullAll,
  objNullAll: cleanftions.objNullAll,
  objDestroyAll: cleanftions.objDestroyAll,
  containerDestroyAll: cleanftions.containerDestroyAll,
  containerDestroyDeep: cleanftions.containerDestroyDeep,
  HookCollection: eventemitter,
  q: q,
  qlib: qlib,
  isIdentical: require('allex_isidenticallowlevellib')(objmanip.traverseShallowConditionally),
  ListenableMap: listenablemap,
  request: require('allex_httprequestlowlevellib')(objmanip.traverseShallow, checkftions.isFunction, functionmanip.dummyFunc),
  DIContainer : DIContainer,
  moduleRecognition: require('allex_modulerecognitionlowlevellib')(checkftions.isString, checkftions.isFunction, q, qlib),
  capitalize : stringmanip.capitalize
};

module.exports = toExport;
