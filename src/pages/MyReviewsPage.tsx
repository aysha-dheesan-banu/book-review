import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BookMarked, ArrowLeft, Star, Edit, Book, MessageSquare, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MyReviewsPage = () => {
  const navigate = useNavigate();

  // Mock user data
  const user = {
    id: "user123",
    username: "bookworm42",
    fullName: "Jane Smith",
    bio: "Passionate reader and book reviewer. Love fantasy, sci-fi, and literary fiction.",
    joinDate: "2023-06-15",
    totalBooks: 12,
    totalReviews: 28
  };

  // Mock user's books
  const userBooks = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      genre: "Fiction",
      publishYear: 2020,
      averageRating: 4.2,
      reviewCount: 1247,
      dateAdded: "2024-01-15"
    },
    {
      id: 2,
      title: "The Quantum Garden",
      author: "Jane Smith",
      genre: "Science Fiction",
      publishYear: 2023,
      averageRating: 3.8,
      reviewCount: 45,
      dateAdded: "2024-01-10"
    }
  ];

  // Mock user's reviews
  const userReviews = [
    {
      id: 1,
      bookId: 3,
      bookTitle: "Atomic Habits",
      bookAuthor: "James Clear",
      rating: 5,
      text: "Life-changing book! The practical advice and clear framework make it easy to implement positive changes.",
      createdAt: "2024-01-12"
    },
    {
      id: 2,
      bookId: 4,
      bookTitle: "Dune",
      bookAuthor: "Frank Herbert",
      rating: 4,
      text: "Epic science fiction masterpiece. The world-building is incredible, though it can be overwhelming at times.",
      createdAt: "2024-01-08"
    },
    {
      id: 3,
      bookId: 5,
      bookTitle: "The Seven Husbands of Evelyn Hugo",
      bookAuthor: "Taylor Jenkins Reid",
      rating: 5,
      text: "Absolutely captivating! The storytelling is brilliant and the characters feel so real and complex.",
      createdAt: "2024-01-05"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "fill-review-star text-review-star"
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-book-page to-secondary">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Button>
            <div className="flex items-center space-x-2">
              <User className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                My Profile
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Header */}
          <Card className="shadow-elegant">
            <CardHeader>
              <div className="flex flex-col md:flex-row items-start gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                    {user.fullName.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h2 className="text-2xl font-bold">{user.fullName}</h2>
                      <p className="text-muted-foreground">@{user.username}</p>
                    </div>
                    <Button variant="outline" className="flex items-center space-x-2">
                      <Edit className="h-4 w-4" />
                      <span>Edit Profile</span>
                    </Button>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{user.bio}</p>
                  
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <Book className="h-4 w-4 text-primary" />
                      <span><strong>{user.totalBooks}</strong> books added</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="h-4 w-4 text-primary" />
                      <span><strong>{user.totalReviews}</strong> reviews written</span>
                    </div>
                    <span className="text-muted-foreground">
                      Joined {new Date(user.joinDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Tabs for Books and Reviews */}
          <Tabs defaultValue="reviews" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="reviews" className="flex items-center space-x-2">
                <MessageSquare className="h-4 w-4" />
                <span>My Reviews ({userReviews.length})</span>
              </TabsTrigger>
              <TabsTrigger value="books" className="flex items-center space-x-2">
                <Book className="h-4 w-4" />
                <span>My Books ({userBooks.length})</span>
              </TabsTrigger>
            </TabsList>

            {/* Reviews Tab */}
            <TabsContent value="reviews" className="space-y-4">
              {userReviews.map((review) => (
                <Card key={review.id} className="shadow-card-elegant">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle 
                          className="text-lg cursor-pointer hover:text-primary transition-colors"
                          onClick={() => navigate(`/book/${review.bookId}`)}
                        >
                          {review.bookTitle}
                        </CardTitle>
                        <p className="text-muted-foreground">by {review.bookAuthor}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex">{renderStars(review.rating)}</div>
                      <span className="text-sm font-medium">{review.rating}/5</span>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">
                        {new Date(review.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{review.text}</p>
                  </CardContent>
                </Card>
              ))}

              {userReviews.length === 0 && (
                <div className="text-center py-12">
                  <MessageSquare className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No reviews yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Start reviewing books to share your thoughts with the community!
                  </p>
                  <Button 
                    onClick={() => navigate("/browse")}
                    className="bg-gradient-hero"
                  >
                    Browse Books
                  </Button>
                </div>
              )}
            </TabsContent>

            {/* Books Tab */}
            <TabsContent value="books" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userBooks.map((book) => (
                  <Card 
                    key={book.id} 
                    className="group cursor-pointer transition-all duration-300 hover:shadow-book hover:-translate-y-1 bg-gradient-card border-gold-accent/20"
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
                      <p className="text-book-spine font-medium">
                        by {book.author}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-1">
                          <div className="flex">{renderStars(book.averageRating)}</div>
                          <span className="ml-2 text-sm font-medium">{book.averageRating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {book.reviewCount} reviews
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Added on {new Date(book.dateAdded).toLocaleDateString()}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {userBooks.length === 0 && (
                <div className="text-center py-12">
                  <BookMarked className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No books added yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Add your first book to start building your literary collection!
                  </p>
                  <Button 
                    onClick={() => navigate("/add-book")}
                    className="bg-gradient-hero"
                  >
                    Add Your First Book
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MyReviewsPage;