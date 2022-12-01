
"use client";
import "./global.css";
import './default.css';
import Link from 'next/link';
export default function RootLayout({ children }) {
    return (
        <>
            <html lang="en">
                <body>
                    <nav id="nav-wrap">

                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                        <ul id="nav" className="nav">
                            <li className="current"><Link href="/">Home</Link></li>
                            <li className="current"><Link href="/resume">Resume</Link></li>
                            <li className="current"><Link href="/teaching">Teaching</Link></li>
                        </ul>
                    </nav>
                    {children}
                </body>
            </html>

        </>

    );
}