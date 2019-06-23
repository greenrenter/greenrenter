import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


class Piechart extends Component {
    state = {
        options: {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                backgroundColor: null
            },
            title: {
                text: 'Here is your energy usage breakdown:'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        }
                    }
                }
            },
            series: [{
                name: 'Appliances',
                colorByPoint: true,
                data: [
                    {
                        name: 'Dryer',
                        y: 10
                    },
                    {
                        name: 'TV',
                        y: 10
                    },
                    {
                        name: 'Fridge',
                        y: 24
                    },
                    {
                        name: 'Washer',
                        y: 10
                    },
                    {
                        name: 'Dishwasher',
                        y: 20
                    },
                    {
                        name: 'AC',
                        y: 26
                    },
                ]
            }]
        }
    }

    componentDidMount() {
        // console.log(this.props.data);
        // console.log(this.state.options.series[0].data[0].y);

        this.setState({
            options: {
                series: [{
                    data: this.props.data
                }]
            }
        });
    }

    render() {
        // const { test } = this.props;
        // console.log(test);

        return (
            <HighchartsReact
                highcharts={Highcharts}
                options={this.state.options}
            />
        );
    }
}

export default Piechart;