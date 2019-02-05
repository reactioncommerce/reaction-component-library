import iconClear from "../../package/src/svg/iconClear";
import iconDismiss from "../../package/src/svg/iconDismiss";
import iconError from "../../package/src/svg/iconError";
import iconValid from "../../package/src/svg/iconValid";
import iconExpand from "../../package/src/svg/iconExpand";
import iconPlus from "../../package/src/svg/iconPlus";
import iconAmericanExpress from "../../package/src/svg/iconAmericanExpress";
import iconDiscover from "../../package/src/svg/iconDiscover";
import iconLock from "../../package/src/svg/iconLock";
import iconMastercard from "../../package/src/svg/iconMastercard";
import iconVisa from "../../package/src/svg/iconVisa";
import spinner from "../../package/src/svg/spinner";
import Accordion from "../../package/src/components/Accordion/v1";
import AccordionFormList from "../../package/src/components/AccordionFormList/v1";
import Address from "../../package/src/components/Address/v1";
import AddressBook from "../../package/src/components/AddressBook/v1";
import AddressCapture from "../../package/src/components/AddressCapture/v1";
import AddressChoice from "../../package/src/components/AddressChoice/v1";
import AddressForm from "../../package/src/components/AddressForm/v1";
import AddressReview from "../../package/src/components/AddressReview/v1";
import BadgeOverlay from "../../package/src/components/BadgeOverlay/v1";
import Button from "../../package/src/components/Button/v1";
import CartItem from "../../package/src/components/CartItem/v1";
import CartItemDetail from "../../package/src/components/CartItemDetail/v1";
import CartItems from "../../package/src/components/CartItems/v1";
import CartSummary from "../../package/src/components/CartSummary/v1";
import CatalogGrid from "../../package/src/components/CatalogGrid/v1";
import CatalogGridItem from "../../package/src/components/CatalogGridItem/v1";
import Checkbox from "../../package/src/components/Checkbox/v1";
import CheckoutAction from "../../package/src/components/CheckoutAction/v1";
import CheckoutActionComplete from "../../package/src/components/CheckoutActionComplete/v1";
import CheckoutActionIncomplete from "../../package/src/components/CheckoutActionIncomplete/v1";
import ErrorsBlock from "../../package/src/components/ErrorsBlock/v1";
import Field from "../../package/src/components/Field/v1";
import InlineAlert from "../../package/src/components/InlineAlert/v1";
import InPageMenuItem from "../../package/src/components/InPageMenuItem/v1";
import InventoryStatus from "../../package/src/components/InventoryStatus/v1";
import Link from "../../package/src/components/Link/v1";
import MiniCartSummary from "../../package/src/components/MiniCartSummary/v1";
import MultiSelect from "../../package/src/components/MultiSelect/v1";
import PhoneNumberInput from "../../package/src/components/PhoneNumberInput/v1";
import Price from "../../package/src/components/Price/v1";
import ProfileImage from "../../package/src/components/ProfileImage/v1";
import ProgressiveImage from "../../package/src/components/ProgressiveImage/v1";
import QuantityInput from "../../package/src/components/QuantityInput/v1";
import RegionInput from "../../package/src/components/RegionInput/v1";
import Select from "../../package/src/components/Select/v1";
import StockWarning from "../../package/src/components/StockWarning/v1";
import StripeForm from "../../package/src/components/StripeForm/v1";
import SelectableItem from "../../package/src/components/SelectableItem/v1";
import SelectableList from "../../package/src/components/SelectableList/v1";
import TextInput from "../../package/src/components/TextInput/v1";
// locales higher order component
import withLocales from "./components/withLocales";

// Providing default locales to AddressForm in the components-context.
// This way consuming components will have locales automatically.
const AddressFormWithLocales = withLocales(AddressForm);

export default {
  Accordion,
  AccordionFormList,
  Address,
  AddressBook,
  AddressCapture,
  AddressChoice,
  AddressForm: AddressFormWithLocales,
  AddressReview,
  BadgeOverlay,
  Button,
  CartItem,
  CartItemDetail,
  CartItems,
  CartSummary,
  CatalogGrid,
  CatalogGridItem,
  Checkbox,
  CheckoutAction,
  CheckoutActionComplete,
  CheckoutActionIncomplete,
  ErrorsBlock,
  Field,
  iconClear,
  iconDismiss,
  iconError,
  iconExpand,
  iconPlus,
  iconValid,
  iconAmericanExpress,
  iconDiscover,
  iconLock,
  iconMastercard,
  iconVisa,
  InlineAlert,
  InPageMenuItem,
  InventoryStatus,
  Link,
  MiniCartSummary,
  MultiSelect,
  PhoneNumberInput,
  Price,
  ProfileImage,
  ProgressiveImage,
  QuantityInput,
  RegionInput,
  Select,
  spinner,
  StockWarning,
  StripeForm,
  SelectableItem,
  SelectableList,
  TextInput
};
