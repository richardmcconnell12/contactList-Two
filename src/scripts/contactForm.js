// Appends a form to the DOM

// Listens for button click and sends user to database (contactCollection)

import contactCollection from "./contactCollection"

const contactForm = {
    createAndAppendForm() {
        // Creating the HTML form
        // Creates header on top of the form page
        let formHeader = document.createElement("h2");
        formHeader.textContent = "Add a New Contact"
        // Creates the fieldset for user input
        let contactNameField = document.createElement("fieldset");
        // Creates the input text fields for user input
        let contactNameLabel = document.createElement("label");
        contactNameLabel.setAttribute("for", "contactName");
        contactNameLabel.textContent = "Name"
        let contactNameInput = document.createElement("input");
        contactNameInput.setAttribute("id", "contactName");
        contactNameInput.setAttribute("name", "contactName")
        // Appends the user fieldset and input boxes to the DOM
        contactNameField.appendChild(contactNameLabel);
        contactNameField.appendChild(contactNameInput);

        let contactAddressField = document.createElement("fieldset");

        let contactAddressLabel = document.createElement("label");
        contactAddressLabel.textContent = "Address"
        contactAddressLabel.setAttribute("for", "contactAddress");
        let contactAddressInput = document.createElement("input");
        contactAddressInput.setAttribute("id", "contactAddress");
        contactAddressInput.setAttribute("name", "contactAddress");

        contactAddressField.appendChild(contactAddressLabel);
        contactAddressField.appendChild(contactAddressInput);

        let contactNumberField = document.createElement("fieldset");

        let contactNumberLabel = document.createElement("label");
        contactNumberLabel.textContent = "Phone Number"
        contactNumberLabel.setAttribute("for", "contactNumber");
        let contactNumberInput = document.createElement("input");
        contactNumberInput.setAttribute("id", "contactNumber");
        contactNumberInput.setAttribute("name", "contactNumber");

        contactNumberField.appendChild(contactNumberLabel);
        contactNumberField.appendChild(contactNumberInput);



        let contactFormFragment = document.createDocumentFragment()
        contactFormFragment.appendChild(formHeader);
        contactFormFragment.appendChild(contactNameField);
        contactFormFragment.appendChild(contactAddressField);
        contactFormFragment.appendChild(contactNumberField);
        
        let formArticle = document.querySelector(".output");
        formArticle.appendChild(contactFormFragment)
    },

    handleNewContact(event) {
        let inputContactName = document.querySelector("#contactName");
        let inputContactAddress = document.querySelector("#contactAddress");
        let inputContactNumber = document.querySelector("#contactNumber");

        let newContact = {
            name: inputContactName,
            address: inputContactAddress,
            number: inputContactNumber
        }

        contactCollection.postNewContact(newContact)
    }
}

export default contactForm