const util = require('./utils');

describe('utils', () => {
  

  it('should runLengthEncode work successfully', async () => {
   
    let p = util.runLengthEncode("AAAAAAAAAAAAABBCCCCDD" );
    expect(p).toEqual( "9A4A2B4C2D");
  });

  it('should runLengthEncode work successfully, caseSensitive', async () => {   
    let p = util.runLengthEncode("aA" );
    expect(p).toEqual( "1a1A");
  });

  
  it('should runLengthEncode work successfully with numbers', async () => {   
    let p = util.runLengthEncode("122333" );
    expect(p).toEqual( "112233");
  });

  it('should runLengthEncode work successfully whith a large entry', async () => {
    let p = util.runLengthEncode( "AAAAAAAAAAAA" );
    expect(p).toEqual( "9A3A");
  });

  it('should square work successfully whith positive numbers', async () => {
    let p = util.square( [1, 2, 3, 5, 6, 8, 9] );
    expect(p).toEqual( [1, 4, 9, 25, 36, 64, 81]);
  });

  it('should square work successfully whith negative numbers', async () => {
    let p = util.square( [-2, -1] );
    expect(p).toEqual(   [1, 4]);
  });

  it('should square work successfully whith negative and positive numbers', async () => {
    let p = util.square( [-10, -5, 0, 5, 10]);
    expect(p).toEqual(     [0, 25, 25, 100, 100]);
  });





});


