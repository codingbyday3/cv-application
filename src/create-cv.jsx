function CreateInputFields(){
    return(
        <form action="">
            <section>

            </section>
        </form>
    )
}


export default function App(){

    const inputsIformations =[
        {sectionName: "general information",numOfInputs:3, inputsLabels:["name", "email", "phone number"], inputTypes:["text", "email", "tel"]},
        {sectionName: "educational experience",numOfInputs:3, inputsLabels:["school name", "title of study", "date of study"], inputTypes:["text", "texe", "date"]},
        {sectionName: "practical experience",numOfInputs:5, inputsLabels:["company name", "position title", "main responsibilities of your jobs", "from", "until"], inputTypes:["text", "text", "text", "date", "date"]}
    ]
    return(
        <>
            <header>
                <h1>CV application</h1>
            </header>
            <main>

            </main>
        </>
    )
}