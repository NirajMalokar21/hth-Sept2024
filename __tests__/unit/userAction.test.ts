import prisma from "../../lib/prisma";
import { describe, it, expect } from "@jest/globals";
import { getAllUsers, getUserById, getUsersByName, createUser, deleteUserById } from "../../lib/actions/userAction";

jest.mock("../../lib/prisma", () => ({
    user: {
        findMany: jest.fn(),
        findUnique: jest.fn(),
        create: jest.fn(),
        delete: jest.fn(),
    },
}));

describe("getAllUsers", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should return all users", async () => {
        const users = [
            { id: 1, name: "User 1" },
            { id: 2, name: "User 2" },
        ];

        (prisma.user.findMany as jest.Mock).mockResolvedValue(users);

        const result = await getAllUsers();

        expect(result).toEqual(users);
        expect(prisma.user.findMany).toHaveBeenCalledTimes(1);
    });
});

describe("getUserById", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should return a user by id", async () => {
        const user = { id: 1, name: "User 1" };

        (prisma.user.findUnique as jest.Mock).mockResolvedValue(user);

        const result = await getUserById(1);

        expect(result).toEqual(user);
        expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
    });
});

describe("getUsersByName", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should return a user by name", async () => {
        const users = [{ id: 2, name: "User 2" }];

        (prisma.user.findMany as jest.Mock).mockResolvedValue(users);

        const result = await getUsersByName("User 2");

        expect(result).toEqual(users);
        expect(prisma.user.findMany).toHaveBeenCalledWith({ where: { name: "User 2" } });
    });
});

describe("createUser", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should create a new user", async () => {
        (prisma.user.create as jest.Mock).mockResolvedValue({
            id: 1,
            name: "User 1",
        });

        const result = await createUser({ id: 1, name: "User 1" });

        expect(result).toEqual({ id: 1, name: "User 1" });
        expect(prisma.user.create).toHaveBeenCalledWith({
            data: { id: 1, name: "User 1" },
        });
    });
});

describe("deleteUserById", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should delete a user by id", async () => {
        const user = { id: 1, name: "User 1" };

        (prisma.user.delete as jest.Mock).mockResolvedValue(user);

        const result = await deleteUserById(1);

        expect(result).toEqual(user);
        expect(prisma.user.delete).toHaveBeenCalledWith({ where: { id: 1 } });
    });
});
