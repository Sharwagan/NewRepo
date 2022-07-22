/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteContact = /* GraphQL */ `
  mutation DeleteContact($contactID: String!) {
    deleteContact(contactID: $contactID) {
      contactID
      contactName
      mobile
      address
    }
  }
`;
export const createContact = /* GraphQL */ `
  mutation CreateContact($createContactInput: CreateContactInput!) {
    createContact(createContactInput: $createContactInput) {
      contactID
      contactName
      mobile
      address
    }
  }
`;
export const updateContact = /* GraphQL */ `
  mutation UpdateContact($updateContactInput: UpdateContactInput!) {
    updateContact(updateContactInput: $updateContactInput) {
      contactID
      contactName
      mobile
      address
    }
  }
`;
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty($propertyID: String!) {
    deleteProperty(propertyID: $propertyID) {
      propertyID
      contactID
      HouseType
      bdrm
      sqft
    }
  }
`;
export const createProperty = /* GraphQL */ `
  mutation CreateProperty($createPropertyInput: CreatePropertyInput!) {
    createProperty(createPropertyInput: $createPropertyInput) {
      propertyID
      contactID
      HouseType
      bdrm
      sqft
    }
  }
`;
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty($updatePropertyInput: UpdatePropertyInput!) {
    updateProperty(updatePropertyInput: $updatePropertyInput) {
      propertyID
      contactID
      HouseType
      bdrm
      sqft
    }
  }
`;
