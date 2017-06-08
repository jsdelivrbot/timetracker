# Timetracker

Proyecto para prueba tecnica

## Deploy en Heroku

[https://glacial-shore-34654.herokuapp.com/](https://glacial-shore-34654.herokuapp.com/)

## Ejecutar en local

Para correr el sistema en local simplemente ejecutar los siguentes comandos:

```
npm install
npm start
```

La aplicacion deberia estar disponible en el puerto en [http://locahost:3000](http://locahost:3000)


## Datos de prueba

Para arrancar la aplicacion con datos de prueba, hay que modificar el codigo para insertar los datos a manera de estado inicial. Hay que reemplazar la linea 29 del archivo `src/reducers/initialState.js` con al siguiente linea:

```
# src/reducers/initialState.js
29: tasks: generatedTask
```

## Pendiente

Lamentablemente por tiempo hubo cosas que no pude implementar:

* Actualizacion de datos en el server
* Persistencia de datos en el cliente
* La grafica de datos no se actualiza dinamicamente
* la visualizacion del componente del cronometro se podria ver mucho mejor en movil
* Server side rendering para un mejor performance en dispositivos moviles de gama baja
* Simplificar la carga de datos dummy
