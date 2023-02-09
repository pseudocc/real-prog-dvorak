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
    event.preventDefault();
    window.history.pushState({}, 0, event.target.href);
    relocate();
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

  relocate();
  window.onpopstate = relocate;

  return route;
}
