describe('My side nav', () => {
  it('should get focus when opened', async () => {
      await browser.url(`/`);
      await expect($('button.optanon-allow-all.accept-cookies-button')).toBeExisting();
      await $('button.optanon-allow-all.accept-cookies-button').click();


      await expect($('#sitenav-sidenav-toggle')).toBeExisting();
      await $('#sitenav-sidenav-toggle').click();
      await expect($('a[data-autoid="nav:siteNavLogoSmall"]')).toBeFocused();
  });
});

