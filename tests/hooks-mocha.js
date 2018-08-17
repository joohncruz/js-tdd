describe('Hooks Mocha', () => {
  // Executar antes de cada bloco, executa uma vez.
  before(() => {
    console.log('before');
  });

  // roda uma vez, depois do bloco
  after(() => {
    console.log('after');
  });

  // executa todas as vezes, depois de cada bloco
  beforeEach(() => {
    console.log('beforeEach');
  });

  afterEach(() => {
    console.log('afterEach');
  });

  it('test 1', () => {
    console.log('test 1');
  });

  it('test 2', () => {
    console.log('test 2');
  });
});

// before
// beforeEach
// test 1
// afterEach
// beforeEach
// test 2
// afterEach
// after
