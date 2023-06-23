const { readfile } = require("./contacts");

const invokeAction = async () => {
  const list = await readfile();
  console.log(list);
};

invokeAction();
