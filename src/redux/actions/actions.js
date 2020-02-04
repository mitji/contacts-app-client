export const addAllContacts = ( allContacts ) => ({
  type: 'ADD_ALL_CONTACTS',
  payload: allContacts
})

export const addContactDetails = ( contact ) => ({
  type: 'ADD_CONTACT_DETAILS',
  payload: contact
})

export const filterByLetter = ( letter ) => ({
  type: 'FILTER_BY_LETTER',
  payload: letter
})