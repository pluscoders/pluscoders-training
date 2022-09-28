function HomePage(props) {
    const handleSubmit = function (event) {
        event.preventDefault()

        const queryInput = event.target.query
        const query = queryInput.value
        try {

            searchInGoogle(query)

            props.onSearchedItem

        } catch (error) {
            alert(error.message)

        }
    }

    return <div>
        <header className="">
            <div className="flex">
                <div className="grow flex justify-around">
                    <a href="https://about.google/?fg=1&utm_source=google-ES&utm_medium=referral&utm_campaign=hp-header">Sobre Google</a>
                    <a href="https://store.google.com/ES?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=es-ES&pli=1">Tienda</a>
                </div>
                <div className="grow flex justify-around">
                    <a href="https://mail.google.com/mail/u/0/#inbox">Gmail</a>
                    <a href="https://www.google.es/imghp?hl=es&authuser=0&ogbl">Imágenes</a>
                </div>
            </div>
        </header>
        <main className="h-full flex flex-col items-center content-center">
            <img src="https://www.google.es/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png" alt="" />
            <form className="flex flex-col" action="" onSubmit={handleSubmit} >
                <input
                    className="rounded-md border h-12 pt-8 w-96" name="query"
                    type="text" />
            <button className="bg-gray-200 py-2 px-4 border hover:border-gray-400 rounded mt-8">Buscar con Google</button>
            </form>
            <div className="flex grow justify-around pt-8">
                <p>Ofrecido por Google en:</p>
                <a className="pl-8" href="">English</a>
                <a className="pl-8" href="">catalá</a>
                <a className="pl-8" href="">galego</a>
                <a className="pl-8" href="">euskara</a>
            </div>
        </main>
    </div>
}
