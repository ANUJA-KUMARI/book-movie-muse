import Header from "@/components/Header";
import BookOfTheMonth from "@/components/BookOfTheMonth";
import BookReviews from "@/components/BookReviews";
import Founders from "@/components/Founders";
import Videos from "@/components/Videos";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <BookOfTheMonth />
        <BookReviews />
        <Founders />
        <Videos />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
