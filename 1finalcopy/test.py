from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
import os

# Set up WebDriver (Chrome in this case)
options = Options()
options.headless = False  # Set to True to run in headless mode (no browser window)
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

# Define the relative path to the local HTML file
# Since the script is in the same folder as the HTML file, we just need the filename
file_path = 'file:///D:/kle%20Tech/Web%20Tech/SE_WT/MAIN_homepage.html'  # Update this path if needed

# Open the local HTML file
driver.get(file_path)

# Example 1: Test if a specific header (e.g., <h1>) exists
try:
    header = driver.find_element(By.tag_name('h1'))  # Replace with the correct tag if needed
    print("Header text:", header.text)  # Print the header text to check if it matches
    assert header.text == "Your Expected Header Text"  # Replace with the text you expect
    print("Header found and text is correct!")
except AssertionError:
    print("Header not found or text is incorrect")
except Exception as e:
    print(f"Error: {e}")

# Example 2: Test if a button (e.g., with ID 'submit-button') is visible
try:
    button = driver.find_element(By.id('submit-button'))  # Replace with your actual ID
    assert button.is_displayed()  # Assert that the button is visible
    print("Button is visible!")
except Exception as e:
    print(f"Error: {e}")

# Example 3: Check CSS property (e.g., background color of the button)
try:
    button = driver.find_element(By.id('submit-button'))  # Replace with the actual button ID
    background_color = button.value_of_css_property('background-color')
    print("Button background color:", background_color)
    assert background_color == 'rgb(0, 128, 0)'  # Replace with the expected background color (green in this case)
    print("CSS property is correct!")
except Exception as e:
    print(f"Error: {e}")

# Close the browser after the tests
driver.quit()
