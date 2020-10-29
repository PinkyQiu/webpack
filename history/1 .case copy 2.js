class SyncWaterfallHook {
    constructor (args) {
        this.task = []
    }
    tap (name, task) {
        this.task.push(task)
    }
    call(...args) {
        let [first, ...others] = this.tasks;
        let ret = first(...args)
        others.reduce((a,b) => {
            return b(a)
        }, ret)
    }
}

let hook = new SyncWaterfallHook(['name']);

hook.tap('react', function(name) {
    console.log('react', name)
    return 'react ok'
})

hook.tap('node', function(data) {
    console.log('node', data)
    return 'node ok'
})

hook.tap('vue', function(data) {
    console.log('vue', data)
})

hook.call()