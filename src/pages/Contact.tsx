import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("თქვენი შეტყობინება გაიგზავნა! ჩვენ მალე დაგიკავშირდებით.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "ელ. ფოსტა",
      content: "info@JGEO.ge",
      link: "mailto:info@JGEO.ge",
    },
    {
      icon: Phone,
      title: "ტელეფონი",
      content: "+995 555 123 456",
      link: "tel:+995555123456",
    },
    {
      icon: MapPin,
      title: "მისამართი",
      content: "თბილისი, საქართველო",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      {/* <section className="pt-32 pb-16 px-4 bg-[var(--gradient-card)]"> */}
      <section className="pt-8 pb-0 px-4 bg-[var(--gradient-card)]">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-[var(--gradient-health)] bg-clip-text text-transparent">
              დაგვიკავშირდით
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            გაქვთ კითხვები? ჩვენ აქ ვართ დახმარებისთვის
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-[var(--shadow-hover)] transition-all"
                >
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-primary" size={28} />
                    </div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.content}</p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-accent/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              გამოგვიგზავნეთ შეტყობინება
            </h2>
            <p className="text-muted-foreground">
              შეავსეთ ფორმა და ჩვენ დაგიკავშირდებით 24 საათში
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    სახელი *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="თქვენი სახელი"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    ელ. ფოსტა *
                  </label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    თემა *
                  </label>
                  <Input
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="შეტყობინების თემა"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    შეტყობინება *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="თქვენი შეტყობინება..."
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 group"
                  size="lg"
                >
                  გაგზავნა
                  <Send
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={16}
                  />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            ხშირად დასმული კითხვები
          </h2>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">
                  როგორ გავხდე JGEO-ს აფილიაცია?
                </h3>
                <p className="text-muted-foreground text-sm">
                  შეავსეთ რეგისტრაციის ფორმა აფილიაციის გვერდზე და ჩვენი
                  წარმომადგენელი დაგიკავშირდებათ ყველა დეტალის გასარკვევად.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">
                  რა არის პროდუქტების ხელმისაწვდომობა?
                </h3>
                <p className="text-muted-foreground text-sm">
                  ყველა ჩვენი პროდუქტი ხელმისაწვდომია საქართველოს მთელ
                  ტერიტორიაზე. მიწოდება ხდება 2-3 სამუშაო დღეში.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">
                  არის თუ არა გარანტია პროდუქტებზე?
                </h3>
                <p className="text-muted-foreground text-sm">
                  დიახ, ყველა პროდუქტზე გვაქვს 30 დღიანი ფულის დაბრუნების
                  გარანტია. თუ კმაყოფილი არ ხართ, სრულად დაგიბრუნდებათ თანხა.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
