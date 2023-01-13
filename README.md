# TERCER ENTREGA DEL PROYECTO FINAL

## Se debe entregar: 

Un menú de registro y autenticación de usuarios basado en passport local, guardando en la base de datos las credenciales y el resto de los datos ingresados al momento del registro.

- El registro de usuario consiste en crear una cuenta en el servidor almacenada en la base de datos, que contenga:
    - email 
    - password (La contraseña se almacenará encriptada en la DB)
    - nombre 
    - dirección, 
    - edad 
    - número de teléfono (debe contener todos los prefijos internacionales) 
    - foto o ávatar (Se podrá subir al servidor y se guardará en una carpeta pública del mismo a la cual se tenga acceso por url)

- Un formulario post de registro y uno de login. De modo que, luego de concretarse cualquiera de estas operaciones en forma exitosa, el usuario accederá a su home.
    - El usuario se logueará al sistema con email y password y tendrá acceso a un menú en su vista, a modo de barra de navegación. Esto le permitirá ver los productos totales con los filtros que se hayan implementado y su propio carrito de compras e información propia (datos de registro con la foto). Además, dispondrá de una opción para desloguearse del sistema.
    - Ante la incorporación de un usuario, el servidor enviará un email al administrador con todos los datos de registro y asunto "nuevo registro", a una dirección que se encuentre por el momento en una constante global.

- Envío de un mail y un mensaje de whatsapp al administrador desde el servidor, a un numero de contacto almacenado en una constante global.
    - El usuario iniciará la acción de pedido en la vista del carrito.
    - Será enviado una vez finalizada la elección para realizar la compra de productos.
    - El email contendrá en su cuerpo la lista completa de productos a comprar y en el asunto la frase 'nuevo pedido de...' y el nombre del usuario que los solicitó. En el mensaje de whatsapp se debe enviar la misma información del asunto del mail.
    - El usuario recibirá un mensaje de texto al número que haya registrado, indicando que su pedido ha sido recibido y se encuentra en proceso.

- El servidor trabajará con una base de datos DBaaS (ej. MongoDB Atlas) y estará preparado para trabajar en forma local o en la nube a través de la plataforma PaaS Heroku.
- Habilitar el modo cluster para el servidor, como opcional a través de una constante global.
- Utilizar alguno de los loggers ya vistos y así reemplazar todos los mensajes a consola por logs eficientes hacia la misma consola. En el caso de errores moderados o graves el log tendrá además como destino un archivo elegido.
- Realizar una prueba de performance en modo local, con y sin cluster, utilizando Artillery en el endpoint del listado de productos (con el usuario una vez logueado). Verificar los resultados.