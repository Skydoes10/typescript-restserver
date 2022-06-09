import { Sequelize } from "sequelize";

const db = new Sequelize('node', 'root', 'R1c4rd019092002', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
})

export default db;