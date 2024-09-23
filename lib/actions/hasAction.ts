import prisma from "../prisma";

export async function getAllHas() {
    return await prisma.has.findMany();
}

export async function getThemesByNode(name: string) {
    return await prisma.theme.findMany({
        where: {
            has: {
                some: {
                    Node: {
                        name,
                    },
                },
            },
        },
    });
}

export async function getNodesByTheme(name: string) {
    return await prisma.node.findMany({
        where: {
            hadBy: {
                some: {
                    Theme: {
                        name,
                    },
                },
            },
        },
    });
}
