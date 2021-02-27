const express = require('express');
let router = express.Router();
let eBay = require('ebay-node-api');
const { response } = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
let ebay = new eBay({
    clientID: 'JatinCha-MyApp-PRD-05003a42e-99266900',
    env: 'PRODUCTION', // optional default = 'PRODUCTION'
    headers:{ // optional
        'X-EBAY-C-MARKETPLACE-ID': 'EBAY-IN' // For Great Britain https://www.ebay.co.uk
    }
})

router.use((req,res,next) => {
    console.log(req.url);
    next();
})
router.get("/product", async(req, res) => {
  const keyword = req.query.keyword 
    console.log(keyword);
    let items = []
    const product = await ebay.findItemsByKeywords({
            keywords: keyword,
            sortOrder: 'BestMatch', //https://developer.ebay.com/devzone/finding/callref/extra/fndcmpltditms.rqst.srtordr.html
            pageNumber: 1,
            limit: 10
        }).then((data) => {
          for(let i=0;i<10;i++){
            let item = {}
            item.itemId = data[0]['searchResult'][0]['item'][i]['itemId']
            item.title = data[0]['searchResult'][0]['item'][i]['title']
            item.categoryId = data[0]['searchResult'][0]['item'][i]['primaryCategory'][0]['categoryId']
            item.categoryName = data[0]['searchResult'][0]['item'][i]['primaryCategory'][0]['categoryName']
            item.viewItemURL = data[0]['searchResult'][0]['item'][i]['viewItemURL']
            item.autoPay = data[0]['searchResult'][0]['item'][i]['autopay']
            item.sellerUserName = data[0]['searchResult'][0]['item'][i]['sellerInfo'][0]['sellerUserName']
            item.feedbackScore = data[0]['searchResult'][0]['item'][i]['sellerInfo'][0]['feedbackScore']
            item.positiveFeedbackPercent = data[0]['searchResult'][0]['item'][i]['sellerInfo'][0]['positiveFeedbackPercent']
            item.feedbackRatingStar = data[0]['searchResult'][0]['item'][i]['sellerInfo'][0]['feedbackRatingStar']
            item.topRatedSeller = data[0]['searchResult'][0]['item'][i]['sellerInfo'][0]['topRatedSeller']
            item.shippingprice = data[0]['searchResult'][0]['item'][i]['shippingInfo'][0]['shippingServiceCost'][0]['__value__']
            item.shippingType = data[0]['searchResult'][0]['item'][i]['shippingInfo'][0]['shippingType']
            item.shipToLocations = data[0]['searchResult'][0]['item'][i]['shippingInfo'][0]['shipToLocations']
            item.oneDayShippingAvailable = data[0]['searchResult'][0]['item'][i]['shippingInfo'][0]['oneDayShippingAvailable']
            item.returnsAccepted = data[0]['searchResult'][0]['item'][i]['returnsAccepted']
            item.pictureURLLarge = data[0]['searchResult'][0]['item'][i]['pictureURLLarge']
            item.currentPrice = data[0]['searchResult'][0]['item'][i]['sellingStatus'][0]['currentPrice'][0]['__value__'];
            items.push(item);
          }
        }, (error) => {
            console.log(error);
        })
    product;
    res.status(200).send(JSON.stringify(items));

})

module.exports = router ;