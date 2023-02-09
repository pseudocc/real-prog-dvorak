import vanix from "vanix";
import css from "@styles/page.module.css";

export default function home_ctor() {
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
            value: "Prologue",
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
              "I feel like I am typing all the time, even if I am off work, I write varies of side projects. I am with my keyboard for at least 40 hours per week. So, find myself a real awesome keyboard layout is vital.",
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
              'I used the QWERTY keyboard layout for more than 20 years. My typing speed is fast, but I want to be even faster, to be blazingly fast. And what is more, I use NeoVim as my text editor, motions like "$" and "^" requires me to press <shift> and another key together, to some of the degree, it is not efficient.',
          },
        ],
      },
      {
        tag: "p",
        props: [
          {
            name: "className",
            value: "title",
          },
          {
            name: "textContent",
            value: "Summary",
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
              "The real-prog-dvorak is a modified version of the programmer Dvorak. This site have some lessons to help you master it. There is also a playground that you can specify the text to be typed.",
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
            value: "Keyboard layout (68 keys):",
          },
        ],
      },
      {
        tag: "img",
        props: [
          {
            name: "src",
            value: __APP__.base + "/real-prog-dvorak.png",
          },
          {
            name: "style",
            value: "max-width: 100%",
          },
        ],
      },
    ],
  };

  return vanix(arch);
}
