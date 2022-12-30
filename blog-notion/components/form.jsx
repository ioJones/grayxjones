const formInject = function (){
    return (
        <form action="POST">
            <h3>Title</h3>
            <label htmlFor="name">name</label>
            <input type="text" name="" id="name" />
            <label htmlFor="email">email</label>
            <input type="email" name="email" id="email" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default formInject
