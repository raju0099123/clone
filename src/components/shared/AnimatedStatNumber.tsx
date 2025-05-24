
'use client';

import type { CSSProperties } from 'react';
import { useState, useEffect } from 'react';

interface AnimatedStatNumberProps {
  metric: string;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}

const AnimatedStatNumber: React.FC<AnimatedStatNumberProps> = ({ 
  metric, 
  duration = 2000, 
  className,
  style
}) => {
  const [count, setCount] = useState(0);

  // Extract numeric part and suffix/prefix
  const numericMatch = metric.match(/(\d[\d,]*)/);
  const numericValue = numericMatch ? parseInt(numericMatch[1].replace(/,/g, ''), 10) : 0;
  
  let prefix = '';
  let suffix = '';

  if (numericMatch) {
    const numericStr = numericMatch[1];
    const metricIndex = metric.indexOf(numericStr);
    prefix = metric.substring(0, metricIndex);
    suffix = metric.substring(metricIndex + numericStr.length);
  } else {
    // If no number found, display original metric
    return <p className={className} style={style}>{metric}</p>;
  }

  useEffect(() => {
    // If the target is 0, and the metric string doesn't explicitly start with "0"
    // (e.g. to differentiate from an unparsed metric), just set to 0 and don't animate.
    if (numericValue === 0 && !metric.startsWith("0")) { 
      setCount(0);
      return;
    }
     // If metric is "0" or "0+", set initial count to 0.
    if (metric.startsWith("0") && numericValue === 0) {
        setCount(0);
    }

    let startTimestamp: number | null = null;
    const animationFrameIdRef = { current: 0 };

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      setCount(Math.floor(progress * numericValue));

      if (progress < 1) {
        animationFrameIdRef.current = requestAnimationFrame(step);
      } else {
        setCount(numericValue); // Ensure final value is exact
      }
    };
    animationFrameIdRef.current = requestAnimationFrame(step);
    
    return () => {
      cancelAnimationFrame(animationFrameIdRef.current);
    };
  }, [metric, numericValue, duration]); // Re-run animation if these change

  return (
    <p className={className} style={style}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </p>
  );
};

export default AnimatedStatNumber;
