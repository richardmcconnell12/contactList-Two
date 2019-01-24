import contactCollection from "./contactCollection"
import contactList from "./contactList"

const contactEditForm = {
    createAndAppendForm(contactId, contactObjectToEdit) {

        let contactEditNameField = document.createElement("fieldset");

        let contactEditNameLabel = document.createElement("label");
        contactEditNameLabel.textContent = "Name"
        let contactEditNameInput = document.createElement("input");
        contactEditNameInput.value = contactObjectToEdit.name


        contactEditNameField.appendChild(contactEditNameLabel);
        contactEditNameField.appendChild(contactEditNameInput);

        let contactEditAddressField = document.createElement("fieldset");

        let contactEditAddressLabel = document.createElement("label");
        contactEditAddressLabel.textContent = "Address"
        let contactEditAddressInput = document.createElement("input");
        contactEditAddressInput.value = contactObjectToEdit.address

        contactEditAddressField.appendChild(contactEditAddressLabel);
        contactEditAddressField.appendChild(contactEditAddressInput);

        let contactEditNumberField = document.createElement("fieldset");

        let contactEditNumberLabel = document.createElement("label");
        contactEditNumberLabel.textContent = "Phone Number"
        let contactEditNumberInput = document.createElement("input");
        contactEditNumberInput.value = contactObjectToEdit.number

        contactEditNumberField.appendChild(contactEditNumberLabel);
        contactEditNumberField.appendChild(contactEditNumberInput);
        // Add update button
        let updateButton = document.createElement("button");
        updateButton.textContent = "Update Contact"

        updateButton.addEventListener("click", () => {
            let editedContact = {
                name: contactEditNameInput.value,
                address: contactEditAddressInput.value,
                number: contactEditNumberInput.value
            }

            contactCollection.putExistingContacts(contactObjectToEdit.id, editedContact)
            .then(response => {
                contactList.getAndAppendContacts(response)
            })
        })

        let contactItemArticle = document.querySelector(".output");
        while (contactItemArticle.firstChild) {
            contactItemArticle.removeChild(contactItemArticle.firstChild);
        }
        contactItemArticle.appendChild(contactEditNameField);
        contactItemArticle.appendChild(contactEditAddressField);
        contactItemArticle.appendChild(contactEditNumberField);
        contactItemArticle.appendChild(updateButton);
    }
}

export default contactEditForm