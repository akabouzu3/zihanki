import { Selector } from 'testcafe'; // first import testcafe selectors 

fixture `Getting Started`// declare the fixture
  .page `http://localhost:8080/`;  // specify the start page

//then create a test and place your code there
test('My first test', async t => {

  await t
    // .typeText('#developer-name', 'John Smith')
    .click('#money-1000')

    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(Selector('#allMoney').innerText).eql("投入代金: 1000");
});