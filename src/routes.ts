import {Router} from "express"

// import { RegisterController } from "./controllers/auth/register_controller";
import { LoginController } from "./controllers/auth/login_controller";
import { ensureauthencticated } from "./middlewares/ensure_authetication";
// import { RefreshTokenLoginController } from "./controllers/auth/refresh_token_login_controller";

import multer from "multer";
import { Request, Response } from "express";


const multerConfig = multer();

const routes = Router();

routes.post("/login", new LoginController().handle);

export {routes};