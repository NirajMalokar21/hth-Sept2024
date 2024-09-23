import prisma from "../prisma";

export async function getAllCompleted() {
    return await prisma.completed.findMany();
}

//Get all users by completed nodes
export async function getUsersByNodeCompleted(name: string) {
    //Alternatively, find id of node.
    const node = await prisma.node.findMany({
        where: { name },
    });
    const node_id = node[0].id;
    //Then get list of user_ids based on the id of the theme in the associative "completed" table
    const user_ids = await prisma.completed.findMany({
        where: { node_id },
    });
    //Then get all users based on list of user_ids
    return await prisma.user.findMany({
        where: { id: { in: user_ids.map((completed) => completed.user_id) } },
    });
}

export async function getNodesByUser(name: string) {
    //Find id of user.
    const user = await prisma.user.findMany({
        where: { name },
    });
    const user_id = user[0].id;
    //Then get list of node_ids based on the id of the user in the associative "completed" table
    const node_ids = await prisma.completed.findMany({
        where: { user_id },
    });
    //Then get all nodes based on list of node_ids
    return await prisma.node.findMany({
        where: { id: { in: node_ids.map((completed) => completed.node_id) } },
    });
}
