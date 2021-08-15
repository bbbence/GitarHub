const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const billController = require('./bill.controller');
const billService = require('./bill.service');

jest.mock('./bill.service');

describe("bill controler", () => {
    const mockData = [{
        "id": 1,
        "user": {email: 'user@gmail.com'},
        "guitars": [{model: "Gibson Les Paul" }],
        "price": 850000,
        "shipped": true,
        "time": new Date(),
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        billService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const BILL_ID = 1;

        const request = mockRequest({
            params: {
                id: BILL_ID
            }
        });

        return billController.findOne(request, response, nextFunction)
            .then( () => {
                expect(billService.findOne).toBeCalledWith(BILL_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === BILL_ID)
                );                
            })
    });
});