<img align="right" alt="traffic" src="https://pv-badge.herokuapp.com/total.svg?repo_id=olavoparno-react-use-modals"/>

# react-use-modals

> Adds HTML Dialog capabilities as custom hooks

[![NPM](https://img.shields.io/npm/v/react-use-modals.svg)](https://www.npmjs.com/package/react-use-modals)

---

| Statements                                                                               | Branches                                                                             | Functions                                                                              | Lines                                                                          |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| ![Statements](https://img.shields.io/badge/statements-100%25-brightgreen.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-100%25-brightgreen.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-100%25-brightgreen.svg?style=flat) |

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Documentation](#documentation)
- [Contributors](#contributors)
- [License](#license)

---

## Install

```bash
npm install --save react-use-modals
```

---

## Usage

- You can use it as follows by destructuring its return object:

```tsx
import React from 'react';
import useModals from 'react-use-modals';

const MyComponent = () => {
  const { modalRef, isOpen, openModal, closeModal } = useModals();

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <dialog ref={modalRef}>
        <p>Modal Content</p>
        <button onClick={closeModal}>Close Modal</button>
      </dialog>
      <p>Modal is {isOpen ? 'open' : 'closed'}</p>
    </>
  );
};
```

- You can also use it with a return array just like React does:
- This is particularly useful when you must use multiple `useModals`.

```tsx
import React from 'react';
import useModals from 'react-use-modals';

const MyComponent = () => {
  const [modalRef, isOpen, openModal, closeModal] = useModals();
  const [modalRef2, isOpen2, openModal2, closeModal2] = useModals();

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <dialog ref={modalRef}>
        <p>Modal Content</p>
        <button onClick={closeModal}>Close Modal</button>
      </dialog>
      <p>Modal is {isOpen ? 'open' : 'closed'}</p>
      <br />
      <br />
      <button onClick={openModal2}>Open Modal2</button>
      <dialog ref={modalRef2}>
        <p>Modal2 Content</p>
        <button onClick={closeModal2}>Close Modal2</button>
      </dialog>
      <p>Modal2 is {isOpen2 ? 'open' : 'closed'}</p>
    </>
  );
};
```

---

## Documentation

`useModals()` returns:

- An object/tupple with the following keys:

| key        | description                             | arguments | example |
| ---------- | --------------------------------------- | --------- | ------- |
| isOpen     | Boolean stating state of open or closed | N/A       | N/A     |
| modalRef   | HTMLDialogElement ref                   | N/A       | N/A     |
| openModal  | Function to open modal                  | N/A       | N/A     |
| closeModal | Function to open modal                  | N/A       | N/A     |

---

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://olavoparno.github.io"><img src="https://avatars1.githubusercontent.com/u/7513162?v=4?s=70" width="70px;" alt="Olavo Parno"/><br /><sub><b>Olavo Parno</b></sub></a><br /><a href="#ideas-olavoparno" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/the-bugging/react-use-modals/commits?author=olavoparno" title="Code">💻</a> <a href="https://github.com/the-bugging/react-use-modals/commits?author=olavoparno" title="Tests">⚠️</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

---

## License

react-use-modals is [MIT licensed](./LICENSE).

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
