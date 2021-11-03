import getGifs from '../helpers/getGifs';

// test asynchronous
describe('Fetch test', () => {
    it('should had ten elements', async () => {
        const gifs = await getGifs('category');

        expect(gifs.length).toBe(20);
    });
});
