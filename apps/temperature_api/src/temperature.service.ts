import { SensorDirectory } from "./sensor-directory";
import { TemperatureReading } from "./types";

export class TemperatureService {
  constructor(private readonly sensors: SensorDirectory) {}

  readByLocation(location: string, sensorId: string): TemperatureReading {
    const resolvedLocation = location || this.sensors.locationOf(sensorId);
    const resolvedSensorId = sensorId || this.sensors.sensorIdOf(resolvedLocation);
    return this.buildReading(resolvedLocation, resolvedSensorId);
  }

  readBySensorId(sensorId: string): TemperatureReading {
    return this.buildReading(this.sensors.locationOf(sensorId), sensorId);
  }

  private buildReading(location: string, sensorId: string): TemperatureReading {
    return {
      value: this.randomTemperature(),
      unit: "°C",
      timestamp: new Date().toISOString(),
      location,
      status: "active",
      sensor_id: sensorId,
      sensor_type: "temperature",
      description: `Temperature sensor in ${location}`,
    };
  }

  private randomTemperature(): number {
    return Math.round((18 + Math.random() * 8) * 10) / 10;
  }
}
