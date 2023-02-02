# Search Bar

This project shows the implementation of a reusable search bar made with React (Vite) and no additional third party libraries. For an implementation tutorial, please refer to [this blog article](https://chalimba.hashnode.dev/create-a-search-bar-in-react). The search bar has following features:

- Test REST API (dummyjson)
- If the value of the textbox changes, the suggestions get updated
- Debounce to limit the hits on the backend using hooks provided by [WebDevSimplified](https://github.com/WebDevSimplified)
- Searchbar can hide and show suggestions depending on focus
- If a suggestion gets clicked on, it is loaded in state and displayed

<br/>

## Getting started

To start the application, run

```sh
yarn && yarn dev
```

To use the search bar component, you need to pass in following props:

- fetchData: A method that returns a promise of the suggestions
- setResult: the setter of the actual result
- suggestionKey: the attribute displayed within the suggestions
