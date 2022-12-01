
"use client";
import Link from 'next/link';
export default function Page() {
    return (
        <div >
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src={"/images/profilepic.jpg"} alt="Grayson Gayle Profile Pic" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>Hi, I'm Grayson.</h2>
                        <p>
                            I am a professional trumpet player and teacher in the DFW area. In May 2022, I graduated with my masters in trumpet performance from the University of Texas at Austin, studying with Billy Hunter, principal trumpet of the Metropolian Opera Orchestra in NYC.  I have played in numerous orchestras in Texas and other parts of the states, including the Austin Symphony Orchestra and the New World Symphony in Miami Beach, Florida.  I am also 2nd trumpet of the Midland Symphony in Midland, Michigan.
                            <br /><br/>
                            Outside of orchestral engagements, I have performed as a soloist in numerous weddings, funderals, and other events around the metroplex.  During the summer of 2013, I participated in Drum Corps International with Carolina Crown, earning a perfect score in brass performance and winning the corps very first World Class championship title.
                            <br /><br/>
                            Aside from music, I enjoy traveling, working out, listening to music, and cooking!
                        </p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>Grayson Gayle</span><br />
                                    <a href="mailto:grayson.gayle95@gmail.com">grayson.gayle95@gmail.com</a>
                                </p>
                            </div>
                       
                        </div>
                    </div>
                </div>

            </section >
        </div>
    )
}

