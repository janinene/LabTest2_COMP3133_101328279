import { CommonModule } from '@angular/common';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  @Output() missionSelected = new EventEmitter<string>()
  missions: any;
  launch_year: string = '';

  constructor (private spacexapi : SpacexapiService) {}

  selectMission(flightNumber: string) {
    this.missionSelected.emit(flightNumber);
  }

  ngOnInit(): void {
    this.spacexapi.getAllList()
      .subscribe( (missions) => {
        this.missions = missions;
      })
  }

  filterByLaunchYear(): void {
    this.spacexapi.getFilteredMissionsByYear(this.launch_year)
      .subscribe((missions) => {
        this.missions = missions;
        console.log(missions);
      })
  }
}
