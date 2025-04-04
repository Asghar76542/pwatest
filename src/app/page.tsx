import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1920&q=80')] bg-cover bg-center py-32 text-white">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Pakistan Welfare Association
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Supporting the Pakistani community in Burton Upon Trent since 1985
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/dashboard">Member Dashboard</Link>
            </Button>
            <Button variant="outline" size="lg">
              Join PWA Burton
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight">
              About PWA Burton
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              The Pakistan Welfare Association (PWA) Burton was established to
              support the Pakistani community in Burton Upon Trent and
              surrounding areas.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  To promote the welfare of the Pakistani community through
                  education, cultural activities, and social support services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Providing assistance with healthcare, education, employment,
                  and immigration matters to community members.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cultural Heritage</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Preserving and celebrating Pakistani cultural heritage through
                  events, language classes, and community gatherings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight">
              Our Services
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              We offer a range of services to support our community members.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>Membership</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Join our community and access exclusive benefits and support
                  services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Education Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Tutoring, language classes, and educational resources for all
                  ages.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Cultural celebrations, fundraisers, and social gatherings
                  throughout the year.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Welfare Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Support for families in need, including financial assistance
                  and counseling.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-semibold tracking-tight">
                Contact Us
              </h2>
              <p className="mb-6 text-muted-foreground">
                Get in touch with us for more information about our services or
                to become a member.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Address</h3>
                  <p>123 High Street, Burton Upon Trent, DE14 1JH</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Phone</h3>
                  <p>01283 123456</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium">Email</h3>
                  <p>info@pwaburton.org</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-muted p-6">
              <h3 className="mb-4 text-xl font-medium">Send us a message</h3>
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
                  ></textarea>
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-medium">PWA Burton</h3>
              <p className="text-sm text-muted-foreground">
                Supporting the Pakistani community in Burton Upon Trent since
                1985.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Member Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Membership
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Education Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Community Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Welfare Assistance
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Pakistan Welfare Association
              Burton. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
