import { Items } from "./items";

export default function Page() {
  const initialData = ["1", "2", "3", "4", "5", "6", "7"];
  return (
    <div>
      <Items initialData={initialData} />
      <footer>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit magni
          aliquam error veniam atque a impedit sit, amet aut perspiciatis, quia,
          nulla nobis eos exercitationem corrupti ea placeat eaque esse.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempora
          expedita incidunt consectetur reprehenderit molestiae aut ipsum,
          tenetur dolorem quidem, quaerat doloremque. Laborum accusantium, alias
          id similique in dolore nisi?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
          excepturi ex mollitia tempore deserunt asperiores error quasi minus
          aliquam? Vel quos quam quisquam voluptatibus libero, doloremque soluta
          cumque dolorem illo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nostrum
          laudantium enim veritatis accusantium excepturi eius. Commodi enim
          fuga illum? Magni minus inventore cupiditate provident doloremque
          earum dicta, laboriosam assumenda?
        </p>
      </footer>
    </div>
  );
}
