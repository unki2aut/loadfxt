import * as fs from 'fs';
import * as path from 'path';

class Fixture {
  constructor(private readonly value: Buffer) {}

  public toBinaryString(): string {
    return this.value.toString('binary');
  }

  public toHex(): string {
    return this.value.toString('hex');
  }

  public toUtf8(): string {
    return this.value.toString('utf8');
  }

  public toJson(): object {
    return JSON.parse(this.toBinaryString().trim());
  }

  public toArrayBuffer(): ArrayBuffer {
    // `Buffer.buffer` might contain more data the the read fixture,
    // so we need to use `slice` to only get the data of the fixture.
    return this.value.buffer.slice(this.value.byteOffset, this.value.byteOffset + this.value.byteLength);
  }
}

export default function loadfxt(filePath: string): Fixture {
  return new Fixture(fs.readFileSync(path.normalize(filePath)));
}
