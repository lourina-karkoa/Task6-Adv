import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { show, showSuggestions } from '../../redux/slice';
import Bost from '../Bost/Bost';
import HomeTitle from '../HomeTitle/HomeTitle';
import { useNavigate } from 'react-router-dom';

export default function SuggestedBosts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const idToBost = useSelector((state) => state.blogs.idBost);
  const suggestionArticle = useSelector((state) => state.blogs.suggestionsArticle);
  useEffect(()=>{
    dispatch(showSuggestions(idToBost))
  },[dispatch, idToBost])
  function handleNavigate(id) {
    dispatch(show(id))
    navigate(`/datilsBlog/DatilBlogById/${id}`);  
  }
  return (
    <div className='pb-8 lg:pb-0 order-2 md:order-1 md:w-[43%] xl:w-[29%]'>
      <HomeTitle text="Recent blog posts" />
      <div className='flex flex-col gap-8'>
      {suggestionArticle.map((item,index)=>{
      return(
        <div
        className='cursor-pointer'
        onClick={()=>handleNavigate(item.id)}
         key={index}>
          <Bost
              imge={item.imge}
              title={item.title}
              text={item.text}
              par={item.par}
              category={item.category}
              classCol={true}
              classimage={"w-full"}
            />
        </div>
      )
     })}
      </div>
    </div>
  )
}
