'use strict';
var theLib = {},
  jsonschema = require('jsonschema'),
  checkftions = require('allex_checkslowlevellib'),
  cleanftions = require('allex_destructionlowlevellib')(checkftions.isFunction, checkftions.isArray, checkftions.isNumber, checkftions.isString),
  inherit = require('allex_inheritlowlevellib'),
  AllexError = require('allex_errorlowlevellib')(inherit.inherit),
  AllexJSONizingError = require('allex_jsonizingerrorlowlevellib')(AllexError,inherit.inherit),
  NotAnAllexErrorError = require('allex_notanallexerrorerrorlowlevellib')(AllexError,inherit.inherit),
  slist = require('allex_singlelinkedlistlowlevellib')(inherit.inherit),
  stringmanip = require('allex_stringmanipulationlowlevellib')(checkftions.isString, checkftions.isNull, AllexJSONizingError),
  objmanip = require('allex_objectmanipulationlowlevellib')(checkftions),
  functionmanip = require('allex_functionmanipulationlowlevellib')(inherit.inherit),
  dlinkedlistbase = require('allex_doublelinkedlistbaselowlevellib')(inherit.inherit),
  DList = require('allex_doublelinkedlistlowlevellib')(dlinkedlistbase, inherit.inherit),
  fifo = require('allex_fifolowlevellib')(dlinkedlistbase, inherit.inherit),
  stringbuffer = require('allex_stringbufferlowlevellib')(fifo),
  timeout = require('allex_timeoutlowlevellib')(checkftions.isFunction, fifo, theLib),
  eventemitter = require('allex_eventemitterlowlevellib')(dlinkedlistbase, inherit.inherit, checkftions.isFunction, checkftions.isArrayOfFunctions),
  destroyables = require('allex_destroyablemixinslowlevellib')(inherit, functionmanip.dummyFunc, eventemitter),
  props = require('allex_propertymixinslowlevellib')(inherit, functionmanip.dummyFunc, eventemitter, objmanip.extend, destroyables.Destroyable, jsonschema, stringmanip.readPropertyFromDotDelimitedString, checkftions.isFunction, checkftions.isArray, stringmanip.writePropertyFromDelimitedString),
  q = require('allex_qlowlevellib')(timeout.runNext, checkftions.isArray, checkftions.isFunction, inherit.inherit, functionmanip.dummyFunc, eventemitter),
  deferfifo = require('allex_deferfifolowlevellib')(dlinkedlistbase, inherit.inherit, q),
  uidlib = require('allex_uidlowlevellib')(q, theLib),
  avltreelib = require('allex_avltreelowlevellib')(dlinkedlistbase, inherit.inherit),
  map = require('allex_maplowlevellib')(avltreelib, inherit.inherit, slist),
  defermap = require('allex_defermaplowlevellib')(map, q),
  qlib = require('allex_qextlowlevellib')(q, inherit.inherit, timeout.runNext, fifo, map, cleanftions.containerDestroyAll),
  listenablemap = require('allex_listenablemaplowlevellib')(map, eventemitter, inherit.inherit, timeout.runNext, checkftions.isArray, checkftions.defined, checkftions.isDefinedAndNotNull, checkftions.isEqual, cleanftions.containerDestroyDeep, cleanftions.arryDestroyAll),
  DIContainer = require('allex_dicontainerlowlevellib')(map, defermap, listenablemap, q, qlib, cleanftions.containerDestroyAll),
  JsonSchema = require('allex_jsonschemalowlevellib')(jsonschema, objmanip, AllexJSONizingError);

var shouldClose = new eventemitter();

function getMac () {
  return '';
}
function isMac () {
  return true;
}
function pid () {
  return 0;
}
function exit (code) {}

function now () {
  return Date.now();
}

