import vanix from "vanix";
import css from "@styles/page.module.css";

export default function page404_ctor() {
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
            value: 404,
          },
        ],
      },
      {
        tag: "p",
        props: [
          {
            name: "className",
            value: css.note,
          },
          {
            name: "textContent",
            value: "The page you are looking for does not exist.",
          },
        ],
      },
    ],
  };

  return vanix(arch);
}
