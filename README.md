# Ionic Vue Cypress

## Steps to reproduce

1. Install dependencies:

```shell
npm install
```

2. Start a dev server:

```shell
npm run serve
```

3. In a new terminal window, open Cypress:

```shell
npm run cypress
```

4. Run the `inputs.js` test. 

5. The test in this file checks the value of the `checked` property on `ion-checkbox`, clicks it, then checks the `checked` property again. `ion-checkbox` is a Web Component.

6. You should notice that the test fails with the error:

```shell
Timed out retrying: cy.its() errored because the property: checked does not exist on your subject.

cy.its() waited for the specified property checked to exist, but it never did.

If you do not expect the property checked to exist, then add an assertion such as:

cy.wrap({ foo: 'bar' }).its('quux').should('not.exist')
```
