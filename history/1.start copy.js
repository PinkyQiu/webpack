let { SyncBailHook } = require('tapable');

class Lesson {
    constructor() {
        this.hooks = {
            arch: new SyncBailHook(['name'])
        }
    }
    tap() {
        this.hooks.arch.tap('node', function(name) {
            console.log('start node', name);
            return "想停止学习"

        })
        this.hooks.arch.tap('react', function(name) {
            console.log('start react', name)
        })
    }
    start() {
        this.hooks.arch.call()
    }
}

let l = new Lesson();
l.tap();
l.Lesson()