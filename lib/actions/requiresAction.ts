import prisma from "../prisma";

export async function getAllRequirements() {
    return await prisma.requires.findMany();
}

//Get all required nodes for a specific node
export async function getAllPreReqNodesbyNode(name: string) {
    //first, find id of node
    const node = await prisma.node.findMany({
        where: { name },
    });
    const node_id = node[0].id;
    //Then, find list of pre_req_node_ids in the "requires" table
    const pre_req_node_ids = await prisma.requires.findMany({
        where: { node_id },
    });
    //Then find all the nodes with ids from pre_req_node_ids list
    return await prisma.node.findMany({
        where: { id: { in: pre_req_node_ids.map((requires) => requires.pre_req_node_id) } },
    });
}

//Get all nodes that require a specific node
export async function getAllNodesRequiredByPreReqNode(name: string) {
    //first, find id of node
    const preReqNode = await prisma.node.findMany({
        where: { name },
    });
    const pre_req_node_id = preReqNode[0].id;
    //Then, find list of node_ids in the "requires" table where "node_id"=node
    const node_ids = await prisma.requires.findMany({
        where: { pre_req_node_id },
    });
    //Then find all nodes with ids from node_ids list
    return await prisma.node.findMany({
        where: { id: { in: node_ids.map((requires) => requires.node_id) } },
    });
}
