import { Component, OnInit } from '@angular/core';
import { faMapLocation } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faMapLocation = faMapLocation;
  miPortfolio:any;
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio?.obtenerDatos().subscribe(data=>{
    this.miPortfolio=data;
      });
  }

}
