import { int, mysqlTable, uniqueIndex, varchar, serial } from 'drizzle-orm/mysql-core';

export const patient = mysqlTable('patient', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }),
    email: varchar('email', { length: 256 }),
    phone: varchar('phone', { length: 256 }),
    cpf: varchar('cpf', { length: 256 }),
    appointmentQuantity: int('appointment_quantity'),
}, (doctors) => ({
    emailIndex: uniqueIndex('email_idx').on(doctors.email),
    phoneIndex: uniqueIndex('phone_idx').on(doctors.phone),
    cpfIndex: uniqueIndex('cpf_idx').on(doctors.cpf)
}));

