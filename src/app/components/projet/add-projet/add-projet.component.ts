import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.css']
})
export class AddProjetComponent implements OnInit {

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              ) { }

  ngOnInit(): void {
    //this.initFormProj();
  }

  initFormProj(): void{
    this.myForm = this.formBuilder.group({

    })
  }

}
