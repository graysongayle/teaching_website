"use client";
import Link from 'next/link';
export default function Sound() {
    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <h2>Sound</h2>
                    <Link href="/teaching">{`< Teaching`}</Link>
                    <br />
                    <br />
                    <Link href="/teaching/warmup">{`Warm Up >`}</Link><br />
                    <Link href="/teaching/flexibility">{`Flexibility >`}</Link><br />
                    <Link href="/teaching/rhythm">{`Rhythm >`}</Link><br />
                    <Link href="/teaching/articulation">{`Articulation >`}</Link><br />
                    <Link href="/teaching/intonation">{`Intonation >`}</Link><br /><br />
                </div>
                <div className="nine columns main-col">
                    <b>Sound Development</b>
                    <p>Simply put, sound is everything. Sound is what makes music beautiful. It describes the tone or pitch we perceive.  When musicians discuss tone, it's often about the timbre or the characteristic qualities of the pitch that we hear.
                        <br /><br />Descriptors for great trumpet tone might be: <b>rich, brilliant, bright, brassy, strong, stately, full</b>.
                        <br />Descriptors an undesirable trumpet tone might be: <i>dull, tense, thin, constricted, unstable, crackly</i>.
                        <br />
                        <br />
                        <p>
                            The quality of our tone takes years to develop.  Find a trumpet player's sound that your admire and want to sound like <i>(very important!)</i>.  When we listen to great trumpet players, focus on the quality of tone that is produced and imagine trying to produce that tone yourself. Make some notes about what is different between your sound and their sound.
                        </p>


                        <b>***Very Important Information***</b>
                        <br />The development of sound is of <i><u>crucial</u></i> to your progress as a musician and should be the <i><u>forefront of focus when playing any music or exercise</u></i>. 
                        
                        
                        When playing the trumpet, focus on some of the great trumpet tone descriptors above as well as your idolized sound you have discovered.</p>

                </div>
            </div>
        </section>
    )
}