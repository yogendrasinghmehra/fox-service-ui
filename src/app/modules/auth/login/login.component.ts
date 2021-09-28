import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenResponse } from '../../core/modals/login.modal';
import { AuthService } from '../../core/services/auth.service';
import { JwtService } from '../../core/services/jwt.service';
import { AlertMessageService } from '../../shared/alert-message/alert-message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup:FormGroup;  
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private alertService:AlertMessageService,
    private authService:AuthService,
    private jwtService:JwtService
    ) { }
  

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
   
  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginFormGroup.controls;
  }

  onLoginFormSubmit() {
    this.submitted = true;   
    if (this.loginFormGroup.invalid) return;

    //calling api
    this.authService.login(this.loginFormGroup.value).subscribe((res:TokenResponse)=>{
      this.jwtService.destroyToken();
      this.jwtService.saveToken(res.token);
      this.router.navigateByUrl('/admin/dashboard');
    },
    err=>{
      console.log(err)
      this.alertService.error(err.errors[0]);
    }
    );
  }
  
 

}
