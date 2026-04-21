const store = Vuex.createStore({
    state() {
        return {
            usuario: null,
            isAuthenticated: false,
            favoritos: [] // Aquí guardaremos los IDs de las ciudades favoritas
        }
    },
    mutations: {
        SET_USER(state, payload) {
            state.usuario = payload;
            state.isAuthenticated = !!payload;
        },
        TOGGLE_FAVORITO(state, ciudadId) {
            const index = state.favoritos.indexOf(ciudadId);
            if (index > -1) state.favoritos.splice(index, 1);
            else state.favoritos.push(ciudadId);
        }
    },
    actions: {
        login({ commit }, datosUsuario) {
            // Simulamos una API: Si la pass es "123", entra
            if (datosUsuario.pass === "123") {
                commit('SET_USER', { nombre: datosUsuario.user, email: datosUsuario.user + "@gmail.com" });
                return true;
            }
            return false;
        },
        logout({ commit }) {
            commit('SET_USER', null);
        }
    }
});


const Login = {
    template: `
        <div class="row justify-content-center">
            <div class="col-md-4 card p-4 shadow">
                <h3 class="text-center">Iniciar Sesión</h3>
                <form @submit.prevent="hacerLogin">
                    <div class="form-group">
                        <label>Usuario (usa tu nombre)</label>
                        <input v-model="form.user" type="text" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label>Contraseña (usa 123)</label>
                        <input v-model="form.pass" type="password" class="form-control" required>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Entrar</button>
                    <p v-if="error" class="text-danger mt-2 text-center">{{ error }}</p>
                </form>
            </div>
        </div>
    `,
    data() { return { form: { user: '', pass: '' }, error: '' } },
    methods: {
        async hacerLogin() {
            const exito = await this.$store.dispatch('login', this.form);
            if (exito) this.$router.push('/');
            else this.error = "Credenciales incorrectas (tip: usa 123)";
        }
    }
};


const Favoritos = {
    template: `
        <div>
            <h2>Mis Ciudades Favoritas ❤️</h2>
            <div v-if="favs.length === 0" class="alert alert-warning">No tienes favoritos aún.</div>
            <div class="row" v-else>
                <div v-for="ciudad in favs" :key="ciudad.id" class="col-md-4 mb-3">
                    <div class="card p-3 border-info">
                        <h5>{{ ciudad.nombre }}</h5>
                        <router-link :to="'/lugar/' + ciudad.id">Ver Clima</router-link>
                    </div>
                </div>
            </div>
        </div>
    `,
    computed: {
        favs() {
            const all = new WeatherApp().ciudades;
            return all.filter(c => this.$store.state.favoritos.includes(c.id));
        }
    }
};

const routes = [
    { path: '/', component: { template: '<div><h1>Bienvenido a ChileClima</h1><p>Inicia sesión para ver tus favoritos.</p></div>' } },
    { path: '/login', component: Login },
    { path: '/favoritos', component: Favoritos, meta: { requiereAuth: true } }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});


router.beforeEach((to, from, next) => {
    if (to.meta.requiereAuth && !store.state.isAuthenticated) {
        next('/login');
    } else {
        next();
    }
});


const app = Vue.createApp({
    computed: {
        estaAutenticado() { return this.$store.state.isAuthenticated },
        usuario() { return this.$store.state.usuario }
    },
    methods: {
        salir() { 
            this.$store.dispatch('logout');
            this.$router.push('/login');
        }
    }
});
app.use(store);
app.use(router);
app.mount('#app');