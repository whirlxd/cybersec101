import "./App.css";
import React from "react";
import { Header, Footer, Main, Features, Stats } from "./Components";
import * as Component from "./Components";
import "animate.css/animate.compat.css";

const Loader = () => {
  return (
    <>
      <Component.HackerLoadingScreen />
    </>
  );
};
const Core = () => {
  return (
    <>
      <Component.Header />
      <section id="maine">
        {/* <Main />
         */}
        <Component.UniqueHeroSection />
      </section>
      <section className="min-h-screen" id="features">
        <Features />
      </section>
      <section className="" id="faq">
        <Component.Faq />
      </section>

      <section id="team">
        <Component.BestPractice />
      </section>
      <section id="prevention">
        <Component.Team />
      </section>
      <Footer />
    </>
  );
};
function App() {
  const [loading, setLoaded] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 27000); // 27k
  }, []);
  return <>{loading ? <Core /> : <Loader />}</>;
}

export default App;
