const shippingService = jest.mock('./shipping.service');

let mockData;

shippingService.findOne = jest.fn( id => Promise.resolve(
    mockData.find( p => p.id === id) ) 
);

shippingService.__setMockData = data => mockData = data;

module.exports = shippingService;
