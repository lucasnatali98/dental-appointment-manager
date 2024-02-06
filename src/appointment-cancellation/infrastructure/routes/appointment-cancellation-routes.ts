import { AppointmentCancellationRoutes } from "@/appointment-cancellation/application/routes/appointment-cancellation-routes";
import { AppointmentCancellationController } from "@/appointment-cancellation/presentation/appointment-cancellation-controller";
import { Router } from "express";
import {Request, Response} from 'express'

export class AppointmentCancellationRoutesImpl implements AppointmentCancellationRoutes {
    constructor(
        private readonly _router: Router,
        private readonly _controller: AppointmentCancellationController) {
    }
    post(request: Request, response: Response): void {
        this._controller.cancellation(request, response)
    }
}