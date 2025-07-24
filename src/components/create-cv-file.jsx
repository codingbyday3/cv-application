export default function CreateCv(){
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
                            <p>322 214 241</p>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
                                <title>email</title>
                            <path d="M1 5H2V4H20V5H21V18H20V19H2V18H1V5M3 17H19V9H18V10H16V11H14V12H12V13H10V12H8V11H6V10H4V9H3V17M19 6H3V7H5V8H7V9H9V10H13V9H15V8H17V7H19V6Z" /></svg>
                            <p>fdsfd@fdsfds.fds</p>
                        </div>
                    </address>
                </div>
                <div className="education">
                    <h4>EDUCATION</h4>
                    <div>
                        <p>Harward university</p>
                        <p>Master's degree from cs</p>
                        <p>12.3.2012</p>
                    </div>

                </div>
            </section>
            <section className="cv-main">
                <div className="user-heading">
                    <h3>Kfds <span>Ffdsfd</span></h3>
                    <p>fdasfd asdfasf</p>
                </div>
                <div className="cv-content">
                    <h4>WORK EXPERIENCE</h4>

                    <div>
                        <p className="previous-company">Microsoft</p>
                        <p>Engineer</p>
                    </div>
                    <p className="previous-company-description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae recusandae quaerat illum sit ea, ducimus libero at accusantium soluta, architecto perferendis facilis id modi numquam eum reiciendis temporibus nisi quo.
                    </p>
                    <div>
                        <p>From: 12.2.2024</p>
                        <p>To: 12.3.2025</p>
                    </div>


                </div>

            </section>
        </article>
    )
}