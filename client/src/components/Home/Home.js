import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Chart from 'chart.js/auto';
import { useState , useEffect } from 'react';
import { Doughnut , Line } from 'react-chartjs-2';






const Home = () => {

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


  return (
    <>
    

    <div className="main-outer-container">
        <div className="main-container">
            <div className="stock-index-container flex">

                <div className="stock-index flex">
                    <div className="stock-index-logo"></div>
                    <div className="stock-index-details flex">
                        <div className="stock-index-name">NIFTY 50</div>
                        <div className="stock-index-values flex">
                            <div className="stock-index-val">17950.56</div>
                            <div className="stock-index-change">+0.55%</div>
                        </div>
                    </div>
                </div>
                <div className="stock-index flex">
                    <div className="stock-index-logo"></div>
                    <div className="stock-index-details flex">
                        <div className="stock-index-name">SENSEX</div>
                        <div className="stock-index-values flex">
                            <div className="stock-index-val">60261.90</div>
                            <div className="stock-index-change">+0.51%</div>
                        </div>
                    </div>
                </div>
                <div className="stock-index flex">
                    <div className="stock-index-logo"></div>
                    <div className="stock-index-details flex">
                        <div className="stock-index-name">NIFTY 50</div>
                        <div className="stock-index-values flex">
                            <div className="stock-index-val">17950.56</div>
                            <div className="stock-index-change">+0.55%</div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="stock-chart-container flex" id="chartbox">

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
                  


            </div>
            <div>

<button className='days-change-btn' key="1234" onClick={()=>setDays(1234)}>5 Years</button>
<button className='days-change-btn' key="781" onClick={()=>setDays(781)}>3 Years</button>
<button className='days-change-btn' key="260" onClick={()=>setDays(260)}>1 Year</button>
<button className='days-change-btn' key="66" onClick={()=>setDays(90)}>3 Months</button>
<button className='days-change-btn' key="22" onClick={()=>setDays(30)}>1 Month</button>
<button className='days-change-btn' key="7" onClick={()=>setDays(14)}>2 Weeks</button>

</div>
            
            <div className="stock-shares-container">
                <div className="stock-shares-heading">Recent Stocks</div>
                <div className="stock-shares-box">
                    

                    <Link to="/home/RELIANCE">
                    <div className="stock-shares flex">
                        <div className="stock-shares-logo"></div>
                        <div className="stock-shares-name flex">Reliance Inc</div>
                        <div className="stock-shares-val flex"><span style={{ color:`aqua` }}>INR</span>3125.60</div>
                        <div className="stock-shares-change flex">+2.13%</div>
                    </div>
                    </Link>
                    <Link to="/home/ASHOKLEY">
                    <div className="stock-shares flex">
                        <div className="stock-shares-logo"></div>
                        <div className="stock-shares-name flex">Ashok Leyland</div>
                        <div className="stock-shares-val flex"><span style={{ color:`aqua` }}>INR</span>725.73</div>
                        <div className="stock-shares-change flex">+0.51%</div>
                    </div>
                    </Link>
                    <Link to="/home/TATASTEEL">
                    <div className="stock-shares flex">
                        <div className="stock-shares-logo"></div>
                        <div className="stock-shares-name flex">Tata Steel</div>
                        <div className="stock-shares-val flex"><span style={{ color:`aqua` }}>INR</span>1125.12</div>
                        <div className="stock-shares-change flex">+1.31%</div>
                    </div>
                    </Link>
                    <Link to="/home/CIPLA">
                    <div className="stock-shares flex">
                        <div className="stock-shares-logo"></div>
                        <div className="stock-shares-name flex">Cipla</div>
                        <div className="stock-shares-val flex"><span style={{ color:`aqua` }}>INR</span>621.10</div>
                        <div className="stock-shares-change flex">+2.01%</div>
                    </div>
                    </Link>
                    <Link to="/home/EICHERMOT">
                    <div className="stock-shares flex">
                        <div className="stock-shares-logo"></div>
                        <div className="stock-shares-name flex">Eicher Motors</div>
                        <div className="stock-shares-val flex"><span style={{ color:`aqua` }}>INR</span>312.65</div>
                        <div className="stock-shares-change flex">+0.98%</div>
                    </div>
                    </Link>

                    
                </div>
            </div>
            

        </div>
    </div>
    </>
  )
}

export default Home