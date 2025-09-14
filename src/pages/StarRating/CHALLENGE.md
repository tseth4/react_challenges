# Star Rating

- **Framework**: React  
- **Author**: Yangshun Tay (Ex-Meta Staff Engineer)  
- **Languages**: —  
- **Difficulty**: Medium  
- **Recommended Interview Time**: 20 minutes  
- **Users Completed**: 4.22k done  

## Task

Create a star rating widget that allows users to select a rating value.

## Requirements

- The widget accepts **two parameters**:
  - The **maximum number of stars**
  - The **number of currently filled stars**

- **Click behavior**:
  - When a star is clicked, it is filled **along with all the stars to its left**.

- **Hover behavior**:
  - Hovering over a star fills **that star and all stars to its left**.
  - The stars filled on hover take **priority over the existing filled state**.
  - When the cursor leaves the widget **without making a new selection**, the stars should **revert to the pre-hover filled state**.

- **Reusability**:
  - The widget should be **reusable**, allowing **multiple instances** on the same page.

- **Icons**:
  - The star icons (both empty and filled) are provided as **SVGs**.

- A `StarRating.js` **skeleton component** has been created for you.  
  You are free to decide the props of `<StarRating />`.
