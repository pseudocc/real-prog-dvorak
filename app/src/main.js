import sidebar_ctor from "./components/sidebar";
import page404_ctor from "./pages/404";
import course_ctor from "./pages/course";
import home_ctor from "./pages/home";
import basic_ctor, { lessons as basic_lessons } from "./pages/lessons/basic";
import router_init from "./router";
import keyboard from "keyboard";

import "@tutor/style.css" assert { type: "css" };
import "@keyboard/style.css" assert { type: "css" };
import lesson_ctor from "./pages/lessons/lesson";

function make_handler(title, ctor) {
  const obj = { title };
  Object.defineProperty(obj, "elem", {
    get() {
      if (!this._elem) {
        [this._elem] = ctor();
      }
      return this._elem;
    },
    enumerable: true,
  });
  return obj;
}

function make_lesson(i, lesson, prev, next) {
  function wrapper_ctor() {
    return lesson_ctor(i, lesson.name, lesson.lines, prev, next);
  }
  const obj = {};
  Object.defineProperty(obj, "elem", {
    get() {
      if (!this._elem) {
        [this._elem, this.voix] = wrapper_ctor();
      }
      this.voix.keyboard.native.appendChild(window.keyboard.elem);
      window.tutor = this.voix.tutor;
      window.tutor.sub = receive.bind(window.keyboard.handler);
      this.voix.tutor.restart();
      this.voix.tutor.focus();
      return this._elem;
    },
    enumerable: true,
  });
  return obj;
}

function get_routes() {
  const page404 = make_handler(null, page404_ctor);
  const home = make_handler("Home", home_ctor);
  const courses = make_handler("Courses", course_ctor);
  const basic = make_handler("Basic", basic_ctor);

  /**
   * @type {import('./router').Routes}
   */
  let routes = {
    "/": home,
    "/courses/": courses,
    "/basic/": { ...basic, secondary: true },
  };

  routes = Object.keys(routes).reduce(
    (p, c) => {
      p[__APP__.base + c] = routes[c];
      return p;
    },
    { 404: page404 }
  );

  for (const course of [basic_lessons]) {
    for (let i = 0; i < course.length; i++) {
      const lesson = course[i];
      lesson.href = __APP__.base + lesson.href;
    }
    for (let i = 0; i < course.length; i++) {
      const lesson = course[i];
      const prev = course[i - 1]?.href;
      const next = course[i + 1]?.href;
      routes[lesson.href] = make_lesson(i + 1, lesson, prev, next);
    }
  }

  return routes;
}

function receive() {
  const key = window.tutor.current?.key;
  this.select(key);
}

window.onload = function () {
  const routes = get_routes();

  const page = document.createElement("div");
  page.className = "page";

  window.route = router_init(routes, page);

  let [kbd, kbdx] = keyboard();
  kbd.style.margin = "auto";

  const kbdh = {
    mapping: {},
    selected: null,
    select(key) {
      if (key === this.selected) {
        return;
      }
      if (this.selected) {
        this.mapping[this.selected].forEach((v) => (v.selected = false));
      }
      if (key) {
        this.mapping[key].forEach((v) => (v.selected = true));
      }
      this.selected = key;
    },
  };

  for (const key in kbdx) {
    if (key.length === 1) {
      const lower = key.toLowerCase();
      if (lower >= "a" && lower <= "z") {
        kbdh.mapping[lower.toUpperCase()] = [kbdx[key], kbdx["Shift"]];
      }
      kbdh.mapping[lower] = [kbdx[key]];
    } else if (key.length === 2) {
      kbdh.mapping[key[0]] = [kbdx[key], kbdx["Shift"]];
      kbdh.mapping[key[1]] = [kbdx[key]];
    } else {
      kbdh.mapping[key] = [kbdx[key]];
    }
  }

  window.keyboard = {
    elem: kbd,
    handler: kbdh,
  };

  const [sidebar] = sidebar_ctor(routes);

  const app = document.getElementById("app");
  app.appendChild(sidebar);
  app.appendChild(page);
};
