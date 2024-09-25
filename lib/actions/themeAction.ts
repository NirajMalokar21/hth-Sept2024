import prisma from "../prisma";

//Get functions
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

//Create functions
export async function createTheme(data: { id: number; name: string; description: string }) {
    return await prisma.theme.create({
        data,
    });
}

//Delete functions
export async function deleteThemeById(id: number) {
    return await prisma.theme.delete({
        where: { id },
    });
}
