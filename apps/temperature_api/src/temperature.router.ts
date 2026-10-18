import { Router } from "express";
import { TemperatureController } from "./temperature.controller";

export function createTemperatureRouter(controller: TemperatureController): Router {
  const router = Router();
  router.get("/temperature", controller.getByLocation);
  router.get("/temperature/:sensorId", controller.getBySensorId);
  return router;
}
