import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes:{
            light:{
                primary: '#0D013D',
                orange: '#FFB25E',
                pink: '#FF00C5',
                magic: '#1FE5D4'
            }
        }
    }
});
