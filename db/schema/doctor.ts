import { int, mysqlEnum, mysqlTable, uniqueIndex, varchar, serial } from 'drizzle-orm/mysql-core';

export const doctor = mysqlTable('doctor', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }),
    email: varchar('email', { length: 256 }),
    phone: varchar('phone', { length: 256 }),
    cpf: varchar('cpf', { length: 256 }),
    cro: varchar('cro', { length: 256 }),
}, (doctors) => ({
    emailIndex: uniqueIndex('email_idx').on(doctors.email),
    phoneIndex: uniqueIndex('phone_idx').on(doctors.phone),
    cpfIndex: uniqueIndex('cpf_idx').on(doctors.cpf),
    croIndex: uniqueIndex('cro_idx').on(doctors.cro),
}));

