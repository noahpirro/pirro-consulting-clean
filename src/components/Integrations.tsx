import { motion } from "framer-motion";
import { useState } from "react";

// Import local logos
import makeLogo from "@/assets/logos/make.ico";
import n8nLogo from "@/assets/logos/n8n.ico";
import clickupLogo from "@/assets/logos/clickup.webp";
import calendlyLogo from "@/assets/logos/calendly.ico";
import airtableLogo from "@/assets/logos/airtable.webp";
import gmailLogo from "@/assets/logos/gmail.webp";
import outlookLogo from "@/assets/logos/outlook.ico";
import datevLogo from "@/assets/logos/datev.ico";
import lexofficeLogo from "@/assets/logos/lexoffice.ico";
import easybillLogo from "@/assets/logos/easybill.ico";
import placetelLogo from "@/assets/logos/placetel.ico";
import closeLogo from "@/assets/logos/close.ico";
import brevoLogo from "@/assets/logos/brevo.svg";
import slackLogo from "@/assets/logos/slack-icon.svg";
import gdriveLogo from "@/assets/logos/gdrive.webp";
import stripeLogo from "@/assets/logos/stripe.webp";
import trelloLogo from "@/assets/logos/trello.svg";
import mondayLogo from "@/assets/logos/monday.webp";
import perspectiveLogo from "@/assets/logos/perspective.webp";
import lemlistLogo from "@/assets/logos/lemlist.webp";
import googleadsLogo from "@/assets/logos/googleads.webp";
import twilioLogo from "@/assets/logos/twilio.webp";
import zoomLogo from "@/assets/logos/zoom.webp";
import shopifyLogo from "@/assets/logos/shopify.webp";
import whatsappLogo from "@/assets/logos/whatsapp.svg";
import salesforceLogo from "@/assets/logos/salesforce.webp";
import metaLogo from "@/assets/logos/meta.webp";
import microsoft365Logo from "@/assets/logos/microsoft365.webp";
import pandadocLogo from "@/assets/logos/pandadoc.svg";
import descriptLogo from "@/assets/logos/descript.webp";
import intercomLogo from "@/assets/logos/intercom.webp";
import hubspotLogo from "@/assets/logos/hubspot.webp";
import zapierLogo from "@/assets/logos/zapier.png";
import notionLogo from "@/assets/logos/notion.webp";

