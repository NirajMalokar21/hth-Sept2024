import prisma from "../prisma";

export async function getAllThemes() {
    return await prisma.theme.findMany();
}

export async function getThemeById(id: number) {
    return await prisma.theme.findUnique({
        where: { id },
    });
}

export async function getThemeByName(name: string) {
    return await prisma.theme.findMany({
        where: { name },
    });
}

export async function getThemeByDescription(description: string) {
    return await prisma.theme.findMany({
        where: { description },
    });
}
