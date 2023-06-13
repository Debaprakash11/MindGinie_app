import Navbar from "./Components/Navbar";
import SectionHome from "./Components/SectionHome";
import SectionAbout from "./Components/SectionAbout";
import SectionQuickC from "./Components/SectionQuickC";
import SectionBlogs from "./Components/SectionBlogs";
import SectionContact from "./Components/SectionContact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <div className="mt-20 flex flex-col gap-10">
          <SectionHome />
          <SectionAbout />
          <SectionQuickC />
          <SectionBlogs />
          <SectionContact />
        </div>
      </main>
    </>
  );
}

export default App;
