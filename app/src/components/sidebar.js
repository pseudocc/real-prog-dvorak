import vanix from "vanix";
import css from "@styles/sidebar.module.css";

/**
 * @param {import('../router').Routes} routes
 */
export default function ctor(routes) {
  const children = [];
  for (const path in routes) {
    const route = routes[path];
    if (!route?.title) {
      continue;
    }
    const classes = [css.route];
    if (route.secondary) {
      classes.push(css.secondary);
    }
    /** @type {Vanix.Arch<HTMLAnchorElement>} */
    const child = {
      tag: "a",
      props: [
        {
          name: "textContent",
          value: route.title,
        },
        {
          name: "className",
          value: classes.join(" "),
        },
        {
          name: "href",
          value: path,
        },
        {
          name: "onclick",
          value: window.route,
        },
      ],
    };
    children.push(child);
  }

  /** @type {Vanix.Arch} */
  const arch = {
    tag: "nav",
    props: [
      {
        name: "className",
        value: css.sidebar,
      },
    ],
    children,
  };

  return vanix(arch);
}
