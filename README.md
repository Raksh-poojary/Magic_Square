# Magic Square Generator

A web-based application that generates magic squares of odd order with customizable starting numbers and common differences. A magic square is an arrangement of numbers where the sum of each row, column, and diagonal is the same.

## Features

- **Generate Magic Squares**: Create magic squares of any odd order (3x3, 5x5, 7x7, etc.)
- **Customizable Numbers**: Specify a starting number and common difference to generate unique sequences
- **Export to CSV**: Download the generated magic square as a CSV file
- **Input Validation**: Validates user inputs to ensure odd numbers greater than 0
- **Responsive UI**: Beautiful, glowing interface with smooth animations

## Project Structure

```
Magic_Square/
├── Magicsqr.html      # Main HTML file with form and table structure
├── Magicsqr.css       # Styling with animations and glow effects
├── MagicSqr.js        # JavaScript logic for generation and validation
└── README.md          # This file
```

## Files

### Magicsqr.html
Contains the HTML structure including:
- Form inputs for matrix order, starting number, and common difference
- Generate button with validation
- Table container for displaying results
- Export to CSV button

### Magicsqr.css
Provides styling with:
- Dark theme with green glow effects
- Animated glowing text and borders
- Responsive form layout
- Styled input fields and buttons

### MagicSqr.js
Implements the core functionality:
- **validate()**: Validates user input
- **generate()**: Generates the magic square using the Siamese method
- **makeTable()**: Creates HTML table from the matrix
- **toCsv()**: Converts matrix to CSV format
- **saveAsCSV()**: Exports the magic square as a CSV file

## How to Use

1. **Open** `Magicsqr.html` in your web browser
2. **Enter** the order of the matrix (must be an odd number, e.g., 3, 5, 7)
3. **Enter** the starting number (the first number in your sequence)
4. **Enter** the common difference (the gap between consecutive numbers)
5. **Click** "Generate Magic Square" to create the magic square
6. **Optionally**, click "Export to CSV" to download the result

## Example

For a 3x3 magic square with starting number 1 and common difference 1:
- Matrix Order: 3
- Starting Number: 1
- Common Difference: 1

Result:
```
8  1  6
3  5  7
4  9  2
```

## Algorithm

The generator uses the **Siamese method** (also known as the de la Loubère method) for constructing odd-order magic squares:
- Start by placing the first number in the middle of the top row
- Move diagonally up and right for each subsequent number
- Wrap around edges when necessary
- If a cell is already filled, place the number directly below the previous one

## Requirements

- Modern web browser with JavaScript support
- No external dependencies required

## Browser Compatibility

Works with all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

---

**Created**: 2026
