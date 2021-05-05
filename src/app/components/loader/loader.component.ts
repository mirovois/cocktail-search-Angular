import { LoaderService } from './../../sevices/loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor(public loaderService:LoaderService) { }

  ngOnInit(): void {
  }

}
