/**
 * Imports
 */

import test from 'tape'
import genit from '../src'

/**
 * Tests
 */

test('should flatten', (t) => {

  let it = genit(parent)()

  t.equal(it.next().value, 'parent start')
  t.equal(it.next().value, 'child 1')
  t.equal(it.next().value, 'child 2')
  t.equal(it.next().value, 'parent end')

  t.end()
})

function *child1 () {
  yield 'child 1'
}

function *child2 () {
  yield 'child 2'
}

function *parent () {
  yield 'parent start'
  yield child1()
  yield child2()
  yield 'parent end'
}
