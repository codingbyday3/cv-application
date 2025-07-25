import {inputsIformations} from "./input-info"
import CreateCv from "./create-cv-file"
import "../styles/app.css"
import { useState } from "react"

function CreateInputFields({input, isActive, onShow}){

  return (
    <form action="">
      <button
        className="burger-menu"
        onClick={(e) => {
          e.preventDefault();
          onShow();
        }}
      >
        <h3>{input.sectionName}</h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>chevron-down</title>
          <path d="M5.84,9.59L11.5,15.25L17.16,9.59L16.45,8.89L11.5,13.84L6.55,8.89L5.84,9.59Z" />
        </svg>
      </button>

      {isActive && (
        <div className={`dropdown-content ${isActive ? "active" : ""}`}>
          {input.inputsLabels.map((label, index) => (
            <div className="input-container" key={input.inputId[index]}>
              <label htmlFor={input.inputId[index]}>{label}</label>
              <input
                type={input.inputTypes[index]}
                id={input.inputId[index]}
              />
            </div>
          ))}
          <div className="buttons-container">
            <button onClick={(e)=>e.preventDefault()}>Edit</button>
            <button onClick={(e)=>e.preventDefault()} type="submit">Submit</button>
          </div>
        </div>
      )}
    </form>
  );


}


export default function App(){

    const [openIndex, setOpenIndex] = useState(null)
    const [userInformations, setUserInformation] = useState({
    personal: {
        name: null,
        email: null,
        phoneNum: null,
    },
    education: {
        schoolName: null,
        studyTitle: null,
        studyDate: null,
    },
    experience: {
        companyName: null,
        positionTitle: null,
        mainResponsibilities: null,
        from: null,
        to: null,
    }
    });

    const handleToggle = (index)=>{
        setOpenIndex(prev => prev === index ? null : index);
    } 
    return(
        <>
            <header>
                <h1>CV <span >application</span> </h1>
            </header>
            <main>
                <aside>
                    <h2>Create your own <span>CV</span> here</h2>
                        {inputsIformations.map((info, index)=>
                            <CreateInputFields key={info.id} input={info} isActive={openIndex === index} onShow={() => handleToggle(index)}/>
                        )}
                </aside>
                <section className="cv-container">
                    <h2>Your's <span>CV</span></h2>
                    <CreateCv userInformations={userInformations}/>
                </section>
            </main>
        </>
    )
}