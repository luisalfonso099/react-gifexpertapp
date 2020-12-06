import React, {useState} from 'react';
import {AddCategory} from './components/AddCategory';
import {GifGrid} from './components/GifGrid';  


export const GifExpertApp = ()=> {
  
   
    const [categories, setcategories] = useState(['']);
    // const handelAdd = ()=>{
    //      setcategories([...categories, 'delfin'])
    // };
   return(
    <>
    <h1>GifExpertApp</h1>
    <AddCategory setcategories={setcategories}/>
    <hr/>
   
        <ol>
            {
                categories.map( category=>
                     <GifGrid
                     key={category}
                     category={category}/>   
                     )
            }
        </ol>
    
    
    
    
    </>
    );

};