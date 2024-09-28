import prisma from "../../lib/prisma";

import {
    createCompleted,
    getAllCompleted,
    getNodesByUser,
    getUsersByNodeCompleted,
    deleteCompleted,
} from "../../lib/actions/completedAction";

import { createUser, deleteUserById } from "../../lib/actions/userAction";
import { createNode, deleteNodeById } from "../../lib/actions/nodeAction";

describe("Integration test for completed", () => {
    beforeAll(async () => {
        await createUser({ id: 1001, name: "Test User 1" });
        await createUser({ id: 1002, name: "Test User 2" });
        await createNode({ id: 1001, name: "Node 1", description: "Description 1" });
        await createNode({ id: 1002, name: "Node 2", description: "Description 2" });
    });
    afterAll(async () => {
        await deleteUserById(1001);
        await deleteUserById(1002);
        await deleteNodeById(1001);
        await deleteNodeById(1002);
        prisma.$disconnect();
    });

    it("should create a new completed record", async () => {
        const completed = await createCompleted({ user_id: 1001, node_id: 1001, grade: 95 });

        expect(completed).toEqual({ user_id: 1001, node_id: 1001, grade: 95 });
    });

    it("should return all completed records", async () => {
        const result = await getAllCompleted();

        expect(result).toHaveLength(1);
    });

    it("should return nodes by user", async () => {
        const nodes = await getNodesByUser("Test User 1");

        expect(nodes).toHaveLength(1);
    });

    it("should return users by node completed", async () => {
        const users = await getUsersByNodeCompleted("Node 1");

        expect(users).toHaveLength(1);
    });

    it("should delete a completed record", async () => {
        const completed = { user_id: 1001, node_id: 1001, grade: 95 };

        const result = await deleteCompleted(completed);

        expect(result).toEqual({ count: 1 });
    });
});
