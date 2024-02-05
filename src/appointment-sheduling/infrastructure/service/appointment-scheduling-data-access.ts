import { DefaultConnection } from "@/shared/database-connection-service";
import { AppointmentSchedulingDataAccess } from "../../application/service/data-access/appointment-scheduling-data-access";

export class AppointmentSchedulingDataAccessImpl implements AppointmentSchedulingDataAccess {
    constructor(
        private readonly _connection: DefaultConnection
    ){}


}
