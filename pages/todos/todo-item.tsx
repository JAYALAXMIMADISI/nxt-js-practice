import { useRecoilState } from "recoil";
import { todoListState } from "./input";
import { Box, Button, Checkbox, Input } from "@chakra-ui/react";

export default function TodoItem({ item }: any) {
  const [todoList, setTodoList] = useRecoilState<any>(todoListState);
  const index = todoList.findIndex((listItem: any) => listItem === item);

  const editItemText = ({ target: { value } }: any) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <>
      <Box display="flex" justifyContent="center">
        <Input
          type="text"
          value={item.text}
          onChange={editItemText}
          w="200px"
          m="10px"
        />

        <Checkbox
          colorScheme="check"
          size="lg"
          onChange={toggleItemCompletion}
          isChecked={item.isComplete}
        ></Checkbox>
        <Button
          onClick={deleteItem}
          m="10px"
          size="xs"
          mt="18px"
          colorScheme="brand"
        >
          X
        </Button>
      </Box>
    </>
  );
}

function replaceItemAtIndex(arr: any, index: any, newValue: any) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: any, index: any) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
