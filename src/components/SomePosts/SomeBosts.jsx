import React, { useEffect } from 'react'
import Bost from '../Bost/Bost';
import { useDispatch, useSelector } from 'react-redux';
import HomeTitle from '../HomeTitle/HomeTitle';
import { showSomeBlog } from '../../redux/slice';
import { useNavigate } from 'react-router-dom';
export default function SomeBosts() {
  const navigate = useNavigate();
  const selectedBlogs = useSelector(state => state.blogs.selectedBlogs);
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(showSomeBlog({ count: 3, removeKey: 'details', isFirst: true }));
    }, [dispatch]);
    function handleNavigate(id) {
      navigate(`/datilsBlog/DatilBlogById/${id}`);

    }
    
  return (
   <div className='pt-7.5'>
    <HomeTitle text="All blog posts" />
    <div className='flex justify-between flex-wrap gap-y-6'>{selectedBlogs.map((item,index)=>{
        const isLastItem = index === selectedBlogs.length - 1;
        return(
           <div 
           onClick={()=>handleNavigate(item.id)}
           key={index} className={`${isLastItem  ? 'lg:w-[32%] lg:min-w-[300px]' : 'md:w-[32%] md:min-w-[350px] lg:min-w-[300px]'} cursor-pointer w-full xl:max-w-96`}>
            <Bost
            imge={item.imge}
            title={item.title}
            text={item.text}
            par={item.par}
            category={item.category}
            classCol={true}
            classimage={isLastItem ? "w-full h-[200px] sm:h-60 xl:h-[200px] xl:h-auto" : "w-full h-60 xl:h-auto"}
          />
           </div>
        )
    })}</div>
   </div>
  )
}
//