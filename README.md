# NuevoRepo
Ejercicio práctico: Transacciones Bancarias

* Se creó un nuevo proyecto a partir de una plantilla basado SAP Fiori application 
![image](https://github.com/EnriqueGGmz/NuevoRepo/assets/93535655/94b2d572-da58-4793-a0f1-95284add18f1)

* Luego de crear la plantilla con los datos solicitados la estructura del proyecto quedara de la siguiente manera.
  ![image](https://github.com/EnriqueGGmz/NuevoRepo/assets/93535655/c2228d37-1185-4edc-b4b0-2eeae9c19249)

* Para crear los archivos yalm que nos ayudaran a realizar el llamado a un servicio oData o una REST API el comando que se debe usar para la creación de dichos archivos yalm es el siguiente: npm i -D ui5-middleware-simpleproxy se debe ejecutar desde la terminal se debieron haber agregado los siguientes archivos.
  ![image](https://github.com/EnriqueGGmz/NuevoRepo/assets/93535655/22c8dc88-5006-47bd-b7d4-65a20b4d851e)

*  Para la data consumida en el ejercicio se hizo la configuración de un mock server creado a través de postman.
    ![image](https://github.com/EnriqueGGmz/NuevoRepo/assets/93535655/b127749f-afe5-40d2-b0bd-bc9cf14724f6)
   
* Luego de tener la estructura definida de nuestro proyecto, comenzamos a construir la vista del ejercicio para esto debemos abrir nuestro archivo xml ubicado en la carpeta view donde lo podrás identificar por el nombre que le diste a la vista de tu archivo en la configuración de la plantilla seguido de la extensión xml.
  ![image](https://github.com/EnriqueGGmz/NuevoRepo/assets/93535655/bcd724f5-7e56-4d52-8bbc-50f2b649fbb6)
Para el ejercicio en cuestión se usó la plantilla proporcionada por UI5 Demo Kit: https://sapui5.hana.ondemand.com/#/entity/sap.m.Column/sample/sap.m.sample.Table/code el cual se implementó en el archivo que maneja la vista del proyecto.

* Se debe hacer la configuración del controlador del proyecto ubicado en la carpeta controller en el archivo con el nombre indicado en la plantilla seguido de la extensión .js
  ![image](https://github.com/EnriqueGGmz/NuevoRepo/assets/93535655/3d74f1fd-392b-47f8-97c9-3a4fa5cc04cd) donde se debe indicar las extensiones necesarias a usar por tu controlador y donde se va a trabajar la lógica de todo tu proyecto.

* En el archivo manifiest.json ubicado en la raíz de la estructura del proyecto vamos a configurar en la colección de sap.app el dataSources que es donde vamos a indicar la url que vamos a usar para nuestro servicio oData quedando de la siguiente manera.
  ![image](https://github.com/EnriqueGGmz/NuevoRepo/assets/93535655/cc62d9a7-ed6b-46c4-993c-2b947025dbab) dentro del mismo archivo se debe modificar en la colección de sap.ui
  ![image](https://github.com/EnriqueGGmz/NuevoRepo/assets/93535655/37e87e31-eaea-4192-a447-a1d334f434d6) en la siguiente imagen invoice1 -> refleja el servicio oData consumido inicialmente para las pruebas de ejemplo de cómo consumir la data inicialmente en la vista pero se está haciendo uso de la data creada en el mockServer de postman reflejada en el invoice.

*  Para indicar que items usara nuestra lista para reflejar data en la vista se debe indicar la instancia que se creó en el manifiest.Json en la colección de sap.iu5 que para efectos del ejercicio se usó la instancia invoice que hacer referencia a nuestro mock server que nos proporciona la data necesaria.

  ![image](https://github.com/EnriqueGGmz/NuevoRepo/assets/93535655/4b1159dd-a7fa-4293-a2f4-77cfad92d79b) , ![image](https://github.com/EnriqueGGmz/NuevoRepo/assets/93535655/55ab2750-1fca-419d-9f1e-fc1e96887361)

* Para efectos del ejercicio que nos tocó implementar creamos un archivo llamado formatter.js para aplicar la logica ahi de validar cuando el tipo de transaccion fuese crédito o débito el monto debía tener un color verde o rojo dependiendo del tipo de transaccion para la misma se debió tomar la data reflejada en la tabla del xml a través de un object number donde pasamos tipo de transacción y el monto para este ser evaluado en la función (weightState).

  ![image](https://github.com/EnriqueGGmz/NuevoRepo/assets/93535655/b50cb735-0702-45d1-891f-1c08d73cd6c9) , ![image](https://github.com/EnriqueGGmz/NuevoRepo/assets/93535655/82585bf9-615e-494c-b486-dd3448b62b23)

Nota: En caso de tener problemas para hacer la referencia al nuevo archivo creado formatter.js en este caso, se tuvo que agregar el mismo dentro de la carpeta controller y hacer referencia del archivo dentro del controlador de la vista, quedando de la siguiente manera: 

![image](https://github.com/EnriqueGGmz/NuevoRepo/assets/93535655/5dabd116-ff52-4286-9229-17fe4fe3b69b), ![image](https://github.com/EnriqueGGmz/NuevoRepo/assets/93535655/9f070d00-898c-4c2a-b166-7e8e338e0c15)








  







