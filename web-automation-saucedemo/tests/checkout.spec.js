import {test, expect} from '@playwright/test';

test('homepage', async({page})=> {  
 await page.goto('https://www.saucedemo.com/')

 const login = page.locator('#login-button')
 const username = page.locator('#user-name')
 const password = page.locator('#password')
 
 await username.fill('standard_user')
 await password.fill('secret_sauce')
 await login.click()

 // verify that user can checkout successfully
 await page.locator('#add-to-cart-sauce-labs-backpack').click()
 await page.locator('#add-to-cart-sauce-labs-bike-light').click()
 await page.locator('.shopping_cart_container').click()
 await page.getByText('Checkout').click()
 await page.getByText('Checkout: Your Information').isVisible()

 const firstName = page.locator('#first-name')
 const lastName = page.locator('#last-name')
 const postalCode = page.locator('#postal-code')

 await firstName.fill('Esther')
 await lastName.fill('Chisom')
 await postalCode.fill('100264')
 await page.locator('#continue').click()
 await expect (page.getByText('Checkout: Overview')).toBeVisible()
 await page.locator('#finish').click()
 await expect (page.getByText('Thank you for your order!')).toBeVisible()
 await expect (page.getByRole('button', { name: 'Back Home' })).toBeVisible()
})