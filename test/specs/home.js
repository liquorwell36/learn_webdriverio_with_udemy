//Practice E-Commerce Site – SDET Unicorns
//https://practice.sdetunicorns.com/

describe('Home', () => {
    it('Open URL & assert title', async () => {
        //Open URL
        await browser.url('https://practice.sdetunicorns.com/');

        //Assert title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    });
});

describe('About', () => {
    it('Open URL & assert URL', async () => {
        await browser.url('/about/');
        await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/');
    });
});