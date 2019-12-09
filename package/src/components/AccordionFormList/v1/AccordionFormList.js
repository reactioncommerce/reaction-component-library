import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withComponents } from "@reactioncommerce/components-context";
import { applyTheme, addTypographyStyles, CustomPropTypes } from "../../../utils";

const AddNewItemAction = styled.div`
  border-color: ${applyTheme("Accordion.borderColor")};
  border-style: ${applyTheme("Accordion.borderStyle")};
  border-width: ${applyTheme("Accordion.borderWidth")};
  border-bottom-left-radius: ${applyTheme("Accordion.borderRadius")};
  border-bottom-right-radius: ${applyTheme("Accordion.borderRadius")};
  border-top-width: ${(props) => (props.listCount > 0 ? 0 : applyTheme("Accordion.borderWidth")(props))};
  box-sizing: border-box;
  color: inherit;
  overflow: hidden;
  padding-bottom: ${applyTheme("AccordionFormList.addActionPaddingBottom")};
  padding-left: ${applyTheme("AccordionFormList.addActionPaddingLeft")};
  padding-right: ${applyTheme("AccordionFormList.addActionPaddingRight")};
  padding-top: ${applyTheme("AccordionFormList.addActionPaddingTop")};
`;

const AddNewItemActionButton = styled.div`
  ${addTypographyStyles("ActionButton", "labelText")};
  color: ${applyTheme("AccordionFormList.actionButtonColor")};
  cursor: pointer;
  display: table;
  &:hover {
    color: ${applyTheme("AccordionFormList.actionButtonHoverColor")};
    svg {
      color: inherit !important;
    }
  }
`;

const AddNewItemActionIcon = styled.span`
  color: inherit;
  height: ${applyTheme("AccordionFormList.actionButtonIconHeight")};
  margin: 0;
  margin-right: ${applyTheme("AccordionFormList.actionButtonIconMarginRight")};
  width: ${applyTheme("AccordionFormList.actionButtonIconWidth")};
  svg {
    color: ${applyTheme("AccordionFormList.actionButtonIconColor")};
    fill: currentColor;
    height: 1em;
    width: 1em;
    vertical-align: middle;
  }
`;

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: ${applyTheme("AccordionFormList.actionPaddingBottom")};
  padding-left: ${applyTheme("AccordionFormList.actionPaddingLeft")};
  padding-right: ${applyTheme("AccordionFormList.actionPaddingRight")};
  padding-top: ${applyTheme("AccordionFormList.actionPaddingTop")};

  > div:last-of-type {
    margin-left: ${applyTheme("AccordionFormList.spaceBetweenActiveActionButtons")};
  }
`;

const FormActionDelete = styled.div`
  flex: 1 1 auto;

  > div {
    border: none;
    &:hover {
      background-color: transparent;
      color: ${applyTheme("AccordionFormList.actionDeleteButtonHoverColor")};
    }
  }
