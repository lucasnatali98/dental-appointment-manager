import { AppointmentSchedulingDataAccess } from "../../application/service/data-access/appointment-scheduling-data-access"
import { AppointmentSchedulingDataAccessImpl } from "./appointment-scheduling-data-access"
import { DatabaseConnectionService } from "../../../shared/database-connection-service"
export class AppointmentSchedulingDataAccessBuilder {
  private _instance?: AppointmentSchedulingDataAccess | null
  private _databaseConnectionService: DatabaseConnectionService

  constructor(
    databaseConnectionService: DatabaseConnectionService,
  ) {
    this._databaseConnectionService = databaseConnectionService
    this._instance = null
  }

  create(): AppointmentSchedulingDataAccessBuilder {
    const connection =
      this._databaseConnectionService.getConnection()

    this._instance = new AppointmentSchedulingDataAccessImpl(connection);

    return this
  }

  build(): AppointmentSchedulingDataAccess {
    if (this._instance) {
      return this._instance
    }
    return this.create().build()
  }
}