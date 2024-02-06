import { Request, Response } from 'express'
export interface AppointmentSchedulingRoutes {
    post(request: Request, response: Response): void
    get(request: Request, response: Response): void
    
}