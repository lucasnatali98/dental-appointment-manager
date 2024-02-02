import { AppointmentCancellationDataAccess } from "../../application/service/data-access/appointment-cancellation-data-access";

export class AppointmentCancellationDataAccessImpl implements AppointmentCancellationDataAccess {
  constructor(
    private _connection: any
  ) {
  }

  async cancelAppointment(appointmentId: string, reason: string): Promise<boolean> {
    try {
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
  }
}