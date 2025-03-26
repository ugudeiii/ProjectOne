/*import pg from 'pg';
import * as dotenv from "dotenv";
dotenv.config();

const client = new pg.Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "5432"),
    database: process.env.DB_name,
});
    
export default client; */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;
