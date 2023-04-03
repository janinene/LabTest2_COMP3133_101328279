import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  private REST_API_URL = "https://api.spacexdata.com/v3/launches";

  constructor(private httpClient: HttpClient) { }

  public getAllList() {
    return this.httpClient.get(this.REST_API_URL).pipe(retry(3))
  }
  public getFilteredMissionsByYear(launch_year: string) {
    const FILTER_MISSION = `https://api.spacexdata.com/v3/launches?launch_year=${launch_year}`
    return this.httpClient.get(FILTER_MISSION).pipe(retry(3))
  }

  public getMissionListDetailsByFlightNumber(flight_number: string) {
    const FILTER_BY_FLIGHT = `https://api.spacexdata.com/v3/launches/${flight_number}`
    return this.httpClient.get(FILTER_BY_FLIGHT).pipe(retry(3))
  }
  
}
