import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
  const data = useLoaderData();

  // const [data, setData] = useState({});
  // useEffect(() => {
  //   fetch('https://api.github.com/users/arafatDU')
  //     .then(response => response.json())
  //     .then(setData)
  // }, []);

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github;


export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/arafatDU');
  return await response.json();
}
