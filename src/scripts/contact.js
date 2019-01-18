// This module containsa template that creates contact HTML components so the contactList can append them to DOM

// Definitely has a function

const contact = {
    makeDOMcomponentFromObject(contactObject) {
        console.log(contactObject)
        // return  document fragment with the info from the contactObject that got passed in to this function

        let contactArticle = document.createElement ("article");

        let contactName = document.createElement ("h3");
        contactName.textContent = contactObject.name

        let contactAddress = document.createElement ("p");
        contactAddress.textContent = contactObject.address

        let contactNumber = document.createElement ("p");
        contactNumber.textContent = contactObject.number

        contactArticle.appendChild(contactName);
        contactArticle.appendChild(contactAddress);
        contactArticle.appendChild(contactNumber)

        return contactArticle


    }
}

export default contact