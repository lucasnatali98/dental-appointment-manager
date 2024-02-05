import { AppointmentSchedulingApplication } from "../application/appointment-scheduling-application"

export interface AppointmentSchedulingController {
    schedule(request: unknown, response: unknown): Promise<boolean>
}
export class AppointmentSchedulingControllerImpl implements AppointmentSchedulingController{
    constructor(
        private readonly _appointmentSchedulingApplication: AppointmentSchedulingApplication
    ){}
    async schedule(request: unknown, response: unknown): Promise<boolean> {
        return await this._appointmentSchedulingApplication.schedule()
    }
}