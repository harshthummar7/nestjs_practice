import { SqlServerConnectionOptions } from "typeorm/driver/sqlserver/SqlServerConnectionOptions";


export const config:SqlServerConnectionOptions = {
    type:'sqlite',
    database: 'db',
    entities: ['dist/src/**/*.entity.ts'],
    synchronize: true,
}