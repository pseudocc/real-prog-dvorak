import vanix from "vanix";
import css from "@styles/page.module.css";
import tutor from "tutor";
import { prev_ctor, next_ctor } from "../../components/pager";

function main_ctor(i, title, lines) {
  /** @type {Vanix.Arch} */
  const arch = {
    tag: "div",
    props: [
      {
        name: "className",
        value: css.main,
      },
      {
        name: "style",
        value: "flex: 1",
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
            value: `Lesson ${i}`,
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
            value: title,
          },
        ],
      },
      {
        tag: "div",
        props: [
          {
            name: "style",
            value: "margin: 16px; width: 100%",
          },
        ],
        children: [
          {
            ctor: tutor,
            name: "tutor",
            ctor_args: [lines],
            props: [
              {
                name: "style",
                value: "margin: auto",
              },
            ],
          },
          {
            tag: "div",
            name: "keyboard",
            props: [
              {
                name: "style",
                value: "padding: 16px",
              },
            ],
          },
        ],
      },
    ],
  };

  return vanix(arch);
}

export default function lesson_ctor(i, title, lines, prev, next) {
  /** @type {Vanix.Arch} */
  const arch = {
    tag: "div",
    props: [
      {
        name: "className",
        value: css.container,
      },
      {
        name: "style",
        value: "display: flex",
      },
    ],
    children: [
      { ctor: prev_ctor, ctor_args: [prev] },
      { ctor: main_ctor, ctor_args: [i, title, lines] },
      { ctor: next_ctor, ctor_args: [next] },
    ],
  };

  return vanix(arch);
}
