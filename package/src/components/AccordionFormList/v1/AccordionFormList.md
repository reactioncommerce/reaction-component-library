### Overview

The `AccordionFormList` component renders an `Accordion` where each row can be expanded to reveal an edit form for that row's data, and where the final row allows you to add a new item to the list.

### Usage

```jsx
const items = [
  { id: "1", detail: "Detail", label: "Label" },
  { id: "2", detail: "Detail", label: "Label" },
  { id: "3", detail: "Detail", label: "Label" }
];

const handleItemDeleted = id => {
  console.log("Deleting", id);
};

class MyAddForm extends React.Component {
  submit() {
    // AccordionFormList will call this when the submit button is clicked
    console.log("Adding");
  }

  render() {
    return (
      <div
        style={{ textAlign: "center", fontWeight: 700, fontStyle: "italic" }}
      >
        There would be an add form here
      </div>
    );
  }
}

class MyEditForm extends React.Component {
  submit() {
    // AccordionFormList will call this when the submit button is clicked
    console.log("Editing");
  }

  render() {
    return (
      <div
        style={{ textAlign: "center", fontWeight: 700, fontStyle: "italic" }}
      >
        There would be an edit form here
      </div>
    );
  }
}

<AccordionFormList
  components={{
    ItemAddForm: MyAddForm,
    ItemEditForm: MyEditForm
  }}
  items={items}
  onItemDeleted={handleItemDeleted}
/>;
```

### Theme

Assume that any theme prop that does not begin with "rui" is within `rui_components`. See [Theming Components](./#!/Theming%20Components).

| Theme Prop                                          | Default          | Description                                                                                         |
| --------------------------------------------------- | ---------------- | --------------------------------------------------------------------------------------------------- |
| `Accordion.borderColor`                             | `black10`        | Border color for the Accordion and the "Add an item" area below it                                  |
| `Accordion.borderStyle`                             | `solid`          | Border style for the Accordion and the "Add an item" area below it                                  |
| `Accordion.borderWidth`                             | `1px`            | Border width for the Accordion and the "Add an item" area below it                                  |
| `Accordion.borderRadius`                            | `2px`            | Border radius for the Accordion and the "Add an item" area below it                                 |
| `AccordionFormList.addActionPaddingBottom`          | `14px`           | Bottom padding for the "Add an item" button area below the accordion                                |
| `AccordionFormList.addActionPaddingLeft`            | `16px`           | Left padding for the "Add an item" button area below the accordion                                  |
| `AccordionFormList.addActionPaddingRight`           | `16px`           | Right padding for the "Add an item" button area below the accordion                                 |
| `AccordionFormList.addActionPaddingTop`             | `14px`           | Top padding for the "Add an item" button area below the accordion                                   |
| `AccordionFormList.actionButtonColor`               | `coolGreyActive` | Color for the "Add an item" button when not hovered                                                 |
| `AccordionFormList.actionButtonHoverColor`          | `coolGreyHover`  | Color for the "Add an item" button when hovered                                                     |
| `AccordionFormList.actionButtonIconColor`           | `coolGrey500`    | "Add an item" icon color                                                                            |
| `AccordionFormList.actionButtonIconHeight`          | `20px`           | "Add an item" icon height                                                                           |
| `AccordionFormList.actionButtonIconMarginRight`     | `10px`           | Spacing between the icon and "Add an item" text                                                     |
| `AccordionFormList.actionButtonIconWidth`           | `20px`           | "Add an item" icon width                                                                            |
| `AccordionFormList.actionPaddingBottom`             | `16px`           | Bottom padding for the area within the accordion item where delete, save, and cancel buttons appear |
| `AccordionFormList.actionPaddingLeft`               | `0`              | Bottom padding for the area within the accordion item where delete, save, and cancel buttons appear |
| `AccordionFormList.actionPaddingRight`              | `0`              | Bottom padding for the area within the accordion item where delete, save, and cancel buttons appear |
| `AccordionFormList.actionPaddingTop`                | `16px`           | Bottom padding for the area within the accordion item where delete, save, and cancel buttons appear |
| `AccordionFormList.spaceBetweenActiveActionButtons` | `16px`           | Space between active action buttons                                                                 |
| `AccordionFormList.actionDeleteButtonHoverColor`    | `redHover`       | Delete button color when hovered                                                                    |
