import { useEffect, useState } from "react";
import { init, dispose } from "klinecharts";
import api from "../../api/line";
export const KTable = (props) => {
  const [kdata, setKdata] = useState([]);
  const list = [
    [1, "1h"],
    [7, "3h"],
    [30, "1d"],
    [365, "7d"],
    ["all", "all"],
  ];

  const fetch = async (range) => {
    const oneDayInMilliseconds = range * 24 * 60 * 60 * 1000;
    const yesterdayTimestamp = Math.floor(
      (Date.now() - oneDayInMilliseconds) / 1000
    );
    const res = await api.get("data-api/v3.1/cryptocurrency/historical", {
      params: {
        id: 1,
        timeStart: props.select[1] > 3 ? 1278979200 : yesterdayTimestamp,
        interval: props.select[1] > 3 ? "30d" : list[props.select[1]][1],
        convertId: 2781,
      },
    });
    console.log(res.data.quotes, "res");
    const quotes = res.data.quotes;
    const kdata = quotes.map((item) => {
      return {
        timestamp: item.quote.timestamp,
        open: item.quote.open,
        close: item.quote.close,
        high: item.quote.high,
        low: item.quote.low,
      };
    });
    console.log(kdata);
    setKdata(kdata);
  };

  useEffect(() => {
    fetch(list[props.select[1]][0]);
  }, []);
  useEffect(() => {
    fetch(list[props.select[1]][0]);
  }, [props.select[1]]);

  useEffect(() => {
    const chart = init("chart", {
      styles: {
        grid: {
          show: true,
          horizontal: {
            show: true,
            size: 1,
            color: "rgba(245,245,245, 0.1)",
            style: "linea",
            dashedValue: [2, 2],
          },
          vertical: {
            show: false,
          },
        },
        candle: {
          // type: "area",
          area: {
            lineSize: 1,
            lineColor: "#CD5C5C",
            value: "close",
            smooth: true,
            backgroundColor: [
              {
                offset: 0,
                color: "rgba(	255,228,225, 0.01)",
              },
              {
                offset: 1,
                color: "rgba(	255,228,225, 0.2)",
              },
            ],
          },
          tooltip: {
            showRule: "none",
          },
        },
        xAxis: {
          axisLine: {
            show: true,
            color: "rgba(245,245,245, 0.1)",
            size: 1,
          },
          tickLine: {
            show: false,
          },
        },
        yAxis: {
          axisLine: {
            show: true,
            color: "rgba(245,245,245, 0.1)",
            size: 1,
          },
          tickLine: {
            show: false,
          },
        },
      },
    });

    chart.applyNewData(kdata);

    return () => {
      dispose("chart");
    };
  }, [kdata]);

  return <div id="chart" style={{ width: 800, height: 400 }} />;
};
