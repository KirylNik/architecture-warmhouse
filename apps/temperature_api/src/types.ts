export interface TemperatureReading {
  value: number;
  unit: string;
  timestamp: string;
  location: string;
  status: string;
  sensor_id: string;
  sensor_type: string;
  description: string;
}
