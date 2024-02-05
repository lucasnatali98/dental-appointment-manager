import { AppointmentCancellationDataAccess } from "@/appointment-cancellation/application/service/data-access/appointment-cancellation-data-access";
import { DatabaseConnectionService } from "@/shared/database-connection-service";
import { AppointmentCancellationDataAccessImpl } from "./appointment-cancellation-data-access";

export class AppointmentCancellationDataAccessBuilder {
  private _instance?: AppointmentCancellationDataAccess | null;
  private _databaseConnectionService: DatabaseConnectionService;

  constructor(databaseConnectionService: DatabaseConnectionService) {
    this._databaseConnectionService = databaseConnectionService;
    this._instance = null;
  }

  create(): AppointmentCancellationDataAccessBuilder {
    const connection = this._databaseConnectionService.getConnection();

    this._instance = new AppointmentCancellationDataAccessImpl(connection);

    return this;
  }

  build(): AppointmentCancellationDataAccess {
    if (this._instance) {
      return this._instance
    }
    return this.create().build();
  }
}
