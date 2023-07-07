import axios from "axios";

const BASE_URL="https://youtube138.p.rapidapi.com"

const options = {

    params: { hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': 'ec52588a4fmsh58bdc25a6a8134fp1e2224jsn6c9ef20d9c6c',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
  
  export const fetchDataFromApi=async(url)=>{
    const { data } = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
  }