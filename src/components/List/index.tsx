import { getListItems } from "./getListItems";
import { ListItem } from "./ListItem";
import { ListItemWithObserver } from "./ListItemWithObserver";
import { useListSlice } from "./useListSlice";

const list = getListItems();

export function List() {
  const { currentList, getTypeOfTarget, onHighIntersect, onLowIntersect } =
    useListSlice(list);

  return (
    <ul style={{ height: 400, width: 300, overflow: "auto" }}>
      {currentList.map((v, i) => {
        const typeOfTarget = getTypeOfTarget(i);

        return typeOfTarget ? (
          <ListItemWithObserver
            key={`${v.id}-${typeOfTarget}`}
            onIntersect={
              typeOfTarget === "high" ? onHighIntersect : onLowIntersect
            }
          >
            {v.node}
          </ListItemWithObserver>
        ) : (
          <ListItem key={v.id}>{v.node}</ListItem>
        );
      })}
    </ul>
  );
}
