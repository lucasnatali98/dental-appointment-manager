import {Router} from 'express';
import {Request, Response} from 'express';

const appointmentSchedulingRouter = Router();

appointmentSchedulingRouter.post('/appointments', (req: Request, res: Response) => {
    res.status(201).send();
});

export default appointmentSchedulingRouter;

export interface AppointmentSchedulingRoutes {
    post(request: Request, response: Response): Promise<unknown>
    get(request: Request, response: Response): Promise<unknown>
    
}

export class AppointmentSchedulingRoutesImpl implements AppointmentSchedulingRoutes {
    constructor(
        private readonly _router: Router
    ){}
    async post(request: Request, response: Response): Promise<void> {
        this._router.post('/appointments', (req: Request, res: Response) => {
            return res.status(201).send();
        });
    }

    async get(request: Request, response: Response): Promise<void> {
        const id = 1;
        this._router.get(`/appointments/${id}`, (req: Request, res: Response) => {
            return res.status(200).send();
        });
    }

}