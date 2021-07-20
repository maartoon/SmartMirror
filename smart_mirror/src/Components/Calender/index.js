import React, {useState, useEffect} from 'react';
import axios from 'axios';

const apiKey = 'AIzaSyAMEy-qNioVflAiCWEISncW-avOBPsl2MQ';
const baseUrl = 'https://www.googleapis.com/calendar/v3/calendars/';
const email = 'martinxu1234@gmail.com';

const ISODateString =(d=new Date())=>{
    const pad=n=> (n<10 ? '0'+n : n);

    return (d.getUTCFullYear()+'-'
         + pad(d.getUTCMonth()+1)+'-'
         + pad(d.getUTCDate())+'T'
         + pad(d.getUTCHours())+':'
         + pad(d.getUTCMinutes())+':'
         + pad(d.getUTCSeconds())+'Z')
}
function Calender() {

    const [calenderData, setCalenderData] = useState(null);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try {
            const {data} = await getCalender(ISODateString(), apiKey);
            setCalenderData(data);
            setLoading(true);
            console.log(data);
        }catch(error) {
            console.log(error.message);
            setLoading(false);
        }
    }
    useEffect(() => {
        getData();
    }, []);

    const Interval = setInterval( ()=>{getData()}, 3600000); 
    
    useEffect(() => {
        return() => {
            clearInterval(Interval); 
        }
    }, [Interval]);

    var styles = {
        todo: {
            fontSize: "25px",
            allignContent: "flex-end"
            },
            text: {
                display: "flex",
                flexWrap: "wrap",
                fontSize: "30px",
            },
      }
      var array = [] 

      for (let i = 0; i < calenderData?.items?.length; i++) {
          array.push(<div>{i+1 + ". " + calenderData?.items[i]?.summary}</div>)
      }
    return  <div>
            <div style={styles.text}>
                {"To-Do List: "}
            </div>
            <div style={styles.todo}> 
                {array}
                </div>
            </div>
}

export const getCalender = async (ISODateString, apiKey) => {
    try {
        const data = await axios.get(baseUrl + `martinxu1234@gmail.com/events?orderBy=startTime&singleEvents=true&timeMin=${ISODateString}&key=${apiKey}&maxResults=5`);
        return data;
    } catch(error) {
        throw error;
    }
}
export default Calender;
