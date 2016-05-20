const sampleData = [
  {
    chartType: 'BarChart',
    data:[
      ['Element', 'Density', { role: 'style' }],
      ['Copper', 8.94, '#b87333'],            // RGB value
      ['Silver', 10.49, 'silver'],            // English color name
      ['Gold', 19.30, 'gold'],
      ['Platinum', 21.45, 'color: #e5e4e2' ] // CSS-style declaration
    ],
    options: {
      title: "Density of Precious Metals, in g/cm^3",
      bar: {groupWidth: "95%"},
      legend: { position: "none" }
    }
  },
  {
    chartType: 'LineChart',
    columns: [
      {
        label : "time",
        type: "number"
      },
      {
        label : "Air Passengers",
        type: "number"
      }
    ],
    rows: [[1949,11], [1949.08333333333,11], [1949.16666666667,13], [1949.25,12], [1949.33333333333,12], [1949.41666666667,13], [1949.5,14], [1949.58333333333,14], [1949.66666666667,136], [1949.75,119], [1949.83333333333,104], [1949.91666666667,118], [1950,115], [1950.08333333333,126], [1950.16666666667,141], [1950.25,135], [1950.33333333333,125], [1950.41666666667,149], [1950.5,170], [1950.58333333333,170], [1950.66666666667,158], [1950.75,133], [1950.83333333333,114], [1950.91666666667,140], [1951,145], [1951.08333333333,150], [1951.16666666667,178], [1951.25,163], [1951.33333333333,172], [1951.41666666667,178], [1951.5,199], [1951.58333333333,199], [1951.66666666667,184], [1951.75,162], [1951.83333333333,146], [1951.91666666667,166], [1952,171], [1952.08333333333,180], [1952.16666666667,193], [1952.25,181], [1952.33333333333,183], [1952.41666666667,218], [1952.5,230], [1952.58333333333,242], [1952.66666666667,209], [1952.75,191], [1952.83333333333,172], [1952.91666666667,194], [1953,196], [1953.08333333333,196], [1953.16666666667,236], [1953.25,235], [1953.33333333333,229], [1953.41666666667,243], [1953.5,264], [1953.58333333333,272], [1953.66666666667,237], [1953.75,211], [1953.83333333333,180], [1953.91666666667,201], [1954,204], [1954.08333333333,188], [1954.16666666667,235], [1954.25,227], [1954.33333333333,234], [1954.41666666667,264], [1954.5,302], [1954.58333333333,293], [1954.66666666667,259], [1954.75,229], [1954.83333333333,203], [1954.91666666667,229], [1955,242], [1955.08333333334,233], [1955.16666666667,267], [1955.25,269], [1955.33333333334,270], [1955.41666666667,315], [1955.5,364], [1955.58333333334,347], [1955.66666666667,312], [1955.75,274], [1955.83333333334,237], [1955.91666666667,278], [1956,284], [1956.08333333334,277], [1956.16666666667,317], [1956.25,313], [1956.33333333334,318], [1956.41666666667,374], [1956.5,413], [1956.58333333334,405], [1956.66666666667,355], [1956.75,306], [1956.83333333334,271], [1956.91666666667,306], [1957,315], [1957.08333333334,301], [1957.16666666667,356], [1957.25,348], [1957.33333333334,355], [1957.41666666667,422], [1957.5,465], [1957.58333333334,467], [1957.66666666667,404], [1957.75,347], [1957.83333333334,305], [1957.91666666667,336], [1958,340], [1958.08333333334,318], [1958.16666666667,362], [1958.25,348], [1958.33333333334,363], [1958.41666666667,435], [1958.5,491], [1958.58333333334,505], [1958.66666666667,404], [1958.75,359], [1958.83333333334,310], [1958.91666666667,337], [1959,360], [1959.08333333334,342], [1959.16666666667,406], [1959.25,396], [1959.33333333334,420], [1959.41666666667,472], [1959.5,548], [1959.58333333334,559], [1959.66666666667,463], [1959.75,407], [1959.83333333334,362], [1959.91666666667,405], [1960,417], [1960.08333333334,391], [1960.16666666667,419], [1960.25,461], [1960.33333333334,472], [1960.41666666667,535], [1960.5,622], [1960.58333333334,606], [1960.66666666667,508], [1960.75,461], [1960.83333333334,390], [1960.91666666667,432]
    ],
    options : {legend: true, hAxis: {title: 'Time'}, vAxis: {title: 'Air Passengers'}}
  },
  {
    chartType: 'BubbleChart',
    data:[
      ['ID','Life Expectancy','Fertility Rate','Region','Population'],['CAN',80.66,1.67,'North America', 33739900],['DEU',79.84,1.36,'Europe',81902307],['DNK',78.6,1.84,'Europe',5523095],['EGY',72.73,2.78,'Middle East',79716203],['GBR',80.05,2,'Europe',61801570],['IRN',72.49,1.7, 'Middle East',73137148],['IRQ',68.09,4.77,'Middle East',31090763],['ISR',81.55,2.96,'Middle East',7485600],['RUS',68.6,1.54,'Europe',141850000],['USA',78.09,2.05,'North America',307007000]
    ],
    options: {
      title: 'Correlation between life expectancy, fertility rate and population of some world countries (2010)',
      hAxis: {title: 'Life Expectancy'},
      vAxis: {title: 'Fertility Rate'},
      bubble: {textStyle: {fontSize: 11}}
    }
  },
  {
    chartType: 'Histogram',
    data: [
      ['Dinosaur', 'Length'],['Acrocanthosaurus (top-spined lizard)', 12.2],['Albertosaurus (Alberta lizard)', 9.1],['Allosaurus (other lizard)', 12.2],['Apatosaurus (deceptive lizard)', 22.9],['Archaeopteryx (ancient wing)', 0.9],['Argentinosaurus (Argentina lizard)', 36.6],['Baryonyx (heavy claws)', 9.1],['Brachiosaurus (arm lizard)', 30.5],['Ceratosaurus (horned lizard)', 6.1],['Coelophysis (hollow form)', 2.7],['Compsognathus (elegant jaw)', 0.9],['Deinonychus (terrible claw)', 2.7],['Diplodocus (double beam)', 27.1],['Dromicelomimus (emu mimic)', 3.4],['Gallimimus (fowl mimic)', 5.5],['Mamenchisaurus (Mamenchi lizard)', 21.0],['Megalosaurus (big lizard)', 7.9],['Microvenator (small hunter)', 1.2],['Ornithomimus (bird mimic)', 4.6],['Oviraptor (egg robber)', 1.5],['Plateosaurus (flat lizard)', 7.9],['Sauronithoides (narrow-clawed lizard)', 2.0],['Seismosaurus (tremor lizard)', 45.7],['Spinosaurus (spiny lizard)', 12.2],['Supersaurus (super lizard)', 30.5],['Tyrannosaurus (tyrant lizard)', 15.2],['Ultrasaurus (ultra lizard)', 30.5],['Velociraptor (swift robber)', 1.8]
    ],
    options: {title : 'Lengths of dinosaurs, in meters'}
  },
  {
    chartType:'ScatterChart',
    data: [
      ['Age', 'Weight'], [8,12], [4,5.5], [11,14], [4,5], [3,3.5], [6.5,7]
    ],
    options: {
      title: 'Age vs. Weight Comparison',
      hAxis: {title: 'Age', minValue: 0, maxValue: 15},
      vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
      legend: 'none'
    }
  },
  {
    chartType: 'LineChart',
    data: [["time","UKgas"],[1960,160.1],[1960.25,129.7],[1960.5,84.8],[1960.75,120.1],[1961,160.1],[1961.25,124.9],[1961.5,84.8],[1961.75,116.9],[1962,169.7],[1962.25,140.9],[1962.5,89.7],[1962.75,123.3],[1963,187.3],[1963.25,144.1],[1963.5,92.9],[1963.75,120.1],[1964,176.1],[1964.25,147.3],[1964.5,89.7],[1964.75,123.3],[1965,185.7],[1965.25,155.3],[1965.5,99.3],[1965.75,131.3],[1966,200.1],[1966.25,161.7],[1966.5,102.5],[1966.75,136.1],[1967,204.9],[1967.25,176.1],[1967.5,112.1],[1967.75,140.9],[1968,227.3],[1968.25,195.3],[1968.5,115.3],[1968.75,142.5],[1969,244.9],[1969.25,214.5],[1969.5,118.5],[1969.75,153.7],[1970,244.9],[1970.25,216.1],[1970.5,188.9],[1970.75,142.5],[1971,301],[1971.25,196.9],[1971.5,136.1],[1971.75,267.3],[1972,317],[1972.25,230.5],[1972.5,152.1],[1972.75,336.2],[1973,371.4],[1973.25,240.1],[1973.5,158.5],[1973.75,355.4],[1974,449.9],[1974.25,286.6],[1974.5,179.3],[1974.75,403.4],[1975,491.5],[1975.25,321.8],[1975.5,177.7],[1975.75,409.8],[1976,593.9],[1976.25,329.8],[1976.5,176.1],[1976.75,483.5],[1977,584.3],[1977.25,395.4],[1977.5,187.3],[1977.75,485.1],[1978,669.2],[1978.25,421],[1978.5,216.1],[1978.75,509.1],[1979,827.7],[1979.25,467.5],[1979.5,209.7],[1979.75,542.7],[1980,840.5],[1980.25,414.6],[1980.5,217.7],[1980.75,670.8],[1981,848.5],[1981.25,437],[1981.5,209.7],[1981.75,701.2],[1982,925.3],[1982.25,443.4],[1982.5,214.5],[1982.75,683.6],[1983,917.3],[1983.25,515.5],[1983.5,224.1],[1983.75,694.8],[1984,989.4],[1984.25,477.1],[1984.5,233.7],[1984.75,730],[1985,1087],[1985.25,534.7],[1985.5,281.8],[1985.75,787.6],[1986,1163.9],[1986.25,613.1],[1986.5,347.4],[1986.75,782.8]],
    options : {
      title: 'UK Yearly Gas Emissions'
    }
  },
  {
    chartType: 'AreaChart',
    data: [["Year","Sales","Expenses"],["2013",1000,400],["2014",1170,460],["2015",660,1120],["2016",1030,540]]
  },
  // https://github.com/google/google-visualization-issues/issues/1685 NOT SUPPORTED
  //{
  //  chartType: 'CalendarChart',
  //  rows: [
  //    [ new Date(2012, 3, 13), 37032 ],
  //    [ new Date(2012, 3, 14), 38024 ],
  //    [ new Date(2012, 3, 15), 38024 ],
  //    [ new Date(2012, 3, 16), 38108 ],
  //    [ new Date(2012, 3, 17), 38229 ],
  //    // Many rows omitted for brevity.
  //    [ new Date(2013, 9, 4), 38177 ],
  //    [ new Date(2013, 9, 5), 38705 ],
  //    [ new Date(2013, 9, 12), 38210 ],
  //    [ new Date(2013, 9, 13), 38029 ],
  //    [ new Date(2013, 9, 19), 38823 ],
  //    [ new Date(2013, 9, 23), 38345 ],
  //    [ new Date(2013, 9, 24), 38436 ],
  //    [ new Date(2013, 9, 30), 38447 ]
  //  ],
  //  columns: [{ type: 'date', id: 'Date' },{ type: 'number', id: 'Won/Loss' } ],
  //  options: {
  //    title: "Red Sox Attendance",
  //    height: 350
  //  }
  //},
  {
    chartType: 'CandlestickChart',
    data: [["DAY", "val1", "val2","val3","val4"],["Mon", 20, 28, 38, 45], ["Tue", 31, 38, 55, 66], ["Wed", 50, 55, 77, 80], ["Thu", 77, 77, 66, 50], ["Fri", 68, 66, 22, 15]],
    options: {
      title:"HI",
      legend: "none"
    }
  },
  {
    chartType:'ColumnChart',
    data:[['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
      'Western', 'Literature', { role: 'annotation' } ],['2010', 10, 24, 20, 32, 18, 5, ''],['2020', 16, 22, 23, 30, 16, 9, ''],['2030', 28, 19, 29, 30, 12, 13, '']
    ],
    options: {
      legend: { position: 'top', maxLines: 3 },
      bar: { groupWidth: '75%' },
      isStacked: true
    }
  },
  {
    chartType:'ComboChart',
    data:[
      ["Month", "Bolivia", "Ecuador", "Madagascar", "Papua New Guinea", "Rwanda", "Average"],
      ["2004/05",  165,      938,         522,             998,           450,      614.6],
      ["2005/06",  135,      1120,        599,             1268,          288,      682],
      ["2006/07",  157,      1167,        587,             807,           397,      623],
      ["2007/08",  139,      1110,        615,             968,           215,      609.4],
      ["2008/09",  136,      691,         629,             1026,          366,      569.6]
    ],
    options: {
      title : 'Monthly Coffee Production by Country',
      vAxis: {title: 'Cups'},
      hAxis: {title: 'Month'},
      seriesType: 'bars',
      series: {5: {type: 'line'}}
    }
  },
  {
    chartTitle: 'DonutChart',
    chartType:'PieChart',
    data: [['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]],
    options: {
      title: 'My Daily Activities',
      pieHole: 0.4,
      is3D: true
    }
  },
  {
    chartType: 'SteppedAreaChart',
    data: [
      ['Director (Year)',  'Rotten Tomatoes', 'IMDB'],
      ['Alfred Hitchcock (1935)', 8.4,         7.9],
      ['Ralph Thomas (1959)',     6.9,         6.5],
      ['Don Sharp (1978)',        6.5,         6.4],
      ['James Hawes (2008)',      4.4,         6.2]
    ],
    options:{
      title: 'The decline of \'The 39 Steps\'',
      vAxis: {title: 'Accumulated Rating'},
      isStacked: true
    }
  },
  {
    chartType: 'Table',
    columns: [
      {type: 'string', label:'Name'},
      {type: 'number', label:'Salary'},
      {type: 'boolean', label:'Full Time Employee'}
    ],
    rows: [
      ['Mike',  {v: 10000, f: '$10,000'}, true],
      ['Jim',   {v:8000,   f: '$8,000'},  false],
      ['Alice', {v: 12500, f: '$12,500'}, true],
      ['Bob',   {v: 7000,  f: '$7,000'},  true]
    ]
  },
  {
    chartType: 'Timeline',
    columns: [
        {id: 'President', type: 'string'},
        {id: 'Start', type: 'date'},
        {id: 'End', type: 'date'}
      ],
    rows: [[ 'Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
      [ 'Adams',      new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
      [ 'Jefferson',  new Date(1801, 2, 4),  new Date(1809, 2, 4) ]],
    options:{
      width:'600px'
    }
  },
  {
    chartType: 'TreeMap',
    data:[
      ['Location', 'Parent', 'Market trade volume (size)', 'Market increase/decrease (color)'],
      ['Global', null, 0, 0],
      ['America', 'Global', 0, 0],
      ['Europe', 'Global', 0, 0],
      ['Asia', 'Global', 0, 0],
      ['Australia', 'Global', 0, 0],
      ['Africa', 'Global', 0, 0],
      ['Brazil', 'America', 11, 10],
      ['USA', 'America', 52, 31],
      ['Mexico', 'America', 24, 12],
      ['Canada', 'America', 16, -23],
      ['France', 'Europe', 42, -11],
      ['Germany', 'Europe', 31, -2],
      ['Sweden', 'Europe', 22, -13],
      ['Italy', 'Europe', 17, 4],
      ['UK', 'Europe', 21, -5],
      ['China', 'Asia', 36, 4],
      ['Japan', 'Asia', 20, -12],
      ['India', 'Asia', 40, 63],
      ['Laos', 'Asia', 4, 34],
      ['Mongolia', 'Asia', 1, -5],
      ['Israel', 'Asia', 12, 24],
      ['Iran', 'Asia', 18, 13],
      ['Pakistan', 'Asia', 11, -52],
      ['Egypt', 'Africa', 21, 0],
      ['S. Africa', 'Africa', 30, 43],
      ['Sudan', 'Africa', 12, 2],
      ['Congo', 'Africa', 10, 12],
      ['Zaire', 'Africa', 8, 10]
    ]
  },
  {
    chartTitle: 'TrendLines',
    chartType:'ScatterChart',
    data:[
      ['Diameter', 'Age'],
      [8, 37], [4, 19.5], [11, 52], [4, 22], [3, 16.5], [6.5, 32.8], [14, 72]],
    options: {
      title: 'Age of sugar maples vs. trunk diameter, in inches',
      hAxis: {title: 'Diameter'},
      vAxis: {title: 'Age'},
      legend: 'none',
      trendlines: { 0: {} }    // Draw a trendline for data series 0.
    }
  },
  {
    chartTitle: 'Waterfall',
    chartType:'CandlestickChart',
    data: [["DAY", "val1", "val2","val3","val4"],["Mon", 20, 28, 38, 45], ["Tue", 31, 38, 55, 66], ["Wed", 50, 55, 77, 80], ["Thu", 77, 77, 66, 50], ["Fri", 68, 66, 22, 15]],
    options: {
      legend: 'none',
      bar: { groupWidth: '100%' }, // Remove space between bars.
      candlestick: {
        fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
        risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
      }
    }
  },
  {
    chartTitle: 'Gantt',
    chartType:'Gantt',
    columns: [
      {id :'Task ID' , type: 'string'},
      {id :'Task Name' , type: 'string'},
      {id :'Start Date' , type: 'date'},
      {id :'End Date' , type: 'date'},
      {id :'Duration' , type: 'number'},
      {id :'Percent Complete' , type: 'number'},
      {id :'Dependencies' , type: 'string'}
    ],
    rows: [
      ['Research', 'Find sources',
        new Date(2015, 0, 1), new Date(2015, 0, 5), null,  100,  null],
      ['Write', 'Write paper',
        null, new Date(2015, 0, 9), 3* 24 * 60 * 60 * 1000, 25, 'Research,Outline'],
      ['Cite', 'Create bibliography',
        null, new Date(2015, 0, 7), 1* 24 * 60 * 60 * 1000, 20, 'Research'],
      ['Complete', 'Hand in paper',
        null, new Date(2015, 0, 10), 1* 24 * 60 * 60 * 1000, 0, 'Cite,Write'],
      ['Outline', 'Outline paper',
        null, new Date(2015, 0, 6), 1* 24 * 60 * 60 * 1000, 100, 'Research']
    ],
    options: {
    }
  },
  {
    chartTitle : 'WordTree',
    chartType: 'WordTree',
    data: [ ['Phrases'],
      ['cats are better than dogs'],
      ['cats eat kibble'],
      ['cats are better than hamsters'],
      ['cats are awesome'],
      ['cats are people too'],
      ['cats eat mice'],
      ['cats meowing'],
      ['cats in the cradle'],
      ['cats eat mice'],
      ['cats in the cradle lyrics'],
      ['cats eat kibble'],
      ['cats for adoption'],
      ['cats are family'],
      ['cats eat mice'],
      ['cats are better than kittens'],
      ['cats are evil'],
      ['cats are weird'],
      ['cats eat mice'],
    ],
    options: {
      wordtree: {
        format: 'implicit',
        word: 'cats'
      }
    }
  }
  // Sankey Chart looks like it's not supported by ChartWrapper
  //{
  //  chartType:'Sankey',
  //  columns : [
  //    {label: 'From', type: 'string'},
  //    {label: 'To', type: 'string'},
  //    {label: 'Weight', type: 'number'}
  //  ],
  //  rows: [
  //    [ 'A', 'X', 5 ],
  //    [ 'A', 'Y', 7 ],
  //    [ 'A', 'Z', 6 ],
  //    [ 'B', 'X', 2 ],
  //    [ 'B', 'Y', 9 ],
  //    [ 'B', 'Z', 4 ]
  //  ]
  //}
];

module.exports = sampleData;

//
//var sample_data = {
//
//  BarChart: {
//    dataArray : [['Element', 'Density', { role: 'style' }],
// ['Copper', 8.94, '#b87333'],      // RGB value
//      ['Silver', 10.49, 'silver'],            // English color name
//      ['Gold', 19.30, 'gold'],
//      ['Platinum', 21.45, 'color: #e5e4e2' ] // CSS-style declaration
//    ],
//    options : {
//      title: "Density of Precious Metals, in g/cm^3",
//      bar: {groupWidth: "95%"},
//      legend: { position: "none" }
//    }
//  },
//
//
//  two_columns : {
//    rows : [
//      [0, 67], [1, 88], [2, 77],
//      [3, 93], [4, 85], [5, 91],
//      [6, 71], [7, 78], [8, 93],
//      [9, 80], [10, 82],[0, 75],
//      [5, 80], [3, 90], [1, 72],
//      [5, 75], [6, 68], [7, 98],
//      [3, 82], [9, 94], [2, 79],
//      [2, 95], [2, 86], [3, 67],
//      [4, 60], [2, 80], [6, 92],
//      [2, 81], [8, 79], [9, 83],
//      [3, 75], [1, 80], [3, 71],
//      [3, 89], [4, 92], [5, 85],
//      [6, 92], [7, 78], [6, 95],
//      [3, 81], [0, 64], [4, 85],
//      [2, 83], [3, 96], [4, 77],
//      [5, 89], [4, 89], [7, 84],
//      [4, 92], [9, 98]
//    ],
//    columns : [
//      {
//        'type': 'number',
//        'label' : 'Hours Studied'
//      },
//      {
//        'type' : 'number',
//        'label' : 'Final'
//      }
//    ]
//  },
//  three_columns : {
//    rows: [
//      [0, 0, 67],  [1, 1, 88],   [2, 2, 77],
//      [3, 3, 93],  [4, 4, 85],   [5, 5, 91],
//      [6, 6, 71],  [7, 7, 78],   [8, 8, 93],
//      [9, 9, 80],  [10, 10, 82], [11, 0, 75],
//      [12, 5, 80], [13, 3, 90],  [14, 1, 72],
//      [15, 5, 75], [16, 6, 68],  [17, 7, 98],
//      [18, 3, 82], [19, 9, 94],  [20, 2, 79],
//      [21, 2, 95], [22, 2, 86],  [23, 3, 67],
//      [24, 4, 60], [25, 2, 80],  [26, 6, 92],
//      [27, 2, 81], [28, 8, 79],  [29, 9, 83]
//    ],
//    columns : [
//      {
//        'type': 'number',
//        'label' : 'Student ID'
//      },
//      {
//        'type' : 'number',
//        'label' : 'Hours Studied'
//      },
//      {
//        'type' : 'number',
//        'label' : 'Final'
//      }
//    ]
//  },
//  data_array: {
//    data: [
//      ['Age', 'Weight'],
//      [ 8,      12],
//      [ 4,      5.5],
//      [ 11,     14],
//      [ 4,      5],
//      [ 3,      3.5],
//      [ 6.5,    7]
//    ]
//  }
//
//};
