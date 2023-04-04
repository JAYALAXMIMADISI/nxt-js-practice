import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {todoListState} from './input'
import { Box, Button, Input } from "@chakra-ui/react";

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState<any>(todoListState);

  const addItem:any = () => {
    if(inputValue!="")
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
    <Box mt='20px'>
      <Input type="text" value={inputValue} onChange={onChange} placeholder="Enter user name" w='200px' h='30px' size='lg'/>
      <Button colorScheme='blue' variant='solid' p={2} m={4} w='100px' h='30px' onClick={addItem}>Add</Button>    </Box>
  );
}

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}
