import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { show } from "../../redux/slice";
import Pargraph from "../Pargraoh/Pargraph";
import PargraphSpan from "../PargraphSpan/PargraphSpan";
import BostImage from "../BostImage/BostImage";
import BostHeader from "../BostHeader/BostHeader";
import BostTitle from "../BostTitle/BostTitle";
import BostButton from "../BostButton/BostButton";
import Email from "../Email/Email";

export default function DatilBlogById() {
  const params = useParams();
  const dispatch = useDispatch();
  const customBlog = useSelector((state) => state.blogs.customsBlog);
  useEffect(() => {
    dispatch(show(params.id));
  }, [dispatch]);
  return (
    <div className="order-1 md:order-2 w-full md:min-w-[380px] md:w-[52%] lg:w-[54%] xl:w-[65%]">
      <div className="pb-8">
        {customBlog.map((item,index) => {
          return (
            <div key={index}>
              <BostTitle title={item.title} />
              <BostHeader someUpdate={true} text={item.text} />
              <BostImage srcing={item.imge} />
              <Pargraph par={item.par} />
              <Pargraph par={item.details[0].textTwo} />
              <Pargraph
                center={true}
                centerBold={true}
                par={item.details[0].titleTwo}
              />
              <BostImage srcing={item.details[0].imgTwo} />
              <Pargraph center={true} par={item.details[0].titleThree} />
              <div>
                {item.details[0].discription.map((i) => {
                  return <Pargraph key={i.id} par={i.discriptionONe} />;
                })}
              </div>
              <Pargraph centerBold={true} par={item.details[0].titleFour} />
              <Pargraph par={item.details[0].discriptionFour} />
              <div>
                {item.details[0].discriptionUl.map((i) => {
                  return (
                    <div key={i.id} className="flex justify-start items-start">
                      <PargraphSpan
                        title={i.titleUl}
                        text={i.discriptionFourUl}
                      />
                    </div>
                  );
                })}
              </div>
              <BostImage srcing={item.details[0].imgThree} />
              <Pargraph center={true} par={item.details[0].titleFourT} />
              <Pargraph centerBold={true} par={item.details[0].titleFive} />
              {item.details[0].cardOne.map((i) => {
                return (
                  <div key={i.id}>
                    <Pargraph
                      centerBold={true}
                      classText="text-lg"
                      par={i.titleSix}
                    />
                    <Pargraph par={i.textThree} />
                    <BostImage srcing={i.imgFour} />
                    <Pargraph center={true} par={i.textFour} />
                  </div>
                );
              })}
              <Pargraph par={item.details[0].textFive} />
              <Pargraph
                centerBold={true}
                classText="text-lg"
                par={item.details[0].titleSeven}
              />
              <Pargraph par={item.details[0].textSeven} />
              {item.details[0].cardThree.map((i) => {
                return (
                  <PargraphSpan
                    key={i.id}
                    title={i.titleEight}
                    text={i.textEight}
                  />
                );
              })}
              <BostImage srcing={item.details[0].imgNine} />
              <Pargraph center={true} par={item.details[0].pargraph} />
              <PargraphSpan
                title={item.details[0].pargraphSpan}
                text={item.details[0].pargraphTwo}
              />
              <BostImage srcing={item.details[0].imgTen} />
              <Pargraph center={true} par={item.details[0].pargraphThree} />
              <PargraphSpan
                title={item.details[0].pargraphFourSpan}
                text={item.details[0].pargraphFour}
              />
              <Pargraph centerBold={true} par={item.details[0].titleNine} />
              <Pargraph par={item.details[0].pargraphFive} />
              <BostButton category={item.category} />
            </div>
          );
        })}
      </div>
      <div className="hidden xl:block">
      <Email/>
      </div>
    </div>
  );
}
