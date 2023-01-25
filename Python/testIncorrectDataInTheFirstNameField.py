from pages.base_page import *
from pages.variable import *
from pages.locators import *
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
import time


class TestIncorrectName(object):
    def test_incorrect_first_name_v2_1(self, browser):
        """Empty First Name in the registration form"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('')
        page.type_last_name('Brown')
        page.type_address('4454 Feathers Hooves Drive')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat('qwerty11111', 'CZ40${8', 'CZ40${8')
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'span.error')
        assert UnsuccessfulAnswer.empty_field('First name') in message.text


    def test_incorrect_first_name_v2_2(self, browser):
        """A space was entered in the Name field in the registration form"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name(' ')
        page.type_last_name('Brown')
        page.type_address('4454 Feathers Hooves Drive')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat('qwerty22', 'CZ40${8', 'CZ40${8')
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'p.error')
        assert UnsuccessfulAnswer.error_field(self) in message.text


    def test_incorrect_first_name_v2_3(self, browser):
        """In the registration form in the field Name entered the word
        with a space in front"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('  Denis')
        page.type_last_name('Brown')
        page.type_address('4454 Feathers Hooves Drive')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat('qwerty33', 'CZ40${8', 'CZ40${8')
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'p.error')
        assert UnsuccessfulAnswer.error_field(self) in message.text


    def test_incorrect_first_name_v2_4(self, browser):
        """In the registration form in the field Name entered the word
        with a space in the middle"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('De nis')
        page.type_last_name('Brown')
        page.type_address('4454 Feathers Hooves Drive')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat('qwerty44', 'CZ40${8', 'CZ40${8')
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'p.error')
        assert UnsuccessfulAnswer.error_field(self) in message.text


    def test_incorrect_first_name_v2_5(self, browser):
        """In the registration form in the field Name entered the word
        with a space in the end"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('Denis  ')
        page.type_last_name('Brown')
        page.type_address('4454 Feathers Hooves Drive')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat('qwerty55', 'CZ40${8', 'CZ40${8')
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'p.error')
        assert UnsuccessfulAnswer.error_field(self) in message.text


    def test_incorrect_first_name_v2_6(self, browser):
        """In the registration form, the numbers are entered in the Name field"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('1234890')
        page.type_last_name('Brown')
        page.type_address('4454 Feathers Hooves Drive')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat('qwerty66', 'CZ40${8', 'CZ40${8')
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'p.error')
        assert UnsuccessfulAnswer.error_field(self) in message.text


    def test_incorrect_first_name_v2_7(self, browser):
        """In the registration form, the special characters are
        entered in the Name field"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('<&^):}~?')
        page.type_last_name('Brown')
        page.type_address('4454 Feathers Hooves Drive')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat('qwerty77', 'CZ40${8', 'CZ40${8')
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'p.error')
        assert UnsuccessfulAnswer.error_field(self) in message.text


    def test_incorrect_first_name_v2_8(self, browser):
        """In the registration form, non-ASCII characters
        are entered in the Name field"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('♣☺♂')
        page.type_last_name('Brown')
        page.type_address('4454 Feathers Hooves Drive')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat('qwerty88', 'CZ40${8', 'CZ40${8')
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'p.error')
        assert UnsuccessfulAnswer.error_field(self) in message.text


    def test_incorrect_first_name_v2_9(self, browser):
        """IIn the registration form, in the Name field, symbols,
        numbers, letters and a space are entered"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name(" 1.5-3!rt(>&'Q~c")
        page.type_last_name('Brown')
        page.type_address('4454 Feathers Hooves Drive')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat('qwerty99', 'CZ40${8', 'CZ40${8')
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'p.error')
        assert UnsuccessfulAnswer.error_field(self) in message.text


    def test_incorrect_first_name_v2_10(self, browser):
        """In the registration form in the field Last Name entered the word in Cyrillic"""
        link = "https://parabank.parasoft.com/parabank/register.htm"
        page = BasePage(browser, link)
        page.open()
        browser.find_element(*ButtonRegister.REGISTER_LINK).click()
        time.sleep(2)
        page.type_first_name('Денис')
        page.type_last_name('Brown')
        page.type_address('4454 Feathers Hooves Drive')
        page.type_city('Kansas City')
        page.type_state('Kansas')
        page.type_zip_code('123456789')
        page.type_phone('18293816408')
        page.type_snn('078051120')
        page.type_username_password_and_repeat('qwerty10', 'CZ40${8', 'CZ40${8')
        page.button_register()
        message = browser.find_element(By.CSS_SELECTOR, 'p.error')
        assert UnsuccessfulAnswer.error_field(self) in message.text
