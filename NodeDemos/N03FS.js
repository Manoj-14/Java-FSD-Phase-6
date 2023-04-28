const fs = require("fs");

fs.writeFileSync("noteFile.txt", "This file is created by nodejs\n");
fs.appendFileSync("noteFile.txt", "content appending from nodejs");
fs.readFileSync("noteFile.txt", (data) => {
  console.log(data);
});
