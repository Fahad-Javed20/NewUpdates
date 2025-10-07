import "./App.css";
import NewUpdateCard from "./components/NewUpdateCard";

export type ProfileCard = {
    image:string;
    title1:string;
    title2:string;
    discription:string;
    end_line:string;
}

function App() {

  const card1:ProfileCard ={
    image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJpZW5kfGVufDB8fDB8fHww",
    title1:"Team Celebrations",
    title2:"On the 25th",
    discription: "Lorem Ipsum is simply dummy printing",
    end_line:"RSVP NOW >"
  }

  const card2:ProfileCard ={
    image: "https://plus.unsplash.com/premium_photo-1679177183255-d7f049b0c0e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2V5Ym9yZCUyMHdvcmtpbmclMjBwZXJzb258ZW58MHx8MHx8fDA%3D",
    title1:"New Data Security",
    title2:"Policies",
    discription: "Lorem Ipsum is simply dummy  printing ",
    end_line:"DO YOUR PART >"
  }

  const card3:ProfileCard ={
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D",
    title1:"Team Outing",
    title2:"Committees",
    discription: "Lorem Ipsum is simply dummy printing   ",
    end_line:"JOIN COMMITTEE >"
  }
  return (
    <>
      {/* Apply the background here */}
      <div className="h-screen flex justify-around items-center">
        <NewUpdateCard image = {card1.image} title1={card1.title1} title2={card1.title2} discription={card1.discription} end_line={card1.end_line}/>
        <NewUpdateCard image = {card2.image} title1={card2.title1} title2={card2.title2} discription={card2.discription} end_line={card2.end_line} />
        <NewUpdateCard image = {card3.image} title1={card3.title1} title2={card3.title2} discription={card3.discription} end_line={card3.end_line}/>
      </div>
    </>
  );
}

export default App;
