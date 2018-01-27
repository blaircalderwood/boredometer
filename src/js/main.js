const mods = {
    refreshScreen: require('./refresh-screen')
}

const _modules = _('[data-mod]');

if(_modules) {
    _modules.forEach((mod) => {
        const name = mod.getAttribute('data-mod').split(/-/).reduce((sum, val) => {
            return sum + (val.charAt(0).toUpperCase() + val.slice(1));
        }, '');

        mods[name.charAt(0).toLowerCase() + name.slice(1)]();
    });
}
