import React, {useState, useEffect} from 'react';
import axios from 'axios';

const apiKey = 'Ep5ggXB4GonszmhySyv60z10OOKf4AGb';
const baseUrl = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key='

function News() {
    const [newsData, setNewsData] = useState(null);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try {
            const {data} = await getNews(apiKey);
            setNewsData(data);
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
    const Interval = setInterval( ()=>{getData()}, 43200000); 
    
    useEffect(() => {
        return() => {
            clearInterval(Interval); 
        }
    }, [Interval]);

    var styles = {
        text: {
            display: "flex",
            flexWrap: "wrap",
            fontSize: "30px",
            justifyContent: "center",
            allignSelf: "flex-end"            
        },
        news: {
            fontSize: "25px",
            justifyContent: "center",
            textAlign: "center"

            },
      }
    var array = [] 

      for (let i = 0; i < 5; i++) {
          array.push(<div>{newsData?.results[i]?.title}</div>)
      }
   

    return  <div> 
                <div style={styles.text}>
                    {"Daily News: "}
                </div>
                <div style={styles.news}>
                    {loading && array}
                </div>
            </div>
    
}
export const getNews = async (apiKey) => {
    try {
        const data = await axios.get(baseUrl + apiKey);
        return data;
    } catch(error) {
        throw error;
    }
}

export default News;
