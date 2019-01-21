// This module appends list of contacts to the DOM

// By taking in the data from contactCollection and interating over to create contact components

// Finds DOM element to append things to with querySelector

// That appends each contact component to that element

import contactCollection from "./contactCollection"
import contact from "./contact"


const contactList = {
    getAndAppendContacts() {

        contactCollection.getAllContacts()
        // contactCollection.contactLabel()
        .then(aBunchofContacts => {
            console.log(aBunchofContacts)

            let largeDocFrag = document.createDocumentFragment()

            // take the array in aBunchOfContacts, and call a function from contact.js to create DOM elements for each object
            aBunchofContacts.forEach(eachContact => {
                let contactHtml = contact.makeDOMcomponentFromObject(eachContact)
                console.log(contactHtml)
                // put small document fragment into bigger document fragment
                largeDocFrag.appendChild(contactHtml)

            })
            // Get a reference to the DOM with querySelector and then appear the BIG BOX to the output element
            let displayContainer = document.querySelector(".output")
            // Allows new contact to be posted without reiterating all contacts again
            while (displayContainer.firstChild) {
                displayContainer.removeChild(displayContainer.firstChild);
            }
            displayContainer.appendChild(largeDocFrag)
        })
    }
}

// Take the array in aBunchOfContacts

export default contactList