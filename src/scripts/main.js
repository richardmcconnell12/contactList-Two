// It's the central point because this is where browserify starts

// Calls functions

//Imports contactForm and ContactList

import contactList from "./contactList";
import contactForm from "./contactForm"

contactList.getAndAppendContacts();
contactForm.createAndAppendForm();