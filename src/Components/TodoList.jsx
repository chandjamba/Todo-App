import TodoItem from "./TodoItem";
import styles from "./todoList.module.css";
export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos.sort((a, b) => b.done - a.done);
  return (
    <div className={styles.list }>
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
