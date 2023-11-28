import "./App.css";
import Room from "./Room";

function App() {
  return (
    <div className="App">
      <Room
        name="Living room"
        img="https://i.etsystatic.com/14483925/r/il/e1e56c/2380970310/il_1080xN.2380970310_5wme.jpg"
      />
      <Room
        name="Bed room"
        img="https://media.architecturaldigest.com/photos/5eac5fa22105f13b72dede45/4:3/w_1420,h_1065,c_limit/111LexowAve_Aug18-1074.jpg"
      />
      <Room
        name="Study room"
        img="https://media.designcafe.com/wp-content/uploads/2021/04/23193839/creamy-small-study-room-decorating-idea.jpg"
      />
      <Room
        name="Kitchen"
        img="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/at%2Fhouse%20tours%2Farchive%2FTour%20a%20Colorful%20Home%20in%20Montreal%2Ffada199d36b084830ef3563b555887f31851ca55"
      />
    </div>
  );
}

export default App;
