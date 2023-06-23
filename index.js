const { Command } = require("commander");
const program = new Command();

program
  .option("-a --action <type>")
  .option("-i --id <type>")
  .option("-n --name <type>")
  .option("-e --email <type>")
  .option("-p --phone <type>");

program.parse(process.argv);

const argv = program.opts();

const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list": {
      const list = await listContacts();
      console.log(list);
      break;
    }
    case "get": {
      const contact = await getContactById(id);
      console.log(contact);
      break;
    }
    case "add": {
      const contact = await addContact(name, email, phone);
      console.log(contact);
      break;
    }
    case "remove": {
      const contact = await removeContact(id);
      console.log(contact);
      break;
    }
    default: {
      console.warn("Unknown action type");
    }
  }
};

// invokeAction({ action: "list" });

// invokeAction({ action: "get", id: "qdggE76Jtbfd9eWJHrssH" });

// invokeAction({
//   action: "add",
//   name: "Lucie",
//   email: "lucie@gmail.com",
//   phone: "000000",
// });

// invokeAction({ action: "remove", id: "C9sjBfCo4UJCWjzBnOtxl" });

invokeAction(argv);
