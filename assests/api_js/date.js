function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var y = date.getFullYear(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ' : ' + m + ' ' + session;
    document.getElementById("time").innerHTML = time;
    
    setTimeout(showTime, 1000);
    
    switch (date.getDay()) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }
    switch(date.getMonth()){
    case 0: b = "Jan";
        break;
    case 1: b = "Feb";
        break;
    case 2: b = "Mar";
        break;
    case 3: b = "Apr";
        break;
    case 4: b = "May";
        break;
    case 5: b = "Jun"; 
        break;
    case 6: b = "Jul";
        break;
    case 7: b = "Aug";
        break;
    case 8: b = "Sep";
        break;
    case 9: b = "Oct";
        break;
    case 10: b = "Nov";
        break;
    case 11: b = "Dec";
        break;
    }
    document.getElementById('date').innerHTML = day + " , " + b + " " +date.getDate()+' '+y;
}

showTime();