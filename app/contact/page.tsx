import Footer from "@/components/Footer/Footer";
import BottomHeader from "@/components/Header/BottomHeader";
import TopHeader from "@/components/Header/TopHeader";

export default function Contact() {

    return (
        <div className="flex min-h-screen flex-col items-center justify-start pt-24">
            <TopHeader />
            <BottomHeader />
            <Footer />
        </div>
    )
}