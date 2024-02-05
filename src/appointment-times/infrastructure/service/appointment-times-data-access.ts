import { AppointmentTimesDataAccess } from "@/appointment-times/application/service/data-access/appointment-times-data-access";
import { DefaultConnection } from "@/shared/database-connection-service";

export class AppointmentTimesDataAccessImpl implements AppointmentTimesDataAccess {
 constructor(
    private readonly _connection: DefaultConnection
 ){}
}