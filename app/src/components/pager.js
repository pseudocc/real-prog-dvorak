import vanix from "vanix";
import css from "@styles/pager.module.css";

function pager_ctor(left, href) {
  const classes = [css.pager];
  classes.push(href ? css.active : css.inactive);
  if (!left) {
    classes.push(css.right);
  }

  /** @type {Vanix.Arch} */
  const arch = {
    tag: "div",
    props: [
      {
        name: "className",
        value: classes.join(" "),
      },
    ],
    children: [
      {
        tag: "a",
        props: [
          {
            name: "href",
            value: href ? app.base + href : "",
          },
        ],
        children: [
          {
            tag: "img",
            props: [
              {
                name: "src",
                value: `/caret-${left ? "left" : "right"}.svg`,
              },
              {
                name: "width",
                value: 48,
              },
            ],
          },
        ],
      },
    ],
  };

  return vanix(arch);
}

export function prev_ctor(href) {
  return pager_ctor(true, href);
}

export function next_ctor(href) {
  return pager_ctor(false, href);
}
