import { int, mysqlEnum, mysqlTable, uniqueIndex, varchar, serial, date, boolean } from 'drizzle-orm/mysql-core';

export const times = mysqlTable('times', {
    id: serial('id').primaryKey(),
    doctorId: int('doctor_id'),
    date: date('date'),
    available: boolean('available'),
}, (times) => ({
    doctorIdIndex: uniqueIndex('doctor_id_idx').on(times.doctorId),
    dateIndex: uniqueIndex('date_idx').on(times.date),
    availableIndex: uniqueIndex('available_idx').on(times.available)
}));

