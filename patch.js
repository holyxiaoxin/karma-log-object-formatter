// Patch this into your global /karma/static/karma.js file

var stringify = function stringify (obj, depth, keyLength) {
  if (depth === 0) {
    return '...'
  }

  if (obj === null) {
    return 'null'
  }

  switch (typeof obj) {
    case 'string':
      return "'" + obj + "'"
    case 'undefined':
      return 'undefined'
    case 'function':
      return obj.toString().replace(/\{[\s\S]*\}/, '{ ... }')
    case 'boolean':
      return obj ? 'true' : 'false'
    case 'object':
      var strs = []
      if (instanceOf(obj, 'Array')) {
        strs.push('[')
        for (var i = 0, ii = obj.length; i < ii; i++) {
          if (i) {
            strs.push(', \n')
          }
          strs.push(stringify(obj[i], depth - 1))
        }
        strs.push(']')
      } else if (instanceOf(obj, 'Date')) {
        return obj.toString()
      } else if (instanceOf(obj, 'Text')) {
        return obj.nodeValue
      } else if (instanceOf(obj, 'Comment')) {
        return '<!--' + obj.nodeValue + '-->'
      } else if (obj.outerHTML) {
        return obj.outerHTML
      } else if (obj.tagName || obj.nodeName) {
        return serialize(obj)
      } else {
        var constructor = 'Object'
        if (obj.constructor && typeof obj.constructor === 'function') {
          constructor = obj.constructor.name
        }

        // strs.push(constructor)
        strs.push("{ ")
        var first = true
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            if (first) {
              first = false
            } else {
              // ********************************************
              // *** format line for every key in object  ***
              // *** works up to depth 3 only             ***
              // ********************************************
              var objSeperator = ", "
              if(depth === 2 || depth === 3) {
                objSeperator += "\n  "
                if(depth === 2) {
                  objSeperator += "  "
                  if(keyLength !== undefined) {
                    objSeperator += new Array(keyLength+3).join(" ")
                  }
                }
              }
              strs.push(objSeperator)
            }

            strs.push(key + ': ' + stringify(obj[key], depth - 1, key.length))
          }
        }
        strs.push(' }')
      }
      return strs.join('')
    default:
      return obj
  }
}
