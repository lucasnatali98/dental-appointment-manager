import { AppointmentCancellationApplication } from "../application/appointment-cancellation-application";

export interface AppointmentCancellationController {
    cancellation(
        appointmentId: string,
        reason: string
    ): Promise<boolean>
}
export class AppointmentCancellationControllerImpl implements AppointmentCancellationController {
  constructor(
    private readonly appointmentCancellationApplication: AppointmentCancellationApplication
  ) {
    // Define your API routes here
  }
    async cancellation(appointmentId: string, reason: string): Promise<boolean> {
        try {
            return true
        } catch (error) {
            return false;
        }
    }
}