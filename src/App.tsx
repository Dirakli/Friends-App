import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios";
import BoxWrapperComponent from "./components/BoxWrapperComponent";
import PersonDetails from "./components/PersonDetails";
import { Routes, Route, useNavigate } from 'react-router-dom';


function App() {
	const [getData, setGetData] = useState<any>("");
	const [getId, setGetId] = useState<any>("");
	const navigate = useNavigate();

	function getApi() {
		axios.get('https://randomuser.me/api/?results=20')
			.then(response => {
				setGetData(response.data);
			})
			.catch(error => {
				console.log(error);
			});
	}

	useEffect(() => {
		getApi();
	}, [])

	return (
		<Background>
			<GlobalStyles />
			<MainWrapper>
				<Routes>
					<Route path="/" element={<BoxWrapperComponent getApi={getApi} getData={getData} setGetId={setGetId} navigate={navigate}/>}/>
				

				 <Route path="details" element={<PersonDetails navigate={navigate} getData={getData} getId={getId} />} />
				</Routes>

			</MainWrapper>
		</Background>
	)
}


const MainWrapper = styled.div`
  height: 100%;
  margin: 0 auto;
  display: flex;
`

const Background = styled.div`
  padding-top: 68px;
  width: 100%;
  height: 100vh;
  display: flex;
`

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
  text-decoration: none;
}
* {
  box-sizing: border-box;
}

textarea {
  resize: none;
}
`

export default App
