import React, { forwardRef, ForwardedRef } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

type HeadingProps = React.HTMLProps<HTMLHeadingElement> & {
  level: HeadingLevel;
};

type HeadingClassNames = {
  [key in HeadingLevel]: string;
};

const headingClassNames: HeadingClassNames = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  // Add classNames for other heading levels as needed
};

const Heading = forwardRef(
  (
    { level, children }: HeadingProps,
    ref: ForwardedRef<HTMLHeadingElement>
  ) => {
    const HeadingTag = level;
    const classNames = headingClassNames[level];

    return (
      <HeadingTag ref={ref} className={classNames}>
        {children}
      </HeadingTag>
    );
  }
);

type ParagraphProps = React.HTMLProps<HTMLParagraphElement> & {};
const Paragraph = forwardRef(
  (
    { children, ...rest }: ParagraphProps,
    ref: ForwardedRef<HTMLParagraphElement>
  ) => {
    return (
      <p ref={ref} className="leading-7 [&:not(:first-child)]:mt-6" {...rest}>
        {children}
      </p>
    );
  }
);

Heading.displayName = "Heading";
Paragraph.displayName = "Paragraph";
export { Heading, Paragraph };
