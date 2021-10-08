import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    adress: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  onSubmit() {
    //Todo : Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      adress: {
        street: '123 Drew Street'
      }
    });
  }
}
