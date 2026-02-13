# Currency Converter Project 💱

A modern, responsive currency converter built with React and Tailwind CSS.

## 🚀 Next Session: Finish Connecting the Logic

**Current Status:**

- UI is beautiful and responsive.
- `App.jsx` has the Brain (State) and Data (`useCurrencyInfo`).
- `InputField.jsx` is receiving the list of options.

**Where to Start Tomorrow:**

1.  **Update `InputField.jsx` Props**
    - You need to update the function arguments to accept `selectCurrency` and `onCurrencyChange`.
    - You need to connect these to the `<select>` tag so the dropdown actually updates when you click it.

2.  **Pass Data through `MainContainer`**
    - Right now, `MainContainer` only takes `options`.
    - It needs to take **everything**: `amount`, `from`, `to`, `setAmount`, `setFrom`, `setTo`.
    - You need to pass these down to the correct Input Fields (Top = From, Bottom = To).

3.  **Implement Swap & Convert**
    - Create the functionality for the "Swap" button (swap `from` and `to` variables).
    - Display the final result in the bottom input field.

**Goal for Tomorrow:** Make the converter fully functional! 💪

## Setup

1.  `npm install`
2.  `npm run dev`
