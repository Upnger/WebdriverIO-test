describe('topNavCarMenu', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`/`);

        await expect($('#nav\\:topNavCarMenu')).toBeExisting();
        const lang = await browser.execute(()=>document.documentElement.lang)

        // we assume that there is only a swedish and english variant of the page. Probably not true but this is not a real test suit.
        if(lang === 'sv' ){
            await expect($('#nav\\:topNavCarMenu')).toHaveTextContaining('Våra bilar');
        }else{
            await expect($('#nav\\:topNavCarMenu')).toHaveTextContaining('Our Cars');
        }
    });
});

