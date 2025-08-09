import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BookMarked, ArrowLeft, Star, Edit, Trash2, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isWritingReview, setIsWritingReview] = useState(false);
  const [newReview, setNewReview] = useState({ rating: 0, text: "" });

  // Mock book data - will be replaced with Supabase data
  const book = {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Fiction",
    publishYear: 2020,
    averageRating: 4.2,
    reviewCount: 1247,
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?",
    createdBy: "user123"
  };

  // Mock reviews data
  const reviews = [
    {
      id: 1,
      rating: 5,
      text: "Absolutely beautiful and thought-provoking! This book made me reflect on my own life choices and appreciate what I have.",
      userName: "BookLover42",
      userInitials: "BL",
      createdAt: "2024-01-15",
      userId: "user456"
    },
    {
      id: 2,
      rating: 4,
      text: "A fascinating concept executed well. The philosophical elements really resonated with me, though some parts felt a bit slow.",
      userName: "ReadingRainbow",
      userInitials: "RR",
      createdAt: "2024-01-10",
      userId: "user789"
    },
    {
      id: 3,
      rating: 4,
      text: "Matt Haig's writing is incredible. This book is both heartbreaking and hopeful. Highly recommend!",
      userName: "LiteraryMind",
      userInitials: "LM",
      createdAt: "2024-01-08",
      userId: "user101"
    }
  ];

  const renderStars = (rating: number, interactive = false, onStarClick?: (rating: number) => void) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${interactive ? 'cursor-pointer hover:scale-110' : ''} ${
          i < Math.floor(rating)
            ? "fill-review-star text-review-star"
            : i < rating
            ? "fill-review-star/50 text-review-star"
            : "text-muted-foreground"
        } transition-all`}
        onClick={() => interactive && onStarClick && onStarClick(i + 1)}
      />
    ));
  };

  const handleSubmitReview = async () => {
    if (newReview.rating === 0) {
      toast({
        title: "Please select a rating",
        description: "Rating is required to submit a review.",
        variant: "destructive",
      });
      return;
    }

    try {
      // TODO: Implement Supabase review creation
      toast({
        title: "Review submitted!",
        description: "Thank you for sharing your thoughts on this book.",
      });
      setIsWritingReview(false);
      setNewReview({ rating: 0, text: "" });
    } catch (error) {
      toast({
        title: "Error submitting review",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDeleteReview = async (reviewId: number) => {
    try {
      // TODO: Implement Supabase review deletion
      toast({
        title: "Review deleted",
        description: "Your review has been removed.",
      });
    } catch (error) {
      toast({
        title: "Error deleting review",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-book-page to-secondary">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/browse")}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Browse</span>
            </Button>
            <div className="flex items-center space-x-2">
              <BookMarked className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Book Details
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Book Details */}
          <Card className="shadow-elegant">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="secondary">{book.genre}</Badge>
                    <span className="text-sm text-muted-foreground">{book.publishYear}</span>
                  </div>
                  <CardTitle className="text-3xl mb-2">{book.title}</CardTitle>
                  <p className="text-xl text-book-spine font-medium mb-4">by {book.author}</p>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      <div className="flex">{renderStars(book.averageRating)}</div>
                      <span className="ml-2 text-lg font-medium">{book.averageRating}</span>
                    </div>
                    <span className="text-muted-foreground">
                      {book.reviewCount} reviews
                    </span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    onClick={() => setIsWritingReview(!isWritingReview)}
                    className="bg-gradient-hero"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Write Review
                  </Button>
                  {/* Show edit/delete buttons if user owns the book */}
                  <Button variant="outline" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{book.description}</p>
            </CardContent>
          </Card>

          {/* Write Review Section */}
          {isWritingReview && (
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle>Write a Review</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Rating *</label>
                  <div className="flex items-center space-x-1">
                    {renderStars(newReview.rating, true, (rating) => 
                      setNewReview({...newReview, rating})
                    )}
                    <span className="ml-2 text-sm text-muted-foreground">
                      {newReview.rating > 0 ? `${newReview.rating} star${newReview.rating !== 1 ? 's' : ''}` : 'Click to rate'}
                    </span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Review (optional)</label>
                  <Textarea
                    placeholder="Share your thoughts about this book..."
                    rows={4}
                    value={newReview.text}
                    onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                  />
                </div>
                
                <div className="flex gap-4">
                  <Button
                    onClick={() => setIsWritingReview(false)}
                    variant="outline"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSubmitReview}
                    className="bg-gradient-hero"
                  >
                    Submit Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Reviews Section */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle>Reviews ({reviews.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <div key={review.id}>
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {review.userInitials}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-medium">{review.userName}</p>
                            <div className="flex items-center space-x-2">
                              <div className="flex">{renderStars(review.rating)}</div>
                              <span className="text-sm text-muted-foreground">
                                {new Date(review.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          
                          {/* Show edit/delete for user's own reviews */}
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleDeleteReview(review.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        
                        {review.text && (
                          <p className="text-muted-foreground">{review.text}</p>
                        )}
                      </div>
                    </div>
                    
                    {index < reviews.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
                
                {reviews.length === 0 && (
                  <div className="text-center py-8">
                    <Star className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No reviews yet</h3>
                    <p className="text-muted-foreground mb-4">
                      Be the first to share your thoughts on this book!
                    </p>
                    <Button 
                      onClick={() => setIsWritingReview(true)}
                      className="bg-gradient-hero"
                    >
                      Write the First Review
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;