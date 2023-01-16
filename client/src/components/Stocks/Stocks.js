import React from 'react'
import './Stocks.css'
import Chart from 'chart.js/auto';
import { useState , useEffect } from 'react';
import { Doughnut , Line , Bar } from 'react-chartjs-2';
import { Spinner } from '@chakra-ui/react'
import  NSE  from "./NSE.webp";
import  BSE  from "./BSE.webp";
import  Tatasteel  from "./tatasteel.webp";
import  Eicher  from "./eicher.webp";
import  CIPLA  from "./cipla.webp";
import  Reliance  from "./reliance.webp";
import  Ashok  from "./ashok.webp";

const Stocks = () => {


    var query = window.location.href.split("home/");
    console.log("query",query[1]);
    const [adv , setAdv] = useState(false);
    const [data , setData] = useState();
    const [show , setShow] = useState(false);
    const [Name, setStockname] = useState(query[1]);
    const [days, setDays] = useState(1234);
    const [sdata , setSdata] = useState({
        Open:"",
        Close:"",
        High:"",
        Low:"",
        Volume:"",
    });
    // const [isClicked, setIsClicked] = useState(1234);
    // setStockname("ASHOKLEY");
    const newarr = [{}];
    // let datarr = [{}];
    // let detarr = [{}];

const getStock = async () => {


    const submitValues = {
        Name: Name,
        // days:days
    }
    console.log("stockname")
    console.log(submitValues);
    const response = await fetch(
        "http://localhost:5000/api/v1/stocks/",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submitValues),
  });

  if(response.status === 201) {
    //suceess
    console.log("success");
  }
  else if(response.status === 400) {
    // no such stock 
    console.log("no such stock");
  }
  else{
    // internal error
    console.log("internal error");
  }

  const st = await response.json();

  if(newarr.length === 1){
  for(let i = 1234-days; i < 1235; i++){
    newarr.push(st.Stocks[i]);    
  }
  setShow(true);
  console.log("chal ja bhai " , show);

//   let a = Math.round(st.Stocks[1234].Open * 100) / 100

  setSdata({ Open : st.Stocks[1234].Open
    
    , Close : st.Stocks[1234].Close, High : st.Stocks[1234].High, Low : st.Stocks[1234].Low, Volume : st.Stocks[1234].Volume});

}
  console.log("yeh hai new array " , newarr);
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
                        
                        // console.log("yeh hai new LOL " , data[1234].Close);

//   console.log("chal ja bhai " , show);
}

