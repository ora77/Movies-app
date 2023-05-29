import React from 'react'

interface MovieProps{
   id: number
   src: string
   title: string
}

export const Card = ({ id, src, title }: MovieProps) => {
         return(
           <div>
               <div>{id}</div>
               <img className="image" src={`https://image.tmdb.org/t/p/w500${src}`}></img>
               <div>{title}</div>
            </div>
         )
       };