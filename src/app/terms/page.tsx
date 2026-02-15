import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold font-display text-slate-900 mb-8">Terms of Service</h1>
                <div className="prose prose-slate max-w-none text-slate-600">
                    <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Agreement to Terms</h2>
                    <p className="mb-4">
                        These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;) and Mentora Tanzania (&quot;we,&quot; &quot;us&quot; or &quot;our&quot;), concerning your access to and use of our website and services.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. Intellectual Property Rights</h2>
                    <p className="mb-4">
                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &quot;Content&quot;) and the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;) are owned or controlled by us or licensed to us.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. User Representations</h2>
                    <p className="mb-4">
                        By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">4. Prohibited Activities</h2>
                    <p className="mb-4">
                        You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">5. Modifications and Interruptions</h2>
                    <p className="mb-4">
                        We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of the Services without notice at any time.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">6. Governing Law</h2>
                    <p className="mb-4">
                        These Terms shall be governed by and defined following the laws of Tanzania. Mentora Tanzania and yourself irrevocably consent that the courts of Tanzania shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">7. Contact Us</h2>
                    <p className="mb-4">
                        In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <a href="mailto:mentoratanzania@gmail.com" className="text-fuchsia-600 hover:underline">mentoratanzania@gmail.com</a>.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
