import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() locations!: any[];
  @Input() Currentlocation:any;
  @Output() chosenLocationEvent = new EventEmitter<String>();
  name!:string;

  constructor( private router: Router) {
  }

  ngOnInit(): void {
  }


  emitBoutique(value: string) {
    this.chosenLocationEvent.emit(value);
  }
  profil(){
    this.router.navigateByUrl('/profil');
  }
  logout() {
  }

}
