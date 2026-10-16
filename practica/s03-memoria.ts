1ra parte 

vamos a crear un generic descriminated union type que nos permita modelar el resultado de una operación que puede ser exitosa o fallida.

Para ello, vamos a definir un tipo genérico llamado `Resultado<T>` que puede ser uno de dos casos:

1. Un caso exitoso, que contiene un valor de tipo `T`.
2. Un caso fallido, que contiene un mensaje de error.

Luego crearemos un funcion que revise si este generic es un numero positivo valido, y Resultado<number> sea verdarero


en uan segunda funcion usaremos un if que reciba Resultado<number> como verdadero y retorne 
un string con el valor del numero positivo, y si es falso retorne un string con el mensaje de error.    