import { Mail, MessageSquare, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <main className="min-h-screen pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Get in Touch
        </h1>
        <p className="text-muted-foreground mb-12">
          Have questions about our Roblox items? We're here to help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card rounded-xl p-6 border border-border">
            <Mail className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-medium text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground text-sm">
              support@robloxmarket.com
            </p>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border">
            <MessageSquare className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-medium text-foreground mb-2">Live Chat</h3>
            <p className="text-muted-foreground text-sm">Available 24/7</p>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border">
            <MapPin className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-medium text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground text-sm">Virtual World HQ</p>
          </div>
        </div>

        <form className="bg-card rounded-xl p-8 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm text-muted-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm text-muted-foreground mb-2">
              Message
            </label>
            <textarea
              rows={5}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder="How can we help?"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
