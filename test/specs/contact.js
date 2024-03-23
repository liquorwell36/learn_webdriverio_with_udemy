describe('Contact', () => {
    it('Fill input fields & submit form and assert success message', async () => {
        await browser.url('/contact');

        //Input Name
        // const inputName = $('#evf-277-field_ys0GeZISRs-1');
        // await inputName.click();
        // await inputName.setValue('hello world');
        await $('.contact-name input').addValue('hello world');

        //Input Email
        const inputEmail = $('#evf-277-field_LbH5NxasXM-2');
        await inputEmail.click();
        await inputEmail.setValue('test@jump.com');
        
        //Input Phone
        const inputPhone = $('#evf-277-field_66FR384cge-3');
        await inputPhone.click();
        await inputPhone.setValue('test@jump.com');

        //Click submit button
        await $('button[type="submit"]').click();

        //Assert success text
        const successText = await $('.everest-forms-notice--success');
        await expect(successText).toHaveText('Thanks for contacting us! We will be in touch with you shortly');

    });
});