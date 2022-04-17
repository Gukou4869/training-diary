import type { Config } from "@jest/types";
import nextJest from "next/jest";

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: "./",
});

const config: Config.InitialOptions = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    roots: ["<rootDir>/"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1", // 追加
    },
    testEnvironment: "jest-environment-jsdom",
};

export default createJestConfig(config);
