import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Search, MessageCircle, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Create your profile as a teen helper or someone who needs assistance",
      color: "text-primary"
    },
    {
      icon: Search,
      title: "Find Jobs",
      description: "Browse available tasks in your area or post a job you need done",
      color: "text-primary"
    },
    {
      icon: MessageCircle,
      title: "Connect",
      description: "Chat with potential helpers or job posters to arrange details",
      color: "text-primary"
    },
    {
      icon: CheckCircle,
      title: "Get It Done",
      description: "Complete the task, get paid, and leave reviews for future connections",
      color: "text-primary"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            How Oldie Helper Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple. Follow these four easy steps to begin earning or getting help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative text-center shadow-soft hover:shadow-elegant transition-all duration-300 border-0 bg-white">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                </div>
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;