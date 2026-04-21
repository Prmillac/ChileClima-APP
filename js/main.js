const store = Vuex.createStore({
    state() {
        return {
            ciudades: new WeatherApp().ciudades,
            favoritos: [],
            unidad: 'C'
        }
    },
    mutations: {
        TOGGLE_FAVORITO(state, id) {
            const index = state.favoritos.indexOf(id);
            if (index > -1) state.favoritos.splice(index, 1);
            else state.favoritos.push(id);
        }
    }
});


const Home = {
    template: `
        <section>
            <div class="jumbotron text-center bg-white shadow-sm">
                <h1 class="display-4">¿Cómo está el clima hoy?</h1>
                <input v-model="buscar" type="text" class="form-control form-control-lg w-50 mx-auto mt-4" placeholder="Buscar ciudad en Chile...">
            </div>
            <div class="row">
                <div v-for="ciudad in filtradas" :key="ciudad.id" class="col-md-4 mb-4">
                    <div class="card h-100 shadow-sm border-0 place-card">
                        <div class="card-body">
                            <h5 class="card-title">{{ ciudad.nombre }}</h5>
                            <button @click="verDetalle(ciudad.id)" class="btn btn-outline-primary btn-sm">Ver Pronóstico</button>
                            <button @click="toggleFav(ciudad.id)" class="btn btn-link text-danger">
                                {{ esFav(ciudad.id) ? '❤️' : '🤍' }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    data() { return { buscar: '' } },
    computed: {
        filtradas() {
            return this.$store.state.ciudades.filter(c => c.nombre.toLowerCase().includes(this.buscar.toLowerCase()));
        }
    },
    methods: {
        verDetalle(id) { this.$router.push('/lugar/' + id); },
        toggleFav(id) { this.$store.commit('TOGGLE_FAVORITO', id); },
        esFav(id) { return this.$store.state.favoritos.includes(id); }
    }
};


const Detalle = {
    template: `
        <div v-if="ciudad">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb bg-transparent p-0">
                    <li class="breadcrumb-item"><router-link to="/">Chile</router-link></li>
                    <li class="breadcrumb-item active">{{ ciudad.nombre }}</li>
                </ol>
            </nav>
            <div class="card shadow border-0 p-4">
                <h2>{{ ciudad.nombre }}</h2>
                <p class="text-muted">Lat: {{ ciudad.lat }} | Lon: {{ ciudad.lon }}</p>
                <div class="alert alert-warning" v-if="alerta">⚠️ Aviso: Se esperan temperaturas extremas en la zona.</div>
                <div class="row mt-4">
                    <div class="col-md-6">
                        <h4>Estadísticas Semanales</h4>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Promedio: 18°C</li>
                            <li class="list-group-item">Máxima: 24°C</li>
                            <li class="list-group-item">Mínima: 12°C</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() { return { ciudad: null, alerta: true } },
    created() {
        const id = this.$route.params.id;
        this.ciudad = this.$store.state.ciudades.find(c => c.id == id);
    }
};


const routes = [
    { path: '/', component: Home },
    { path: '/lugar/:id', component: Detalle },
    { path: '/favoritos', component: { template: '<h2 class="text-center">Tus ciudades favoritas aparecerán aquí.</h2>' } }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});

// 5. APP INIT
const app = Vue.createApp({});
app.use(store);
app.use(router);
app.mount('#app');