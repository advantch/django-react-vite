import React from 'react';
import ReactECharts from 'echarts-for-react';
import CHART_OPTIONS from './options.js';

class Chart extends React.Component  {

  constructor(props) {
    super(props);

    this.state = {
      chartData: CHART_OPTIONS,
      autoRefresh: true
    }
  }

  async refreshOnInterval() {
    setInterval(()=> this.state.autoRefresh ? this.refreshOptions() : null, 500);
  }

  toggleAutoRefresh() {
    this.setState({autoRefresh: !this.state.autoRefresh});
  }

  async fetchbackendChartData(){
    return await window.client.then(client => client.apis.charts.getSensorData()
        .then(res => res.obj.data)
        .catch(err => console.error(err))
    )
  }

  async refreshOptions() {

    // fetch and update chart data from backend
    let chartOptions = JSON.parse(JSON.stringify(CHART_OPTIONS));
    let data = await this.fetchbackendChartData();
    chartOptions.series[0].data = data;

    // update ui chart data
    this.setState({chartData: chartOptions});
  }

  componentDidMount() {
    this.refreshOnInterval();
  }

  render() {
    return <div>
      <ReactECharts option={this.state.chartData} />
      <div className="flex">
        <div className="p-4 card bordered">
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text mr-2">Show Live Data</span> 
              <input onChange={()=>this.toggleAutoRefresh()} value={this.state.autoRefresh} checked={this.state.autoRefresh} type="checkbox" className="toggle toggle-primary toggle-sm"/>
            </label>
          </div>
        </div>
        <div className="btn btn-primary btn-sm mt-5" disabled={this.state.autoRefresh}  onClick={()=> this.refreshOptions()}>Refresh</div>
      </div>
    </div>;
  }
};

export default Chart;
