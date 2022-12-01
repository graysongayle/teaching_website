"use client";
import Link from "next/link";
export default function Flexibility() {
    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <h2>Flexibility</h2>
                    <Link href="/teaching">{`< Teaching`}</Link>
                    <br />
                    <br />
                    <Link href="/teaching/warmup">{`Warm Up >`}</Link><br />
                    <Link href="/teaching/sound">{`Sound >`}</Link><br />
                    <Link href="/teaching/rhythm">{`Rhythm >`}</Link><br />
                    <Link href="/teaching/articulation">{`Articulation >`}</Link><br />
                    <Link href="/teaching/intonation">{`Intonation >`}</Link><br /><br />
                </div>
                <div className="nine columns main-col">
                    <b>Why do we practice lip slurs?</b><br />
                    <p>Often in music, we come across passages or exercises that require quick changes between notes.  The ability to perform these quick changes in a seamless and effortless manner is called flexibility.  When we practice lip slurs, we are increasing our flexibility.
                        While playing the following exercises, focus must firstly be on beautiful sound followed by cleanliness and ease of the note changes.  It is very easy to concentrate too hard upon performing the correct notes, while letting the sound suffer.  Your throat and tongue
                        should be naturally relaxed and flexibile.  Your air should be in constant and concistent in motion.  Always try to produce your most beautiful sound.
                    </p>
                    <b>What are the benefits of lip slurs?</b>
                    <ol>
                        <li>
                            They increase flexibility.
                        </li>
                        <li>
                            They build range.

                        </li>
                        <li>
                            They develop tone.
                        </li>
                        <li>
                            They develop endurance.
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    )
}