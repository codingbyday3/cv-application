import inputsIformations from "./input-info"

function CreateInputFields({info}){
    return(
        <section>

        </section>
    )
}


export default function App(){
    return(
        <>
            <header>
                <h1>CV application</h1>
            </header>
            <main>
                <h2>Create your own CV here</h2>
                <form action="">
                    {inputsIformations.map(info=>
                        <CreateInputFields key={info.id} input={info} />
                    )}
                </form>
            </main>
        </>
    )
}