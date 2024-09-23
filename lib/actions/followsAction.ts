import prisma from "../prisma";

export async function getAllFollows() {
    return await prisma.follows.findMany();
}

//Get all users who follow a theme
export async function getUsersByTheme(name: string) {
    //Find id of theme.
    const theme = await prisma.theme.findMany({
        where: { name },
    });

    const theme_id = theme[0].id;

    //Then get list of user_ids based on the id of the theme in the associative "follows" table
    const follows = await prisma.follows.findMany({
        where: { theme_id },
    });
    //Then get all users based on list of user_ids
    return await prisma.user.findMany({
        where: { id: { in: follows.map((follow) => follow.user_id) } },
    });
}

export async function getThemesFollowedByUser(name: string) {
    //Find id of user.
    const user = await prisma.user.findMany({
        where: { name },
    });
    //Then get list of theme_ids based on the id of the user in the associative "follows" table
    const follows = await prisma.follows.findMany({
        where: { user_id: user[0].id },
    });
    //Then get all themes based on list of theme_ids
    return await prisma.theme.findMany({
        where: { id: { in: follows.map((follow) => follow.theme_id) } },
    });
}
