### Overview
This component renders an item in an In-Page Menu list.

#### Usage

Can be used in the `InPageMenu` to provide a side-bar sub-navigation for a page.

```jsx
<InPageMenuItem href="/#!/InPageMenuItem" label="InPageMenuItem" />
```

#### With onClick
```jsx
<InPageMenuItem href="/#!/InPageMenuItem" label="InPageMenuItem with onClick" onClick={() => alert("onClick() fired")} />
```

#### Selected Item
```jsx
<InPageMenuItem href="/#!/InPageMenuItem" isSelected label="Selected InPageMenuItem" onClick={() => alert("onClick() fired")} />
```

#### In a list / InPageMenu
```jsx
<div>
  <InPageMenuItem href="/#!/InPageMenuItem" label="InPageMenuItem 1" onClick={() => alert("InPageMenuItem 1 onClick() fired")} />
  <InPageMenuItem href="/#!/InPageMenuItem" isSelected label="InPageMenuItem 2 (Selected / Active)" onClick={() => alert("InPageMenuItem 2 onClick() fired")} />
  <InPageMenuItem href="/#!/InPageMenuItem" label="InPageMenuItem 3" onClick={() => alert("InPageMenuItem 3 onClick() fired")} />
  <InPageMenuItem href="/#!/InPageMenuItem" label="InPageMenuItem 4" onClick={() => alert("InPageMenuItem 4 onClick() fired")} />
  <InPageMenuItem href="/#!/InPageMenuItem" label="InPageMenuItem 5 with a label that is too long. We should try to never have a label this long, but if we do, you can see how the text wraps and keeps the correct padding alignment even on multiple lines." onClick={() => alert("InPageMenuItem 5 onClick() fired")} />
</div>
```
