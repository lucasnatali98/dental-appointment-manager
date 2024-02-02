import { AppointmentCancellationDataAccess } from "./service/data-access/appointment-cancellation-data-access";

export interface AppointmentCancellationApplication {
    cancellation(
        appointmentId: string,
        reason: string
    ): Promise<boolean>
}
export class AppointmentCancellationApplicationImpl implements AppointmentCancellationApplication {
  constructor(
    private readonly appointmentCancellationDataAccess: AppointmentCancellationDataAccess
  ) {
    // Define your API routes here
  }
    async cancellation(appointmentId: string, reason: string): Promise<boolean> {
        const result = await this.appointmentCancellationDataAccess.cancelAppointment(appointmentId, reason);
        return true
    }
}