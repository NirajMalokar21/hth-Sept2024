import prisma from "../prisma";

export async function getAllNodes() {
    return await prisma.node.findMany();
}

export async function getNodeById(id: number) {
    return await prisma.node.findUnique({
        where: { id },
    });
}

export async function getNodeByTitle(name: string) {
    return await prisma.node.findMany({
        where: { name },
    });
}

export async function getNodeByDescription(description: string) {
    return await prisma.node.findMany({
        where: { description },
    });
}
