import { Sequelize } from "sequelize";

const postgresUser = process.env.POSTGRES_USER;
const postgresPassword = process.env.POSTGRES_PASSWORD;
const postgresDb = process.env.POSTGRES_DB;
const postgresPort = process.env.POSTGRES_PORT;

// TODO: вынести в .env : { dialect: postgres, postgres_host: localhost }
const sequelizePath = `postgres://${postgresUser}:${postgresPassword}@localhost:${postgresPort}/${postgresDb}`;

const sequelize = new Sequelize(sequelizePath);

const checkSequelizeConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('auth is succeed');
    } catch (e) {
        console.log(e);
    }
};

export {
    sequelize,
}