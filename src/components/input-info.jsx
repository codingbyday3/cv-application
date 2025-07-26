
const inputsIformations = [
  {
    id: crypto.randomUUID(),
    sectionName: "General Information",
    fields: [
      { id: "name", label: "Name:", type: "text" },
      { id: "email", label: "Email:", type: "email" },
      { id: "phone", label: "Phone Number:", type: "tel" },
    ],
  },
  {
    id: crypto.randomUUID(),
    sectionName: "Educational Experience",
    fields: [
      { id: "school", label: "School Name:", type: "text" },
      { id: "title", label: "Title of Study:", type: "text" },
      { id: "studyDate", label: "Date of Study:", type: "date" },
    ],
  },
  {
    id: crypto.randomUUID(),
    sectionName: "Practical Experience",
    fields: [
      { id: "company", label: "Company Name:", type: "text" },
      { id: "position", label: "Position Title:", type: "text" },
      { id: "responsibilities", label: "Main Responsibilities of your Jobs:", type: "text" },
      { id: "fromDate", label: "From:", type: "date" },
      { id: "toDate", label: "Until:", type: "date" },
    ],
  },
];


export {inputsIformations}