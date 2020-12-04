import loadfxt from '../index';

describe(loadfxt, () => {
  test('toArrayBuffer', () => {
    const buffer = loadfxt('test/fixtures/test.bin').toArrayBuffer();
    expect(new Uint8Array(buffer)).toEqual(new Uint8Array([1,2,3,4]))
  })

  test('toBinaryString', () => {
    const text = loadfxt('test/fixtures/test.txt').toBinaryString();
    expect(text).toEqual('this is a test\n');
  })

  test('toUtf8', () => {
    const utf8 = loadfxt('test/fixtures/utf8.txt').toUtf8();
    expect(utf8).toEqual('~𝘈Ḇ𝖢𝕯٤ḞԍНǏ𝙅ƘԸⲘ𝙉০Ρ𝗤Ɍ𝓢ȚЦ𝒱Ѡ𝓧ƳȤѧᖯć𝗱ễ𝑓𝙜Ⴙ𝞲𝑗𝒌ļṃŉо𝞎𝒒ᵲꜱ𝙩ừ𝗏ŵ𝒙𝒚ź1234567890!@#$%^&*()-_=+[{]};:\'",<.>/?\n');
  })

  test('toHex', () => {
    const hex = loadfxt('test/fixtures/test.bin').toHex();
    expect(hex).toEqual('01020304');
  })

  test('toJson', () => {
    const json = loadfxt('test/fixtures/test.json').toJson();
    expect(json).toEqual({ 'foo': 1 });
  })
})
