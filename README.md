# RETO FRONTEND 2020

Hola, para poder pasar a la siguiente etapa en el proceso de selección de EDteam necesitas terminar el siguiente reto detallado a continuación:

1. Debes configurar ESlint para este proyecto con la guía de estilos de AirBnB
2. Debes crear un CRUD completo de Posts de un Blog usando la API fake: https://jsonplaceholder.typicode.com
3. OJO: El CRUD debe realizar las peticiones GET, POST, PUT, DELETE y funcionar en base a la respuesta obtenida de API. No sirve si sólo eliminas o editas Posts en el front sin hacer la petición a la API.
4. Debes manejar los posibles errores. Ejemplo: Que la información enviada sea correcta, controlar que sucedería si la API no responde, etc.
5. Almacenarás en LocalStorage la cantidad de Peticiones que hizo el usuario y debes actualizar el dato cada vez que una petición suceda de tal manera que viendo la data guardada en localStorage podamos saber cuantas peticiones GET se hizo, cuantas POST, cuantas PUT y cuantas DELETE. Nuevamente no olvides controlar qué sucede si localStorage ha sido limpiado.
6. Explícame al final de este archivo (edita este archivo) porqué usar Redux para este proyecto y si consideras que Redux no es necesario, también cuéntame por qué?

Es todo. Sencillo ¿verdad?

## Como enviar tu código con la solución

Deberás crear un Merge Request desde tu fork hacia la rama Dev de este proyecto en GitLab con toda la solución.

## Fecha límite

El plazo de envío de tu Merge Request (MR) es el jueves 05 de Marzo a las 19:00 p.m. (Colombia/Perú)

Estaremos esperando tu solución.

Un abrazo :)

## Respuesta pregunta 6

Este proyecto fue desarrollado con React Hooks que permite a los componentes funcionales usar el estado del componente local.
Con el react context api podemos manejar el estado en multiples componentes que no estan directamente conectados sin necesidad de redux.
Decidi hacerlo asi por que se me facilita para un proyecto pequeño y es mucho mmas facil de organizar.
