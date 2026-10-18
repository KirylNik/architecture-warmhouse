export class SensorDirectory {
  private readonly locationBySensorId = new Map<string, string>([
    ["1", "Living Room"],
    ["2", "Bedroom"],
    ["3", "Kitchen"],
  ]);

  private readonly sensorIdByLocation = new Map<string, string>([
    ["Living Room", "1"],
    ["Bedroom", "2"],
    ["Kitchen", "3"],
  ]);

  locationOf(sensorId: string): string {
    return this.locationBySensorId.get(sensorId) ?? "Unknown";
  }

  sensorIdOf(location: string): string {
    return this.sensorIdByLocation.get(location) ?? "0";
  }
}
