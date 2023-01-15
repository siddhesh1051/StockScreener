import React from 'react'
import './Stocks.css'
import Chart from 'chart.js/auto';
import { useState , useEffect } from 'react';
import { Doughnut , Line } from 'react-chartjs-2';

const indiStock = () => {
    const [data , setData] = useState();
    const [show , setShow] = useState(false);
    const [Name, setStockname] = useState("NSE");
    const [days, setDays] = useState(1234);
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

//   console.log("chal ja bhai " , show);
}

useEffect(() => { getStock();
    // setIsClicked(days);
    }, [days]);

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
                        <div className="s-stock-index-logo"></div>
                        <div className="s-stock-index-name flex">NIFTY 50 INDEX</div>
                    </div>
                    <div className="s-stock-index-container2 flex">
                        <div className="s-stock-adv flex">See Advanced Chart</div>
                    </div>
                </div>    
                
                <div className="s-flex">
                    <div className="s-stock-index-container3 flex">
                        <div className="s-stock-index-val"><span>INR</span> 17956.60</div>
                        <div className="s-stock-index-change">+0.55%</div> 
                    </div>
                    <div className="s-stock-index-container4 flex">
                        <div className="s-stock-index-today">
                            <div className="s-stock-index-today-val">17930.67</div>
                            <div className="s-stock-index-today-name">OPEN</div>
                        </div>

                        <div className="s-stock-index-today">
                            <div className="s-stock-index-today-val">17930.67</div>
                            <div className="s-stock-index-today-name">CLOSE</div>
                        </div>

                        <div className="s-stock-index-today">
                            <div className="s-stock-index-today-val">17930.67</div>
                            <div className="s-stock-index-today-name">HIGH</div>
                        </div>

                        <div className="s-stock-index-today">
                            <div className="s-stock-index-today-val">17930.67</div>
                            <div className="s-stock-index-today-name">LOW</div>
                        </div>
                        
                        <div className="s-stock-index-today">
                            <div className="s-stock-index-today-val">17930.67</div>
                            <div className="s-stock-index-today-name">VOLUME</div>
                        </div>

                    </div>
                </div>    
                
            </div>
            <div className="s-stock-chart-container" >

            {/* HERE IS MY CHART */}
            {/* <button onClick={getStock}>Click</button> */}
                    {
                       !show ? <h1>Loader...</h1> : (
                        
                        <Line 
                        data = {{
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
    
                            datasets: [{data: data.map((item) => item.Close)
                            , label: "Close",
                            borderColor: "#f0b14f",
                        }]
                        
                    }}
                        options = {{
                            elements:{
                                point:{
                                    radius: 1
                                },
                            },
                        }}

                        />
                        
                       )
                    }
                    <div>

                        <button className='days-change-btn' key="1234" onClick={()=>setDays(1234)}>5 Years</button>
                        <button className='days-change-btn' key="781" onClick={()=>setDays(781)}>3 Years</button>
                        <button className='days-change-btn' key="260" onClick={()=>setDays(260)}>1 Year</button>
                        <button className='days-change-btn' key="66" onClick={()=>setDays(90)}>3 Months</button>
                        <button className='days-change-btn' key="22" onClick={()=>setDays(30)}>1 Month</button>
                        <button className='days-change-btn' key="7" onClick={()=>setDays(14)}>2 Weeks</button>
                        
                    </div>
                
            


            </div>
        </div>
    </div>
    </>
  )
}

export default indiStock