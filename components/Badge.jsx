'use client'
import CountUp from "react-countup";
const Badge = ({
    containerStyles,
    icon,
    endCountNum,
    badgeText
}) => {
    return (
        <div className={`badge ${containerStyles} flex items-center gap-x-2 border`}>
           <div className="text-3xl text-primary">{icon}</div>
           <div className="flex items-center gap-x-2">
            <div className="font-semibold text-4xl leading-none text-primary">
                <CountUp end={endCountNum} delay={1.4} duration={4}/>
            </div>
            <div>{badgeText}</div>
           </div>
        </div>
    );
};

export default Badge;