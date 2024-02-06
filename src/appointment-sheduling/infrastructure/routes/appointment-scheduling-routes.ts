import { AppointmentSchedulingRoutes } from '@/appointment-sheduling/application/routes/appointment-scheduling-routes';
import {Router} from 'express';
import {Request, Response} from 'express';

export class AppointmentSchedulingRoutesImpl implements AppointmentSchedulingRoutes {
    constructor(
        private readonly _router: Router
    ){}
    post(request: Request, response: Response): void {
        this._router.post('/appointments', (req: Request, res: Response) => {
            res.status(201).send();
        });
    }

    get(request: Request, response: Response): void {
        const id = 1;
        this._router.get(`/appointments/${id}`, (req: Request, res: Response) => {
            return res.status(200).send();
        });
    }

}