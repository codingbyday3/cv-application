
const inputsIformations =[
    {id:crypto.randomUUID(),sectionName: "General Information", inputsLabels:["Name:", "Email:", "Phone Number:"], inputTypes:["text", "email", "tel"], inputId:["name", "email", "phone"]},
    {id:crypto.randomUUID(),sectionName: "Educational Experience", inputsLabels:["School Name:", "Title of Study:", "Date of Study:"], inputTypes:["text", "text", "date"], inputId:["school", "title", "studyDate"]},
    {id:crypto.randomUUID(),sectionName: "Practical Experience", inputsLabels:["Company Name:", "Position Title:", "Main Responsibilities of your Jobs:", "From:", "Until:"], inputTypes:["text", "text", "text", "date", "date"], inputId:["company", "position", "responsibilities", "fromDate", "toDate"]}
]

export {inputsIformations}