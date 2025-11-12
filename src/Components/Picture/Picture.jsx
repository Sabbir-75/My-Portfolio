'use client';

import React, { useState } from 'react';
import ReactLogo from "../../assets/react-1-logo-png-transparent.png"
import htmlLogo from "../../assets/png-transparent-logo-html-html5-removebg-preview.png"
import photo from "../../assets/Black Simple Minimalist Professional Corporate Facebook Profile Picture.png"
const SparkleIcon = () => <svg height="1.8em" style={{
    flex: 'none',
    lineHeight: 1
}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="1.8em">
    <title>Gemini</title>
    <defs>
        <linearGradient id="gemini-gradient-fixed" x1="0%" x2="68.73%" y1="100%" y2="30.395%">
            <stop offset="0%" stopColor="#1C7DFF"></stop>
            <stop offset="52.021%" stopColor="#1C69FF"></stop>
            <stop offset="100%" stopColor="#F0DCD6"></stop>
        </linearGradient>
    </defs>
    <path d="M12 24A14.304 14.304 0 000 12 14.304 14.304 0 0012 0a14.305 14.305 0 0012 12 14.305 14.305 0 00-12 12" fill="url(#gemini-gradient-fixed)" fillRule="nonzero"></path>
</svg>;
const FigmaIcon = () => <svg width="1.8em" height="1.8em" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 1.5C0 0.671573 0.671573 0 1.5 0H8.5C9.32843 0 10 0.671573 10 1.5V8H1.5C0.671573 8 0 7.32843 0 6.5V1.5Z" fill="#F26207"></path>
    <path d="M10 8H18.5C19.3284 8 20 8.67157 20 9.5V14.5C20 15.3284 19.3284 16 18.5 16H10V8Z" fill="#F26207"></path>
    <path d="M0 17.5C0 16.6716 0.671573 16 1.5 16H10V22.5C10 23.3284 9.32843 24 8.5 24H1.5C0.671573 24 0 23.3284 0 22.5V17.5Z" fill="#F26207"></path>
</svg>;
const CoralIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="1.8em" height="1.8em">
    <defs>
        <linearGradient id="coral-gradient-fixed" x1="199.997" x2="296.665" y1="214.302" y2="307.573" gradientTransform="translate(-200 -213)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#62A0EA"></stop>
            <stop offset="1" stopColor="#1A5FB4"></stop>
        </linearGradient>
    </defs>
    <path fill="url(#coral-gradient-fixed)" d="M48.26 2.274a6.113 6.113 0 0 0-1.838 8.468c10.109 15.655 12.495 27.463 11.46 37.811-4.184 19.816-13.279 23.836-21.227 23.836-7.76 0-5.682-12.771.151-16.509 3.482-2.174 7.942-3.587 11.365-3.587 3.392 0 6.142-2.741 6.142-6.123 0-3.383-2.75-6.124-6.142-6.124-3.998 0-7.92.84-11.581 2.27.748-3.529 1.024-7.343.057-11.397-1.468-6.156-5.694-12.036-13.032-17.736a6.15 6.15 0 0 0-8.621 1.065 6.114 6.114 0 0 0 1.078 8.595c5.978 4.643 7.952 8.08 8.627 10.909.675 2.829.132 5.864-1.224 10.034-1.733 5.62-3.745 10.637-4.627 15.448-.434 2.368-.471 4.945-.583 7.004-4.305-4.196-5.99-9.736-5.99-17.831-.001-3.382-2.751-6.124-6.142-6.123-3.389.003-6.135 2.743-6.136 6.123 0 11.056 3.233 21.576 11.898 28.594 7.844 7.473 27.791 4.711 27.791 16.708 0 3.386 4.956 5.034 8.347 5.034 3.478 0 7.855-2.325 7.855-5.034 0-13.612 14.345-21.885 37.96-21.849 3.392.005 6.144-2.734 6.149-6.116.006-3.383-2.738-6.13-6.13-6.136a78.226 78.226 0 0 0-4.741.145c2.64-6.209 3.811-13.045 3.569-20.429-.112-3.381-2.95-6.031-6.339-5.921-3.393.11-6.051 2.943-5.94 6.326.32 9.668-.042 18.301-7.245 22.852-2.048 1.293-4.429 2.415-6.687 2.415 1.753-4.768 3.077-9.801 3.619-15.226.346-3.462.383-7.575-.012-10.77-.613-4.95-1.353-10.564.526-14.793 1.688-3.642 5.47-5.167 11.023-5.167 3.389-.003 6.135-2.744 6.136-6.123.002-3.383-2.745-6.127-6.136-6.13-8.252 0-14.507 4.343-18.053 9.59-1.854-3.96-4.112-8.041-6.84-12.265a6.14 6.14 0 0 0-3.86-2.669 6.159 6.159 0 0 0-4.627.831z"></path>
</svg>;
const PalmTreeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" preserveAspectRatio="xMidYMid" viewBox="0 0 256 229">
    <path fill="#F9AB00" d="M128 228.542c9.895 0 17.91-8.015 17.91-17.91V55.413h-35.82v155.219c0 9.895 8.015 17.91 17.91 17.91Z"></path>
    <path fill="#5BB974" d="M199.356 112.053C180.043 92.755 151.193 88.845 128 100.307l76.669 76.67c3.164 3.163 8.612 1.91 9.955-2.344 6.746-21.357 1.657-45.64-15.268-62.58Z"></path>
    <path fill="#129EAF" d="M56.644 112.053C75.957 92.755 104.807 88.845 128 100.307l-76.669 76.67c-3.164 3.163-8.612 1.91-9.955-2.344-6.746-21.357-1.657-45.64 15.268-62.58Z"></path>
    <path fill="#AF5CF7" d="M193.67 52.548c-30.507 0-56.402 20-65.67 47.76h121.25c4.97 0 8.283-5.254 6.03-9.687-11.523-22.611-34.776-38.073-61.61-38.073Z"></path>
    <path fill="#FF8BCB" d="M140.671 20.101C119.09 41.682 114.926 74.114 128 100.307l85.743-85.743c3.523-3.522 2.15-9.582-2.582-11.119-24.148-7.836-51.52-2.313-70.49 16.656Z"></path>
    <path fill="#FA7B17" d="M115.329 20.101C136.91 41.682 141.074 74.114 128 100.307L42.257 14.564c-3.523-3.522-2.15-9.582 2.582-11.119 24.148-7.836 51.52-2.313 70.49 16.656Z"></path>
    <path fill="#4285F4" d="M62.33 52.548c30.507 0 56.402 20 65.67 47.76H6.75c-4.97 0-8.283-5.254-6.03-9.687C12.244 68.01 35.497 52.548 62.33 52.548Z"></path>
</svg>;
 const HtmlLog = () => <img
    src={htmlLogo}   // ✅
    alt={htmlLogo}  // ✅
    className="w-full" // ✅ same size keep
/>
    const PerplexityIcon = () => <svg width="1.8em" height="1.8em" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="paint0_linear_601_4643-fixed" x1="128" y1="0" x2="128" y2="256" gradientUnits="userSpaceOnUse">
                <stop stopColor="#EF786F"></stop>
                <stop offset="1" stopColor="#D8595E"></stop>
            </linearGradient>
            <linearGradient id="paint1_linear_601_4643-fixed" x1="78" y1="0.0000037012" x2="236" y2="256" gradientUnits="userSpaceOnUse">
                <stop stopColor="#9E7AFF"></stop>
                <stop offset="0.333333" stopColor="#FE8BBB"></stop>
                <stop offset="0.666667" stopColor="#FFBD7A"></stop>
                <stop offset="1" stopColor="#F8EAC3"></stop>
            </linearGradient>
        </defs>
        <rect width="256" height="256" rx="128" fill="url(#paint0_linear_601_4643-fixed)"></rect>
        <rect width="256" height="256" rx="128" fill="url(#paint1_linear_601_4643-fixed)"></rect>
        <path d="M124.157 193.675C123.939 193.783 123.722 193.837 123.505 193.837C123.287 193.837 122.852 193.837 122.2 193.837C120.678 193.837 118.884 193.567 116.818 193.025C114.862 192.591 112.905 191.995 110.948 191.236C109.099 190.586 107.469 189.828 106.055 188.961C104.751 188.094 103.935 187.335 103.609 186.685C103.501 185.167 103.446 183.596 103.446 181.97C103.446 180.345 103.446 178.773 103.446 177.256C103.446 165.118 104.316 152.438 106.055 139.217C107.904 125.995 110.893 111.69 115.025 96.3005C115.459 94.7833 115.894 92.8867 116.329 90.6108C116.873 88.2266 117.416 85.6798 117.96 82.9704C115.351 85.0296 112.252 88.335 108.665 92.8867C105.077 97.3301 101.272 102.64 97.2492 108.818C93.3354 114.887 89.3672 121.606 85.3446 128.975C81.4308 136.236 77.8431 143.66 74.5815 151.246C71.32 158.724 68.4933 166.148 66.1015 173.517C63.8185 180.887 62.4051 187.714 61.8615 194C56.6431 192.483 53.001 190.966 50.9354 189.448C48.9785 187.931 48 186.089 48 183.921C48 181.97 48.5979 179.207 49.7938 175.631C50.9897 172.054 52.6749 167.828 54.8492 162.951C57.0236 158.074 59.6872 152.655 62.84 146.695C65.9928 140.626 69.4718 134.123 73.2769 127.187C77.6256 119.276 81.8656 111.852 85.9969 104.916C90.2369 97.9803 94.3682 91.6946 98.3908 86.0591C102.413 80.4236 106.327 75.5468 110.132 71.4286C114.046 67.3104 117.906 64.1675 121.711 62C123.233 62 125.244 62.3793 127.745 63.1379C130.354 63.8966 132.854 64.8177 135.246 65.9015C137.747 66.9852 139.921 68.1232 141.769 69.3153C143.726 70.399 144.813 71.3202 145.031 72.0788C143.509 75.1133 141.715 79.665 139.649 85.734C137.584 91.803 135.464 98.6847 133.289 106.379C131.224 114.074 129.212 122.256 127.255 130.926C125.407 139.488 123.939 147.724 122.852 155.635C125.353 149.675 128.234 143.498 131.495 137.103C134.866 130.601 138.399 124.207 142.095 117.921C145.792 111.527 149.543 105.35 153.348 99.3892C157.262 93.4286 161.067 88.0099 164.763 83.133C168.459 78.1478 171.884 73.8128 175.037 70.1281C178.298 66.4434 181.179 63.734 183.68 62C185.202 62 187.213 62.3793 189.714 63.1379C192.323 63.8966 194.824 64.8177 197.215 65.9015C199.716 66.9852 201.89 68.1232 203.738 69.3153C205.695 70.399 206.783 71.3202 207 72.0788C203.521 78.2562 200.477 85.7882 197.868 94.6749C195.258 103.562 193.03 112.882 191.182 122.635C189.442 132.389 188.083 142.089 187.105 151.734C186.235 161.271 185.8 169.833 185.8 177.419C185.8 179.911 185.8 182.512 185.8 185.222C185.8 187.931 185.909 190.749 186.126 193.675C184.604 193.675 182.756 193.458 180.582 193.025C178.516 192.7 176.45 192.212 174.385 191.562C172.428 190.911 170.634 190.153 169.003 189.286C167.372 188.527 166.231 187.66 165.578 186.685C165.47 185.167 165.415 183.596 165.415 181.97C165.415 180.345 165.415 178.773 165.415 177.256C165.415 165.118 166.285 152.438 168.025 139.217C169.873 125.995 172.863 111.69 176.994 96.3005C177.429 94.7833 177.918 92.7241 178.462 90.1232C179.005 87.5222 179.549 84.8128 180.092 81.9951C177.048 83.5123 173.569 86.4384 169.655 90.7734C165.85 95 161.936 100.202 157.914 106.379C154 112.448 150.086 119.222 146.172 126.7C142.367 134.177 138.888 141.818 135.735 149.621C132.691 157.315 130.082 165.01 127.908 172.704C125.842 180.291 124.592 187.281 124.157 193.675Z" fill="white"></path>
    </svg>;
    const GitHubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>;




    const ReactLog = () => <img
        src={ReactLogo}   // ✅
        alt="React Logo"  // ✅
        className="w-full" // ✅ same size keep
    />



    const NotionIcon = () => <svg width="1.8em" height="1.8em" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.522 3.998H19.5V5.14h-5.978v3.62h5.61v1.141h-5.61v4.959h5.978v1.142H13.522c-2.43 0-4.32-1.926-4.32-4.356V8.354c0-2.43 1.89-4.356 4.32-4.356zm-4.01 1.142H4.5v13.718h2.09V5.14zm-.132 1.093v10.534c0 1.21.97 2.18 2.18 2.18h.01c1.21 0 2.18-.97 2.18-2.18V6.233c0-1.21-.97-2.18-2.18-2.18h-.01c-1.21 0-2.18.97-2.18 2.18z" />
    </svg>;
    const HashIcon = () => <svg width="2.2em" height="2.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 3L6 21" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 3L14 21" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 9H20" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 15H18" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>;
    const IconWrapper = ({
        children,
        className = "",
        isHighlighted = false,
        isHovered = false,
        animationDelay = 0
    }) => <div className={`
        backdrop-blur-xl rounded-2xl flex items-center justify-center transition-all duration-300 border
        ${isHighlighted ? 'dark:bg-gray-700/50 bg-gray-100/80 border-blue-400/50 dark:shadow-blue-500/20 shadow-blue-400/30 shadow-2xl animate-breathing-glow' : `dark:bg-white/5 bg-white/60 dark:border-white/20 border-gray-300/60 ${!isHovered && 'animate-float'}`}
        ${isHovered ? 'dark:bg-gray-600/50 bg-gray-200/80 border-blue-400/60 scale-110 dark:shadow-blue-400/30 shadow-blue-400/40 shadow-2xl' : 'dark:hover:bg-white/10 hover:bg-gray-100/80 dark:hover:border-white/20 hover:border-gray-300/60'}
        ${className}
    `} style={{
            animationDelay: `${animationDelay}s`
        }}>
            {children}
        </div>;
    const IconGrid = () => {
        const [hoveredId, setHoveredId] = useState(null);
        const outerIcons = [{
            id: 1,
            component: <SparkleIcon />
        }, {
            id: 2,
            component: <FigmaIcon />
        }, {
            id: 3,
            component: <CoralIcon />
        }, {
            id: 4,
            component: <ReactLog />
        }, {
            id: 5,
            component: <PalmTreeIcon />
        }, {
            id: 6,
            component: <GitHubIcon />
        }, {
            id: 7,
            component: <HtmlLog />
        }, {
            id: 8,
            component: <PerplexityIcon />
        }, {
            id: 9,
            component: <NotionIcon />
        }];
        const radius = 160;
        const centralIconRadius = 48;
        const outerIconRadius = 32;
        const svgSize = 400;
        const svgCenter = svgSize / 2;
        return (<div className="relative w-[400px] h-[400px] scale-75 md:scale-90 lg:scale-100">

            { }
            <svg width={svgSize} height={svgSize} className="absolute top-0 left-0">
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <g>
                    { }
                    {outerIcons.map((icon, i) => {
                        const nextIndex = (i + 1) % outerIcons.length;
                        const nextIcon = outerIcons[nextIndex];
                        const angle1 = (-90 + i * (360 / outerIcons.length)) * (Math.PI / 180);
                        const x1 = svgCenter + (radius - outerIconRadius) * Math.cos(angle1);
                        const y1 = svgCenter + (radius - outerIconRadius) * Math.sin(angle1);
                        const angle2 = (-90 + nextIndex * (360 / outerIcons.length)) * (Math.PI / 180);
                        const x2 = svgCenter + (radius - outerIconRadius) * Math.cos(angle2);
                        const y2 = svgCenter + (radius - outerIconRadius) * Math.sin(angle2);
                        const isLineActive = hoveredId === icon.id || hoveredId === nextIcon.id;
                        return <line key={`web-line-${icon.id}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={isLineActive ? '#3B82F6' : '#6B7280'} strokeWidth="1.5" className="transition-all duration-300 dark:stroke-gray-600" style={{
                            opacity: isLineActive ? 0.8 : 0.25
                        }} filter={isLineActive ? 'url(#glow)' : 'none'} />;
                    })}

                    { }
                    {outerIcons.map((icon, i) => {
                        const angleInDegrees = -90 + i * (360 / outerIcons.length);
                        const angleInRadians = angleInDegrees * (Math.PI / 180);
                        const startX = svgCenter + centralIconRadius * Math.cos(angleInRadians);
                        const startY = svgCenter + centralIconRadius * Math.sin(angleInRadians);
                        const endX = svgCenter + (radius - outerIconRadius) * Math.cos(angleInRadians);
                        const endY = svgCenter + (radius - outerIconRadius) * Math.sin(angleInRadians);
                        const isSpokeActive = hoveredId === icon.id;
                        return <line key={`spoke-line-${icon.id}`} x1={startX} y1={startY} x2={endX} y2={endY} stroke={isSpokeActive ? '#3B82F6' : '#6B7280'} strokeWidth="1.5" className="transition-all duration-300 dark:stroke-gray-600" style={{
                            opacity: isSpokeActive ? 1 : 0.25
                        }} filter={isSpokeActive ? 'url(#glow)' : 'none'} />;
                    })}
                </g>
            </svg>

            { }
            <div className="absolute rounded-full top-1/2 left-1/2">

                { }
                <div className="absolute -translate-x-1/2  rounded-full -translate-y-1/2 z-10">
                    <IconWrapper className="w-50 h-50 rounded-full " isHighlighted={true} animationDelay={0}>
                        <img className='rounded-full' src={photo} alt={photo} />
                    </IconWrapper>
                </div>

                { }
                {outerIcons.map((icon, i) => {
                    const angleInDegrees = -90 + i * (360 / outerIcons.length);
                    const angleInRadians = angleInDegrees * (Math.PI / 180);
                    const x = radius * Math.cos(angleInRadians);
                    const y = radius * Math.sin(angleInRadians);
                    const iconStyle = {
                        transform: `translate(${x}px, ${y}px)`
                    };
                    const isHovered = hoveredId === icon.id;
                    return <div key={icon.id} className="absolute z-10" style={iconStyle} onMouseEnter={() => setHoveredId(icon.id)} onMouseLeave={() => setHoveredId(null)}>
                        <div className="-translate-x-1/2 -translate-y-1/2 relative">
                            { }
                            <div className={`absolute inset-[-20px] bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-2xl transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

                            <IconWrapper className="w-16 h-16 overflow-hidden" isHovered={isHovered} animationDelay={i * 0.15}>
                                {icon.component}
                            </IconWrapper>
                        </div>
                    </div>;
                })}
            </div>
        </div>
        );
    };
    export default function Spider() {
        return <div className="w-full flex items-center justify-center font-sans p-4 sm:p-8 overflow-hidden">
            { }
            <style>
                {`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }

                @keyframes breathing-glow {
                    0% { box-shadow: 0 0 20px 0px rgba(59, 130, 246, 0.3); }
                    50% { box-shadow: 0 0 35px 10px rgba(59, 130, 246, 0.1); }
                    100% { box-shadow: 0 0 20px 0px rgba(59, 130, 246, 0.3); }
                }
                @keyframes breathing-glow-light {
                    0% { box-shadow: 0 0 20px 0px rgba(59, 130, 246, 0.2); }
                    50% { box-shadow: 0 0 35px 10px rgba(59, 130, 246, 0.05); }
                    100% { box-shadow: 0 0 20px 0px rgba(59, 130, 246, 0.2); }
                }
                .animate-breathing-glow {
                    animation: breathing-glow 3s ease-in-out infinite;
                }
                .dark .animate-breathing-glow {
                    animation: breathing-glow 3s ease-in-out infinite;
                }
                :not(.dark) .animate-breathing-glow {
                    animation: breathing-glow-light 3s ease-in-out infinite;
                }
            `}
            </style>

            { }
            <div className="relative z-10 container mx-auto flex items-center justify-center">
                <IconGrid />
            </div>
        </div>;
    }