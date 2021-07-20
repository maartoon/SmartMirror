import React from 'react';
import DateTime from '../DateTime'
import Weather from '../Weather';
import Calender from '../Calender';
import News from '../News'


var stylingObject = {
    weather_and_time: {
        display: "flex", 
        justifyContent: "space-between"
        },
    todo_and_news: {
        display: "flex",
        justifyContent: "space-between"
    },
    both: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "98vh",
        fontFamily: "Quicksand, Bold"
    }
  }
  

const MainPage = ()=> {

    return(
            <div style={stylingObject.both}>
            <div style={stylingObject.weather_and_time}>
                <div>
                    <Weather />
                    </div>
                    <div>
                        <DateTime />
                    </div>
                </div>

            <div style={stylingObject.todo_and_news}>              
                <Calender />
                <News />
            </div>
            </div>
    ); 
}

export default MainPage;