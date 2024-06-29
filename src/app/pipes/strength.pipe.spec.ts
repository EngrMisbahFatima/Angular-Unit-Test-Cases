import { pipe } from 'rxjs';
import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('create an instance', () => {
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });

  it('should be weak', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(4)).toEqual('4 (weak)')
  });

  it('should be strong', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(12)).toEqual('12 (strong)')
  }); 

  it('should be strongest', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(25)).toEqual('25 (strongest)')
  }); 
});
