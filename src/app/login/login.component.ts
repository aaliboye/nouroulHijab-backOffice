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

  constructor(private fb: FormBuilder, private actRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      telephone: [''],
      password: ['']
    })
  }

  logIn(){
    this.route.navigateByUrl('/home')
    console.log(this.loginForm.value);

  }

}
