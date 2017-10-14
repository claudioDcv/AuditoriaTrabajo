# AUDITORIA TEST
[![Build Status](https://travis-ci.org/claudioDcv/AuditoriaTrabajo.svg?branch=master)](https://travis-ci.org/claudioDcv/AuditoriaTrabajo) [![codecov](https://codecov.io/gh/claudioDcv/AuditoriaTrabajo/branch/master/graph/badge.svg)](https://codecov.io/gh/claudioDcv/AuditoriaTrabajo)

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
- Instalar MOCHA Globalmente (opcional)
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
node canculadora.js
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



- Eslint

- instalar eslint
```
npm install eslint --save-dev
```
- Hacer el setting up
```
./node_modules/.bin/eslint --init
```

- 1 `Answer questions about your style`
- 2 `Are you using ECMAScript 6 features? (y/N)`
`y`
- 3 `Are you using ES6 modules?`
`y`
- 4 `Where will your code run?` (Seleccionar con espaciador)
`Node`
- 5 `Do you use JSX?`
`n`
- 6 `What style of indentation do you use?`
```
  > Tabs
  Space
```
- 7 `What quotes do you use for strings?`
`Double`
- 8 `What line endings do you use?`
`Unix`
- 9 `Do you require semicolons?`
`n`
- 10 `What format do you want your config file to be in?`
```
  JavaScript
  YAML
❯ JSON
```



- Hacer convivir mocha con eslint

- en `.eslintrc` agregar el ambiente de mocha
```
"mocha": true
```

- Prueba Automatizada con travis

- Se crea archivo de Travis


- Revision de covertura con codecov
- se integra codecov a github
- se agrega dependencia de codecov
```
npm install --save-dev codecov
```
- agregar istambul para generar el archivo de covertura
```
npm install --save-dev nyc
```
- Ejecutar test con covertura
```
"test:coverage": "nyc mocha",
```
