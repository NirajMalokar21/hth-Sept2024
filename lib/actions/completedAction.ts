import prisma from "../prisma";

export async function getAllCompleted() {
    return await prisma.completed.findMany();
}

//Get all users by completed nodes
export async function getUsersByNodeCompleted(name: string) {
    return await prisma.user.findMany({
        where: {
            completed: {
                some: {
                    Node: {
                        name,
                    },
                },
            },
        },
    });
}

export async function getNodesByUser(name: string) {
    return await prisma.node.findMany({
        where: {
            completedBy: {
                some: {
                    User: {
                        name,
                    },
                },
            },
        },
    });
}

//create a new completed node
export async function createCompleted(data: { user_id: number; node_id: number; grade: number }) {
    return await prisma.completed.create({
        data,
    });
}

//delete a completed node
export async function deleteCompleted(data: { user_id: number; node_id: number; grade: number }) {
    return await prisma.completed.deleteMany({
        where: data,
    });
}
