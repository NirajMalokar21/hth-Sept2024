module.exports = {
    preset: "ts-jest", // Use ts-jest preset for TypeScript
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"], // Ignore these folders
    moduleNameMapper: {
        "\\.(css|scss)$": "identity-obj-proxy", // Mock styles
    },
    collectCoverage: true, // Enable code coverage
    collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}", // Specify files to collect coverage from
        "!src/**/*.d.ts", // Ignore TypeScript declaration files
    ],
};
