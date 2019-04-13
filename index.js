// Import stylesheets
import './style.css';




//Gráfico de Barras. Mi 1º grafico
var visualization = d3plus.viz()
 .container("#viz1")
 .data([{"year": 1991, "name":"alpha", "value": 15},
 {"year": 1992, "name":"alpha", "value": 20},])
 .type("bar")
 .id("name")
 .x("year")
 .y("value")
 .draw()


//Reutilizar código de:  jsfiddle.net/skfdk1ao/13
 var data = [
    {"year": 1991, "name":"alpha", "value": 15},
    {"year": 1991, "name":"beta", "value": 10},
    {"year": 1991, "name":"gamma", "value": 5},
    {"year": 1991, "name":"delta", "value": 50},
    {"year": 1992, "name":"alpha", "value": 20},
    {"year": 1992, "name":"beta", "value": 10},
    {"year": 1992, "name":"gamma", "value": 10},
    {"year": 1992, "name":"delta", "value": 43},
    {"year": 1993, "name":"alpha", "value": 30},
    {"year": 1993, "name":"beta", "value": 40},
    {"year": 1993, "name":"gamma", "value": 20},
    {"year": 1993, "name":"delta", "value": 17},
    {"year": 1994, "name":"alpha", "value": 60},
    {"year": 1994, "name":"beta", "value": 60},
    {"year": 1994, "name":"gamma", "value": 25},
    {"year": 1994, "name":"delta", "value": 32}
  ]
  var visualization = d3plus.viz()
    .container("#viz2")
    .data(data)
    .type("bar")
    .id("name")
    .x("year")
    .y("value")
    .axes({"ticks" : false})
    .draw()


//Reutilizar código de:   jsfiddle.net/irislieuw/vxqpxfna
 var data = [
    {"year": 1991, "name":"alpha", "value": 15},
    {"year": 1992, "name":"alpha", "value": 34},
    {"year": 1991, "name":"alpha2", "value": 17},
    {"year": 1992, "name":"alpha2", "value": 65},
    {"year": 1991, "name":"beta", "value": 10},
    {"year": 1992, "name":"beta", "value": 10},
    {"year": 1991, "name":"beta2", "value": 40},
    {"year": 1992, "name":"beta2", "value": 38},
    {"year": 1991, "name":"gamma", "value": 5},
    {"year": 1992, "name":"gamma", "value": 10},
    {"year": 1991, "name":"gamma2", "value": 20},
    {"year": 1992, "name":"gamma2", "value": 34},
    {"year": 1991, "name":"delta", "value": 50},
    {"year": 1992, "name":"delta", "value": 43},
    {"year": 1991, "name":"delta2", "value": 17},
    {"year": 1992, "name":"delta2", "value": 35}
  ]

  var visualization = d3plus.viz()
    .container("#viz3")
    .data(data)
    .type("box")
    .id("name")
    .x("year")
    .y("value")
    .time("year")
    .ui([{ 
        "label": "Visualization Type",
        "method": "type", 
        "value": ["scatter","box"]
      }])
    .draw()