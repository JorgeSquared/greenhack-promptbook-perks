
import { Mail, Github, Trophy, Zap, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-green-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <Zap className="w-4 h-4 mr-2" />
              GreenHack 2025 Sponsor
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent mb-6 animate-fade-in">
              <a 
                href="https://ptbk.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:bg-gradient-to-r hover:from-emerald-800 hover:to-green-800 hover:bg-clip-text hover:text-transparent transition-all duration-300"
              >
                PromptBook
              </a>
              {" × "}
              <a 
                href="https://greenhack.eu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:bg-gradient-to-r hover:from-emerald-800 hover:to-green-800 hover:bg-clip-text hover:text-transparent transition-all duration-300"
              >
                GreenHack
              </a>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-4 animate-fade-in">
              Prize & Perks 🚀
            </p>
            
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 animate-fade-in">
              We're excited to support the next generation of green tech innovators at GreenHack!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('prizes')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Prizes
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('https://github.com/webgptorg/promptbook', '_blank')}
              >
                <Github className="mr-2 w-5 h-5" />
                Explore Code
              </Button>
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://discord.gg/bVfb7Kn2', '_blank')}
              >
                <Users className="mr-2 w-5 h-5" />
                Join us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Prizes Section */}
      <div id="prizes" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unlimited Ways to Build with PromptBook
            </h2>
            <p className="text-xl text-gray-600">
              Every participant has an opportunity to claim PromptBook tokens
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Winner Prize */}
            <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-emerald-500 to-green-600 text-white transform hover:scale-105 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/20 rounded-full -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
              
              <CardContent className="relative p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-yellow-400 rounded-full mr-4">
                    <Trophy className="w-8 h-8 text-yellow-900" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Winning Team</h3>
                    <p className="text-emerald-100">If you take home the victory</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold mb-2">20,000 CZK</div>
                  <div className="text-emerald-100">in PromptBook tokens</div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-sm">Email us at tokens@ptbk.io within 14 days of the closing ceremony</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-sm">Once verified, tokens will be dropped into your team account</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-sm">Super-charge your next build with our platform</p>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-white text-emerald-600 hover:bg-gray-50 font-semibold py-3 shadow-lg"
                  onClick={() => window.open('mailto:tokens@ptbk.io?subject=GreenHack Winner Claim&body=Hello PromptBook team,%0A%0AWe are the winning team from GreenHack and would like to claim our 20,000 CZK token prize.%0A%0ATeam details:%0A- Team name:%0A- Team members:%0A- Project name:%0A%0AThank you!', '_blank')}
                >
                  <Mail className="mr-2 w-4 h-4" />
                  Claim Winner Prize
                </Button>
              </CardContent>
            </Card>

            {/* Participant Prize */}
            <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white transform hover:scale-105 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/20 rounded-full -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12" />
              
              <CardContent className="relative p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-cyan-400 rounded-full mr-4">
                    <Users className="w-8 h-8 text-cyan-900" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Every Participant</h3>
                    <p className="text-teal-100">Keep building and innovating</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold mb-2">2,000 CZK</div>
                  <div className="text-teal-100">starter pack tokens</div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-sm">Email us from your hackathon-registered address</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-sm">Perfect for exploring, iterating, and polishing your ideas</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-sm">Continue your innovation journey with PromptBook</p>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-white text-teal-600 hover:bg-gray-50 font-semibold py-3 shadow-lg"
                  onClick={() => window.open('mailto:tokens@ptbk.io?subject=GreenHack Participant Tokens&body=Hello PromptBook team,%0A%0AI participated in GreenHack and would like to claim my 2,000 CZK starter pack.%0A%0AParticipant details:%0A- Name:%0A- Team name:%0A- Project name:%0A- Registered email:%0A%0AThank you!', '_blank')}
                >
                  <Mail className="mr-2 w-4 h-4" />
                  Claim Starter Pack
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Additional CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-in">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open('https://github.com/webgptorg/promptbook', '_blank')}
          >
            <Github className="mr-2 w-5 h-5" />
            Explore Code
          </Button>
          <Button 
            size="lg" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://discord.gg/bVfb7Kn2', '_blank')}
          >
            <Users className="mr-2 w-5 h-5" />
            Join us
          </Button>
        </div>
      </div>

      {/* Resources Section */}
      <div className="py-20 bg-gradient-to-r from-gray-900 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Explore Our Platform</h2>
          <p className="text-xl text-gray-300 mb-8">
            Dive into our code and documentation to supercharge your hackathon project
          </p>
          
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8">
            <Github className="w-5 h-5 mr-3" />
            <span className="font-mono text-lg">github.com/webgptorg/promptbook</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://github.com/webgptorg/promptbook', '_blank')}
            >
              <Github className="mr-2 w-5 h-5" />
              Explore Code & Docs
            </Button>
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://discord.gg/bVfb7Kn2', '_blank')}
            >
              <Users className="mr-2 w-5 h-5" />
              Join us
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-12 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Happy hacking through life! 💚</h3>
          <p className="text-gray-400 mb-6">
            Supporting innovation at{" "}
            <a 
              href="https://greenhack.eu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 underline transition-colors"
            >
              GreenHack 2025
            </a>
          </p>
          <div className="text-sm text-gray-500">
            <p>© 2025 PromptBook. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
