import { getUserListService, SignInService, SignUpService } from "../service/user.service";

export const getUserListController = async (req: any, res: any) => {
    try {
        const result = await getUserListService();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const SignUpController = async (req: any, res: any) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            throw new Error("Username and password are required");
        }
        const result = await SignUpService(username, password);
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const SignInController = async (req: any, res: any) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            throw new Error("Username and password are required");
        }
        const result = await SignInService({ username, password });
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
};