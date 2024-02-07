import { AppointmentCancellationRoutes } from "@/appointment-cancellation/application/routes/appointment-cancellation-routes";
import { AppointmentCancellationController } from "@/appointment-cancellation/presentation/appointment-cancellation-controller";
import { Router } from "express";
import {Request, Response} from 'express'

export class AppointmentCancellationRoutesImpl implements AppointmentCancellationRoutes {
    constructor(
        private readonly _router: Router,
        private readonly _controller: AppointmentCancellationController) {
    }
    async cancellation(): Promise<void> {
        this._router.post('/cancellation', async (request: Request, response: Response) => {
            const cancelResponse = await this._controller.cancellation(request);

            if(!cancelResponse) {
                response.status(400).send({
                    message: 'Houve um problema durante o cancelamento da consulta',
                    data: null
                })
            }
            response.status(200).send({
                message: 'O cancelamento ocorreu com sucesso',
                data: true
            })
        })
    }
    
}