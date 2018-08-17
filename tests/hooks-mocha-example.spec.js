describe('Hooks Mocha Example', () => {
  let arr = [1, 2, 3];

  // Executar antes de cada bloco, executa uma vez.
  before(() => {
    // inicia uma conexao no banco
    // criar um conjunto de dados
  });

  // roda uma vez, depois do bloco
  after(() => {
    // fecha uma conexao do banco
    // apagar esse conjunto de dados
  });

  // executa todas as vezes, depois de cada bloco
  beforeEach(() => {
    arr = [1, 2, 3];
  });

  // roda todas as vezes, depois de cada bloco
  afterEach(() => {

  });

  it('should have a size of 4 when push another value to the array', () => {
    arr.push(4);
    console.log(arr.length); // 4
  });

  it('should have a size of 2 when pop a value from the array', () => {
    arr.pop();
    console.log(arr.length); // 2
  });

  it('should remove the value 3 when use pop in the array', () => {
    console.log(arr.pop() === 3); // true
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
