import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import openai from '../utils/openiAI';

const GptSearchBar = () => {
  const language = useSelector(store => store.config.lang);
  const searchText = useRef(null);

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
    const gptMovies = gptResults.choices?.[0]?.message?.content;
  }

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} type='text' placeholder={lang[language].gptSearchPlaceholder} className='p-4 m-4 col-span-9'/>
        <button className='py-2 px-4 m-4 bg-red-700 text-white rounded col-span-3' onClick={handleGptSearchClick}>{lang[language].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar