import { AboutSection, ContactSection, EducationSection, VisionSection } from "../components/SectionUi";
import Header from "../components/Header";

export default function About() {
    return (
        <>
            <Header />
            <div className="font-sans bg-gray-50 text-gray-700">
                <AboutSection />
                <EducationSection />
                <VisionSection />
                <ContactSection />
            </div>
        </>
    )
}