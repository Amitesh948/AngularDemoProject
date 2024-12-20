import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective implements OnChanges {
  @Input('appTheme') color:string ='';

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['color'])
   {
    this.applyTheme();
   }
  }
 
  @HostBinding('style.backgroundColor') backgroundColor: string = '';
  @HostBinding('style.color') textColor: string = '';

  private applyTheme(): void {
    if (this.color === 'dark') {
      this.backgroundColor = '#333'; 
      this.textColor = '#fff'; 
    } else {
      this.backgroundColor = '#fff'; 
      this.textColor = '#000';
    }
  }

}
