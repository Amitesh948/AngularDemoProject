import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, OnDestroy {
  boxes = ['Box 1', 'Box 2', 'Box 3', 'Box 4'];
  boxColors = ['#FF5733', '#33FF57', '#3357FF', '#F3F33D'];
  activeBoxIndex: number = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startColorCycle();
  }

  startColorCycle(): void {
    this.intervalId = setInterval(() => {
      this.activeBoxIndex = (this.activeBoxIndex + 1) % this.boxes.length;
    }, 2000);
  }

  isActiveBox(boxIndex: number): boolean {
    return this.activeBoxIndex == boxIndex;
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
