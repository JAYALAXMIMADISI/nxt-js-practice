import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import TodoItemCreator from "./todo-item-creator";
import TodoItem from "./todo-item";
import TodoListStats from "./todo-stats";
import TodoListFilters from "./todo-filter";
import { Box, Center } from "@chakra-ui/react";

const todoListState = atom({
  key: "TodoList",
  default: [],
});

const todoListFilterState = atom({
  key: "TodoListFilter",
  default: "Show All",
});

const filteredTodoListState = selector({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);
    console.log("check users list", list);

    switch (filter) {
      case "Show Completed":
        return list.filter((item: any) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item: any) => !item.isComplete);
      default:
        return list;
    }
  },
});

export default function InputPage() {
  const textState = atom({
    key: "textState",
    default: "",
  });

  const charCountState = selector({
    key: "charCountState",
    get: ({ get }: any) => {
      const text = get(textState);
      return text.length;
    },
  });

  const [text, setText] = useRecoilState(textState);
  const count = useRecoilValue(charCountState);
  const todoList = useRecoilValue(filteredTodoListState);

  const onChange = (event: any) => {
    setText(event.target.value);
  };

  return (
    <>
      <Box w="50%" textAlign="center">
        <Center fontWeight="bold" fontSize="20px">
          Todo List
        </Center>

        <TodoListStats />
        <TodoListFilters />
        <TodoItemCreator />

        {todoList.map((todoItem: any) => (
          <TodoItem item={todoItem} key={todoItem.id} />
        ))}
      </Box>
    </>
  );
}

export { todoListState, todoListFilterState };
