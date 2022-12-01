"use client";
import Link from "next/link";
export default function Artiuclation() {
    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <h2>Articulation</h2>
                    <Link href="/teaching">{`< Teaching`}</Link>
                    <br />
                    <br />
                    <Link href="/teaching/warmup">{`Warm Up >`}</Link><br />
                    <Link href="/teaching/sound">{`Sound >`}</Link><br />
                    <Link href="/teaching/flexibility">{`Flexibility >`}</Link><br />
                    <Link href="/teaching/rhythm">{`Rhythm >`}</Link><br />
                    <Link href="/teaching/intonation">{`Intonation >`}</Link><br /><br />
                </div>
                <div className="nine columns main-col">
                    <b>What is artiuclation?</b><br />
                    <p>Artiuclation is the start of sound.  For example, when we speak different words, each word has a characteristic sound or artiuclation depending on what letter the word starts with. If you are saying the word "TAH", the tongue is positioned so that
                        the tip of the tongue is on the roof of the mouth, right behind the front teeth.  When saying the word "DAH", the tongue is positioned in a similar position, but this time instead of the tip of the tongue, the articulation is pronunced from the front-middle of the tongue.
                        Try saying "TAH" and "DAH" a few times to feel the difference.  The "TAH" should feel a bit more pointed and precise.  The "DAH" should feel softer and more rounded.

                        <br /><br />
                        In musical articulation, we can control
                        the style that a note begins with by the kind of artiuclation we use.  Sometimes we need a very pointed or accented start to the sound (a "TAH" sound), or conversely we need a soft and rounded entrance for a delicate lyrical solo (a "DAH" sound).  On your instrument,
                        see if you can discern the difference by trying both starts to a note.  They should sound and feel slightly different stylistically, but both useful depending on musical notation and style.
                    </p>
                    <b>Types of articulations:</b>
                    <br />
                    <br />
                    <p><b>Tenuto</b> indicates to hold the note in question its full length value with a lyrical front to the note. Consider using a "DAH" sounding articulation.<br /></p>
                    <p> <b>Marcato</b> or <b>Accent</b>	indicates the note to be played with strong emphasis at the beginning of the note with slight decay at the end.  The note length should be unchanged. <br /></p>
                    <p> <b>Staccato	</b>signifies a shortened note exactly half the duraction of the printed note.  If the note is a quarter note with a staccato marking, the note should be played with the length of an eigth note.  Considering using a "TAH" attack.<br /></p>
                    <p><b>Legato</b> indicates musical expression that is to be played smoothly and connected.  The start of the phrase may be articulated delicately with a "DAH" sounding articulation and slurred for the rest of the phrase.<br /></p>
                </div>
            </div>
        </section>
    )
}