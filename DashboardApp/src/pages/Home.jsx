import React from 'react'
import Header from '../components/common/Header'
import Stats from '../components/common/Stats'
import { motion } from 'framer-motion'
import { BarChart2, Users, Zap, ShoppingBag } from 'lucide-react'
import CurrenciesOverviewChart from '../components/overview/CurrenciesOverviewChart'

function Home() {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Home"/>
      <main className='max-w-7xl mx-auto p-6 px-4 lg:px-8'>
        <motion.div
          className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Stats name="Total Sales" icon={Zap} value="$100,000" color="#6366f1" />
          <Stats name="New Users" icon={Users} value="1,000" color="#8B5CF6" />
          <Stats name="Total Products" icon={ShoppingBag} value="537" color="#EC4899" />
          <Stats name="Conversion Rate" icon={BarChart2} value="10%" color="#10B981" />
        </motion.div>

        <div className='grid grid-cols-1 lg-grid-cols-2 gap-8'>
          <CurrenciesOverviewChart /> 
          
        </div>
      </main>
    </div>
  )
}

export default Home