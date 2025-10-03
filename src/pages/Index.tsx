import { ArrowRight, Sparkles, Heart, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-health.jpg";
import gen3Image from "@/assets/gen3-product.jpg";
import livImage from "@/assets/liv-product.jpg";
import gloImage from "@/assets/glo-product.jpg";

const Index = () => {
  const products = [
    {
      name: "Gen3™",
      tagline: "პრემიუმ კოლაგენი",
      description: "კანის, თმის, ფრჩხილებისა და სახსრების ჯანმრთელობა",
      image: gen3Image,
      icon: Sparkles,
      link: "/products/gen3"
    },
    {
      name: "LIV™",
      tagline: "სუპერხილის ძალა",
      description: "იმუნიტეტი, ენერგია და ვიტალურობა",
      image: livImage,
      icon: Heart,
      link: "/products/liv"
    },
    {
      name: "GLO™",
      tagline: "კანის მოვლა",
      description: "პროფესიონალური კანის მოვლის ხაზი",
      image: gloImage,
      icon: Shield,
      link: "/products/glo"
    }
  ];

  const testimonials = [
    {
      name: "ნინო კ.",
      rating: 5,
      text: "Gen3™-მ ნამდვილად შეცვალა ჩემი კანი! 2 თვეში შედეგი შესამჩნევია."
    },
    {
      name: "გიორგი მ.",
      rating: 5,
      text: "LIV™ მაძლევს ენერგიას მთელი დღის განმავლობაში. აღარ ვგრძნობ დაღლილობას!"
    },
    {
      name: "მარიამ ბ.",
      rating: 5,
      text: "GLO™ ხაზი უბრალოდ დაუჯერებელია! ჩემი კანი აღარასდროს ყოფილა ასე მოწესრიგებული."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Healthy lifestyle" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        </div>
        
        <div className="container mx-auto relative z-10 pt-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              გარდაქმენი შენი <br />
              ჯანმრთელობა და <br />
              <span className="text-accent">შემოსავალი</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              შემოგვიერთდი გლობალურ საზოგადოებაში, რომელიც აძლევს ხალხს ძალას ჯანმრთელობის, 
              ენერგიისა და ფინანსური თავისუფლების მისაღწევად
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/affiliate">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg group">
                  გახდი აფილიაცია
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
                  იხილე პროდუქტები
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              ჩვენი <span className="bg-[var(--gradient-health)] bg-clip-text text-transparent">პროდუქტები</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              პრემიუმ ხარისხის დანამატები თქვენი ჯანმრთელობისა და კეთილდღეობისთვის
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <Card 
                  key={index}
                  className="overflow-hidden hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="aspect-square overflow-hidden bg-accent">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <IconComponent className="text-primary" size={20} />
                      <span className="text-sm font-medium text-primary">{product.tagline}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <Link to={product.link}>
                      <Button variant="outline" className="w-full group">
                        გაიგე მეტი
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                ყველა პროდუქტი
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why JIFU Section */}
      <section className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">რატომ JIFU?</h2>
            <p className="text-xl text-muted-foreground">მიზეზები თუ რატომ უნდა აირჩიოთ ჩვენ</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">პრემიუმ ხარისხი</h3>
                <p className="text-muted-foreground">
                  მხოლოდ საუკეთესო ინგრედიენტები და სამეცნიერო მტკიცებულებებზე დაფუძნებული ფორმულები
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-secondary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">დამტკიცებული შედეგები</h3>
                <p className="text-muted-foreground">
                  ათასობით კმაყოფილი მომხმარებელი და ხილული შედეგები
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-accent-foreground/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-accent-foreground" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">გარანტია</h3>
                <p className="text-muted-foreground">
                  30 დღიანი ფულის დაბრუნების გარანტია ყველა პროდუქტზე
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">რას ამბობენ ჩვენი კლიენტები</h2>
            <p className="text-xl text-muted-foreground">რეალური შედეგები, რეალური ადამიანებისგან</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="fill-primary text-primary" size={18} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[var(--gradient-card)]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">მზად ხართ დაიწყოთ თქვენი მოგზაურობა?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            შემოგვიერთდით ათასობით ადამიანს, რომლებმაც უკვე გარდაქმნეს თავიანთი ჯანმრთელობა და შემოსავალი JIFU-ს დახმარებით
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/affiliate">
              <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg">
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

export default Index;
