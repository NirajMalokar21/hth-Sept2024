import prisma from "../prisma";

export async function getAllUsers() {
    return await prisma.user.findMany();
}

export async function getUserById(id: number) {
    return await prisma.user.findUnique({
        where: { id },
    });
}

//Get all users by name string attribute
export async function getUsersByName(name: string) {
    return await prisma.user.findMany({
        where: { name },
    });
}
