import { int, mysqlEnum, mysqlTable, uniqueIndex, varchar, serial, datetime } from 'drizzle-orm/mysql-core';

export const appointment = mysqlTable('appointment', {
    id: serial('id').primaryKey(),
    doctorId: int('doctor_id'),
    patientId: int('patient_id'),
    date: datetime('date'),
    status: mysqlEnum('status', ['pending', 'confirmed', 'canceled']),
}, (appointment) => ({
    doctorIdIndex: uniqueIndex('doctor_id_idx').on(appointment.doctorId),
    patientIdIndex: uniqueIndex('patient_id_idx').on(appointment.patientId),
    dateIndex: uniqueIndex('date_idx').on(appointment.date),
    statusIndex: uniqueIndex('status_idx').on(appointment.status)
}));

 