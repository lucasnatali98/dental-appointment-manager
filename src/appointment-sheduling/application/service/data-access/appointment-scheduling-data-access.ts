export interface AppointmentSchedulingDataAccess {
    schedule(): Promise<boolean>
}