describe('topNavCarMenu', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`/`);

        await expect($('#nav\\:topNavCarMenu')).toBeExisting();
    });
});

