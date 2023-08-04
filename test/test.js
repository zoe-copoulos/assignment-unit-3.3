/**
 * We have to do a bit of work upfront to allow the tests
 * to run in the browser and in Node.js. 
 */
let assert, expect;
let testItems = {};
if (typeof window === 'object') {
    // Run tests in browser
    assert = chai.assert;
    expect = chai.expect;
    mocha.setup('bdd');
    testItems = {
        // Variables
        partsNeeded: typeof partsNeeded !== 'undefined' ? partsNeeded : undefined,
        supplyChanges: typeof supplyChanges !== 'undefined' ? supplyChanges : undefined,
    };
} else {
    // Run tests in Node.js
    assert = require('assert');
    expect = require('chai').expect;
    testItems = require('../assignment/scripts/part-supply.js');
}

/**
 * Put all tests within this describe.
 */
describe('Automated tests', function () {
  describe(`partsNeeded variable instantiated and assigned a value of 40`, function () {
    it(`partsNeeded variable instantiated and assigned a value of 40`, function () {
        let { partsNeeded } = testItems;
        expect(partsNeeded, 'Expected partsNeeded be exist').to.exist;
        expect(partsNeeded).to.be.a('number');
        expect(partsNeeded).to.equal(40);
    });
});
});

/**
 * If running the tests in the browser, call mocha.run()
 */
if (typeof window === 'object') {
    mocha.run();
}
