
import Mock from 'mockjs';

Mock.mock('/api/user', 'post', function (opt) {
    console.log(opt);
    return { name: '张三', age: 20 }
})

Mock.mock('/api/random', 'post', function (opt) {

    return Mock.mock({
        msg: '请求成功',
        status: 0,
        'list|2-5': [{
            'star|3-5': '♥♥♥',
            'number|1-100.1-10': 5,
            'boolean|1-2': true,
            'tel': /\d{11}/,
            'createDate':'@datetime',
            'color':'@color',
            'name':'@cname',
            'email':'@email',
            'address':'@county(true)',
            'city':'@city',
            'img':function () { 
                return Mock.Random.dataImage('200x100',this.name)
             }
        }]
    })
})