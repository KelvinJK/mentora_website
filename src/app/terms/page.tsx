import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <Link href="/legal" className="text-fuchsia-600 hover:underline text-sm font-medium">← Back to Legal Hub</Link>
                </div>
                <h1 className="text-4xl font-bold font-display text-slate-900 mb-2">Legal Terms &amp; Conditions</h1>
                <p className="text-sm text-slate-500 mb-2">Part I of the Mentora Tanzania Legal Framework</p>
                <p className="text-sm text-slate-400 mb-8">Effective Date: 1 January 2026 · © 2026 Mentora Tanzania — A solution by Evolucion Technologies Company Limited</p>

                <div className="prose prose-slate max-w-none text-slate-600">
                    {/* Section 1 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">1. Definitions</h2>
                    <p className="mb-3">For purposes of this Agreement:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>&quot;Company&quot;</strong> means Evolucion Technologies Company Limited, a company duly incorporated under the laws of the United Republic of Tanzania.</li>
                        <li><strong>&quot;Platform&quot;</strong> means the Mentora Tanzania web-based and digital systems accessible via <a href="https://www.mentoratanzania.co.tz" className="text-fuchsia-600 hover:underline">https://www.mentoratanzania.co.tz</a> including all associated applications, AI tools, dashboards, APIs, and services.</li>
                        <li><strong>&quot;User&quot;</strong> means any individual accessing the Platform including teachers, administrators, students, parents, or institutional representatives.</li>
                        <li><strong>&quot;Institution&quot;</strong> means any school, education authority, organization, or entity subscribing to Mentora services.</li>
                        <li><strong>&quot;Personal Data&quot;</strong> has the meaning assigned under the Personal Data Protection Act, 2022.</li>
                        <li><strong>&quot;Processing&quot;</strong> includes collection, recording, storage, structuring, adaptation, retrieval, use, disclosure, transmission, restriction, erasure, or destruction of data.</li>
                        <li><strong>&quot;Minor&quot;</strong> refers to a person under eighteen (18) years of age.</li>
                    </ul>

                    {/* Section 2 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">2. Legal Status and Governing Law</h2>
                    <p className="mb-3">This Agreement is governed by and construed in accordance with:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>The Personal Data Protection Act, 2022 (Tanzania)</li>
                        <li>The Cybercrimes Act, 2015</li>
                        <li>The Electronic and Postal Communications Act</li>
                        <li>The Children&apos;s Act (Cap. 13 R.E. 2019)</li>
                        <li>Applicable international data protection principles where cross-border services apply</li>
                    </ul>
                    <p className="mb-6">Any dispute arising shall be subject to the exclusive jurisdiction of the courts of the United Republic of Tanzania unless otherwise agreed in writing.</p>

                    {/* Section 3 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">3. Scope of Services</h2>
                    <p className="mb-3">The Company provides:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>AI-powered lesson planning tools</li>
                        <li>Assignment management systems</li>
                        <li>Learning analytics dashboards</li>
                        <li>Student engagement tracking</li>
                        <li>Administrative reporting systems</li>
                        <li>Secure institutional data management infrastructure</li>
                    </ul>
                    <p className="mb-6">The Company reserves the right to enhance, modify, or discontinue features subject to reasonable notice.</p>

                    {/* Section 4 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">4. Acceptable Use and Compliance</h2>
                    <p className="mb-3">Users shall:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Use the Platform strictly for lawful educational purposes</li>
                        <li>Not attempt unauthorized access or system interference</li>
                        <li>Not upload unlawful, defamatory, or harmful content</li>
                        <li>Not reverse engineer proprietary systems</li>
                        <li>Not violate intellectual property rights</li>
                    </ul>
                    <p className="mb-6">Violations may result in suspension, termination, and possible legal proceedings under Tanzanian law.</p>

                    {/* Section 5 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">5. Intellectual Property</h2>
                    <p className="mb-4">All proprietary technology, AI models, software architecture, design, databases, and branding remain the exclusive property of Evolucion Technologies Company Limited.</p>
                    <p className="mb-6">Institutions retain ownership of academic content uploaded but grant the Company a limited, non-exclusive license to process such content solely for service delivery.</p>

                    {/* Section 6 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">6. Limitation of Liability</h2>
                    <p className="mb-3">To the fullest extent permitted by law:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>The Company shall not be liable for indirect, incidental, special, or consequential damages.</li>
                        <li>Total liability shall not exceed the total fees paid by the Institution in the preceding twelve (12) months.</li>
                        <li>Nothing herein excludes liability where exclusion is prohibited by law.</li>
                    </ul>

                    {/* Contact */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">7. Contact</h2>
                    <p className="mb-4">
                        For questions regarding these terms, contact us at: <a href="mailto:mentoratanzania@gmail.com" className="text-fuchsia-600 hover:underline">mentoratanzania@gmail.com</a>.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
