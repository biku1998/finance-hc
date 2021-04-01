const app = require("./app");
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`notification service running at : ${port}`);
});
