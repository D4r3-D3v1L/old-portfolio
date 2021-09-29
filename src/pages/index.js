import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Main from "../components/Main/Main";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Experience from "../components/Experience/Experience";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
	return (
		<Layout>
			<Section grid>
				<Main />
				{/* <BgAnimation /> */}
			</Section>
			<Technologies />
			<Projects />
			<Experience />
			<Acomplishments />
		</Layout>
	);
};

export default Home;
