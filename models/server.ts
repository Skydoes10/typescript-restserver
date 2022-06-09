import express, { Application } from "express";
import cors from "cors";
import userRoutes from "../routes/users";
import db from "../db/connection";

class Server {

    private app: Application;
    private port: string;
    private paths = {
        users: '/api/users',
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';

        // Connect to database
        this.dbConnection();

        // Middlewares
        this.middlewares();

        // Routes
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Database connected');
        } catch (error: any) {
            throw new Error(error);
        }
    }

    middlewares() {
        // CORS
        this.app.use( cors() );

        // Body parser
        this.app.use(express.json());

        // Static files
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.paths.users, userRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }
}

export default Server;