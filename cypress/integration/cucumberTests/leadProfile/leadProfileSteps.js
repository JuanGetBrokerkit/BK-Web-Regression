import { Given, When,And, Then } from 'cypress-cucumber-preprocessor/steps'
import 'cypress-xpath';


Given('I visit the login page', () => {
    cy.visit('https://next.getbrokerkit.com/users/sign_in')
})

When('I submit valid login credentials', () => {
    cy.contains('Sign in with Google').click()
    cy.contains('Leads').click()
    cy.contains('Lead4 T2367').click()
  })

And('The user selects email', () => {
    cy.get('a[href="#email-sent"]').click();
  })

And('The user selects text', () => {
    ///Sign in con text
    cy.get('a[href="#log-text-message"]').click();
  })
And('The user selects phone', () => {
    ///Sign in con #phone-call
    cy.get('a[href="#phone-call"]').click();
  })
And('The user selects note', () => {
    ///Sign in con #general-note
    cy.get('a[href="#general-note"]').click();

})

And('The user verifies the regression', () => {
    cy.wait(3000); // wait 3sec
    // Select the iframe with TinyMCE
cy.get('iframe').then(($iframe) => {
    const iframeDoc = $iframe.contents()[0];
    const iframeBody = iframeDoc.body;
    cy.wrap(iframeBody).clear();
    cy.wrap(iframeBody).type('Tu texto aquí');
    /// Edit fonts, size, color
    cy.get('.tox-toolbar__group').within(() => {
        cy.get('button[aria-label="Fonts"]').click();
      });
      cy.get('div').contains('Comic Sans MS').click();
      cy.get('button[aria-label="Font sizes"]').click();
      cy.get('div').contains('14pt').click();

cy.get('div.tox-toolbar__group') // Choose the main container
  .find('div.tox-split-button').eq(2) .find('span.tox-split-button__chevron') .click(); 
  cy.get('div[data-mce-color="#E03E2D"]').click();
  cy.get('div.tox-toolbar__group').find('div.tox-split-button').eq(3).find('span.tox-split-button__chevron').click();
  cy.get('div[data-mce-color="#FBEEB8"]').click();
  cy.wrap(iframeBody).type('Tu texto aquí{enter}{enter}{enter}');
  cy.get('button[aria-label="Increase indent"]').click();

///Add Image
  cy.get('button[aria-label="Insert/edit image"]').click();
  cy.contains('Upload').click()
  // Path image
const imagePath = '/Brokerkit.png';
//  Dropzone element
cy.get('.tox-dropzone').within(() => {
    // Get file input
    cy.get('input[type="file"]').then(input => {
        // Add image
        cy.fixture(imagePath, 'base64').then(fileContent => {
            const blob = Cypress.Blob.base64StringToBlob(fileContent);
            const file = new File([blob], 'Brokerkit.png', { type: 'image/png' });
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            input[0].files = dataTransfer.files;
            cy.wrap(input).trigger('change', { force: true });
        });
    });
});
cy.wait(3000); // Wait 3 seconds
cy.get('button[title="Save"]').click();

//Edit link
cy.get('button[aria-label="Insert/edit link"]').click();
cy.get('.tox-form__controls-h-stack .tox-control-wrap .tox-textfield').type('www.google.com');
cy.get('button[title="Save"]').click();
cy.contains('Yes').click()

//status Bar
cy.get('.css-h0tfi8-control').click().type('Entry{enter}');
/// Calendar Follow up
cy.get('input[type="text"][placeholder="Follow Up Task"]').click();
cy.get('div[aria-label="Fri Apr 26 2024"]').click();
// Button + and -
cy.get('button.btn.btn-outline-info').click();
// Task name 
cy.get('input#task_name').click().type('2');


// Chosse the second iframe
cy.get('iframe.tox-edit-area__iframe').eq(1).then(($iframe) => {
    const iframeDoc = $iframe.contents()[0];
    const iframeBody = iframeDoc.body;
    cy.wrap(iframeBody).clear();
    cy.wrap(iframeBody).type('Reduced format ability');
});
// Low and In pro
cy.get('.Select-value-label').eq(2).click().type('Low{enter}');
cy.get('.Select-value-label').eq(3).click().type('In Pro{enter}');

/// Staff and share
cy.get('button.btn.btn-outline-info').click();
cy.get('#visibility-button').click();
cy.wait(1000);
cy.get('#visibility-button').click();
})
//// Log email
And('The user log email', () => {
  cy.contains('Log Email').click()
  cy.contains('Emails').click()
})
And('The user log text', () => {
  cy.contains('Log Text').click()
  cy.contains('Texts').click()
})

And('The user log phone', () => {
  cy.contains('Log Phone Call').click()
  cy.contains('Calls').click()
})

And('The user log note', () => {
  cy.contains('Save Note').click()
  cy.contains('Notes').click()
})

And('The user update note', () => {
  cy.get('.actions button.btn-secondary.btn-sm').eq(2).click();
})

And('The user update information', () => {
  cy.get('.actions button.btn-secondary.btn-sm').eq(1).click();
})

And('The user edit the information', () => {
  cy.get('button[title="Table"]').click();//SI Sirve
  cy.contains('Table').click()// Si sirve
  cy.get('.tox-insert-table-picker__selected').first().click();//Si sirve
})

And('The user cancel the information', () => {
  cy.contains('Cancel').click()
})


And('The user save the information', () => {
cy.contains('Save').click()
})
// calls, text, email
And('The user delete the information', () => {
  cy.get('.actions button.btn-secondary.btn-sm').eq(2).click();
  })

And('The user delete the note', () => {
  cy.get('.actions button.btn-secondary.btn-sm').eq(4).click();
  })

Then('The user validate the information', () => {
  const stub = cy.stub();
  cy.on ('window:alert', stub)
  cy
  .get('button').contains('Yes').click()
cy.wait(1000); // Espera  segundos

  });
})
