import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/common/Card";
import graphSavings from "../assests/graphSavings.webp";
import saveSmarter from "../assests/saveSmarterCard.webp";
import riskAssessment from "../assests/riskAssessmentCard.webp";

function LandingPage() {
  return (
    <section className=" bg-gradient-to-br  from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col  gap-7 p-6">
      <header className="flex justify-between items-center ">
        <div>My FinanceApp</div>
        <nav>
          <Link to="/login" className="text-lg hover:underline">
            Login
          </Link>
        </nav>
      </header>

      <div className="flex flex-col items-center justify-center flex-1 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to My FinanceApp
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Analyze your investments and savings easily and quickly with our
          financial tools.
        </p>
        <Link to="/Home">
          <button className="px-6 py-3 bg-blue-600 text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
            Join Us Now!
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3  mx-auto gap-8    max-w-7xl overflow-hidden ">
        <Card 
          image={saveSmarter}
          title="Save Smarter"
          description="Maximize your savings with personalized strategies that make your money work harder."
        />
        <Card 
          image={graphSavings}
          title="Graph Your Growth"
          description="Visualize your finances with intuitive graphs that reveal key trends and insights."
        />
        <Card 
          image={riskAssessment}
          title="Risk Asseasment"
          description= "Make confident financial decisions with our easy risk assessment tools tailored to your goals."
        />
          
      </div>
    </section>
  );
}

export default LandingPage;
