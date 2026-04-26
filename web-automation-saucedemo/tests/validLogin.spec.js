import {test, expect} from '@playwright/test';

// Launch the URL
test('homepage', async({page})=> {  
 await page.goto('https://www.saucedemo.com/')

 //verify login page is visible
 const image = page.locator(".login_logo")
 await expect (image).toBeVisible()

 const login = page.locator('#login-button')
 const username = page.locator('#user-name')
 const password = page.locator('#password')

 // validate successful login with valid username and password
 await username.fill('standard_user')
 await password.fill('secret_sauce')
 await login.click()
 const text = page.locator('.title')
 await expect (text).toBeVisible()

 await page.locator('#react-burger-menu-btn').click()
 await page.locator('#logout_sidebar_link').click()

 // validate successful login with valid username and password
 await username.fill('problem_user')
 await password.fill('secret_sauce')
 await login.click()
 await expect (text).toBeVisible()

 await page.locator('#react-burger-menu-btn').click()
 await page.locator('#logout_sidebar_link').click()

 // validate unsuccessful login with invalid username and password
 await username.fill('invalid_user')
 await password.fill('wrong_sauce')
 await login.click()
 const error = page.locator('[data-test="error"]')
 await expect (error).toBeVisible()
})
