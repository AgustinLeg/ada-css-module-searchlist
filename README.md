## SearchList

Crear un componente `SearchList` que

- renderice un `input` y una lista (`ul` con `li`)
- tome la prop `items`, que es un array de strings
- renderice cada item como `li` dentro del `ul`
- a medida que se escribe en el input, actualice la lista mostrando los items que contengan como substring lo ingresado. (p. ej.: si se ingresa "java" debe mostrarse "javascript")
- la lista _al realizar la búsqueda_ debe mostrarse ordenada alfabéticamente
- cuando el input está vacío, debe mostrar la lista normal con todos los ítems

**EXTRA:** si se ingresa algo en la búsqueda, resalta en cada ítem la substring ingresada, por ejemplo, si se ingresa java, javascript debería aparecer como: **java**script

**EXTRA 2:** Agregar un boton para poder eliminar un item de la lista
