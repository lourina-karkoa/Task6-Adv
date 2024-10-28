import React, { useEffect, useState } from "react";
import HomeTitle from "../HomeTitle/HomeTitle";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticlesByPage} from "../../redux/slice";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import Bost from "../Bost/Bost";
import { useNavigate } from "react-router-dom";

export default function AllBlogBost() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(20 / 6);
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);
  useEffect(() => {
    dispatch(fetchArticlesByPage(currentPage));
  }, [dispatch, currentPage]);

  useEffect(() => {
    let tempNumberOfPages = [];
    let dots = "...";

    if (totalPages <= 3) {
      tempNumberOfPages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else if (currentPage < 3) {
      tempNumberOfPages = [1, 2, dots, totalPages];
    } else if (currentPage === 3) {
      tempNumberOfPages = [1, 2, 3, dots, totalPages];
    } else if (currentPage > 3 && currentPage < totalPages - 1) {
      tempNumberOfPages = [
        1,
        dots,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        dots,
        totalPages,
      ];
    } else {
      tempNumberOfPages = [1, dots, totalPages - 1, totalPages];
    }

    setArrOfCurrButtons(tempNumberOfPages);
  }, [currentPage, totalPages]);

  const handlePageChange = (pageNumber) => {
    if (typeof pageNumber === "number") {
      setCurrentPage(pageNumber);
      dispatch(fetchArticlesByPage(pageNumber));
    }
  };

  const articles = useSelector((state) => state.blogs.currentArticles);
  useEffect(()=>{
    console.log(articles);
    
  })
  function handleNavigate(id) {
    navigate(`/datilsBlog/DatilBlogById/${id}`);   
  }
  return (
    <div className="px-5 xl:px-28 pb-5 md:pb-7.5 font-inter pt-7.5">
      <HomeTitle text="All blog posts"/>

      <div className="flex justify-center gap-x-8 gap-y-12 2xl:gap-x-[5%] items-start md:justify-between  md:gap-x-0 flex-wrap pb-7.5 border-solid border-b">
        {articles.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start min-w-[300px] w-[31.6%] cursor-pointer md:max-w-96"
            onClick={() => handleNavigate(item.id)}
          >
            <Bost
              imge={item.imge}
              title={item.title}
              text={item.text}
              par={item.par}
              category={item.category}
              classCol={true}
              classimage={"xl:h-[240px]"}
              classBost={"w-full max-w-96"}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-y-5 pt-5 text-neutral-450 dark:text-white">
        <button
          className="flex justify-between gap-2 items-center "
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <GrLinkPrevious />
          Previous
        </button>
        <div>
          {arrOfCurrButtons.map((item, index) => (
            <button
              className={`w-10 h-10 rounded-lg ${
                currentPage === item
                  ? "bg-btn-barbr text-[#7F56D9] dark:text-[#112211]"
                  : ""
              }`}
              key={index}
              disabled={currentPage === item}
              onClick={() => handlePageChange(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          className="flex justify-between items-center gap-2"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
          <GrLinkNext />
        </button>
      </div>
    </div>
  );
}
