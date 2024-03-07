import Image from "next/image"
import Link from "next/link"
import SampleImage from "/public/vercel.svg"

export default function Projects() {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <Image src={SampleImage} width={100} alt="project image" />
            <Link href="https://github.com/PurpleNurps/">Project Link</Link>
        </section>
    )
}