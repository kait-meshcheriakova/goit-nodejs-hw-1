const contacts = require("./contacts");
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case "get":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);
    case "add": {
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);
    }
    case "remove": {
      const deleteContact = await contacts.removeContact(id);
      return console.log(deleteContact);
    }
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "1DEXoP8AuCGYc1YgoQ6hw" });
// invokeAction({
//   action: "add",
//   name: "kfjnfvj ghfjfkf",
//   email: "gjgn@fgg.vbg",
//   phone: "(186) 568-3720",
// });
invokeAction({ action: "remove", id: "drsAJ4SHPYqZeG-83QTVW" });
