import { AppointmentCancellationApplication } from "../application/appointment-cancellation-application";
import {Request, Response} from "express";
export interface AppointmentCancellationController {
    cancellation(
      request: Request,
      response: Response
    ): Promise<boolean>
}
export class AppointmentCancellationControllerImpl implements AppointmentCancellationController {
  constructor(
    private readonly _appointmentCancellationApplication: AppointmentCancellationApplication
  ) {
    // Define your API routes here
  }
    async cancellation(request: Request, response: Response): Promise<boolean> {
        try {
          
            return true
        } catch (error) {
            return false;
        }
    }
}