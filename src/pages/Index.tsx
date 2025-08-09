import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Search, Star, Users, PlusCircle, BookMarked } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for demonstration
  const featuredBooks = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      genre: "Fiction",
      publishYear: 2020,
      averageRating: 4.2,
      reviewCount: 1247,
      description: "Between life and death there is a library, and within that library, the shelves go on forever..."
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Self-Help",
      publishYear: 2018,
      averageRating: 4.8,
      reviewCount: 2156,
      description: "An easy & proven way to build good habits & break bad ones."
    },
    {
      id: 3,
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      genre: "Fiction",
      publishYear: 2017,
      averageRating: 4.6,
      reviewCount: 3421,
      description: "A reclusive Hollywood icon finally decides to give her life story to a young journalist."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "fill-review-star text-review-star"
            : i < rating
            ? "fill-review-star/50 text-review-star"
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-book-page to-secondary">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookMarked className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                BookWyrm Reviews
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" onClick={() => navigate("/browse")}>
                Browse Books
              </Button>
              <Button variant="ghost" onClick={() => navigate("/my-reviews")}>
                My Reviews
              </Button>
              <Button variant="ghost" onClick={() => navigate("/auth")}>
                Sign In
              </Button>
              <Button className="bg-gradient-hero" onClick={() => navigate("/auth")}>
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Discover Your Next
              <span className="block bg-gradient-hero bg-clip-text text-transparent">
                Literary Adventure
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of book lovers sharing reviews, discovering new authors, 
              and building their personal libraries in our vibrant reading community.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-12">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search for books, authors, or genres..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg shadow-elegant border-2 border-gold-accent/20 focus:border-gold-accent"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="h-8 w-8 text-primary mr-2" />
                  <span className="text-3xl font-bold text-primary">12,847</span>
                </div>
                <p className="text-muted-foreground">Books Reviewed</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-primary mr-2" />
                  <span className="text-3xl font-bold text-primary">3,214</span>
                </div>
                <p className="text-muted-foreground">Active Readers</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-8 w-8 text-review-star mr-2 fill-review-star" />
                  <span className="text-3xl font-bold text-primary">98,756</span>
                </div>
                <p className="text-muted-foreground">Reviews Written</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-3xl font-bold mb-2">Featured Books</h3>
              <p className="text-muted-foreground">Discover what our community is reading</p>
            </div>
            <Button className="bg-gradient-hero group" onClick={() => navigate("/add-book")}>
              <PlusCircle className="mr-2 h-4 w-4 group-hover:rotate-90 transition-transform" />
              Add Book
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooks.map((book) => (
              <Card 
                key={book.id} 
                className="group cursor-pointer transition-all duration-300 hover:shadow-book hover:-translate-y-2 bg-gradient-card border-gold-accent/20"
                onClick={() => navigate(`/book/${book.id}`)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="mb-2">
                      {book.genre}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{book.publishYear}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {book.title}
                  </CardTitle>
                  <CardDescription className="text-book-spine font-medium">
                    by {book.author}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {book.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <div className="flex">{renderStars(book.averageRating)}</div>
                      <span className="ml-2 text-sm font-medium">{book.averageRating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {book.reviewCount} reviews
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Share Your Literary Journey?
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Join our community of passionate readers. Share reviews, discover new books, 
              and connect with fellow book lovers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => navigate("/auth")}
              >
                Create Account
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => navigate("/browse")}
              >
                Browse Books
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;