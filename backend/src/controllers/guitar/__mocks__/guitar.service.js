const guitarService = jest.mock('./guitar.service');

let mockData;

guitarService.findOne = jest.fn( id => Promise.resolve(
    mockData.find( p => p.id === id) ) 
);

guitarService.__setMockData = data => mockData = data;

module.exports = guitarService;
