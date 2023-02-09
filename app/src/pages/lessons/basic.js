import vanix from "vanix";
import css from "@styles/page.module.css";

export const lessons = [
  {
    name: "Introducing U and H: Home row, Index fingers",
    href: "/basic/lesson1/",
    lines: [
      "uuuu hhhh uuuu hhhh uuuu hhhh uuuu hhhh",
      "uuuu hhhh uuuu hhhh uuuu hhhh uuuu hhhh",
      "uh uh uh uh",
      "hu hu hu hu",
      "huh huh huh huh",
      "uh huh uh huh uh huh uh huh",
      "h u uh hu uhh huh uhh",
      "h u uh hu uhh huh uhh",
    ],
  },
];

export default function basic_ctor() {
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
            value: "Basic Dvorak course",
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
            name: "innerHTML",
            value:
              "Originate from <a href='http://gigliwood.com/abcd/lessons/'>ABCD</a>.",
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
              "This course is mainly designed to help you get used to the basic Dvorak layout for alphabet and common puncutations like (,.;). Now, Let's get started!",
          },
        ],
      },
    ],
  };

  for (let i = 0; i < lessons.length; i++) {
    const lesson = lessons[i];
    arch.children.push({
      tag: "a",
      props: [
        {
          name: "textContent",
          value: `Lesson ${i + 1}: lesson.name`,
        },
        {
          name: "href",
          value: __APP__.base + lesson.href,
        },
        {
          name: "onclick",
          value: window.route,
        },
      ],
    });
  }

  return vanix(arch);
}
