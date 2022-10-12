import { Component } from '@angular/core';
import { RequestService } from './services/request/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'segunda-clase-a';
  name: string = '';
  order: string = '';

  constructor( public requestService: RequestService){}

  ngOnInit(): void {
    // this.requestService.getPokemon('pikachu');
    this.funcionBotonHttp();
  }

  funcionBotonHttp(){
    let buton = document.getElementById('search');
    let inName: HTMLInputElement = document.getElementById('inName') as HTMLInputElement;

    console.log(inName);
    buton?.addEventListener('click', () => {
      this.requestService.getPokemon(inName.value).subscribe({
        next : (resp: any) => {
          
          this.name = resp.name;
          this.order = resp.order;
          console.log("component: ",resp);

        },
        error: (err : any ) => {
          this.name = "error";
          this.order = "error";
           
        }
      });
    })
  }

}
