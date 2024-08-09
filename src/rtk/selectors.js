import { createSelector } from 'reselect';

const selectTodos = state => state.todos;

const selectCompletedTodos = createSelector(
  [selectTodos], // Selector đầu vào
  todos => todos.filter(todo => todo.completed) // Hàm biến đổi
);
