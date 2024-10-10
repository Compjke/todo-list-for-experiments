const data = [
    {id : 1 , name : '"siberia can code :)'},
    {id : 2 , body : {name : '"siberia can code :)'}},
    {id : 3 , type : "person", name : "siberia", lastName: "can code :)"},
]
const transformIntoCorrectObject = (incomingArr) => {

    return incomingArr.map(item => {
        const id = item.id
        let name = item.name
        console.log('body' in item)
        if(!name) {
            if(item.body && item.body.name) {
                name = item.body.name
            }
        }
        if (item.type=== 'person') {
            name = item.name + " " + item.lastName;
        }

        return { id , name}

    })

}

console.log(transformIntoCorrectObject(data))