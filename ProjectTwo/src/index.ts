import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import router from "./router/index";

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use('/', router);

const PORT = process.env.PORT || 3005; // Changed port number to 3005

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

export default app;