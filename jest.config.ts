/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jest-environment-jsdom",

  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^/public/img/(.*)$": "<rootDir>/public/img/$1",
  },
  transform: {
    "^.+\\.(svg)$": "<rootDir>/node_modules/jest-transform-stub",
    ".[jt]sx?$": "babel-jest",
  },
};

export default config;
