# Transaction Management Frontend - Level 3

Your task is to **build an transaction management application frontend** that:

1. Integrates with the provided Transaction Management API to create and show transaction/account data.
2. Makes the provided E2E tests pass.

Please agree with your hiring team regarding the tech stack choice.

## What you should build

You are required to implement an application that allows to record financial transactions and view the transaction history. The app consists of a form for submitting transactions and a transaction list.

Transaction list displays the withdrawn or deposited amount for each transaction along with the affected account id. It also shows the current balance for the last submitted transaction.

Here's the UI mockup with hints:

![Transaction Management Frontend](https://user-images.githubusercontent.com/450319/148280061-308e1a2d-b2f8-4ede-8f45-d1f437138863.png)

Feel free to tweak the UI, but please ensure that the following HTML is in place.

#### The form for submitting transactions

```html
<form ... >
  <input data-type="account-id" ... />
  <input data-type="amount" ... />
  <input data-type="transaction-submit" type="submit" ... />
</form>
```

Both input **fields should be cleared** after the form is submitted.

#### Transactions list

Every newly submitted transaction should go on **the top of the list** and should have an enclosing `<div />` with the following structure:

```html
<div
  data-type="transaction"
  data-account-id="${transaction-account-id}"
  data-amount="${transaction-amount}"
  data-balance="${current-account-balance}" ...>
  ...
</div>
```

- `${transaction-account-id}` - account id of the corresponding transaction.
- `${transaction-amount}` - transaction amount.
- `${current-account-balance}` - the current account balance right after submitting the transaction (only show for the last submitted transaction).

## Before you get started

### Get familiar with the API

<details>
<summary>Request examples</summary>

##### Get transactions history

```
GET https://infra.devskills.app/api/accounting/transactions
```

##### Create a new transaction

```
POST https://infra.devskills.app/api/accounting/transactions
Content-Type: application/json

{
  "account_id": "0afd02d3-6c59-46e7-b7bc-893c5e0b7ac2",
  "amount": 7
}
```

##### Get a transaction by id

```
GET https://infra.devskills.app/api/accounting/transactions/7c94635a-40a3-4c87-888a-42c3ce5b9750
```

##### Get an account by id

```
GET https://infra.devskills.app/api/accounting/accounts/0afd02d3-6c59-46e7-b7bc-893c5e0b7ac2
```

</details>

#### Try running the E2E tests locally

```bash
npm install
# Run your app here
npm run test
```

## What we expect from you

1. Make the provided E2E tests pass.
2. Implement client-side validation of the form data.
3. Implement error handling for the cases when the API cannot be reached or returns a server error.
4. Ensure that the app remains responsive (i.e. doesn't block the UI) while the data is being loaded.
6. Unit test one module of choice. There is no need to test the whole app, as we only want to understand what you take into consideration when writing unit tests.
7. Avoid duplication and extract re-usable modules where it makes sense. We want to see your approach to creating a codebase that is easy to maintain.
8. Push your code to the new `implementation` branch. We encourage you to commit and push your changes regularly as it's a good way for you to showcase your thinking process.
9. Create a new pull request, but please **do not merge it**.
10. Await further instructions from the hiring team.

## Time estimate

About **3 hours** depending on your experience level.

Also, there is no countdown. The estimate is for you to plan your time.
