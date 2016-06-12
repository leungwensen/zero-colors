mocha.setup('bdd');

const expect = chai.expect;
const Color = require('../lib');

describe('Color', () => {
  it('Color initProps', () => {
    const color = new Color();
    expect(color.r).to.equal(255);
    expect(color.g).to.equal(255);
    expect(color.b).to.equal(255);
    expect(color.a).to.equal(1);
  });
  it('white is #fff', () => {
    expect(Color.fromString('white').toRgba()).to.deep.equal((new Color('#fff')).toRgba());
  });
  it('white is also #ffffff', () => {
    expect(Color.fromString('white').toRgba()).to.deep.equal((new Color('#ffffff')).toRgba());
  });
  it('white is new Color()', () => {
    expect(Color.fromString('white').toRgba()).to.deep.equal((new Color()).toRgba());
  });
  it('maroon is #800000', () => {
    expect(Color.fromString('maroon').toRgba()).to.deep.equal((new Color('#800000')).toRgba());
  });
  it('toGrey returns instance of Color', () => {
    expect(Color.fromString('maroon').toGrey() instanceof Color).to.equal(true);
  });
});

mocha.run();
