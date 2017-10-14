# MOCHA
- Test unitario para javascript
- Corre en Node JS (es similar a la maquina virtual de java)



- instalar NODE JS
```
node --version
v6.10.2
npm --version
5.4.2
```
- Instalar MOCHA Globalmente o Localmente (opcional)
```
sudo npm install --global mocha
```
- Iniciar proyecto de NODE
```
npm init
```

- Mocha localmente
```
npm install --save-dev mocha
```


- Probar que el archivo se ejecuta
```
node index.js
```

- Ejecutar las pruebas con Mocha
```
npm run test
```


```javascript

//Archivo maestro
function suma(n1, n2) {
  return n1 + n2;
}


// test unitarios
describe('test func a', function() {
  it('should return 3 when the params 1,2', function() {
    //codigo
    const salida = a(1,2);
    assert.equal(3, salida);
    //fin del codigo
  });

  it('should return 10 when the params 5,5', function() {

    //codigo

    const salida = suma(5,5);
    assert.equal(10, salida);

    //fin del codigo
  });


});
```
