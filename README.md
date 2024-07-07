# Temperature Converter Webpage

This project provides a simple and user-friendly webpage for converting temperatures between Celsius (°C), Fahrenheit (°F), and Kelvin (K).

**Features:**

* Clear and intuitive interface
* Supports all three major temperature scales
* Handles invalid temperature input gracefully
* Displays converted temperature with two decimal places

**Getting Started**

1. **Prerequisites:**
   - Basic understanding of HTML, CSS, and JavaScript
   - Text editor or code editor

2. **Download the Code:**
   - Clone or download the repository containing the HTML (`index.html`), CSS (`style.css`), and JavaScript (`script.js`) files.

3. **Open the Webpage:**
   - Open `index.html` in your web browser (e.g., Chrome, Firefox).

**Using the Converter**

1. **Enter a temperature:**
   - In the input field, type the temperature value you want to convert.

2. **Select the units:**
   - Use the dropdown menus to choose the unit you're converting from ("Convert From:") and the unit you want to convert to ("Convert To:").

3. **Click "Convert":**
   - Press the "Convert" button to trigger the conversion process.

4. **View the result:**
   - The converted temperature will be displayed below the button, providing the equivalent value in the chosen unit with two decimal places for precision.

**Code Structure**

The project consists of three files:

* `index.html`: Defines the HTML structure of the webpage, including the input fields, dropdown menus, button, and output area.
* `style.css`: Provides the styles for visual elements (layout, colors, fonts, etc.).
* `script.js`: Contains the JavaScript code that handles user interactions, performs temperature conversions, and updates the output.

**Functionality Breakdown**

1. **Retrieving Input:**
   - The JavaScript code retrieves the entered temperature value, the "from" unit, and the "to" unit from the corresponding HTML elements.

2. **Input Validation:**
   - The code checks if the entered temperature is a valid number (`isNaN` check). If not, an error message is displayed in the output area.

3. **Conversion Logic:**
   - Based on the chosen "from" and "to" units, the code performs the appropriate conversion using the following formulas (ensuring correct rounding to two decimal places):
      - Celsius to Fahrenheit: `(temperature * 9 / 5) + 32`
      - Celsius to Kelvin: `temperature + 273.15`
      - Fahrenheit to Celsius: `(temperature - 32) * 5 / 9`
      - Fahrenheit to Kelvin: `(temperature + 459.67) * 5 / 9`
      - Kelvin to Celsius: `temperature - 273.15`
      - Kelvin to Fahrenheit: `(temperature * 9 / 5) - 459.67`
      - If the "from" and "to" units are the same, the temperature value is simply displayed as-is.

4. **Displaying the Result:**
   - The converted temperature, along with the original value and the corresponding units, is formatted and displayed in the output area.

**Customization**

You can customize the appearance of the webpage by modifying the styles in `style.css`. You can also add additional features, such as:

- Handling negative temperatures
- Providing a history of conversions

I hope this `README.md` file provides a clear and informative guide to your temperature converter project!
