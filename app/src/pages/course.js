import vanix from "vanix";
import css from "@styles/page.module.css";

export default function course_ctor() {
  /** @type {Vanix.Arch} */
  const arch = {
    tag: "div",
    props: [
      {
        name: "className",
        value: css.container,
      },
    ],
    children: [
      {
        tag: "p",
        props: [
          {
            name: "className",
            value: "title",
          },
          {
            name: "textContent",
            value: "Courses",
          },
        ],
      },
      {
        tag: "p",
        props: [
          {
            name: "className",
            value: css.text,
          },
          {
            name: "textContent",
            value:
              "This site contains four Dvorak keyboard layout courses, a basic one, and one for Pogrammer Dvoark, and real world programming.",
          },
        ],
      },
      {
        tag: "p",
        props: [
          {
            name: "className",
            value: css.text,
          },
          {
            name: "textContent",
            value:
              "To begin the courses, navigate to certain ones by clicking the menu entry in the side navigation bar.",
          },
        ],
      },
    ],
  };

  return vanix(arch);
}
