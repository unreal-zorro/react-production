export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();
  cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
  cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'adssdf' },
    body: {
      id: '4',
      first: 'test',
      lastname: 'user',
      age: 30,
      currency: 'RUB',
      country: 'Russia',
      city: 'City',
      username: 'testuser',
      avatar: 'https://img.freepik.com/premium-vector/young-smiling-man-adam-avatar-' +
        '3d-vector-people-character-illustration-cartoon-minimal-style_365941-687.jpg'
    }
  });
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      updateProfile: (firstname: string, lastname: string) => Chainable<void>;
      resetProfile: (profileId: string) => Chainable<void>;
    }
  }
}
