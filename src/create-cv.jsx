import {inputsIformations} from "./input-info"

function CreateInputFields({input}){
    return(
        <section>
            <h3>{input.sectionName}</h3>
            {input.inputsLabels.map((label, index)=>{
                return(
                    <>
                        <label htmlFor={input.inputId[index]}>{label}</label>
                        <input type={input.inputTypes[index]} id={input.inputId[index]} />
                    </> 
                )
            })}
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