import test from 'ava'
import gulpFlow from '..'

// TODO: Implement module test
test('<test-title>', t => {
  const err = t.throws(() => gulpFlow(100), TypeError)
  t.is(err.message, 'Expected a string, got number')

  t.is(gulpFlow('w'), 'w@zce.me')
  t.is(gulpFlow('w', { host: 'wedn.net' }), 'w@wedn.net')
})
