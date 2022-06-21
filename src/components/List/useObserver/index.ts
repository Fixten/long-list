import { RefObject, useEffect, useRef, useState } from "react";

export function useObserver(ref: RefObject<HTMLLIElement>) {
  const observer = useRef<null | IntersectionObserver>(null);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) =>
      setIsIntersecting(!!entries.find((v) => v.isIntersecting))
    );
    return () => observer.current?.disconnect();
  }, []);

  useEffect(() => {
    const target = ref.current;
    if (target) observer.current?.observe(target);
    return () => {
      if (target) observer.current?.unobserve(target);
    };
  }, [ref]);

  return isIntersecting;
}
