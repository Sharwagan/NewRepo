/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContact = /* GraphQL */ `
  query GetContact($contactID: String!) {
    getContact(contactID: $contactID) {
      contactID
      contactName
      mobile
      address
    }
  }
`;
export const listContacts = /* GraphQL */ `
  query ListContacts {
    listContacts {
      contactID
      contactName
      mobile
      address
    }
  }
`;
export const getProperty = /* GraphQL */ `
  query GetProperty($propertyID: String!) {
    getProperty(propertyID: $propertyID) {
      propertyID
      contactID
      HouseType
      bdrm
      sqft
    }
  }
`;
export const listPropertys = /* GraphQL */ `
  query ListPropertys {
    listPropertys {
      propertyID
      contactID
      HouseType
      bdrm
      sqft
    }
  }
`;
