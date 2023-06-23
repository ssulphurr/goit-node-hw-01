const { listContacts, getContactById, addContact } = require("./contacts");

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
  }
};

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "qdggE76Jtbfd9eWJHrssH" });
invokeAction({
  action: "add",
  name: "Lucie",
  email: "lucie@gmail.com",
  phone: "000000",
});
