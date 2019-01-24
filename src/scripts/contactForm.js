// Appends a form to the DOM

// Listens for button click and sends user to database (contactCollection)

import contactCollection from "./contactCollection"
import contactList from "./contactList";

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

        let contactSaveButton = document.createElement("button");
        contactSaveButton.textContent = "Save New Contact"
        contactSaveButton.setAttribute("class", "contactSave")

        contactSaveButton.addEventListener("click", this.handleNewContact)

        let contactFormFragment = document.createDocumentFragment()
        contactFormFragment.appendChild(formHeader);
        contactFormFragment.appendChild(contactNameField);
        contactFormFragment.appendChild(contactAddressField);
        contactFormFragment.appendChild(contactNumberField);
        contactFormFragment.appendChild(contactSaveButton);

        let formArticle = document.querySelector(".form");
        formArticle.appendChild(contactFormFragment)
    },

    handleNewContact(event) {
        let inputContactName = document.querySelector("#contactName").value;
        let inputContactAddress = document.querySelector("#contactAddress").value;
        let inputContactNumber = document.querySelector("#contactNumber").value;

        let newContact = {
            name: inputContactName,
            address: inputContactAddress,
            number: inputContactNumber
        }
        contactCollection.postNewContact(newContact)
        .then(response => {
        contactList.getAndAppendContacts()
        })
    }
}

export default contactForm


