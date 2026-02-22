import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function DataProcessingAgreement() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <Link href="/legal" className="text-fuchsia-600 hover:underline text-sm font-medium">← Back to Legal Hub</Link>
                </div>
                <h1 className="text-4xl font-bold font-display text-slate-900 mb-2">Data Processing Agreement (DPA)</h1>
                <p className="text-sm text-slate-500 mb-2">Part III of the Mentora Tanzania Legal Framework</p>
                <p className="text-sm text-slate-400 mb-8">This Data Processing Agreement forms an integral part of the Mentora Service Agreement between the Institution (Data Controller) and Evolucion Technologies Company Limited (Data Processor).</p>

                <div className="prose prose-slate max-w-none text-slate-600">
                    {/* Section 12 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">12. Roles of the Parties</h2>
                    <div className="bg-blue-50 rounded-xl p-6 mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-bold text-blue-800 mb-2">Institution: Data Controller</h3>
                                <p className="text-sm text-blue-700">The Institution determines the purposes and means of processing student and staff data.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-blue-800 mb-2">Company: Data Processor</h3>
                                <p className="text-sm text-blue-700">The Company processes Personal Data solely on documented instructions from the Institution.</p>
                            </div>
                        </div>
                    </div>

                    {/* Section 13 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">13. Subject Matter of Processing</h2>
                    <p className="mb-3">The processing relates to:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Educational content management</li>
                        <li>Student performance tracking</li>
                        <li>Lesson planning tools</li>
                        <li>Analytics dashboards</li>
                        <li>Communication systems</li>
                        <li>AI-powered instructional support</li>
                    </ul>

                    {/* Section 14 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">14. Duration of Processing</h2>
                    <p className="mb-6">Processing shall continue for the duration of the service agreement unless terminated earlier in writing.</p>

                    {/* Section 15 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">15. Nature and Purpose of Processing</h2>
                    <p className="mb-3">Processing includes:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Collection of academic data</li>
                        <li>Secure storage and structuring</li>
                        <li>Analytics generation</li>
                        <li>AI-assisted lesson recommendations</li>
                        <li>Reporting and administrative summaries</li>
                        <li>System security and fraud prevention</li>
                    </ul>
                    <p className="mb-6">Processing is strictly limited to educational delivery and institutional management.</p>

                    {/* Section 16 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">16. Types of Personal Data Processed</h2>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Student identity data</li>
                        <li>Academic records</li>
                        <li>Teacher records</li>
                        <li>Attendance logs</li>
                        <li>Behavioral engagement metrics</li>
                        <li>Institutional administrative data</li>
                    </ul>
                    <p className="mb-6">Sensitive personal data shall only be processed where explicitly authorized by the Controller.</p>

                    {/* Section 17 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">17. Obligations of the Data Processor</h2>
                    <p className="mb-3">The Company shall:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Process data only on documented instructions from the Controller</li>
                        <li>Ensure confidentiality of all personnel handling Personal Data</li>
                        <li>Implement appropriate technical and organizational measures to protect data</li>
                        <li>Assist the Controller in fulfilling data subject rights requests</li>
                        <li>Notify the Controller without undue delay upon discovery of a data breach</li>
                        <li>Cooperate with regulatory authorities where required by law</li>
                        <li>Delete or return all Personal Data upon termination of the agreement</li>
                        <li>Make available all information necessary to demonstrate compliance</li>
                    </ul>

                    {/* Section 18 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">18. Sub-Processors</h2>
                    <p className="mb-3">The Company may engage sub-processors (e.g., cloud hosting providers) under written agreements ensuring:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Equivalent data protection standards</li>
                        <li>Confidentiality obligations</li>
                        <li>Security compliance</li>
                    </ul>
                    <p className="mb-6">The Institution may request a current list of sub-processors at any time. The Company shall provide reasonable prior notice before engaging new sub-processors.</p>

                    {/* Section 19 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">19. International Transfers</h2>
                    <p className="mb-3">Where data is transferred outside Tanzania:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Adequate safeguards shall be applied in accordance with applicable law</li>
                        <li>Standard contractual clauses shall be implemented where necessary</li>
                        <li>Equivalent or higher levels of data protection shall be maintained</li>
                        <li>The Institution shall be informed of the countries and safeguards involved</li>
                    </ul>

                    {/* Section 20 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">20. Data Subject Rights Assistance</h2>
                    <p className="mb-3">The Company shall assist the Institution in responding to:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Access requests — providing copies of personal data held</li>
                        <li>Rectification requests — correcting inaccurate or incomplete data</li>
                        <li>Erasure requests — deleting data where legally required</li>
                        <li>Objections to processing — ceasing processing where applicable</li>
                        <li>Data portability requests — providing data in structured, machine-readable format</li>
                    </ul>
                    <p className="mb-6">Responses shall be facilitated within legally required timelines.</p>

                    {/* Section 21 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">21. Data Breach Management</h2>
                    <p className="mb-3">In case of a data breach, the Company shall:</p>
                    <ol className="list-decimal pl-6 mb-6 space-y-2">
                        <li>Implement immediate containment measures to limit the scope of the breach</li>
                        <li>Conduct an internal investigation to determine the cause and extent</li>
                        <li>Notify the Institution without undue delay (within 72 hours of discovery)</li>
                        <li>Notify the relevant regulatory authority where required by law</li>
                        <li>Implement remediation and prevention actions to prevent recurrence</li>
                        <li>Provide a written incident report detailing impact, response, and corrective measures</li>
                    </ol>

                    {/* Section 22 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">22. Audit Rights</h2>
                    <p className="mb-3">The Institution may, upon reasonable notice:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Request compliance documentation and certifications</li>
                        <li>Conduct remote or on-site audits</li>
                        <li>Review security certifications and third-party audit reports</li>
                    </ul>
                    <p className="mb-6">Audits shall be conducted during normal business hours and shall not compromise the security of other clients&apos; data.</p>

                    {/* Section 23 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">23. Return or Deletion of Data</h2>
                    <p className="mb-3">Upon termination of the service agreement:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>All Personal Data shall be returned to the Institution or securely deleted at the Institution&apos;s election</li>
                        <li>Written confirmation of deletion shall be provided upon request</li>
                        <li>Backup deletion shall follow defined retention cycles (maximum 90 days)</li>
                        <li>Data may be retained where required by applicable law, subject to continued confidentiality</li>
                    </ul>

                    {/* Section 24 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">24. Indemnification</h2>
                    <p className="mb-4">The Company shall indemnify the Institution against proven damages arising from Processor negligence or unlawful processing in breach of this Agreement.</p>
                    <p className="mb-6">The Institution shall indemnify the Company where damages arise from unlawful instructions provided by the Institution.</p>

                    {/* Section 25 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">25. Confidentiality</h2>
                    <p className="mb-6">Both Parties shall treat all shared information as confidential and shall not disclose to unauthorized third parties. This obligation survives termination of the Agreement.</p>

                    {/* Section 26 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">26. Severability</h2>
                    <p className="mb-6">If any provision of this Agreement is declared invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>

                    {/* Section 27 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">27. Entire Agreement</h2>
                    <p className="mb-6">This Agreement constitutes the entire understanding between the Parties concerning data protection and platform use, and supersedes all prior agreements and understandings relating to the subject matter hereof.</p>

                    {/* Contact */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Contact</h2>
                    <p className="mb-4">
                        For DPA-related inquiries, contact: <a href="mailto:mentoratanzania@gmail.com" className="text-fuchsia-600 hover:underline">mentoratanzania@gmail.com</a>.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
