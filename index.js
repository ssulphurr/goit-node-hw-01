const { listContacts, getContactById } = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list": {
      const list = await listContacts();
      console.log(list);
    }
    case "get": {
      const contact = await getContactById(id);
      console.log(contact);
    }
  }
};

// invokeAction({ action: "list" });
invokeAction({ action: "get", id: "qdggE76Jtbfd9eWJHrssH" });
