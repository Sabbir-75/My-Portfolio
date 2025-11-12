'use client';

import React from 'react';

const NeonBadge = ({
    children,
    color = "blue",
    ...props
}) => {
    const colors = {
        green: "shadow-green-500/30 border-green-400/30 text-green-300",
        
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
                <NeonBadge color="green">{children}</NeonBadge>
            </div>
    );
}
