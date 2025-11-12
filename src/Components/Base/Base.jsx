'use client';

import React from "react";


export default function Base({ icon, txt, children }) {
    return (
        <>
            <style jsx>{`
        @property --border-angle {
          syntax: "<angle>";
          inherits: true;
          initial-value: 0deg;
        }
        @keyframes border-spin {
          100% {
            --border-angle: 360deg;
          }
        }
        .animate-border {
          animation: border-spin 6s linear infinite;
        }
      `}</style>

            <div className="flex items-center justify-center p-4">
                <div
                    className="rounded-2xl"
                    style={{
                        boxShadow: `-10px -10px 15px #24282A, 10px 10px 5px #1E2024`,
                    }}
                >
                    <div
                        className="w-72 h-50 max-w-[288px] max-h-[288px] mx-auto rounded-2xl border border-transparent animate-border"
                        style={{
                            background: `linear-gradient(45deg, #080b11, #1e293b 50%, #172033) padding-box,
               conic-gradient(from var(--border-angle),
                 rgba(71,85,105,0.48) 80%, 
                 #ff014f 86%, 
                 #ff014f 94%, 
                 rgba(71,85,105,0.48)) border-box`,
                        }}
                    >
                        <div
                            className="relative text-center z-10 px-6 py-6 rounded-2xl 
                w-full h-full flex flex-col items-center justify-center
                bg-gradient-to-br from-[#1c1e22] to-[#22262a] 
                hover:from-[#22262a] hover:to-[#1c1e22] 
                transition-colors duration-300"
                        >
                            <h1 className="text-2xl text-primary flex justify-center gap-4 items-center font-bold tracking-tight">
                                {icon}
                                <div className="flex flex-col justify-start items-start">


                                    <h1 className="text-sm font-normal text-gray-100">
                                        {txt}
                                    </h1>
                                    <h1 className="text-xl font-medium text-white">
                                        {children}
                                    </h1>

                                </div>

                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
