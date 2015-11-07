/**
 * Imports
 */

import is from '@weo-edu/is'

/**
 * genit
 */

function flatten(gen) {
  return function * (...args) {
    let it = is.generator(gen) ? gen : gen(...args)
    let next = it.next()
    let arg
    while (!next.done) {
      try {
        if (!is.generator(next.value)) {
          arg = yield next.value
        } else {
          arg = yield yield* flatten(next.value)(arg)
        }
        next = it.next(arg)
      } catch (e) {
        next = it.throw(e)
      }
    }
    return next.value
  }
}

/**
 * Exports
 */

export default flatten
