import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Bost from './../Bost/Bost'
import HomeTitle from '../HomeTitle/HomeTitle';
import { useNavigate } from 'react-router-dom';
import { showSomeBlog } from '../../redux/slice';
export default function RecentBlogBost() {
  const navigate = useNavigate()
  function handleNavigate(id) {
    navigate(`/datilsBlog/DatilBlogById/${id}`);  
  }
  const selectedBlogs = useSelector(state => state.blogs.selectedBlogs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showSomeBlog({ count: 4, removeKey: 'details', isFirst: false }));
    console.log(selectedBlogs);
    
  }, [dispatch]);
  return (
    <div className='pt-15 px-5 xl:px-28 font-inter'>
        <HomeTitle text='Recent blog posts'/>
          <div className="flex flex-wrap gap-y-8 justify-between items-start pb-7.5">
            {selectedBlogs.slice(0, 1).map((item, index) => {
              return (
                <div key={index} className={`flex flex-col items-start cursor-pointer w-full xl:w-[48%] xl:min-w-[500px]`} onClick={()=>handleNavigate(item.id)}>
                  <Bost
                    imge={item.imge}
                    title={item.title}
                    text={item.text}
                    par={item.par}
                    category={item.category}
                    classCol={true}
                    classimage={'min-w-[300px] h-[228px] w-full'}
                    classBost={'w-full'}
                  />
                </div>
              )
            })}
            <div className='flex flex-wrap items-start gap-8 w-full xl:w-[50%] xl:min-w-[500px]'>
              {selectedBlogs.slice(1, 3).map((item, index) => {
                return (
                  <div
                    onClick={()=>handleNavigate(item.id)}
                    key={index}
                    className={`flex flex-col md:flex-row items-start justify-between w-full cursor-pointer`}
                  >
                    <Bost
                      imge={item.imge}
                      title={item.title}
                      text={item.text}
                      par={item.par}
                      category={item.category}
                      classBost={'w-full max-w-[320px] md:max-w-full pt-6 md:pt-0 md:pl-6'}
                      classimage={'xl:w-[52%] xl:h-[200px]'}
                    />
                  </div>
                )
              })}
            </div>
          </div>

          {selectedBlogs.slice(3, 4).map((item, index) => {
            return (
              <div
                 onClick={()=>handleNavigate(item.id)}
                 key={index}
                 className={`flex flex-wrap items-start justify-start cursor-pointer gap-8 pt-7.5`}>
                <Bost
                  imge={item.imge}
                  title={item.title}
                  text={item.text}
                  par={item.par}
                  category={item.category}
                  classBost={'w-full xl:w-[48%] xl:min-w-[500px]'}
                  classText={true}
                  classimage={'w-full xl:w-[48%] xl:min-w-[500px] h-[200px] md:h-[228px] lg:h-[246px]'}
                />
              </div>
            )
          })}
    </div>
  )
}

