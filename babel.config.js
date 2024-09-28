module.exports = {
    presets: [
        "@babel/preset-env",
        ["@babel/preset-react", { runtime: "automatic" }], // Enables React 17+ JSX transform
        "@babel/preset-typescript",
    ],
};
