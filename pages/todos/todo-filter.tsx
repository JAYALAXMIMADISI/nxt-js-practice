import { useRecoilState } from "recoil";
import {todoListFilterState} from './input'
import { Box, FormLabel, Select, TagLabel } from "@chakra-ui/react";

export default function TodoListFilters() {
  const [filter, setFilter] = useRecoilState<any>(todoListFilterState);

  const updateFilter = ({ target: { value } }: any) => {
    setFilter(value);
  };

  return (
    <Box mt='20px'>
     
      Filter:<select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </Box>
  );
}
