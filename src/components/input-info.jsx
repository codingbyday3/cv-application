
const inputsIformations =[
    {id:crypto.randomUUID(),sectionName: "general information", inputsLabels:["name", "email", "phone number"], inputTypes:["text", "email", "tel"], inputId:["name", "email", "phone"]},
    {id:crypto.randomUUID(),sectionName: "educational experience", inputsLabels:["school name", "title of study", "date of study"], inputTypes:["text", "text", "date"], inputId:["school", "title", "studyDate"]},
    {id:crypto.randomUUID(),sectionName: "practical experience", inputsLabels:["company name", "position title", "main responsibilities of your jobs", "from", "until"], inputTypes:["text", "text", "text", "date", "date"], inputId:["company", "position", "responsibilities", "from-date", "to-date"]}
]

export {inputsIformations}