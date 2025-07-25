import {inputsIformations} from "./input-info"
import CreateCv from "./create-cv-file"
import "../styles/app.css"
import { useState } from "react"

function CreateInputFields({input}){
    return(
        <form action="">
            <button className="burger-menu">
                <h3>{input.sectionName}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>chevron-down</title>
                <path d="M5.84,9.59L11.5,15.25L17.16,9.59L16.45,8.89L11.5,13.84L6.55,8.89L5.84,9.59Z" /></svg>
            
            </button>
            {input.inputsLabels.map((label, index)=>{
                return(
                    <div className="input-container" key={input.inputId[index]}>
                        <label htmlFor={input.inputId[index]}>{label}</label>
                        <input type={input.inputTypes[index]} id={input.inputId[index]} />
                    </div>

                )
            })}
            <div className="buttons-container">
                <button>Edit</button>
                <button type="submit">Submit</button>
            </div>

        </form>
    )
}


export default function App(){
    const [openIndex, setOpenIndex] = useState(0)
    return(
        <>
            <header>
                <h1>CV <span >application</span> </h1>
            </header>
            <main>
                <aside>
                    <h2>Create your own <span>CV</span> here</h2>
                        {inputsIformations.map((info, index)=>
                            <CreateInputFields key={info.id} input={info} isActive={openIndex === index}/>
                        )}
                </aside>
                <section className="cv-container">
                    <h2>Your's <span>CV</span></h2>
                    <CreateCv />
                </section>
            </main>
        </>
    )
}