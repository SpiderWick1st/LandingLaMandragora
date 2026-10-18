# Proyecto: La Mandrágora

## 1. Contexto y documentación

La documentación persistente del proyecto está en:

`/home/spiderwick/Documentos/Obsidian/Desarrollo/Mandragora/`

Archivos disponibles:
- `Inicio.md`: descripción general y objetivos.
- `Contexto.md`: contexto del negocio y requisitos funcionales.
- `Arquitectura.md`: estructura técnica y decisiones de arquitectura.
- `Tareas.md`: tareas pendientes y estado del trabajo.

### Uso eficiente de la documentación

- Consulta `Inicio.md` cuando necesites contexto general del proyecto.
- Consulta `Tareas.md` al iniciar una tarea que requiera conocer el estado del trabajo.
- Lee `Contexto.md` cuando la tarea afecte a requisitos, contenido o reglas del negocio.
- Lee `Arquitectura.md` cuando necesites comprender o modificar la estructura técnica.
- Lee las cuatro notas completas únicamente cuando sea necesario para una tarea amplia.
- No vuelvas a leer información que ya esté disponible y siga vigente en el contexto actual.
- No explores archivos ajenos a la tarea solicitada.
- No reproduzcas documentación completa en tus respuestas.

## 2. Flujo de trabajo

Antes de modificar código:

1. Identifica el objetivo y el alcance de la tarea.
2. Consulta únicamente la documentación necesaria.
3. Inspecciona los archivos relevantes del proyecto.
4. Comprueba las implementaciones existentes antes de proponer cambios.
5. Identifica posibles efectos secundarios.

Durante el desarrollo:

- Implementa la solución más sencilla que cumpla los requisitos.
- Respeta las convenciones y la arquitectura existentes.
- Reutiliza componentes y funciones cuando sea apropiado.
- Evita refactorizaciones ajenas a la tarea.
- No añadas dependencias si puedes resolverlo razonablemente con las existentes.
- No inventes requisitos ni información comercial.

Al finalizar:

1. Ejecuta las comprobaciones pertinentes para el cambio realizado.
2. Corrige los errores introducidos por la implementación.
3. Actualiza `Tareas.md` cuando cambie el estado de una tarea o se identifiquen pendientes relevantes.
4. Actualiza `Arquitectura.md` solo si cambia una decisión o característica técnica relevante.
5. Actualiza `Contexto.md` solo si cambian requisitos o funcionalidades del negocio.
6. Mantén la documentación breve y evita duplicar información.
7. Resume los cambios, las comprobaciones realizadas y los pendientes.

No marques una tarea como completada si no has verificado razonablemente su resultado.

## 3. Reglas de desarrollo

- Respeta la arquitectura y las tecnologías existentes.
- Revisa el código antes de modificarlo.
- Mantén los cambios limitados al objetivo solicitado.
- No elimines funcionalidades sin autorización.
- No inventes datos de contacto, horarios, precios ni información comercial.
- No afirmes que una prueba se ejecutó si no la ejecutaste.
- No introduzcas secretos, credenciales ni claves privadas en el repositorio.
- Evita cambios de formato o refactorizaciones masivas innecesarias.

## 4. Reglas de Git

- Trabaja exclusivamente en la rama `dev`.
- Comprueba la rama actual antes de realizar operaciones de Git que puedan modificarla.
- Si no estás en `dev`, no cambies de rama automáticamente: informa al usuario.
- No cambies a `main`.
- No realices merges hacia `main` ni modifiques la rama `main`.
- No ejecutes `git commit`, `git push`, `git reset --hard` ni otras operaciones destructivas sin autorización explícita.
- No sobrescribas ni descartes cambios del usuario.
- Antes de finalizar, informa si quedan cambios sin guardar en Git.

## 5. Eficiencia de tokens

- Resuelve primero la petición concreta; no hagas una auditoría general salvo que se solicite.
- Inspecciona solo los archivos necesarios.
- Evita búsquedas repetidas y lecturas redundantes.
- No solicites ni generes informes extensos cuando baste un resumen.
- No expliques cada operación rutinaria.
- No añadas documentación por cambios triviales que no alteren el conocimiento del proyecto.
- Si falta información indispensable, pregunta antes de asumirla.
- Si puedes completar la tarea con la información disponible, procede sin preguntas innecesarias.

## 6. Formato de respuesta

Al terminar una tarea, informa brevemente:

- **Cambios:** qué se modificó.
- **Verificación:** qué pruebas o comprobaciones se realizaron.
- **Documentación:** qué notas se actualizaron, si corresponde.
- **Git:** estado de los cambios y rama actual, cuando sea relevante.

No incluyas explicaciones extensas si el trabajo realizado es sencillo.