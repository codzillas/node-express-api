import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT?.toString() ?? "0") ?? 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ["src/typeorm/entities/**/*.ts"],
  migrations: ["src/typeorm/migrations/**/*.ts"],
  synchronize: false,
});

export default AppDataSource;
