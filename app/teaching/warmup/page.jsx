"use client";
import Link from 'next/link';
export default function Warmup() {
    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <h2>Warmup</h2>
                    <Link href="/teaching">{`< Teaching`}</Link>
                    <br />
                    <br />
                    <Link href="/teaching/sound">{`Sound >`}</Link><br />
                    <Link href="/teaching/flexibility">{`Flexibility >`}</Link><br />
                    <Link href="/teaching/rhythm">{`Rhythm >`}</Link><br />
                    <Link href="/teaching/articulation">{`Articulation >`}</Link><br />
                    <Link href="/teaching/intonation">{`Intonation >`}</Link><br /><br />
                </div>
                <div className="nine columns main-col">

                    <b>What is the purpose of a warmup?</b><br />
                    <p>A warmup is a personal routine that sets the body and mind up for playing the trumpet for the remainder of the day. The warmup should hone in on the face, body, fingers, breath, airstream, tone, and posture.  Check in with your body.
                        Are there any points of tension? Is your breath relaxed and unconstricted? Are you sitting upright with your feet flat on the floor? If all of these objectives are met, proceed with the following exercises while maintaining this relaxed and focused presence.
                    </p>
                    <b>Objectives:</b>
                    <ol>
                        <li>
                            Breath is relaxed, unconstricted, and in continuous motion.
                        </li>
                        <li>
                            Sound is immediate, rich, open, and free of tension.
                        </li>
                        <li>
                            Your entire range has been played.
                        </li>
                    </ol>
                    <p>As soon as these objectives are met, you can move on to other fundamental focuses, such as sound, flexibility, articulation, or other music!</p>
                </div>
            </div>
        </section>
    )
}