useEffect(() => { getStock();
    // setIsClicked(days);
    }, [days , query[1]]);

    // if(detarr.length > 1){
    //     setShow(true);
    //     console.log("yeh hai naya data array " , detarr);
    // }

  return (
    <>
    <div className="s-main-outer-container">
        <div className="s-main-container">
            <div className="s-stock-index-container">
                
                <div className="s-flex">
                    <div className="s-stock-index-container1 flex">
                        {/* <div className="s-stock-index-logo"></div> */}
                        <img src={query[1] === "NSE" ? NSE : query[1] === "BSE" ? BSE : query[1] === "TATASTEEL" ? Tatasteel : query[1] === "EICHERMOT" ? Eicher : query[1] === "CIPLA" ? CIPLA : query[1] === "RELIANCE" ? Reliance : query[1] === "ASHOKLEY" ? Ashok : null} alt="" className='log' />
                        {/* <img src={a} alt="" className='log' /> */}
                        <div className="s-stock-index-name">{query[1]}</div>
                    </div>
                    <div className="s-stock-index-container2 flex">
                        <div className="s-stock-adv flex" onClick={()=>setAdv(!adv)} > {!adv  ? "See Advanced Chart" : "See Basic Chart"} </div>
                    </div>
                </div>    
                <div className="s-flex">
                    <div className="s-stock-index-container3 flex">
                        <div className="s-stock-index-val"><span>INR</span> 
                        {Math.round(sdata.Close * 100) / 100}
                        </div>
                        <div className="s-stock-index-change">+0.55%</div> 
                    </div>
                    <div className="s-stock-index-container4 flex">
                        <div className="s-stock-index-today">
                            <div className="s-stock-index-today-val">{Math.round(sdata.Open * 100) / 100}</div>
                            <div className="s-stock-index-today-name">OPEN</div>
                        </div>

                        <div className="s-stock-index-today">
                            <div className="s-stock-index-today-val">{Math.round(sdata.Close * 100) / 100}</div>
                            <div className="s-stock-index-today-name">CLOSE</div>
                        </div>

                        <div className="s-stock-index-today">
                            <div className="s-stock-index-today-val">{Math.round(sdata.High * 100) / 100}</div>
                            <div className="s-stock-index-today-name">HIGH</div>
                        </div>

                        <div className="s-stock-index-today">
                            <div className="s-stock-index-today-val">{Math.round(sdata.Low * 100) / 100}</div>
                            <div className="s-stock-index-today-name">LOW</div>
                        </div>
                        
                        <div className="s-stock-index-today">
                            <div className="s-stock-index-today-val">{Math.round(sdata.Volume * 100) / 100}</div>
                            <div className="s-stock-index-today-name">VOLUME</div>
                        </div>

                    </div>
                </div>    
                
            </div>
            <div className="s-stock-chart-container" >

            {/* HERE IS MY CHART */}
            {/* <button onClick={getStock}>Click</button> */}
                    {
                       (!show) ? <Spinner
                       thickness='4px'
                       speed='0.65s'
                       emptyColor='gray.200'
                       color='yellow.500'
                       size='xl'
                       
                     /> : (

                        adv ?
                        
                        <>
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
                        </>
                        
                        :
                        
                        <><Line
                      data={{
                        labels: data.map((item) => item.Date
                          // {let date = new Date(item.Date);
                          //     // let time =
                          //     // date.getHours() > 12
                          //     //   ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                          //     //   : `${date.getHours()}:${date.getMinutes()} AM`;
                          // return date.toLocaleDateString();
                          // // days === 1 ? time :
                          // }
                        ),

                        datasets: [{
                          data: data.map((item) => item.Close),
                          label: "Close",
                          borderColor: "#f0b14f",
                        }]
                      }}
                      options={{
                        responsive: true,
                        // maintainAspectRatio: false,
                        elements: {
                          point: {
                            radius: 1
                          },
                        },
                      }} /></>
                        
                       )
                    }
                    <div className='days-div'>

<button className='days-change-btn' key="1234" onClick={() => setDays(1234)}>5 Years</button>
<button className='days-change-btn' key="781" onClick={() => setDays(781)}>3 Years</button>
<button className='days-change-btn' key="260" onClick={() => setDays(260)}>1 Year</button>
<button className='days-change-btn' key="66" onClick={() => setDays(90)}>3 Months</button>
<button className='days-change-btn' key="22" onClick={() => setDays(30)}>1 Month</button>
<button className='days-change-btn' key="7" onClick={() => setDays(14)}>2 Weeks</button>

</div>

{/* 
                    <div className='days-div'>

                        <button className='days-change-btn' key="1234" onClick={()=>setDays(1234)}>5 Years</button>
                        <button className='days-change-btn' key="781" onClick={()=>setDays(781)}>3 Years</button>
                        <button className='days-change-btn' key="260" onClick={()=>setDays(260)}>1 Year</button>
                        <button className='days-change-btn' key="66" onClick={()=>setDays(90)}>3 Months</button>
                        <button className='days-change-btn' key="22" onClick={()=>setDays(30)}>1 Month</button>
                        <button className='days-change-btn' key="7" onClick={()=>setDays(14)}>2 Weeks</button>
                        
                    </div> */}
                
            


            </div>
        </div>
    </div>
    </>
  )
}

export default Stocks