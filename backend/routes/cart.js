let eBay = require('ebay-node-api')



let ebay = new eBay({
    clientID: 'JatinCha-MyApp-PRD-05003a42e-99266900',
    env: 'PRODUCTION', // optional default = 'PRODUCTION'
    headers:{ // optional
        'X-EBAY-C-MARKETPLACE-ID': 'EBAY-IN' // For Great Britain https://www.ebay.co.uk
    }
})