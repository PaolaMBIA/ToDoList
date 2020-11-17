import { Component, OnInit, NgZone } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import {Tache} from '../models/taches-model';
import {TachesServiceService} from '../service/taches-service.service';


@Component({
  selector: 'app-list-taches',
  templateUrl: './list-taches.component.html',
  styleUrls: ['./list-taches.component.css']
})
export class ListTachesComponent implements OnInit {

  Tache: any=[];

  encours: any=[];

  fait: any=[];

  constructor(private tachesServiceService: TachesServiceService) { 
    this.readtask();
  }

  ngOnInit(): void {
  }

  readtask(){
    this.tachesServiceService.gettasks().subscribe((data) => {
      console.log(data);
     this.Tache = data;
    })    
  }

  removeTask(tache, index) {
    if(window.confirm('Voulez-vous vraiment supprimer?')) {
        this.tachesServiceService.deletetask(tache._id).subscribe((data) => {
          this.Tache.splice(index, 1);
        }
      )    
    }
  }

  onDrop(event: CdkDragDrop<string[]>){
    if (event.previousContainer === event.container) { 
      moveItemInArray (event.container.data, 
        event.previousIndex, 
        event.currentIndex); 
    } else { 
      transferArrayItem (event.previousContainer.data, 
        event.container.data, 
        event.previousIndex, event.currentIndex);  
    }
  }

}
