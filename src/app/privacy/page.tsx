import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <Link href="/legal" className="text-fuchsia-600 hover:underline text-sm font-medium">← Back to Legal Hub</Link>
                </div>
                <h1 className="text-4xl font-bold font-display text-slate-900 mb-2">Privacy &amp; Data Protection Policy</h1>
                <p className="text-sm text-slate-500 mb-2">Part II of the Mentora Tanzania Legal Framework</p>
                <p className="text-sm text-slate-400 mb-8">Effective Date: 1 January 2026 · © 2026 Mentora Tanzania — A solution by Evolucion Technologies Company Limited</p>

                <div className="prose prose-slate max-w-none text-slate-600">
                    {/* Section 7 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">7. Principles of Data Processing</h2>
                    <p className="mb-3">The Company processes Personal Data under the following principles:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>Lawfulness and fairness</strong> — Data is processed on a valid legal basis and in a manner fair to the data subject.</li>
                        <li><strong>Transparency</strong> — Data subjects are informed about how their data is collected and used.</li>
                        <li><strong>Purpose limitation</strong> — Data is collected for specified, explicit, and legitimate purposes only.</li>
                        <li><strong>Data minimization</strong> — Only data that is necessary for the stated purpose is collected.</li>
                        <li><strong>Accuracy</strong> — Reasonable steps are taken to ensure data is accurate and up to date.</li>
                        <li><strong>Storage limitation</strong> — Data is retained only for as long as necessary for the stated purpose.</li>
                        <li><strong>Integrity and confidentiality</strong> — Appropriate security measures protect data against unauthorized access or loss.</li>
                        <li><strong>Accountability</strong> — The Company takes responsibility for compliance and can demonstrate it.</li>
                    </ul>

                    {/* Section 8 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">8. Categories of Data Processed</h2>
                    <p className="mb-3">The Company may process the following categories of data:</p>

                    <h3 className="text-lg font-bold text-slate-700 mt-6 mb-2">A. Identity Data</h3>
                    <p className="mb-4">Names, institutional affiliations, contact information.</p>

                    <h3 className="text-lg font-bold text-slate-700 mt-6 mb-2">B. Educational Data</h3>
                    <p className="mb-4">Academic progress, assignments, assessments, engagement metrics.</p>

                    <h3 className="text-lg font-bold text-slate-700 mt-6 mb-2">C. Technical Data</h3>
                    <p className="mb-4">IP addresses, device identifiers, session logs.</p>

                    <h3 className="text-lg font-bold text-slate-700 mt-6 mb-2">D. Communication Data</h3>
                    <p className="mb-4">Support tickets, emails, system notifications.</p>

                    <h3 className="text-lg font-bold text-slate-700 mt-6 mb-2">E. Payment Data</h3>
                    <p className="mb-6">Billing information and transaction records (excluding full card details).</p>

                    {/* Section 9 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">9. Children&apos;s Data Safeguards</h2>
                    <p className="mb-3">Where data of minors is processed:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Processing occurs under institutional authority or verified parental consent</li>
                        <li>No commercial profiling of minors is conducted</li>
                        <li>No advertising targeting of minors</li>
                        <li>Strict access controls are applied to minors&apos; data</li>
                        <li>Enhanced monitoring and audit logs are maintained</li>
                    </ul>
                    <p className="mb-6">The Company adheres strictly to the Children&apos;s Act and applicable educational regulations.</p>

                    {/* Section 10 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">10. Security Measures</h2>
                    <p className="mb-3">The Company implements the following security measures:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Encryption in transit (TLS/SSL) and at rest (AES-256)</li>
                        <li>Role-based access control (RBAC)</li>
                        <li>Multi-factor authentication for administrative access</li>
                        <li>Secure cloud infrastructure with redundancy</li>
                        <li>Regular vulnerability assessments and penetration testing</li>
                        <li>Comprehensive audit trails</li>
                        <li>Staff confidentiality agreements and data protection training</li>
                        <li>Incident response protocols with defined escalation paths</li>
                    </ul>

                    {/* Section 11 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">11. Data Retention</h2>
                    <p className="mb-3">Data shall be retained only for:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Duration of institutional engagement plus any statutory retention period</li>
                        <li>Statutory compliance obligations as required by Tanzanian law</li>
                        <li>Legitimate archival academic purposes where authorized</li>
                    </ul>
                    <p className="mb-6">Upon termination, data shall be securely deleted or anonymized unless otherwise required by law.</p>

                    {/* Contact */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">12. Contact Us</h2>
                    <p className="mb-4">
                        If you have questions about this policy, contact our Data Protection Officer at: <a href="mailto:mentoratanzania@gmail.com" className="text-fuchsia-600 hover:underline">mentoratanzania@gmail.com</a>.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
