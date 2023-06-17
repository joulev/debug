import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  return (
    <div>
      <p>
        Hello world look at this little envelope{" "}
        <FontAwesomeIcon icon={faEnvelope} />
      </p>
      <p className="red">And this text should be red</p>
    </div>
  );
}
