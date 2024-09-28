import prisma from "../prisma";

//Get functions
export async function getAllUsers() {
    return await prisma.user.findMany();
}

export async function getUserById(id: number) {
    return await prisma.user.findUnique({
        where: { id },
    });
}

export async function getUsersByName(name: string) {
    return await prisma.user.findMany({
        where: { name },
    });
}

//Create functions
export async function createUser(data: { id: number; name: string }) {
    return await prisma.user.create({
        data,
    });
}

//Delete functions
export async function deleteUserById(id: number) {
    return await prisma.user.delete({
        where: { id },
    });
}
