import React from 'react'
import { useState, useEffect } from 'react';
import { getCategories } from '../../../api/categorie'
import { Categorie } from "../../../models/Categorie"

export const Filter = () => {

    const [categories, setCategories] = useState<Categorie[]>([])

    useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories();
        if (categoriesData != null && categoriesData.length > 0) {
          setCategories(categoriesData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);


    return (
        <div>
            {categories.map((category) => (
                <button key={category.id}>{category.name}</button>
            ))}
        </div>
    
    )
};  