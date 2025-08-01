import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dog, Scissors, Car, Home, ShoppingCart, Baby } from "lucide-react";

const JobCategories = () => {
  const categories = [
    {
      icon: Dog,
      title: "Pet Care",
      description: "Dog walking, pet sitting, feeding",
      jobs: "150+ jobs"
    },
    {
      icon: Scissors,
      title: "Lawn & Garden",
      description: "Mowing, weeding, leaf raking",
      jobs: "200+ jobs"
    },
    {
      icon: Car,
      title: "Car Care",
      description: "Washing, detailing, organizing",
      jobs: "80+ jobs"
    },
    {
      icon: Home,
      title: "House Help",
      description: "Cleaning, organizing, errands",
      jobs: "120+ jobs"
    },
    {
      icon: ShoppingCart,
      title: "Shopping & Delivery",
      description: "Grocery runs, pickup services",
      jobs: "90+ jobs"
    },
    {
      icon: Baby,
      title: "Childcare Support",
      description: "Babysitting, tutoring, supervision",
      jobs: "60+ jobs"
    }
  ];

  return (
    <section id="jobs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Popular Job Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From pet care to lawn maintenance, find the perfect job that matches your skills and interests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="hover:shadow-elegant transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/20 group"
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-3">{category.description}</p>
                <p className="text-primary font-semibold">{category.jobs}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategories;