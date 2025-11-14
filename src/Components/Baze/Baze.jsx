'use client';

import React from 'react';

const NeonBadge = ({
    children,
    color = "blue",
    ...props
}) => {
    const colors = {
        pink: "shadow-[#FB2859]/30 border-[#FB2859]/30 text-[#FFFFFF]/90",
        
    };
    return (
        <div
            className={`inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full backdrop-blur-md bg-black/40 border-2 shadow-2xl transition-all duration-300 ${colors[color]}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default function NeonBadgeView({children}) {
    return (
            <div>
                <NeonBadge color="pink">{children}</NeonBadge>
            </div>
    );
}
