import { AppointmentTimesDataAccess } from "@/appointment-times/application/service/data-access/appointment-times-data-access";
import { DatabaseConnectionService } from "@/shared/database-connection-service";
import { AppointmentTimesDataAccessImpl } from "./appointment-times-data-access";

export class AppointmentTimesDataAccessBuilder {
  private _instance?: AppointmentTimesDataAccess | null;
  private _databaseConnectionService: DatabaseConnectionService;

  constructor(databaseConnectionService: DatabaseConnectionService) {
    this._databaseConnectionService = databaseConnectionService;
    this._instance = null;
  }

  create(): AppointmentTimesDataAccessBuilder {
    const connection = this._databaseConnectionService.getConnection();

    this._instance = new AppointmentTimesDataAccessImpl(connection);

    return this;
  }

  build(): AppointmentTimesDataAccess {
    if (this._instance) {
      return this._instance
    }
    return this.create().build();
  }
}
