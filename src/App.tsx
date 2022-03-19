import Private from './components/auth/Private';
import Profile from './components/auth/Profile';
import Box from './components/contexts/Box';
import ThemeProvider from './components/contexts/ThemeProvider';
import Lists from './components/generic/Lists';
import RandomNumber from './components/props-restrictions/RandomNumber';
import Button from './components/props/Button';
import CssStyles from './components/props/CssStyles';
import Greet from './components/props/Greet';
import Header from './components/props/Header';
// import Input from './components/props/Input';
import Person from './components/props/Person';
import PersonList from './components/props/PersonList';
import Status from './components/props/Status';
import DomRef from './components/refs/DomRef';
import MutableRefs from './components/refs/MutableRefs';
import Counter from './components/states/Counter';
import LoggedIn from './components/states/LoggedIn';
import User from './components/states/User';
import UserAssertion from './components/states/UserAssertion';
import Toast from './components/template-literal/Toast';
import HtmlButton from './components/html/HtmlButton';
import HtmlInput from './components/html/HtmlInput';

const App = () => {
	return (
		<ThemeProvider>
			<div className='App'>
				<Header>
					<h1>Hello React With TypeScript</h1>
					<Greet name={''} isLoggedIn={false} />
					<Person name={{ first: '', last: '' }} />
					<PersonList names={[]} />
					<Status status={'loading'} />
					<Button handleClickButton={(event, id) => console.log({ event, id })} />
					{/* <Input value={value} handleChangeValue={(event) => setValue(event.target.value)} /> */}
					<CssStyles style={{ border: '1px solid #000', padding: '1rem' }} />
				</Header>

				<Header>
					<LoggedIn />
					<User />
					<UserAssertion />
					<Counter />
				</Header>

				<Header>
					<Box />
				</Header>

				<Header>
					<DomRef />
					<MutableRefs />
				</Header>

				<Header>
					<Private isLoggedIn component={Profile} />
				</Header>

				<Header>
					<Lists
						items={['Shakil', 'Keya', 'Honey', 'Araf']}
						onClick={(item) => console.log(item)}
					/>

					<Lists items={[1, 2, 3, 4]} onClick={(item) => console.log(item)} />

					<Lists
						items={[
							{ name: 'Shakil', age: 23 },
							{ name: 'Keya', age: 21 },
							{ name: 'Araf', age: 8 },
						]}
						onClick={(item) => console.log(item)}
					/>
				</Header>

				<Header>
					<RandomNumber value={100} isPositive />
				</Header>

				<Header>
					<Toast postion='center' />
				</Header>

				<Header>
					<HtmlButton variant='secondary' type='submit'>
						Click Me
					</HtmlButton>

					<HtmlInput type='text' />
				</Header>
			</div>
		</ThemeProvider>
	);
};

export default App;
