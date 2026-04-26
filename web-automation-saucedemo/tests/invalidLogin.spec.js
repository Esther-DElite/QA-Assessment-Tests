import {test, expect} from '@playwright/test';

test('unsuccessful login with invalid username and password', async({page})=> {  
 await page.goto('https://www.saucedemo.com/')

 const login = page.locator('#login-button')
 const username = page.locator('#user-name')
 const password = page.locator('#password')
 
 await username.fill('invalid_user')
 await password.fill('wrong_sauce')
 await login.click()
 const error = page.locator('[data-test="error"]')
 await expect (error).toBeVisible()

  // validate unsuccessful login with valid username and incorrect password
  await username.fill('standard_user')
  await password.fill('wrong_sauce')
  await login.click()
  await expect (error).toBeVisible()

 // validate unsuccessful login with invalid username and valid password
    
  await username.fill('invalid_user')
  await password.fill('secret_sauce')
  await login.click()
  await expect (error).toBeVisible()
 })