# Tareas para arreglar `CardPizza`

## Bloqueante

- [ ] Agregar `export default` en `src/components/CardPizza.jsx`.
- [ ] Verificar que el nombre del componente coincida con el import: usar `CardPizza` dentro del archivo.

## Props y datos

- [ ] Unificar los nombres de las props entre `CardsPizzas.jsx` y `CardPizza.jsx`.
- [ ] Elegir una sola convencion y mantenerla en todo el flujo:
  - opcion A: `nombre`, `precio`, `ingredientes`, `img`
  - opcion B: `name`, `price`, `ingredients`, `img`
- [ ] Corregir `CardsPizzas.jsx` para leer las propiedades reales de `dbFicticia.js`.
- [ ] Confirmar que `dbFicticia.js` use la misma convencion elegida.

## Render del componente

- [ ] Reemplazar el contenido temporal de la card por los datos reales.
- [ ] Usar la prop `img` en `Card.Img`.
- [ ] Usar la prop del nombre en `Card.Title`.
- [ ] Mostrar ingredientes en el cuerpo de la tarjeta.
- [ ] Mostrar el precio formateado con `valorCL`.

## Revision final

- [ ] Levantar el proyecto y comprobar que ya no aparece el error de `default export`.
- [ ] Revisar en pantalla que se rendericen todas las pizzas.
- [ ] Confirmar que ninguna prop llegue como `undefined`.
