import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { EchartsData } from '../../mocks/echarts-mock';

@Component({
  selector: 'app-echart',
  templateUrl: './echart.component.html',
  styleUrls: ['./echart.component.scss']
})
export class EchartComponent implements OnInit {
  chartData = EchartsData;
  chartOption: EChartOption;

  constructor() { }

  ngOnInit(): void {
    this.chartOption = this.makeChartOptions();
  }

  private makeChartOptions(): EChartOption {
		return {
			xAxis: this.makeHorizontalScale(),
			yAxis: this.makeVerticalScale(),
			series: this.makeSeries(),
		};
  }
  
  private makeHorizontalScale(): EChartOption.XAxis {
    const data = this.chartData.map(item => item.weekday);

    return {
      type: 'category',
      data,
    };
  }

  private makeVerticalScale(): EChartOption.YAxis | any {
    return {
      type: 'value'
    };
  }

  private makeSeries() {
    const data = this.chartData.map(item => item.value);

    return [
      {
        data,
        type: 'line',
      },
    ];
  }
}
