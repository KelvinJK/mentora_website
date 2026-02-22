import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SecurityFramework() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <Link href="/legal" className="text-fuchsia-600 hover:underline text-sm font-medium">← Back to Legal Hub</Link>
                </div>
                <h1 className="text-4xl font-bold font-display text-slate-900 mb-2">Information Security Framework</h1>
                <p className="text-sm text-slate-500 mb-2">Part VI of the Mentora Tanzania Legal Framework — ISO 27001 Alignment</p>
                <p className="text-sm text-slate-400 mb-8">Effective Date: 1 January 2026 · © 2026 Mentora Tanzania — A solution by Evolucion Technologies Company Limited</p>

                <div className="prose prose-slate max-w-none text-slate-600">
                    {/* Section 43 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">43. ISMS Scope and Objectives</h2>
                    <p className="mb-4">Mentora Tanzania maintains an Information Security Management System (ISMS) aligned with the ISO/IEC 27001:2022 international standard. The ISMS applies to all information assets, personnel, processes, and technology infrastructure involved in the delivery of the Mentora platform and services.</p>
                    <p className="mb-3">The objectives of the ISMS are to:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Protect the confidentiality, integrity, and availability of all information assets</li>
                        <li>Ensure compliance with legal, regulatory, and contractual obligations</li>
                        <li>Manage information security risks systematically and proportionately</li>
                        <li>Foster a culture of security awareness across the organization</li>
                        <li>Support continuous improvement in information security practices</li>
                    </ul>

                    {/* Section 44 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">44. Security Control Domains</h2>
                    <p className="mb-4">The Company implements controls across the following ISO 27001 Annex A domains:</p>

                    <div className="space-y-4 mb-6">
                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                            <h3 className="font-bold text-slate-800 mb-1">A.5 — Organizational Controls</h3>
                            <p className="text-sm">Information security policies, roles and responsibilities, segregation of duties, contact with authorities, threat intelligence, and information security in project management.</p>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                            <h3 className="font-bold text-slate-800 mb-1">A.6 — People Controls</h3>
                            <p className="text-sm">Screening, terms and conditions of employment, information security awareness, training and education, disciplinary processes, and responsibilities after termination.</p>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                            <h3 className="font-bold text-slate-800 mb-1">A.7 — Physical Controls</h3>
                            <p className="text-sm">Physical security perimeter, physical entry controls, securing offices, protection against physical and environmental threats, equipment security, and secure disposal.</p>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                            <h3 className="font-bold text-slate-800 mb-1">A.8 — Technological Controls</h3>
                            <p className="text-sm">User endpoint devices, privileged access rights, information access restriction, secure authentication, capacity management, malware protection, vulnerability management, configuration management, information deletion, data masking, data leakage prevention, monitoring, web filtering, and secure coding.</p>
                        </div>
                    </div>

                    {/* Section 45 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">45. Risk Treatment Methodology</h2>
                    <p className="mb-3">The Company applies the following risk treatment approach:</p>
                    <ol className="list-decimal pl-6 mb-6 space-y-3">
                        <li><strong>Risk Identification:</strong> Systematic identification of threats and vulnerabilities to information assets through threat modeling, vulnerability scanning, and business impact analysis.</li>
                        <li><strong>Risk Analysis:</strong> Assessment of each risk based on likelihood and potential impact, considering existing controls.</li>
                        <li><strong>Risk Evaluation:</strong> Comparison of risk levels against the Company&apos;s risk appetite and tolerance thresholds.</li>
                        <li><strong>Risk Treatment:</strong> Selection and implementation of appropriate treatment options:
                            <ul className="list-disc pl-6 mt-2 space-y-1">
                                <li><strong>Mitigate:</strong> Implement controls to reduce risk to acceptable levels</li>
                                <li><strong>Transfer:</strong> Transfer risk through insurance or contractual arrangements</li>
                                <li><strong>Avoid:</strong> Eliminate the activity that gives rise to the risk</li>
                                <li><strong>Accept:</strong> Formally accept residual risk where it falls within tolerance</li>
                            </ul>
                        </li>
                        <li><strong>Monitoring and Review:</strong> Ongoing monitoring of risks and effectiveness of controls, with formal reviews at least annually.</li>
                    </ol>

                    {/* Section 46 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">46. Access Control Policy</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Access to all systems is granted on a least-privilege, need-to-know basis</li>
                        <li>Role-based access control (RBAC) is implemented across all platform components</li>
                        <li>Multi-factor authentication (MFA) is required for administrative access</li>
                        <li>Access rights are reviewed quarterly and upon any change in personnel role</li>
                        <li>Privileged access is logged, monitored, and subject to enhanced clearance</li>
                        <li>Access is revoked within 24 hours of personnel departure or role change</li>
                    </ul>

                    {/* Section 47 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">47. Cryptographic Controls</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>All data in transit is encrypted using TLS 1.2 or higher</li>
                        <li>Data at rest is encrypted using AES-256 encryption</li>
                        <li>Cryptographic keys are managed through secure key management infrastructure</li>
                        <li>Key rotation is performed in accordance with industry best practices</li>
                        <li>Database backups are encrypted and stored in geographically redundant locations</li>
                    </ul>

                    {/* Section 48 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">48. Incident Management</h2>
                    <p className="mb-3">The Company maintains a comprehensive incident management process:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>All security events are logged and monitored in real-time</li>
                        <li>Security incidents are classified by severity and escalated accordingly</li>
                        <li>Incident response team is available 24/7 for critical incidents</li>
                        <li>Root cause analysis is conducted for all P1 and P2 incidents</li>
                        <li>Lessons learned are documented and incorporated into security controls</li>
                        <li>Incident reports are shared with affected Institutions as appropriate</li>
                    </ul>

                    {/* Section 49 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">49. Business Continuity and Disaster Recovery</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Business continuity plans are maintained and tested at least annually</li>
                        <li>Recovery Point Objective (RPO): Maximum 1 hour of data loss</li>
                        <li>Recovery Time Objective (RTO): Maximum 4 hours for core services</li>
                        <li>Automated backups are performed daily with incremental backups every 6 hours</li>
                        <li>Disaster recovery drills are conducted semi-annually</li>
                        <li>Results of continuity tests are documented and reviewed by senior management</li>
                    </ul>

                    {/* Section 50 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">50. Certification Roadmap</h2>
                    <p className="mb-3">The Company is committed to achieving and maintaining formal ISO 27001 certification:</p>
                    <div className="overflow-x-auto mb-6">
                        <table className="w-full border-collapse border border-slate-300 text-sm">
                            <thead>
                                <tr className="bg-slate-100">
                                    <th className="border border-slate-300 p-3 text-left text-slate-800">Phase</th>
                                    <th className="border border-slate-300 p-3 text-left text-slate-800">Activity</th>
                                    <th className="border border-slate-300 p-3 text-center text-slate-800">Target Timeline</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-slate-300 p-3 font-medium text-slate-700">Phase 1</td>
                                    <td className="border border-slate-300 p-3 text-slate-700">Gap analysis and ISMS framework establishment</td>
                                    <td className="border border-slate-300 p-3 text-center">Q1 2026</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 p-3 font-medium text-slate-700">Phase 2</td>
                                    <td className="border border-slate-300 p-3 text-slate-700">Control implementation and documentation</td>
                                    <td className="border border-slate-300 p-3 text-center">Q2 2026</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 p-3 font-medium text-slate-700">Phase 3</td>
                                    <td className="border border-slate-300 p-3 text-slate-700">Internal audit and management review</td>
                                    <td className="border border-slate-300 p-3 text-center">Q3 2026</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 p-3 font-medium text-slate-700">Phase 4</td>
                                    <td className="border border-slate-300 p-3 text-slate-700">External certification audit</td>
                                    <td className="border border-slate-300 p-3 text-center">Q4 2026</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Section 51 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">51. Continuous Improvement</h2>
                    <p className="mb-3">The Company is committed to continual improvement of its ISMS through:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Regular internal audits conducted at least annually</li>
                        <li>Management reviews with the Board of Directors</li>
                        <li>Corrective action tracking for identified non-conformities</li>
                        <li>Incorporation of lessons learned from security incidents</li>
                        <li>Monitoring of emerging threats and evolving best practices</li>
                        <li>Employee security awareness programs updated annually</li>
                    </ul>

                    {/* Contact */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Contact</h2>
                    <p className="mb-4">
                        For security-related inquiries, contact: <a href="mailto:mentoratanzania@gmail.com" className="text-fuchsia-600 hover:underline">mentoratanzania@gmail.com</a>.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
