import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import { useGetCurrenciesQuery } from "../../redux/services/ApiCore";
function SalesOverviewChart() {
  const { data, isLoading } = useGetCurrenciesQuery();
  // Uso de useMemo para evitar que la transformación de datos se repita en cada render
  const chartData = useMemo(() => {
    if (data?.body) {
      return Object.entries(data.body).map(([key, value]) => ({
        date: value.date, // Usar la fecha como eje X
        open: value.open, // El valor de apertura como la línea en el gráfico
      }));
    }
    return [];
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-3 border border-gray-700 relative "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
    
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 5, right: 20 }}>
            <CartesianGrid stroke="#6366f1" strokeDasharray="4" horizontal={false}  vertical={false}/>
            <XAxis dataKey="date" tickMargin={10} padding={{ left: 10, right: 10 }}  />
            <YAxis tickMargin={10} padding={{ top: 10, bottom: 10 }}   domain={["auto", "auto"]}/>
            <Tooltip viewBox={{ x: 0, y: 0, width: 200, height: 50 }} contentStyle={{color: "orange"}}/>
            <Line type="monotone" dataKey="open" stroke="#8884d8"  dot={{r: 4}}  activeDot={{ stroke: 'red', strokeWidth: 2, r: 10 }}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default SalesOverviewChart;
