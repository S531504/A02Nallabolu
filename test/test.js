QUnit.test('Testing the new add function with four sets of inputs', function (assert) {
    assert.equal(weightConverter(2), 907.1940488070397, "works with one positive integers");
    assert.equal(weightConverter(-3), -1360.7910732105597, "works with one negative integers");
    assert.equal(weightConverter(2.5), 1133.9925610087996, "works with one decimal numbers");
    assert.equal(weightConverter(null), 0, "works with a null number");
});