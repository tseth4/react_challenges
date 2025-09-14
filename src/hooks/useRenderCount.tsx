// hooks/useRenderCount.ts
import { useRef, useEffect } from 'react';

export function useRenderCount(componentName?: string) {
  const count = useRef(1); // Start at 1 since first render is happening

  useEffect(() => {
    if (componentName) {
      console.log(`🌀 ${componentName} rendered ${count.current} times`);
    } else {
      console.log(`🌀 Render count: ${count.current}`);
    }
    count.current++;
  });

  return count.current;
}
