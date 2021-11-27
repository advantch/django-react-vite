const CHART_OPTIONS = {
  title: {
    text: "Factory Sensor Data",
  },
  toolbox: {
    show: true,
    feature: {
      dataView: { readOnly: false },
      restore: {},
      saveAsImage: {},
    },
  },
  grid: {
    top: 60,
    left: 80,
    right: 60,
    bottom: 45,
  },
  xAxis: {
    type: "category",
    name: "Factory area",
    nameLocation: "middle",
    nameTextStyle: {
        verticalAlign: "middle",
        fontWeight: "bold",
    },
    nameGap: 35,
    bondaryGap: true,
    data: [
      "lobby",
      "hallway",
      "office",
      "floor",
      "roof",
      "storage",
      "grounds",
    ],
  },
  yAxis: {
    type: "value",
    name: "kwh",
    nameGap: 45,
    nameLocation: "middle",
    nameTextStyle: {
      verticalAlign: "middle",
      fontWeight: "bold",
    },
    max: 1200,
    min: 300,
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1233, 1320],
      type: "bar",
      smooth: true,
    },
  ],
  tooltip: {
    trigger: "axis",
  },
};

export default CHART_OPTIONS;
