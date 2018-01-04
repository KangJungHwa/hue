/* global module, test, id_to_windowname,
   windowname_to_id */
/* eslint global-strict: 0, strict: 0 */
'use strict';

module('admin.RelatedObjectLookups');

test('id_to_windowname', function(assert) {
    assert.equal(id_to_windowname('.test'), '__dot__test');
    assert.equal(id_to_windowname('misc-test'), 'misc__dash__test');
});

test('windowname_to_id', function(assert) {
    assert.equal(windowname_to_id('__dot__test'), '.test');
    assert.equal(windowname_to_id('misc__dash__test'), 'misc-test');
});
