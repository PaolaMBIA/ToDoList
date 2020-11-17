import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {TachesServiceService} from '../service/taches-service.service';
import {Tache} from './../models/taches-model';

@Component({
  selector: 'app-edit-tasche',
  templateUrl: './edit-tasche.component.html',
  styleUrls: ['./edit-tasche.component.css']
})
export class EditTascheComponent implements OnInit {

  submitted = false;
  editTask: FormGroup;

  constructor( public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private tachesServiceService: TachesServiceService,
    private router: Router) { }

  ngOnInit() {
    this.updatetask();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.gettask(id);
    this.editTask = this.fb.group({
      tache: [''],
      description: ['']
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editTask.controls;
  }

  gettask(id) {
    this.tachesServiceService.gettask(id).subscribe(data => {
      this.editTask.setValue({
        tache: data['tache'],
        description: data['description'],
      });
    });
  }

  updatetask() {
    this.editTask = this.fb.group({
      tache: [''],
      description: ['']
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editTask.valid) {
      console.log("yes");
      return false;
    } else {
      if (window.confirm('Voulez-vous vraiment modifier?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.tachesServiceService.updatetask(id, this.editTask.value)
          .subscribe(res => {
            this.router.navigateByUrl('/list-taches');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }
}