`;

const ENTRY = "entry";
const LIST = "list";

class AccordionFormList extends Component {
  static propTypes = {
    /**
     * Text to show on the button for adding a new item to the list
     */
    addNewItemButtonText: PropTypes.string,
    /**
     * The text for the "Cancel" text, if it is shown.
     */
    cancelButtonText: PropTypes.string,
    /**
     * You can provide a `className` prop that will be applied to the outermost DOM element
     * rendered by this component. We do not recommend using this for styling purposes, but
     * it can be useful as a selector in some situations.
     */
    className: PropTypes.string,
    /**
     * If you've set up a components context using @reactioncommerce/components-context
     * (recommended), then this prop will come from there automatically. If you have not
     * set up a components context or you want to override one of the components in a
     * single spot, you can pass in the components prop directly.
     */
    components: PropTypes.shape({
      /**
       * Pass either the Reaction Accordion component or your own component that
       * accepts compatible props.
       */
      Accordion: CustomPropTypes.component.isRequired,
      /**
       * Pass either the Reaction iconPlus component or your own component that
       * accepts compatible props.
       */
      iconPlus: PropTypes.node.isRequired,
      /**
       * The form component to render when adding a new item. It must have a
       * "submit" method on the instance or forward "ref" to a component that does.
       */
      ItemAddForm: CustomPropTypes.component.isRequired,
      /**
       * The form component to render when editing an item. It must have a
       * "submit" method on the instance or forward "ref" to a component that does.
       */
      ItemEditForm: CustomPropTypes.component.isRequired
    }).isRequired,
    /**
     * Text to show on the button for deleting an item from the list
     */
    deleteItemButtonText: PropTypes.string,
    /**
     * Text to show on the button for submitting the new item entry form
     */
    entryFormSubmitButtonText: PropTypes.string,
    /**
     * Is some async operation happening? Puts buttons into waiting state
     */
    isWaiting: PropTypes.bool,
    /**
     * Arbitrary props to pass to ItemAddForm instance
     */
    itemAddFormProps: PropTypes.object,
    /**
     * The list of items to show accordion edit forms for
     */
    items: PropTypes.arrayOf(PropTypes.shape({
      /**
       * Accordion detail
       */
      detail: PropTypes.string,
      /**
       * A unique ID
       */
      id: PropTypes.string.isRequired,
      /**
       * Arbitrary props to pass to ItemEditForm instance
       */
      itemEditFormProps: PropTypes.object,
      /**
       * Accordion label
       */
      label: PropTypes.string.isRequired
    })),
    /**
     * Handles item deletion from list
     */
    onItemDeleted: PropTypes.func,
    /**
     * The text for the "Save" text, if it is shown.
     */
    saveButtonText: PropTypes.string
  };

  static defaultProps = {
    addNewItemButtonText: "Add an item",
    deleteItemButtonText: "Delete this item",
    entryFormSubmitButtonText: "Add item",
    cancelButtonText: "Cancel",
    saveButtonText: "Save Changes",
    isWaiting: false,
    onItemDeleted() {}
  };

  state = {
    status: LIST
  };

  _refs = {};

  //
  // Handler Methods
  //
  handleDeleteItem = (itemId) => {
    const { onItemDeleted } = this.props;
    onItemDeleted(itemId);
  };

  handleAddClick = () => {
    this.showEntryForm();
  };

  handleEntryFormCancel = () => {
    this.showList();
  };

  showEntryForm() {
    this.setState({ status: ENTRY });
  }

  showList() {
    this.setState({ status: LIST });
  }

  toggleAccordionForItem(itemId) {
    this._refs[`accordion_${itemId}`].toggle();
  }

  //
  // Render Methods
  //
  renderAccordion() {
    const {
      addNewItemButtonText,
      cancelButtonText,
      components: { Accordion, Button, iconPlus, ItemEditForm },
      deleteItemButtonText,
      isWaiting,
      items,
      saveButtonText
    } = this.props;

    return (
      <Fragment>
        {items && items.map(({ detail, id, itemEditFormProps, label }) => (
          <Accordion
            key={id}
            label={label}
            detail={detail}
            ref={(el) => {
              this._refs[`accordion_${id}`] = el;
            }}
          >
            <ItemEditForm
              {...itemEditFormProps}
              ref={(el) => {
                this._refs[`editForm_${id}`] = el;
              }}
            />
            <FormActions>
              <FormActionDelete>
                <Button
                  actionType="secondaryDanger"
                  isTextOnlyNoPadding
                  isShortHeight
                  onClick={() => {
                    this.handleDeleteItem(id);
                  }}
                >
                  {deleteItemButtonText}
                </Button>
              </FormActionDelete>
              <Button
                actionType="secondary"
                isShortHeight
                onClick={() => {
                  this.toggleAccordionForItem(id);
                }}
              >
                {cancelButtonText}
              </Button>
              <Button onClick={() => this._refs[`editForm_${id}`].submit()} isShortHeight isWaiting={isWaiting}>
                {saveButtonText}
              </Button>
            </FormActions>
          </Accordion>
        ))}
        <AddNewItemAction listCount={items && items.length}>
          <AddNewItemActionButton onClick={this.handleAddClick} tabIndex={0}>
            <AddNewItemActionIcon>{iconPlus}</AddNewItemActionIcon>
            {addNewItemButtonText}
          </AddNewItemActionButton>
        </AddNewItemAction>
      </Fragment>
    );
  }

  renderEntryForm() {
    const { cancelButtonText, components: { Button, ItemAddForm }, entryFormSubmitButtonText, isWaiting, itemAddFormProps } = this.props;
    return (
      <Fragment>
        <ItemAddForm
          {...itemAddFormProps}
          ref={(el) => {
            this._addItemForm = el;
          }}
        />
        <FormActions>
          <Button actionType="secondary" onClick={this.handleEntryFormCancel}>
            {cancelButtonText}
          </Button>
          <Button onClick={() => this._addItemForm.submit()} isWaiting={isWaiting}>
            {entryFormSubmitButtonText}
          </Button>
        </FormActions>
      </Fragment>
    );
  }

  render() {
    const { className } = this.props;
    const { status } = this.state;
    return (
      <div className={className}>
        {status === LIST ? this.renderAccordion() : this.renderEntryForm()}
      </div>
    );
  }
}

export default withComponents(AccordionFormList);
