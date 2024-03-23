describe('Navigation Menu', () => {
    it('Get the text of all menu items & assert them', async () =>  {
        await browser.url("/");

        const expectedLinks = [
            'Home',
            'About',
            'Shop',
            'Blog',
            'Contact',
            'My account',
        ];
        const actualLinks = [];
        //ChainablePromiseArrayが返り値になる。
        //書き方1
        //const navLinks = await $('#zak-primary-menu').$$('li[id*=menu]');
        //書き方２:一つの$$内で表現する方法
        const navLinks = await $$('#zak-primary-menu li[id*=menu]');

        for (const link of navLinks) {
            actualLinks.push(await link.getText());
        }

        await expect(expectedLinks).toEqual(actualLinks);

    });
});