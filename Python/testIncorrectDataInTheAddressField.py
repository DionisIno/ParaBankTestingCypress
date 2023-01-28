from pages.base_page import *
from pages.variable import *
from pages.locators import *
from selenium.webdriver.common.by import By
import time


class TestIncorrectAddress(object):
    def test_incorrect_address_v4_1(self, browser):
        """Empty Address in the registration form"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('Denis')
        page.type_last_name('Brown')
        page.type_address('')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat("Tor1", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'span[id="customer.address.street.errors"]')
        assert UnsuccessfulAnswer.empty_field('Address') in message.text in message.text


    def test_incorrect_address_v4_2(self, browser):
        """A space was entered in the Address field in the registration form"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('Denis')
        page.type_last_name('Brown')
        page.type_address(' ')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat("Tor2", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'span[id="customer.address.street.errors"]')
        assert UnsuccessfulAnswer.error_field(self) in message.text


    def test_incorrect_address_v4_3(self, browser):
        """In the Address registration form, enter a word with a space in front"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('Denis')
        page.type_last_name('Brown')
        page.type_address('   4454 Feathers Hooves Drive')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat("Tor3", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'span[id="customer.address.street.errors"]')
        assert UnsuccessfulAnswer.error_field(self) in message.text


    def test_incorrect_address_v4_4(self, browser):
        """In the Address registration form, enter a word with a space in the end"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('Denis')
        page.type_last_name('Brown')
        page.type_address('4454 Feathers Hooves Drive    ')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat('Tor4", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8')
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'span[id="customer.address.street.errors"]')
        assert UnsuccessfulAnswer.error_field(self) in message.text


    def test_incorrect_address_v4_5(self, browser):
        """In the Address registration form, enter the numbers"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('Denis')
        page.type_last_name('Brown')
        page.type_address('12345891')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat("Tor5", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'span[id="customer.address.street.errors"]')
        assert UnsuccessfulAnswer.error_field(self) in message.text


    def test_incorrect_address_v4_6(self, browser):
        """In the Address registration form, enter the special characters"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('Denis')
        page.type_last_name('Brown')
        page.type_address('<&^):(}~?')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat("Tor6", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'span[id="customer.address.street.errors"]')
        assert UnsuccessfulAnswer.error_field(self) in message.text


    def test_incorrect_address_v4_7(self, browser):
        """In the registration form, non-ASCII characters are entered in the Address field"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('Denis')
        page.type_last_name('Brown')
        page.type_address('♣☺♂')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat("Tor7", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'span[id="customer.address.street.errors"]')
        assert UnsuccessfulAnswer.error_field(self) in message.text


    def test_incorrect_address_v4_8(self, browser):
        """In the registration form, in the Address field,
        symbols, numbers, letters and a space are entered"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('Denis')
        page.type_last_name('Brown')
        page.type_address(" 1.5-3!rt(>&'Q~d")
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat("Tor8", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'span[id="customer.address.street.errors"]')
        assert UnsuccessfulAnswer.error_field(self) in message.text


    def test_incorrect_address_v4_9(self, browser):
        """In the registration form in the field Address entered the word in Arabic"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name("Denis")
        page.type_last_name("Brown")
        page.type_address("محرك حوافر الريش4412")
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat("Tor9", "D}mH}#bhXX?ei1e8", "D}mH}#bhXX?ei1e8")
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'span[id="customer.address.street.errors"]')
        assert UnsuccessfulAnswer.error_field(self) in message.text