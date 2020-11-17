import { Component, OnInit, NgZone } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import {Tache} from '../models/taches-model';
import {TachesServiceService} from '../service/taches-service.service';

@Component({
  selector: 'app-create-taches',
  templateUrl: './create-taches.component.html',
  styleUrls: ['./create-taches.component.css']
})

export class CreateTachesComponent implements OnInit {
  submitted = false;
  afaire: FormGroup;
  

  encours =[{
    tache:'',
    description:''
  }];

  fait = [{
    tache:'',
    description:''
  }];

  constructor(    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private tachesServiceService: TachesServiceService) {
      this.mainForm();
   }


  ngOnInit(): void {

  }

  mainForm() {
    this.afaire = this.fb.group({
      tache: [''],
      description: ['']
    })
  }

    // Getter to access form control
    get myForm(){
      return this.afaire.controls;
    }

    
  onSubmit() {
    this.submitted = true;
    this.tachesServiceService.createtask(this.afaire.value).subscribe(
      (res) => {
        alert('tâche rajoutée!')
        this.ngZone.run(() => this.router.navigateByUrl('/list-taches'))
      }, (error) => {
        console.log(error);
      });
  }
  
}

