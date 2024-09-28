import prisma from "../../lib/prisma";
import { describe, it, expect } from "@jest/globals";
import {
    getAllNodes,
    getNodeById,
    getNodeByTitle,
    getNodeByDescription,
    createNode,
    deleteNodeById,
} from "../../lib/actions/nodeAction";

jest.mock("../../lib/prisma", () => ({
    node: {
        findMany: jest.fn(),
        findUnique: jest.fn(),
        create: jest.fn(),
        delete: jest.fn(),
    },
}));

describe("getAllNodes", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should return all nodes", async () => {
        const nodes = [
            { id: 1, name: "Node 1", description: "Description 1" },
            { id: 2, name: "Node 2", description: "Description 2" },
        ];

        (prisma.node.findMany as jest.Mock).mockResolvedValue(nodes);

        const result = await getAllNodes();

        expect(result).toEqual(nodes);
        expect(prisma.node.findMany).toHaveBeenCalledTimes(1);
    });
});

describe("getNodeById", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should return a node by id", async () => {
        const node = { id: 1, name: "Node 1", description: "Description 1" };

        (prisma.node.findUnique as jest.Mock).mockResolvedValue(node);

        const result = await getNodeById(1);

        expect(result).toEqual(node);
        expect(prisma.node.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
    });
});

describe("getNodeByTitle", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should return a node by title", async () => {
        const node = { id: 1, name: "Node 1", description: "Description 1" };

        (prisma.node.findMany as jest.Mock).mockResolvedValue(node);

        const result = await getNodeByTitle("Node 1");

        expect(result).toEqual(node);
        expect(prisma.node.findMany).toHaveBeenCalledWith({ where: { name: "Node 1" } });
    });
});

describe("getNodeByDescription", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should return a node by description", async () => {
        const nodes = { id: 1, name: "Node 1", description: "Description 1" };

        (prisma.node.findMany as jest.Mock).mockResolvedValue(nodes);

        const result = await getNodeByDescription("Description 1");

        expect(result).toEqual(nodes);
        expect(prisma.node.findMany).toHaveBeenCalledWith({ where: { description: "Description 1" } });
    });
});

describe("createNode", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should create a node", async () => {
        (prisma.node.create as jest.Mock).mockResolvedValue({
            id: 1,
            name: "Node 1",
            description: "Description 1",
        });

        const result = await createNode({
            id: 1,
            name: "Node 1",
            description: "Description 1",
        });

        expect(result).toEqual({ id: 1, name: "Node 1", description: "Description 1" });
        expect(prisma.node.create).toHaveBeenCalledWith({
            data: { id: 1, name: "Node 1", description: "Description 1" },
        });
    });
});

describe("deleteNodeById", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should delete a node by id", async () => {
        (prisma.node.delete as jest.Mock).mockResolvedValue({ id: 1 });

        const result = await deleteNodeById(1);

        expect(result).toEqual({ id: 1 });
        expect(prisma.node.delete).toHaveBeenCalledWith({ where: { id: 1 } });
    });
});
