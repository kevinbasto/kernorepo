import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public name! : string;

  constructor(
    private route : ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params : any) => {
      this.name = params.name;
    })
  }
}
