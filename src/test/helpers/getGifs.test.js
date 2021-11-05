import getGifs from '../../helpers/getGifs';

// test asynchronous
describe('Fetch test', () => {
    it('should had twenty elements', async () => {
        const gifs = await getGifs('random');

        expect(gifs.length).toBe(20);
    });
});
