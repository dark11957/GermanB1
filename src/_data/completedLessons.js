const fs = require("node:fs");
const path = require("node:path");

module.exports = function () {
  const sourceDir = path.join(process.cwd(), "content", "lessons");
  return fs.readdirSync(sourceDir)
    .filter(name => /^L\d{2}\.md$/.test(name))
    .map(name => name.slice(0, 3))
    .sort();
};
