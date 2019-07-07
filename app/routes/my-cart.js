import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return [{name:'apple'}, {name:'banana'}, {name:'cherry'}];
    }
});