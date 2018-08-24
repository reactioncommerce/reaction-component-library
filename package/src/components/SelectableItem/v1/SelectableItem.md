### Overview

`SelectableItems` in a `SelectableList` are used to select shipping methods, addresses and credit cards. Each item consists of a radio button, label and display value. The label and display value can both support text or render other elements, like icons and links.

An individual item can be checked, or unchecked, along with disabled (`isReadOnly`) or enabled:

```jsx noeditor
const item = {id: "1", label: "Default unchecked", value: "default"};
<SelectableItem item={item} />
```

```jsx noeditor
const item = {id: "123", label: "Default checked", checked: true, value: "default2" };
<SelectableItem item={item} />
```

```jsx noeditor
const item = {id: "12", label: "Default disabled and unchecked", value: "default3" };
<SelectableItem item={item} isReadOnly />
```

```jsx noeditor
const item = {id: "12", label: "Default disabled and checked", checked: true, value: "default4" };
<SelectableItem item={item} isReadOnly />
```

#### Usage
- All labels should be written in sentence caps.
- Radio buttons should be used when only one option can be selected from a set of defined values.

#### Types

##### SelectableItem without `detail`

```jsx
const item = { id: "2", label: "Default address", value: "default5"};
<SelectableItem item={item} />
```

##### SelectableItem with `detail`

Pass any element - text, SVGs or React elements - into `detail` to display a secondary action on the right-hand side.

###### Plain text

```jsx
const item = {id: "3", label: "Free shipping", detail: "$0.00", value: "free", value: "default6"};
<SelectableItem item={item}/>
```

```jsx
const item = {id: "4", label: "Free shipping", detail: "\u2714", value: "free", value: "default7"};
<SelectableItem item={item}/>
```

###### Element

```jsx
const link = (
    <Button title="Default" className="myBtn" isTextOnly isShortHeight>Default Text</Button>
);
const item = {id: "5", label: "Default", detail: link, value: "default8"};

<SelectableItem item={item}/>
```

###### Icon as detail
```jsx
const iconClear = (
  // credit: https://fontawesome.com/icons/times-circle?style=regular
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{ height: "20px", maxHeight: "20px", verticalAlign: "middle" }}
  >
    <path
      fill="#3c3c3c"
      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
    />
  </svg>
);
const item = {id: "6", label: "Free shipping", detail: iconClear, value: "default9"};
<SelectableItem item={item}/>
```

###### Secondary icon
```jsx
const iconVisa = (
  <svg
    width="32"
    height="20"
    viewBox="0 0 750 471"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none"
      fillRule="evenodd"
    >
      <g id="visa" fillRule="nonzero">
        <rect id="Rectangle-1" fill="#0E4595" x="0" y="0"
          width="750" height="471" rx="40"
        />
        <polygon id="Shape" fill="#FFFFFF" points="278.1975 334.2275 311.5585 138.4655 364.9175 138.4655 331.5335 334.2275" />
        <path d="M524.3075,142.6875 C513.7355,138.7215 497.1715,134.4655 476.4845,134.4655 C423.7605,134.4655 386.6205,161.0165 386.3045,199.0695 C386.0075,227.1985 412.8185,242.8905 433.0585,252.2545 C453.8275,261.8495 460.8105,267.9695 460.7115,276.5375 C460.5795,289.6595 444.1255,295.6545 428.7885,295.6545 C407.4315,295.6545 396.0855,292.6875 378.5625,285.3785 L371.6865,282.2665 L364.1975,326.0905 C376.6605,331.5545 399.7065,336.2895 423.6355,336.5345 C479.7245,336.5345 516.1365,310.2875 516.5505,269.6525 C516.7515,247.3835 502.5355,230.4355 471.7515,216.4645 C453.1005,207.4085 441.6785,201.3655 441.7995,192.1955 C441.7995,184.0585 451.4675,175.3575 472.3565,175.3575 C489.8055,175.0865 502.4445,178.8915 512.2925,182.8575 L517.0745,185.1165 L524.3075,142.6875" id="path13" fill="#FFFFFF" />
        <path d="M661.6145,138.4655 L620.3835,138.4655 C607.6105,138.4655 598.0525,141.9515 592.4425,154.6995 L513.1975,334.1025 L569.2285,334.1025 C569.2285,334.1025 578.3905,309.9805 580.4625,304.6845 C586.5855,304.6845 641.0165,304.7685 648.7985,304.7685 C650.3945,311.6215 655.2905,334.1025 655.2905,334.1025 L704.8025,334.1025 L661.6145,138.4655 Z M596.1975,264.8725 C600.6105,253.5935 617.4565,210.1495 617.4565,210.1495 C617.1415,210.6705 621.8365,198.8155 624.5315,191.4655 L628.1385,208.3435 C628.1385,208.3435 638.3555,255.0725 640.4905,264.8715 L596.1975,264.8715 L596.1975,264.8725 Z" id="Path" fill="#FFFFFF" />
        <path d="M232.9025,138.4655 L180.6625,271.9605 L175.0965,244.8315 C165.3715,213.5575 135.0715,179.6755 101.1975,162.7125 L148.9645,333.9155 L205.4195,333.8505 L289.4235,138.4655 L232.9025,138.4655" id="path16" fill="#FFFFFF" />
        <path d="M131.9195,138.4655 L45.8785,138.4655 L45.1975,142.5385 C112.1365,158.7425 156.4295,197.9015 174.8155,244.9525 L156.1065,154.9925 C152.8765,142.5965 143.5085,138.8975 131.9195,138.4655" id="path18" fill="#F2AE14" />
      </g>
    </g>
  </svg>
);

const item = {id: "64", label: "Visa", detail: "ends in 4040", icon: iconVisa, value: "default123"};
<SelectableItem isLeftAligned item={item}/>
```

#### Specs

|Property                                |Style                                |
|----------------------------------------|:-----------------------------------:|
|Label font                              | `@rui-label-text` capitalized       |
|Label color                             | `@cool-grey-500`                    |
|Border color                            | `@cool-grey-500`                    |
|Radio button color                      | `@cool-grey-500`                    |
|Radio button height and width           | 20px                                |
|Radio button and label spacing          | 11px                                |
|Radio button border                     | 2px solid `@cool-grey-500`          |
|Selected circle size                    | 11px                                |
|Cursor                                  | Pointer (radio button and label)    |