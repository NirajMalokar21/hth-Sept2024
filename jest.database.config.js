module.exports = {
    preset: "ts-jest", // Use ts-jest preset for TypeScript
    testEnvironment: "node",
    setupFilesAfterEnv: ["@testing-library/jest-dom"],
    transform: {
        "^.+\\.(ts|tsx)$": "babel-jest", // Tell Jest to use Babel for .ts/.tsx files
    },
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
        "^@/(.*)$": "<rootDir>/$1", // This maps @ to your project's root directory
    },
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    collectCoverage: true, // Enable code coverage
    collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}", // Specify files to collect coverage from
        "!src/**/*.d.ts", // Ignore TypeScript declaration files
    ],
    testMatch: ["<rootDir>/__tests__/**/*.test.ts"],
};
