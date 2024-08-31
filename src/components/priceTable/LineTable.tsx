import api from "../../api/line";
import { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export const LineTable = (props) => {
  const ref = useRef(null);
  const [time, setTime] = useState([]);
  const [price, setPrice] = useState([]);

  const init = async (range) => {
    console.log(range, "range");
    const res = await api.get("data-api/v3/cryptocurrency/detail/chart", {
      params: {
        id: 1,
        range: range,
      },
    });
    const times = [];
    const prices = [];

    for (const timestamp in res.data.points) {
      if (res.data.points.hasOwnProperty(timestamp)) {
        const priceData = res.data.points[timestamp];
        const time = new Date(Number(timestamp) * 1000).toLocaleString();
        const currentPrice = priceData?.v[0];
        times.push(time);
        prices.push(currentPrice);
      }
    }

    setTime(times);
    setPrice(prices);
  };

  useEffect(() => {
    init(props.select[0] || "1D");
  }, []);

  useEffect(() => {
    if (ref.current && time.length && price.length) {
      const chart = new Chart(ref.current, {
        type: "line",
        data: {
          labels: time,
          datasets: [
            {
              label: "BTC/USDT",
              data: price,
              borderColor: "#009188",
              fill: false,
              pointRadius: 0, // 设置点的半径为0，去掉点
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              ticks: {
                autoSkip: true,
                maxTicksLimit: 10,
              },
              grid: {
                display: false,
              },
            },
            y: {
              position: "right",
              grid: {
                color: "rgba(245,245,245, 0.1)",
                drawBorder: true,
                drawTicks: false,
              },
              ticks: {
                color: "rgba(255, 255, 255, 0.37)",
                callback: (value) => value.toFixed(2),
              },
              border: {
                color: "rgba(245,245,245, 0.1)",
                width: 2,
              },
            },
          },
          plugins: {
            tooltip: {
              enabled: true,
              mode: "nearest", // 最近的点
              intersect: false, // 不需要精确到点
              callbacks: {
                title: (tooltipItems) => {
                  // 返回当前点的时间
                  return tooltipItems[0].label;
                },
                label: (tooltipItem) => {
                  // 返回当前点的价格
                  return `Price: ${tooltipItem.raw.toFixed(2)}`;
                },
              },
            },
            legend: {
              display: true,
            },
          },
        },
      });

      return () => {
        chart.destroy();
      };
    }
  }, [time, price]);

  useEffect(() => {
    if (props.select[0]) {
      init(props.select[0]);
    }
  }, [props.select[0]]);

  return (
    <div>
      <div style={{ display: "flex", gap: "5px", height: "16px" }}></div>

      <div style={{ width: 800, height: 400 }}>
        <canvas ref={ref}></canvas>
      </div>
    </div>
  );
};
