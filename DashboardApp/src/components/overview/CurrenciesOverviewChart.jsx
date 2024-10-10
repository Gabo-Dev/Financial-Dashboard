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
import { color, motion } from "framer-motion";
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
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Real Time Currency Converter
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid stroke="#6366f1" strokeDasharray="4" horizontal={false}  vertical={false}/>
            <XAxis dataKey="date"  />
            <YAxis   domain={["auto", "auto"]}/>
            <Tooltip viewBox={{ x: 0, y: 0, width: 200, height: 50 }} contentStyle={{color: "orange"}}/>
            <Line type="monotone" dataKey="open" stroke="#8884d8"  dot={{r: 6}}  activeDot={{ stroke: 'red', strokeWidth: 2, r: 10 }}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default SalesOverviewChart;
