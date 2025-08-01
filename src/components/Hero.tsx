import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Users, Briefcase, Clock } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-hero text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Connect Teens with
          <br />
          <span className="text-white/90">Local Job Opportunities</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
          Helping teens earn money while assisting community members with everyday tasks like dog walking, lawn mowing, and yard work.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="xl" 
            variant="secondary"
            onClick={() => navigate("/signup")}
            className="shadow-lg"
          >
            Start Earning Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="xl" 
            variant="outline"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            Post a Job
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="bg-white/20 p-4 rounded-full mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">500+ Active Teens</h3>
            <p className="text-white/80">Ready to help with your tasks</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white/20 p-4 rounded-full mb-4">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1000+ Jobs Completed</h3>
            <p className="text-white/80">Successful tasks every month</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white/20 p-4 rounded-full mb-4">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-white/80">We're here when you need us</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;