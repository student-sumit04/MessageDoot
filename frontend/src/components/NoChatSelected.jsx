import { MessageSquare, Users, Sparkles, Heart } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-gradient-to-br from-base-100 via-base-200 to-base-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-lg text-center space-y-8 relative z-10">
        {/* Animated Icons Display */}
        <div className="flex justify-center items-center gap-4 mb-8">
          {/* Main Message Icon */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
            <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl shadow-primary/25 animate-bounce hover:scale-110 transition-all duration-300">
              <MessageSquare className="w-10 h-10 text-primary-content" />
            </div>
          </div>

          {/* Floating side icons */}
          <div className="flex flex-col gap-3">
            <div className="w-12 h-12 rounded-2xl bg-base-200 border border-base-300 flex items-center justify-center shadow-lg animate-pulse hover:scale-105 transition-all duration-300">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-base-200 border border-base-300 flex items-center justify-center shadow-lg animate-pulse delay-300 hover:scale-105 transition-all duration-300">
              <Heart className="w-6 h-6 text-secondary" />
            </div>
          </div>
        </div>

        {/* Welcome Text with enhanced typography */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-accent animate-pulse" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Welcome to MessageDoot!
            </h2>
            <Sparkles className="w-6 h-6 text-accent animate-pulse delay-500" />
          </div>
          
          <p className="text-lg text-base-content/70 leading-relaxed">
            Select a conversation from the sidebar to start chatting with your friends
          </p>
          
          <p className="text-sm text-base-content/50 italic">
            Connect, share, and stay close with the people you care about
          </p>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-base-300">
          <div className="text-center group cursor-default">
            <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <p className="text-xs text-base-content/60 font-medium">Real-time Chat</p>
          </div>
          
          <div className="text-center group cursor-default">
            <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-all duration-300">
              <Users className="w-6 h-6 text-secondary" />
            </div>
            <p className="text-xs text-base-content/60 font-medium">Group Chats</p>
          </div>
          
          <div className="text-center group cursor-default">
            <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300">
              <Heart className="w-6 h-6 text-accent" />
            </div>
            <p className="text-xs text-base-content/60 font-medium">Stay Connected</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoChatSelected;
