//Practice E-Commerce Site – SDET Unicorns
//https://practice.sdetunicorns.com/

describe('Home', () => {
    it('Open URL & assert title', async () => {
        //Open URL
        await browser.url('https://practice.sdetunicorns.com/');

        //Assert title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    });

    it('Open URL & assert URL', async () => {
        await browser.url('/about/');
        await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/');
    });

    it('Click get-started btn & assert url contains get-started text', async () => {
        //Open URL
        await browser.url('https://practice.sdetunicorns.com/');
        await $('#get-started').click();
        //Assert url contains get-started text
        await expect(browser).toHaveUrlContaining('get-started');
    });

    it('Click logo & assert url DOES NOT contains get-started text', async () => {
        //Open URL
        await browser.url('https://practice.sdetunicorns.com/');
        //Click Logo button
        await $('//img[@alt="Practice E-Commerce Site"]').click();
        //Assert url Does not contains get-started text
        await expect(browser).not.toHaveUrlContaining('get-started');
    });    

    it('Find heading element & assert the text', async () => {
        //Open URL
        await browser.url('https://practice.sdetunicorns.com/');
        //Find heading element
        const headingElemnt = await $('.elementor-widget-container h1');
        //Get the text
        const headingText = await headingElemnt.getText();
        //One way to assert the text
        //await expect(headingText).toEqual('Think different. Make different.');
        //Two way to assert the text
        await expect(headingElemnt).toHaveText('Think different. Make different.');
    });
});
