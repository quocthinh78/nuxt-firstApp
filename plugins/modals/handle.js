import layout from './layout';

const VModal = {
    install(Vue) {
        this.EventBus = new Vue();
        Vue.component('v-modal', layout);
        Vue.prototype.$modal = {
            opens(params) {
                VModal.EventBus.$emit('open', params);
            },
            closes(params) {
                VModal.EventBus.$emit('close', params);
            }
        }
    }
}

export default VModal;