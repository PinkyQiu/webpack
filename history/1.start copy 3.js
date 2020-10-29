let { SyncLoopHook } = require('tapable');

class Lesson {
    constructor() {
        let index = 0;
        this.hooks = {
            arch: new SyncLoopHook(['name'])
        }
    }
    tap() {
        this.hooks.arch.tap('node', function(name) {
            console.log('start node', name);
            return ++this.index === 3? undefined : '继续学'

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