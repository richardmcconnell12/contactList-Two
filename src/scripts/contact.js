// This module containsa template that creates contact HTML components so the contactList can append them to DOM

// Definitely has a function

const contact = {
    makeDOMcomponentFromObject(contactObject) {
        // return  document fragment with the info from the contactObject that got passed in to this function

        let contactDocFrag = document.createDocumentFragment()

        let contactName = document.createElement ("h3");
        contactName.textContent = contactObject.name

        let contactAddress = document.createElement ("p");
        contactAddress.textContent = contactObject.address

        let contactNumber = document.createElement ("p");
        contactNumber.textContent = contactObject.number

        contactDocFrag.appendChild(contactName);
        contactDocFrag.appendChild(contactAddress);
        contactDocFrag.appendChild(contactNumber)

        return contactDocFrag


    }
}

export default contact