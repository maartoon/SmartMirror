import React, {useState,useEffect} from 'react'; 
const DateTime = ()=> {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const hours = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const minutes = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];
    const seconds = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];
    const [currentMonth, setCurrentMonth] = useState((new Date()).getMonth()); 
    const [currentDay, setCurrentDay] = useState((new Date()).getDate());
    const [currentDayOfWeek, setCurrentDayOfWeek] = useState((new Date()).getDay());
    
    const monthInterval = setInterval( ()=>setCurrentMonth((new Date()).getMonth()),1000); 
    const dayInterval = setInterval( ()=>setCurrentDay((new Date()).getDate()),1000); 
    const dayOfWeekInterval = setInterval( ()=>setCurrentDayOfWeek((new Date()).getDay()),1000); 
    
    const [currentHour, setCurrentHour] = useState((new Date()).getHours()); 
    const [currentMinute, setCurrentMinute] = useState((new Date()).getMinutes());
    const [currentSecond, setCurrentSecond] = useState((new Date()).getSeconds());

    const hourInterval = setInterval( ()=>setCurrentHour((new Date()).getHours()),10000); 
    const minuteInterval = setInterval( ()=>setCurrentMinute((new Date()).getMinutes()),1000); 
    const secondInterval = setInterval( ()=>setCurrentSecond((new Date()).getSeconds()),1000); 
    useEffect(()=>{
        return ()=>{
            clearInterval(monthInterval); 
            clearInterval(dayInterval); 
            clearInterval(dayOfWeekInterval); 

            clearInterval(hourInterval); 
            clearInterval(minuteInterval); 
            clearInterval(secondInterval); 

        }
    },[dayInterval, hourInterval, minuteInterval, monthInterval, secondInterval, dayOfWeekInterval]); 
    let period = ""; 
    if (currentHour >= 12) {
        period = "PM";
    } else {
        period = "AM";
    }
    var style = {
        time: {
            display: "flex",
            flexWrap: "wrap",
            fontSize: "45px",
            justifyContent: "flex-end",
            allignSelf: "flex-end"
            },
        date: {
            fontSize: "40px"
        }
    }
    const currentTime = hours[currentHour] + ":" + minutes[currentMinute] + ":" + seconds[currentSecond] + period

    const currentDate = months[currentMonth] + " " + currentDay + ", " + dayOfWeek[currentDayOfWeek];
    return <div>
        <div style={style.time}>
            {currentTime}
            </div>

        <div style={style.date}> 
            {currentDate}
            </div>
    </div>
    
}

   
export default DateTime