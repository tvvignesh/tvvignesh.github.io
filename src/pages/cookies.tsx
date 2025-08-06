export function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>

      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. What Are Cookies</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you
            visit a website. They are widely used to make websites work more efficiently and provide
            information to the owners of the site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">2. How We Use Cookies</h2>
          <p>Boiler uses cookies to:</p>
          <ul className="list-disc list-inside mt-2 ml-4">
            <li>Remember your preferences and settings</li>
            <li>Understand how you use our service</li>
            <li>Improve your user experience</li>
            <li>Analyze site traffic and usage patterns</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Types of Cookies We Use</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold">Essential Cookies</h3>
              <p className="text-sm">
                These cookies are necessary for the website to function properly. They enable basic
                functions like page navigation and access to secure areas.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Analytics Cookies</h3>
              <p className="text-sm">
                We use Google Analytics to help us understand how visitors use our site. These
                cookies collect information in an anonymous form.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Functionality Cookies</h3>
              <p className="text-sm">
                These cookies allow the website to remember choices you make (such as your username
                or language preference) and provide enhanced features.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Managing Cookies</h2>
          <p>
            Most web browsers allow you to control cookies through their settings preferences.
            However, if you limit the ability of websites to set cookies, you may impact your
            overall user experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Third-Party Cookies</h2>
          <p>
            We use Google Analytics for tracking and analytics purposes. Google may use cookies to
            track your activity across websites. You can opt out of Google Analytics by visiting:
            https://tools.google.com/dlpage/gaoptout
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. Any changes will be posted on this
            page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Contact Us</h2>
          <p>If you have any questions about our use of cookies, please contact us at:</p>
          <p className="mt-2">
            Email: contact@boiler.com
            <br />
            Phone: +91-7358445777
            <br />
            Address: No.43, Veeramani Nagar, 2nd Cross Street, Nanmangalam, Chennai - 600117
          </p>
        </section>

        <section>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-8">
            Last updated: January 2025
          </p>
        </section>
      </div>
    </div>
  )
}
