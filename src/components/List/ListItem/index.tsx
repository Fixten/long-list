import { forwardRef, ReactElement } from "react";

type Props = {
  children: ReactElement;
};

export const ListItem = forwardRef<HTMLLIElement, Props>((props, ref) => {
  const { children } = props;

  return (
    <li style={{ borderBottom: "1px black dashed" }} ref={ref}>
      {children}
    </li>
  );
});
