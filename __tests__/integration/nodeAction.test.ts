import prisma from "../../lib/prisma";
import { beforeAll, afterAll, describe, it, expect } from "@jest/globals";
import {
    getAllNodes,
    getNodeById,
    getNodeByTitle,
    getNodeByDescription,
    createNode,
    deleteNodeById,
} from "../../lib/actions/nodeAction";

describe("Integration Test for nodeAction", () => {
    beforeAll(() => {});
    afterAll(() => {
        prisma.$disconnect();
    });
    it("should create some nodes", async () => {
        const node1 = await createNode({ id: 1001, name: "Node 1", description: "Description 1" });
        const node2 = await createNode({ id: 1002, name: "Node 2", description: "Description 2" });

        expect(node1).toEqual({ id: 1001, name: "Node 1", description: "Description 1" });
        expect(node2).toEqual({ id: 1002, name: "Node 2", description: "Description 2" });
    });

    it("should return all nodes", async () => {
        const result = await getAllNodes();

        expect(result).toHaveLength(17);
    });

    it("should return a node by id", async () => {
        const node = { id: 1001, name: "Node 1", description: "Description 1" };

        const result = await getNodeById(1001);

        expect(result).toEqual(node);
    });

    it("should return a node by title", async () => {
        const nodes = [{ id: 1001, name: "Node 1", description: "Description 1" }];

        const result = await getNodeByTitle("Node 1");

        expect(result).toEqual(nodes);
    });

    it("should return a node by description", async () => {
        const nodes = [{ id: 1001, name: "Node 1", description: "Description 1" }];

        const result = await getNodeByDescription("Description 1");

        expect(result).toEqual(nodes);
    });

    it("should delete a node by id", async () => {
        const node1 = { id: 1001, name: "Node 1", description: "Description 1" };

        const result = await deleteNodeById(1001);

        expect(result).toEqual(node1);

        const node2 = { id: 1002, name: "Node 2", description: "Description 2" };

        const result2 = await deleteNodeById(1002);

        expect(result2).toEqual(node2);
    });
});
