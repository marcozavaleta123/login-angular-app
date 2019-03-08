import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})

export class PanelComponent implements OnInit {

  nombresUser: String;
  cargoUser: String;
  emailUser: String;

  constructor(public router: Router) { }

  ngOnInit() {
    this.nombresUser = localStorage.getItem('nombresUser');

    if (this.nombresUser != null) {
      this.cargoUser = localStorage.getItem('cargoUser');
      this.emailUser = localStorage.getItem('emailUser');
    } else {
      this.router.navigate(['/login']);
    }
  }

  cerrarSesion(): void {
    this.router.navigate(['/login']);
    localStorage.removeItem('nombresUser');
  }


}
