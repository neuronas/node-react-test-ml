## Node React test


**Requiere:**

node >= 6

### Api

la api es un servidor NODE con Express que acepta metodos REST con parametros json

* [Mongo DB](http://mongodb.github.io/node-mongodb-native)(persistencia de datos)
* [Mongoose](https://github.com/Automattic/mongoose) (ORM)


### Client

para el cliente se utilizo:

* [Create React App](https://github.com/facebookincubator/create-react) (Borlerplate pre configurado)
* [React Bootstrap](https://react-bootstrap.github.io/)	(Bootstrap para React)
* [offcanvas](https://getbootstrap.com/docs/3.3/examples/offcanvas/) (Plantilla responsive)




### instalar dependencias

en una sola linea:
```bash
$ cd api && npm i -s && cd .. && cd client && npm i -s && cd ..
```
o desde dentro de cada directorio (api y client):
```bash
$ npm install --save
```



### correr API en ambiente dev


**sin persistencia de datos**
* los datos que devuelven los metodos /listar y /filtrar son tomados desde el archivo data.json

desde el directorio api/ ejecutar en una consola:

```bash
$ npm run dev
```

**con persistencia de datos**
* los datos iniciales se toman del archivo data.json y se cargan(se borran y vuelven a cargar) en la base de datos al ejecutar el servidor:

para correr servidor con Persistencia de datos configurar el archivo "api/.env"  con los valores:

```js
PERSIST=true
DB_HOST='mongodb://localhost'
DB_NAME='dbtest'
DB_PORT='27017'
```

**ejecutar previamente el deamon mongodB si no esta corriendo**

```bash
$ mongod
```
**finalmente iniciar el servidor**

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



### deploy en produccion


**Api:**
desde el directorio api/ ejecutar:
```bash
$ npm run prod
```
no se toman las configuraciones del archivo .env y las variables de ambiente se tienen que configurar en el propio ambiente, si las variables de ambiente no se configuran, toma los valores por defecto:
```js
PORT=4000
PERSIST=false
DB_HOST='mongodb://localhost'
DB_NAME='dbtest'
DB_PORT='27017'
```
**Client:**
desde el directorio client/ ejecutar:

```bash
$ npm run build
```
los archivos minificados resultantes que se encuentran en el directorio /build se deben hostear en un servidor de archivos:



