import { Component, OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.model';
import { Subscription } from 'rxjs';
import { TrackService } from '@modules/tracks/services/track.service';
import { response } from 'express';
import { TracksModule } from '@modules/tracks/tracks.module';
@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []
  listObservers$: Array<Subscription> = []
  constructor(private trackService: TrackService) {}

  ngOnInit(): void {
    this.loadDataAll()
    this.loadDataRandom()
  }

  async loadDataAll(): Promise<any>{
  this.tracksTrending = await this.trackService.getAllTracks$().toPromise()

  }

  loadDataRandom():void{
   this.trackService.getAllRandom$()
   .subscribe((response: TrackModel[]) =>{
    this.tracksRandom = response
    
   })

  }
  
  ngOnDestroy(): void { }
}