theLib.jsonschema = jsonschema;
theLib.Error= AllexError;
theLib.JSONizingError= AllexJSONizingError;
theLib.NotAnAllexErrorError= NotAnAllexErrorError;
theLib.dummyFunc=functionmanip.dummyFunc;
theLib.functionCopy=functionmanip.functionCopy;
theLib.traverseShallow=objmanip.traverseShallow;
theLib.traverseShallowConditionally=objmanip.traverseShallowConditionally;
theLib.traverse=objmanip.traverse;
theLib.traverseConditionally=objmanip.traverseConditionally;
theLib.extend=objmanip.extend;
theLib.extendWithConcat=objmanip.extendWithConcat;
theLib.extendShallow=objmanip.extendShallow;
theLib.pick=objmanip.pick;
theLib.pickExcept=objmanip.pickExcept;
theLib.reduceShallow=objmanip.reduceShallow;
theLib.inherit=inherit.inherit;
theLib.inheritMethods=inherit.inheritMethods;
theLib.isFunction=checkftions.isFunction;
theLib.isArray=checkftions.isArray;
theLib.isUndef=checkftions.isUndef;
theLib.defined=checkftions.defined;
theLib.isDefinedAndNotNull=checkftions.isDefinedAndNotNull;
theLib.isString=checkftions.isString;
theLib.isNumber=checkftions.isNumber;
theLib.isNull= checkftions.isNull;
theLib.isNotNull=checkftions.isNotNull;
theLib.isBoolean= checkftions.isBoolean;
theLib.isVal=checkftions.isVal;
theLib.isEqual= checkftions.isEqual;
theLib.has= checkftions.has;
theLib.isInteger = checkftions.isInteger;
theLib.isArrayOfHaving = checkftions.isArrayOfHaving;
theLib.isArrayOfStrings = checkftions.isArrayOfStrings;
theLib.isArrayOfNumbers = checkftions.isArrayOfNumbers;
theLib.isArrayOfFunctions = checkftions.isArrayOfFunctions;
theLib.isArrayOfObjectsWithProperty = checkftions.isArrayOfObjectsWithProperty;
theLib.isArrayOfObjectsWithProperties = checkftions.isArrayOfObjectsWithProperties;
theLib.isNonEmptyString = checkftions.isNonEmptyString;
theLib.isNonEmptyArray = checkftions.isNonEmptyArray;
theLib.Destroyable= destroyables.Destroyable;
theLib.SimpleDestroyable= destroyables.SimpleDestroyable;
theLib.ComplexDestroyable= destroyables.ComplexDestroyable;
theLib.Gettable= props.Gettable;
theLib.Settable= props.Settable;
theLib.Changeable= props.Changeable;
theLib.Listenable= props.Listenable;
theLib.ChangeableListenable= props.ChangeableListenable;
theLib.CLDestroyable= props.CLDestroyable;
theLib.Configurable= props.Configurable;
theLib.CBMapable= props.CBMapable;
theLib.prependToString= stringmanip.prependToString;
theLib.thousandSeparate = stringmanip.thousandSeparate;
theLib.readPropertyFromDotDelimitedString= stringmanip.readPropertyFromDotDelimitedString;
theLib.writePropertyFromDotDelimitedString= stringmanip.writePropertyFromDelimitedString;
theLib.toIndentedJson = stringmanip.toIndentedJson;
theLib.joinStringsWith = stringmanip.joinStringsWith;
theLib.querystring = stringmanip.querystring;
theLib.getMac= getMac;
theLib.isMac= isMac;
theLib.initUid= uidlib.init;
theLib.uid= uidlib.uid;
theLib.setImmediate= timeout.setImmediate;
theLib.clearImmediate= timeout.clearImmediate;
theLib.runNext= timeout.runNext;
theLib.destroyASAP= timeout.destroyASAP;
theLib.clearTimeout= timeout.clearTimeout;
theLib.intervals= timeout.intervals;
theLib.DList= DList;
theLib.Fifo= fifo;
theLib.StringBuffer= stringbuffer;
theLib.DeferFifo= deferfifo;
theLib.DeferMap = defermap;
theLib.Map= map;
theLib.SortedList= slist;
theLib.arryDestroyEl= cleanftions.arryDestroyEl;
theLib.arryDestroyAll = cleanftions.arryDestroyAll;
theLib.arryNullEl= cleanftions.arryNullEl;
theLib.arryNullAll=cleanftions.arryNullAll;
theLib.objNullAll= cleanftions.objNullAll;
theLib.objDestroyAll= cleanftions.objDestroyAll;
theLib.containerDestroyAll= cleanftions.containerDestroyAll;
theLib.containerDestroyDeep= cleanftions.containerDestroyDeep;
theLib.HookCollection= eventemitter;
theLib.q= q;
theLib.qlib= qlib;
theLib.isIdentical= require('allex_isidenticallowlevellib')(objmanip.traverseShallowConditionally);
theLib.ListenableMap= listenablemap;
theLib.request= require('allex_httprequestlowlevellib')(objmanip.traverseShallow, checkftions.isFunction, functionmanip.dummyFunc);
theLib.DIContainer = DIContainer;
theLib.moduleRecognition= require('allex_modulerecognitionlowlevellib')(checkftions.isString, checkftions.isFunction, q, qlib);
theLib.capitalize = stringmanip.capitalize;
theLib.shouldClose = shouldClose;
theLib.now = now;
theLib.pid = pid;
theLib.exit = exit;
theLib.jsonSchemaValidateToErrors = JsonSchema.jsonSchemaValidateToErrors;
theLib.jsonSchemValidateToJsonizedErrorThrow = JsonSchema.jsonSchemValidateToJsonizedErrorThrow;
theLib.allexSpecToJsonSchema = JsonSchema.allexSpecToJsonSchema;

module.exports = theLib;
