import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import gen3Image from "@/assets/gen3-product.jpg";
import livImage from "@/assets/liv-product.jpg";
import gloImage from "@/assets/glo-product.jpg";

const Products = () => {
  const products = [
    {
      id: "gen3",
      name: "Gen3™",
      tagline: "პრემიუმ კოლაგენი",
      description: "კანის, თმის, ფრჩხილებისა და სახსრების ჯანმრთელობა",
      image: gen3Image,
      benefits: [
        "კანის ელასტიურობის გაუმჯობესება",
        "სახსრების მხარდაჭერა",
        "ანტი-აიჯინგ ეფექტი",
        "თმისა და ფრჩხილების გაძლიერება",
      ],
      icon: Sparkles,
      color: "primary",
    },
    {
      id: "liv",
      name: "LIV™",
      tagline: "სუპერხილის ძალა",
      description: "იმუნიტეტი, ენერგია და ვიტალურობა",
      image: livImage,
      benefits: [
        "ძლიერი ანტიოქსიდანტები",
        "იმუნიტეტის მხარდაჭერა",
        "ბუნებრივი ენერგია",
        "ორგანიზმის დაცვა",
      ],
      icon: Heart,
      color: "secondary",
    },
    {
      id: "glo",
      name: "GLO™",
      tagline: "კანის მოვლის სრულყოფილება",
      description: "პროფესიონალური კანის მოვლის ხაზი",
      image: gloImage,
      benefits: [
        "ღრმა დატენიანება",
        "კანის ტონის გასწორება",
        "ნაოჭების შემცირება",
        "ბუნებრივი ბრწყინვალება",
      ],
      icon: Shield,
      color: "accent",
    },
    {
      id: "glo",
      name: "GLO™",
      tagline: "კანის მოვლის სრულყოფილება",
      description: "პროფესიონალური კანის მოვლის ხაზი",
      image: gloImage,
      benefits: [
        "ღრმა დატენიანება",
        "კანის ტონის გასწორება",
        "ნაოჭების შემცირება",
        "ბუნებრივი ბრწყინვალება",
      ],
      icon: Shield,
      color: "accent",
    },
    {
      id: "glo",
      name: "GLO™",
      tagline: "კანის მოვლის სრულყოფილება",
      description: "პროფესიონალური კანის მოვლის ხაზი",
      image: gloImage,
      benefits: [
        "ღრმა დატენიანება",
        "კანის ტონის გასწორება",
        "ნაოჭების შემცირება",
        "ბუნებრივი ბრწყინვალება",
      ],
      icon: Shield,
      color: "accent",
    },
    {
      id: "glo",
      name: "GLO™",
      tagline: "კანის მოვლის სრულყოფილება",
      description: "პროფესიონალური კანის მოვლის ხაზი",
      image: gloImage,
      benefits: [
        "ღრმა დატენიანება",
        "კანის ტონის გასწორება",
        "ნაოჭების შემცირება",
        "ბუნებრივი ბრწყინვალება",
      ],
      icon: Shield,
      color: "accent",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            ჩვენი <span className="text-primary">პროდუქტები</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            პრემიუმ ხარისხის დანამატები თქვენი ჯანმრთელობისა და კეთილდღეობისთვის
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => {
              const IconComponent = product.icon;
              return (
                <Card
                  key={product.id}
                  className="overflow-hidden hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-square overflow-hidden bg-accent">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <IconComponent className="text-primary" size={20} />
                      <span className="text-sm font-medium text-primary">
                        {product.tagline}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-4">
                      {product.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {product.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                          <span className="text-sm text-muted-foreground">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link to={`/products/${product.id}`}>
                      <Button className="w-full bg-primary hover:bg-primary/90 group">
                        გაიგე მეტი
                        <ArrowRight
                          className="ml-2 group-hover:translate-x-1 transition-transform"
                          size={16}
                        />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-accent/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">მზად ხართ დაიწყოთ?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            შეუერთდით ათასობით ადამიანს, რომლებმაც უკვე გააუმჯობესეს თავიანთი
            ჯანმრთელობა JGEO-ს პროდუქტებით
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/affiliate">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                გახდი აფილიაცია
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                დაგვიკავშირდი
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
