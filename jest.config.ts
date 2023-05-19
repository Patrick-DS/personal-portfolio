import type { Config } from "jest"

const JestConfig: Config = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    transform: {
        "^.+\\.tsx?$": "babel-jest",
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    collectCoverageFrom: [
        "src/**/*.{ts,tsx}",
        "!src/**/*.d.ts",
        "!src/**/index.ts",
    ],
    coveragePathIgnorePatterns: [
        "stories/",
    ],
    globals: {
        "ts-jest": {
            tsconfig: "<rootDir>/tsconfig.json",
        },
    },
}

export default JestConfig