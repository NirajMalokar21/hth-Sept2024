import prisma from "../prisma";

export async function getAllRequirements() {
    return await prisma.requires.findMany();
}

//Get all required nodes for a specific node
export async function getAllPreReqNodesbyNode(name: string) {
    return await prisma.node.findMany({
        where: {
            requiredBy: {
                some: {
                    Node: {
                        name,
                    },
                },
            },
        },
    });
}

//Get all nodes that require a specific node
export async function getAllNodesRequiredByPreReqNode(name: string) {
    return await prisma.node.findMany({
        where: {
            requiredBy: {
                some: {
                    PreReqNode: {
                        name,
                    },
                },
            },
        },
    });
}

//Create function
export async function createRequires(data: { node_id: number; pre_req_node_id: number }) {
    return await prisma.requires.create({
        data,
    });
}

//Delete function
export async function deleteRequires(data: { node_id: number; pre_req_node_id: number }) {
    return await prisma.requires.deleteMany({
        where: data,
    });
}
