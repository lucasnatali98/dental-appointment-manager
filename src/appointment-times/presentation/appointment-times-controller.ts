import { AppointmentTimesApplication } from "../application/appointment-times-application";

export interface AppointmentTimesController {
    getAvailableTimes(request: unknown, response: unknown): Promise<boolean>
}

export class AppointmentTimesControllerImpl implements AppointmentTimesController{
    constructor(
        private readonly _appointmentSchedulingApplication: AppointmentTimesApplication
    
    ){}
    getAvailableTimes(request: unknown, response: unknown): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}