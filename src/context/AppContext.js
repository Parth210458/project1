import { createContext, useState } from "react";
import api_key from '../assets/urls';

import { toast, ToastContainer } from 'react-toastify';
export const AppContext = createContext();
/*
const api_key='2708a68dac6ce0de710228bab1a799e1';
const url=(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&primary_release_year=2017&sort_by=revenue.desc`)

async function get_data(movie='Jack Reacher'){
  const url2=`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=2708a68dac6ce0de710228bab1a799e1`

    const result = await fetch(url2);
    let data=await result.json();
    data=data.results[0];
    const {id, title, popularity, release_date, vote_average, vote_count} = await data;
    console.log(title)    
}
get_data('batman');*/

 export default function AppContextProvider({children}){

    const [loading,setLoading] = useState(false);
    const [id,setId] = useState('');
    const [title, setTitle] = useState('');
    const [popularity,setPopularity] = useState(0);
    const [revenue,setRevenue] =useState('');
    const [voteAverage,setVoteAverage] = useState('');
    const [voteCount, setVoteCount]=useState(0);
    const [guest,setGuest] = useState('');
    const [users,setUsers]=useState('')


   

    async function getData(movie='Jack Reacher'){
        setLoading(true);
        const url=`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${api_key}`
                console.log(url);
        try{
            const result = await fetch(url);
            let data=await result.json();
            data=await data.results[0];
            const {id, title, popularity, vote_average, vote_count} = await data;
            
            const url2= `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`;
            var movie_data = await fetch(url2);
            movie_data= await movie_data.json();
            console.log(movie_data)
            const {revenue} = await movie_data;
            
            
        
            setId(id);
            setTitle(title);
            setPopularity(popularity);
            setRevenue(revenue);
            setVoteAverage(vote_average);
            setVoteCount(vote_count);
            
           

        }

        catch(e){
            setId(id);
            setTitle(title);
            setPopularity(popularity);
            setRevenue(revenue);
            //setVoteAverage(vote_average);
            toast.error("Success Notification !", {
                position: toast.POSITION.TOP_CENTER
              });
            
            
        }
        setLoading(false);
         
    }



    const values={
        loading,setLoading,
        id,setId,
        title, setTitle,
        popularity,setPopularity,
        revenue,setRevenue,
        voteAverage,setVoteAverage,
        voteCount, setVoteCount,
        getData,guest,setGuest,
        users,setUsers
    }
    return<AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>
}
