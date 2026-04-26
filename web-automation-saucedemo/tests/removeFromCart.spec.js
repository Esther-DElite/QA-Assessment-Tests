import {test, expect} from '@playwright/test';

test('homepage', async({page})=> {  
 await page.goto('https://www.saucedemo.com/')

 const login = page.locator('#login-button')
 const username = page.locator('#user-name')
 const password = page.locator('#password')
 const cart = page.locator('.shopping_cart_container')


 await username.fill('standard_user')
 await password.fill('secret_sauce')
 await login.click()

 //verify that cart is visible
 await expect (cart).toBeVisible()

 // verify that single product can be removed from cart
 await page.locator('#add-to-cart-sauce-labs-backpack').click()
 await expect (page.getByText('Remove')).toBeVisible()
 await page.locator('#remove-sauce-labs-backpack').click()
 const cartBadge = page.locator('[data-test="shopping-cart-badge"]')
 await expect (cartBadge).toBeHidden()
 

 // Verify multiple products can be removed from cart
 await page.locator('#add-to-cart-sauce-labs-backpack').click()
 await page.locator('#add-to-cart-sauce-labs-bike-light').click()
 await page.locator('#add-to-cart-sauce-labs-bolt-t-shirt').click()
 await page.locator('#remove-sauce-labs-backpack').click()
 await page.locator('#remove-sauce-labs-bike-light').click()
 await page.locator('#remove-sauce-labs-bolt-t-shirt').click()
 await expect (cartBadge).toBeHidden()
 })