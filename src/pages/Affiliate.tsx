import {
  DollarSign,
  Users,
  TrendingUp,
  Award,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { useState } from "react";

const Affiliate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      "თქვენი განაცხადი წარმატებით გაიგზავნა! ჩვენ მალე დაგიკავშირდებით."
    );
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "მაღალი საკომისიო",
      description: "გამოიმუშავეთ დაწყებული 20%-დან 35%-მდე თითოეულ გაყიდვაზე",
    },
    {
      icon: Users,
      title: "გუნდის შენება",
      description:
        "შექმენით თქვენი ქსელი და მიიღეთ შემოსავალი გუნდის გაყიდვებიდან",
    },
    {
      icon: TrendingUp,
      title: "უზრუნველყოფილი ზრდა",
      description:
        "სრული ტრენინგი და მარკეტინგული მხარდაჭერა თქვენი წარმატებისთვის",
    },
    {
      icon: Award,
      title: "ბონუსები და პრემიები",
      description: "სპეციალური ჯილდოები და ბონუსები საუკეთესო პარტნიორებისთვის",
    },
  ];

  const steps = [
    "შეავსეთ რეგისტრაციის ფორმა",
    "მიიღეთ უფასო საცდელი პაკეტი",
    "გაიარეთ ონლაინ ტრენინგი",
    "დაიწყეთ გაყიდვები და გამოიმუშავეთ",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-[var(--gradient-card)]">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            გადააქციე შენი გატაცება <br />
            <span className="bg-[var(--gradient-health)] bg-clip-text text-transparent">
              ჯანმრთელობისადმი შემოსავლად
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            შემოუერთდი JGEO-ს აფილიაციის პროგრამას და იმუშავე გუნდთან ერთად,
            რომელიც აცვლის ადამიანების ცხოვრებას
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            რატომ JGEO აფილიაცია?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-[var(--shadow-hover)] transition-all"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-primary" size={32} />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              საკომისიოს სტრუქტურა
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              გამჭვირვალე და სამართლიანი საკომისიო სისტემა
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-2 border-primary/20">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">20%</CardTitle>
                  <p className="text-sm text-muted-foreground">საწყისი დონე</p>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-sm">პირდაპირი გაყიდვებიდან</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/40 bg-accent">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">27%</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    შუალედური დონე
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-sm">გუნდის გაყიდვებიდან</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary">35%</CardTitle>
                  <p className="text-sm text-muted-foreground">პრემიუმ დონე</p>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-sm">ლიდერის ბონუსი</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            როგორ დავიწყოთ?
          </h2>
          <div className="max-w-2xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div className="pt-2">
                  <p className="text-lg">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 px-4 bg-[var(--gradient-card)]">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-4">
            გაწევრიანების ფორმა
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            შეავსეთ ფორმა და ჩვენი წარმომადგენელი დაგიკავშირდებათ
          </p>

          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    სახელი და გვარი *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="თქვენი სრული სახელი"
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
                    ტელეფონი *
                  </label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+995 5XX XXX XXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    დამატებითი ინფორმაცია
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="რატომ გინდათ შემოგვიერთდეთ?"
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
                  size="lg"
                >
                  გაგზავნა
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Affiliate;
