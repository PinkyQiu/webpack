class SyncLoopHook {
    constructor (args) {
        this.task = []
    }
    tap (name, task) {
        this.task.push(task)
    }
    call(...args) {
        this.tasks.forEach(task => {
            let ret;
            do{
                ret = this.tasks(...args)
            }while(ret !== undefined)
        })
    }
}

let hook = new SyncLoopHook(['name']);
let total = 0;

hook.tap('react', function(name) {
    console.log('react', name)
    return ++this.total === 3? undefined : '继续学'
})

hook.tap('node', function(data) {
    console.log('node', data)
    return 'node ok'
})

hook.tap('vue', function(data) {
    console.log('vue', data)
})

hook.call()