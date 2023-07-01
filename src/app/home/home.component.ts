import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPosts } from 'src/Shared_Classes_and_types/IPosts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  image1:string = "assets/ahly1.png"
image2:string = "assets/ahly2.jpg"
image3:string = "assets/ahly3.jpg"
}
