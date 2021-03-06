// This module contains the API fetch calls
// What to do first
// Add comments to your modules to say what the module is for

// Make sure you have an API/ database.json (make sure it's in right place)
// Put some contacts in it (ALso make sure they have right properties as required by the exercise description)

// Write a fetch call to get all contacts from database
// be able to console.log them

const contactCollection = {

    getAllContacts() {
        return fetch ("http://localhost:8088/contacts")
        .then(response => response.json())
    },

    postNewContact(newContactToSave) {
           return fetch ("http://localhost:8088/contacts", {
                    method: "POST",
                    headers: {
                            "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newContactToSave)
            })
    },

    deleteContact(contactsId) {
            return fetch (`http://localhost:8088/contacts/${contactsId}`, {
                    method: "DELETE",
                    headers: {
                            "Content-Type": "applcation/json"
                    }
            })
    },

    getContact(contactsId) {
        return fetch (`http://localhost:8088/contacts/${contactsId}`)
        .then(response => response.json())
    },

    putExistingContacts(contactsId, contactsToEdit) {
            console.log(contactsId)
            return fetch (`http://localhost:8088/contacts/${contactsId}`, {
                    method: "PUT",
                    headers: {
                            "Content-Type": "application/json"
                    },
                    body: JSON.stringify(contactsToEdit)
            })
    }
}
export default contactCollection


