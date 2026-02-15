import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold font-display text-slate-900 mb-8">Privacy Policy</h1>
                <div className="prose prose-slate max-w-none text-slate-600">
                    <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Introduction</h2>
                    <p className="mb-4">
                        Mentora Tanzania (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. Information We Collect</h2>
                    <p className="mb-4">
                        We may collect personal information that you voluntarily provide to us when you register for the service, express an interest in obtaining information about us or our products and services, when you participate in activities on the service, or otherwise when you contact us.
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Names and contact information (email addresses, phone numbers).</li>
                        <li>School or institution details.</li>
                        <li>Usage data and interaction with our AI tools.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. Use of Your Information</h2>
                    <p className="mb-4">
                        We use the information we collect or receive:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>To facilitate account creation and logon process.</li>
                        <li>To send you administrative information.</li>
                        <li>To fulfill and manage your orders.</li>
                        <li>To improve our AI models and service delivery (anonymized data).</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">4. Data Security</h2>
                    <p className="mb-4">
                        We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
                    </p>

                    <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">5. Contact Us</h2>
                    <p className="mb-4">
                        If you have questions or comments about this policy, you may email us at <a href="mailto:mentoratanzania@gmail.com" className="text-fuchsia-600 hover:underline">mentoratanzania@gmail.com</a>.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
