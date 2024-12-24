import { Component } from '@angular/core';
import { of } from 'rxjs';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  formData:any = {};

  constructor(public common:CommonService){}
  
  ngOnInit(): void {
    
      // Subscriber 1
      this.common.behaviorSubject.subscribe((value) => {
        const formData = localStorage.getItem("formdata");
        this.formData = JSON.parse(formData || "");
      });

      let a = of("1,2,3")
      a.subscribe((value) => {console.log(value);
      })
      
  }
}
