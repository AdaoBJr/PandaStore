import mockedCategories from '../__mocks__/categories';

describe('Check result api', () => {
  it('check create function select Categories api', () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: async () => mockedCategories,
    });

    expect(global.fetch).toHaveBeenCalled();
  });
});
