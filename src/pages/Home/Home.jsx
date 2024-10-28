import AllBlogBost from "../../components/AllBlogBost/AllBlogBost";
import Hero from "../../components/Hero/Hero";
import RecentBlogBost from "../../components/RecentBlogBost/RecentBlogBost";

export default function Home() {
  

  return (
    <div className="lk-home">
        <Hero />
        <RecentBlogBost/>
        <AllBlogBost/>
    </div>

  );
}

