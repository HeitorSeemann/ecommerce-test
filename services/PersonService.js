const { test } = require('@playwright/test');
const mockDataBase = require('../tests/fixtures/person-mock.json');

class PersonService {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        const testInfo = test.info();
        this.apiEndpoint = testInfo.config.metadata.apiUrl;
    }

    async mockData() {
        const runtimeData = { ...mockDataBase };
        runtimeData.email = 'heitor@' + Date.now() + '.com';

        await this.page.route(
            (url) => url.href.endsWith('api/v1/person') || url.href.includes('api/v1/person'), 
            async (route, request) => {
                const type = request.resourceType();
                if (type === 'fetch' || type === 'xhr') {
                    await route.fulfill({
                        status: 200,
                        contentType: 'application/json',
                        body: JSON.stringify(runtimeData)
                    });
                } else {
                    await route.continue();
                }
            }
        );
        
        return runtimeData;
    }
}

module.exports = PersonService;
