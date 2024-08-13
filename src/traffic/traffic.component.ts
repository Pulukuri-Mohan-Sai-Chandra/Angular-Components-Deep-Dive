import { Component, Input } from '@angular/core';
import { TrafficData } from '../Types&Interfaces';

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css'
})
export class TrafficComponent {
  @Input({required:true}) dummyTrafficData?:TrafficData[]
  @Input({required:true}) maxTraffic?:number;

  getTrafficHeight(dataPoint:TrafficData|undefined,m_traffic:number|undefined){
    if(dataPoint && m_traffic){
      return (dataPoint.value / m_traffic) * 100 + '%';
    }
    return ""
  }
}
