/**
 * @typedef {object} Route
 * @property {HTMLElement} elem
 * @property {string} title
 *
 * @typedef {{ [key: string]: Route}} Routes
 */

/**
 * @param {Routes} routes
 * @param {HTMLElement} page
 */
export default function router_init(routes, page) {
  function route(event) {
    event = event || window.event;
    if (event.target.href) {
      event.preventDefault();
    }
    window.history.pushState({}, 0, event.target.href);
    relocate();
  }

  function may_redirect() {
    if (window.location.search.includes("?/")) {
      const href = window.location.href.replace("?/", "");
      route({ target: { href }, preventDefault: () => 0 });
    } else {
      relocate();
    }
  }

  async function relocate() {
    let path = window.location.pathname;
    if (!path.endsWith("/")) {
      path += "/";
    }
    const route = routes[path] || routes[404];
    if (page.hasChildNodes()) {
      page.removeChild(page.firstChild);
    }
    page.appendChild(route.elem);
  }

  may_redirect();
  window.onpopstate = relocate;

  return route;
}
