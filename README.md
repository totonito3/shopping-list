# Shopping List Manager

Welcome to the Shopping List Manager! This web application allows you to manage your shopping list efficiently, providing features to add, edit, remove, filter, and clear items.

![Shopping List](screenshot.png)

## Features

- Add items to your shopping list.
- Edit existing items directly in the list.
- Remove items from the list.
- Filter items based on keywords.
- Clear all items from the list.

## Demo

Experience the functionality firsthand by checking out the live demo of the project [here](https://your-demo-link.com).

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/your-repo.git`
2. Navigate to the project directory: `cd your-repo`
3. Open the `index.html` file in your preferred web browser.

## How It Works

This project leverages JavaScript for dynamic interaction with the shopping list. Here's an overview of the key steps and functionalities implemented:

1. **Add Item:** Enter an item in the input field and click the "Add Item" button. The new item is displayed in the list. Duplicate items are prevented.

2. **Edit Item:** Click on an item in the list to edit its content. The item's content becomes the input value, and the "Update Item" button allows you to save changes. Clicking "Update Item" replaces the original item with the edited version.

3. **Remove Item:** Click the "X" button next to an item to remove it from the list. A confirmation dialog is shown to prevent accidental removal.

4. **Filter Items:** Enter text in the filter input field to search for specific items in the list. Only items containing the entered text are displayed.

5. **Clear All:** Click the "Clear All" button to remove all items from the list. A confirmation dialog is shown to prevent accidental clearing.

6. **Local Storage:** Items in the list are stored in the browser's local storage. The list is retrieved from local storage on page load, allowing your shopping list to persist across sessions.

7. **User Interface:** The user interface dynamically adjusts based on the presence of items. If there are no items, the "Clear All" and "Filter" buttons are hidden.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request. Please make sure to follow the [code of conduct](CODE_OF_CONDUCT.md).

## License

This project is licensed under the [MIT License](LICENSE).
