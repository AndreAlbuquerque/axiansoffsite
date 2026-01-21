import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from "recharts";
import { motion } from "framer-motion";

const data = [
  { year: 0, aiNative: 100, canva: 100, zoom: 100, twilio: 100, dropbox: 100, shopify: 100, workday: 100, servicenow: 100, okta: 100, salesforce: 100, hubspot: 100, zendesk: 100, veeva: 100 },
  { year: 1, aiNative: 350, canva: 180, zoom: 200, twilio: 220, dropbox: 210, shopify: 170, workday: 160, servicenow: 175, okta: 190, salesforce: 185, hubspot: 150, zendesk: 145, veeva: 140 },
  { year: 1.5, aiNative: 600, canva: 250, zoom: 280, twilio: 300, dropbox: 290, shopify: 230, workday: 220, servicenow: 240, okta: 260, salesforce: 255, hubspot: 200, zendesk: 195, veeva: 185 },
  { year: 2, aiNative: 850, canva: 340, zoom: 380, twilio: 400, dropbox: 380, shopify: 300, workday: 290, servicenow: 320, okta: 350, salesforce: 340, hubspot: 260, zendesk: 250, veeva: 240 },
  { year: 3, aiNative: 1000, canva: 520, zoom: 580, twilio: 600, dropbox: 560, shopify: 450, workday: 420, servicenow: 480, okta: 520, salesforce: 500, hubspot: 380, zendesk: 360, veeva: 340 },
  { year: 4, aiNative: 1000, canva: 720, zoom: 780, twilio: 800, dropbox: 750, shopify: 620, workday: 580, servicenow: 660, okta: 700, salesforce: 680, hubspot: 520, zendesk: 490, veeva: 460 },
  { year: 5, aiNative: 1000, canva: 900, zoom: 920, twilio: 940, dropbox: 900, shopify: 800, workday: 760, servicenow: 840, okta: 880, salesforce: 860, hubspot: 680, zendesk: 640, veeva: 600 },
  { year: 6, aiNative: 1000, canva: 1000, zoom: 1000, twilio: 1000, dropbox: 1000, shopify: 950, workday: 920, servicenow: 980, okta: 1000, salesforce: 1000, hubspot: 850, zendesk: 800, veeva: 760 },
  { year: 7, aiNative: 1000, canva: 1000, zoom: 1000, twilio: 1000, dropbox: 1000, shopify: 1000, workday: 1000, servicenow: 1000, okta: 1000, salesforce: 1000, hubspot: 1000, zendesk: 1000, veeva: 1000 },
];

const companies = [
  { key: "aiNative", name: "AI NATIVE", color: "#1a1a1a", strokeWidth: 3, dashed: true },
  { key: "twilio", name: "Twilio", color: "#f22f46" },
  { key: "dropbox", name: "Dropbox", color: "#0061fe" },
  { key: "zoom", name: "Zoom", color: "#2d8cff" },
  { key: "shopify", name: "Shopify", color: "#96bf48" },
  { key: "okta", name: "Okta", color: "#007dc1" },
  { key: "canva", name: "Canva", color: "#00c4cc" },
  { key: "workday", name: "Workday", color: "#ff6900" },
  { key: "servicenow", name: "ServiceNow", color: "#62d84e" },
  { key: "salesforce", name: "Salesforce", color: "#00a1e0" },
  { key: "hubspot", name: "HubSpot", color: "#ff7a59" },
  { key: "zendesk", name: "Zendesk", color: "#03363d" },
  { key: "veeva", name: "Veeva", color: "#ff6b00" },
];

const formatYAxis = (value: number) => {
  if (value >= 1000) return "$1,000M";
  return `$${value}M`;
};

const AiNativeSlide = () => {
  return (
    <div 
      className="w-full h-full flex flex-col p-12"
      style={{ backgroundColor: "#c5d5cb" }}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          AI Native companies accelerate path to $1 billion by 50%
        </motion.h1>
        
        <motion.span 
          className="text-sm font-medium text-gray-600 tracking-wider uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          PREDICTION
        </motion.span>
      </div>

      {/* Company Legend */}
      <motion.div 
        className="flex flex-wrap items-center gap-3 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/80 rounded-full border border-gray-300">
          <span className="text-xs font-semibold text-gray-900">AI NATIVE</span>
        </div>
        {companies.slice(1, 7).map((company) => (
          <div 
            key={company.key}
            className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-sm"
          >
            <div 
              className="w-2 h-2 rounded-full" 
              style={{ backgroundColor: company.color }}
            />
            <span className="text-xs font-medium text-gray-700">{company.name}</span>
          </div>
        ))}
      </motion.div>
      
      <motion.div 
        className="flex flex-wrap items-center gap-3 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {companies.slice(7).map((company) => (
          <div 
            key={company.key}
            className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-sm"
          >
            <div 
              className="w-2 h-2 rounded-full" 
              style={{ backgroundColor: company.color }}
            />
            <span className="text-xs font-medium text-gray-700">{company.name}</span>
          </div>
        ))}
      </motion.div>

      {/* Chart */}
      <motion.div 
        className="flex-1 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 80, left: 20, bottom: 40 }}>
            <XAxis 
              dataKey="year" 
              axisLine={{ stroke: "#374151" }}
              tickLine={{ stroke: "#374151" }}
              tick={{ fill: "#374151", fontSize: 12 }}
              label={{ 
                value: "Years from $100M to $1B", 
                position: "insideBottomRight",
                fill: "#6b7280",
                fontSize: 11,
                offset: -10
              }}
            />
            <YAxis 
              axisLine={{ stroke: "#374151" }}
              tickLine={{ stroke: "#374151" }}
              tick={{ fill: "#374151", fontSize: 12 }}
              tickFormatter={formatYAxis}
              ticks={[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]}
              domain={[100, 1000]}
              label={{ 
                value: "$ ARR in Millions", 
                angle: -90, 
                position: "insideLeft",
                fill: "#6b7280",
                fontSize: 11,
                offset: 10
              }}
            />
            <ReferenceLine 
              x={1.5} 
              stroke="#374151" 
              strokeDasharray="5 5" 
              strokeWidth={1}
            />
            {companies.map((company) => (
              <Line
                key={company.key}
                type="monotone"
                dataKey={company.key}
                stroke={company.color}
                strokeWidth={company.strokeWidth || 2}
                strokeDasharray={company.dashed ? "8 4" : undefined}
                dot={false}
                activeDot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Source */}
      <motion.p 
        className="text-xs text-gray-500 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        Source: Bessemer Analysis
      </motion.p>
    </div>
  );
};

export default AiNativeSlide;
