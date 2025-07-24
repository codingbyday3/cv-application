import {inputsIformations} from "./input-info"
import CreateCv from "./create-cv-file"
import { Fragment } from "react"
import "../styles/app.css"

function CreateInputFields({input}){
    return(
        <section>
            <h3>{input.sectionName}</h3>
            {input.inputsLabels.map((label, index)=>{
                return(
                    <Fragment key={input.inputId[index]}>
                        <label htmlFor={input.inputId[index]}>{label}</label>
                        <input type={input.inputTypes[index]} id={input.inputId[index]} />

                    </ Fragment> 
                )
            })}
            <button>Edit</button>
            <button type="submit">Submit</button>
        </section>
    )
}


export default function App(){
    return(
        <>
            <header>
                <h1>CV <span >application</span> </h1>
            </header>
            <main>
                <aside>
                    <h2>Create your own CV here</h2>
                    <form action="">
                        {inputsIformations.map(info=>
                            <CreateInputFields key={info.id} input={info} />
                        )}
                    </form>
                </aside>
                <section>
                    <h2>Your's CV</h2>
                    <CreateCv />
                </section>
            </main>
        </>
    )
}