import "./css/privacypolicy.css"

function PrivacyPolicy() {
    return (
        <div className="privacy_wrapper">
            <div className="privacy_container">

                <h1 className="privacy_title">Privacy Policy</h1>
                <p className="privacy_updated">Last updated: June 2026</p>

                <p className="privacy_text" style={{ color: "#2d6a4f", fontWeight: 600 }}>
                    ⚠️ Grocera is currently under heavy development. Features may change, break, or be unavailable at any time.
                </p>

                <section className="privacy_section">
                    <h2 className="privacy_heading">1. Introduction</h2>
                    <p className="privacy_text">
                        Welcome to Grocera. We built this app to make meal planning simple and stress-free.
                        This Privacy Policy explains what information we collect, how we use it, and your
                        rights as a user. By using Grocera, you agree to the practices described in this policy.
                    </p>
                </section>

                <section className="privacy_section">
                    <h2 className="privacy_heading">2. Information We Collect</h2>
                    <h3 className="privacy_subheading">Information You Provide</h3>
                    <p className="privacy_text">
                        <strong>Meal preferences</strong> — the breakfast, lunch, and dinner inputs you enter
                        when generating a shopping list.
                    </p>
                    <p className="privacy_text">
                        <strong>Email address</strong> — only if you choose to have your shopping list emailed to you.
                    </p>
                    <h3 className="privacy_subheading">Information Collected Automatically</h3>
                    <p className="privacy_text">
                        <strong>Usage data</strong> — basic information such as pages visited and actions taken,
                        used to improve the app.
                    </p>
                    <p className="privacy_text">
                        <strong>Device information</strong> — browser type and general location, collected
                        automatically by our hosting providers.
                    </p>
                    <p className="privacy_text">
                        We do not require you to create an account. We do not collect your name, address,
                        payment details, or any other personal identifiers unless you voluntarily provide them.
                    </p>
                </section>

                <section className="privacy_section">
                    <h2 className="privacy_heading">3. How We Use Your Information</h2>
                    <p className="privacy_text">We use the information you provide solely to:</p>
                    <p className="privacy_text">— Generate meal recipes and shopping lists based on your inputs.</p>
                    <p className="privacy_text">— Send your shopping list to your email address, if requested.</p>
                    <p className="privacy_text">— Improve and maintain the Grocera service.</p>
                    <p className="privacy_text">
                        We do not sell, rent, or share your personal information with third parties for
                        marketing purposes.
                    </p>
                </section>

                <section className="privacy_section">
                    <h2 className="privacy_heading">4. Third-Party Services</h2>
                    <p className="privacy_text">Grocera uses the following third-party services to operate:</p>
                    <p className="privacy_text">
                        <strong>Google Gemini API</strong> — your meal inputs are sent to Google's Gemini API
                        to generate recipes and shopping lists. You can review Google's privacy policy at{" "}
                        <a className="privacy_link" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
                            policies.google.com/privacy
                        </a>.
                    </p>
                    <p className="privacy_text">
                        <strong>Resend</strong> — if you request an email, your email address and shopping list
                        are sent via Resend to deliver that email. You can review their privacy policy at{" "}
                        <a className="privacy_link" href="https://resend.com/legal/privacy-policy" target="_blank" rel="noreferrer">
                            resend.com/legal/privacy-policy
                        </a>.
                    </p>
                    <p className="privacy_text">
                        <strong>Render</strong> — our backend is hosted on Render. You can review their privacy
                        policy at{" "}
                        <a className="privacy_link" href="https://render.com/privacy" target="_blank" rel="noreferrer">
                            render.com/privacy
                        </a>.
                    </p>
                    <p className="privacy_text">
                        <strong>Vercel</strong> — our frontend is hosted on Vercel. You can review their privacy
                        policy at{" "}
                        <a className="privacy_link" href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer">
                            vercel.com/legal/privacy-policy
                        </a>.
                    </p>
                </section>

                <section className="privacy_section">
                    <h2 className="privacy_heading">5. Data Retention</h2>
                    <p className="privacy_text">
                        Meal inputs are processed in real time and are not stored on our servers after your
                        shopping list is generated. Email addresses are not stored by us — they are passed
                        directly to Resend solely to deliver your email.
                    </p>
                </section>

                <section className="privacy_section">
                    <h2 className="privacy_heading">6. Cookies</h2>
                    <p className="privacy_text">
                        Grocera does not use cookies or any tracking technologies for advertising purposes.
                        Our hosting providers (Render, Vercel) may set standard technical cookies as part
                        of normal web infrastructure.
                    </p>
                </section>

                <section className="privacy_section">
                    <h2 className="privacy_heading">7. Children's Privacy</h2>
                    <p className="privacy_text">
                        Grocera is not directed at children under the age of 13. We do not knowingly collect
                        personal information from children. If you believe a child has provided us with personal
                        information, please contact us and we will delete it promptly.
                    </p>
                </section>

                <section className="privacy_section">
                    <h2 className="privacy_heading">8. Changes to This Policy</h2>
                    <p className="privacy_text">
                        We may update this Privacy Policy from time to time. When we do, we will update the
                        "Last updated" date at the top of this page. Continued use of Grocera after any changes
                        constitutes your acceptance of the updated policy.
                    </p>
                </section>

                <section className="privacy_section">
                    <h2 className="privacy_heading">9. Disclaimer of Liability</h2>
                    <p className="privacy_text">
                        Grocera is provided "as is" without any warranties of any kind. We are not liable for
                        any damages, losses, or issues arising from your use of the app, including but not limited
                        to errors in generated recipes, shopping lists, or any reliance placed on the information
                        provided by the service. Use Grocera at your own discretion.
                    </p>
                </section>

                <p className="privacy_footer">Grocera — Plan your meals, skip the stress.</p>

            </div>
        </div>
    );
}

export default PrivacyPolicy