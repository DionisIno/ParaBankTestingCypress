from pages.base_page import *
from pages.variable import *
from pages.locators import *
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
import time


class TestRegister():
    def test_go_to_register_v1_1(self, browser):
        """Enter the correct data in the registration form
        with a Zip Code consisting of 9 numbers and a password
        consisting of 7 characters"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('Denis')
        page.type_last_name('Brown')
        page.type_address('4454 Feathers Hooves Drive')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('12345-6789')
        page.type_phone('+18293816408')
        page.type_snn('078-05-1120')
        page.type_username_password_and_repeat('qwerty', 'CZ40${8', 'CZ40${8')
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, '.title ~ p')
        assert SuccessfulAnswer.successful_answer(self) in message.text

    def test_go_to_register_v1_2(self, browser):
        """Enter the correct data in the registration form
        with a Zip Code consisting of 5 numbers and a password
        consisting of 16 characters"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('Denis')
        page.type_last_name('Smith')
        page.type_address('4454 Feathers Hooves Drive')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('12345')
        page.type_phone('+18293816407')
        page.type_snn('078-05-1120')
        page.type_username_password_and_repeat('Qwerty', 'D}mH}#bhXX?ei1e8', 'D}mH}#bhXX?ei1e8')
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, '.title ~ p')
        assert SuccessfulAnswer.successful_answer(self) in message.text

    def test_go_to_register_v1_3(self, browser):
        """Enter the correct data in the registration
        form with a password consisting of 12 characters"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('David')
        page.type_last_name('Smith')
        page.type_address('24486 Yukon Rd')
        page.type_city('Kasilof')
        page.type_state('Alaska')
        page.type_zip_code('12345-6790')
        page.type_phone('+18293816409')
        page.type_snn('188-05-1120')
        page.type_username_password_and_repeat('AslaN', '84cAks%LpjbC', '84cAks%LpjbC')
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, '.title ~ p')
        assert SuccessfulAnswer.successful_answer(self) in message.text

    def test_go_to_register_v1_4(self, browser):
        """Enter the correct data in the registration form
        with the city, using the names of the city with a dot and a space"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('David')
        page.type_last_name('Smith')
        page.type_address('24486 Yukon Rd')
        page.type_city('St. Louis')
        page.type_state('Missouri')
        page.type_zip_code('12345-6790')
        page.type_phone('+18293816409')
        page.type_snn('188-05-1120')
        page.type_username_password_and_repeat('Lion', '84cAks%LpjbC', '84cAks%LpjbC')
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, '.title ~ p')
        assert SuccessfulAnswer.successful_answer(self) in message.text