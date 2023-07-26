const jestConfig = {
  transform: {
    '^.+\\.(ts|js)x?$': '<rootDir>/jest.transform.js'
  }
};

module.exports = jestConfig;
