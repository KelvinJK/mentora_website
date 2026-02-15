import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SupportPolicy() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold font-display text-slate-900 mb-8">Support Policy</h1>
                <div className="prose prose-slate max-w-none text-slate-600">
                    <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Support Availability</h2>
                    <p className="mb-4">
                        We are dedicated to providing excellent support to our partner schools and teachers. Our standard support hours are Monday to Friday, 8:00 AM to 5:00 PM EAT.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. Support Channels</h2>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Email Support:</strong> Send us detailed queries at <a href="mailto:mentoratanzania@gmail.com" className="text-fuchsia-600 hover:underline">mentoratanzania@gmail.com</a>. We aim to respond within 24 hours on business days.</li>
                        <li><strong>Phone Support:</strong> For urgent matters, call our helpline at +255 697 279 355 during business hours.</li>
                        <li><strong>On-Site Support:</strong> For partner schools, we provide scheduled on-site training and technical assistance as per the partnership agreement.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. Scope of Support</h2>
                    <p className="mb-4">
                        Our support includes:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Assistance with account setup and management.</li>
                        <li>Guidance on using the Mentora AI platform features.</li>
                        <li>Troubleshooting technical issues related to our platform.</li>
                        <li>Clarification on curriculum alignment and lesson plan generation.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">4. Response Times</h2>
                    <p className="mb-4">
                        We prioritize critical issues that affect the core functionality of our platform in classrooms. While we strive to resolve all issues as quickly as possible, response times may vary based on the complexity of the inquiry.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
