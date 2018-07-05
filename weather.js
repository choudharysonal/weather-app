// Put your Last.fm API key here
/*var api_key = "";

function sendRequest () {
    var xhr = new XMLHttpRequest();
    var method = "artist.getinfo";
    var artist = encodeURI(document.getElementById("form-input").value);
    xhr.open("GET", "proxy.php?method="+method+"&artist="+artist+"&api_key="+api_key+"&format=json", true);
    xhr.setRequestHeader("Accept","application/json");
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var json = JSON.parse(this.responseText);
            var str = JSON.stringify(json,undefined,2);
            document.getElementById("output").innerHTML = "<pre>" + str + "</pre>";
        }
    };
    xhr.send(null);
}*/


var api_key = "98f453b22fb8e2d7cc313779de835b38";

function sendRequest ()
{
    var xhr = new XMLHttpRequest();
    var city = encodeURI(document.getElementById("form-input").value);
    xhr.open("GET", "proxy.php?q="+city+"&appid="+api_key+"&format=json", true);
    xhr.setRequestHeader("Accept","application/json");
    xhr.onreadystatechange = function () 
    {
        if (this.readyState == 4) 
        {
            var json = JSON.parse(this.responseText);
            console.log(json);
            var str = JSON.stringify(json,undefined,2);
            document.getElementById("cityname").innerHTML = "<pre>" + "<label>cityname            : </label> " + json.name + "</pre>";
            document.getElementById("latitude").innerHTML = "<pre>" + "<label>latitude            : </label> " + json.coord.lat + "</pre>";
            document.getElementById("longitude").innerHTML = "<pre>" + "<label>longitude           : </label> " +json.coord.lon + "</pre>";
            document.getElementById("pressure").innerHTML = "<pre>" + "<label>pressure            : </label> " +json.main.pressure + "hpa</pre>";
            document.getElementById("humidity").innerHTML = "<pre>" + "<label>humidity            : </label> " +json.main.humidity + "%</pre>";
            document.getElementById("temp").innerHTML = "<pre>" + "<label>temperature         : </label> " + json.main.temp + "K</pre>";
            document.getElementById("mintemp").innerHTML = "<pre>" +"<label>minimum temperature : </label> " + json.main.temp_min + "K</pre>";
            document.getElementById("maxtemp").innerHTML = "<pre>" + "<label>maximum temperature : </label> " + json.main.temp_max + "K</pre>";
            document.getElementById("clouds").innerHTML = "<pre>" + "<label>clouds              : </label> " +json.clouds.all + " %</pre>";
            var dt=new Date(json.sys.sunrise*1000);
            document.getElementById("sunrise").innerHTML = "<pre>" +"<label>time of sunrise     : </label> " + dt.getHours()+":"+dt.getMinutes() + "</pre>";
            dt=new Date(json.sys.sunset*1000);
            document.getElementById("sunset").innerHTML = "<pre>" +"<label>time of sunset      : </label> " + dt.getHours()+":"+dt.getMinutes() + "</pre>";

            if (json.clouds.all>50) 
            {
                json.visibility="low";
            }
            else
            {
                json.visibility="high";
            }
            document.getElementById("visibility").innerHTML = "<pre>" + "<label>visibility          : </label> " +json.visibility + "</pre>";

            var message = "";
            var weatherId = json.weather[0].id;
            
            if(weatherId>199 && weatherId<233)
            {
                message = "There will be a thunderstorm!";
            } 
            else
            if(weatherId>299 && weatherId<322)
            {
                message = "It will drizzle. Carry an umbrella.";
            } 
            else
            if(weatherId > 499 && weatherId < 532)
            {
                message = "It will Rain: Carry an umbrella";
            }  
            else
            if(weatherId > 599 && weatherId < 623)
            {
                message = "Carry a coat";
            } 
            else
            if(weatherId=800)
            {
                message = "Clear sky: carry shades and sunscreen.";
            } 
            else
            if(weatherId>800 && weatherId<805)
            {
                message = "IIt's a cloudy day.";
            } 
            else
            if(weatherId>899)
            {
                message = "Threatening weather condition";
            } 
            else 
            {
                message = "Have a good day!";
            }

            document.getElementById("message").innerHTML = "<pre>" + message + "</pre>";
        
        }
    }
    xhr.send(null);
}
