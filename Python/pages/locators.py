from selenium.webdriver.common.by import By

class ButtonRegister(object):
    REGISTER_LINK = (By.CSS_SELECTOR, '[href^="register.htm"]')
    BUTTON_REGISTER = (By.CSS_SELECTOR, 'input[value="Register"]')
    # SUCCESSFUL_EXPECTED_RESULT = (By.CSS_SELECTOR, '.title ~ p')


class BasePageLocators(object):
    FIRST_NAME_LINK = (By.CSS_SELECTOR, 'input[id = "customer.firstName"]')
    LAST_NAME_LINK = (By.CSS_SELECTOR, 'input[id = "customer.lastName"]')
    ADDRESS_LINK = (By.CSS_SELECTOR, 'input[id = "customer.address.street"]')
    CITY_LINK = (By.CSS_SELECTOR, 'input[id = "customer.address.city"]')
    STATE_LINK = (By.CSS_SELECTOR, 'input[id = "customer.address.state"]')
    ZIP_CODE_LINK = (By.CSS_SELECTOR, 'input[id = "customer.address.zipCode"]')
    PHONE_LINK = (By.CSS_SELECTOR, 'input[id = "customer.phoneNumber"]')
    SSN_LINK = (By.CSS_SELECTOR, 'input[id = "customer.ssn"]')
    USERNAME_LINK = (By.CSS_SELECTOR, 'input[id = "customer.username"]')
    PASSWORD_LINK = (By.CSS_SELECTOR, 'input[id = "customer.password"]')
    REPEAT_PASSWORD_LINK = (By.CSS_SELECTOR, 'input[id = "repeatedPassword"]')