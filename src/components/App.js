import React from 'react';
import unsplash from '../API/unsplash';
import ImageList from './imageList';
import SearchBar from './SearchBar';

class App extends React.Component {
	state = { images: [] };
	onSearchSumbmit = async (term) => {
		const response = await unsplash.get('/search/photos', {
			params: { query: term },
		});

		this.setState({ images: response.data.results });
	};

	render() {
		return (
			<div className='ui container' style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSumbmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
