import { Router } from 'express';
import { getUserListController, SignUpController, SignInController } from "../contoller/user.controller";

const router = Router();

router.get('/users', getUserListController);
router.post('/signup', SignUpController);
router.post('/signin', SignInController);

export default router;