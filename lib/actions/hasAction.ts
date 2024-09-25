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

//Create functions
export async function createHas(data: { theme_id: number; NodeId: number; node_id: number }) {
    return await prisma.has.create({
        data,
    });
}
