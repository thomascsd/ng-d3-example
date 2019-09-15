import { Component, AfterViewInit } from '@angular/core';
import { createBarDatas } from './bar-data';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    const datas = createBarDatas();

    const rects = d3
      .select('#bar')
      .selectAll('rect')
      .data(datas)
      .enter()
      .append('rect');

    rects.attr('x', (d, i) => i).attr('y', (d, i) => d);
  }
}
