from pages.locators import *
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support import expected_conditions as EC




class BasePage(object):

    def __init__(self, browser, url):
        self.browser = browser
        self.url = url

    def open(self):
        self.browser.get(self.url)

    def type_first_name(self, fn):
        # locator for the First Name field
        self.name = fn
        f_name = self.browser.find_element(*BasePageLocators.FIRST_NAME_LINK)
        f_name.send_keys(self.name)

    def type_last_name(self, ln):
        # locator for the Last Name field
        self.last_name = ln
        l_name = self.browser.find_element(*BasePageLocators.LAST_NAME_LINK)
        l_name.send_keys(self.last_name)

    def type_address(self, ad):
        # locator for the Address field
        self.address = ad
        adr = self.browser.find_element(*BasePageLocators.ADDRESS_LINK)
        adr.send_keys(self.address)

    def type_city(self, c):
        # locator for the City field
        self.city = c
        city = self.browser.find_element(*BasePageLocators.CITY_LINK)
        city.send_keys(self.city)

    def type_state(self, st):
        # locator for the State field
        self.state = st
        state = self.browser.find_element(*BasePageLocators.STATE_LINK)
        state.send_keys(self.state)

    def type_zip_code(self, zp):
        # locator for the Zip Code field
        self.zip_code = zp
        zip_code = self.browser.find_element(*BasePageLocators.ZIP_CODE_LINK)
        zip_code.send_keys(self.zip_code)

    def type_phone(self, ph):
        # locator for the Phone Number field
        self.phone = ph
        phone = self.browser.find_element(*BasePageLocators.PHONE_LINK)
        phone.send_keys(self.phone)

    def type_snn(self, sn):
        # locator for the SSN field
        self.ssn = sn
        ssn = self.browser.find_element(*BasePageLocators.SSN_LINK)
        ssn.send_keys(self.ssn)

    def type_username_password_and_repeat(self, un, passw, reppassw):
        # locators for the Password, Username and repeat Password fields
        self.username = un
        self.password = passw
        self.repeat_password = reppassw
        username = self.browser.find_element(*BasePageLocators.USERNAME_LINK)
        username.send_keys(self.username)
        password = self.browser.find_element(*BasePageLocators.PASSWORD_LINK)
        password.send_keys(self.password)
        repeated_password = self.browser.find_element(*BasePageLocators.REPEAT_PASSWORD_LINK)
        repeated_password.send_keys(self.repeat_password)

    def button_register(self):
        # locator for the Register Button field
        button_register = self.browser.find_element(*ButtonRegister.BUTTON_REGISTER)
        button_register.click()