// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
// import list from '../../public/list.json'
import axios from 'axios'
import Cards from './Cards'

const Course = () => {
  const[book,setBook] = useState([])

  useEffect(()=>{
    async function getBook(){
       try {
   const res =  await axios.get("http://localhost:4001/book");
   console.log(res.data);
   setBook(res.data);
       } catch (error) { 
        console.log(error);
       }
      }
      getBook();
  },[])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='pt-32 item-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>We're delighted to have you{" "}
        <span className='text-pink-500'> Here! :)</span></h1>
        <p className='mt-12'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, deleniti quod? Impedit maxime aliquam culpa sit molestiae tempora et, ut magni pariatur rerum quidem sequi molestias omnis aut placeat recusandae? Facilis quas ipsa quam velit exercitationem a modi inventore officia Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quibusdam.
        </p>
        <button className='px-4 py-1 bg-pink-500 text-white rounded-md hover:bg-pink-700 duration-300 mt-6'><a href='/'>Back</a></button>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          book.map((item)=>
          (<Cards key={item.id} item={item}></Cards>)
        )
        }
      </div>
    </div>
    </>
  )
}

export default Course