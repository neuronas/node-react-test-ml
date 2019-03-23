## Node React test


**Requiere:**

node >= 6

---

### Api

la api es un servidor NODE con Express que acepta métodos REST con parámetros json

y expone los siguientes endpoints:

lista de 4 productos que coinciden con :query

`/api/items?q=:query`

descripcion del producto :id

`/api/items/:id`


### Client

para el cliente se utilizó React con el siguiente borlerplate:

* [Create React App](https://github.com/facebookincubator/create-react) (Borlerplate pre configurado)


### instalar dependencias

en una sola linea, ejecutar desde el directorio raiz:
```bash
$ cd api && npm i -s && cd .. && cd client && npm i -s && cd ..
```
o desde dentro de cada directorio (api y client):
```bash
$ npm install --save
```



### correr API en ambiente dev

desde el directorio api/ ejecutar en una consola:

```bash
$ npm run dev
```

se accede al recurso por:

http://localhost:4000


### correr CLIENTE en ambiente dev

desde el directorio client/ ejecutar en una consola:

```bash
$ npm start
```

se accede al recurso por:

http://localhost:3000


### deploy en producción

**Api:**
desde el directorio api/ ejecutar:
```bash
$ npm run prod
```
no se toman las configuraciones del archivo .env y las variables de ambiente se tienen que configurar en el propio ambiente, si las variables de ambiente no se configuran, toma los valores por defecto:
```js
PORT=4000
AUTHORNAME=null
AUTHORLASTNAME=null
```
**Cliente:**
desde el directorio client/ ejecutar:

```bash
$ npm run build
```
los archivos minificados resultantes que se encuentran en el directorio /build se deben hostear en un servidor de archivos estáticos:
