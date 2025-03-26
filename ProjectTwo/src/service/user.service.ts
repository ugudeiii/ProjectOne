import prisma from "../database";

export const getUserListService = async () => {
    const result = await prisma.user.findMany();
    return result;  
};

export const SignUpService = async (username: string, password: string) => {
    const result = await prisma.user.create({
        data: {
            username: username,
            password: password
        }
    });
    return result;
};

export const SignInService = async (data: { username: string, password: string }) => {
    const result = await prisma.user.findUnique({
        where: {
            username: data.username,
            password: data.password
        }
    });
    return result;
};  
