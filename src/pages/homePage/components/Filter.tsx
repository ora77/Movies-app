import React from 'react'
import { useState, useEffect } from 'react';
import { getCategories } from '../../../api/category'
import { Category } from "../../../models/category"

export const Filter = () => {

    const [categories, setCategories] = useState<Category[]>([]);

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
        <div className='Filter'>
            {categories.map((category) => (
                <button key={category.id}>{category.name}</button>
            ))}
        </div>
    
    )
};  