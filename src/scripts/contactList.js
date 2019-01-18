// This module appends list of contacts to the DOM

// By taking in the data from contactCollection and interating over to create contact components

// Finds DOM element to append things to with querySelector

// That appends each contact component to that element

import contactCollection from "./contactCollection"
import contact from "./contact"

const contactList = {
    getAndAppendContacts() {
        contactCollection.getAllContacts()
        .then(aBunchofContacts => {
            console.log(aBunchofContacts)
            aBunchofContacts.forEach(eachContact => {
                contact.makeDOMcomponentFromObject(eachContact)
            })
        })
    }
}

// Take the array in aBunchOfContacts

export default contactList