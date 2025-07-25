export default function CreateCv({userInformations}){
    let firstName = ""
    let lastName = ""

    if(userInformations.personal.name){
        [firstName, lastName] = userInformations.personal.name.split(" ")
    }

    return(
        <article>
            <section className="cv-side-container">
                <div className="contacts">
                    <h4>CONTACTS</h4>
                    <address>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <title>phone</title>
                            <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>
                            <p>{userInformations.personal.phoneNum}</p>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                                <title>email</title>
                            <path d="M1 5H2V4H20V5H21V18H20V19H2V18H1V5M3 17H19V9H18V10H16V11H14V12H12V13H10V12H8V11H6V10H4V9H3V17M19 6H3V7H5V8H7V9H9V10H13V9H15V8H17V7H19V6Z" /></svg>
                            <p>{userInformations.personal.email}</p>
                        </div>
                    </address>
                </div>
                <div className="education">
                    <h4>EDUCATION</h4>
                    <div>
                        <p>{userInformations.education.schoolName}</p>
                        <p>{userInformations.education.studyTitle}</p>
                        <p>{userInformations.education.studyDate}</p>
                    </div>

                </div>
            </section>
            <section className="cv-main">
                <div className="user-heading">
                    <h3>{firstName} <span>{lastName}</span></h3>
                    <p>{userInformations.experience.positionTitle}</p>
                </div>
                <div className="cv-content">
                    <h4>WORK EXPERIENCE</h4>

                    <div>
                        <p className="previous-company">{userInformations.experience.companyName}</p>
                    </div>
                    <p className="previous-company-description">
                        {
                            userInformations.experience.mainResponsibilities
                        }
                    </p>
                    <div>
                        <p>From: {userInformations.experience.from}</p>
                        <p>To: {userInformations.experience.to}</p>
                    </div>


                </div>

            </section>
        </article>
    )
}