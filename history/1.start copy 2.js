let { SyncWaterfallHook } = require('tapable');

class Lesson {
    constructor() {
        this.hooks = {
            arch: new SyncWaterfallHook(['name'])
        }
    }
    tap() {
        this.hooks.arch.tap('node', function(name) {
            console.log('start node', name);
            return "学的不错"

        })
        this.hooks.arch.tap('react', function(data) {
            console.log('start react', data)
        })
    }
    start() {
        this.hooks.arch.call()
    }
}

let l = new Lesson();
l.tap();
l.Lesson()