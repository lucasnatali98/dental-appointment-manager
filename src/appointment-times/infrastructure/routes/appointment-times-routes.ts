import { AppointmentTimesRoutes } from "@/appointment-times/application/routes/appointment-times-routes";
import { AppointmentTimesController } from "@/appointment-times/presentation/appointment-times-controller";
import { Router, Request, Response} from "express";

export class AppointmentTimesRoutesImpl implements AppointmentTimesRoutes {
    constructor(
        private readonly _router: Router,
        private readonly _controller: AppointmentTimesController
    ){}
    async getAvailableTimes() {
        this._router.get('/appointments/times', (req: Request, res: Response) => {
            this._controller.getAvailableTimes(req, res);
            res.status(200).send({
                times: [
                    "10:00",
                    "11:00",
                    "12:00"
                ]
            })
        })
    }
}