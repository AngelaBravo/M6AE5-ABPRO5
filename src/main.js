import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

/*
 La actividad consiste en crear una aplicación que consume la API de PokeAPI
 con esta URL base https://pokeapi.co/api/v2/pokemon para los listados de pokemones
 y https://pokeapi.co/api/v2/pokemon/{id} para obtener el detalle de un pokemon|

 Utilizaremos de base este proyecto que utiliza Vue3 con Vite y Vue Router y 
 usaremos Composition API

 Se debe usar Bootstrap 5.3.7 para los estilos que ya está agregado por CDN en el index.html
 por lo que solo hay que asegurarse de que los templates usen las clases de Bootstrap.

    Requisitos:
    - Crear 5 vistas (Home, PokemonDetail, Favorites, NotFound, Header) utilizando Vue Router
    - Al menos alguna de las rutas debe usar parámetros de ruta (por ejemplo, para el detalle del pokemon)
    - La vista Home debe mostrar un listado de pokemones en cards con su imagen, nombre, tipo y 3 habilidades
    - cada card debe tener botones para agregar a favoritos y ver detalle
    - La vista Home debe mostrar 20 pokemones por pagina y permitir paginar entre ellos
    - La vista Home debe permitir filtrar los pokemones por tipo usando un select con los tipos que existen en la api
    - La vista Home debe permitir filtrar los pokemones por su habilidad usando un select con las habilidades que existen en la api
    - La vista Home debe permitir combinar ambos filtros (tipo y habilidad)
    - La vista Home debe permitir buscar pokemones por nombre
    - La vista Home debe permitir agregar pokemones a favoritos
    - La vista PokemonDetail debe mostrar el detalle de un pokemon seleccionado
    - La vista Favorites debe mostrar los pokemones agregados a favoritos
    - La vista Favorites debe permitir eliminar pokemones de favoritos
    - La vista Favorites debe permitir ordenar los pokemones alfabeticamente (A-Z, Z-A)
    - La vista Favorites debe paginar los pokemones mostrando 10 por pagina
    - La vista NotFound debe mostrar un mensaje de error para rutas no encontradas con un pokemon bonito al centro de la vista y mensaje ad hoc
    - El Header debe estar presente en todas las vistas y permitir navegar entre ellas
    - Inyectando el state o pasando props, en la vista principal de pokemones se debe mostrar una señal de que el pokemon ya está en favoritos.
 */