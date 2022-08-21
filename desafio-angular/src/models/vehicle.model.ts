export interface Vehicle extends Array<Vehicle> {}

export interface Vehicle{
  id: number | string
  vehicle: string
  volumetotal: number | string
  connected: number | string
  softwareUpdates: number | string
}

export interface VehicleAPI {
  vehicles: Vehicle;
}