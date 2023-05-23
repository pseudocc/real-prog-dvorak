import kle from "@ijprest/kle-serial";
import fs from "node:fs";

const meta = {
  user: "pseudocc",
  gist: "dbb92bdd7c9b13380194a4e436c2265f",
  commit: "e2468c1342565692582ffaae2e3d413b7660ec45",
  file: "real-prog-dvorak.kbd.json",
};

async function fetch_keyboard() {
  const { user, gist, commit, file } = meta;
  const url = `https://gist.githubusercontent.com/${user}/${gist}/raw/${commit}/${file}`;

  const resp = await fetch(url);
  const json = await resp.json();

  const kbd = kle.Serial.deserialize(json);
  const rows = [];

  for (const key of kbd.keys) {
    if (rows.length - 1 != key.y) {
      rows.push([]);
    }
    let row = rows[rows.length - 1];
    row.push({
      color: key.color,
      default: key.default,
      textColor: key.textColor,
      textSize: key.textSize,
      labels: key.labels,
      color: key.color,
      width: key.width,
      y: key.y,
    });
  }

  return rows;
}

const data = JSON.stringify(await fetch_keyboard());
fs.writeFileSync("keyboard.json", data);
