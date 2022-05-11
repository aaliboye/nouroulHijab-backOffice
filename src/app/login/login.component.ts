import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup

  constructor(private fb: FormBuilder, private actRoute: ActivatedRoute, private route: Router,
    private authService: AuthService) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      telephone: [''],
      password: ['']
    })
  }

  logIn(){
    var tel = this.loginForm.get('telephone')?.value;
    var pass = this.loginForm.value.password;
    console.log(this.loginForm.value);
    this.authService.login(tel, pass).then(()=>{
      this.route.navigateByUrl('/home')

    })
    .catch((err)=>{
      this.route.navigateByUrl('/login')
    })


  }

}
