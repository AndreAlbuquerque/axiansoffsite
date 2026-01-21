import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from "recharts";
import { motion } from "framer-motion";

// Data matching the actual chart trajectories - all start at $100M
const data = [
  { year: 0, aiNative: 100, canva: 100, zoom: 100, twilio: 100, dropbox: 100, shopify: 100, workday: 100, servicenow: 100, okta: 100, salesforce: 100, hubspot: 100, zendesk: 100, veeva: 100 },
  { year: 0.5, aiNative: 280, canva: 140, zoom: 160, twilio: 170, dropbox: 165, shopify: 145, workday: 135, servicenow: 150, okta: 155, salesforce: 148, hubspot: 125, zendesk: 120, veeva: 115 },
  { year: 1, aiNative: 520, canva: 190, zoom: 230, twilio: 250, dropbox: 240, shopify: 200, workday: 180, servicenow: 210, okta: 220, salesforce: 205, hubspot: 155, zendesk: 145, veeva: 135 },
  { year: 1.5, aiNative: 850, canva: 260, zoom: 320, twilio: 350, dropbox: 330, shopify: 270, workday: 240, servicenow: 290, okta: 300, salesforce: 280, hubspot: 195, zendesk: 180, veeva: 165 },
  { year: 2, aiNative: 1000, canva: 350, zoom: 430, twilio: 470, dropbox: 440, shopify: 360, workday: 310, servicenow: 390, okta: 400, salesforce: 370, hubspot: 245, zendesk: 225, veeva: 200 },
  { year: 2.5, aiNative: 1000, canva: 460, zoom: 560, twilio: 600, dropbox: 570, shopify: 470, workday: 400, servicenow: 510, okta: 530, salesforce: 480, hubspot: 305, zendesk: 280, veeva: 245 },
  { year: 3, aiNative: 1000, canva: 590, zoom: 710, twilio: 750, dropbox: 720, shopify: 600, workday: 510, servicenow: 650, okta: 680, salesforce: 610, hubspot: 380, zendesk: 345, veeva: 300 },
  { year: 3.5, aiNative: 1000, canva: 740, zoom: 850, twilio: 880, dropbox: 860, shopify: 750, workday: 640, servicenow: 800, okta: 830, salesforce: 760, hubspot: 470, zendesk: 420, veeva: 365 },
  { year: 4, aiNative: 1000, canva: 880, zoom: 950, twilio: 970, dropbox: 960, shopify: 890, workday: 780, servicenow: 930, okta: 950, salesforce: 900, hubspot: 570, zendesk: 510, veeva: 440 },
  { year: 4.5, aiNative: 1000, canva: 970, zoom: 1000, twilio: 1000, dropbox: 1000, shopify: 970, workday: 900, servicenow: 1000, okta: 1000, salesforce: 980, hubspot: 680, zendesk: 610, veeva: 530 },
  { year: 5, aiNative: 1000, canva: 1000, zoom: 1000, twilio: 1000, dropbox: 1000, shopify: 1000, workday: 980, servicenow: 1000, okta: 1000, salesforce: 1000, hubspot: 790, zendesk: 720, veeva: 630 },
  { year: 5.5, aiNative: 1000, canva: 1000, zoom: 1000, twilio: 1000, dropbox: 1000, shopify: 1000, workday: 1000, servicenow: 1000, okta: 1000, salesforce: 1000, hubspot: 890, zendesk: 830, veeva: 740 },
  { year: 6, aiNative: 1000, canva: 1000, zoom: 1000, twilio: 1000, dropbox: 1000, shopify: 1000, workday: 1000, servicenow: 1000, okta: 1000, salesforce: 1000, hubspot: 960, zendesk: 920, veeva: 850 },
  { year: 7, aiNative: 1000, canva: 1000, zoom: 1000, twilio: 1000, dropbox: 1000, shopify: 1000, workday: 1000, servicenow: 1000, okta: 1000, salesforce: 1000, hubspot: 1000, zendesk: 1000, veeva: 1000 },
];

