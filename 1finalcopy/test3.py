from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager

# Setup for the Chrome WebDriver
options = Options()
options.headless = False  # Set to True to run without opening the browser

# Create a new instance of Chrome WebDriver
driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)

# Local HTML file path (Replace with the correct file path)
file_path = 'file:///D:/kle%20Tech/Web%20Tech/SE_WT/MAIN_homepage.html'


# Open the local HTML page
driver.get(file_path)

# Test Case: Check if the page title is correct
expected_title = "Senior Citizen Helpline"  # This should be the correct title of your page
actual_title = driver.title
print("Page Title:", actual_title)

if actual_title == expected_title:
    print("Test Passed: The page title is correct.")
else:
    print(f"Test Failed: The page title is '{actual_title}', expected '{expected_title}'.")

# Close the browser
driver.quit()


 

