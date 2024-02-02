export interface AppointmentCancellationDataAccess {
    cancelAppointment(appointmentId: string, reason: string): Promise<boolean>
}