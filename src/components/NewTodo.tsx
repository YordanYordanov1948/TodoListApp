import React, { useRef } from "react";

type NewTodoProps = {
    onAdd: (text: string) => void 
}

const NewTodo: React.FC <NewTodoProps> = props => {
  const inputTextRef = useRef<HTMLInputElement>(null);
  const todoSumbit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputTextRef.current!.value;
    props.onAdd(enteredText);
  };
  return (
    <form onSubmit={todoSumbit}>
      <div>
        <label htmlFor="todo">Todo</label>
        <input type="text" id="list" ref={inputTextRef} />
      </div>
      <button type="submit"> Submit</button>
    </form>
  );
};

export default NewTodo;
