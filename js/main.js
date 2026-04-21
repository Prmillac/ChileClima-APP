const weatherService = new WeatherApp();


const Home = {
    template: `
        <section class="weather-app__home">
            <div class="search-container mb-5 text-center">
                <h2 class="mb-3">Busca tu ciudad</h2>
                <input v-model="busqueda" type="text" class="form-control w-50 mx-auto" placeholder="Ej: Santiago, Valparaíso...">
            </div>

            <div class="row" v-if="ciudadesFiltradas.length > 0">
                <div v-for="ciudad in ciudadesFiltradas" :key="ciudad.id" class="col-12 col-md-6 col-lg-4 mb-4">
                    <article class="place-card shadow-sm h-100" @click="irADetalle(ciudad.id)" style="cursor:pointer">
                        <h5 class="place-card__name">{{ ciudad.nombre }}</h5>
                        <p class="text-muted">Presiona para ver el pronóstico real</p>
                        <div class="text-right">
                            <span class="badge badge-primary">Ver más →</span>
                        </div>
                    </article>
                </div>
            </div>
            
            <div v-else class="text-center my-5">
                <p class="lead">No encontramos ciudades que coincidan con "{{ busqueda }}"</p>
            </div>
        </section>
    `,
    data() {
        return {
            busqueda: '',
            ciudades: weatherService.ciudades // Traemos tus 15 ciudades
        }
    },
    computed: {
        
        ciudadesFiltradas() {
            return this.ciudades.filter(c => 
                c.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
            );
        }
    },
    methods: {
        irADetalle(id) {
            // Navegación programática con Vue Router
            this.$router.push(`/lugar/${id}`);
        }
    }
};


const Detalle = {
    template: `
        <div class="weather-app__detail" v-if="ciudad">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/">Inicio</router-link></li>
                    <li class="breadcrumb-item active">{{ ciudad.nombre }}</li>
                </ol>
            </nav>

            <div class="card p-4 shadow-lg border-0">
                <h2 class="display-4">{{ ciudad.nombre }}</h2>
                <hr>
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <p class="lead">Coordenadas: {{ ciudad.lat }}, {{ ciudad.lon }}</p>
                        <p>Aquí se cargarán los datos de la API de Open-Meteo usando la lógica del Módulo 5.</p>
                    </div>
                    <div class="col-md-6 text-center">
                        <button @click="$router.push('/')" class="btn btn-dark">Volver al listado</button>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return { ciudad: null }
    },
    created() {
        // Obtenemos el ID de la URL
        const id = this.$route.params.id;
        this.ciudad = weatherService.ciudades.find(c => c.id == id);
    }
};


const routes = [
    { path: '/', component: Home },
    { path: '/lugar/:id', component: Detalle }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(), 
    routes
});


const app = Vue.createApp({});
app.use(router);
app.mount('#app');