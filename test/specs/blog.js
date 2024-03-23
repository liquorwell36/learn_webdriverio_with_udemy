describe('Blog', () => {
    it('Get the text of recent posts & assert them', async () => {
        await browser.url('/blog');

        const recentPostsLinks = await $$('#recent-posts-3 ul li');

        //Loop through the list and assert the text length is greater than 10
        for (const link of recentPostsLinks) {
            const text = await link.getText();
            await expect(text.length).toBeGreaterThan(10);
        }

        //Assert the total length of the list is 4
        await expect(recentPostsLinks).toHaveLength(5);
    });
});