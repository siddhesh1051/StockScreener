import React from "react";
import { Link } from "react-router-dom";
import "./Index.css";
import Chart from "chart.js/auto";
import { useState, useEffect } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";

const Index = () => {
  const [data, setData] = useState();
  const [candle, setCandle] = useState();
  const [show, setShow] = useState(false);
  const [Name, setStockname] = useState("TATASTEEL");
  const [days, setDays] = useState(1234);
  // const [colors , setColor] = useState()
  // const [isClicked, setIsClicked] = useState(1234);
  // setStockname("ASHOKLEY");
  const newarr = [{}];
  const colarr = [];
  // let detarr = [{}];

  const getStock = async () => {
    const submitValues = {
      Name: Name,
      // days:days
    };
    console.log("stockname");
    console.log(submitValues);
    const response = await fetch("http://localhost:5000/api/v1/stocks/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitValues),
    });

    if (response.status === 201) {
      //suceess
      console.log("success");
    } else if (response.status === 400) {
      // no such stock
      console.log("no such stock");
    } else {
      // internal error
      console.log("internal error");
    }

    const st = await response.json();

    if (newarr.length === 1) {
      for (let i = 1234 - days; i < 1235; i++) {
        newarr.push(st.Stocks[i]);

        // if (st.Stocks[i].Open <= st.Stocks[i].Close) {
        //   colarr.push("rgba(0,255,0,0.2)");
        // } else {
        //   colarr.push("rgba(255,0,0,0.2)");
        // }
      }
      setShow(true);
      console.log("chal ja bhai ", show);

      console.log("COLOR ARR", colarr);
    }
    console.log("yeh hai new array ", newarr);
    setData(newarr);
    //   console.log("bhai yeh hai data");
    //   console.log(data);

    //   if(newarr.length === days){
    //   let b = -1*days;
    //   datarr = newarr.slice(b);
    //     console.log("yeh hai naya data array " , datarr);
    //     console.log("length" , datarr.length);

    // }
    //  detarr = newarr.slice(-1*days);
    console.log("comparator close", newarr[2].Close);
    console.log("comparator ", newarr[2].Open);
    console.log("loler", parseInt(newarr[2].Close) > parseInt(newarr[2].Open));
  };

  useEffect(() => {
    getStock();
    // setIsClicked(days);
  }, [days]);

  // var bg = colarr.map((colore) => colore);

  return (
    <>
      <div className="stock-chart-container flex" id="chartbox">
        {!show ? (
          <h1>Loader...</h1>
        ) : (
          // <Line
          //   data={{
          //     labels: data.map(
          //       (item) => item.Date
          //       // {let date = new Date(item.Date);
          //       //     // let time =
          //       //     // date.getHours() > 12
          //       //     //   ? `${date.getHours() - 12}:${date.getMinutes()} PM`
          //       //     //   : `${date.getHours()}:${date.getMinutes()} AM`;
          //       // return date.toLocaleDateString();
          //       // // days === 1 ? time :
          //       // }
          //     ),

          //     datasets: [
          //       {
          //         data: data.map((item) => item.Close),
          //         label: "Close",
          //         borderColor: "#f0b14f",
          //       },
          //     ],
          //   }}
          //   options={{
          //     elements: {
          //       point: {
          //         radius: 1,
          //       },
          //     },
          //   }}
          // />

          <Bar
            data={{
              labels: data.map(
                (item) => item.Date
               
              ),

              datasets: [
                {
                  data: data.map((item) => [
                    item.Open,
                    item.Close,
                    item.High,
                    item.Low,
                  ]),
                  label: "CandleStick",
                  borderColor: "#f0b14f",
                  backgroundColor: ["red", "green"],
                  // backgroundColor: data.map(
                  //   (item) => parseInt(item.Close) >= parseInt(item.Open)
                  // )
                  //   ? "green"
                  //   : "red",
                  // barThickness: 40,
                },
                // {
                //   data: data.map((item) => [item.High, item.Low]),
                //   label: "Wick",
                //   // width: "1px",
                //   backgroundColor: "blue",
                //   // barThickness: 1,
                //   barPercentage: 0.2,
                //   // marginLeft: "-20px",
                // },
              ],

              // options: {
              //   scales: {
              //     x: {
              //       stacked: true,
              //     },
              //     // y: {
              //     //   stacked: true,
              //     // },
              //   },
              // },
            }}
          />

          // <div className="candlestick-outer">
          //   {data.map((item) => {
          //     return (
          //       <div
          //         style={{
          //           color: item.High >= item.Low ? "green" : "red",
          //           width: "5px",
          //           height: (item.Open / 120) * 8 + "px",
          //           // heigth: "15px",
          //           backgroundColor: item.High >= item.Low ? "green" : "red",
          //           marginBottom: (item.Close / 120) * 8 + "px",
          //           marginLeft: "3px",
          //           marginRigth: "3px",
          //           // alignItems: "center",
          //           // display: "flex",
          //         }}
          //       >
          //         {/* <div
          //           style={{
          //             color: item.High >= item.Low ? "green" : "red",
          //             height: (item.High / 120) * 8 + "px",
          //             width: "0.5px",
          //             backgroundColor: "white",
          //           }}
          //         ></div> */}
          //         {/* LOLER{item.Close} */}
          //       </div>
          //     );
          //   })}
          // </div>
        )}
      </div>
      <div>
        <button
          className="days-change-btn"
          key="1234"
          onClick={() => setDays(1234)}
        >
          5 Years
        </button>
        <button
          className="days-change-btn"
          key="781"
          onClick={() => setDays(781)}
        >
          3 Years
        </button>
        <button
          className="days-change-btn"
          key="260"
          onClick={() => setDays(260)}
        >
          1 Year
        </button>
        <button
          className="days-change-btn"
          key="66"
          onClick={() => setDays(90)}
        >
          3 Months
        </button>
        <button
          className="days-change-btn"
          key="22"
          onClick={() => setDays(30)}
        >
          1 Month
        </button>
        <button className="days-change-btn" key="7" onClick={() => setDays(14)}>
          2 Weeks
        </button>
      </div>
    </>
  );
};

export default Index;
