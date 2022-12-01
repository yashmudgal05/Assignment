import { XlviLoader } from "react-awesome-loaders";
const Loader = () => {
  return (
    <div className="loader center">
      <XlviLoader
        boxColors={["#EF4444", "#F59E0B", "#6366F1"]}
        desktopSize={"128px"}
        mobileSize={"100px"}
      />
    </div>
  );
};
export default Loader;
