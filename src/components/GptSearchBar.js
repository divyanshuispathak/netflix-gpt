import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openiAI';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const language = useSelector(store => store.config.lang);
  const searchText = useRef(null);

  // Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS)
    const json = await data.json();
    return json.results;
  }

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query" + searchText.current.value + ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Sholay, Don, Pushpa, Golmal, Koi mil gya"; 

    // Make an api call to GPT api and get movie results
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-4o',
    });

    if(!gptResults.choices) // Write error handling here
    {

    }
    console.log(gptResults.choices?.[0]?.message?.content);
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbresults = Promise.all(promiseArray);
    dispatch(addGptMovieResult({movieNames:gptMovies ,movieResults:tmdbresults}));
  }

  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
      <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} type='text' placeholder={lang[language].gptSearchPlaceholder} className='p-4 m-4 col-span-9'/>
        <button className='py-2 px-4 m-4 bg-red-700 text-white rounded col-span-3' onClick={handleGptSearchClick}>{lang[language].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar