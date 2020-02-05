export const addAllContacts = ( allContacts ) => ({
  type: 'ADD_ALL_CONTACTS',
  payload: allContacts
})

export const filterByLetter = ( letter ) => ({
  type: 'FILTER_BY_LETTER',
  payload: letter
})

export const filterBySearch = ( searchStr ) => ({
  type: 'FILTER_BY_SEARCH',
  payload: searchStr
})

export const removeAllFilters = () => ({
  type: 'REMOVE_FILTERS'
})

export const addContactDetails = (contact) => ({
  type: 'ADD_CONTACT_DETAILS',
  payload: contact
})

export const filterConnections = (search) => ({
  type: 'FILTER_CONNECTIONS',
  payload: search
})