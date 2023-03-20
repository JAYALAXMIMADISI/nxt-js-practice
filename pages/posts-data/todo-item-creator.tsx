import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {todoListState} from './input'

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState<any>(todoListState);

  const addItem:any = () => {
    setTodoList((oldTodoList: any) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }: any) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}
