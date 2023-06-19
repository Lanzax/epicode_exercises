import Gallery from "./Gallery";

const MyMain = (props) => {
  const url = `${props.endPoint}${props.myKey}&s=`
  return (
    <main>
      <section>
        <Gallery title='Trending Now' source={`${url}${'jurassic%20park'}`}/>
        <Gallery title='Watch It Again' source={`${url}${'the%20lord%20of%20the%20rings'}`}/>
        <Gallery title='New Releases' source={`${url}${'star%20wars'}`}/>
      </section>
    </main>
  );
};

export default MyMain;
