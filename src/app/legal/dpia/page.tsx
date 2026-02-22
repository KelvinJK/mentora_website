import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function DPIAPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <Link href="/legal" className="text-fuchsia-600 hover:underline text-sm font-medium">← Back to Legal Hub</Link>
                </div>
                <h1 className="text-4xl font-bold font-display text-slate-900 mb-2">Data Protection Impact Assessment (DPIA) &amp; Risk Management Framework</h1>
                <p className="text-sm text-slate-500 mb-2">Part IV of the Mentora Tanzania Legal Framework</p>
                <p className="text-sm text-slate-400 mb-8">Effective Date: 1 January 2026 · © 2026 Mentora Tanzania — A solution by Evolucion Technologies Company Limited</p>

                <div className="prose prose-slate max-w-none text-slate-600">
                    {/* Section 28 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">28. Purpose and Scope</h2>
                    <p className="mb-4">This Data Protection Impact Assessment (DPIA) framework establishes the methodology by which Mentora Tanzania identifies, assesses, and mitigates risks to the rights and freedoms of data subjects arising from the processing of personal data through the Platform.</p>
                    <p className="mb-6">A DPIA shall be conducted before implementing any new processing activity, technology, or system change that is likely to result in a high risk to data subjects, particularly where the processing involves:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Large-scale processing of children&apos;s data</li>
                        <li>Systematic monitoring or profiling of individuals</li>
                        <li>Automated decision-making with legal or significant effects</li>
                        <li>Processing of sensitive personal data at scale</li>
                        <li>Cross-border data transfers</li>
                        <li>Adoption of new AI models or machine learning algorithms</li>
                    </ul>

                    {/* Section 29 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">29. DPIA Methodology</h2>
                    <p className="mb-3">The DPIA process shall follow a structured methodology:</p>
                    <ol className="list-decimal pl-6 mb-6 space-y-3">
                        <li><strong>Description of Processing:</strong> Document the nature, scope, context, and purpose of the proposed processing activity.</li>
                        <li><strong>Necessity and Proportionality Assessment:</strong> Evaluate whether the processing is necessary and proportionate to the stated purpose.</li>
                        <li><strong>Risk Identification:</strong> Identify potential risks to the rights and freedoms of data subjects.</li>
                        <li><strong>Risk Assessment:</strong> Evaluate each risk based on likelihood and severity using the risk matrix defined in Section 30.</li>
                        <li><strong>Mitigation Measures:</strong> Define technical and organizational measures to mitigate identified risks.</li>
                        <li><strong>Residual Risk Evaluation:</strong> Assess remaining risk after mitigation measures are applied.</li>
                        <li><strong>Approval and Documentation:</strong> Obtain approval from the Data Protection Officer and document the assessment.</li>
                        <li><strong>Review and Monitoring:</strong> Establish ongoing monitoring and periodic review schedules.</li>
                    </ol>

                    {/* Section 30 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">30. Risk Assessment Matrix</h2>
                    <p className="mb-4">Risks shall be assessed using the following matrix, combining likelihood and impact severity:</p>

                    <div className="overflow-x-auto mb-6">
                        <table className="w-full border-collapse border border-slate-300 text-sm">
                            <thead>
                                <tr className="bg-slate-100">
                                    <th className="border border-slate-300 p-3 text-left text-slate-800">Likelihood / Severity</th>
                                    <th className="border border-slate-300 p-3 text-center text-slate-800">Low Impact</th>
                                    <th className="border border-slate-300 p-3 text-center text-slate-800">Medium Impact</th>
                                    <th className="border border-slate-300 p-3 text-center text-slate-800">High Impact</th>
                                    <th className="border border-slate-300 p-3 text-center text-slate-800">Critical Impact</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-slate-300 p-3 font-medium text-slate-700">Very Likely</td>
                                    <td className="border border-slate-300 p-3 text-center bg-amber-50 text-amber-700">Medium</td>
                                    <td className="border border-slate-300 p-3 text-center bg-orange-50 text-orange-700">High</td>
                                    <td className="border border-slate-300 p-3 text-center bg-red-50 text-red-700">Critical</td>
                                    <td className="border border-slate-300 p-3 text-center bg-red-100 text-red-800">Critical</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 p-3 font-medium text-slate-700">Likely</td>
                                    <td className="border border-slate-300 p-3 text-center bg-green-50 text-green-700">Low</td>
                                    <td className="border border-slate-300 p-3 text-center bg-amber-50 text-amber-700">Medium</td>
                                    <td className="border border-slate-300 p-3 text-center bg-orange-50 text-orange-700">High</td>
                                    <td className="border border-slate-300 p-3 text-center bg-red-50 text-red-700">Critical</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 p-3 font-medium text-slate-700">Possible</td>
                                    <td className="border border-slate-300 p-3 text-center bg-green-50 text-green-700">Low</td>
                                    <td className="border border-slate-300 p-3 text-center bg-green-50 text-green-700">Low</td>
                                    <td className="border border-slate-300 p-3 text-center bg-amber-50 text-amber-700">Medium</td>
                                    <td className="border border-slate-300 p-3 text-center bg-orange-50 text-orange-700">High</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 p-3 font-medium text-slate-700">Unlikely</td>
                                    <td className="border border-slate-300 p-3 text-center bg-green-50 text-green-700">Low</td>
                                    <td className="border border-slate-300 p-3 text-center bg-green-50 text-green-700">Low</td>
                                    <td className="border border-slate-300 p-3 text-center bg-green-50 text-green-700">Low</td>
                                    <td className="border border-slate-300 p-3 text-center bg-amber-50 text-amber-700">Medium</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Section 31 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">31. Privacy Risk Categories</h2>
                    <p className="mb-3">The following risk categories shall be assessed for each processing activity:</p>

                    <div className="space-y-4 mb-6">
                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                            <h3 className="font-bold text-slate-800 mb-1">A. Unauthorized Access</h3>
                            <p className="text-sm">Risk of personal data being accessed by unauthorized persons, including external attackers or internal personnel without appropriate clearance.</p>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                            <h3 className="font-bold text-slate-800 mb-1">B. Unlawful Disclosure</h3>
                            <p className="text-sm">Risk of personal data being shared with third parties without proper legal basis, consent, or contractual safeguards.</p>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                            <h3 className="font-bold text-slate-800 mb-1">C. Data Loss or Destruction</h3>
                            <p className="text-sm">Risk of personal data being permanently lost due to system failure, natural disaster, or malicious action.</p>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                            <h3 className="font-bold text-slate-800 mb-1">D. Inaccuracy</h3>
                            <p className="text-sm">Risk of decisions being made based on inaccurate, outdated, or incomplete personal data.</p>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                            <h3 className="font-bold text-slate-800 mb-1">E. Excessive Collection</h3>
                            <p className="text-sm">Risk of collecting more personal data than is necessary for the stated purpose.</p>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                            <h3 className="font-bold text-slate-800 mb-1">F. Harm to Vulnerable Persons</h3>
                            <p className="text-sm">Risk of processing that could cause harm to children, students, or other vulnerable data subjects.</p>
                        </div>
                    </div>

                    {/* Section 32 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">32. Mitigation Strategies</h2>
                    <p className="mb-3">For each identified risk, the Company shall implement one or more of the following mitigation strategies:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>Technical Controls:</strong> Encryption, access controls, pseudonymization, automated monitoring, intrusion detection systems, and secure coding practices.</li>
                        <li><strong>Organizational Controls:</strong> Staff training, confidentiality agreements, clear data handling policies, segregation of duties, and regular compliance reviews.</li>
                        <li><strong>Contractual Controls:</strong> Data processing agreements with sub-processors, standard contractual clauses for international transfers, and binding service level commitments.</li>
                        <li><strong>Risk Transfer:</strong> Cyber liability insurance, indemnification clauses, and third-party security certifications.</li>
                        <li><strong>Risk Avoidance:</strong> Eliminating unnecessary processing activities or choosing less intrusive alternatives.</li>
                    </ul>

                    {/* Section 33 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">33. DPIA Review Schedule</h2>
                    <p className="mb-3">DPIAs shall be reviewed and updated:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Annually as part of the Company&apos;s compliance review cycle</li>
                        <li>Upon any significant change to processing activities, systems, or technology</li>
                        <li>Following any data breach or security incident</li>
                        <li>Upon changes to applicable data protection legislation</li>
                        <li>At the request of a Data Controller (Institution) or regulatory authority</li>
                    </ul>
                    <p className="mb-6">All DPIA records shall be maintained for a minimum of five (5) years and made available to regulatory authorities upon request.</p>

                    {/* Section 34 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">34. Governance and Accountability</h2>
                    <p className="mb-3">The DPIA process is overseen by the Company&apos;s Data Protection Officer (DPO), who is responsible for:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Ensuring DPIAs are conducted for all high-risk processing activities</li>
                        <li>Reviewing and approving DPIA outcomes before processing begins</li>
                        <li>Escalating unresolved high or critical risks to the Board of Directors</li>
                        <li>Maintaining a register of all DPIAs conducted</li>
                        <li>Reporting annually to the Board on data protection risk posture</li>
                    </ul>

                    {/* Contact */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Contact</h2>
                    <p className="mb-4">
                        For DPIA-related inquiries, contact: <a href="mailto:mentoratanzania@gmail.com" className="text-fuchsia-600 hover:underline">mentoratanzania@gmail.com</a>.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
