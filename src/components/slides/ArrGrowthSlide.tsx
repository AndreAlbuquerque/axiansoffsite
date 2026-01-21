import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const data = [
  { year: 0, lovable: 0, cursor: 0, wiz: 0, openai: 0, slack: 0, twilio: 0, shopify: 0 },
  { year: 1, lovable: 100, cursor: 45, wiz: 35, openai: 28, slack: 22, twilio: 12, shopify: 8 },
  { year: 2, lovable: 100, cursor: 85, wiz: 65, openai: 52, slack: 42, twilio: 28, shopify: 20 },
  { year: 3, lovable: 100, cursor: 100, wiz: 88, openai: 72, slack: 60, twilio: 45, shopify: 35 },
  { year: 4, lovable: 100, cursor: 100, wiz: 100, openai: 88, slack: 78, twilio: 62, shopify: 52 },
  { year: 5, lovable: 100, cursor: 100, wiz: 100, openai: 100, slack: 92, twilio: 80, shopify: 72 },
  { year: 6, lovable: 100, cursor: 100, wiz: 100, openai: 100, slack: 100, twilio: 100, shopify: 100 },
];

const companies = [
  { key: "lovable", name: "Lovable", color: "#ffffff", highlight: true },
  { key: "cursor", name: "CURSOR", color: "#a1a1aa" },
  { key: "wiz", name: "WIZ", color: "#a1a1aa" },
  { key: "openai", name: "OpenAI", color: "#a1a1aa" },
  { key: "slack", name: "slack", color: "#a1a1aa" },
  { key: "twilio", name: "twilio", color: "#71717a" },
  { key: "shopify", name: "shopify", color: "#71717a" },
];

const formatYAxis = (value: number) => {
  if (value === 0) return "$0";
  return `$${value}M`;
};

const ArrGrowthSlide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-16">
      {/* Title */}
      <motion.h1 
        className="slide-heading-xl text-foreground mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        We're seeing the fastest $1M-$100M ever
      </motion.h1>

      {/* Company Legend */}
      <motion.div 
        className="flex flex-wrap items-center justify-center gap-6 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {companies.map((company, index) => (
          <div 
            key={company.key} 
            className={`flex items-center gap-2 ${
              company.highlight ? "text-foreground font-semibold" : "text-muted-foreground"
            }`}
          >
            {company.key === "lovable" && (
              <span className="text-red-500">❤️</span>
            )}
            <span className="text-sm tracking-wide uppercase">{company.name}</span>
          </div>
        ))}
      </motion.div>

      {/* Chart */}
      <motion.div 
        className="w-full max-w-4xl h-[400px]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <XAxis 
              dataKey="year" 
              axisLine={{ stroke: "hsl(220, 10%, 40%)" }}
              tickLine={false}
              tick={{ fill: "hsl(220, 10%, 60%)", fontSize: 14 }}
              tickFormatter={(value) => value.toString()}
            />
            <YAxis 
              axisLine={{ stroke: "hsl(220, 10%, 40%)" }}
              tickLine={false}
              tick={{ fill: "hsl(220, 10%, 60%)", fontSize: 14 }}
              tickFormatter={formatYAxis}
              ticks={[0, 25, 50, 75, 100]}
              domain={[0, 100]}
              label={{ 
                value: "$ ARR", 
                angle: -90, 
                position: "insideLeft",
                fill: "hsl(220, 10%, 60%)",
                fontSize: 12,
                offset: 10
              }}
            />
            {companies.map((company) => (
              <Line
                key={company.key}
                type="monotone"
                dataKey={company.key}
                stroke={company.color}
                strokeWidth={company.highlight ? 3 : 1.5}
                dot={false}
                activeDot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default ArrGrowthSlide;
