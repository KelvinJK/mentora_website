import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ComplianceFramework() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <Link href="/legal" className="text-fuchsia-600 hover:underline text-sm font-medium">← Back to Legal Hub</Link>
                </div>
                <h1 className="text-4xl font-bold font-display text-slate-900 mb-2">Institutional &amp; Donor Compliance Framework</h1>
                <p className="text-sm text-slate-500 mb-2">Part VII of the Mentora Tanzania Legal Framework</p>
                <p className="text-sm text-slate-400 mb-8">Board-Level Compliance Language for Institutional Partners and International Donors · Effective Date: 1 January 2026</p>

                <div className="prose prose-slate max-w-none text-slate-600">
                    {/* Section 52 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">52. Purpose and Applicability</h2>
                    <p className="mb-4">This Institutional and Donor Compliance Framework establishes the governance, accountability, reporting, and ethical standards that Mentora Tanzania (operated by Evolucion Technologies Company Limited) adheres to in its engagements with international development partners, grant-making bodies, and institutional donors.</p>
                    <p className="mb-3">This framework is designed to meet the compliance expectations of organizations including, but not limited to:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>GIZ</strong> (Deutsche Gesellschaft für Internationale Zusammenarbeit)</li>
                        <li><strong>Mastercard Foundation</strong></li>
                        <li><strong>Botnar Foundation</strong></li>
                        <li><strong>USAID</strong> and affiliated bilateral agencies</li>
                        <li><strong>World Bank Group</strong></li>
                        <li><strong>UNICEF</strong> and other UN entities</li>
                        <li><strong>Other bilateral and multilateral funders</strong> with governance and accountability requirements</li>
                    </ul>

                    {/* Section 53 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">53. Governance Structure</h2>
                    <p className="mb-3">The Company operates under a governance structure that supports accountability and transparency:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>Board of Directors:</strong> Provides strategic oversight, fiduciary responsibility, and compliance governance.</li>
                        <li><strong>Chief Executive Officer (CEO):</strong> Responsible for overall organizational leadership and donor relationship management.</li>
                        <li><strong>Data Protection Officer (DPO):</strong> Oversees data protection compliance and reports to the Board on privacy posture.</li>
                        <li><strong>Chief Technology Officer (CTO):</strong> Responsible for platform security and technical compliance.</li>
                        <li><strong>Finance & Compliance Manager:</strong> Manages financial reporting, audit readiness, and regulatory compliance.</li>
                    </ul>

                    {/* Section 54 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">54. Financial Accountability and Reporting</h2>
                    <p className="mb-3">The Company adheres to the following financial accountability standards:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Maintaining accurate, complete, and timely financial records</li>
                        <li>Segregation of donor funds from operational revenue</li>
                        <li>Grant funds used exclusively for agreed-upon project activities</li>
                        <li>Annual independent financial audits by a recognized audit firm</li>
                        <li>Compliance with International Financial Reporting Standards (IFRS) or equivalent</li>
                        <li>Quarterly financial reporting to donors as required by grant agreements</li>
                        <li>Maintaining a minimum of seven (7) years of financial record retention</li>
                    </ul>

                    {/* Section 55 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">55. Donor Audit Rights</h2>
                    <p className="mb-3">The Company grants donors and their authorized representatives the following audit rights:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Right to conduct or commission financial and programmatic audits at reasonable notice</li>
                        <li>Access to relevant financial records, project documentation, and performance data</li>
                        <li>Right to conduct site visits to verify project implementation</li>
                        <li>Right to interview staff and beneficiaries as part of evaluation processes</li>
                        <li>All audit findings shall be addressed through documented corrective action plans</li>
                    </ul>

                    {/* Section 56 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">56. Anti-Corruption and Anti-Fraud Policy</h2>
                    <p className="mb-3">The Company maintains a zero-tolerance policy toward corruption and fraud:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>No employee, contractor, or agent shall offer, give, solicit, or accept bribes or improper payments</li>
                        <li>All employees receive annual anti-corruption training</li>
                        <li>A confidential whistleblower mechanism is available for reporting concerns</li>
                        <li>Allegations of fraud or corruption are investigated promptly and independently</li>
                        <li>Confirmed violations result in disciplinary action, including termination and legal referral</li>
                        <li>Compliance with the Tanzanian Prevention and Combating of Corruption Act</li>
                    </ul>

                    {/* Section 57 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">57. Ethical Standards and Code of Conduct</h2>
                    <p className="mb-3">All personnel are bound by the Company&apos;s Code of Conduct, which includes:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Commitment to integrity, honesty, and professionalism in all dealings</li>
                        <li>Respect for human rights, dignity, and cultural diversity</li>
                        <li>Non-discrimination on the basis of gender, ethnicity, religion, disability, or political affiliation</li>
                        <li>Environmental responsibility and sustainability consciousness</li>
                        <li>Conflict of interest disclosure and management</li>
                        <li>Responsible use of organizational resources</li>
                    </ul>

                    {/* Section 58 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">58. Safeguarding and Child Protection</h2>
                    <p className="mb-4">Given Mentora&apos;s work in education involving children and young people, the Company maintains rigorous safeguarding standards:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>All staff undergo safeguarding training before engaging with schools or students</li>
                        <li>Background checks are conducted for personnel with access to children&apos;s data or direct contact with students</li>
                        <li>A designated Safeguarding Officer oversees compliance with safeguarding policies</li>
                        <li>Safeguarding concerns are reported through a confidential reporting mechanism</li>
                        <li>The Company does not tolerate any form of abuse, exploitation, or harassment</li>
                        <li>Compliance with the Tanzanian Children&apos;s Act and international safeguarding standards (e.g., Keeping Children Safe standards)</li>
                    </ul>

                    {/* Section 59 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">59. Environmental, Social, and Governance (ESG) Commitment</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>Environmental:</strong> Commitment to minimizing environmental footprint through efficient cloud computing, reducing paper usage, and promoting digital-first operations.</li>
                        <li><strong>Social:</strong> Advancing educational equity, supporting teacher wellbeing, empowering underserved communities, and promoting gender equality in STEM education.</li>
                        <li><strong>Governance:</strong> Transparent decision-making, stakeholder accountability, ethical business practices, and compliance with all applicable laws and regulations.</li>
                    </ul>

                    {/* Section 60 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">60. Impact Measurement and Reporting</h2>
                    <p className="mb-3">The Company is committed to evidence-based impact measurement:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Baseline assessments are conducted before program implementation</li>
                        <li>Key Performance Indicators (KPIs) are defined in collaboration with donors and partners</li>
                        <li>Regular progress reports are provided in alignment with donor reporting schedules</li>
                        <li>Independent evaluations may be commissioned as agreed with funding partners</li>
                        <li>Disaggregated data (by gender, region, school type) is collected and reported where applicable</li>
                        <li>Lessons learned are documented and shared with stakeholders</li>
                    </ul>

                    {/* Section 61 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">61. Sanctions Compliance</h2>
                    <p className="mb-6">The Company does not knowingly engage with any individual, entity, or country subject to international sanctions imposed by the United Nations, European Union, United States (OFAC), or other relevant sanctions authorities. Sanctions compliance screening is conducted as part of due diligence for all significant partnerships and vendor engagements.</p>

                    {/* Section 62 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">62. Donor-Specific Obligations</h2>
                    <p className="mb-4">Where specific donors impose additional compliance requirements beyond this framework, the Company shall:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Review and incorporate donor-specific requirements into project implementation plans</li>
                        <li>Assign a dedicated compliance liaison for each major donor relationship</li>
                        <li>Ensure all staff involved in donor-funded projects are trained on applicable requirements</li>
                        <li>Maintain separate project documentation as required by individual grant agreements</li>
                    </ul>

                    {/* Section 63 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">63. Board Commitment Statement</h2>
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-6">
                        <p className="text-slate-700 italic leading-relaxed">
                            &ldquo;The Board of Directors of Evolucion Technologies Company Limited is fully committed to maintaining the highest standards of governance, accountability, data protection, and ethical conduct. We recognize our responsibility to the communities we serve, the institutions we partner with, and the donors who entrust us with resources to advance educational transformation in Tanzania. This Legal and Compliance Framework reflects our institutional commitment to transparency, integrity, and continuous improvement.&rdquo;
                        </p>
                        <p className="mt-4 text-sm text-slate-500">— Board of Directors, Evolucion Technologies Company Limited</p>
                    </div>

                    {/* Contact */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Contact</h2>
                    <p className="mb-4">
                        For compliance and donor relations inquiries, contact: <a href="mailto:mentoratanzania@gmail.com" className="text-fuchsia-600 hover:underline">mentoratanzania@gmail.com</a>.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
