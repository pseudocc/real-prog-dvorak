import vanix from "vanix";
import css from "@styles/page.module.css";

export const lessons = [
  {
    index: "1",
    name: "C Programming Language - Includes",
    href: "/real/lesson1/",
    lines: [
      "#ifndef MATH_H",
      "#define MATH_H",
      "#include <llvm-c/Core.h>",
      "#endif",
      '#include "list.h"',
      "#include <time.h>",
      "#include <stdio.h>",
      "#include <stdlib.h>",
      "#include <unistd.h>",
      "#include <llvm-c/ExecutionEngine.h>",
      "#include <llvm-c/BitReader.h>",
      "#include <llvm-c/Core.h>",
      "#ifndef DRIVER_H",
      "#define DRIVER_H",
      "#endif",
    ],
  },
  {
    index: "2",
    name: "C Programming Language - Linked List",
    href: "/real/lesson2/",
    lines: [
      "void list_invert(list_t** ihead) {",
      "  list_t* curr = *ihead;",
      "  while (curr->next) {",
      "    list_t* next = curr->next;",
      "    curr->next = next->next;",
      "    next->next = *ihead;",
      "    *ihead = next;",
      "  }",
      "}",
    ],
  },
  {
    index: "3",
    name: "Rust Programming Language - Linked List",
    href: "/real/lesson3/",
    lines: [
      "use std::fmt;",
      "",
      "impl<T: fmt::Display> fmt::Display for List<T> {",
      "  fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {",
      "    let mut iter = self.into_iter();",
      "    let head = iter.next();",
      "    if let Some(value) = head {",
      "      // append to the formatter with a '?'",
      '      write!(f, "{}", value)?;',
      "      for value in iter {",
      '        write!(f, " -> {}", value)?;',
      "      }",
      '      write!(f, "")',
      "    } else {",
      '      write!(f, "None")',
      "    }",
      "  }",
      "}",
    ],
  },
];

function lesson_item_ctor(lesson) {
  const arch = {
    tag: "div",
    props: [
      {
        name: "style",
        value: "padding: 16px",
      },
    ],
    children: [
      {
        tag: "a",
        props: [
          {
            name: "textContent",
            value: `Lesson ${lesson.index}: ${lesson.name}`,
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
      },
    ],
  };

  return vanix(arch);
}

export default function real_ctor() {
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
            value: "Real world course",
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
              "This course contains a lot of real world source code from my other repositories, which covers the folloing programming languages: C, Rust.",
          },
        ],
      },
    ],
  };

  for (const lesson of lessons) {
    arch.children.push({
      ctor: lesson_item_ctor,
      ctor_args: [lesson],
    });
  }

  return vanix(arch);
}
