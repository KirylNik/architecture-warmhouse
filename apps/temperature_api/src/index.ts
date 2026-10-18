import express from "express";
import { SensorDirectory } from "./sensor-directory";
import { TemperatureController } from "./temperature.controller";
import { createTemperatureRouter } from "./temperature.router";
import { TemperatureService } from "./temperature.service";

const controller = new TemperatureController(new TemperatureService(new SensorDirectory()));

const app = express();
app.use(createTemperatureRouter(controller));

const port = Number(process.env.PORT ?? 8081);
app.listen(port, () => console.log(`temperature-api listening on port ${port}`));
