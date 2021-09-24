// use local storage as your database for now

const addToDb = id => {
    const exists = localStorage.getItem('shopping-cart')
    console.log(exists)
    if(!exists){
        localStorage.setItem(id, 1)
    }
    else{
        const newCount = parseInt(exists) + 1;
        localStorage.setItem(id, newCount)
    }
}
export {addToDb}