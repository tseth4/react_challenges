import { useEffect, useMemo, useState } from 'react';

import { initialItems } from './utils/utils';
import { useRenderCount } from '../../hooks/useRenderCount';

interface DemoProps { }


// useMemo is a React Hook that helps you optimize performance by memoizing the result of a computation—so React only re-computes it when its dependencies change.

// 🧠 When to use it:
// Use useMemo when:
// You have a slow or expensive calculation.
// You want to avoid recalculating the same result on every render unless inputs change.

function UseMemoDemo({ }: DemoProps) {
  useRenderCount('UseMemoDemo');

  const [count, setCount] = useState(0);
  // items is a huge array created once using initialItems.
  // Using useState(initialItems) here makes sure initialItems is not recalculated on every render.
  // Even better would be: useState(() => initialItems) for lazy initialization.
  const [items] = useState(initialItems);

  useEffect(() => {
    console.log("items changed")
  }, [items])

  // You're finding the item that was initialized as isSelected: true.
  // Because items never changes, this .find() only runs once (on mount).
  // Even if count changes, this memoized value is reused.
  // ✅ This is a good use of useMemo — the computation is expensive and the input (items) doesn't change.
  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items],
  );
  // BAD USE
  // count doesnt move because items hasnt changed. we need to add count to update selected item
  // This is incorrect if you want to find the item based on count.
  // Because count is not in the dependency array, React doesn't recompute when count changes.
  // So it will always return the item where id === 0, even if count is incremented.
  const selectedItem2 = useMemo(
    () => items.find((item) => item.id === count),
    [items],
  );
  // Update with count to work
  const selectedItem3 = useMemo(
    () => items.find((item) => item.id === count),
    [items, count],
  );

  // we actually dont need it
  const selectedItem4 = items.find((item) => item.id === count);


  // When not to use. If used too much can cause performance issues. only use when necessary.

  return (
    <div className='tutorial'>
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem3?.id}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default UseMemoDemo;