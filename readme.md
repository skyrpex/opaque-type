# @skyrpex/opaque

An opaque type helper.

## Installation

```sh
npm install @skyrpex/opaque
```

## Usage

```ts
import type { Opaque } from "@skyrpex/opaque";

type AccountId = Opaque<number, "AccountId">;
```

## Why?

Opaque types are a way to ensure you don't mix up different types of values that share the same underlying type, but are fundamentally different.

See the following example, where our account and person identifiers are numbers:

```ts
type AccountId = Opaque<number, "AccountId">;
type PersonId = Opaque<number, "PersonId">;

// Image we have a function that gets an account by its account id.
declare function getAccount(id: AccountId);

// And we have account ids and person ids in the same place.
declare const accountId: AccountId;
declare const personId: PersonId;

// TypeScript will complain if we pass an account id when a person id is expected, and viceversa.
getAccount(accountId); // No error
getAccount(personId); // Error
```

You can also use the `{ readonly t: unique symbol }` object for global uniqueness, but is more verbose.

```ts
type AccountId = Opaque<number, { readonly t: unique symbol }>;
type PersonId = Opaque<number, { readonly t: unique symbol }>;
```
