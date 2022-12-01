
"use client";
import Link from "next/link";
export default function Page() {

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <h2>Teaching</h2>
                    <br />
                    Documents<br />
                    <a href="/documents/contract.pdf" target="_blank" download="Private Lesson Info.pdf">Private Lessons.pdf</a>
                    <br/>
                    <br/>
                    Payments<br />
                    <a href="https://www.paypal.me/graysongayle" target={"_blank"} >PayPal</a><br />
                    <a href="https://www.venmo.com/u/Grayson-Gayle" target={"_blank"} >Venmo</a><br />
                    <a href="/zelle">Zelle</a><br/><br/>
                </div>
                <div className="nine columns main-col">
                    <h2>Overview</h2>
                    <p>
                        Every student has the ability to succeed, and it is my job as a teacher to guide them towards their fullest potential, regardless of whether or not they choose to pursue music professionally. I have high expectations for each of my students and demand a high level of excellence, but what I find most important is the journey of development towards each student’s successes. Cultivating their own musical voice is how each student will develop curiosity and creativity and discover their inner voice, their art, and themselves.
                    </p>
                    <p>Click on the links below links to learn more.</p>
                    <Link href="/teaching/warmup">{`Warm Up >`}</Link><br />
                    <Link href="/teaching/sound">{`Sound >`}</Link><br />
                    <Link href="/teaching/flexibility">{`Flexibility >`}</Link><br />
                    <Link href="/teaching/rhythm">{`Rhythm >`}</Link><br />
                    <Link href="/teaching/articulation">{`Articulation >`}</Link><br />
                    <Link href="/teaching/intonation">{`Intonation >`}</Link><br />
                </div>
            </div>
        </section>
    )
}

