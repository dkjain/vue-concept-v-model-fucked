import _ from "lodash";
//Own Util
export function findInObj(obj, needle) {
  for (var key in obj) {
    var val = obj[key];

    //if Item is an Array
    if (val instanceof Array) {
      let retVal = findInArray(val, needle, obj);
      if (retVal) return retVal;
    }

    //If Item is an Object & NOT EMPTY & NOT an Array
    if (val instanceof Object && !_.isEmpty(val) && !(val instanceof Array)) {
      let retVal = findInObj(val, needle);
      if (retVal) return retVal;
    }

    //If Item is `anything`other than Array/Object
    if (val == needle) return obj;
  }

  //If Item NOT FOUND in current Array/Object
  return false;
}

export function findInArray(arr, needle, obj) {
  for (var item of arr) {
    //if item is an array
    if (item instanceof Array) {
      let retVal = findInArray(item, needle, obj);
      if (retVal) return retVal;
    }

    //If Item is an Object & NOT EMPTY & NOT an Array
    if (
      item instanceof Object &&
      !_.isEmpty(item) &&
      !(item instanceof Array)
    ) {
      let retVal = findInObj(item, needle);
      if (retVal) return retVal;
    }

    //If Item is `anything`other than Array/Object
    if (item == needle) return obj;
  }

  //If Item NOT FOUND in current Array/Object
  return false;
}
