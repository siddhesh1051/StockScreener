var open = [8.5,8.1,7.7,7.4,7.1,7.2,8.4,7.9,8.1,8.2,8.1,8.7,8.5,8.1,7.7,7.4,7.1,7.2,8.4,7.9,8.1,8.2,8.1,8.7,8.3,8.4,8.7,7.9,7.5,7.6,8.0,8.2,8.0,8.4,9.0,9.2,8.3,8.4,8.7,7.9,7.5,7.6,8.0,8.2,8.0,8.4,8.6,8.5];
var high = []
var low = []
var close = [8.3,8.4,8.7,7.9,7.5,7.6,8.0,8.2,8.0,8.4,9.0,9.2,8.3,8.4,8.7,7.9,7.5,7.6,8.0,8.2,8.0,8.4,8.6,8.5,8.5,8.1,7.7,7.4,7.1,7.2,8.4,7.9,8.1,8.2,8.1,8.7,8.5,8.1,7.7,7.4,7.1,7.2,8.4,7.9,8.1,8.2,8.1,8.7,];

for(var i=0; i< close.length;i++)
{
    high.push(10.0);
    low.push(7.0);
}


var max1 = (Math.ceil(Math.max(...close)))* (1.5);


var red = "#F23645";
var green = "#089981";
var lightbg = "#ffffff";
var bgcolor = "#fff";
var w1 = "0.5vw";
var w2 = "0.1vw";
var allmargin = "0.25vw";

var chartbox = document.getElementById('chartbox');

for(var i=0; i< close.length;i++)
{   
    if (open[i] < close[i])
    {
        
        var h1 = ((close[i] / max1)) * 80;
        var bar = document.createElement("div");
        bar.style.width = w1;
        bar.style.height = h1 + "vh";
        bar.style.background = "#00ff37";
        bar.style.display = "flex";
        bar.style.alignItems = "flex-end";
        bar.style.marginLeft = allmargin;



        var h3 = ((high[i] / max1)) * 80;
        var line = document.createElement("div");
        line.style.width = w2;
        line.style.height = h3 + "vh";
        line.style.background = "#00ff37";
        line.style.zIndex = "100";
        line.style.display = "flex";
        line.style.alignItems = "flex-end";
        

        var h4 = ((low[i] / max1)) * 80;
        var line2 = document.createElement("div");
        line2.style.width = w2;
        line2.style.height = h4 + "vh";
        line2.style.background = bgcolor;
        

        var h2 = ((open[i] / max1)) * 80;
        var bar2 = document.createElement("div");
        bar2.style.width = w1;
        bar2.style.height = h2 + "vh";
        bar2.style.background = bgcolor;

        bar2.style.display = "flex";
        bar2.style.alignItems = "flex-end";
        bar2.style.justifyContent = "center";
        
        line.appendChild(line2);
        bar2.appendChild(line);
        bar.appendChild(bar2);

        chartbox.appendChild(bar);

    }

    else
    {   

        var h2 = ((open[i] / max1)) * 80;
        var bar2 = document.createElement("div");
        bar2.style.width = w1;
        bar2.style.height = h2 + "vh";
        bar2.style.background = "#ff0000";
        bar2.style.display = "flex";
        bar2.style.alignItems = "flex-end";
        bar2.style.marginLeft = allmargin;


        var h3 = ((high[i] / max1)) * 80;
        var line = document.createElement("div");
        line.style.width = w2;
        line.style.height = h3 + "vh";
        line.style.background = "#ff0000";
        line.style.zIndex = "100";

        
        line.style.display = "flex";
        line.style.alignItems = "flex-end";

        var h4 = ((low[i] / max1)) * 80;
        var line2 = document.createElement("div");
        line2.style.width = w2;
        line2.style.height = h4 + "vh";
        line2.style.background = bgcolor;

        var h1 = ((close[i] / max1)) * 80;
        var bar = document.createElement("div");
        bar.style.width = w1;
        bar.style.height = h1 + "vh";
        
        bar.style.display = "flex";
        bar.style.alignItems = "flex-end";
        bar.style.justifyContent = "center";

        bar.style.background = bgcolor;
        line.appendChild(line2);
        bar.appendChild(line);
        bar2.appendChild(bar);
        chartbox.appendChild(bar2);



        
    }
    


}