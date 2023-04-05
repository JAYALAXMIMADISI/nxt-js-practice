import { selector, useRecoilValue } from "recoil";
import { todoListState } from "./input";
import { Box, ListIcon, ListItem, UnorderedList } from "@chakra-ui/react";

export default function TodoListStats() {
  const todoListStatsState = selector({
    key: "TodoListStats",
    get: ({ get }) => {
      const todoList: any = get(todoListState);
      const totalNum = todoList.length;
      const totalCompletedNum = todoList.filter(
        (item: any) => item.isComplete
      ).length;
      const totalUncompletedNum = totalNum - totalCompletedNum;
      const percentCompleted =
        totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

      return {
        totalNum,
        totalCompletedNum,
        totalUncompletedNum,
        percentCompleted,
      };
    },
  });

  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <Box mt={5}>
      <UnorderedList>
        <ListItem listStyleType="none" key="whatever-key" mt={2}>
          Total items: {totalNum}
        </ListItem>
        <ListItem listStyleType="none" key="whatever-key" mt={2}>
          Items completed: {totalCompletedNum}
        </ListItem>
        <ListItem listStyleType="none" key="whatever-key" mt={2}>
          Items not completed: {totalUncompletedNum}
        </ListItem>
        <ListItem listStyleType="none" key="whatever-key" mt={2}>
          Percent completed: {formattedPercentCompleted}
        </ListItem>
      </UnorderedList>
    </Box>
  );
}
