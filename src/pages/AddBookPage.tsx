import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookMarked, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const AddBookPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    genre: "",
    publishYear: "",
    description: "",
  });

  const genres = [
    "Fiction", "Non-Fiction", "Mystery", "Romance", "Science Fiction", 
    "Fantasy", "Biography", "History", "Self-Help", "Business", 
    "Poetry", "Drama", "Horror", "Adventure", "Young Adult"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Implement Supabase book creation
      toast({
        title: "Book added successfully!",
        description: `"${bookData.title}" has been added to the library.`,
      });
      
      // Reset form
      setBookData({
        title: "",
        author: "",
        genre: "",
        publishYear: "",
        description: "",
      });
      
      // Navigate back to home
      navigate("/");
    } catch (error) {
      toast({
        title: "Error adding book",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
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
              onClick={() => navigate("/")}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Button>
            <div className="flex items-center space-x-2">
              <BookMarked className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Add New Book
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">Add a New Book</CardTitle>
              <p className="text-muted-foreground">
                Share a book with the community and be the first to review it!
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Book Title *</Label>
                  <Input
                    id="title"
                    placeholder="Enter the book title"
                    value={bookData.title}
                    onChange={(e) => setBookData({...bookData, title: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="author">Author *</Label>
                  <Input
                    id="author"
                    placeholder="Enter the author's name"
                    value={bookData.author}
                    onChange={(e) => setBookData({...bookData, author: e.target.value})}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="genre">Genre *</Label>
                    <Select
                      value={bookData.genre}
                      onValueChange={(value) => setBookData({...bookData, genre: value})}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a genre" />
                      </SelectTrigger>
                      <SelectContent>
                        {genres.map((genre) => (
                          <SelectItem key={genre} value={genre}>
                            {genre}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="publishYear">Publication Year *</Label>
                    <Input
                      id="publishYear"
                      type="number"
                      placeholder="2024"
                      min="1000"
                      max={new Date().getFullYear()}
                      value={bookData.publishYear}
                      onChange={(e) => setBookData({...bookData, publishYear: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Write a brief description of the book (optional)"
                    rows={4}
                    value={bookData.description}
                    onChange={(e) => setBookData({...bookData, description: e.target.value})}
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate("/")}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-hero"
                    disabled={isLoading}
                  >
                    {isLoading ? "Adding Book..." : "Add Book"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddBookPage;