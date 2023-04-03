import { CommonModule } from '@angular/common';
import { Component, OnInit, NgModule } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  missions: any;

  constructor (private spacexapi : SpacexapiService) {}

  ngOnInit(): void {
    this.spacexapi.getAllList()
      .subscribe( (missions) => {
        this.missions = missions;
        this.filteredMissions = missions;
      })
  }
}
