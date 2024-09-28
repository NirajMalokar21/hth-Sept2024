import prisma from "../prisma";

export async function getAllFollows() {
    return await prisma.follows.findMany();
}

//Get all users who follow a theme
export async function getUsersByTheme(name: string) {
    //Join the tables and filter(some) by theme's name
    return await prisma.user.findMany({
        where: {
            follows: {
                some: {
                    Theme: {
                        name,
                    },
                },
            },
        },
    });
}

export async function getThemesFollowedByUser(userName: string) {
    return await prisma.theme.findMany({
        where: {
            followedBy: {
                some: {
                    User: {
                        name: userName,
                    },
                },
            },
        },
    });
}
