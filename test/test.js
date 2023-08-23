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
    secondItem: typeof secondItem !== 'undefined' ? secondItem : undefined,
    removedItem: typeof removedItem !== 'undefined' ? removedItem : undefined,
    positives: typeof positives !== 'undefined' ? positives : undefined,
    negatives: typeof negatives !== 'undefined' ? negatives : undefined,
    zeroes: typeof zeroes !== 'undefined' ? zeroes : undefined,
    stretchPositives: typeof stretchPositives !== 'undefined' ? stretchPositives : undefined,
    stretchNegatives: typeof stretchNegatives !== 'undefined' ? stretchNegatives : undefined,
    stretchZeroes: typeof stretchZeroes !== 'undefined' ? stretchZeroes : undefined,
    totalParts: typeof totalParts !== 'undefined' ? totalParts : undefined,
    parts: typeof parts !== 'undefined' ? parts : undefined,
    boxesFilled: typeof boxesFilled !== 'undefined' ? boxesFilled : undefined,
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
  // *************** BASE MODE TESTS ***************
  describe(`partsNeeded variable created and assigned a value of 40`, function () {
    it(`partsNeeded variable created and assigned a value of 40`, function () {
      let { partsNeeded } = testItems;
      expect(partsNeeded, 'Expected partsNeeded to exist').to.exist;
      expect(partsNeeded).to.be.a('number');
      expect(partsNeeded).to.equal(40);
    });
  });

  describe(`supplyChanges variable created and assigned a value of an array of integers`, function () {
    it(`supplyChanges variable created and assigned a value of assigned a value of an array of integers`, function () {
      let { supplyChanges } = testItems;
      expect(supplyChanges,'Expected supplyChanges exist').to.exist;
      expect(supplyChanges).to.be.an('array');
      expect(supplyChanges.every(x => Number.isInteger(x)), 'Expected an array of integers').to.equal(true);
    });
  });

  describe(`secondItem variable created and assigned the second value from the supplyChanges array`, function () {
    it(`secondItem variable created and assigned the second value from the supplyChanges array`, function () {
        let { secondItem, supplyChanges } = testItems;
      expect(secondItem, 'Expected secondItem to exist').to.exist;
      expect(secondItem).to.be.a('number');
      expect(supplyChanges[1], 'Expected the second value in supplyChanges to equal the secondItem variable').to.equal(secondItem)
      expect(secondItem).to.equal(5);
    });
  });

  describe(`The last value inside supplyChanges was removed and assigned to the variable removedItem`, function () {
    it(`The last value inside supplyChanges was removed and assigned to the variable removedItem`, function () {
      let { removedItem, supplyChanges } = testItems;
      expect(removedItem, 'Expected removedItem to exist').to.exist;
      expect(supplyChanges[supplyChanges.length - 1], 'Expected the last value in supplyChanges to not equal the new removedItem variable').to.not.equal(removedItem)
      expect(removedItem).to.equal(11);
    });
  });

  describe(`The number 25 was added to the supplyChanges array`, function () {
    it(`The number 25 was added to the supplyChanges array`, function () {
      let { supplyChanges } = testItems;
      expect(supplyChanges[supplyChanges.length - 1], 'Expected the last value in supplyChanges to be a number').to.be.a('number')
      expect(supplyChanges[supplyChanges.length - 1]).to.equal(25);
    });
  });

  describe(`The positives, negatives, and zeroes arrays contain the correct values`, function () {
    it(`The positives, negatives, and zeroes arrays contain the correct values`, function () {
      let { positives, negatives, zeroes } = testItems;
      expect(positives, 'Expected positives to exist').to.exist;
      expect(negatives, 'Expected negatives to exist').to.exist;
      expect(zeroes, 'Expected zeroes to exist').to.exist;
      expect(positives).to.be.an('array');
      expect(negatives).to.be.an('array');
      expect(zeroes).to.be.an('array');
      expect(positives).to.eql([3, 5, 7, 25]);
      expect(negatives).to.eql([-6]);
      expect(zeroes).to.eql([0]);
    });
  });

  // *************** STRETCH GOAL TESTS ***************
  describe(`STRETCH: The stretchPositives, stretchNegatives, and stretchZeroes arrays contain the correct values`, function () {
    it(`STRETCH: The stretchPositives, stretchNegatives, and stretchZeroes arrays contain the correct values`, function () {
      let { stretchPositives, stretchNegatives, stretchZeroes } = testItems;
      if (stretchPositives === undefined || stretchNegatives === undefined || stretchZeroes === undefined) {
        this.skip();
      } else {
        expect(stretchPositives).to.be.an('array');
        expect(stretchNegatives).to.be.an('array');
        expect(stretchZeroes).to.be.an('array');
        expect(stretchPositives).to.eql([3, 5, 7, 25])
        expect(stretchNegatives).to.eql([-6])
        expect(stretchZeroes).to.eql([0])
      }
    });
  });

  describe(`STRETCH: The value of totalParts is the sum of the numbers inside supplyChanges`, function () {
    it(`STRETCH: The value of totalParts is the sum of the numbers inside supplyChanges`, function () {
      let { totalParts } = testItems;
      if (totalParts === undefined) {
        this.skip();
      } else {
        expect(totalParts).to.be.a('number');
        expect(totalParts).to.equal(34)
      }
    });
  });

  describe(`STRETCH: The values of parts and boxesFilled are calculated correctly`, function () {
    it(`STRETCH: The values of parts and boxesFilled are calculated correctly`, function () {
      let { parts, boxesFilled } = testItems;
      if (parts === undefined || boxesFilled === undefined) {
        this.skip();
      } else {
        expect(parts).to.be.a('number');
        expect(boxesFilled).to.be.a('number');
        expect(parts).to.equal(5)
        expect(boxesFilled).to.equal(81)
      }
    });
  });
});

/**
 * If running the tests in the browser, call mocha.run()
 */
if (typeof window === 'object') {
    mocha.run();
}