const companies = [
  { key: "aiNative", name: "AI NATIVE", color: "#ffffff", strokeWidth: 2.5, dashed: false },
  { key: "twilio", name: "Twilio", color: "#f22f46" },
  { key: "dropbox", name: "Dropbox", color: "#0061fe" },
  { key: "zoom", name: "Zoom", color: "#2d8cff" },
  { key: "shopify", name: "Shopify", color: "#96bf48" },
  { key: "okta", name: "Okta", color: "#007dc1" },
  { key: "canva", name: "Canva", color: "#00c4cc" },
  { key: "workday", name: "Workday", color: "#ff6900" },
  { key: "servicenow", name: "ServiceNow", color: "#81b64c" },
  { key: "salesforce", name: "Salesforce", color: "#00a1e0" },
  { key: "hubspot", name: "HubSpot", color: "#ff7a59" },
  { key: "zendesk", name: "Zendesk", color: "#03363d" },
  { key: "veeva", name: "Veeva", color: "#f97316" },
];

const formatYAxis = (value: number) => {
  if (value >= 1000) return "$1,000M";
  return `$${value}M`;
};

const AiNativeSlide = () => {
  return (
    <div className="w-full h-full flex flex-col p-12 bg-slide-bg">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-foreground leading-tight max-w-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          AI Native companies accelerate path to $1 billion by 50%
        </motion.h1>
        
        <motion.span 
          className="text-sm font-medium text-muted-foreground tracking-wider uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          PREDICTION
        </motion.span>
      </div>

      {/* Company Legend - Row 1 */}
      <motion.div 
        className="flex flex-wrap items-center gap-3 mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-muted">
          <div className="w-6 h-0.5 bg-foreground" />
          <span className="text-xs font-semibold text-foreground tracking-wide">AI NATIVE</span>
        </div>
        {companies.slice(1, 7).map((company) => (
          <div 
            key={company.key}
            className="flex items-center gap-2 px-3 py-1.5 bg-secondary/30 rounded-full"
          >
            <div 
              className="w-2.5 h-2.5 rounded-full" 
              style={{ backgroundColor: company.color }}
            />
            <span className="text-xs font-medium text-foreground/80">{company.name}</span>
          </div>
        ))}
      </motion.div>
      
      {/* Company Legend - Row 2 */}
      <motion.div 
        className="flex flex-wrap items-center gap-3 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {companies.slice(7).map((company) => (
          <div 
            key={company.key}
            className="flex items-center gap-2 px-3 py-1.5 bg-secondary/30 rounded-full"
          >
            <div 
              className="w-2.5 h-2.5 rounded-full" 
              style={{ backgroundColor: company.color }}
            />
            <span className="text-xs font-medium text-foreground/80">{company.name}</span>
          </div>
        ))}
      </motion.div>

      {/* Chart */}
      <motion.div 
        className="flex-1 w-full min-h-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 100, left: 30, bottom: 40 }}>
            <XAxis 
              dataKey="year" 
              axisLine={{ stroke: "hsl(220, 10%, 40%)" }}
              tickLine={{ stroke: "hsl(220, 10%, 40%)" }}
              tick={{ fill: "hsl(220, 10%, 60%)", fontSize: 12 }}
              ticks={[0, 1, 2, 3, 4, 5, 6, 7]}
            />
            <YAxis 
              axisLine={{ stroke: "hsl(220, 10%, 40%)" }}
              tickLine={{ stroke: "hsl(220, 10%, 40%)" }}
              tick={{ fill: "hsl(220, 10%, 60%)", fontSize: 12 }}
              tickFormatter={formatYAxis}
              ticks={[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]}
              domain={[100, 1000]}
              label={{ 
                value: "$ ARR in Millions", 
                angle: -90, 
                position: "insideLeft",
                fill: "hsl(220, 10%, 60%)",
                fontSize: 11,
                offset: 0
              }}
            />
            {/* Reference line at ~1.5 years */}
            <ReferenceLine 
              x={1.5} 
              stroke="hsl(220, 10%, 50%)" 
              strokeDasharray="4 4" 
              strokeWidth={1}
            />
            {/* Reference line at ~3 years */}
            <ReferenceLine 
              x={3} 
              stroke="hsl(220, 10%, 50%)" 
              strokeDasharray="4 4" 
              strokeWidth={1}
            />
            {/* Render all company lines */}
            {companies.map((company) => (
              <Line
                key={company.key}
                type="monotone"
                dataKey={company.key}
                stroke={company.color}
                strokeWidth={company.strokeWidth || 1.5}
                strokeDasharray={company.dashed ? "6 3" : undefined}
                dot={false}
                activeDot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
        
        {/* X-axis label */}
        <div className="text-right pr-4 -mt-6">
          <span className="text-xs text-muted-foreground">Years from $100M to $1B</span>
        </div>
      </motion.div>

      {/* Source */}
      <motion.p 
        className="text-xs text-muted-foreground mt-4"
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
