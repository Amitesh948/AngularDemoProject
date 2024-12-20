import { TextToSpecificLengthPipe } from './text-to-specific-length.pipe';

describe('TextToSpecificLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new TextToSpecificLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