const tools = [
  // Row 1 - top
  { name: "Gmail", logo: gmailLogo, position: "top-[0%] left-[2%]", delay: 0.05, size: "md", lineIndex: 0 },
  { name: "Make", logo: makeLogo, position: "top-[0%] left-[16%]", delay: 0, size: "lg", lineIndex: 1 },
  { name: "Perspective", logo: perspectiveLogo, position: "top-[0%] right-[16%]", delay: 0.12, size: "md", lineIndex: 2 },
  { name: "n8n", logo: n8nLogo, position: "top-[0%] right-[2%]", delay: 0.1, size: "lg", lineIndex: 3 },
  
  // Row 2
  { name: "Outlook", logo: outlookLogo, position: "top-[14%] left-[0%]", delay: 0.15, size: "md", lineIndex: 4 },
  { name: "Slack", logo: slackLogo, position: "top-[14%] left-[12%]", delay: 0.2, size: "md", lineIndex: 5 },
  { name: "Microsoft 365", logo: microsoft365Logo, position: "top-[14%] right-[12%]", delay: 0.08, size: "md", lineIndex: 6 },
  { name: "Stripe", logo: stripeLogo, position: "top-[14%] right-[0%]", delay: 0.3, size: "md", lineIndex: 7 },
  
  // Row 3
  { name: "Airtable", logo: airtableLogo, position: "top-[28%] left-[-2%]", delay: 0.35, size: "md", lineIndex: 8 },
  { name: "PandaDoc", logo: pandadocLogo, position: "top-[28%] left-[10%]", delay: 0.28, size: "sm", lineIndex: 9 },
  { name: "Brevo", logo: brevoLogo, position: "top-[28%] right-[10%]", delay: 0.25, size: "sm", lineIndex: 10 },
  { name: "ClickUp", logo: clickupLogo, position: "top-[28%] right-[-2%]", delay: 0.45, size: "md", lineIndex: 11 },
  
  // Row 4
  { name: "Google Ads", logo: googleadsLogo, position: "top-[42%] left-[-2%]", delay: 0.42, size: "md", lineIndex: 12 },
  { name: "DATEV", logo: datevLogo, position: "top-[42%] left-[10%]", delay: 0.4, size: "sm", lineIndex: 13 },
  { name: "Monday", logo: mondayLogo, position: "top-[42%] right-[10%]", delay: 0.5, size: "sm", lineIndex: 14 },
  { name: "Close", logo: closeLogo, position: "top-[42%] right-[-2%]", delay: 0.6, size: "md", lineIndex: 15 },
  
  // Row 5
  { name: "Lexoffice", logo: lexofficeLogo, position: "top-[56%] left-[-2%]", delay: 0.55, size: "md", lineIndex: 16 },
  { name: "Intercom", logo: intercomLogo, position: "top-[56%] left-[10%]", delay: 0.58, size: "sm", lineIndex: 17 },
  { name: "Twilio", logo: twilioLogo, position: "top-[56%] right-[10%]", delay: 0.52, size: "xl", lineIndex: 18 },
  { name: "Salesforce", logo: salesforceLogo, position: "top-[56%] right-[-2%]", delay: 0.88, size: "md", lineIndex: 19 },
  
  // Row 6
  { name: "Calendly", logo: calendlyLogo, position: "top-[70%] left-[-2%]", delay: 0.65, size: "md", lineIndex: 20 },
  { name: "Zoom", logo: zoomLogo, position: "top-[70%] left-[10%]", delay: 0.62, size: "md", lineIndex: 21 },
  { name: "Shopify", logo: shopifyLogo, position: "top-[70%] right-[10%]", delay: 0.72, size: "md", lineIndex: 22 },
  { name: "Google Drive", logo: gdriveLogo, position: "top-[70%] right-[-2%]", delay: 0.75, size: "md", lineIndex: 23 },
  
  // Row 7
  { name: "WhatsApp", logo: whatsappLogo, position: "top-[84%] left-[0%]", delay: 0.82, size: "md", lineIndex: 24 },
  { name: "Placetel", logo: placetelLogo, position: "top-[84%] left-[12%]", delay: 0.7, size: "sm", lineIndex: 25 },
  { name: "Trello", logo: trelloLogo, position: "top-[84%] right-[12%]", delay: 0.8, size: "sm", lineIndex: 26 },
  { name: "Meta", logo: metaLogo, position: "top-[84%] right-[0%]", delay: 0.92, size: "md", lineIndex: 27 },
  
  // Row 8 - removed, moved to row 7 area or hidden
  { name: "HubSpot", logo: hubspotLogo, position: "top-[96%] left-[2%]", delay: 0.9, size: "md", lineIndex: 28 },
  { name: "Easybill", logo: easybillLogo, position: "top-[96%] left-[14%]", delay: 0.85, size: "md", lineIndex: 29 },
  { name: "Zapier", logo: zapierLogo, position: "top-[96%] right-[14%]", delay: 1, size: "md", lineIndex: 30 },
  { name: "Notion", logo: notionLogo, position: "top-[96%] right-[2%]", delay: 0.95, size: "md", lineIndex: 31 },
];

const floatingLabels = [
  // Top area - moved further from center
  { text: "Angebot erstellt", position: "top-[8%] left-[26%]", delay: 0.4 },
  { text: "Meeting geplant", position: "top-[6%] right-[24%]", delay: 0.6 },
  { text: "Lead erfasst", position: "top-[18%] left-[24%]", delay: 0.5 },
  { text: "Rechnung erstellt", position: "top-[20%] right-[22%]", delay: 1.1 },
  // Middle area - moved further from center
  { text: "Zahlung erhalten", position: "top-[32%] right-[22%]", delay: 1.5 },
  { text: "CRM aktualisiert", position: "top-[42%] left-[22%]", delay: 0.9 },
  { text: "Dokument signiert", position: "top-[56%] left-[22%]", delay: 1.7 },
  { text: "Bestellung verarbeitet", position: "top-[52%] right-[20%]", delay: 1.9 },
  { text: "E-Mail versendet", position: "top-[66%] right-[22%]", delay: 0.7 },
  { text: "Termin gebucht", position: "top-[70%] left-[24%]", delay: 1.3 },
  // Bottom area - moved further from center
  { text: "Kunde kontaktiert", position: "top-[78%] right-[24%]", delay: 2.1 },
  { text: "Report generiert", position: "top-[86%] left-[26%]", delay: 2.3 },
  { text: "Vertrag abgeschlossen", position: "top-[90%] right-[22%]", delay: 2.5 },
];

