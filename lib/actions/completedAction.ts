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
