module.exports = {
    preset: "ts-jest", // Use ts-jest to handle TypeScript and JSX
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["@testing-library/jest-dom"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest", // Use ts-jest to transpile TypeScript and JSX
    },
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
        "^@/(.*)$": "<rootDir>/$1", // Map @ to project root directory
    },
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
    testMatch: ["<rootDir>/components/ui/__tests__/*.test.tsx"],
};
