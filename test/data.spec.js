require('../src/data.js');
/*
describe('dataLovers', () => {

  it('debería ser un objeto', () => {
    expect(typeof dataLovers).toBe('object');
  });*/

  describe('filterData', () => {
    it('is a function', () => {
      expect(typeof dataLovers.filterData).toBe('function');
    });

    it('returns `filterData`', () => {
      expect(dataLovers.filterData()).toBe('filterData');
    });
  });

  describe ('sortData', () => {
    it ('is a function', () => {
      expect (typeof dataLovers.sortData).toBe('function');
    });

    it('returns `sortData`', () => {
      expect(dataLovers.sortData()).toBe('sortData');
    });
  });

  describe ('computeStats', () => {
    it ('is a function', () => {
      expect (typeof dataLovers.computeStats).toBe('function');
    });

    it('returns `computeStats`', () => {
      expect(dataLovers.computeStats()).toBe('computeStats');
    });
  });
/*
});


require('../src/data.js');


describe('example', () => {
  it('is a function', () => {
    expect(typeof example.example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example.example()).toBe('example');
  });
});

describe ('filtrado', () => {
  it ('is a function', () => {
    expect (typeof example.filtrado).toBe('function');
  });

  it('returns `filtrado`', () => {
  expect(example.filtrado()).toBe('filtrado');
  });
});
*/