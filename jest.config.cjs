module.exports = {
  roots: ['<rootDir>/src/tests'],
  transform: {
    '\\.ts$': 'ts-jest',
  },
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};
