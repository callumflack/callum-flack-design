<template>
  <div>
    <script src="http://d3js.org/d3.v3.min.js"></script>
    <script>
    </script>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "Clock",
  mounted() {
    const rootElement = this.$el;
    var radians = 0.0174532925,
      clockRadius = 200,
      margin = 0,
      width = (clockRadius + margin) * 2,
      height = (clockRadius + margin) * 2,
      hourHandLength = 2 * clockRadius / 3,
      minuteHandLength = clockRadius,
      secondHandLength = clockRadius - 12,
      secondHandBalance = 30,
      secondTickStart = clockRadius,
      secondTickLength = -10,
      hourTickStart = clockRadius,
      hourTickLength = -18,
      secondLabelRadius = clockRadius + 16,
      secondLabelYOffset = 5,
      hourLabelRadius = clockRadius - 40,
      hourLabelYOffset = 7;

    var hourScale = d3
      .scaleLinear()
      .range([0, 330])
      .domain([0, 11]);

    var secondScale = d3
      .scaleLinear()
      .range([0, 354])
      .domain([0, 59]);

    var minuteScale = secondScale;

    var handData = [
      {
        type: "hour",
        value: 0,
        length: -hourHandLength,
        scale: hourScale
      },
      {
        type: "minute",
        value: 0,
        length: -minuteHandLength,
        scale: minuteScale
      },
      {
        type: "second",
        value: 0,
        length: -secondHandLength,
        scale: secondScale,
        balance: secondHandBalance
      }
    ];

    function drawClock() {
      //create all the clock elements
      updateData(); //draw them in the correct starting position
      var svg = d3
        .select(rootElement)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("class", "svg-clock");

      var face = svg
        .append("g")
        .attr("id", "clock-face")
        .attr(
          "transform",
          "translate(" +
            (clockRadius + margin) +
            "," +
            (clockRadius + margin) +
            ")"
        );

      //add marks for seconds
      face
        .selectAll(".second-tick")
        .data(d3.range(0, 60))
        .enter()
        .append("line")
        .attr("class", "second-tick")
        .attr("x1", 0)
        .attr("x2", 0)
        .attr("y1", secondTickStart)
        .attr("y2", secondTickStart + secondTickLength)
        .attr("transform", function(d) {
          return "rotate(" + secondScale(d) + ")";
        });

      //and labels
      face
        .selectAll(".second-label")
        .data(d3.range(5, 61, 5))
        .enter()
        .append("text")
        .attr("class", "second-label")
        .attr("text-anchor", "middle")
        .attr("x", function(d) {
          return secondLabelRadius * Math.sin(secondScale(d) * radians);
        })
        .attr("y", function(d) {
          return (
            -secondLabelRadius * Math.cos(secondScale(d) * radians) +
            secondLabelYOffset
          );
        })
        .text(function(d) {
          return d;
        });

      //... and hours
      face
        .selectAll(".hour-tick")
        .data(d3.range(0, 12))
        .enter()
        .append("line")
        .attr("class", "hour-tick")
        .attr("x1", 0)
        .attr("x2", 0)
        .attr("y1", hourTickStart)
        .attr("y2", hourTickStart + hourTickLength)
        .attr("transform", function(d) {
          return "rotate(" + hourScale(d) + ")";
        });

      face
        .selectAll(".hour-label")
        .data(d3.range(3, 13, 3))
        .enter()
        .append("text")
        .attr("class", "hour-label")
        .attr("text-anchor", "middle")
        .attr("x", function(d) {
          return hourLabelRadius * Math.sin(hourScale(d) * radians);
        })
        .attr("y", function(d) {
          return (
            -hourLabelRadius * Math.cos(hourScale(d) * radians) +
            hourLabelYOffset
          );
        })
        .text(function(d) {
          return d;
        });

      var hands = face.append("g").attr("id", "clock-hands");

      face
        .append("g")
        .attr("id", "face-overlay")
        .append("circle")
        .attr("class", "hands-cover")
        .attr("x", 0)
        .attr("y", 0)
        .attr("r", clockRadius / 20);

      hands
        .selectAll("line")
        .data(handData)
        .enter()
        .append("line")
        .attr("class", function(d) {
          return d.type + "-hand";
        })
        .attr("x1", 0)
        .attr("y1", function(d) {
          return d.balance ? d.balance : 0;
        })
        .attr("x2", 0)
        .attr("y2", function(d) {
          return d.length;
        })
        .attr("transform", function(d) {
          return "rotate(" + d.scale(d.value) + ")";
        });
    }

    function moveHands() {
      d3
        .select("#clock-hands")
        .selectAll("line")
        .data(handData)
        .transition()
        .attr("transform", function(d) {
          return "rotate(" + d.scale(d.value) + ")";
        });
    }

    function updateData() {
      var d = new Date();
      var localTime = d.getTime();
      var localOffset = d.getTimezoneOffset() * 60000;

      var utc = localTime + localOffset;
      var nd = new Date(utc + 3600000 * 10);

      handData[0].value = nd.getHours() % 12 + nd.getMinutes() / 60;
      handData[1].value = nd.getMinutes();
      handData[2].value = nd.getSeconds();
    }

    drawClock();

    setInterval(function() {
      updateData();
      moveHands();
    }, 1000);

    d3.select(self.frameElement).style("height", height + "px");
  }
};
</script>

<style>
@import "../assets/styles/vars.css";

.svg-clock {
  stroke: #000;
  font-family: var(--font-heading-medium);
  font-weight: normal;
  font-style: normal;
}

#rim {
  fill: none;
  stroke: #999;
  stroke-width: 3px;
}

.second-hand {
  stroke-width: 3;
}

.minute-hand {
  stroke-width: 8;
  stroke-linecap: round;
}

.hour-hand {
  stroke-width: 12;
  stroke-linecap: round;
}

.hands-cover {
  stroke-width: 3;
  fill: #fff;
}

.second-tick {
  stroke-width: 3;
  fill: var(--color-text);
}

.hour-tick {
  stroke-width: 8;
}

.second-label {
  font-size: 12px;
  font-weight: 500;
}

.hour-label {
  font-size: 24px;
  font-weight: 500;
}
</style>