// Line coordinates matching tool positions
const lineCoords = [
  // Row 1 - top-[0%]
  { x1: "5%", y1: "5%", gradient: "Gold" },      // Gmail left-[2%]
  { x1: "19%", y1: "5%", gradient: "Gold" },     // Make left-[16%]
  { x1: "81%", y1: "5%", gradient: "Purple" },   // Picsart right-[16%]
  { x1: "95%", y1: "5%", gradient: "Purple" },   // n8n right-[2%]
  // Row 2 - top-[14%]
  { x1: "3%", y1: "19%", gradient: "Gold" },     // Outlook left-[0%]
  { x1: "15%", y1: "19%", gradient: "Purple" },  // Slack left-[12%]
  { x1: "85%", y1: "19%", gradient: "Gold" },    // Microsoft 365 right-[12%]
  { x1: "97%", y1: "19%", gradient: "Purple" },  // Stripe right-[0%]
  // Row 3 - top-[28%]
  { x1: "1%", y1: "33%", gradient: "Gold" },     // Airtable left-[-2%]
  { x1: "13%", y1: "33%", gradient: "Purple" },  // PandaDoc left-[10%]
  { x1: "87%", y1: "33%", gradient: "Gold" },    // Brevo right-[10%]
  { x1: "99%", y1: "33%", gradient: "Purple" },  // ClickUp right-[-2%]
  // Row 4 - top-[42%]
  { x1: "1%", y1: "47%", gradient: "Gold" },     // Google Ads left-[-2%]
  { x1: "13%", y1: "47%", gradient: "Purple" },  // DATEV left-[10%]
  { x1: "87%", y1: "47%", gradient: "Gold" },    // Monday right-[10%]
  { x1: "99%", y1: "47%", gradient: "Purple" },  // Close right-[-2%]
  // Row 5 - top-[56%]
  { x1: "1%", y1: "61%", gradient: "Gold" },     // Lexoffice left-[-2%]
  { x1: "13%", y1: "61%", gradient: "Purple" },  // Intercom left-[10%]
  { x1: "87%", y1: "61%", gradient: "Gold" },    // Twilio right-[10%]
  { x1: "99%", y1: "61%", gradient: "Purple" },  // Salesforce right-[-2%]
  // Row 6 - top-[70%]
  { x1: "1%", y1: "75%", gradient: "Gold" },     // Calendly left-[-2%]
  { x1: "13%", y1: "75%", gradient: "Purple" },  // Zoom left-[10%]
  { x1: "87%", y1: "75%", gradient: "Gold" },    // Shopify right-[10%]
  { x1: "99%", y1: "75%", gradient: "Purple" },  // Google Drive right-[-2%]
  // Row 7 - top-[84%]
  { x1: "3%", y1: "89%", gradient: "Gold" },     // WhatsApp left-[0%]
  { x1: "15%", y1: "89%", gradient: "Purple" },  // Placetel left-[12%]
  { x1: "85%", y1: "89%", gradient: "Gold" },    // Trello right-[12%]
  { x1: "97%", y1: "89%", gradient: "Purple" },  // Meta right-[0%]
  // Row 8 - top-[96%]
  { x1: "5%", y1: "99%", gradient: "Gold" },     // HubSpot left-[2%]
  { x1: "17%", y1: "99%", gradient: "Purple" },  // Easybill left-[14%]
  { x1: "83%", y1: "99%", gradient: "Gold" },    // Zapier right-[14%]
  { x1: "95%", y1: "99%", gradient: "Purple" },  // Notion right-[2%]
];

