module.exports = {
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["@testing-library/jest-dom"],
    transform: {
        "^.+\\.(ts|tsx)$": "babel-jest", // Tell Jest to use Babel for .ts/.tsx files
    },
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
        "^@/(.*)$": "<rootDir>/$1", // This maps @ to your project's root directory
    },
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
};
