import logger from "@/shared/logger";
import { AppointmentCancellationApplication } from "../application/appointment-cancellation-application";
import {Request, Response} from "express";
export interface AppointmentCancellationController {
    cancellation(
      request: Request
    ): Promise<boolean>
}
export class AppointmentCancellationControllerImpl implements AppointmentCancellationController {
  constructor(
    private readonly _appointmentCancellationApplication: AppointmentCancellationApplication
  ) {
    // Define your API routes here
  }
    async cancellation(request: Request): Promise<boolean> {
        try {
          const id = request.body.id;
          const reason = request.body.reason;

          const result = await this._appointmentCancellationApplication.cancellation(
            id,
            reason
          );
          
          return result
        } catch (error) {
            logger.error(error);
            return false;
        }
    }
}