import contactCollection from "./contactCollection";
import contactList from "./contactList"

// This module contains a template that creates contact HTML components so the contactList can append them to DOM

// Definitely has a function

const contact = {
    makeDOMcomponentFromObject(contactObject) {
        // return  document fragment with the info from the contactObject that got passed in to this function

        let contactDocFrag = document.createDocumentFragment()

        contactDocFrag.querySelector(".container");

        let contactNameTag = document.createElement("h3");
        contactNameTag.textContent += "Contact:"
        contactNameTag.textContent += " "
        let contactName = document.createElement ("h3");
        contactName.textContent += "Contact: "
        contactName.textContent += " "
        contactName.textContent += contactObject.name


        let contactAddressTag = document.createElement("p");
        contactAddressTag.textContent += "Address:"
        contactAddressTag.textContent += " "
        let contactAddress = document.createElement ("p");
        contactAddress.textContent += "Address:"
        contactAddress.textContent += " "
        contactAddress.textContent += contactObject.address

        let contactNumberTag = document.createElement("h3");
        contactNumberTag.textContent += "Phone Number:"
        contactNumberTag.textContent += " "
        let contactNumber = document.createElement ("p");
        contactNumber.textContent += "Phone Number:"
        contactNumber.textContent += " "
        contactNumber.textContent += contactObject.number

        // Create delete button
        let deleteContactButton = document.createElement("button")
        deleteContactButton.textContent = "Delete Contact"
        deleteContactButton.setAttribute("id", `contacts--${contactObject.Id}`)
        deleteContactButton.addEventListener("click", () => {
            let contactId = contactObject.id
            contactCollection.deleteContact(contactId)
            .then(response => {
                contactList.getAndAppendContacts()
            })
        })

        contactDocFrag.appendChild(contactName);
        contactDocFrag.appendChild(contactAddress);
        contactDocFrag.appendChild(contactNumber)
        contactDocFrag.appendChild(deleteContactButton);

        return contactDocFrag
    }
}

export default contact

