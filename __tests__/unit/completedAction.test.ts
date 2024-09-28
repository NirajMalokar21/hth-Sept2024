import prisma from "../../lib/prisma";

import {
    createCompleted,
    getAllCompleted,
    getNodesByUser,
    getUsersByNodeCompleted,
    deleteCompleted,
} from "../../lib/actions/completedAction";

jest.mock("../../lib/prisma", () => ({
    completed: {
        create: jest.fn(),
        findMany: jest.fn(),
        deleteMany: jest.fn(),
    },
    user: {
        findUnique: jest.fn(),
        findMany: jest.fn(),
    },
    node: {
        findMany: jest.fn(),
    },
}));

describe("createCompleted", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should create a new completed record", async () => {
        (prisma.user.findUnique as jest.Mock).mockResolvedValue({
            id: 1,
            name: "Test User",
        });

        (prisma.completed.create as jest.Mock).mockResolvedValue({
            user_id: 1,
            node_id: 1,
            grade: 95,
        });

        const result = await createCompleted({ user_id: 1, node_id: 1, grade: 95 });

        expect(result).toEqual({ user_id: 1, node_id: 1, grade: 95 });
        expect(prisma.completed.create).toHaveBeenCalledWith({
            data: { user_id: 1, node_id: 1, grade: 95 },
        });
    });
});

describe("getAllCompleted", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should return all completed records", async () => {
        const completedRecords = [
            { user_id: 1, node_id: 1, grade: 85 },
            { user_id: 2, node_id: 2, grade: 90 },
        ];

        (prisma.completed.findMany as jest.Mock).mockResolvedValue(completedRecords);

        const result = await getAllCompleted();

        expect(result).toEqual(completedRecords);
        expect(prisma.completed.findMany).toHaveBeenCalledTimes(1);
    });
});

describe("getNodesByUser", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should return all nodes completed by the given user", async () => {
        const userName = "Test User 1";
        const nodes = [{ id: 1, name: "Test Node 1", description: "Test Description 1" }];

        (prisma.node.findMany as jest.Mock).mockResolvedValue(nodes);

        const result = await getNodesByUser(userName);

        expect(result).toEqual(nodes);
    });
});

describe("getUsersByNodeCompleted", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should return all users who have completed the given node", async () => {
        const nodeName = "Test Node 1";
        const users = [{ id: 1, name: "Test User" }];

        (prisma.user.findMany as jest.Mock).mockResolvedValue(users);

        const result = await getUsersByNodeCompleted(nodeName);

        expect(result).toEqual(users);
    });
});

describe("deleteCompleted", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should delete a completed record", async () => {
        const deleteArgs = { user_id: 1, node_id: 1, grade: 85 };

        (prisma.completed.deleteMany as jest.Mock).mockResolvedValue({ count: 1 });

        const result = await deleteCompleted(deleteArgs);

        expect(result).toEqual({ count: 1 });
    });
});
