import { Router } from "express";

export interface AppointmentTimesRoutes {

}

export class AppointmentTimesRoutesImpl implements AppointmentTimesRoutes {
    constructor(
        private readonly _router: Router
    ){}
}