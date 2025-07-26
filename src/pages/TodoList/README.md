# Todo List Challenge

## Challenge Description

You're given some existing HTML for a Todo List app. Add the following functionality to the app:

## Requirements

- **Add new tasks** on clicking the "Submit" button.
- The `<input>` field should be **cleared upon successful addition**.
- **Remove tasks** from the Todo List upon clicking the "Delete" button.

## Notes

- The focus of this question is on **functionality, not styling**. There's no need to write any custom CSS.
- You may modify the markup (e.g. adding ids, data attributes, replacing some tags, etc), but the result should remain the same visually.
- You may want to think about ways to improve the user experience of the application and implement them (you get bonus credit for doing that during interviews).

## Starting HTML Structure

```jsx
export default function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" placeholder="Add your task" />
        <div>
          <button>Submit</button>
        </div>
      </div>
      <ul>
        <li>
          <span>Walk the dog</span>
          <button>Delete</button>
        </li>
        <li>
          <span>Water the plants</span>
          <button>Delete</button>
        </li>
        <li>
          <span>Wash the dishes</span>
          <button>Delete</button>
        </li>
      </ul>
    </div>
  );
}
```

## Expected Functionality

1. **Adding Tasks**: When a user types in the input field and clicks "Submit", the task should be added to the list
2. **Input Clearing**: After successfully adding a task, the input field should be cleared
3. **Deleting Tasks**: Each task should have a "Delete" button that removes that specific task from the list
4. **Input Validation**: Empty tasks should not be added to the list

## Bonus UX Improvements

Consider implementing these user experience enhancements:

- **Enter Key Support**: Allow users to add tasks by pressing Enter in the input field
- **Empty State**: Show a message when there are no tasks in the list
- **Input Focus**: Automatically focus the input field after adding a task
- **Task Validation**: Prevent adding duplicate tasks or empty strings
- **Keyboard Navigation**: Allow users to navigate through tasks with arrow keys

## Implementation Tips

- Use React state to manage the list of tasks
- Consider using `useState` hook for managing component state
- Think about the data structure for storing tasks (array of strings, array of objects, etc.)
- Handle edge cases like empty input, duplicate tasks, etc.
- Make sure the UI remains responsive and user-friendly

## File Structure

```
src/pages/TodoList/
├── Index.tsx              # Main challenge page
├── TodoListStarter.tsx    # Starting HTML structure
├── TodoListSolution.tsx   # Complete solution
├── TodoList.module.scss   # Styling
└── README.md             # This file
```

## Getting Started

1. Navigate to the Todo List challenge page
2. Review the starting HTML structure in `TodoListStarter.tsx`
3. Implement the required functionality
4. Test your implementation with various scenarios
5. Consider adding UX improvements for bonus points

Good luck! 🚀 