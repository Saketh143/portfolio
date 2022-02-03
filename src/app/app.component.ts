import { AfterViewInit, Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';
  
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    

    setTimeout( ()=>{
      deloader(this.renderer)
      console.log('hello')
     
      }, 1500)
    
  }
}

function  deloader(renderer: Renderer2) {
    let loader = renderer.selectRootElement('.spinner-wrapper');
    renderer.setStyle(loader, 'display', 'none');
    // document.body.classList.remove('loading')
}
