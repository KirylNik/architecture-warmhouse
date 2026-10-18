import { Request, Response } from "express";
import { TemperatureService } from "./temperature.service";

export class TemperatureController {
  constructor(private readonly temperatureService: TemperatureService) {}

  getByLocation = (req: Request, res: Response): void => {
    const location = String(req.query.location ?? "");
    const sensorId = String(req.query.sensorId ?? "");
    res.json(this.temperatureService.readByLocation(location, sensorId));
  };

  getBySensorId = (req: Request, res: Response): void => {
    res.json(this.temperatureService.readBySensorId(req.params.sensorId));
  };
}
