import { Options } from "sequelize";
import 'dotenv/config';

const config: Options = {
  username: process.env.DB_USER || 'rodolfo',
  password: process.env.DB_PASS || '12345678',
  database: process.env.DB_NAME || 'SPA_TASK_CALENDAR',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

module.exports = config;
  