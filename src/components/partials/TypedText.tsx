import React, { useEffect, useRef } from "react";
import { Typed } from "react-typed"; // this is a JS class, not a React component

type TypedTextProps = {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
  className?: string;
};

const TypedText: React.FC<TypedTextProps> = ({ strings, typeSpeed = 60, backSpeed = 30, loop = true, className }) => {
  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<any>(null);

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings,
        typeSpeed,
        backSpeed,
        loop,
      });
    }

    return () => {
      typed.current?.destroy();
    };
  }, [strings, typeSpeed, backSpeed, loop]);

  return <span ref={el} className={className} />;
};

export default TypedText;
