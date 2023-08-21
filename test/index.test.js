const { renderLicenseChoice, renderLicenseBadge } = require('../index');



describe('renderLicenseBadge', () => {
    it('should return the MIT license badge', () => {
        const result = renderLicenseBadge('MIT');
        expect(result).toBe('![License](https://img.shields.io/badge/License-MIT-yellow.png)');
    });

    it('should return the Apache-2.0 license badge', () => {
        const result = renderLicenseBadge('Apache-2.0');
        expect(result).toBe('![License](https://img.shields.io/badge/License-Apache%202.0-blue.png)');
    });

   
});

