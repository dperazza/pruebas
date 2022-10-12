module.exports = {

    testEnvironment: 'node',
    moduleDirectories: ["node_modules"],
  verbose: true,
  clearMocks: true,
  //rootDir: 'src',
  testRegex: [".*\\.spec\\.js$"],
  moduleFileExtensions: ["js", "json", "ts"],
  collectCoverage: true,
  collectCoverageFrom: ["**/*.(t|j)s"],
  coverageDirectory: "../coverage",
  coveragePathIgnorePatterns: [
      "/node_modules/",
      "/doc",
      "/coverage",
      "/ci",
      "/.github/",     
      'index.jsx',
      'index.ts',
      "jest.config.js" ,
      "handler.ts",        
  ],
  coverageProvider: "v8",
  coverageReporters: ["json", "lcov", "text", "html", "text-summary"],
  coverageThreshold: {
      global: {
          branches: 50,
          functions: 85,
          lines: 85,
          statements: 85,
      },
  },
};
