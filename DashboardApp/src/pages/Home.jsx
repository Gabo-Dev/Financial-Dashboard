import React from "react";
import Header from "../components/common/Header";
import { motion } from "framer-motion";
import CurrenciesOverviewChart from "../components/overview/CurrenciesOverviewChart";
import newTemplate from "../assests/newTemplate.jpg";
import { useGetNewsQuery } from "../redux/services/ApiCore";

function Home() {
  const { data: news, isLoading } = useGetNewsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const hottestNews = news && news.body.slice(0, 4);

  return (
    <div className="bg-gray-800y-">
      <Header title="Home" description="Welcome to your dashboard" />
      <main className="max-w-7xl mx-auto p-3  lg:px-8 ">
        <h3 className="text-2xl font-semibold text-gray-300 tracking-wide  pb-2 ">
          News
        </h3>
        <div className="grid p-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-2">
          {hottestNews &&
            hottestNews.map((item, index) => (
              <motion.div
                key={index}
                className="max-w-sm bg-green-400 border border-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-200 transform hover:scale-105"
                whileHover={{ zIndex: 4 , scale: 1.1 }}
                transition={{ duration: 0.1 }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-28 object-cover transition-transform duration-200 transform hover:scale-110"
                />
                <h2 className="font-medium text-sm text-white p-2  leading-tight ">
                  {item.title}
                </h2>
              </motion.div>
            ))}
        </div>
        <h3 className="text-2xl font-semibold text-gray-300 tracking-wide  pb-2 ">
          Charts
        </h3>
        <CurrenciesOverviewChart />
      </main>
    </div>
  );
}

export default Home;
