import prisma from "../../lib/prisma";
import { beforeAll, afterAll, describe, it, expect } from "@jest/globals";
import {
    createRequires,
    getAllRequirements,
    getAllNodesRequiredByPreReqNode,
    getAllPreReqNodesbyNode,
    deleteRequires,
} from "../../lib/actions/requiresAction";

import { createNode, deleteNodeById } from "../../lib/actions/nodeAction";
import { createUser, deleteUserById } from "../../lib/actions/userAction";

// Create a new Prisma Client instance

describe("Requiremenets Integration Test", () => {
    beforeAll(async () => {
        //make 2 nodes
        await createNode({ id: 1001, name: "Node 1", description: "Description 1" });
        await createNode({ id: 1002, name: "Node 2", description: "Description 2" });

        //make 2 users
        await createUser({ id: 1001, name: "Test User 1" });
        await createUser({ id: 1002, name: "Test User 2" });
    });
    afterAll(async () => {
        //delete the nodes
        await deleteNodeById(1001);
        await deleteNodeById(1002);

        //delete the users
        await deleteUserById(1001);
        await deleteUserById(1002);

        prisma.$disconnect();
    });

    it("should create a requires record", async () => {
        const requires = await createRequires({ node_id: 1002, pre_req_node_id: 1001 });

        expect(requires).toEqual({ node_id: 1002, pre_req_node_id: 1001 });
    });

    it("should return all requires records", async () => {
        const result = await getAllRequirements();

        expect(result).toHaveLength(15);
    });

    it("should return all nodes required by a pre_req_node", async () => {
        const nodes = await getAllNodesRequiredByPreReqNode("Node 1");

        expect(nodes).toHaveLength(1);
    });

    it("should return all pre_req_nodes by node", async () => {
        const nodes = await getAllPreReqNodesbyNode("Node 2");

        expect(nodes).toHaveLength(1);
    });

    it("should delete a requires record", async () => {
        const requires = { node_id: 1002, pre_req_node_id: 1001 };

        const result = await deleteRequires(requires);

        expect(result).toEqual({ count: 1 });
    });
});
