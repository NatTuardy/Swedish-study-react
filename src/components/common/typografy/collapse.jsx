import { Collapse as BsCollapse } from "bootstrap";
const CollapseWrapper = ({ children, title, name }) => {
  const [display, setDisplay] = useState(false);
  const collapseRef = useRef();
  const toggleDisplay = () => {
    setDisplay((prevState) => !prevState);
    useEffect(() => {
      const newCollapse = new BsCollapse(collapseRef.current, {
        toggle: false,
      });
      display ? newCollapse.show() : newCollapse.hide();
    }, [display]);
  };
  return <div></div>;
};

export default CollapseWrapper;
