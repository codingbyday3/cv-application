import {inputsInformations} from "./input-info"
import CreateCv from "./create-cv-file"
import "../styles/app.css"
import { useState } from "react"

function CreateInputFields({input, isActive, onShow, changeValue, onSubmit}){

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
          {input.fields.map(field => (
            <div className="input-container" key={field.id}>
              <label htmlFor={field.id}>{field.label}</label>
              <input
                type={field.type}
                id={field.id}
                onChange={(e) =>{
                  changeValue(field.id, e.target.value)
                }}
                disabled={input.isSubmited}
              />
            </div>
          ))}
          <div className="buttons-container">
            <button onClick={(e)=>e.preventDefault()}>Edit</button>
            <button
            onClick={(e)=>{
              e.preventDefault()
              onSubmit()
            }
            }
            disabled={input.isSubmited}
            type="submit">Submit</button>
          </div>
        </div>
      )}
    </form>
  );


}


export default function App(){
    const [inputSections, setInputSections] = useState(inputsInformations)
    const [openIndex, setOpenIndex] = useState(null)
    const [userInformations, setUserInformation] = useState({
      name: null,
      email: null,
      phone: null,
      school: null,
      title: null,
      studyDate: null,
      company: null,
      position: null,
      responsibilities: null,
      fromDate: null,
      toDate: null,
    });

    const handleToggle = (index)=>{
        setOpenIndex(prev => prev === index ? null : index);
    }

    const changeValue = (field, value)=>{
      setUserInformation(prev =>({
        ...prev,
        [field]:value
      }))
    }

    const handleSubmitBtn = (sectionId) => {
      setInputSections(prev =>
        prev.map(section =>
          section.id === sectionId
            ? { ...section, isSubmited: true }
            : section
        )
      );
    };

    return(
        <>
            <header>
                <h1>CV <span >application</span> </h1>
            </header>
            <main>
                <aside>
                    <h2>Create your own <span>CV</span> here</h2>
                        {inputSections.map((info, index)=>
                          <CreateInputFields 
                            key={info.id} input={info} 
                            isActive={openIndex === index} 
                            onShow={() => handleToggle(index) } 
                            changeValue={changeValue}
                            onSubmit={()=> handleSubmitBtn(info.id)}
                          />
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