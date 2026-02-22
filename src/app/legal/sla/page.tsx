import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ServiceLevelAgreement() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <Link href="/legal" className="text-fuchsia-600 hover:underline text-sm font-medium">← Back to Legal Hub</Link>
                </div>
                <h1 className="text-4xl font-bold font-display text-slate-900 mb-2">Service Level Agreement (SLA)</h1>
                <p className="text-sm text-slate-500 mb-2">Part V of the Mentora Tanzania Legal Framework</p>
                <p className="text-sm text-slate-400 mb-8">Effective Date: 1 January 2026 · © 2026 Mentora Tanzania — A solution by Evolucion Technologies Company Limited</p>

                <div className="prose prose-slate max-w-none text-slate-600">
                    {/* Section 35 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">35. Purpose</h2>
                    <p className="mb-6">This Service Level Agreement (SLA) defines the measurable performance standards, availability targets, and support commitments that Evolucion Technologies Company Limited guarantees to Institutions subscribing to the Mentora Tanzania platform. This SLA forms part of the overarching Mentora Service Agreement.</p>

                    {/* Section 36 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">36. Service Availability</h2>
                    <div className="overflow-x-auto mb-6">
                        <table className="w-full border-collapse border border-slate-300 text-sm">
                            <thead>
                                <tr className="bg-slate-100">
                                    <th className="border border-slate-300 p-3 text-left text-slate-800">Service Component</th>
                                    <th className="border border-slate-300 p-3 text-center text-slate-800">Availability Target</th>
                                    <th className="border border-slate-300 p-3 text-center text-slate-800">Measurement Period</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-slate-300 p-3 text-slate-700">Core Platform (Web Application)</td>
                                    <td className="border border-slate-300 p-3 text-center font-medium">99.5%</td>
                                    <td className="border border-slate-300 p-3 text-center">Monthly</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 p-3 text-slate-700">AI Lesson Planning Engine</td>
                                    <td className="border border-slate-300 p-3 text-center font-medium">99.0%</td>
                                    <td className="border border-slate-300 p-3 text-center">Monthly</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 p-3 text-slate-700">Analytics Dashboard</td>
                                    <td className="border border-slate-300 p-3 text-center font-medium">99.0%</td>
                                    <td className="border border-slate-300 p-3 text-center">Monthly</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 p-3 text-slate-700">API Services</td>
                                    <td className="border border-slate-300 p-3 text-center font-medium">99.5%</td>
                                    <td className="border border-slate-300 p-3 text-center">Monthly</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 p-3 text-slate-700">Data Backup Systems</td>
                                    <td className="border border-slate-300 p-3 text-center font-medium">99.9%</td>
                                    <td className="border border-slate-300 p-3 text-center">Monthly</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mb-6">Availability is calculated as: <span className="font-mono bg-slate-100 px-2 py-1 rounded text-sm">(Total Minutes − Downtime Minutes) / Total Minutes × 100</span></p>

                    {/* Section 37 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">37. Incident Response and Resolution Times</h2>
                    <div className="overflow-x-auto mb-6">
                        <table className="w-full border-collapse border border-slate-300 text-sm">
                            <thead>
                                <tr className="bg-slate-100">
                                    <th className="border border-slate-300 p-3 text-left text-slate-800">Priority Level</th>
                                    <th className="border border-slate-300 p-3 text-left text-slate-800">Description</th>
                                    <th className="border border-slate-300 p-3 text-center text-slate-800">Response Time</th>
                                    <th className="border border-slate-300 p-3 text-center text-slate-800">Resolution Target</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-slate-300 p-3 font-medium text-red-700">P1 — Critical</td>
                                    <td className="border border-slate-300 p-3 text-slate-700">Complete service outage or data breach</td>
                                    <td className="border border-slate-300 p-3 text-center font-medium">30 minutes</td>
                                    <td className="border border-slate-300 p-3 text-center font-medium">4 hours</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 p-3 font-medium text-orange-700">P2 — High</td>
                                    <td className="border border-slate-300 p-3 text-slate-700">Major feature unavailable, affecting multiple users</td>
                                    <td className="border border-slate-300 p-3 text-center font-medium">2 hours</td>
                                    <td className="border border-slate-300 p-3 text-center font-medium">8 hours</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 p-3 font-medium text-amber-700">P3 — Medium</td>
                                    <td className="border border-slate-300 p-3 text-slate-700">Feature degradation, workaround available</td>
                                    <td className="border border-slate-300 p-3 text-center font-medium">4 hours</td>
                                    <td className="border border-slate-300 p-3 text-center font-medium">24 hours</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 p-3 font-medium text-blue-700">P4 — Low</td>
                                    <td className="border border-slate-300 p-3 text-slate-700">Minor issue, cosmetic defect, or enhancement request</td>
                                    <td className="border border-slate-300 p-3 text-center font-medium">1 business day</td>
                                    <td className="border border-slate-300 p-3 text-center font-medium">5 business days</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Section 38 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">38. Scheduled Maintenance</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Scheduled maintenance windows shall be communicated at least 48 hours in advance</li>
                        <li>Preferred maintenance window: Sundays, 02:00–06:00 EAT (East Africa Time)</li>
                        <li>Scheduled maintenance shall not exceed 4 hours per occurrence</li>
                        <li>Scheduled maintenance downtime is excluded from availability calculations</li>
                        <li>Emergency maintenance requiring immediate action shall be communicated as promptly as possible with follow-up incident reporting</li>
                    </ul>

                    {/* Section 39 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">39. Escalation Procedures</h2>
                    <p className="mb-3">The following escalation path applies when SLA targets are not being met:</p>
                    <ol className="list-decimal pl-6 mb-6 space-y-2">
                        <li><strong>Level 1 — Technical Support Team:</strong> First point of contact for all incidents. Available during business hours.</li>
                        <li><strong>Level 2 — Senior Engineering:</strong> Engaged for P1 and P2 incidents or when Level 1 resolution target is exceeded.</li>
                        <li><strong>Level 3 — Chief Technology Officer:</strong> Engaged for P1 incidents not resolved within target time or recurring systemic issues.</li>
                        <li><strong>Level 4 — CEO / Managing Director:</strong> Engaged for critical incidents with material business, legal, or reputational impact.</li>
                    </ol>

                    {/* Section 40 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">40. SLA Remedies</h2>
                    <p className="mb-3">Where the Company fails to meet availability targets:</p>
                    <div className="overflow-x-auto mb-6">
                        <table className="w-full border-collapse border border-slate-300 text-sm">
                            <thead>
                                <tr className="bg-slate-100">
                                    <th className="border border-slate-300 p-3 text-left text-slate-800">Monthly Uptime</th>
                                    <th className="border border-slate-300 p-3 text-center text-slate-800">Service Credit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-slate-300 p-3 text-slate-700">99.0% – 99.5%</td>
                                    <td className="border border-slate-300 p-3 text-center">5% of monthly fees</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 p-3 text-slate-700">95.0% – 99.0%</td>
                                    <td className="border border-slate-300 p-3 text-center">10% of monthly fees</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 p-3 text-slate-700">90.0% – 95.0%</td>
                                    <td className="border border-slate-300 p-3 text-center">25% of monthly fees</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 p-3 text-slate-700">Below 90.0%</td>
                                    <td className="border border-slate-300 p-3 text-center">50% of monthly fees</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mb-6">Service credits shall be applied to the following billing cycle. Maximum aggregate service credits shall not exceed 50% of monthly fees.</p>

                    {/* Section 41 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">41. Exclusions</h2>
                    <p className="mb-3">The following events are excluded from SLA availability calculations:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Scheduled maintenance as defined in Section 38</li>
                        <li>Force majeure events (natural disasters, pandemics, war, government action)</li>
                        <li>Issues caused by the Institution&apos;s network, hardware, or infrastructure</li>
                        <li>Third-party service outages beyond the Company&apos;s control</li>
                        <li>Actions or inactions by the Institution that cause service degradation</li>
                    </ul>

                    {/* Section 42 */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">42. Reporting</h2>
                    <p className="mb-6">The Company shall provide monthly SLA performance reports to Institutions, including uptime statistics, incident summaries, and any service credits due. Quarterly business reviews may be requested by Institutions to discuss performance trends and improvement plans.</p>

                    {/* Contact */}
                    <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Contact</h2>
                    <p className="mb-4">
                        For SLA-related inquiries, contact: <a href="mailto:mentoratanzania@gmail.com" className="text-fuchsia-600 hover:underline">mentoratanzania@gmail.com</a>.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
