import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

//  https://reqres.in/api/users

function App() {
	const [users, setUsers] = React.useState([]);
	const [invite, setInvites] = React.useState([]);
	const [isLoading, setLoading] = React.useState(true);
	const [searchValue, setSearchValue] = React.useState('');
	const [success, setSuccess] = React.useState(false);

	React.useEffect(() => {
		fetch('https://reqres.in/api/users')
			.then(res => res.json())
			.then(json => {
			setUsers(json.data);
		})
		.catch((err) => {
			console.warn(err);
			alert('oops failed, try again...')
		}).finally(() => setLoading(false));
		}, []);
		
		const onChangeSearchValue = (event) => {
				setSearchValue(event.target.value);
		}

		const onClickInvited = (id) =>{
			if (invite.includes(id)){
				setInvites(prev => prev.filter(_id => _id !== id));
			} else {
				setInvites((prev) => [...prev, id])
			}
		}
		
		const onClickSentInvites = () => {
			setSuccess(true)
		}


	return (
		<div className="App">
			{success ? (
				 	<Success count={invite.length}/>
					) : (
					<Users 	onChangeSearchValue={onChangeSearchValue}
							searchValue={searchValue}
							items={users}
							isLoading={isLoading}
							onClickInvited={onClickInvited}
							invite={invite}
							onClickSentInvites={onClickSentInvites} />
					)
			}
		</div>
	);
}

export default App;
