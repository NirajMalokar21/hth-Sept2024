import prisma from "../prisma";

export async function getAllHas() {
    return await prisma.has.findMany();
}

export async function getThemesByNode(name: string) {
    //Find id of node.
    const node = await prisma.node.findMany({
        where: { name },
    });
    const node_id = node[0].id;
    //Then get list of theme_ids based on the id of the node in the associative "has" table
    const theme_ids = await prisma.has.findMany({
        where: { node_id },
    });
    //Then get all themes based on list of theme_ids
    return await prisma.theme.findMany({
        where: { id: { in: theme_ids.map((has) => has.theme_id) } },
    });
}

export async function getNodesByTheme(name: string) {
    //Find id of theme.
    const theme = await prisma.theme.findMany({
        where: { name },
    });
    const theme_id = theme[0].id;
    //Then get list of node_ids based on the id of the theme in the associative "has" table
    const node_ids = await prisma.has.findMany({
        where: { theme_id },
    });
    //Then get all nodes based on list of node_ids
    return await prisma.node.findMany({
        where: { id: { in: node_ids.map((has) => has.node_id) } },
    });
}
