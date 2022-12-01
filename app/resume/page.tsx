export default function Resume() {
    return (

        <section id="resume">
            <div className="row">
                <div className="two columns">
                    <h2>Resume</h2>
                    <a href={"/documents/resume.pdf"} target="_blank" download="Grayson Gayle, Resume.pdf" >Download Resume</a>
                </div>
                <div className="ten columns main-col">
                    <div className="row work">
                        <div className="four columns header-col">
                            <h1><span>Current Positions</span></h1>
                        </div>

                        <div className="eight columns main-col">
                            <p className="info"><b>Midland Symphony Orchestra</b><br />2nd Trumpet</p>
                        </div>
                        <div className="four columns header-col">
                        </div>

                        <div className="eight columns main-col">
                            <p className="info"><b>New World Symphony</b><br />Substitute Trumpet</p>
                        </div>
                        <div className="eight columns main-col">
                            <p className="info"><b>Austin Symphony Orchestra</b><br />Substitute Trumpet</p>
                        </div>
                    </div>
                    <div className="row work">

                        <div className="four columns header-col">
                            <h1><span>Teachers</span></h1>
                        </div>

                        <div className="eight columns main-col">
                            <p className="info"><b>Billy Hunter</b><br />Principal Trumpet, <i>Metropolitan Opera Orchestra</i> </p>
                        </div>
                        <div className="four columns header-col">
                        </div>
                        <div className="eight columns main-col">
                            <p className="info"><b>Adam Gordon</b><br />Former 2nd Trumpet, <i>Fort Worth Symphony</i> </p>
                        </div>
                        <div className="eight columns main-col">
                            <p className="info"><b>Randy Graham</b></p>
                        </div>
                    </div>
                    <div className="row education">
                        <div className="four columns header-col">
                            <h1><span>Education</span></h1>
                        </div>

                        <div className="eight columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <div>
                                        <b>The University of Texas at Austin</b>
                                        <p className="info"><i>Masters of Music in Trumpet Performance</i> <span>&bull;</span><em className="date">May 2022</em></p>
                                    </div>
                                    <div>
                                        <b>The University of Texas at Austin</b>
                                        <p className="info"><i>Bachelor of Business Administration</i> <span>&bull;</span><em className="date">May 2016</em></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}