import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookMarked, Search, Filter, ArrowLeft, Star, Heart, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import book cover images
import midnightLibraryImg from "@/assets/book-midnight-library.jpg";
import atomicHabitsImg from "@/assets/book-atomic-habits.jpg";
import evelynHugoImg from "@/assets/book-evelyn-hugo.jpg";
import duneImg from "@/assets/book-dune.jpg";
import psychologyMoneyImg from "@/assets/book-psychology-money.jpg";
import crawdadsSingImg from "@/assets/book-crawdads-sing.jpg";
import book1984Img from "@/assets/book-1984.jpg";
import hobbitImg from "@/assets/book-hobbit.jpg";
import pridePrejudiceImg from "@/assets/book-pride-prejudice.jpg";
import dragonTattooImg from "@/assets/book-dragon-tattoo.jpg";
import goneGirlImg from "@/assets/book-gone-girl.jpg";
import bookThiefImg from "@/assets/book-book-thief.jpg";
import hungerGamesImg from "@/assets/book-hunger-games.jpg";
import thinkGrowRichImg from "@/assets/book-think-grow-rich.jpg";
import alchemistImg from "@/assets/book-alchemist.jpg";
import mockingbirdImg from "@/assets/book-mockingbird.jpg";
import harryPotterImg from "@/assets/book-harry-potter.jpg";
import steveJobsImg from "@/assets/book-steve-jobs.jpg";
import sapiensImg from "@/assets/book-sapiens.jpg";
import itEndsWithUsImg from "@/assets/book-it-ends-with-us.jpg";

const BrowseBooksPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  // Enhanced book data with beautiful images
  const books = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      genre: "Fiction",
      publishYear: 2020,
      averageRating: 4.2,
      reviewCount: 1247,
      description: "Between life and death there is a library, and within that library, the shelves go on forever...",
      image: midnightLibraryImg,
      trending: true
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Self-Help",
      publishYear: 2018,
      averageRating: 4.8,
      reviewCount: 2156,
      description: "An easy & proven way to build good habits & break bad ones.",
      image: atomicHabitsImg,
      featured: true
    },
    {
      id: 3,
      title: "The Seven Husbands of Evelyn Hugo",
      author: "Taylor Jenkins Reid",
      genre: "Fiction",
      publishYear: 2017,
      averageRating: 4.6,
      reviewCount: 3421,
      description: "A reclusive Hollywood icon finally decides to give her life story to a young journalist.",
      image: evelynHugoImg,
      trending: true
    },
    {
      id: 4,
      title: "Dune",
      author: "Frank Herbert",
      genre: "Science Fiction",
      publishYear: 1965,
      averageRating: 4.4,
      reviewCount: 5678,
      description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides...",
      image: duneImg
    },
    {
      id: 5,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      genre: "Business",
      publishYear: 2020,
      averageRating: 4.3,
      reviewCount: 891,
      description: "Timeless lessons on wealth, greed, and happiness.",
      image: psychologyMoneyImg
    },
    {
      id: 6,
      title: "Where the Crawdads Sing",
      author: "Delia Owens",
      genre: "Fiction",
      publishYear: 2018,
      averageRating: 4.1,
      reviewCount: 2834,
      description: "A mystery novel about a young girl who grows up isolated in the marshlands of North Carolina.",
      image: crawdadsSingImg
    },
    {
      id: 7,
      title: "1984",
      author: "George Orwell",
      genre: "Fiction",
      publishYear: 1949,
      averageRating: 4.5,
      reviewCount: 8932,
      description: "A dystopian novel about totalitarian control and surveillance in a dark future society.",
      image: book1984Img,
      featured: true
    },
    {
      id: 8,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      publishYear: 1937,
      averageRating: 4.6,
      reviewCount: 6754,
      description: "A reluctant hobbit embarks on an unexpected journey to help reclaim a mountain kingdom.",
      image: hobbitImg
    },
    {
      id: 9,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      publishYear: 1813,
      averageRating: 4.3,
      reviewCount: 5621,
      description: "A witty and romantic tale of love overcoming social prejudices in Georgian England.",
      image: pridePrejudiceImg
    },
    {
      id: 10,
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      genre: "Mystery",
      publishYear: 2005,
      averageRating: 4.1,
      reviewCount: 4387,
      description: "A gripping thriller combining murder mystery with financial corruption in Sweden.",
      image: dragonTattooImg
    },
    {
      id: 11,
      title: "Gone Girl",
      author: "Gillian Flynn",
      genre: "Mystery",
      publishYear: 2012,
      averageRating: 4.0,
      reviewCount: 7234,
      description: "A psychological thriller about a marriage gone terribly wrong when a wife disappears.",
      image: goneGirlImg,
      trending: true
    },
    {
      id: 12,
      title: "The Book Thief",
      author: "Markus Zusak",
      genre: "Historical Fiction",
      publishYear: 2005,
      averageRating: 4.4,
      reviewCount: 3456,
      description: "A story narrated by Death about a girl who steals books in Nazi Germany.",
      image: bookThiefImg
    },
    {
      id: 13,
      title: "The Hunger Games",
      author: "Suzanne Collins",
      genre: "Young Adult",
      publishYear: 2008,
      averageRating: 4.2,
      reviewCount: 9876,
      description: "A dystopian tale of survival in a televised fight to the death.",
      image: hungerGamesImg
    },
    {
      id: 14,
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      genre: "Self-Help",
      publishYear: 1937,
      averageRating: 4.1,
      reviewCount: 2143,
      description: "Classic guide to achieving success and wealth through positive thinking.",
      image: thinkGrowRichImg
    },
    {
      id: 15,
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Fiction",
      publishYear: 1988,
      averageRating: 4.0,
      reviewCount: 6789,
      description: "A young shepherd's journey to find treasure and discover his personal legend.",
      image: alchemistImg,
      featured: true
    },
    {
      id: 16,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      publishYear: 1960,
      averageRating: 4.5,
      reviewCount: 7654,
      description: "A coming-of-age story exploring racial injustice in the American South.",
      image: mockingbirdImg
    },
    {
      id: 17,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      genre: "Fantasy",
      publishYear: 1997,
      averageRating: 4.7,
      reviewCount: 12345,
      description: "A young wizard discovers his magical heritage and attends Hogwarts School.",
      image: harryPotterImg,
      trending: true
    },
    {
      id: 18,
      title: "Steve Jobs",
      author: "Walter Isaacson",
      genre: "Biography",
      publishYear: 2011,
      averageRating: 4.3,
      reviewCount: 2987,
      description: "The authorized biography of Apple's co-founder and tech visionary.",
      image: steveJobsImg
    },
    {
      id: 19,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      genre: "History",
      publishYear: 2011,
      averageRating: 4.4,
      reviewCount: 8765,
      description: "A brief history of humankind from the Stone Age to the modern era.",
      image: sapiensImg,
      featured: true
    },
    {
      id: 20,
      title: "It Ends with Us",
      author: "Colleen Hoover",
      genre: "Romance",
      publishYear: 2016,
      averageRating: 4.2,
      reviewCount: 5432,
      description: "A powerful story about love, resilience, and breaking cycles of abuse.",
      image: itEndsWithUsImg,
      trending: true
    }
  ];

  const genres = ["all", "Fiction", "Non-Fiction", "Mystery", "Romance", "Science Fiction", "Fantasy", "Biography", "History", "Self-Help", "Business", "Young Adult", "Historical Fiction"];

  const getGenreColor = (genre: string) => {
    const colors = {
      "Fiction": "bg-genre-fiction text-white",
      "Mystery": "bg-genre-mystery text-white", 
      "Romance": "bg-genre-romance text-white",
      "Science Fiction": "bg-genre-scifi text-white",
      "Fantasy": "bg-genre-fantasy text-white",
      "Business": "bg-genre-business text-white",
      "Self-Help": "bg-genre-selfhelp text-white",
      "Biography": "bg-primary text-primary-foreground",
      "History": "bg-accent text-accent-foreground",
      "Young Adult": "bg-secondary text-secondary-foreground",
      "Historical Fiction": "bg-muted text-muted-foreground"
    };
    return colors[genre as keyof typeof colors] || "bg-secondary text-secondary-foreground";
  };

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === "all" || book.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.averageRating - a.averageRating;
      case "reviews":
        return b.reviewCount - a.reviewCount;
      case "oldest":
        return a.publishYear - b.publishYear;
      case "newest":
      default:
        return b.publishYear - a.publishYear;
    }
  });

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
    <div className="min-h-screen bg-gradient-to-br from-background via-book-page to-background">
      {/* Colorful Header */}
      <header className="border-b bg-gradient-vibrant backdrop-blur-sm shadow-elegant">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="flex items-center space-x-2 text-white hover:bg-white/20"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Button>
              <div className="flex items-center space-x-3">
                <BookMarked className="h-8 w-8 text-white" />
                <h1 className="text-2xl font-bold text-white">
                  Discover Amazing Books
                </h1>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-white/90">
              <TrendingUp className="h-5 w-5" />
              <span className="text-sm">20 Books Available</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search books by title or author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-4">
              <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="All Genres" />
                </SelectTrigger>
                <SelectContent>
                  {genres.map((genre) => (
                    <SelectItem key={genre} value={genre}>
                      {genre === "all" ? "All Genres" : genre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="reviews">Most Reviewed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">
              {sortedBooks.length} book{sortedBooks.length !== 1 ? 's' : ''} found
            </p>
            <Button onClick={() => navigate("/add-book")} className="bg-gradient-accent hover:bg-gradient-warm text-white shadow-lg">
              Add New Book
            </Button>
          </div>
        </div>

        {/* Enhanced Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedBooks.map((book) => (
            <Card 
              key={book.id} 
              className="group cursor-pointer transition-all duration-500 hover:shadow-elegant hover:-translate-y-3 bg-gradient-card border-2 border-transparent hover:border-primary/30 overflow-hidden"
              onClick={() => navigate(`/book/${book.id}`)}
            >
              {/* Book Cover Image */}
              <div className="relative overflow-hidden h-48 bg-gradient-cool">
                <img 
                  src={book.image} 
                  alt={`${book.title} cover`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {book.trending && (
                  <div className="absolute top-2 left-2 bg-gradient-accent text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <TrendingUp className="h-3 w-3" />
                    <span>Trending</span>
                  </div>
                )}
                {book.featured && (
                  <div className="absolute top-2 right-2 bg-gradient-hero text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <Heart className="h-3 w-3" />
                    <span>Featured</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader className="pb-2">
                <div className="flex items-start justify-between mb-2">
                  <Badge className={`text-xs font-medium ${getGenreColor(book.genre)}`}>
                    {book.genre}
                  </Badge>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{book.publishYear}</span>
                </div>
                <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                  {book.title}
                </CardTitle>
                <p className="text-book-spine font-medium text-sm">
                  by {book.author}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                  {book.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <div className="flex">{renderStars(book.averageRating)}</div>
                    <span className="ml-1 text-sm font-bold text-primary">{book.averageRating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                    {book.reviewCount} reviews
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {sortedBooks.length === 0 && (
          <div className="text-center py-12">
            <BookMarked className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No books found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filters, or add a new book to the collection.
            </p>
            <Button onClick={() => navigate("/add-book")} className="bg-gradient-accent hover:bg-gradient-warm text-white shadow-lg">
              Add the First Book
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseBooksPage;