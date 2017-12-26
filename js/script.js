var httpRequest;

function fetchCurrentWeather() {
    var input = document.getElementById("myInput");
    //Example of API call:
    // api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1111111111
    //API Key - 555ff7a9c408e6d2f4239db770c6107a
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=';
    url = url + input.value + '&APPID=555ff7a9c408e6d2f4239db770c6107a';
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', url, true);
    httpRequest.send();
}

function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE || httpRequest.status === 200) {
            var response = httpRequest.responseText;
            var responseObj = JSON.parse(response);
             var weatherBot = document.getElementById("weatherBot");
             var rowCount = weatherBot.rows.length;
             for (var i = rowCount - 1; i > 0; i--) {
                 weatherBot.deleteRow(i);
             }
            
            // Create an empty <tr> element and add it to the 1st position of the table:
            var tbody = document.getElementById("tableBody");
            var row = tbody.insertRow(0);

            // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);

            // Add some text to the new cells:
            cell1.innerHTML = responseObj.name;
            cell2.innerHTML = responseObj.main.temp;
            cell3.innerHTML = responseObj.main.humidity;
            cell4.innerHTML = responseObj.wind.speed;
            cell5.innerHTML = responseObj.weather[0].main;
            cell6.innerHTML = responseObj.weather[0].description;
            cell7.innerHTML = responseObj.coord.lon + " " + responseObj.coord.lat;
            //alert(responseObj);
    } else {
        // There was a problem with the request.
        // For example, the response may have a 404 (Not Found)
        // or 500 (Internal Server Error) response code.
         // Not ready yet.
    }
}
