import { useCallback, useState } from 'react';

import { shuffle } from './utils/utils';

import Search from './Search';
import { useRenderCount } from '../../hooks/useRenderCount';
interface DemoProps { }

const allUsers = [
  'john',
  'alex',
  'george',
  'simon',
  'james',
];
// 1. We search which sets state of users
// 2. everytime we set state causes the component to rerender.
// 3. to prevent search from rererendering we use useCallback to make sure its the same function
// 4. We also use useMemo inside search

function UseCallBackDemo({ }: DemoProps) {
  useRenderCount('UseCallBackDemo')
  const [users, setUsers] = useState(allUsers);

  // This is causing Search to rerender. Functions are different on every render by default. content is not different.
  const handleSearch = (text: string) => {
    // console.log(users[0]);
    const filteredUsers = allUsers.filter((user) =>
      user.includes(text),
    );
    setUsers(filteredUsers);
  }
  // search does nothing with users so we dont actually care to get Search rerender if we shuffle users
  const handleSearch2 = useCallback(
    (text: string) => {
      // stale users, useCallback = function stays the same on every rerender
      // console.log(users[0])
      const filteredUsers = allUsers.filter((user) =>
        user.includes(text),
      );
      setUsers(filteredUsers);
    },
    // when the function should be diffrent
    [],
  );
  // when we want to console log the users. its going to keep logging john even if the list gets shuffled.
  // So if we want to interact with the users we need to add users as a dependency
  // 💯 useCallback becomes pointless in handleSearch3 if it's changing every render anyway.
  const handleSearch3 = useCallback(
    (text: string) => {
      console.log(users[0])
      const filteredUsers = allUsers.filter((user) =>
        user.includes(text),
      );
      setUsers(filteredUsers);
    },
    // when the function should be diffrent
    [users],
  );

  return (
    <div className='tutorial'>
      <div className='align-center mb-2 flex'>
        <button onClick={() => setUsers(shuffle(allUsers))}>
          Shuffle
        </button>

        <Search users={users} onChange={handleSearch3} />
      </div>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
export default UseCallBackDemo