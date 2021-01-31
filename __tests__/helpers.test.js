const {format_date, format_plural, format_url} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2021-03-20 6:33:03');

    expect(format_date(date)).toBe('3/20/2021');
});

test('format word to appear in plural forms when multiple items of that word exist', () => {
    const word = 'TiGGer';
    const amount = 2;

    expect(format_plural(word, amount)).toBe('TiGGers');
});

test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.smartguy.com/gfedcba/');
    const url3 = format_url('https://www.quant.com?q=adios');

    expect(url1).toBe('test.com');
    expect(url2).toBe('smartguy.com');
    expect(url3).toBe('quant.com');
});