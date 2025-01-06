from selenium import webdriver
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
import time

# Setup for the Chrome WebDriver
options = Options()
options.headless = False  # Set to True to run in headless mode (without browser window)

# Create a new instance of Chrome WebDriver
driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)

# Local HTML file path (Replace with the correct file path)
file_path = 'file:///D:/kle%20Tech/Web%20Tech/SE_WT/MAIN_homepage.html'

# Open the local HTML page
driver.get(file_path)

# Test Case: Check if "Services" is present in the header
header = driver.find_element(By.css_selector('.header'))
header_text = header.text
print("Header text:", header_text)

# Assert if "Services" is in the header
if 'Services' in header_text:
    print("Test Passed: The header contains 'Services'.")
else:
    print("Test Failed: The header does not contain 'Services'.")

# Close the browser
driver.quit()


