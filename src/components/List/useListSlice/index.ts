import { useCallback, useState } from "react";

import { ItemList } from "../ItemList";

const buffer = 10;
const listItemsBatch = 50;
const step = listItemsBatch - buffer * 3;

export function useListSlice(fullList: ItemList) {
  const [currentList, setCurrentList] = useState<ItemList>(() =>
    fullList.slice(0, listItemsBatch)
  );

  const onLowIntersect = useCallback(() => {
    setCurrentList((prev) => {
      const startIndex = fullList.indexOf(prev[0]);
      if (startIndex === -1) return prev;
      else {
        const newStartIndex = startIndex - step;
        const newStartIndexSafe = newStartIndex >= 0 ? newStartIndex : 0;
        return fullList.slice(
          newStartIndexSafe,
          newStartIndexSafe + listItemsBatch
        );
      }
    });
  }, [fullList]);

  const onHighIntersect = useCallback(() => {
    setCurrentList((prev) => {
      const endIndex = fullList.indexOf(prev[prev.length - 1]);
      if (endIndex === -1) return prev;
      else {
        const newEndIndex = endIndex + step;
        const newEndIndexSafe =
          newEndIndex < fullList.length ? newEndIndex : fullList.length - 1;
        return fullList.slice(
          newEndIndexSafe - listItemsBatch,
          newEndIndexSafe
        );
      }
    });
  }, [fullList]);

  function getTypeOfTarget(index: number): "low" | "high" | void {
    if (buffer === index) return "low";
    else if (listItemsBatch - buffer === index) return "high";
  }

  return {
    currentList,
    getTypeOfTarget,
    onLowIntersect,
    onHighIntersect,
  };
}
