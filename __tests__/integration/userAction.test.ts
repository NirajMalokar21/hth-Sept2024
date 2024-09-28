import prisma from "../../lib/prisma";
import { describe, it, expect } from "@jest/globals";
import { getAllUsers, getUserById, getUsersByName, createUser, deleteUserById } from "../../lib/actions/userAction";

describe("Integration test for users", () => {
    afterAll(() => {
        prisma.$disconnect();
    });
    it("should create a user", async () => {
        const user = await createUser({ id: 1001, name: "Test User 1" });

        expect(user).toEqual({ id: 1001, name: "Test User 1" });
    });

    it("should return all users", async () => {
        const result = await getAllUsers();

        expect(result).toHaveLength(2);
    });

    it("should return a user by id", async () => {
        const user = { id: 1001, name: "Test User 1" };

        const result = await getUserById(1001);

        expect(result).toEqual(user);
    });

    it("should return a user by name", async () => {
        const users = [{ id: 1001, name: "Test User 1" }];

        const result = await getUsersByName("Test User 1");

        expect(result).toEqual(users);
    });

    it("should delete a user by id", async () => {
        const user = { id: 1001, name: "Test User 1" };

        const result = await deleteUserById(1001);

        expect(result).toEqual(user);
    });
});
