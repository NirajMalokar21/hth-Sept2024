import prisma from "../../lib/prisma";
import { describe, it, expect } from "@jest/globals";
import {
    createRequires,
    getAllRequirements,
    getAllNodesRequiredByPreReqNode,
    getAllPreReqNodesbyNode,
    deleteRequires,
} from "../../lib/actions/requiresAction";

jest.mock("../../lib/prisma", () => ({
    requires: {
        create: jest.fn(),
        findMany: jest.fn(),
        deleteMany: jest.fn(),
    },
    node: {
        findMany: jest.fn(),
    },
}));

// Create a new Prisma Client instance

describe("createRequires", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should create a new requires record", async () => {
        (prisma.requires.create as jest.Mock).mockResolvedValue({
            node_id: 2,
            pre_req_node_id: 1,
        });

        const result = await createRequires({ node_id: 2, pre_req_node_id: 1 });

        expect(result).toEqual({ node_id: 2, pre_req_node_id: 1 });
        expect(prisma.requires.create).toHaveBeenCalledWith({
            data: { node_id: 2, pre_req_node_id: 1 },
        });
    });
});

describe("getAllRequirements", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should return all requires records", async () => {
        const requiresRecords = [
            { node_id: 1, pre_req_node_id: 1 },
            { node_id: 2, pre_req_node_id: 2 },
        ];

        (prisma.requires.findMany as jest.Mock).mockResolvedValue(requiresRecords);

        const result = await getAllRequirements();

        expect(result).toEqual(requiresRecords);
        expect(prisma.requires.findMany).toHaveBeenCalledTimes(1);
    });
});

describe("getAllNodesRequiredByPreReqNode", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should return all nodes required by a pre_req_node", async () => {
        const nodes = [{ id: 2, name: "Test Node 2", description: "Test Description 2" }];

        (prisma.node.findMany as jest.Mock).mockResolvedValue(nodes);

        const result = await getAllNodesRequiredByPreReqNode("Test Node 1");

        expect(result).toEqual(nodes);
        expect(prisma.node.findMany).toHaveBeenCalledTimes(1);
    });
});

describe("getAllPreReqNodesbyNode", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should return all pre_req_nodes required by a node", async () => {
        const nodes = [{ id: 1, name: "Test Node 1", description: "Test Description 1" }];

        (prisma.node.findMany as jest.Mock).mockResolvedValue(nodes);

        const result = await getAllPreReqNodesbyNode("Test Node 2");

        expect(result).toEqual(nodes);
        expect(prisma.node.findMany).toHaveBeenCalledTimes(1);
    });
});

describe("deleteRequires", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should delete a requires record", async () => {
        (prisma.requires.deleteMany as jest.Mock).mockResolvedValue({
            node_id: 2,
            pre_req_node_id: 1,
        });

        const result = await deleteRequires({ node_id: 2, pre_req_node_id: 1 });

        expect(result).toEqual({ node_id: 2, pre_req_node_id: 1 });
        expect(prisma.requires.deleteMany).toHaveBeenCalledWith({
            where: { node_id: 2, pre_req_node_id: 1 },
        });
    });
});
