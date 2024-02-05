import { AppointmentSchedulingDataAccess } from "./service/data-access/appointment-scheduling-data-access";

export interface AppointmentSchedulingApplication {
    schedule(): Promise<boolean>
}
export class AppointmentSchedulingApplicationImpl implements AppointmentSchedulingApplication {
 constructor(
    private readonly _appointmentSchedulingDataAccess: AppointmentSchedulingDataAccess
 )  {} 
    async schedule(): Promise<boolean> {
        return await this._appointmentSchedulingDataAccess.schedule()
    }
}