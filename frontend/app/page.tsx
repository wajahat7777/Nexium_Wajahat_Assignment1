"use client";
import { useState, useEffect } from 'react';
import { Zap, Brain, Atom, Sparkles, RefreshCw, Copy, Share, Quote, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

interface Quote {
  text: string;
  topic: string;
  color?: string;
}

interface Bubble {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function FloatingBubbleQuoteLab() {
  const [topic, setTopic] = useState("");
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [showShareToast, setShowShareToast] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [shareText, setShareText] = useState("");
  const [sparkles, setSparkles] = useState<Array<{id: number, left: number, top: number, delay: number, duration: number}>>([]);

  
  // Generate floating bubbles on client side only
  useEffect(() => {
    const newBubbles: Bubble[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      size: Math.random() * 50 + 20,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.3 + 0.2,
    }));
    setBubbles(newBubbles);
  }, []);

  // Generate sparkles on client side only
  useEffect(() => {
    const newSparkles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 3 + Math.random() * 3,
    }));
    setSparkles(newSparkles);
  }, []);

  const handleSubmit = async () => {
    if (!topic.trim()) return;

    setLoading(true);
    setError("");
    setQuotes([]);

    try {
      const res = await fetch(`https://nexium-wajahat-assignment1-backend.vercel.app/api/quotes?topic=${encodeURIComponent(topic)}`);
      if (!res.ok) throw new Error("Network response was not ok");
      const data: Quote[] = await res.json();
      if (data.length === 0) {
        setError("No quotes found for this topic. Try another keyword!");
      } else {
        setQuotes(data.map((q: Quote) => ({ ...q, color: "from-sky-300 to-purple-400" })));
      }
    } catch (err) {
      setError("Unable to fetch quotes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyQuote = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const shareQuote = async (text: string) => {
    setShareText(text);
    setShowShareModal(true);
  };

  const shareToSocial = (platform: string) => {
    const encodedText = encodeURIComponent(shareText);
    let url = "";
    
    switch (platform) {
      case "whatsapp":
        url = `https://wa.me/?text=${encodedText}`;
        break;
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodedText}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodedText}`;
        break;
      case "instagram":
        // Instagram doesn't support direct sharing via URL, so we copy to clipboard
        navigator.clipboard.writeText(shareText);
        setShowShareToast(true);
        setTimeout(() => setShowShareToast(false), 2000);
        setShowShareModal(false);
        return;
      case "telegram":
        url = `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodedText}`;
        break;
      case "copy":
        navigator.clipboard.writeText(shareText);
        setShowShareToast(true);
        setTimeout(() => setShowShareToast(false), 2000);
        setShowShareModal(false);
        return;
      default:
        return;
    }
    
    window.open(url, '_blank', 'width=600,height=400');
    setShowShareModal(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-blue-50">
      {/* Soft blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-blue-200 overflow-hidden">
        {/* Animated blue gradient blobs */}
        <div className="absolute w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob1 left-[-10%] top-[-10%]" />
        <div className="absolute w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob2 right-[-15%] top-[10%]" />
        <div className="absolute w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob3 left-[20%] bottom-[-10%]" />
        {/* Floating sparkles (blue) */}
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute w-2 h-2 bg-gradient-to-br from-blue-400 to-sky-400 rounded-full opacity-70 animate-sparkle"
            style={{
              left: `${sparkle.left}%`,
              top: `${sparkle.top}%`,
              animationDelay: `${sparkle.delay}s`,
              animationDuration: `${sparkle.duration}s`,
            }}
          />
        ))}
      </div>
      <style jsx global>{`
        @keyframes blob1 {
          0%, 100% { transform: scale(1) translate(0, 0); }
          33% { transform: scale(1.1) translate(30px, -20px); }
          66% { transform: scale(0.9) translate(-20px, 30px); }
        }
        @keyframes blob2 {
          0%, 100% { transform: scale(1) translate(0, 0); }
          33% { transform: scale(1.05) translate(-40px, 20px); }
          66% { transform: scale(0.95) translate(20px, -30px); }
        }
        @keyframes blob3 {
          0%, 100% { transform: scale(1) translate(0, 0); }
          33% { transform: scale(1.08) translate(20px, 20px); }
          66% { transform: scale(0.92) translate(-30px, -20px); }
        }
        .animate-blob1 { animation: blob1 18s infinite ease-in-out; }
        .animate-blob2 { animation: blob2 22s infinite ease-in-out; }
        .animate-blob3 { animation: blob3 20s infinite ease-in-out; }
        @keyframes sparkle {
          0% { opacity: 0.7; transform: scale(1) translateY(0); }
          50% { opacity: 1; transform: scale(1.3) translateY(-20px); }
          100% { opacity: 0.7; transform: scale(1) translateY(0); }
        }
        .animate-sparkle { animation: sparkle linear infinite; }
        @keyframes fadein {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein { animation: fadein 0.3s; }
      `}</style>

      {/* Floating bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-white/50 backdrop-blur-sm"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            background: `linear-gradient(45deg, rgba(255,255,255,${bubble.opacity}), rgba(200,200,255,${bubble.opacity}))`,
            animation: `float ${bubble.duration}s infinite ease-in-out ${bubble.delay}s, softGlow ${bubble.duration * 0.6}s infinite alternate ${bubble.delay}s`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes gentleFlow {
          0%, 100% { transform: rotate(0deg) scale(1); }
          33% { transform: rotate(90deg) scale(1.05); }
          66% { transform: rotate(180deg) scale(0.95); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(15px); }
          50% { transform: translateY(-40px) translateX(-10px); }
          75% { transform: translateY(-15px) translateX(-20px); }
        }
        @keyframes softGlow {
          0% { box-shadow: 0 0 15px rgba(255,255,255,0.2); }
          100% { box-shadow: 0 0 30px rgba(255,255,255,0.4); }
        }
        @keyframes smoothMorph {
          0%, 100% { border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%; }
          25% { border-radius: 60% 40% 70% 30% / 50% 50% 50% 50%; }
          50% { border-radius: 50% 50% 40% 60% / 60% 30% 70% 40%; }
          75% { border-radius: 40% 60% 50% 50% / 50% 60% 40% 50%; }
        }
        @keyframes softPulse {
          0%, 100% { box-shadow: 0 0 15px rgba(147, 197, 253, 0.5); }
          50% { box-shadow: 0 0 25px rgba(147, 197, 253, 0.7); }
        }
        .smooth-morph {
          animation: smoothMorph 10s infinite ease-in-out;
        }
        .soft-glow {
          animation: softPulse 2.5s infinite ease-in-out;
        }
      `}</style>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-r from-blue-200 to-sky-200 smooth-morph opacity-30" />
          <div className="flex items-center justify-center mb-4">
            <div className="relative flex items-center justify-center px-8 py-6 bg-white rounded-2xl shadow-2xl border border-blue-200/60 border-b-4 border-r-4 border-opacity-70" style={{
              perspective: '600px',
              transform: 'rotateY(-8deg) rotateX(4deg) scale(1.04)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18), 0 1.5px 0 0 #fca5a5, 0 0.5px 0 0 #7dd3fc',
            }}>
              <Quote className="w-10 h-10 text-blue-500 mr-3" />
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
                <span className="bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                  Quote Generator
                </span>
              </h1>
              <Quote className="w-10 h-10 text-blue-500 ml-3" />
            </div>
          </div>
          <p className="text-xl text-blue-700 font-light tracking-wide">Discover Inspiring Words</p>
          <div className="mt-3 w-20 h-1 bg-gradient-to-r from-blue-400 to-sky-400 mx-auto rounded-full soft-glow" />
        </div>

        {/* Main container */}
        <div className="relative max-w-3xl w-full">
          {/* Control Panel */}
          <div className="backdrop-blur-md bg-white/70 border border-blue-200/50 smooth-morph p-6 mb-6 shadow-lg soft-glow">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1 w-full relative">
                <Zap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5 animate-pulse z-10" />
                <Input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Enter a topic for Quotes e.g. Success, Happiness, Love, etc."
                  className="pl-10 bg-white/50 border-blue-300 text-gray-800 placeholder-blue-300 focus:border-blue-500"
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                />
              </div>
              <Button
                onClick={handleSubmit}
                disabled={loading || !topic.trim()}
                className="bg-gradient-to-r from-blue-400 to-sky-400 text-white font-semibold hover:from-blue-500 hover:to-sky-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  {loading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Searching...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Find Quotes</span>
                    </>
                  )}
                </div>
              </Button>
            </div>
          </div>

          {/* Error Display */}
          {error && (
            <div className="mb-6 p-4 bg-blue-100/80 border border-blue-300 text-blue-600 text-center rounded-lg smooth-morph shadow-sm">
              <div className="flex items-center justify-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>{error}</span>
              </div>
            </div>
          )}

          {/* Quote Cards */}
          {quotes.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quotes.map((quote, index) => (
                <Card
                  key={index}
                  className="relative group flex flex-col justify-between min-h-[180px] bg-white/60 backdrop-blur-xl border-l-8 border-blue-400/70 rounded-2xl shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
                >
                  <CardContent className="p-7">
                    {/* Decorative quote mark background */}
                    <span className="absolute text-[7rem] left-2 top-0 text-blue-100/60 pointer-events-none select-none leading-none font-serif z-0">
                      "
                    </span>
                    <div className="relative z-10 flex-1 flex flex-col justify-center">
                      <blockquote className="font-serif text-2xl text-blue-900 leading-snug mb-5 drop-shadow-sm">
                        {quote.text}
                      </blockquote>
                    </div>
                    <div className="flex items-center justify-between mt-2 z-10">
                      <span className="px-4 py-1 bg-gradient-to-r from-blue-400 to-sky-400 text-white text-sm font-bold rounded-full shadow-md tracking-wide uppercase border-2 border-white/60">
                        {quote.topic}
                      </span>
                      <div className="flex space-x-2">
                        <Button
                          onClick={() => copyQuote(quote.text, index)}
                          variant="ghost"
                          size="sm"
                          className="p-2 bg-sky-100/60 hover:bg-sky-200/80 rounded-full transition-colors shadow"
                        >
                          {copiedIndex === index ? (
                            <Check className="w-5 h-5 text-green-600" />
                          ) : (
                            <Copy className="w-5 h-5 text-blue-500" />
                          )}
                        </Button>
                        <Button
                          onClick={() => shareQuote(quote.text)}
                          variant="ghost"
                          size="sm"
                          className="p-2 bg-blue-100/60 hover:bg-blue-200/80 rounded-full transition-colors shadow"
                        >
                          <Share className="w-5 h-5 text-blue-500" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {showShareToast && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-900 text-white px-4 py-2 rounded shadow-lg z-50 animate-fadein">
          {shareText ? "Quote copied to clipboard!" : "Sharing not supported on this device."}
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadein">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full mx-4 shadow-2xl">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Share Quote</h3>
              <p className="text-gray-600 text-sm">Choose where to share this inspiring quote</p>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              <Button
                onClick={() => shareToSocial("whatsapp")}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3"
              >
                WhatsApp
              </Button>
              <Button
                onClick={() => shareToSocial("facebook")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
              >
                Facebook
              </Button>
              <Button
                onClick={() => shareToSocial("twitter")}
                className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3"
              >
                Twitter
              </Button>
              <Button
                onClick={() => shareToSocial("telegram")}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3"
              >
                Telegram
              </Button>
              <Button
                onClick={() => shareToSocial("instagram")}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3"
              >
                Instagram
              </Button>
              <Button
                onClick={() => shareToSocial("copy")}
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3"
              >
                Copy Text
              </Button>
            </div>
            
            <Button
              onClick={() => setShowShareModal(false)}
              variant="outline"
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
