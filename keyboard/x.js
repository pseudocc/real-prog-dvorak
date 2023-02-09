import vanix from "vanix";
import keyboard_css from "@styles/keyboard.module.css";
import label_css from "@styles/label.module.css";
import keyboard from "./keyboard.json" assert { type: "json" };

const KEYBOARD_WIDTH = 16;
const KEY_SIZE = 54;

/**
 * @param {import('@ijprest/kle-serial').Key} key
 * @param {{ [key: string]: boolean }} keycaps
 */
function keycap_ctor(key, keycaps) {
  const labels = [];
  const key_chars = [];

  for (let i = 0; i < key.labels.length; i++) {
    const l = key.labels[i];
    if (!l) {
      continue;
    }

    const color = key.textColor[i] || key.default.textColor;
    const size = key.textSize[i] || key.default.textSize;

    /** @type {Vanix.Arch} */
    const label = {
      tag: "span",
      props: [
        {
          name: "className",
          value: label_css["label" + i],
        },
        {
          name: "innerText",
          value: l,
        },
        {
          name: "style",
          value: [`color: ${color}`, `font-size: ${6 + 2 * size}px`].join(";"),
        },
      ],
    };
    key_chars.push(l);
    labels.push(label);
  }

  let name = key_chars.join("");
  if (keycaps[name]) {
    name += "R";
  }
  keycaps[name] = true;

  const styles = [`background-color: ${key.color}`];
  if (key.width != 1) {
    styles.push(`width: ${Math.round(KEY_SIZE * key.width)}px`);
  }

  /** @type {Vanix.Arch} */
  const arch = {
    tag: "div",
    props: [
      {
        name: "className",
        value: keyboard_css.keycap,
      },
      {
        name: "style",
        value: styles.join(";"),
      },
    ],
    children: [
      {
        tag: "div",
        props: [
          {
            name: "className",
            value: keyboard_css.key,
          },
        ],
        children: labels,
      },
    ],
  };

  const [elem] = vanix(arch);
  const vrap = {
    toggle_selected: () => {
      elem.classList.toggle(keyboard_css.selected);
    },
  };
  const voix = { [name]: vrap };
  Object.defineProperty(vrap, "selected", {
    get: () => elem.classList.contains(keyboard_css.selected),
    set: (value) => {
      if (elem.classList.contains(keyboard.selected) == value) {
        return;
      }
      vrap.toggle_selected();
    },
    enumerable: true,
  });

  return [elem, voix];
}

function row_ctor(keys, keycaps) {
  /** @type {Vanix.Arch} */
  const arch = {
    tag: "div",
    props: [
      {
        name: "className",
        value: keyboard_css.row,
      },
    ],
    children: keys.map((v) => ({
      ctor: keycap_ctor,
      ctor_args: [v, keycaps],
    })),
  };
  const [elem, voix] = vanix(arch);

  return [elem, voix];
}

function keyboard_ctor(keyboard) {
  const keycaps = {};
  /** @type {Vanix.Arch} */
  const arch = {
    tag: "div",
    props: [
      {
        name: "className",
        value: keyboard_css.container,
      },
      {
        name: "style",
        value: `width: ${KEYBOARD_WIDTH * KEY_SIZE}px`,
      },
    ],
    children: keyboard.map((v) => ({
      ctor: row_ctor,
      ctor_args: [v, keycaps],
    })),
  };

  return vanix(arch);
}

export default function dvorak_ctor() {
  const [elem, voix] = keyboard_ctor(keyboard);
  delete voix.native;
  return [elem, voix];
}
