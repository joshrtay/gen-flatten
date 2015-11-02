/**
 * Imports
 */

import is from '@weo-edu/is'

/**
 * genit
 */

function genit(gen) {
  return function *() {
    let it = is.generator(gen) ? gen : gen()
    let next
    while (!(next = it.next()).done) {
      if (!is.generator(next.value)) {
        yield next.value
      } else {
        yield* genit(next.value)()
      }
    }
  }
}

/**
 * Exports
 */

export default genit
