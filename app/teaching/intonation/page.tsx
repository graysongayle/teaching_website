"use client";
import Link from "next/link";
export default function Intonation() {
    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <h2>Intonation</h2>
                    <Link href="/teaching">{`< Teaching`}</Link>
                    <br/>
                    <br />
                    <Link href="/teaching/warmup">{`Warm Up >`}</Link><br />
                    <Link href="/teaching/sound">{`Sound >`}</Link><br />
                    <Link href="/teaching/flexibility">{`Flexibility >`}</Link><br />
                    <Link href="/teaching/rhythm">{`Rhythm >`}</Link><br />
                    <Link href="/teaching/articulation">{`Articulation >`}</Link><br /><br />
                </div>
                <div className="nine columns main-col">
                    <b>What is intonation?</b><br />
                    <p>Intonation in its most basic form is how accurate a certain pitch is.  Pitch is the frequency of a vibration.  A vibration can come from all sorts of things, such as the snapping of a rubber band, the whistle of a teakettle, or the hum of a vacuum cleaner.
                        Considering the analogy of a rubber band, the pitch of the plucked band is determined by the speed of the vibrations measured by cycles per second (cps).  In music, the exact measurement of
                        the tuning pitch "A" is 440cps.
                        <br />
                        <br />
                        A pitch or note that you play on an instrument may be flat, sharp, or in tune. If you think about a piano, every keystroke produces a different frequency of sound with varying cps, and for the most part, every pitch is in tune due to the precise construction of the piano.
                        However, on brass instruments, there
                        must a be stronger sensitivity to pitch, as we produce pitch by vibrating our lips to produce a buzz.  For example if playing a concert pitch "A" and we produce a frequency of 420cps, this is considered to be flat in pitch.  Conversely, if playing an "A" at
                        450cps, this is considered sharp.  The distance between the fundamental frequency of A440 and A450 is 10 cents, the unit of measure between two frequencies.
                        <br />
                        <br />
                        Listen below to "A".  Try humming the exact pitch, or an octave higher.  If the hum is perfectly in tune, you will hear no bumps in the sound as the frequencies are equal.  Once you settle in on humming perfectly in tune, try raising the frequency so that you hear
                        many bumps in the sound.  It should feel unpleasant.  That is the sensation of playing sharp.  Try humming at a less frequent vibration so that the hum is now flat. It should feel equally unpleasant.

                        <br />      <br />
                        <audio controls src="/intonation/a_tonic_track.mp3">

                            Your browser does not support the audio element.
                        </audio>


                    </p>
                    <br />
                    <b>Why is it important?</b>
                    <br />
                    <p>
                        As musicans we are constantly challenged to apporach musical expression and performance uniquely our own, but with the skills necessary to participate in an ensemble with many musicians at the same time.
                        We must always concern ourselves with the musical output of others.  It's all about excellence and becoming "one" with the greater entity.  As individual musicians, we commit to advancing our skills in the area of intonation, sound, rhythm, and dynamics,
                        for the greater potential of the ensemble.  For intonation, this might be playing the 5th of a chord perfectly balanced with the root.  For rhythm, are your two 16th notes lining exactly up with the 8th note pulse from the snare drum? If any of these abilities
                        are compromised, the ensemble is limited in it's ability to achieve full expression of the art.  And that is to create beautiful music.
                    </p>
                    <b>Want to learn more?</b>
                    <br />
                    <Link href="">Intervals and Just Harmony (advanced)</Link>

                </div>
            </div>
        </section>
    )
}