import vanix from "vanix";
import css from "@styles/tutor.module.css";

export const MAGIC = "\u1129";

class Tutor {
  #chars;
  #index;

  constructor() {
    this.#chars = [];
    this.#index = -1;
  }

  start() {
    if (this.#index < 0) {
      this.index = 0;
    }
  }

  restart() {
    this.index = 0;
  }

  push(c) {
    c.reset();
    this.#chars.push(c);
  }

  get index() {
    return this.#index;
  }

  set index(value) {
    if (value !== this.#index) {
      this.#index = value;
      if (this.sub) {
        this.sub();
      }
      this.current?.now();
    }
    return value;
  }

  get previous() {
    return this.#chars[this.#index - 1];
  }

  get current() {
    return this.#chars[this.#index];
  }

  forward(key) {
    const c = this.current;
    if (!c) {
      return;
    }
    if (c.key === key) {
      c.good();
    } else {
      c.bad();
    }
    this.index++;
  }

  backward() {
    const p = this.previous;
    if (p) {
      this.current?.reset();
      this.index--;
    }
  }
}

function char_ctor(char, tutor) {
  /** @type {Vanix.Arch} */
  const arch = {
    tag: "span",
    props: [
      {
        name: "textContent",
        value: char === MAGIC ? " " : char,
      },
    ],
  };

  const [elem, voix] = vanix(arch);
  if (char === " ") {
    elem.classList.add("space");
  }

  if (char !== MAGIC) {
    const vrap = {
      status: css.none,
      key: char,
      to(status) {
        elem.classList.remove(this.status);
        this.status = status;
        elem.classList.add(this.status);
      },
      reset: () => vrap.to(css.none),
      good: () => vrap.to(css.good),
      bad: () => vrap.to(css.bad),
      now: () => vrap.to(css.now),
    };
    tutor.push(vrap);
  }

  return [elem, voix];
}

function line_ctor(line, tutor, eof) {
  const children = [];
  for (const c of line) {
    children.push({
      ctor: char_ctor,
      ctor_args: [c, tutor],
    });
  }
  /** @type {Vanix.Arch} */
  const arch = {
    tag: "p",
    props: [
      {
        name: "className",
        value: css.line,
      },
    ],
    children,
  };

  const [elem, voix] = vanix(arch);
  if (!eof) {
    const vrap = {
      key: "Enter",
      reset: () => (elem.classList = css.line),
      good: () => vrap.reset(),
      bad: () => {
        vrap.reset();
        elem.classList.add(css.eol, css.bad);
      },
      now: () => {
        vrap.reset();
        elem.classList.add(css.eol);
      },
    };
    tutor.push(vrap);
  }

  return [elem, voix];
}

/**
 * @param {string[]} lines
 * @param {number} width
 * @returns {[HTMLElement, Tutor]}
 */
export default function tutor_ctor(lines, width = 800) {
  const tutor = new Tutor();
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
        value: `width: ${width}`,
      },
      {
        name: "tabIndex",
        value: 0,
      },
    ],
    children: lines.map((v, i) => ({
      ctor: line_ctor,
      ctor_args: [v, tutor, i == lines.length - 1],
    })),
  };

  const [elem] = vanix(arch);
  elem.onkeydown = function (ev) {
    if (ev.altKey || ev.metaKey) {
      return;
    }
    if (ev.key === "r" && ev.ctrlKey) {
      tutor.restart();
    } else if (ev.key.length == 1 || ev.key == "Enter") {
      tutor.forward(ev.key);
    } else if (ev.key == "Backspace") {
      tutor.backward();
    }
  };

  return [elem, tutor];
}
