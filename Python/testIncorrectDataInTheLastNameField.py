from pages.base_page import *
from pages.variable import *
from pages.locators import *
from selenium.webdriver.common.by import By
import time


class TestIncorrectLastName(object):
    def test_incorrect_last_name_v3_1(self, browser):
        """Empty Last Name in the registration form"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('Denis')
        page.type_last_name('')
        page.type_address('4454 Feathers Hooves Drive')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat('qwerty111', 'CZ40${8', 'CZ40${8')
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'span[id="customer.lastName.errors"]')
        assert UnsuccessfulAnswer.empty_field('Last name') in message.text in message.text


    def test_incorrect_last_name_v3_2(self, browser):
        """A space was entered in the Last Name field in the registration form"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('Denis')
        page.type_last_name(' ')
        page.type_address('4454 Feathers Hooves Drive')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat('qwerty222', 'CZ40${8', 'CZ40${8')
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'span[id="customer.lastName.errors"]')
        assert UnsuccessfulAnswer.error_field(self) in message.text


    def test_incorrect_last_name_v3_3(self, browser):
        """In the Last Name registration form, enter a word with a space in front"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('Denis')
        page.type_last_name('   Brown')
        page.type_address('4454 Feathers Hooves Drive')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat('qwerty333', 'CZ40${8', 'CZ40${8')
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'span[id="customer.lastName.errors"]')
        assert UnsuccessfulAnswer.error_field(self) in message.text


    def test_incorrect_last_name_v3_4(self, browser):
        """In the Last Name registration form, enter a word with a space in the middle"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('Denis')
        page.type_last_name('Bro  wn')
        page.type_address('4454 Feathers Hooves Drive')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat('qwerty444', 'CZ40${8', 'CZ40${8')
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'span[id="customer.lastName.errors"]')
        assert UnsuccessfulAnswer.error_field(self) in message.text


    def test_incorrect_last_name_v3_5(self, browser):
        """In the Last Name registration form, enter a word with a space in the end"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('Denis')
        page.type_last_name('Brown   ')
        page.type_address('4454 Feathers Hooves Drive')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat('qwerty555', 'CZ40${8', 'CZ40${8')
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'span[id="customer.lastName.errors"]')
        assert UnsuccessfulAnswer.error_field(self) in message.text


    def test_incorrect_last_name_v3_6(self, browser):
        """In the Last Name registration form, enter the numbers"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('Denis')
        page.type_last_name('1234890')
        page.type_address('4454 Feathers Hooves Drive')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat('qwerty666', 'CZ40${8', 'CZ40${8')
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'span[id="customer.lastName.errors"]')
        assert UnsuccessfulAnswer.error_field(self) in message.text


    def test_incorrect_last_name_v3_7(self, browser):
        """In the Last Name registration form, enter the special characters"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('Denis')
        page.type_last_name('<&^):}~?')
        page.type_address('4454 Feathers Hooves Drive')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat('qwerty777', 'CZ40${8', 'CZ40${8')
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'span[id="customer.lastName.errors"]')
        assert UnsuccessfulAnswer.error_field(self) in message.text


    def test_incorrect_last_name_v3_8(self, browser):
        """In the registration form, non-ASCII characters are entered in the Last Name field"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('Denis')
        page.type_last_name('♣☺♂')
        page.type_address('4454 Feathers Hooves Drive')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat('qwerty888', 'CZ40${8', 'CZ40${8')
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'span[id="customer.lastName.errors"]')
        assert UnsuccessfulAnswer.error_field(self) in message.text


    def test_incorrect_last_name_v3_9(self, browser):
        """In the registration form, in the Last Name field, symbols,
        numbers, letters and a space are entered"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name("Denis")
        page.type_last_name(" 1.5-3!rt(>&'Q~c")
        page.type_address('4454 Feathers Hooves Drive')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat('qwerty999', 'CZ40${8', 'CZ40${8')
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'span[id="customer.lastName.errors"]')
        assert UnsuccessfulAnswer.error_field(self) in message.text


    def test_incorrect_last_name_v3_10(self, browser):
        """In the registration form in the field Last Name entered the word in Cyrillic"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('Denis')
        page.type_last_name('Смит')
        page.type_address('4454 Feathers Hooves Drive')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat('qwerty100', 'CZ40${8', 'CZ40${8')
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'span[id="customer.lastName.errors"]')
        assert UnsuccessfulAnswer.error_field(self) in message.text