export const Integrations = () => {
  const [hoveredToolIndex, setHoveredToolIndex] = useState<number | null>(null);

  return (
    <section className="pt-24 pb-24 bg-foreground relative overflow-hidden">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block px-8 py-4 bg-background/10 text-background/80 rounded-full text-lg font-semibold mb-12 border border-background/20 shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            100+ Integrationen
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center">
            Für jedes Problem das <span className="text-highlight">richtige</span> Tool
          </h2>
          <p className="text-background/50 max-w-3xl mx-auto text-lg">
            Für jedes Problem wählen wir die passenden Tools aus und verbinden sie zu einem maßgeschneiderten Workflow. So entsteht eine individuelle Lösung, die Prozesse vereinfacht, Zeit spart und Ihr Unternehmen spürbar entlastet.
          </p>
        </motion.div>

        {/* Integration Visualization */}
        <div className="relative h-[650px] md:h-[750px] max-w-6xl mx-auto flex items-center justify-center">
          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="lineGradientGold" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(234, 179, 8, 0.05)" />
                <stop offset="50%" stopColor="rgba(234, 179, 8, 0.4)" />
                <stop offset="100%" stopColor="rgba(234, 179, 8, 0.05)" />
              </linearGradient>
              <linearGradient id="lineGradientPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(168, 85, 247, 0.1)" />
                <stop offset="100%" stopColor="rgba(168, 85, 247, 0.3)" />
              </linearGradient>
              <linearGradient id="lineGradientGoldHover" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(234, 179, 8, 0.3)" />
                <stop offset="50%" stopColor="rgba(234, 179, 8, 1)" />
                <stop offset="100%" stopColor="rgba(234, 179, 8, 0.3)" />
              </linearGradient>
              <linearGradient id="lineGradientPurpleHover" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(168, 85, 247, 0.5)" />
                <stop offset="100%" stopColor="rgba(168, 85, 247, 1)" />
              </linearGradient>
            </defs>
            
            {lineCoords.map((line, index) => {
              const isHovered = hoveredToolIndex === index;
              const gradientId = isHovered 
                ? `lineGradient${line.gradient}Hover` 
                : `lineGradient${line.gradient}`;
              
              return (
                <motion.line
                  key={index}
                  x1={line.x1}
                  y1={line.y1}
                  x2="50%"
                  y2="50%"
                  stroke={`url(#${gradientId})`}
                  strokeWidth={isHovered ? 3 : 1.5}
                  strokeDasharray="4 6"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.1 + index * 0.02 }}
                  style={{
                    filter: isHovered ? 'drop-shadow(0 0 8px rgba(234, 179, 8, 0.5))' : 'none',
                    transition: 'stroke-width 0.3s, filter 0.3s'
                  }}
                />
              );
            })}
          </svg>

          {/* Center Element with Animated Ring */}
          <motion.div 
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              {/* Subtle glow */}
              <motion.div 
                className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl scale-[2.5]"
                animate={{ scale: [2.5, 2.8, 2.5], opacity: [0.1, 0.15, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Animated rotating ring */}
              <motion.div
                className="absolute inset-0 -m-4 md:-m-6"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <defs>
                    <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
                      <stop offset="25%" stopColor="rgba(168, 85, 247, 0.6)" />
                      <stop offset="50%" stopColor="rgba(234, 179, 8, 0.8)" />
                      <stop offset="75%" stopColor="rgba(168, 85, 247, 0.6)" />
                      <stop offset="100%" stopColor="rgba(59, 130, 246, 0.8)" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="url(#ringGradient)"
                    strokeWidth="2"
                    strokeDasharray="40 20 10 20"
                  />
                </svg>
              </motion.div>

              {/* Second animated ring (counter-rotating) */}
              <motion.div
                className="absolute inset-0 -m-6 md:-m-8"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <circle
                    cx="100"
                    cy="100"
                    r="95"
                    fill="none"
                    stroke="rgba(59, 130, 246, 0.2)"
                    strokeWidth="1"
                    strokeDasharray="5 15"
                  />
                </svg>
              </motion.div>
              
              {/* Center circle */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-background/10 backdrop-blur-sm border border-background/30 flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <motion.div 
                    className="text-base md:text-lg font-bold text-background/80 uppercase tracking-widest"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Automation
                  </motion.div>
                  <div className="text-[10px] text-background/50 mt-1 font-medium tracking-widest uppercase">Zentrale</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tool Icons */}
          {tools.map((tool) => {
            const sizeClasses = {
              sm: "w-10 h-10 md:w-12 md:h-12",
              md: "w-12 h-12 md:w-14 md:h-14",
              lg: "w-14 h-14 md:w-16 md:h-16",
              xl: "w-14 h-14 md:w-16 md:h-16"
            };
            const imgSizes = {
              sm: "w-5 h-5 md:w-6 md:h-6",
              md: "w-6 h-6 md:w-7 md:h-7",
              lg: "w-7 h-7 md:w-8 md:h-8",
              xl: "w-12 h-12 md:w-14 md:h-14"
            };
            
            return (
              <motion.div
                key={tool.name}
                className={`absolute ${tool.position} z-20`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  delay: tool.delay + 0.3
                }}
                onMouseEnter={() => setHoveredToolIndex(tool.lineIndex)}
                onMouseLeave={() => setHoveredToolIndex(null)}
              >
                <motion.div 
                  className="group relative"
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {/* Icon container */}
                  <div className={`${sizeClasses[tool.size as keyof typeof sizeClasses]} rounded-xl bg-background/10 backdrop-blur-sm border border-background/15 flex items-center justify-center shadow-lg group-hover:border-highlight/50 group-hover:bg-background/20 transition-all duration-300`}>
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      width={32}
                      height={32}
                      loading="lazy"
                      decoding="async"
                      className={`${imgSizes[tool.size as keyof typeof imgSizes]} object-contain`}
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${tool.name.charAt(0)}&background=374151&color=9ca3af&size=64&bold=true`;
                      }}
                    />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <span className="text-xs text-background/70 whitespace-nowrap bg-foreground px-3 py-1.5 rounded-lg shadow-lg border border-background/20">
                      {tool.name}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Floating Labels - staggered animation */}
          {floatingLabels.map((label, index) => (
            <motion.div
              key={label.text}
              className={`absolute ${label.position} z-10 hidden md:block`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
            >
              <motion.div 
                className="px-4 py-2 bg-background/10 backdrop-blur-sm border border-background/15 rounded-lg shadow-lg"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: label.delay }}
              >
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 }}
                  />
                  <span className="text-sm text-background/70">{label.text}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
