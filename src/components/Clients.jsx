import { clients } from "../constants";
import styles from "../styles";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX} my4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
          >
            <img
              src={client.logo}
              alt="client-logo"
              className="sm:w-[192px] w-[100px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
