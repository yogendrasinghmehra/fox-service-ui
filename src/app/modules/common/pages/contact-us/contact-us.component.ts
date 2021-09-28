import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertMessageService } from 'src/app/modules/shared/alert-message/alert-message.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactUsFormGroup:FormGroup;
  submitted = false;
  constructor(private alertService:AlertMessageService) { }

  ngOnInit(): void {
    this.contactUsFormGroup=new FormGroup({
      full_name:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      phone:new FormControl('',[Validators.required]),
      subject:new FormControl('',[Validators.required]),
      message:new FormControl('',[Validators.required])
      
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactUsFormGroup.controls;
  }

  onFormSubmit()
  {
    this.submitted = true;   
   if(!this.contactUsFormGroup.valid) return;
   this.submitted=false
   this.contactUsFormGroup.reset();
   this.alertService.success("Your query is recevied successfully.", {autoClose:true});
  }

}
