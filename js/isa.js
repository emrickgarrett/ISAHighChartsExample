    /**
     * Created by Garrett on 2/24/2015.
     */

//Jquery Selectors that select the Graph Options, and update the graph space.

    $(document).ready(function(){

        $("#option1").click(function () {

            $("#graph_space").highcharts({
                title: {
                    text: 'Monthly Average Temperature',
                    x: -20 //center
                },
                subtitle: {
                    text: 'Source: WorldClimate.com',
                    x: -20
                },
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },
                yAxis: {
                    title: {
                        text: 'Temperature (°C)'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '°C'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name: 'Tokyo',
                    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
                }, {
                    name: 'New York',
                    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
                }, {
                    name: 'Berlin',
                    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
                }, {
                    name: 'London',
                    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                }]
            });

        });

        $("#option2").click(function () {
            $('#graph_space').highcharts({
                chart: {
                    type: 'area'
                },
                title: {
                    text: 'US and USSR nuclear stockpiles'
                },
                subtitle: {
                    text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
                    'thebulletin.metapress.com</a>'
                },
                xAxis: {
                    allowDecimals: false,
                    labels: {
                        formatter: function () {
                            return this.value; // clean, unformatted number for year
                        }
                    }
                },
                yAxis: {
                    title: {
                        text: 'Nuclear weapon states'
                    },
                    labels: {
                        formatter: function () {
                            return this.value / 1000 + 'k';
                        }
                    }
                },
                tooltip: {
                    pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
                },
                plotOptions: {
                    area: {
                        pointStart: 1940,
                        marker: {
                            enabled: false,
                            symbol: 'circle',
                            radius: 2,
                            states: {
                                hover: {
                                    enabled: true
                                }
                            }
                        }
                    }
                },
                series: [{
                    name: 'USA',
                    data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
                        1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                        27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
                        26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                        24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
                        22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
                        10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
                }, {
                    name: 'USSR/Russia',
                    data: [null, null, null, null, null, null, null, null, null, null,
                        5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
                        4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
                        15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
                        33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
                        35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                        21000, 20000, 19000, 18000, 18000, 17000, 16000]
                }]
            });
        });

        $("#option3").click(function () {
            $('#graph_space').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Historic World Population by Region'
                },
                subtitle: {
                    text: 'Source: Wikipedia.org'
                },
                xAxis: {
                    categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Population (millions)',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                tooltip: {
                    valueSuffix: ' millions'
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -40,
                    y: 100,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                    shadow: true
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Year 1800',
                    data: [107, 31, 635, 203, 2]
                }, {
                    name: 'Year 1900',
                    data: [133, 156, 947, 408, 6]
                }, {
                    name: 'Year 2008',
                    data: [973, 914, 4054, 732, 34]
                }]
            });
        });

        $("#option4").click(function () {
            $('#graph_space').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'Browser market shares at a specific website, 2014'
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
                    type: 'pie',
                    name: 'Browser share',
                    data: [
                        ['Firefox',   45.0],
                        ['IE',       26.8],
                        {
                            name: 'Chrome',
                            y: 12.8,
                            sliced: true,
                            selected: true
                        },
                        ['Safari',    8.5],
                        ['Opera',     6.2],
                        ['Others',   0.7]
                    ]
                }]
            });
        });

        $("#option5").click(function () {
            $('#graph_space').highcharts({
                chart: {
                    type: 'scatter',
                    zoomType: 'xy'
                },
                title: {
                    text: 'Height Versus Weight of 507 Individuals by Gender'
                },
                subtitle: {
                    text: 'Source: Heinz  2003'
                },
                xAxis: {
                    title: {
                        enabled: true,
                        text: 'Height (cm)'
                    },
                    startOnTick: true,
                    endOnTick: true,
                    showLastLabel: true
                },
                yAxis: {
                    title: {
                        text: 'Weight (kg)'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'left',
                    verticalAlign: 'top',
                    x: 100,
                    y: 70,
                    floating: true,
                    backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
                    borderWidth: 1
                },
                plotOptions: {
                    scatter: {
                        marker: {
                            radius: 5,
                            states: {
                                hover: {
                                    enabled: true,
                                    lineColor: 'rgb(100,100,100)'
                                }
                            }
                        },
                        states: {
                            hover: {
                                marker: {
                                    enabled: false
                                }
                            }
                        },
                        tooltip: {
                            headerFormat: '<b>{series.name}</b><br>',
                            pointFormat: '{point.x} cm, {point.y} kg'
                        }
                    }
                },
                series: [{
                    name: 'Female',
                    color: 'rgba(223, 83, 83, .5)',
                    data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
                        [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
                        [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
                        [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
                        [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
                        [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
                        [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
                        [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
                        [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
                        [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8],
                        [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
                        [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
                        [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
                        [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
                        [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
                        [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
                        [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
                        [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
                        [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
                        [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
                        [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
                        [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
                        [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
                        [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
                        [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
                        [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
                        [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
                        [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
                        [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
                        [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
                        [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3],
                        [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
                        [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4],
                        [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6],
                        [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8],
                        [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1],
                        [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
                        [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
                        [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
                        [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
                        [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0],
                        [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
                        [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
                        [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
                        [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
                        [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
                        [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
                        [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
                        [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
                        [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
                        [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
                        [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]]

                }, {
                    name: 'Male',
                    color: 'rgba(119, 152, 191, .5)',
                    data: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
                        [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6],
                        [180.0, 76.6], [177.8, 83.6], [192.0, 90.0], [176.0, 74.6], [174.0, 71.0],
                        [184.0, 79.6], [192.7, 93.8], [171.5, 70.0], [173.0, 72.4], [176.0, 85.9],
                        [176.0, 78.8], [180.5, 77.8], [172.7, 66.2], [176.0, 86.4], [173.5, 81.8],
                        [178.0, 89.6], [180.3, 82.8], [180.3, 76.4], [164.5, 63.2], [173.0, 60.9],
                        [183.5, 74.8], [175.5, 70.0], [188.0, 72.4], [189.2, 84.1], [172.8, 69.1],
                        [170.0, 59.5], [182.0, 67.2], [170.0, 61.3], [177.8, 68.6], [184.2, 80.1],
                        [186.7, 87.8], [171.4, 84.7], [172.7, 73.4], [175.3, 72.1], [180.3, 82.6],
                        [182.9, 88.7], [188.0, 84.1], [177.2, 94.1], [172.1, 74.9], [167.0, 59.1],
                        [169.5, 75.6], [174.0, 86.2], [172.7, 75.3], [182.2, 87.1], [164.1, 55.2],
                        [163.0, 57.0], [171.5, 61.4], [184.2, 76.8], [174.0, 86.8], [174.0, 72.2],
                        [177.0, 71.6], [186.0, 84.8], [167.0, 68.2], [171.8, 66.1], [182.0, 72.0],
                        [167.0, 64.6], [177.8, 74.8], [164.5, 70.0], [192.0, 101.6], [175.5, 63.2],
                        [171.2, 79.1], [181.6, 78.9], [167.4, 67.7], [181.1, 66.0], [177.0, 68.2],
                        [174.5, 63.9], [177.5, 72.0], [170.5, 56.8], [182.4, 74.5], [197.1, 90.9],
                        [180.1, 93.0], [175.5, 80.9], [180.6, 72.7], [184.4, 68.0], [175.5, 70.9],
                        [180.6, 72.5], [177.0, 72.5], [177.1, 83.4], [181.6, 75.5], [176.5, 73.0],
                        [175.0, 70.2], [174.0, 73.4], [165.1, 70.5], [177.0, 68.9], [192.0, 102.3],
                        [176.5, 68.4], [169.4, 65.9], [182.1, 75.7], [179.8, 84.5], [175.3, 87.7],
                        [184.9, 86.4], [177.3, 73.2], [167.4, 53.9], [178.1, 72.0], [168.9, 55.5],
                        [157.2, 58.4], [180.3, 83.2], [170.2, 72.7], [177.8, 64.1], [172.7, 72.3],
                        [165.1, 65.0], [186.7, 86.4], [165.1, 65.0], [174.0, 88.6], [175.3, 84.1],
                        [185.4, 66.8], [177.8, 75.5], [180.3, 93.2], [180.3, 82.7], [177.8, 58.0],
                        [177.8, 79.5], [177.8, 78.6], [177.8, 71.8], [177.8, 116.4], [163.8, 72.2],
                        [188.0, 83.6], [198.1, 85.5], [175.3, 90.9], [166.4, 85.9], [190.5, 89.1],
                        [166.4, 75.0], [177.8, 77.7], [179.7, 86.4], [172.7, 90.9], [190.5, 73.6],
                        [185.4, 76.4], [168.9, 69.1], [167.6, 84.5], [175.3, 64.5], [170.2, 69.1],
                        [190.5, 108.6], [177.8, 86.4], [190.5, 80.9], [177.8, 87.7], [184.2, 94.5],
                        [176.5, 80.2], [177.8, 72.0], [180.3, 71.4], [171.4, 72.7], [172.7, 84.1],
                        [172.7, 76.8], [177.8, 63.6], [177.8, 80.9], [182.9, 80.9], [170.2, 85.5],
                        [167.6, 68.6], [175.3, 67.7], [165.1, 66.4], [185.4, 102.3], [181.6, 70.5],
                        [172.7, 95.9], [190.5, 84.1], [179.1, 87.3], [175.3, 71.8], [170.2, 65.9],
                        [193.0, 95.9], [171.4, 91.4], [177.8, 81.8], [177.8, 96.8], [167.6, 69.1],
                        [167.6, 82.7], [180.3, 75.5], [182.9, 79.5], [176.5, 73.6], [186.7, 91.8],
                        [188.0, 84.1], [188.0, 85.9], [177.8, 81.8], [174.0, 82.5], [177.8, 80.5],
                        [171.4, 70.0], [185.4, 81.8], [185.4, 84.1], [188.0, 90.5], [188.0, 91.4],
                        [182.9, 89.1], [176.5, 85.0], [175.3, 69.1], [175.3, 73.6], [188.0, 80.5],
                        [188.0, 82.7], [175.3, 86.4], [170.5, 67.7], [179.1, 92.7], [177.8, 93.6],
                        [175.3, 70.9], [182.9, 75.0], [170.8, 93.2], [188.0, 93.2], [180.3, 77.7],
                        [177.8, 61.4], [185.4, 94.1], [168.9, 75.0], [185.4, 83.6], [180.3, 85.5],
                        [174.0, 73.9], [167.6, 66.8], [182.9, 87.3], [160.0, 72.3], [180.3, 88.6],
                        [167.6, 75.5], [186.7, 101.4], [175.3, 91.1], [175.3, 67.3], [175.9, 77.7],
                        [175.3, 81.8], [179.1, 75.5], [181.6, 84.5], [177.8, 76.6], [182.9, 85.0],
                        [177.8, 102.5], [184.2, 77.3], [179.1, 71.8], [176.5, 87.9], [188.0, 94.3],
                        [174.0, 70.9], [167.6, 64.5], [170.2, 77.3], [167.6, 72.3], [188.0, 87.3],
                        [174.0, 80.0], [176.5, 82.3], [180.3, 73.6], [167.6, 74.1], [188.0, 85.9],
                        [180.3, 73.2], [167.6, 76.3], [183.0, 65.9], [183.0, 90.9], [179.1, 89.1],
                        [170.2, 62.3], [177.8, 82.7], [179.1, 79.1], [190.5, 98.2], [177.8, 84.1],
                        [180.3, 83.2], [180.3, 83.2]]
                }]
            });
        });

        $("#gate_count").click(function(){
            hideDescriptions();
            //ID, Location, Date (yyyy-mm-dd hh:mm:ss), Count
            var json = getGateCount();

            var json_length = json.length; //Holy crap this is gonna be huge
            var categories = [];

            while(json_length--){
                var shouldAdd = true;
                var index = -1;

                //Determine if it is new category or not (Location)
                for(var i = 0; i < categories.length; i++){
                    if(categories[i].Location == json[json_length].Location){
                        shouldAdd = false;
                        index = i;
                        i = categories.length;

                    }
                }
                //If it's a new Location, add it to the array
                if(shouldAdd) {
                    categories[categories.length] = {"Location" : json[json_length].Location, "Data" : []};
                    index = categories.length -1;
                }else
                    console.log(json[json_length].Location + " Was added with " + json[json_length].Count + " " + json[json_length].Date);

                categories[index].Data.push([parseDate(json[json_length].Date), json[json_length].Count]);

                //console.log(categories[index].Data[0][0].getTime());

            }


            /*
            var cat_length = categories.length;
            while(cat_length--){
                alert(categories[cat_length].Location + " " + categories[cat_length].Count_Data);
            }
            */

            //Do something with this data...

            $('#graph_space').highcharts({
                title: {
                    text: 'GateCount Data for Miami Locations',
                    x: -20
                },
                subtitle: {
                    text: 'GateCountDataDump',
                    x: -20
                },
                xAxis: {
                    allowDecimals: false,
                    type: "datetime",
                    labels: {
                        formatter: function () {
                            return this.value; // clean, unformatted number for year
                        }
                    }
                },
                yAxis: {
                    title: {
                        text: 'Count'
                    },
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {

                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name: categories[0].Location,
                    data: categories[0].Data
                }, {
                    name: categories[1].Location,
                    data: categories[1].Data
                }, {
                    name: categories[2].Location,
                    data: categories[2].Data
                }, {
                    name: categories[3].Location,
                    data: categories[3].Data
                }]
            });
        });

        $("#database_by_usage").click(function() {
            //Show the description
            hideDescriptions();
            showDescription(this.id);

            //Title, Publisher, ISSN, Fund Code, Total Costs, Uses, Cost Per Use

            var db_usage_2012_json = getDatabase2012();
            var db_usage_2013_json = getDatabase2013();
            var db_usage_2014_json = getDatabase2014();

            //This determines usage across all databases. Sort by FundCode and Usage
            var fundCodes_array = [];

            //Repeat variables to save memory
            var shouldAdd = true;
            var index = -1;
            var i = 0;
            var j = 0;

            for(i = 0; i < db_usage_2012_json.length; i++){
                db_usage_2012_json[i][3] = getSecondarySubject(db_usage_2012_json[i][3]);
            }
			for(i = 0; i < db_usage_2013_json.length; i++){
				db_usage_2013_json[i][4] = getSecondarySubject(db_usage_2013_json[i][4]);
			}
			for(i = 0; i < db_usage_2014_json.length; i++){
				db_usage_2014_json[i][4] = getSecondarySubject(db_usage_2014_json[i][4]);
			}


            //Do parsing for each individual db since 2012
            for(j = 0; j < db_usage_2012_json.length; j++){
                shouldAdd = true;
                index = -1;
                for(i = 0; i < fundCodes_array.length; i++){
                    if(db_usage_2012_json[j][3] == fundCodes_array[i].Fund_Code){
                        shouldAdd = false;
                        index = i;
                        i = fundCodes_array.length;
                    }
                }

                if(shouldAdd){
                    fundCodes_array[fundCodes_array.length] = {"Fund_Code" : db_usage_2012_json[j][3], "Data" : [], "Cost" : 0};
                    index = fundCodes_array.length-1;
                    //console.log(fundCodes_array[index].Fund_Code);
                }

                fundCodes_array[index].Cost = fundCodes_array[index].Cost + parseInt(db_usage_2012_json[j][4].substring(1,db_usage_2012_json[j][4].length));
            }

            for(j = 1; j < db_usage_2013_json.length; j++){
                shouldAdd = true;
                index = -1;
                for(i = 0; i < fundCodes_array.length; i++){
                    if(db_usage_2013_json[j][4] == fundCodes_array[i].Fund_Code){
                        shouldAdd = false;
                        index = i;
                        i = fundCodes_array.length;
                    }
                }

                if(shouldAdd){
                    fundCodes_array[fundCodes_array.length] = {"Fund_Code" : db_usage_2013_json[j][4], "Data" : [], "Cost" : 0};
                    index = fundCodes_array.length-1;
                    //console.log(fundCodes_array[index].Fund_Code);
                }

                fundCodes_array[index].Cost = fundCodes_array[index].Cost + parseInt(db_usage_2013_json[j][5].substring(1,db_usage_2013_json[j][5].length));
            }

            for(j = 1; j < db_usage_2014_json.length; j++){
                shouldAdd = true;
                index = -1;
                for(i = 0; i < fundCodes_array.length; i++){
                    if(db_usage_2014_json[j][4] == fundCodes_array[i].Fund_Code){
                        shouldAdd = false;
                        index = i;
                        i = fundCodes_array.length;
                    }
                }

                if(shouldAdd){
                    fundCodes_array[fundCodes_array.length] = {"Fund_Code" : db_usage_2014_json[j][4], "Data" : [], "Cost" : 0};
                    index = fundCodes_array.length-1;
                    //console.log(fundCodes_array[index].Fund_Code);
                }

                fundCodes_array[index].Cost = fundCodes_array[index].Cost + parseInt(db_usage_2014_json[j][5].substring(1,db_usage_2014_json[j][5].length));
            }

            var fund_length = fundCodes_array.length;

            var series = [];
            var names  = [];
            while(fund_length--){
                console.log(fundCodes_array[fund_length].Fund_Code + " : " + fundCodes_array[fund_length].Cost);
                names.push(fundCodes_array[fund_length].Fund_Code);
                series.push({
                    name: fundCodes_array[fund_length].Fund_Code,
                    data: [fundCodes_array[fund_length].Cost]
                });
            }
            $('#graph_space').highcharts({
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: 'Total Cost by Fund Code'
                    },
                    subtitle: {
                        text: 'Source: db_usage 2012,2013,2014'
                    },
                    xAxis: {
                        categories: ['Fund Code Statistics'],
                        title: {
                            text: null
                        }
                    },
                    yAxis: {
                        min: 0,
                        max: 65000,
                        title: {
                            text: 'Cost',
                            align: 'high'
                        },
                        labels: {
                            overflow: 'justify'
                        }
                    },
                    tooltip: {
                        valueSuffix: ' dollars'
                    },
                    plotOptions: {
                        bar: {
                            dataLabels: {
                                enabled: true
                            }
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'top',
                        x: -40,
                        y: 80,
                        floating: true,
                        borderWidth: 1,
                        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                        shadow: true
                    },
                    credits: {
                        enabled: false
                    },
                    series: series
                });


        });

        $("#total_fundcode_cost").click(function() {
            //Show the description
            hideDescriptions();
            showDescription(this.id);

            //Title, Publisher, ISSN, Fund Code, Total Costs, Uses, Cost Per Use

            var db_usage_2012_json = getDatabase2012();
            var db_usage_2013_json = getDatabase2013();
            var db_usage_2014_json = getDatabase2014();

            //This determines usage across all databases. Sort by FundCode and Usage
            var fundCodes_array = [{"Year" : 2012, "Cost" : 0},
                {"Year" : 2013, "Cost" : 0},
                {"Year" : 2014, "Cost" : 0}];

            var j = 0;


            //Do parsing for each individual db since 2012
            for(j = 0; j < db_usage_2012_json.length; j++){

                fundCodes_array[0].Cost = fundCodes_array[0].Cost + parseInt(db_usage_2012_json[j][4].substring(1,db_usage_2012_json[j][4].length));
            }

            for(j = 1; j < db_usage_2013_json.length; j++){
                fundCodes_array[1].Cost = fundCodes_array[1].Cost + parseInt(db_usage_2013_json[j][5].substring(1,db_usage_2013_json[j][5].length));
            }

            for(j = 1; j < db_usage_2014_json.length; j++){
                fundCodes_array[2].Cost = fundCodes_array[2].Cost + parseInt(db_usage_2014_json[j][5].substring(1,db_usage_2014_json[j][5].length));
            }

            var fund_length = fundCodes_array.length;

            var series = [];
            var names  = ["2012", "2013", "2014"];
            while(fund_length--){
                console.log(fundCodes_array[fund_length].Cost);
                series.push({
                    name: [fundCodes_array[fund_length].Year],
                    data: [fundCodes_array[fund_length].Cost]
                });
            }
            $('#graph_space').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Total Cost by Year'
                },
                subtitle: {
                    text: 'Source: db_usage 2012,2013,2014'
                },
                xAxis: {
                    categories: ["By Year"],
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Cost',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                tooltip: {
                    valueSuffix: ' dollars'
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -40,
                    y: 80,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                    shadow: true
                },
                credits: {
                    enabled: false
                },
                series: series
            });


        });

        $("#total_fundcode_use").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //Title, Publisher, ISSN, Fund Code, Total Costs, Uses, Cost Per Use

            var db_usage_2012_json = getDatabase2012();
            var db_usage_2013_json = getDatabase2013();
            var db_usage_2014_json = getDatabase2014();

            //This determines usage across all databases. Sort by FundCode and Usage
            var fundCodes_array = [];

            //Repeat variables to save memory
            var shouldAdd = true;
            var index = -1;
            var i = 0;
            var j = 0;
			for(i = 0; i < db_usage_2012_json.length; i++){
                db_usage_2012_json[i][3] = getSecondarySubject(db_usage_2012_json[i][3]);
            }
			for(i = 0; i < db_usage_2013_json.length; i++){
				db_usage_2013_json[i][4] = getSecondarySubject(db_usage_2013_json[i][4]);
			}
			for(i = 0; i < db_usage_2014_json.length; i++){
				db_usage_2014_json[i][4] = getSecondarySubject(db_usage_2014_json[i][4]);
			}


            //Do parsing for each individual db since 2012
            for(j = 0; j < db_usage_2012_json.length; j++){
                shouldAdd = true;
                index = -1;
                for(i = 0; i < fundCodes_array.length; i++){
                    if(db_usage_2012_json[j][3] == fundCodes_array[i].Fund_Code){
                        shouldAdd = false;
                        index = i;
                        i = fundCodes_array.length;
                    }
                }

                if(shouldAdd){
                    fundCodes_array[fundCodes_array.length] = {"Fund_Code" : db_usage_2012_json[j][3], "Data" : [], "Uses" : 0};
                    index = fundCodes_array.length-1;
                    //console.log(fundCodes_array[index].Fund_Code);
                }

                fundCodes_array[index].Uses = fundCodes_array[index].Uses + parseInt(db_usage_2012_json[j][5]);
            }

            for(j = 1; j < db_usage_2013_json.length; j++){
                shouldAdd = true;
                index = -1;
                for(i = 0; i < fundCodes_array.length; i++){
                    if(db_usage_2013_json[j][4] == fundCodes_array[i].Fund_Code){
                        shouldAdd = false;
                        index = i;
                        i = fundCodes_array.length;
                    }
                }

                if(shouldAdd){
                    fundCodes_array[fundCodes_array.length] = {"Fund_Code" : db_usage_2013_json[j][4], "Data" : [], "Uses" : 0};
                    index = fundCodes_array.length-1;
                    //console.log(fundCodes_array[index].Fund_Code);
                }

                fundCodes_array[index].Uses = fundCodes_array[index].Uses + parseInt(db_usage_2013_json[j][6]);
            }

            for(j = 1; j < db_usage_2014_json.length; j++){
                shouldAdd = true;
                index = -1;
                for(i = 0; i < fundCodes_array.length; i++){
                    if(db_usage_2014_json[j][4] == fundCodes_array[i].Fund_Code){
                        shouldAdd = false;
                        index = i;
                        i = fundCodes_array.length;
                    }
                }

                if(shouldAdd){
                    fundCodes_array[fundCodes_array.length] = {"Fund_Code" : db_usage_2014_json[j][4], "Data" : [], "Uses" : 0};
                    index = fundCodes_array.length-1;
                    //console.log(fundCodes_array[index].Fund_Code);
                }

                fundCodes_array[index].Uses = fundCodes_array[index].Uses + parseInt(db_usage_2014_json[j][6]);
            }

            var fund_length = fundCodes_array.length;

            var series = [];
            var names  = [];
            while(fund_length--){
                console.log(fundCodes_array[fund_length].Fund_Code + " : " + fundCodes_array[fund_length].Uses);
                names.push(fundCodes_array[fund_length].Fund_Code);
                series.push({
                    name: fundCodes_array[fund_length].Fund_Code,
                    data: [fundCodes_array[fund_length].Uses]
                });
            }
            $('#graph_space').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Total Use by Fund Code'
                },
                subtitle: {
                    text: 'Source: db_usage 2012,2013,2014'
                },
                xAxis: {
                    categories: ['Fund Code Statistics'],
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    max: 17500,
                    title: {
                        text: 'Use',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                tooltip: {
                    valueSuffix: ' uses'
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -40,
                    y: 80,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                    shadow: true
                },
                credits: {
                    enabled: false
                },
                series: series
            });


        });

        $("#total_fundcode_use_per_year").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //Title, Publisher, ISSN, Fund Code, Total Costs, Uses, Cost Per Use

            var db_usage_2012_json = getDatabase2012();
            var db_usage_2013_json = getDatabase2013();
            var db_usage_2014_json = getDatabase2014();

            //This determines usage across all databases. Sort by FundCode and Usage
            var fundCodes_array = [{"Year" : 2012, "Uses" : 0},
                {"Year" : 2013, "Uses" : 0},
                {"Year" : 2014, "Uses" : 0}];

            var j = 0;


            //Do parsing for each individual db since 2012
            for(j = 0; j < db_usage_2012_json.length; j++){

                fundCodes_array[0].Uses = fundCodes_array[0].Uses + parseInt(db_usage_2012_json[j][5]);
            }

            for(j = 1; j < db_usage_2013_json.length; j++){
                fundCodes_array[1].Uses = fundCodes_array[1].Uses + parseInt(db_usage_2013_json[j][6]);
            }

            for(j = 1; j < db_usage_2014_json.length; j++){
                fundCodes_array[2].Uses = fundCodes_array[2].Uses + parseInt(db_usage_2014_json[j][6]);
            }

            var fund_length = fundCodes_array.length;

            var series = [];
            var names  = ["2012", "2013", "2014"];
            while(fund_length--){
                console.log(fundCodes_array[fund_length].Uses);
                series.push({
                    name: [fundCodes_array[fund_length].Year],
                    data: [fundCodes_array[fund_length].Uses]
                });
            }
            $('#graph_space').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Total Use by Year'
                },
                subtitle: {
                    text: 'Source: db_usage 2012,2013,2014'
                },
                xAxis: {
                    categories: ["By Year"],
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Use',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                tooltip: {
                    valueSuffix: ' uses'
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -40,
                    y: 80,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                    shadow: true
                },
                credits: {
                    enabled: false
                },
                series: series
            });


        });

        $("#cost_per_use").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //Title, Publisher, ISSN, Fund Code, Total Costs, Uses, Cost Per Use

            var db_usage_2012_json = getDatabase2012();
            var db_usage_2013_json = getDatabase2013();
            var db_usage_2014_json = getDatabase2014();

            //This determines usage across all databases. Sort by FundCode and Usage
            var fundCodes_array = [];

            //Repeat variables to save memory
            var shouldAdd = true;
            var index = -1;
            var i = 0;
            var j = 0;

            for(i = 0; i < db_usage_2012_json.length; i++){
                db_usage_2012_json[i][3] = getSecondarySubject(db_usage_2012_json[i][3]);
            }
			for(i = 0; i < db_usage_2013_json.length; i++){
				db_usage_2013_json[i][4] = getSecondarySubject(db_usage_2013_json[i][4]);
			}
			for(i = 0; i < db_usage_2014_json.length; i++){
				db_usage_2014_json[i][4] = getSecondarySubject(db_usage_2014_json[i][4]);
			}


            //Do parsing for each individual db since 2012
            for(j = 0; j < db_usage_2012_json.length; j++){
                shouldAdd = true;
                index = -1;
                for(i = 0; i < fundCodes_array.length; i++){
                    if(db_usage_2012_json[j][3] == fundCodes_array[i].Fund_Code){
                        shouldAdd = false;
                        index = i;
                        i = fundCodes_array.length;
                    }
                }

                if(shouldAdd){
                    fundCodes_array[fundCodes_array.length] = {"Fund_Code" : db_usage_2012_json[j][3], "Data" : [], "CostPerUse" : 0};
                    index = fundCodes_array.length-1;
                    //console.log(fundCodes_array[index].Fund_Code);
                }

                fundCodes_array[index].CostPerUse = fundCodes_array[index].CostPerUse + parseInt(db_usage_2012_json[j][6].substring(1,db_usage_2012_json[j][6].length));
            }

            for(j = 1; j < db_usage_2013_json.length; j++){
                shouldAdd = true;
                index = -1;
                for(i = 0; i < fundCodes_array.length; i++){
                    if(db_usage_2013_json[j][4] == fundCodes_array[i].Fund_Code){
                        shouldAdd = false;
                        index = i;
                        i = fundCodes_array.length;
                    }
                }

                if(shouldAdd){
                    fundCodes_array[fundCodes_array.length] = {"Fund_Code" : db_usage_2013_json[j][4], "Data" : [], "CostPerUse" : 0};
                    index = fundCodes_array.length-1;
                    //console.log(fundCodes_array[index].Fund_Code);
                }

                fundCodes_array[index].CostPerUse = fundCodes_array[index].CostPerUse + parseInt(db_usage_2013_json[j][7].substring(1,db_usage_2013_json[j][7].length));
            }

            for(j = 1; j < db_usage_2014_json.length; j++){
                shouldAdd = true;
                index = -1;
                for(i = 0; i < fundCodes_array.length; i++){
                    if(db_usage_2014_json[j][4] == fundCodes_array[i].Fund_Code){
                        shouldAdd = false;
                        index = i;
                        i = fundCodes_array.length;
                    }
                }

                if(shouldAdd){
                    fundCodes_array[fundCodes_array.length] = {"Fund_Code" : db_usage_2014_json[j][4], "Data" : [], "CostPerUse" : 0};
                    index = fundCodes_array.length-1;
                    //console.log(fundCodes_array[index].Fund_Code);
                }

                fundCodes_array[index].CostPerUse = fundCodes_array[index].CostPerUse + parseInt(db_usage_2014_json[j][7].substring(1,db_usage_2014_json[j][7].length));
            }

            var fund_length = fundCodes_array.length;

            var series = [];
            var names  = [];
            while(fund_length--){
                console.log(fundCodes_array[fund_length].Fund_Code + " : " + fundCodes_array[fund_length].CostPerUse);
                names.push(fundCodes_array[fund_length].Fund_Code);
                series.push({
                    name: fundCodes_array[fund_length].Fund_Code,
                    data: [fundCodes_array[fund_length].CostPerUse]
                });
            }
            $('#graph_space').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Cost Per Use by Fund Code'
                },
                subtitle: {
                    text: 'Source: db_usage 2012,2013,2014'
                },
                xAxis: {
                    categories: ['Fund Code Statistics'],
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    max: 8000,
                    title: {
                        text: 'Cost per Use',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                tooltip: {
                    valueSuffix: ' $/use'
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -40,
                    y: 80,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                    shadow: true
                },
                credits: {
                    enabled: false
                },
                series: series
            });


        });

        $("#cost_per_use_by_year").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //Title, Publisher, ISSN, Fund Code, Total Costs, Uses, Cost Per Use

            var db_usage_2012_json = getDatabase2012();
            var db_usage_2013_json = getDatabase2013();
            var db_usage_2014_json = getDatabase2014();

            //This determines usage across all databases. Sort by FundCode and Usage
            var fundCodes_array = [{"Year" : 2012, "CostPerUse" : 0},
                {"Year" : 2013, "CostPerUse" : 0},
                {"Year" : 2014, "CostPerUse" : 0}];

            var j = 0;


            //Do parsing for each individual db since 2012
            for(j = 0; j < db_usage_2012_json.length; j++){

                fundCodes_array[0].CostPerUse = fundCodes_array[0].CostPerUse + parseInt(db_usage_2012_json[j][6].substring(1,db_usage_2012_json[j][6].length));
            }

            for(j = 1; j < db_usage_2013_json.length; j++){
                fundCodes_array[1].CostPerUse = fundCodes_array[1].CostPerUse + parseInt(db_usage_2013_json[j][7].substring(1,db_usage_2013_json[j][7].length));
            }

            for(j = 1; j < db_usage_2014_json.length; j++){
                fundCodes_array[2].CostPerUse = fundCodes_array[2].CostPerUse + parseInt(db_usage_2014_json[j][7].substring(1,db_usage_2014_json[j][7].length));
            }

            var fund_length = fundCodes_array.length;

            var series = [];
            var names  = ["2012", "2013", "2014"];
            while(fund_length--){
                console.log(fundCodes_array[fund_length].CostPerUse);
                series.push({
                    name: [fundCodes_array[fund_length].Year],
                    data: [fundCodes_array[fund_length].CostPerUse]
                });
            }
            $('#graph_space').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Total Cost Per Use by Year'
                },
                subtitle: {
                    text: 'Source: db_usage 2012,2013,2014'
                },
                xAxis: {
                    categories: ["By Year"],
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Cost/Use',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                tooltip: {
                    valueSuffix: ' $/use'
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -40,
                    y: 80,
                    maxHeight: 0,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                    shadow: true,
                    display: false
                },
                credits: {
                    enabled: false
                },
                series: series
            });

            //Something to modify the legend

        });

        $("#highest_cost_per_use").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //Title, Publisher, ISSN, Fund Code, Total Costs, Uses, Cost Per Use

            var db_usage_2012_json = getDatabase2012();
            var db_usage_2013_json = getDatabase2013();
            var db_usage_2014_json = getDatabase2014();

            //This determines usage across all databases. Sort by FundCode and Usage
            var fundCodes_array = [];

            //Repeat variables to save memory
            var shouldAdd = true;
            var index = -1;
            var i = 0;
            var j = 0;

            for(i = 0; i < db_usage_2012_json.length; i++){
                db_usage_2012_json[i][3] = getSecondarySubject(db_usage_2012_json[i][3]);
            }
			for(i = 0; i < db_usage_2013_json.length; i++){
				db_usage_2013_json[i][4] = getSecondarySubject(db_usage_2013_json[i][4]);
			}
			for(i = 0; i < db_usage_2014_json.length; i++){
				db_usage_2014_json[i][4] = getSecondarySubject(db_usage_2014_json[i][4]);
			}


            //Do parsing for each individual db since 2012
            for(j = 0; j < db_usage_2012_json.length; j++){
                shouldAdd = true;
                index = -1;
                for(i = 0; i < fundCodes_array.length; i++){
                    if(db_usage_2012_json[j][3] == fundCodes_array[i].Fund_Code){
                        shouldAdd = false;
                        index = i;
                        i = fundCodes_array.length;
                    }
                }

                if(shouldAdd){
                    fundCodes_array[fundCodes_array.length] = {"Fund_Code" : db_usage_2012_json[j][3], "Data" : [], "CostPerUse" : 0, "Uses" : 0};
                    index = fundCodes_array.length-1;
                    //console.log(fundCodes_array[index].Fund_Code);
                }

                fundCodes_array[index].CostPerUse = fundCodes_array[index].CostPerUse + parseInt(db_usage_2012_json[j][6].substring(1,db_usage_2012_json[j][6].length));
                fundCodes_array[index].Uses = fundCodes_array[index].Uses + parseInt(db_usage_2012_json[j][5]);
            }

            for(j = 1; j < db_usage_2013_json.length; j++){
                shouldAdd = true;
                index = -1;
                for(i = 0; i < fundCodes_array.length; i++){
                    if(db_usage_2013_json[j][4] == fundCodes_array[i].Fund_Code){
                        shouldAdd = false;
                        index = i;
                        i = fundCodes_array.length;
                    }
                }

                if(shouldAdd){
                    fundCodes_array[fundCodes_array.length] = {"Fund_Code" : db_usage_2013_json[j][4], "Data" : [], "CostPerUse" : 0, "Uses" : 0};
                    index = fundCodes_array.length-1;
                    //console.log(fundCodes_array[index].Fund_Code);
                }

                fundCodes_array[index].CostPerUse = fundCodes_array[index].CostPerUse + parseInt(db_usage_2013_json[j][7].substring(1,db_usage_2013_json[j][7].length));
                fundCodes_array[index].Uses = fundCodes_array[index].Uses + parseInt(db_usage_2013_json[j][6]);
            }

            for(j = 1; j < db_usage_2014_json.length; j++){
                shouldAdd = true;
                index = -1;
                for(i = 0; i < fundCodes_array.length; i++){
                    if(db_usage_2014_json[j][4] == fundCodes_array[i].Fund_Code){
                        shouldAdd = false;
                        index = i;
                        i = fundCodes_array.length;
                    }
                }

                if(shouldAdd){
                    fundCodes_array[fundCodes_array.length] = {"Fund_Code" : db_usage_2014_json[j][4], "Data" : [], "CostPerUse" : 0, "Uses" : 0};
                    index = fundCodes_array.length-1;
                    //console.log(fundCodes_array[index].Fund_Code);
                }

                fundCodes_array[index].CostPerUse = fundCodes_array[index].CostPerUse + parseInt(db_usage_2014_json[j][7].substring(1,db_usage_2014_json[j][7].length));
                fundCodes_array[index].Uses = fundCodes_array[index].Uses + parseInt(db_usage_2014_json[j][6]);
            }

            var fund_length = fundCodes_array.length;

            var series = [];
            var names  = [];

            //Sort into the highest costPerUse... I will simply do a check to make it possible.
            var top10 = [{"Fund_Code" : "", CostPerUse : 0, Uses : 0},{"Fund_Code" : "", CostPerUse : 0, Uses : 0},{"Fund_Code" : "", CostPerUse : 0, Uses : 0},{"Fund_Code" : "", CostPerUse : 0, Uses : 0},{"Fund_Code" : "", CostPerUse : 0, Uses : 0},{"Fund_Code" : "", CostPerUse : 0, Uses : 0},{"Fund_Code" : "", CostPerUse : 0, Uses : 0},{"Fund_Code" : "", CostPerUse : 0, Uses : 0},{"Fund_Code" : "", CostPerUse : 0, Uses : 0},{"Fund_Code" : "", CostPerUse : 0, Uses : 0}];

            //Just use bubble sort. There isn't a ton of data so it doesn't matter.
            for(i = 0; i < fundCodes_array.length; i++){
                for(j = 0; j < top10.length; j++){
                    if(top10[j].CostPerUse < fundCodes_array[i].CostPerUse){
                        //It was larger, do a shift and place it in the right position
                        for(var k = top10.length-1; k > j; k--)
                            top10[k] = top10[k-1];
                        top10[j] = fundCodes_array[i];
                        j = top10.length;
                    }
                }
            }

            var result = "<div><table id='top_ten'><tr><th>Rank</th><th>Fund Code</th><th>Cost Per Use</th><th>Uses</th></tr>";

            for(i = 0; i < 10; i++){
                result = result + "<tr><td>" + (i+1) + "</td><td style='text-align:left;'>" + top10[i].Fund_Code + "</td><td>" + top10[i].CostPerUse + "</td><td>" + top10[i].Uses + "</td></tr>";
            }

            result += "</table></div>";
            $("#graph_space").html(result);

        });

        $("#equipment_by_location").click(function(){
            //Show the description
            hideDescriptions();
            showDescription(this.id);

            var data = getCircDataDump();

            var length = data.length;

            //The Tags are what I found in the spreasheet that was sent to me. There are some that are not being accounted
            //for, but I don't know which library they are a part of so I can't do anything with that data.
            var graph_data = [{
                Name: "Art/Arch",
                Count: 0,
                Tags: [
                    "aacmp",
                    "aaeq",
                    "aaff",
                    "aafo",
                    "aags",
                    "aali",
                    "aap",
                    "aar",
                    "aars",
                    "aasup"
                ]
            },{
                Name: "GIL",
                Count: 0,
                Tags: [
                    "cat",
                    "ccat",
                    "docc",
                    "doceu",
                    "docfm",
                    "docli",
                    "doco",
                    "docr",
                    "docrs",
                    "docsr",
                    "docun"
                ]
            },{
                Name: "Hamilton",
                Count: 0,
                Tags: [
                    "haeq",
                    "hali",
                    "halju",
                    "hamc",
                    "hamp",
                    "hanb",
                    "har",
                    "hars"
                ]
            }, {
                Name: "IMC",
                Count: 0,
                Tags: [
                    "imbk",
                    "imbkt",
                    "imci",
                    "imcur",
                    "imdvd",
                    "imeq",
                    "imjb",
                    "imje",
                    "imju",
                    "imlng",
                    "imm",
                    "imp",
                    "imr",
                    "imrdr",
                    "imrs",
                    "imvc",
                    "imvr"
                ]
            }, {
                Name: "King",
                Count: 0,
                Tags: [
                    "kngco",
                    "kngeq",
                    "kngfo",
                    "kngin",
                    "kngle",
                    "kngli",
                    "kngp",
                    "kngr",
                    "kngrs",
                    "kngsl",
                    "kngsu"
                ]
            }, {
                Name: "Middletown",
                Count: 0,
                Tags: [
                    "mdim",
                    "mdju",
                    "mdli",
                    "mdr"
                ]
            },{
                Name: "Music",
                Count: 0,
                Tags: [
                    "muc",
                    "mufo",
                    "muli",
                    "mup",
                    "mur",
                    "murc",
                    "murcd"
                ]
            },{
                Name: "Sword",
                Count: 0,
                Tags: [
                    "rg2pk",
                    "rg2ps",
                    "rg2ta",
                    "rg2td",
                    "rg2tg",
                    "rg2tk",
                    "rg2tm",
                    "rg2ts",
                    "rgspa",
                    "rgspk",
                    "rgsps",
                    "rgstk",
                    "rgsts"
                ]
            },{
                Name: "BEST",
                Count: 0,
                Tags: [
                    "sceq",
                    "scfo",
                    "scfor",
                    "schaa",
                    "schsm",
                    "scli",
                    "scmpc",
                    "scmpv",
                    "scov",
                    "scp",
                    "scr",
                    "scrm",
                    "scrs",
                    "scsf"
                ]
            },{
                Name: "Hughes",
                Count: 14,
                Tags: []
            },{
                Name: "Special Collections",
                Count: 0,
                Tags: [
                    "spcfo",
                    "spe18",
                    "spec",
                    "speck",
                    "speco",
                    "specp",
                    "specs",
                    "specv",
                    "spegr",
                    "spemy",
                    "spevf",
                    "spkfo",
                    "spmss"
                ]
            }];
            var found = false;

            while(length--){
                found = false;
                for(var i = 0; i < graph_data.length; i++){
                    for(var k = 0; k < graph_data[i].Tags.length; k++)
                        if(data[length].LocationID == graph_data[i].Tags[k]){
                            //Increment the count
                            graph_data[i].Count = graph_data[i].Count + parseInt(data[length].CheckoutNumbers);
                            found = true;
                            //console.log("Repeat Location: " + data[length].LocationID);
                        }
                }
                if(!found){
                    //graph_data[graph_data.length] = {Location: data[length].LocationID, Count: parseInt(data[length].CheckoutNumbers)};
                    //console.log("Unknown: " + data[length].LocationID);
                }
            }



            var series = [];
            for(var j = 0; j < graph_data.length; j++){
                //console.log(graph_data[j].Name + " : " + graph_data[j].Count);
                series.push({
                    name: graph_data[j].Name,
                    data: [graph_data[j].Count]
                });
            }

            $('#graph_space').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Equipment Use By Location'
                },
                subtitle: {
                    text: 'Source: DailyCircDataDump'
                },
                xAxis: {
                    categories: ['Locations'],
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    min: 0,
                    max: 45000,
                    title: {
                        text: 'Checkouts',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                tooltip: {
                    valueSuffix: ' Checkouts'
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'top',
                    x: -40,
                    y: 80,
                    floating: true,
                    borderWidth: 1,
                    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                    shadow: true
                },
                credits: {
                    enabled: false
                },
                series: series
            });


        });

        $("#instructionNew").click(function(){
            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //ID, Location, Date (yyyy-mm-dd hh-mm-ss), Count
            var json = getInstructionData();
            var json_length = json.length;
            var categories = [
                {
                    Name: "In Library",
                    Count: 0
                },{
                    Name: "Not In Library",
                    Count: 0
                }];

            //How long the data set is (50,000 for this set)
            //alert(json_length);

            for(var i = json_length - 1; i > 0; i--){
                if(json[i].FIELD8.toUpperCase().indexOf("OTHER") == -1){
                    categories[0].Count = categories[0].Count + 1;
                }else{
                    categories[1].Count = categories[1].Count + 1;
                }

            }

            /*
             var cat_length = categories.length;
             while(cat_length--){
             alert(categories[cat_length].Location + " " + categories[cat_length].Count_Data);
             }
             */

            //Do something with this data...

            $('#graph_space').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Classes Taught In Libraries (Jan-Mar 2015)',
                    x: -20
                },
                subtitle: {
                    text: 'Class Location Count',
                    x: -20
                },
                xAxis: {
                    categories: ['Location']
                },
                yAxis: {
                    title: {
                        text: 'Class Count',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name: "In Library",
                    data: [categories[0].Count]
                }, {
                    name: "Not In Library",
                    data: [categories[1].Count]
                }]
            });
        });

        $("#instructionOld").click(function(){
            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //ID, Location, Date (yyyy-mm-dd hh-mm-ss), Count
            var json = getOldInstructionData();
            var json_length = json.length;
            var categories = [
                {
                    Name: "In Library",
                    Count: 0
                },{
                    Name: "Not In Library",
                    Count: 0
                }];

            //How long the data set is (50,000 for this set)
            //alert(json_length);

            for(var i = json_length - 1; i > 0; i--){
                if(json[i].FIELD6.toUpperCase().indexOf("KING") == 0 || json[i].FIELD6.toUpperCase().indexOf("B.E.S.T.") == 0 || json[i].FIELD6.toUpperCase().indexOf("LIBRARY") == 0) {
                    categories[0].Count = categories[0].Count + 1;
                }else{
                    categories[1].Count = categories[1].Count + 1;
                }

            }

            /*
             var cat_length = categories.length;
             while(cat_length--){
             alert(categories[cat_length].Location + " " + categories[cat_length].Count_Data);
             }
             */

            //Do something with this data...

            $('#graph_space').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Classes Taught In Libraries (2009-2013)',
                    x: -20
                },
                subtitle: {
                    text: 'Class Location Count',
                    x: -20
                },
                xAxis: {
                    categories: ['Location']
                },
                yAxis: {
                    title: {
                        text: 'Class Count',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name: "In Library",
                    data: [categories[0].Count]
                }, {
                    name: "Not In Library",
                    data: [categories[1].Count]
                }]
            });
        });

$("#total_fundcode_use_pie").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //Title, Publisher, ISSN, Fund Code, Total Costs, Uses, Cost Per Use

            var db_usage_2012_json = getDatabase2012();
            var db_usage_2013_json = getDatabase2013();
            var db_usage_2014_json = getDatabase2014();

            //This determines usage across all databases. Sort by FundCode and Usage
            var fundCodes_array = [];

            //Repeat variables to save memory
            var shouldAdd = true;
            var index = -1;
            var i = 0;
            var j = 0;
			for(i = 0; i < db_usage_2012_json.length; i++){
                db_usage_2012_json[i][3] = getPrimarySubject(db_usage_2012_json[i][3]);
            }
			for(i = 0; i < db_usage_2013_json.length; i++){
				db_usage_2013_json[i][4] = getPrimarySubject(db_usage_2013_json[i][4]);
			}
			for(i = 0; i < db_usage_2014_json.length; i++){
				db_usage_2014_json[i][4] = getPrimarySubject(db_usage_2014_json[i][4]);
			}


            //Do parsing for each individual db since 2012
            for(j = 0; j < db_usage_2012_json.length; j++){
                shouldAdd = true;
                index = -1;
                for(i = 0; i < fundCodes_array.length; i++){
                    if(db_usage_2012_json[j][3] == fundCodes_array[i].Fund_Code){
                        shouldAdd = false;
                        index = i;
                        i = fundCodes_array.length;
                    }
                }

                if(shouldAdd){
                    fundCodes_array[fundCodes_array.length] = {"Fund_Code" : db_usage_2012_json[j][3], "Data" : [], "Uses" : 0};
                    index = fundCodes_array.length-1;
                    //console.log(fundCodes_array[index].Fund_Code);
                }

                fundCodes_array[index].Uses = fundCodes_array[index].Uses + parseInt(db_usage_2012_json[j][5]);
            }

            for(j = 1; j < db_usage_2013_json.length; j++){
                shouldAdd = true;
                index = -1;
                for(i = 0; i < fundCodes_array.length; i++){
                    if(db_usage_2013_json[j][4] == fundCodes_array[i].Fund_Code){
                        shouldAdd = false;
                        index = i;
                        i = fundCodes_array.length;
                    }
                }

                if(shouldAdd){
                    fundCodes_array[fundCodes_array.length] = {"Fund_Code" : db_usage_2013_json[j][4], "Data" : [], "Uses" : 0};
                    index = fundCodes_array.length-1;
                    //console.log(fundCodes_array[index].Fund_Code);
                }

                fundCodes_array[index].Uses = fundCodes_array[index].Uses + parseInt(db_usage_2013_json[j][6]);
            }

            for(j = 1; j < db_usage_2014_json.length; j++){
                shouldAdd = true;
                index = -1;
                for(i = 0; i < fundCodes_array.length; i++){
                    if(db_usage_2014_json[j][4] == fundCodes_array[i].Fund_Code){
                        shouldAdd = false;
                        index = i;
                        i = fundCodes_array.length;
                    }
                }

                if(shouldAdd){
                    fundCodes_array[fundCodes_array.length] = {"Fund_Code" : db_usage_2014_json[j][4], "Data" : [], "Uses" : 0};
                    index = fundCodes_array.length-1;
                    //console.log(fundCodes_array[index].Fund_Code);
                }

                fundCodes_array[index].Uses = fundCodes_array[index].Uses + parseInt(db_usage_2014_json[j][6]);
            }

            var fund_length = fundCodes_array.length;

            var series = [];
            var names  = [];
		var total = 0.0;
		for(var i = 0; i < fundCodes_array.length; i++){
			total += fundCodes_array[i].Uses;
		}

            while(fund_length--){
                console.log(fundCodes_array[fund_length].Fund_Code + " : " + fundCodes_array[fund_length].Uses);
                names.push(fundCodes_array[fund_length].Fund_Code);
                series[series.length] = [fundCodes_array[fund_length].Fund_Code,fundCodes_array[fund_length].Uses/total]
            }
            
	$('#graph_space').highcharts({
		chart: {
		    plotBackgroundColor: null,
		    plotBorderWidth: null,
		    plotShadow: false
		},
		title: {
		    text: 'Ejournal Usage by Subject'
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
            		type: 'pie',
            		name: 'Ejournal Share',
            		data: series
		}]
	    });


        });

        /** All of Johnny's Stuff */
        $("#Divisional").click(function(){
            hideDescriptions();
            showDescription(this.id);
            //ID, Location, Date (yyyy-mm-dd hh-mm-ss), Count
            var json = getInstructionData();
            var json_length = json.length;
            var categories = [
                {
                    Name: "FSB",
                    Count: 0
                },{
                    Name: "CAS",
                    Count: 0
                }];

            //How long the data set is (50,000 for this set)
            //alert(json_length);

            for(var i = json_length - 1; i > 0; i--){
                if(json[i].FIELD6.toUpperCase().indexOf("FSB") > -1) {
                    categories[0].Count = categories[0].Count + 1;
                }
                if (json[i].FIELD6.toUpperCase().indexOf("CAS") > -1) {
                    categories[1].Count = categories[1].Count + 1;
                }
            }


            $('#graph_space').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Division Taught Courses',
                    x: -20
                },
                subtitle: {
                    text: 'Division Class Count',
                    x: -20
                },
                xAxis: {
                    categories: ['Division']
                },
                yAxis: {
                    title: {
                        text: 'Class Count',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name: "FSB",
                    data: [categories[0].Count]
                }, {
                    name: "CAS",
                    data: [categories[1].Count]
                }]
            });
        });


        $("#DefineLO").click(function(){
            hideDescriptions();
            showDescription(this.id);
            //ID, Location, Date (yyyy-mm-dd hh-mm-ss), Count
            var json = getInstructionData();
            var json_length = json.length;
            var categories = [
                {
                    Name: "D1",
                    Count: 0
                },{
                    Name: "D2",
                    Count: 0
                },{
                    Name: "D3",
                    Count: 0
                },{
                    Name: "D4",
                    Count: 0
                },{
                    Name: "D5",
                    Count: 0
                },{
                    Name: "D6",
                    Count: 0
                },{
                    Name: "D7",
                    Count: 0
                },{
                    Name: "D8",
                    Count: 0
                }];

            //How long the data set is (50,000 for this set)
            //alert(json_length);

            for(var i = json_length - 1; i > 0; i--){
                if(json[i].FIELD10.toUpperCase().indexOf("D1") > -1) {
                    categories[0].Count = categories[0].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("D2") > -1) {
                    categories[1].Count = categories[1].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("D3") > -1) {
                    categories[2].Count = categories[2].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("D4") > -1) {
                    categories[3].Count = categories[3].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("D5") > -1) {
                    categories[4].Count = categories[4].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("D6") > -1) {
                    categories[5].Count = categories[5].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("D7") > -1) {
                    categories[6].Count = categories[6].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("D8") > -1) {
                    categories[7].Count = categories[7].Count + 1;
                }
            }

            $('#graph_space').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Define Learning Objectives Classes',
                    x: -20
                },
                subtitle: {
                    text: 'Class Count',
                    x: -20
                },
                xAxis: {
                    categories: ['Learning Objective']
                },
                yAxis: {
                    title: {
                        text: 'Class Count',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name: "D1",
                    data: [categories[0].Count]
                }, {
                    name: "D2",
                    data: [categories[1].Count]
                },{
                    name: "D3",
                    data: [categories[2].Count]
                },{
                    name: "D4",
                    data: [categories[3].Count]
                },{
                    name: "D5",
                    data: [categories[4].Count]
                },{
                    name: "D6",
                    data: [categories[5].Count]
                },{
                    name: "D7",
                    data: [categories[6].Count]
                },{
                    name: "D8",
                    data: [categories[7].Count]
                }]
            });
        });


        $("#SearchLO").click(function(){
            hideDescriptions();
            showDescription(this.id);
            //ID, Location, Date (yyyy-mm-dd hh-mm-ss), Count
            var json = getInstructionData();
            var json_length = json.length;
            var categories = [
                {
                    Name: "S1",
                    Count: 0
                },{
                    Name: "S2",
                    Count: 0
                },{
                    Name: "S3",
                    Count: 0
                },{
                    Name: "S4",
                    Count: 0
                }];

            //How long the data set is (50,000 for this set)
            //alert(json_length);

            for(var i = json_length - 1; i > 0; i--){
                if(json[i].FIELD10.toUpperCase().indexOf("S1") > -1) {
                    categories[0].Count = categories[0].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("S2") > -1 ) {
                    categories[1].Count = categories[1].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("S3") > -1) {
                    categories[2].Count = categories[2].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("S4") > -1) {
                    categories[3].Count = categories[3].Count + 1;
                }
            }

            $('#graph_space').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Search Learning Objectives',
                    x: -20
                },
                subtitle: {
                    text: 'Class Count',
                    x: -20
                },
                xAxis: {
                    categories: ['Search Objectives']
                },
                yAxis: {
                    title: {
                        text: 'Class Count',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name: "S1",
                    data: [categories[0].Count]
                }, {
                    name: "S2",
                    data: [categories[1].Count]
                },{
                    name: "S3",
                    data: [categories[2].Count]
                },{
                    name: "S4",
                    data: [categories[3].Count]
                }]
            });
        });


        $("#AnalyzeLO").click(function(){
            hideDescriptions();
            showDescription(this.id);
            //ID, Location, Date (yyyy-mm-dd hh-mm-ss), Count
            var json = getInstructionData();
            var json_length = json.length;
            var categories = [
                {
                    Name: "A1",
                    Count: 0
                },{
                    Name: "A2",
                    Count: 0
                },{
                    Name: "A3",
                    Count: 0
                },{
                    Name: "A4",
                    Count: 0
                },{
                    Name: "A5",
                    Count: 0
                }];

            //How long the data set is (50,000 for this set)
            //alert(json_length);

            for(var i = json_length - 1; i > 0; i--){
                if(json[i].FIELD10.toUpperCase().indexOf("A1") > -1) {
                    categories[0].Count = categories[0].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("A2") > -1) {
                    categories[1].Count = categories[1].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("A3") > -1) {
                    categories[2].Count = categories[2].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("A4") > -1) {
                    categories[3].Count = categories[3].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("A5") > -1) {
                    categories[4].Count = categories[4].Count + 1;
                }
            }

            $('#graph_space').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Analysis Learning Objectives',
                    x: -20
                },
                subtitle: {
                    text: 'Class Count',
                    x: -20
                },
                xAxis: {
                    categories: ['Analysis Objectives']
                },
                yAxis: {
                    title: {
                        text: 'Class Count',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name: "A1",
                    data: [categories[0].Count]
                }, {
                    name: "A2",
                    data: [categories[1].Count]
                },{
                    name: "A3",
                    data: [categories[2].Count]
                },{
                    name: "A4",
                    data: [categories[3].Count]
                },{
                    name: "A5",
                    data: [categories[4].Count]
                }]
            });
        });

        $("#SynthesisLO").click(function(){
            hideDescriptions();
            showDescription(this.id);
            hideDescriptions();
            showDescription(this.id);
            //ID, Location, Date (yyyy-mm-dd hh-mm-ss), Count
            var json = getInstructionData();
            var json_length = json.length;
            var categories = [
                {
                    Name: "Y1",
                    Count: 0
                },{
                    Name: "Y2",
                    Count: 0
                },{
                    Name: "Y3",
                    Count: 0
                },{
                    Name: "Y4",
                    Count: 0
                },{
                    Name: "Y5",
                    Count: 0
                }];

            //How long the data set is (50,000 for this set)
            //alert(json_length);

            for(var i = json_length - 1; i > 0; i--){
                if(json[i].FIELD10.toUpperCase().indexOf("Y1") > -1) {
                    categories[0].Count = categories[0].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("Y2") > -1) {
                    categories[1].Count = categories[1].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("Y3") > -1) {
                    categories[2].Count = categories[2].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("Y4") > -1) {
                    categories[3].Count = categories[3].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("Y5") > -1) {
                    categories[4].Count = categories[4].Count + 1;
                }
            }

            $('#graph_space').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Synthesis Learning Objectives',
                    x: -20
                },
                subtitle: {
                    text: 'Class Count',
                    x: -20
                },
                xAxis: {
                    categories: ['Synthesis Objectives']
                },
                yAxis: {
                    title: {
                        text: 'Class Count',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name: "Y1",
                    data: [categories[0].Count]
                }, {
                    name: "Y2",
                    data: [categories[1].Count]
                },{
                    name: "Y3",
                    data: [categories[2].Count]
                },{
                    name: "Y4",
                    data: [categories[3].Count]
                },{
                    name: "Y5",
                    data: [categories[4].Count]
                }]
            });
        });


        $("#CreationLO").click(function(){
            hideDescriptions();
            showDescription(this.id);
            //ID, Location, Date (yyyy-mm-dd hh-mm-ss), Count
            var json = getInstructionData();
            var json_length = json.length;
            var categories = [
                {
                    Name: "C1",
                    Count: 0
                },{
                    Name: "C2",
                    Count: 0
                },{
                    Name: "C3",
                    Count: 0
                }];

            //How long the data set is (50,000 for this set)
            //alert(json_length);

            for(var i = json_length - 1; i > 0; i--){
                if(json[i].FIELD10.toUpperCase().indexOf("C1") > -1) {
                    categories[0].Count = categories[0].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("C2") > -1) {
                    categories[1].Count = categories[1].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("C3") > -1) {
                    categories[2].Count = categories[2].Count + 1;
                }
            }

            $('#graph_space').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Creation Learning Objectives',
                    x: -20
                },
                subtitle: {
                    text: 'Class Count',
                    x: -20
                },
                xAxis: {
                    categories: ['Creation Objectives']
                },
                yAxis: {
                    title: {
                        text: 'Class Count',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name: "C1",
                    data: [categories[0].Count]
                }, {
                    name: "C2",
                    data: [categories[1].Count]
                }, {
                    name: "C3",
                    data: [categories[2].Count]
                }]
            });
        });

        $("#EthicsLO").click(function(){
            hideDescriptions();
            showDescription(this.id);
            //ID, Location, Date (yyyy-mm-dd hh-mm-ss), Count
            var json = getInstructionData();
            var json_length = json.length;
            var categories = [
                {
                    Name: "E1",
                    Count: 0
                },{
                    Name: "E2",
                    Count: 0
                },{
                    Name: "E3",
                    Count: 0
                },{
                    Name: "E4",
                    Count: 0
                },{
                    Name: "E5",
                    Count: 0
                }];

            //How long the data set is (50,000 for this set)
            //alert(json_length);

            for(var i = json_length - 1; i > 0; i--){
                if(json[i].FIELD10.toUpperCase().indexOf("E1") > -1) {
                    categories[0].Count = categories[0].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("E2") > -1) {
                    categories[1].Count = categories[1].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("E3") > -1) {
                    categories[2].Count = categories[2].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("E4") > -1) {
                    categories[3].Count = categories[3].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("E5") > -1) {
                    categories[4].Count = categories[4].Count + 1;
                }
            }

            $('#graph_space').highcharts({
                chart: {
                    type: 'bar'
                },
                title: {
                    text: 'Ethics Learning Objectives',
                    x: -20
                },
                subtitle: {
                    text: 'Class Count',
                    x: -20
                },
                xAxis: {
                    categories: ['Ethics Objectives']
                },
                yAxis: {
                    title: {
                        text: 'Class Count',
                        align: 'high'
                    },
                    labels: {
                        overflow: 'justify'
                    }
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: [{
                    name: "E1",
                    data: [categories[0].Count]
                }, {
                    name: "E2",
                    data: [categories[1].Count]
                },{
                    name: "E3",
                    data: [categories[2].Count]
                },{
                    name: "E4",
                    data: [categories[3].Count]
                },{
                    name: "E5",
                    data: [categories[4].Count]
                }]
            });
        });

        $("#PieLO").click(function(){
            hideDescriptions();
            showDescription(this.id);
            //ID, Location, Date (yyyy-mm-dd hh-mm-ss), Count
            var json = getInstructionData();
            var json_length = json.length;
            var categories = [
                {
                    Name: "A",
                    Count: 0
                },{
                    Name: "S",
                    Count: 0
                },{
                    Name: "Y",
                    Count: 0
                },{
                    Name: "D",
                    Count: 0
                },{
                    Name: "C",
                    Count: 0
                },{
                    Name: "E",
                    Count: 0
                }];

            for(var i = json_length - 1; i > 0; i--){
                if(json[i].FIELD10.toUpperCase().indexOf("A") > -1) {
                    categories[0].Count = categories[0].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("S") > -1) {
                    categories[1].Count = categories[1].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("Y") > -1) {
                    categories[2].Count = categories[2].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("D") > -1) {
                    categories[3].Count = categories[3].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("C") > -1) {
                    categories[4].Count = categories[4].Count + 1;
                }
                if (json[i].FIELD10.toUpperCase().indexOf("E") > -1) {
                    categories[5].Count = categories[5].Count + 1;
                }
            }

            var series = [];
            var names  = [];
            var total = 0.0;
            var cl = categories.length;
            for(var i = 0; i < categories.length; i++){
                total += categories[i].Count;
                console.log(categories[i].Count);
            }

            while(cl--){
                console.log(categories[cl].FIELD10 + " : " + categories[cl].Count);
                names.push(categories[cl].FIELD10);
                series[series.length] = [categories[cl].Name,categories[cl].Count/total]
            }

            $('#graph_space').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'Instruction Learning Objectives'
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
                    type: 'pie',
                    name: 'Learning Objectives',
                    data: series
                }]
            });
        });


        /** Circulation stuff. Mostly just Pie Charts of where all the stuff is **/
        $("#power_cords").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //1:blank, 2:Art/Arch, 3:B.E.S.T, 4:Hamilton, 5:King, 6:IMC, 7:Middletown,8:Music

            var data = getShortTermLoans();

            var result = [
                {
                    Name: "Art/Arch",
                    Data: parseInt(data[1].FIELD2)
                },
                {
                    Name: "B.E.S.T",
                    Data: parseInt(data[1].FIELD3)
                },
                {
                    Name: "Hamilton",
                    Data: parseInt(data[1].FIELD4)
                },
                {
                    Name: "King",
                    Data: parseInt(data[1].FIELD5)
                },
                {
                    Name: "IMC",
                    Data: parseInt(data[1].FIELD6)
                },
                {
                    Name: "Middletown",
                    Data: parseInt(data[1].FIELD7)
                },
                {
                    Name: "Music",
                    Data: parseInt(data[1].FIELD8)
                }
            ];

            var names = [];
            var series = [];
            var total = 0.0;

            for(var i = 0; i < result.length; i++){
                if(isNaN(result[i].Data)){
                    result[i].Data = 0;
                }
                total += result[i].Data;
                console.log(result[i].Data);

            }

            var result_length = result.length;

            while(result_length--){
                console.log(result[result_length].Name + " : " + result[result_length].Data);
                names.push(result[result_length].Name);
                series[series.length] = [result[result_length].Name,result[result_length].Data/total]
            }

            $('#graph_space').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'Power Cord Usage by Building'
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
                    type: 'pie',
                    name: 'Power Cord Usage',
                    data: series
                }]
            });


        });

        $("#headphones").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //1:blank, 2:Art/Arch, 3:B.E.S.T, 4:Hamilton, 5:King, 6:IMC, 7:Middletown,8:Music

            var data = getShortTermLoans();

            var result = [
                {
                    Name: "Art/Arch",
                    Data: parseInt(data[2].FIELD2)
                },
                {
                    Name: "B.E.S.T",
                    Data: parseInt(data[2].FIELD3)
                },
                {
                    Name: "Hamilton",
                    Data: parseInt(data[2].FIELD4)
                },
                {
                    Name: "King",
                    Data: parseInt(data[2].FIELD5)
                },
                {
                    Name: "IMC",
                    Data: parseInt(data[2].FIELD6)
                },
                {
                    Name: "Middletown",
                    Data: parseInt(data[2].FIELD7)
                },
                {
                    Name: "Music",
                    Data: parseInt(data[2].FIELD8)
                }
            ];

            var names = [];
            var series = [];
            var total = 0.0;

            for(var i = 0; i < result.length; i++){
                if(isNaN(result[i].Data)){
                    result[i].Data = 0;
                }
                total += result[i].Data;
                console.log(result[i].Data);

            }

            var result_length = result.length;

            while(result_length--){
                console.log(result[result_length].Name + " : " + result[result_length].Data);
                names.push(result[result_length].Name);
                series[series.length] = [result[result_length].Name,result[result_length].Data/total]
            }

            $('#graph_space').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'Headphone Usage by Building'
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
                    type: 'pie',
                    name: 'Headphone Usage',
                    data: series
                }]
            });


        });

        $("#power_cords_pc").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //1:blank, 2:Art/Arch, 3:B.E.S.T, 4:Hamilton, 5:King, 6:IMC, 7:Middletown,8:Music

            var data = getShortTermLoans();

            var result = [
                {
                    Name: "Art/Arch",
                    Data: parseInt(data[3].FIELD2)
                },
                {
                    Name: "B.E.S.T",
                    Data: parseInt(data[3].FIELD3)
                },
                {
                    Name: "Hamilton",
                    Data: parseInt(data[3].FIELD4)
                },
                {
                    Name: "King",
                    Data: parseInt(data[3].FIELD5)
                },
                {
                    Name: "IMC",
                    Data: parseInt(data[3].FIELD6)
                },
                {
                    Name: "Middletown",
                    Data: parseInt(data[3].FIELD7)
                },
                {
                    Name: "Music",
                    Data: parseInt(data[3].FIELD8)
                }
            ];

            var names = [];
            var series = [];
            var total = 0.0;

            for(var i = 0; i < result.length; i++){
                if(isNaN(result[i].Data)){
                    result[i].Data = 0;
                }
                total += result[i].Data;
                console.log(result[i].Data);

            }

            var result_length = result.length;

            while(result_length--){
                console.log(result[result_length].Name + " : " + result[result_length].Data);
                names.push(result[result_length].Name);
                series[series.length] = [result[result_length].Name,result[result_length].Data/total]
            }

            $('#graph_space').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'Power Cord (PC) Usage by Building'
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
                    type: 'pie',
                    name: 'Power Cord (PC) Usage',
                    data: series
                }]
            });


        });

        $("#laptop_mac").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //1:blank, 2:Art/Arch, 3:B.E.S.T, 4:Hamilton, 5:King, 6:IMC, 7:Middletown,8:Music

            var data = getShortTermLoans();

            var result = [
                {
                    Name: "Art/Arch",
                    Data: parseInt(data[4].FIELD2)
                },
                {
                    Name: "B.E.S.T",
                    Data: parseInt(data[4].FIELD3)
                },
                {
                    Name: "Hamilton",
                    Data: parseInt(data[4].FIELD4)
                },
                {
                    Name: "King",
                    Data: parseInt(data[4].FIELD5)
                },
                {
                    Name: "IMC",
                    Data: parseInt(data[4].FIELD6)
                },
                {
                    Name: "Middletown",
                    Data: parseInt(data[4].FIELD7)
                },
                {
                    Name: "Music",
                    Data: parseInt(data[4].FIELD8)
                }
            ];

            var names = [];
            var series = [];
            var total = 0.0;

            for(var i = 0; i < result.length; i++){
                if(isNaN(result[i].Data)){
                    result[i].Data = 0;
                }
                total += result[i].Data;
                console.log(result[i].Data);

            }

            var result_length = result.length;

            while(result_length--){
                console.log(result[result_length].Name + " : " + result[result_length].Data);
                names.push(result[result_length].Name);
                series[series.length] = [result[result_length].Name,result[result_length].Data/total]
            }

            $('#graph_space').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'Laptop (Mac) Usage by Building'
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
                    type: 'pie',
                    name: 'Laptop (Mac) Usage',
                    data: series
                }]
            });


        });

        $("#laptop_pc").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //1:blank, 2:Art/Arch, 3:B.E.S.T, 4:Hamilton, 5:King, 6:IMC, 7:Middletown,8:Music

            var data = getShortTermLoans();

            var result = [
                {
                    Name: "Art/Arch",
                    Data: parseInt(data[5].FIELD2)
                },
                {
                    Name: "B.E.S.T",
                    Data: parseInt(data[5].FIELD3)
                },
                {
                    Name: "Hamilton",
                    Data: parseInt(data[5].FIELD4)
                },
                {
                    Name: "King",
                    Data: parseInt(data[5].FIELD5)
                },
                {
                    Name: "IMC",
                    Data: parseInt(data[5].FIELD6)
                },
                {
                    Name: "Middletown",
                    Data: parseInt(data[5].FIELD7)
                },
                {
                    Name: "Music",
                    Data: parseInt(data[5].FIELD8)
                }
            ];

            var names = [];
            var series = [];
            var total = 0.0;

            for(var i = 0; i < result.length; i++){
                if(isNaN(result[i].Data)){
                    result[i].Data = 0;
                }
                total += result[i].Data;
                console.log(result[i].Data);

            }

            var result_length = result.length;

            while(result_length--){
                console.log(result[result_length].Name + " : " + result[result_length].Data);
                names.push(result[result_length].Name);
                series[series.length] = [result[result_length].Name,result[result_length].Data/total]
            }

            $('#graph_space').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'Laptop (PC) Usage by Building'
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
                    type: 'pie',
                    name: 'Laptop (PC) Usage',
                    data: series
                }]
            });


        });

        $("#ipad_tablet").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //1:blank, 2:Art/Arch, 3:B.E.S.T, 4:Hamilton, 5:King, 6:IMC, 7:Middletown,8:Music

            var data = getShortTermLoans();

            var result = [
                {
                    Name: "Art/Arch",
                    Data: parseInt(data[6].FIELD2)
                },
                {
                    Name: "B.E.S.T",
                    Data: parseInt(data[6].FIELD3)
                },
                {
                    Name: "Hamilton",
                    Data: parseInt(data[6].FIELD4)
                },
                {
                    Name: "King",
                    Data: parseInt(data[6].FIELD5)
                },
                {
                    Name: "IMC",
                    Data: parseInt(data[6].FIELD6)
                },
                {
                    Name: "Middletown",
                    Data: parseInt(data[6].FIELD7)
                },
                {
                    Name: "Music",
                    Data: parseInt(data[6].FIELD8)
                }
            ];

            var names = [];
            var series = [];
            var total = 0.0;

            for(var i = 0; i < result.length; i++){
                if(isNaN(result[i].Data)){
                    result[i].Data = 0;
                }
                total += result[i].Data;
                console.log(result[i].Data);

            }

            var result_length = result.length;

            while(result_length--){
                console.log(result[result_length].Name + " : " + result[result_length].Data);
                names.push(result[result_length].Name);
                series[series.length] = [result[result_length].Name,result[result_length].Data/total]
            }

            $('#graph_space').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'iPad/Tablet Usage by Building'
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
                    type: 'pie',
                    name: 'iPad/Tablet Usage',
                    data: series
                }]
            });


        });

        $("#camera").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //1:blank, 2:Art/Arch, 3:B.E.S.T, 4:Hamilton, 5:King, 6:IMC, 7:Middletown,8:Music

            var data = getShortTermLoans();

            var result = [
                {
                    Name: "Art/Arch",
                    Data: parseInt(data[7].FIELD2)
                },
                {
                    Name: "B.E.S.T",
                    Data: parseInt(data[7].FIELD3)
                },
                {
                    Name: "Hamilton",
                    Data: parseInt(data[7].FIELD4)
                },
                {
                    Name: "King",
                    Data: parseInt(data[7].FIELD5)
                },
                {
                    Name: "IMC",
                    Data: parseInt(data[7].FIELD6)
                },
                {
                    Name: "Middletown",
                    Data: parseInt(data[7].FIELD7)
                },
                {
                    Name: "Music",
                    Data: parseInt(data[7].FIELD8)
                }
            ];

            var names = [];
            var series = [];
            var total = 0.0;

            for(var i = 0; i < result.length; i++){
                if(isNaN(result[i].Data)){
                    result[i].Data = 0;
                }
                total += result[i].Data;
                console.log(result[i].Data);

            }

            var result_length = result.length;

            while(result_length--){
                console.log(result[result_length].Name + " : " + result[result_length].Data);
                names.push(result[result_length].Name);
                series[series.length] = [result[result_length].Name,result[result_length].Data/total]
            }

            $('#graph_space').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'Camera Accessory Usage by Building'
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
                    type: 'pie',
                    name: 'Camera Accessory Usage',
                    data: series
                }]
            });


        });

        $("#digital_camera").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //1:blank, 2:Art/Arch, 3:B.E.S.T, 4:Hamilton, 5:King, 6:IMC, 7:Middletown,8:Music

            var data = getShortTermLoans();

            var result = [
                {
                    Name: "Art/Arch",
                    Data: parseInt(data[8].FIELD2)
                },
                {
                    Name: "B.E.S.T",
                    Data: parseInt(data[8].FIELD3)
                },
                {
                    Name: "Hamilton",
                    Data: parseInt(data[8].FIELD4)
                },
                {
                    Name: "King",
                    Data: parseInt(data[8].FIELD5)
                },
                {
                    Name: "IMC",
                    Data: parseInt(data[8].FIELD6)
                },
                {
                    Name: "Middletown",
                    Data: parseInt(data[8].FIELD7)
                },
                {
                    Name: "Music",
                    Data: parseInt(data[8].FIELD8)
                }
            ];

            var names = [];
            var series = [];
            var total = 0.0;

            for(var i = 0; i < result.length; i++){
                if(isNaN(result[i].Data)){
                    result[i].Data = 0;
                }
                total += result[i].Data;
                console.log(result[i].Data);

            }

            var result_length = result.length;

            while(result_length--){
                console.log(result[result_length].Name + " : " + result[result_length].Data);
                names.push(result[result_length].Name);
                series[series.length] = [result[result_length].Name,result[result_length].Data/total]
            }

            $('#graph_space').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'Digital Video Camera Usage by Building'
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
                    type: 'pie',
                    name: 'Digital Video Camera Usage',
                    data: series
                }]
            });


        });

        $("#calculator").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //1:blank, 2:Art/Arch, 3:B.E.S.T, 4:Hamilton, 5:King, 6:IMC, 7:Middletown,8:Music

            var data = getShortTermLoans();

            var result = [
                {
                    Name: "Art/Arch",
                    Data: parseInt(data[9].FIELD2)
                },
                {
                    Name: "B.E.S.T",
                    Data: parseInt(data[9].FIELD3)
                },
                {
                    Name: "Hamilton",
                    Data: parseInt(data[9].FIELD4)
                },
                {
                    Name: "King",
                    Data: parseInt(data[9].FIELD5)
                },
                {
                    Name: "IMC",
                    Data: parseInt(data[9].FIELD6)
                },
                {
                    Name: "Middletown",
                    Data: parseInt(data[9].FIELD7)
                },
                {
                    Name: "Music",
                    Data: parseInt(data[9].FIELD8)
                }
            ];

            var names = [];
            var series = [];
            var total = 0.0;

            for(var i = 0; i < result.length; i++){
                if(isNaN(result[i].Data)){
                    result[i].Data = 0;
                }
                total += result[i].Data;
                console.log(result[i].Data);

            }

            var result_length = result.length;

            while(result_length--){
                console.log(result[result_length].Name + " : " + result[result_length].Data);
                names.push(result[result_length].Name);
                series[series.length] = [result[result_length].Name,result[result_length].Data/total]
            }

            $('#graph_space').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'Graphing/Digital Calculator Usage by Building'
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
                    type: 'pie',
                    name: 'Graphing/Digital Usage',
                    data: series
                }]
            });


        });

        $("#network_cables").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //1:blank, 2:Art/Arch, 3:B.E.S.T, 4:Hamilton, 5:King, 6:IMC, 7:Middletown,8:Music

            var data = getShortTermLoans();

            var result = [
                {
                    Name: "Art/Arch",
                    Data: parseInt(data[10].FIELD2)
                },
                {
                    Name: "B.E.S.T",
                    Data: parseInt(data[10].FIELD3)
                },
                {
                    Name: "Hamilton",
                    Data: parseInt(data[10].FIELD4)
                },
                {
                    Name: "King",
                    Data: parseInt(data[10].FIELD5)
                },
                {
                    Name: "IMC",
                    Data: parseInt(data[10].FIELD6)
                },
                {
                    Name: "Middletown",
                    Data: parseInt(data[10].FIELD7)
                },
                {
                    Name: "Music",
                    Data: parseInt(data[10].FIELD8)
                }
            ];

            var names = [];
            var series = [];
            var total = 0.0;

            for(var i = 0; i < result.length; i++){
                if(isNaN(result[i].Data)){
                    result[i].Data = 0;
                }
                total += result[i].Data;
                console.log(result[i].Data);

            }

            var result_length = result.length;

            while(result_length--){
                console.log(result[result_length].Name + " : " + result[result_length].Data);
                names.push(result[result_length].Name);
                series[series.length] = [result[result_length].Name,result[result_length].Data/total]
            }

            $('#graph_space').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'Network Cables Usage by Building'
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
                    type: 'pie',
                    name: 'Network Cable Usage',
                    data: series
                }]
            });


        });

        $("#misc").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //1:blank, 2:Art/Arch, 3:B.E.S.T, 4:Hamilton, 5:King, 6:IMC, 7:Middletown,8:Music

            var data = getShortTermLoans();

            var result = [
                {
                    Name: "Art/Arch",
                    Data: parseInt(data[11].FIELD2)
                },
                {
                    Name: "B.E.S.T",
                    Data: parseInt(data[11].FIELD3)
                },
                {
                    Name: "Hamilton",
                    Data: parseInt(data[11].FIELD4)
                },
                {
                    Name: "King",
                    Data: parseInt(data[11].FIELD5)
                },
                {
                    Name: "IMC",
                    Data: parseInt(data[11].FIELD6)
                },
                {
                    Name: "Middletown",
                    Data: parseInt(data[11].FIELD7)
                },
                {
                    Name: "Music",
                    Data: parseInt(data[11].FIELD8)
                }
            ];

            var names = [];
            var series = [];
            var total = 0.0;

            for(var i = 0; i < result.length; i++){
                if(isNaN(result[i].Data)){
                    result[i].Data = 0;
                }
                total += result[i].Data;
                console.log(result[i].Data);

            }

            var result_length = result.length;

            while(result_length--){
                console.log(result[result_length].Name + " : " + result[result_length].Data);
                names.push(result[result_length].Name);
                series[series.length] = [result[result_length].Name,result[result_length].Data/total]
            }

            $('#graph_space').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'Misc Equipment Usage by Building'
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
                    type: 'pie',
                    name: 'Misc Equipment Usage',
                    data: series
                }]
            });


        });
        $("#projectors").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //1:blank, 2:Art/Arch, 3:B.E.S.T, 4:Hamilton, 5:King, 6:IMC, 7:Middletown,8:Music

            var data = getShortTermLoans();

            var result = [
                {
                    Name: "Art/Arch",
                    Data: parseInt(data[12].FIELD2)
                },
                {
                    Name: "B.E.S.T",
                    Data: parseInt(data[12].FIELD3)
                },
                {
                    Name: "Hamilton",
                    Data: parseInt(data[12].FIELD4)
                },
                {
                    Name: "King",
                    Data: parseInt(data[12].FIELD5)
                },
                {
                    Name: "IMC",
                    Data: parseInt(data[12].FIELD6)
                },
                {
                    Name: "Middletown",
                    Data: parseInt(data[12].FIELD7)
                },
                {
                    Name: "Music",
                    Data: parseInt(data[12].FIELD8)
                }
            ];

            var names = [];
            var series = [];
            var total = 0.0;

            for(var i = 0; i < result.length; i++){
                if(isNaN(result[i].Data)){
                    result[i].Data = 0;
                }
                total += result[i].Data;
                console.log(result[i].Data);

            }

            var result_length = result.length;

            while(result_length--){
                console.log(result[result_length].Name + " : " + result[result_length].Data);
                names.push(result[result_length].Name);
                series[series.length] = [result[result_length].Name,result[result_length].Data/total]
            }

            $('#graph_space').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'Projectors Usage by Building'
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
                    type: 'pie',
                    name: 'Projectors Usage',
                    data: series
                }]
            });


        });

        $("#digital_voice").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //1:blank, 2:Art/Arch, 3:B.E.S.T, 4:Hamilton, 5:King, 6:IMC, 7:Middletown,8:Music

            var data = getShortTermLoans();

            var result = [
                {
                    Name: "Art/Arch",
                    Data: parseInt(data[13].FIELD2)
                },
                {
                    Name: "B.E.S.T",
                    Data: parseInt(data[13].FIELD3)
                },
                {
                    Name: "Hamilton",
                    Data: parseInt(data[13].FIELD4)
                },
                {
                    Name: "King",
                    Data: parseInt(data[13].FIELD5)
                },
                {
                    Name: "IMC",
                    Data: parseInt(data[13].FIELD6)
                },
                {
                    Name: "Middletown",
                    Data: parseInt(data[13].FIELD7)
                },
                {
                    Name: "Music",
                    Data: parseInt(data[13].FIELD8)
                }
            ];

            var names = [];
            var series = [];
            var total = 0.0;

            for(var i = 0; i < result.length; i++){
                if(isNaN(result[i].Data)){
                    result[i].Data = 0;
                }
                total += result[i].Data;
                console.log(result[i].Data);

            }

            var result_length = result.length;

            while(result_length--){
                console.log(result[result_length].Name + " : " + result[result_length].Data);
                names.push(result[result_length].Name);
                series[series.length] = [result[result_length].Name,result[result_length].Data/total]
            }

            $('#graph_space').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'Digital Voice Recorders Usage by Building'
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
                    type: 'pie',
                    name: 'Digital Voice Recorders Usage',
                    data: series
                }]
            });


        });

        $("#digital_still").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //1:blank, 2:Art/Arch, 3:B.E.S.T, 4:Hamilton, 5:King, 6:IMC, 7:Middletown,8:Music

            var data = getShortTermLoans();

            var result = [
                {
                    Name: "Art/Arch",
                    Data: parseInt(data[14].FIELD2)
                },
                {
                    Name: "B.E.S.T",
                    Data: parseInt(data[14].FIELD3)
                },
                {
                    Name: "Hamilton",
                    Data: parseInt(data[14].FIELD4)
                },
                {
                    Name: "King",
                    Data: parseInt(data[14].FIELD5)
                },
                {
                    Name: "IMC",
                    Data: parseInt(data[14].FIELD6)
                },
                {
                    Name: "Middletown",
                    Data: parseInt(data[14].FIELD7)
                },
                {
                    Name: "Music",
                    Data: parseInt(data[14].FIELD8)
                }
            ];

            var names = [];
            var series = [];
            var total = 0.0;

            for(var i = 0; i < result.length; i++){
                if(isNaN(result[i].Data)){
                    result[i].Data = 0;
                }
                total += result[i].Data;
                console.log(result[i].Data);

            }

            var result_length = result.length;

            while(result_length--){
                console.log(result[result_length].Name + " : " + result[result_length].Data);
                names.push(result[result_length].Name);
                series[series.length] = [result[result_length].Name,result[result_length].Data/total]
            }

            $('#graph_space').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'Digital StilL Camera Usage by Building'
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
                    type: 'pie',
                    name: 'Digital Still Camera Usage',
                    data: series
                }]
            });


        });

        $("#microphones").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //1:blank, 2:Art/Arch, 3:B.E.S.T, 4:Hamilton, 5:King, 6:IMC, 7:Middletown,8:Music

            var data = getShortTermLoans();

            var result = [
                {
                    Name: "Art/Arch",
                    Data: parseInt(data[15].FIELD2)
                },
                {
                    Name: "B.E.S.T",
                    Data: parseInt(data[15].FIELD3)
                },
                {
                    Name: "Hamilton",
                    Data: parseInt(data[15].FIELD4)
                },
                {
                    Name: "King",
                    Data: parseInt(data[15].FIELD5)
                },
                {
                    Name: "IMC",
                    Data: parseInt(data[15].FIELD6)
                },
                {
                    Name: "Middletown",
                    Data: parseInt(data[15].FIELD7)
                },
                {
                    Name: "Music",
                    Data: parseInt(data[15].FIELD8)
                }
            ];

            var names = [];
            var series = [];
            var total = 0.0;

            for(var i = 0; i < result.length; i++){
                if(isNaN(result[i].Data)){
                    result[i].Data = 0;
                }
                total += result[i].Data;
                console.log(result[i].Data);

            }

            var result_length = result.length;

            while(result_length--){
                console.log(result[result_length].Name + " : " + result[result_length].Data);
                names.push(result[result_length].Name);
                series[series.length] = [result[result_length].Name,result[result_length].Data/total]
            }

            $('#graph_space').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'Microphones Usage by Building'
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
                    type: 'pie',
                    name: 'Microphones Usage',
                    data: series
                }]
            });


        });

        $("#asg").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //1:blank, 2:Art/Arch, 3:B.E.S.T, 4:Hamilton, 5:King, 6:IMC, 7:Middletown,8:Music

            var data = getShortTermLoans();

            var result = [
                {
                    Name: "Art/Arch",
                    Data: parseInt(data[16].FIELD2)
                },
                {
                    Name: "B.E.S.T",
                    Data: parseInt(data[16].FIELD3)
                },
                {
                    Name: "Hamilton",
                    Data: parseInt(data[16].FIELD4)
                },
                {
                    Name: "King",
                    Data: parseInt(data[16].FIELD5)
                },
                {
                    Name: "IMC",
                    Data: parseInt(data[16].FIELD6)
                },
                {
                    Name: "Middletown",
                    Data: parseInt(data[16].FIELD7)
                },
                {
                    Name: "Music",
                    Data: parseInt(data[16].FIELD8)
                }
            ];

            var names = [];
            var series = [];
            var total = 0.0;

            for(var i = 0; i < result.length; i++){
                if(isNaN(result[i].Data)){
                    result[i].Data = 0;
                }
                total += result[i].Data;
                console.log(result[i].Data);

            }

            var result_length = result.length;

            while(result_length--){
                console.log(result[result_length].Name + " : " + result[result_length].Data);
                names.push(result[result_length].Name);
                series[series.length] = [result[result_length].Name,result[result_length].Data/total]
            }

            $('#graph_space').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'ASG Usage by Building'
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
                    type: 'pie',
                    name: 'ASG Usage',
                    data: series
                }]
            });


        });

        $("#translators").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //1:blank, 2:Art/Arch, 3:B.E.S.T, 4:Hamilton, 5:King, 6:IMC, 7:Middletown,8:Music

            var data = getShortTermLoans();

            var result = [
                {
                    Name: "Art/Arch",
                    Data: parseInt(data[17].FIELD2)
                },
                {
                    Name: "B.E.S.T",
                    Data: parseInt(data[17].FIELD3)
                },
                {
                    Name: "Hamilton",
                    Data: parseInt(data[17].FIELD4)
                },
                {
                    Name: "King",
                    Data: parseInt(data[17].FIELD5)
                },
                {
                    Name: "IMC",
                    Data: parseInt(data[17].FIELD6)
                },
                {
                    Name: "Middletown",
                    Data: parseInt(data[17].FIELD7)
                },
                {
                    Name: "Music",
                    Data: parseInt(data[17].FIELD8)
                }
            ];

            var names = [];
            var series = [];
            var total = 0.0;

            for(var i = 0; i < result.length; i++){
                if(isNaN(result[i].Data)){
                    result[i].Data = 0;
                }
                total += result[i].Data;
                console.log(result[i].Data);

            }

            var result_length = result.length;

            while(result_length--){
                console.log(result[result_length].Name + " : " + result[result_length].Data);
                names.push(result[result_length].Name);
                series[series.length] = [result[result_length].Name,result[result_length].Data/total]
            }

            $('#graph_space').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'Translators Usage by Building'
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
                    type: 'pie',
                    name: 'Translators Usage',
                    data: series
                }]
            });


        });

        $("#projector_screen").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //1:blank, 2:Art/Arch, 3:B.E.S.T, 4:Hamilton, 5:King, 6:IMC, 7:Middletown,8:Music

            var data = getShortTermLoans();

            var result = [
                {
                    Name: "Art/Arch",
                    Data: parseInt(data[18].FIELD2)
                },
                {
                    Name: "B.E.S.T",
                    Data: parseInt(data[18].FIELD3)
                },
                {
                    Name: "Hamilton",
                    Data: parseInt(data[18].FIELD4)
                },
                {
                    Name: "King",
                    Data: parseInt(data[18].FIELD5)
                },
                {
                    Name: "IMC",
                    Data: parseInt(data[18].FIELD6)
                },
                {
                    Name: "Middletown",
                    Data: parseInt(data[18].FIELD7)
                },
                {
                    Name: "Music",
                    Data: parseInt(data[18].FIELD8)
                }
            ];

            var names = [];
            var series = [];
            var total = 0.0;

            for(var i = 0; i < result.length; i++){
                if(isNaN(result[i].Data)){
                    result[i].Data = 0;
                }
                total += result[i].Data;
                console.log(result[i].Data);

            }

            var result_length = result.length;

            while(result_length--){
                console.log(result[result_length].Name + " : " + result[result_length].Data);
                names.push(result[result_length].Name);
                series[series.length] = [result[result_length].Name,result[result_length].Data/total]
            }

            $('#graph_space').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'Projector Screen Usage by Building'
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
                    type: 'pie',
                    name: 'Projector Screen Usage',
                    data: series
                }]
            });


        });

        $("#remote_control").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //1:blank, 2:Art/Arch, 3:B.E.S.T, 4:Hamilton, 5:King, 6:IMC, 7:Middletown,8:Music

            var data = getShortTermLoans();

            var result = [
                {
                    Name: "Art/Arch",
                    Data: parseInt(data[19].FIELD2)
                },
                {
                    Name: "B.E.S.T",
                    Data: parseInt(data[19].FIELD3)
                },
                {
                    Name: "Hamilton",
                    Data: parseInt(data[19].FIELD4)
                },
                {
                    Name: "King",
                    Data: parseInt(data[19].FIELD5)
                },
                {
                    Name: "IMC",
                    Data: parseInt(data[19].FIELD6)
                },
                {
                    Name: "Middletown",
                    Data: parseInt(data[19].FIELD7)
                },
                {
                    Name: "Music",
                    Data: parseInt(data[19].FIELD8)
                }
            ];

            var names = [];
            var series = [];
            var total = 0.0;

            for(var i = 0; i < result.length; i++){
                if(isNaN(result[i].Data)){
                    result[i].Data = 0;
                }
                total += result[i].Data;
                console.log(result[i].Data);

            }

            var result_length = result.length;

            while(result_length--){
                console.log(result[result_length].Name + " : " + result[result_length].Data);
                names.push(result[result_length].Name);
                series[series.length] = [result[result_length].Name,result[result_length].Data/total]
            }

            $('#graph_space').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'Remote Control Usage by Building'
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
                    type: 'pie',
                    name: 'Remote Control Usage',
                    data: series
                }]
            });


        });

        $("#mouse").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //1:blank, 2:Art/Arch, 3:B.E.S.T, 4:Hamilton, 5:King, 6:IMC, 7:Middletown,8:Music

            var data = getShortTermLoans();

            var result = [
                {
                    Name: "Art/Arch",
                    Data: parseInt(data[20].FIELD2)
                },
                {
                    Name: "B.E.S.T",
                    Data: parseInt(data[20].FIELD3)
                },
                {
                    Name: "Hamilton",
                    Data: parseInt(data[20].FIELD4)
                },
                {
                    Name: "King",
                    Data: parseInt(data[20].FIELD5)
                },
                {
                    Name: "IMC",
                    Data: parseInt(data[20].FIELD6)
                },
                {
                    Name: "Middletown",
                    Data: parseInt(data[20].FIELD7)
                },
                {
                    Name: "Music",
                    Data: parseInt(data[20].FIELD8)
                }
            ];

            var names = [];
            var series = [];
            var total = 0.0;

            for(var i = 0; i < result.length; i++){
                if(isNaN(result[i].Data)){
                    result[i].Data = 0;
                }
                total += result[i].Data;
                console.log(result[i].Data);

            }

            var result_length = result.length;

            while(result_length--){
                console.log(result[result_length].Name + " : " + result[result_length].Data);
                names.push(result[result_length].Name);
                series[series.length] = [result[result_length].Name,result[result_length].Data/total]
            }

            $('#graph_space').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'Mouse Usage by Building'
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
                    type: 'pie',
                    name: 'Mouse Cord Usage',
                    data: series
                }]
            });


        });

        $("#lectern").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //1:blank, 2:Art/Arch, 3:B.E.S.T, 4:Hamilton, 5:King, 6:IMC, 7:Middletown,8:Music

            var data = getShortTermLoans();

            var result = [
                {
                    Name: "Art/Arch",
                    Data: parseInt(data[21].FIELD2)
                },
                {
                    Name: "B.E.S.T",
                    Data: parseInt(data[21].FIELD3)
                },
                {
                    Name: "Hamilton",
                    Data: parseInt(data[21].FIELD4)
                },
                {
                    Name: "King",
                    Data: parseInt(data[21].FIELD5)
                },
                {
                    Name: "IMC",
                    Data: parseInt(data[21].FIELD6)
                },
                {
                    Name: "Middletown",
                    Data: parseInt(data[21].FIELD7)
                },
                {
                    Name: "Music",
                    Data: parseInt(data[21].FIELD8)
                }
            ];

            var names = [];
            var series = [];
            var total = 0.0;

            for(var i = 0; i < result.length; i++){
                if(isNaN(result[i].Data)){
                    result[i].Data = 0;
                }
                total += result[i].Data;
                console.log(result[i].Data);

            }

            var result_length = result.length;

            while(result_length--){
                console.log(result[result_length].Name + " : " + result[result_length].Data);
                names.push(result[result_length].Name);
                series[series.length] = [result[result_length].Name,result[result_length].Data/total]
            }

            $('#graph_space').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'Portable Lectern Usage by Building'
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
                    type: 'pie',
                    name: 'Portable Lectern Usage',
                    data: series
                }]
            });


        });

        $("#dvd_player").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //1:blank, 2:Art/Arch, 3:B.E.S.T, 4:Hamilton, 5:King, 6:IMC, 7:Middletown,8:Music

            var data = getShortTermLoans();

            var result = [
                {
                    Name: "Art/Arch",
                    Data: parseInt(data[22].FIELD2)
                },
                {
                    Name: "B.E.S.T",
                    Data: parseInt(data[22].FIELD3)
                },
                {
                    Name: "Hamilton",
                    Data: parseInt(data[22].FIELD4)
                },
                {
                    Name: "King",
                    Data: parseInt(data[22].FIELD5)
                },
                {
                    Name: "IMC",
                    Data: parseInt(data[22].FIELD6)
                },
                {
                    Name: "Middletown",
                    Data: parseInt(data[22].FIELD7)
                },
                {
                    Name: "Music",
                    Data: parseInt(data[22].FIELD8)
                }
            ];

            var names = [];
            var series = [];
            var total = 0.0;

            for(var i = 0; i < result.length; i++){
                if(isNaN(result[i].Data)){
                    result[i].Data = 0;
                }
                total += result[i].Data;
                console.log(result[i].Data);

            }

            var result_length = result.length;

            while(result_length--){
                console.log(result[result_length].Name + " : " + result[result_length].Data);
                names.push(result[result_length].Name);
                series[series.length] = [result[result_length].Name,result[result_length].Data/total]
            }

            $('#graph_space').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'DVD Player Usage by Building'
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
                    type: 'pie',
                    name: 'DVD Player Usage',
                    data: series
                }]
            });


        });

        $("#total_digital").click(function() {

            //Show the description
            hideDescriptions();
            showDescription(this.id);
            //1:blank, 2:Art/Arch, 3:B.E.S.T, 4:Hamilton, 5:King, 6:IMC, 7:Middletown,8:Music

            var data = getShortTermLoans();

            var result = [
                {
                    Name: "Art/Arch",
                    Data: parseInt(data[23].FIELD2)
                },
                {
                    Name: "B.E.S.T",
                    Data: parseInt(data[23].FIELD3)
                },
                {
                    Name: "Hamilton",
                    Data: parseInt(data[23].FIELD4)
                },
                {
                    Name: "King",
                    Data: parseInt(data[23].FIELD5)
                },
                {
                    Name: "IMC",
                    Data: parseInt(data[23].FIELD6)
                },
                {
                    Name: "Middletown",
                    Data: parseInt(data[23].FIELD7)
                },
                {
                    Name: "Music",
                    Data: parseInt(data[23].FIELD8)
                }
            ];

            var names = [];
            var series = [];
            var total = 0.0;

            for(var i = 0; i < result.length; i++){
                if(isNaN(result[i].Data)){
                    result[i].Data = 0;
                }
                total += result[i].Data;
                console.log(result[i].Data);

            }

            var result_length = result.length;

            while(result_length--){
                console.log(result[result_length].Name + " : " + result[result_length].Data);
                names.push(result[result_length].Name);
                series[series.length] = [result[result_length].Name,result[result_length].Data/total]
            }

            $('#graph_space').highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'Total Digital Equipment Usage by Building'
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
                    type: 'pie',
                    name: 'Total Digital Equipment Usage',
                    data: series
                }]
            });


        });

		
	});


    /*
    // The dates need to be formatted for high charts. This assumes it comes in as yyyy-mm-dd hh-mm-ss
     */
    function parseDate(date){
        return new Date(Date.parse(date));
    }

    function printInstructions(){
         console.log(getInstructionData()[1].FIELD8);
    }

    function hideDescriptions(){
        //Hide all of the descriptions in the descrip_space
        var divs = $("#descrip_space").children();

        var length = divs.length;

        while(length--){
            divs[length].style.display = "none";
        }
    }

    function showDescription(id){
        id = "#" + id + "_descrip";

        $(id).show();
    }
	
	function getPrimarySubject(fund_code){
		
		var result = getSubUsage();
		
		var length = result.length;
		
		while(length--){
			if(result[length].Code == fund_code){
				return result[length].Primary_Subject;
			}
		}
		
	}
	
	function getSecondarySubject(fund_code){
		var result = getSubUsage();
		
		var length = result.length;
		
		while(length--){
			if(result[length].Code == fund_code){
				return result[length].Secondary_Subject;
			}
		}
	}
