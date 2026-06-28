'use client';

import React, { useState } from 'react';

export default function ArcMotherboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [aiResponse, setAiResponse] = useState('SYSTEM OPERATIONAL. STANDING BY FOR COMMAND.');
  const [aiLoading, setAiLoading] = useState(false);

  // Simulated live Ghost Loop chat feed for the War Room
  const ghostMessages = [
    { id: 1, user: 'Marcus | Phase 2', role: 'Operator', text: 'Just cleared the Phase 1 protocol. The mental shift alone is worth the entry fee.', time: '12:04 PM' },
    { id: 2, user: 'Operator_04', role: 'Elite', text: 'Bro, whoever designed the layout of the Vault is on another level. Clean as hell.', time: '12:08 PM' },
    { id: 3, user: 'X_Arbitrage', role: 'Operator', text: 'Is anyone else scaling Conduit A right now or is everyone on B?', time: '12:15 PM' },
    { id: 4, user: 'David_Alpha', role: 'Whale', text: 'Just hit my first $200 day using the traffic blueprint in Protocol 03. Insane.', time: '12:19 PM' },
    { id: 5, user: 'Marcus | Phase 2', role: 'Operator', text: 'Do not sleep on Protocol 02. The capital realignment strategy is literal alpha.', time: '12:22 PM' },
  ];

  const queryAiNexus = (promptType) => {
    setAiLoading(true);
    setAiResponse('RE-ROUTING QUANTUM CONDUITS...');
    setTimeout(() => {
      if (promptType === 'traffic') {
        setAiResponse('NEXUS ANALYSIS: High-volume short-form traffic is pooling in Conduit B. Recommend immediate deployment of Protocol 03.');
      } else if (promptType === 'arbitrage') {
        setAiResponse('NEXUS ANALYSIS: Premium liquidity spreads detected. Execute asymmetric risk model immediately.');
      }
      setAiLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#030A08] text-gray-100 font-sans flex flex-col md:flex-row border-4 border-[#D4AF37]">
      
      {/* SIDEBAR: CONTROL TERMINAL */}
      <aside className="w-full md:w-80 bg-[#061F17] border-b md:border-b-0 md:border-r border-[#D4AF37] flex flex-col justify-between p-6 z-10">
        <div>
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-3xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDD0] via-[#D4AF37] to-[#AA7C11]">
              ARC MATRIX
            </h1>
            <p className="text-[10px] text-[#D4AF37] tracking-[0.3em] font-mono mt-1">THE MOTHERBOARD v1.00</p>
          </div>

          <nav className="space-y-3">
            {[
              { id: 'dashboard', label: 'OASIS COMMAND', icon: '⚡' },
              { id: 'vault', label: 'THE ARC VAULT', icon: '🔱' },
              { id: 'calculator', label: 'FINANCIAL CONDUIT', icon: '🧮' },
              { id: 'warroom', label: 'WAR ROOM (LIVE)', icon: '👁️' },
              { id: 'announcements', label: 'GLOBAL COMMANDS', icon: '📢' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-4 px-4 py-3 rounded-none font-mono text-xs tracking-wider transition-all duration-300 border ${
                  activeTab === tab.id
                    ? 'bg-[#0B3A2B] text-[#FFFDD0] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                    : 'bg-transparent text-gray-400 border-transparent hover:border-[#D4AF37]/40 hover:text-white'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-[#D4AF37]/20 font-mono text-[11px] text-gray-400 space-y-2">
          <div className="flex justify-between">
            <span>NETWORK STATUS:</span>
            <span className="text-green-400 animate-pulse font-bold">ONLINE</span>
          </div>
          <div className="flex justify-between">
            <span>LIVE OPERATORS:</span>
            <span className="text-[#D4AF37] font-bold">1,482</span>
          </div>
        </div>
      </aside>

      {/* MAIN FRAME: MISSION INTERFACE */}
      <main className="flex-1 flex flex-col bg-[#020705] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="flex-1 p-4 md:p-8 overflow-y-auto z-10">
          
          {/* TAB 1: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="border-b border-[#D4AF37]/30 pb-4">
                <h2 className="text-2xl font-black text-[#FFFDD0] tracking-wider">OASIS COMMAND</h2>
                <p className="text-xs text-gray-400 font-mono">Macro analytics and operational nexus vector.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#061F17] border border-[#D4AF37] p-5 relative">
                  <h3 className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase">Vault Security</h3>
                  <p className="text-2xl font-black text-white mt-2">GATED ALPHA</p>
                  <button onClick={() => setActiveTab('vault')} className="text-[10px] text-[#FFFDD0] underline mt-4 block font-mono">Execute Access Vector →</button>
                </div>
                <div className="bg-[#061F17] border border-[#D4AF37] p-5 relative">
                  <h3 className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase">Active Conduits</h3>
                  <p className="text-2xl font-black text-white mt-2">METRICS ALIGNED</p>
                  <button onClick={() => setActiveTab('calculator')} className="text-[10px] text-[#FFFDD0] underline mt-4 block font-mono">Open Engine Tools →</button>
                </div>
                <div className="bg-[#061F17] border border-[#D4AF37] p-5 relative">
                  <h3 className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase">War Room</h3>
                  <p className="text-2xl font-black text-green-400 mt-2">HIGH DENSITY</p>
                  <button onClick={() => setActiveTab('warroom')} className="text-[10px] text-[#FFFDD0] underline mt-4 block font-mono">Join Trenches →</button>
                </div>
              </div>

              <div className="bg-[#051812] border-2 border-[#D4AF37] p-6 rounded-none mt-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping"></div>
                  <h3 className="font-mono text-xs font-bold text-[#D4AF37] tracking-widest">ARC AI NEXUS INTEGRATION</h3>
                </div>
                <div className="bg-black/50 p-4 border border-[#D4AF37]/20 rounded-none mb-4 min-h-[60px] flex items-center">
                  <p className={`font-mono text-xs ${aiLoading ? 'text-[#D4AF37] animate-pulse' : 'text-green-400'}`}>{aiResponse}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button onClick={() => queryAiNexus('traffic')} className="px-3 py-2 border border-[#D4AF37] text-[10px] font-mono hover:bg-[#D4AF37] hover:text-black transition-all">Scan Traffic Conduits</button>
                  <button onClick={() => queryAiNexus('arbitrage')} className="px-3 py-2 border border-[#D4AF37] text-[10px] font-mono hover:bg-[#D4AF37] hover:text-black transition-all">Scan Asset Spread</button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: NATIVE EMBEDDED VAULT */}
          {activeTab === 'vault' && (
            <div className="w-full h-full flex flex-col space-y-4">
              <div className="flex justify-between items-center border-b border-[#D4AF37]/30 pb-2">
                <span className="text-xs font-mono text-[#D4AF37]">SECURE SUB-FRAME INTERNAL ROUTE</span>
              </div>
              <div className="flex-1 w-full min-h-[70vh] bg-black border-2 border-[#D4AF37] overflow-hidden relative">
                <iframe 
                  src="https://arc-vault-live-7plpojxkd-punitsaini252010-rgbs-projects.vercel.app/" 
                  className="w-full h-full absolute inset-0 border-none"
                />
              </div>
            </div>
          )}

          {/* TAB 3: NATIVE EMBEDDED CALCULATOR */}
          {activeTab === 'calculator' && (
            <div className="w-full h-full flex flex-col space-y-4">
              <div className="flex justify-between items-center border-b border-[#D4AF37]/30 pb-2">
                <span className="text-xs font-mono text-[#D4AF37]">MATHEMATICAL CONDUIT SUB-FRAME</span>
              </div>
              <div className="flex-1 w-full min-h-[70vh] bg-black border-2 border-[#D4AF37] overflow-hidden relative">
                <iframe 
                  src="https://arc-calculator-mg4krlwft-punitsaini252010-rgbs-projects.vercel.app/" 
                  className="w-full h-full absolute inset-0 border-none"
                />
              </div>
            </div>
          )}

          {/* TAB 4: THE WAR ROOM */}
          {activeTab === 'warroom' && (
            <div className="flex flex-col h-[75vh] bg-[#041510] border-2 border-[#D4AF37] p-4 relative">
              <div className="border-b border-[#D4AF37]/30 pb-3 mb-4 flex justify-between items-center">
                <h2 className="text-lg font-black text-[#FFFDD0] tracking-wider">#OPERATOR-TRENCHES</h2>
                <span className="text-[10px] font-mono block text-red-400">HIGH-SPEED FLUSH ENGINE ACTIVE</span>
              </div>
              <div className="flex-1 overflow-y-auto space-y-4 pr-2 font-mono text-xs">
                {ghostMessages.map((msg) => (
                  <div key={msg.id} className="p-3 bg-black/40 border-l-2 border-[#D4AF37] space-y-1">
                    <div className="flex items-center space-x-2 text-[11px]">
                      <span className="text-[#FFFDD0] font-black">{msg.user}</span>
                      <span className="bg-[#0B3A2B] text-[#D4AF37] px-1 text-[9px] border border-[#D4AF37]/30 uppercase font-bold">{msg.role}</span>
                      <span className="text-gray-500 text-[9px] ml-auto">{msg.time}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-xs">{msg.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-[#D4AF37]/20">
                <div className="bg-black/80 border border-dashed border-[#D4AF37] p-3 text-center">
                  <p className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-widest">
                    ⚠️ CONNECT YOUR TELEMETRY DEVICE VIA DISCORD TO TALK LIVE
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: ANNOUNCEMENTS */}
          {activeTab === 'announcements' && (
            <div className="space-y-6">
              <div className="border-b border-[#D4AF37]/30 pb-4">
                <h2 className="text-2xl font-black text-[#FFFDD0] tracking-wider">GLOBAL ANNOUNCEMENTS</h2>
              </div>
              <div className="space-y-4">
                <div className="bg-[#061F17] border border-[#D4AF37]/40 p-5">
                  <span className="text-[10px] font-mono text-[#D4AF37] tracking-wider block mb-1">SYSTEM UPDATE</span>
                  <h4 className="text-md font-bold text-[#FFFDD0] font-mono uppercase mb-2">MOTHERBOARD INITIALIZED</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">All external sub-pages, tracking engines, and calculator arrays have been successfully bound to the main digital matrix.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
                }
            
