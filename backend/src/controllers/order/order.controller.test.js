const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const orderController = require('./order.controller');
const orderService = require('./order.service');

jest.mock('./order.service');

describe("order controler", () => {
    const mockData = [{
        "id": '000000000000000000000001',
        "user": {email: 'user@gmail.com'},
        "guitars": [{model: "Gibson Les Paul" }],
        "price": 850000,
        "shipped": true,
        "bill": {id: 1},
        "time": new Date(),
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        orderService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const ORDER_ID = '000000000000000000000001';

        const request = mockRequest({
            params: {
                id: ORDER_ID
            }
        });

        return orderController.findOne(request, response, nextFunction)
            .then( () => {
                expect(orderService.findOne).toBeCalledWith(ORDER_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === ORDER_ID)
                );                
            })
    });
});