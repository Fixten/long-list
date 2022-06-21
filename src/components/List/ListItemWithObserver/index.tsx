import { ReactElement, useEffect, useRef } from "react";

import { ListItem } from "../ListItem";
import { useObserver } from "../useObserver";

type Props = {
  children: ReactElement;
  onIntersect: () => void;
};

export function ListItemWithObserver(props: Props) {
  const { children, onIntersect } = props;
  const ref = useRef<HTMLLIElement>(null);

  const isIntersecting = useObserver(ref);

  useEffect(() => {
    if (isIntersecting) onIntersect();
  }, [isIntersecting, onIntersect]);

  return <ListItem ref={ref}>{children}</ListItem>;
}
