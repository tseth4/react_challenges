export const initialItems = new Array(29_999_999) // Create an array with 29,999,999 empty slots
  .fill(0) // Fill all slots with the value 0 so `map` can operate on them
  .map((_, i) => {
    return {
      // Each item has a unique `id` based on its index
      id: i,
      // Only the very last item is marked as selected (true), others are false
      isSelected: i === 29_999_998,
    };
  });


export function shuffle<T>(array: T[]): T[] {
  const result = [...array]; // Make a shallow copy so the original array isn't mutated

  // Loop backwards from the last element
  for (let i = result.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at i and j
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result; // Return the shuffled array
}
