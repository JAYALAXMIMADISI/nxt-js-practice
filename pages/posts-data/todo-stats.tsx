import { selector, useRecoilValue } from "recoil";
import {todoListState} from './input'


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
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  );
}
