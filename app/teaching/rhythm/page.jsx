"use client";
import Link from "next/link";
export default function Artiuclation() {
    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <h2>Rhythm</h2>
                    <Link href="/teaching">{`< Teaching`}</Link>
                    <br />
                    <br/>
                    <Link href="/teaching/warmup">{`Warm Up >`}</Link><br />
                    <Link href="/teaching/sound">{`Sound >`}</Link><br />
                    <Link href="/teaching/flexibility">{`Flexibility >`}</Link><br />
                    <Link href="/teaching/articulation">{`Articulation >`}</Link><br />
                    <Link href="/teaching/intonation">{`Intonation >`}</Link><br /><br />
                </div>
                <div className="nine columns main-col">
                    <b>What is rhythm?</b><br />
                    <p>Rhythm is the pattern of sound, silence, and emphasis in music.  Rhythm dictates when notes are played and for how long.  All members of an ensemble are responsible for playing
                        with rhtyhmic integrity as indicated by the composer of the music.
                    </p>
                    <b>Elements of Rhythm</b>
                    <br />
                    <ol>
                        <li>
                            The <b>Time Signature</b> indicates the number of beats per measure as well as how long each of these beats last.  In a time signature, the bottom number indicates the duration of a beat. The top number indicates how many of those beats
                            are in one measure.  For example, in 3/4 time, there are three beats per measure (top number) with a quarter note (bottom number) being the duration of each beat.  A time signature with an 8 on the bottom, indicates that a beat corresponds with an eigth note.
                            An example of this is commonly 6/8 time.
                        </li>
                        <li>
                            <b>Meter</b> is the generic term for how music is divided into different time signatures.  Duple meter indicates when beats appear in groups of two (2/4, 4/4, cut time).  Triple meter indicates when beats appear in groups of three. And quadruple meter beats appear in groups of four.
                        </li>
                        <li>
                            <b>Tempo</b> is the speed at which music is played and is often indicated on the music.  Tempo is indicated by either beats per minute (bpm), italian terminiology ("largo", "andante", "allegro", etc), or by modern language ("fast", "slow").
                        </li>
                        <li>
                            <b>Syncopation</b> are rhythms that do not fall on strong downbeats of individual measures.  A syncopated rhythm will put empphasis on weaker beats, such as second eigth note in a 4/4 measure.  More complicated rhythms tend to include some sort of syncopation.
                        </li>
                        <li>
                            <b>Polyrhythms</b> are rhythms that layer one type of rhythm on top of another.  A common occurance of this is playing quarter-note triplets over a half note in a 4/4 measure.
                        </li>
                    </ol>


                </div>
            </div>
        </section>
    )
}