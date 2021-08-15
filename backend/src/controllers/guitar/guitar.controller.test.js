const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const guitarController = require('./guitar.controller');
const guitarService = require('./guitar.service');

jest.mock('./guitar.service');

describe("guitar controller", () => {
    const mockData = [{
        "id": 1,
        "brand": "Gibson",
        "model": "Les Paul",
        "color": "Sunburst",
        "description": "The legendary Gibson Les Paul",
        "price": 850000,
        "active": true,
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        guitarService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const GUITAR_ID = 1;

        const request = mockRequest({
            params: {
                id: GUITAR_ID
            }
        });

        return guitarController.findOne(request, response, nextFunction)
            .then( () => {
                expect(guitarService.findOne).toBeCalledWith(GUITAR_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === GUITAR_ID)
                );                
            })
    });
});