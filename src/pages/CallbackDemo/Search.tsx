import { memo } from 'react';
import { useRenderCount } from '../../hooks/useRenderCount';

interface SearchProps {
  onChange: (text: string) => void;
  users: string[]
}

function Search({ onChange }: SearchProps) {
  useRenderCount('Search')

  return (
    <input
      type='text'
      placeholder='Search users...'
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
// memo: wraps component and intercepts render and checks if prop is different from one to teh next.
// checks if onChange is different from prev render, if it is its going to re-render
export default memo(Search);