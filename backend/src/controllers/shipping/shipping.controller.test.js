const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const shippingController = require('./shipping.controller');
const shippingService = require('./shipping.service');

jest.mock('./shipping.service');

describe("shipping controler", () => {
    const mockData = [{
        "id": 1,
        "user": {email: 'user@gmail.com'},
        "guitars": [{model: "Gibson Les Paul" }],
        "price": 850000,
        "address": "Sunshine Blvd. 269",
        "shipped": true,
        "company": "DHL",
        "time": new Date(),
        "active": true,
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        shippingService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const SHIPPING_ID = 1;

        const request = mockRequest({
            params: {
                id: SHIPPING_ID
            }
        });

        return shippingController.findOne(request, response, nextFunction)
            .then( () => {
                expect(shippingService.findOne).toBeCalledWith(SHIPPING_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === SHIPPING_ID)
                );                
            })
    });
});