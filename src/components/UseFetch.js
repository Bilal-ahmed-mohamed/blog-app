import {useState , useEffect} from 'react';
let UseFetch = (url) => {

    const [data , setData] = useState(null);
    const [isLoading , setLoading] = useState(true);
    const [error , setError] = useState(null);

    useEffect(() => {


      const abortCont = new AbortController();
        setTimeout(() => {
          fetch(url , {signal : abortCont.signal} )
          .then((res) => {
            if(!res.ok){
               throw Error('could not fetch the data');
            }
            return res.json();
          } )
          .then( data => {
           
              setData(data);
              setLoading(false);
              setError(null);
          })
          .catch(err => {
            if(err.name === 'AbortError'){
              
            }else{
              setLoading(false);
              setError(err.message);
            }
           
          })
        }, 2000 )

        return () => abortCont.abort();
      },  [url] )
    
      return {data, isLoading , error}
}

export default UseFetch;